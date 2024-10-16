import React, { useContext, useEffect, useRef, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { Slider, ConfigProvider } from "antd";
import { DashContext } from "../../../DashboardChecker/DashboardContext";
import Demo from "../../../../assets/QuickUIDesign.png";
import Cookies from "js-cookie";
import { message } from "antd";
import { axiosInstance } from "../../../../Pages/AuthPages/AuthChecker/axiosInstance";
import { ImSpinner6 } from "react-icons/im";
import { vectors } from "../../../Arrays/Arrays";

const EditContentComponent = () => {
  const {
    userData,
    clickedText,
    handleTextareaChange,
    handleColorClick,
    handleFontSizeClick,
    handleFontWeightClick,
    handleFontStyleClick,
    handleFontFamilyClick,
    handleTextAlignmentClick,
    handleUserData,
    selectedImage,
    handleGalleryImageClick,
    text,
  } = useContext(DashContext);
  const [colorType, setColorType] = useState(true); // true for HEX, false for RGB
  const [customColor, setCustomColor] = useState({
    hex: "",
    r: "",
    g: "",
    b: "",
  });
  const textColor = [
    "#ffffff", // White
    "#000000", // Black
    "#91979b", // Medium Gray
    "#900c3f", // Dark Red
    "#581845", // Dark Purple
    "#1abc9c", // Turquoise
    "#3498db", // Light Blue
    "#9b59b6", // Purple
    "#f1c40f", // Yellow
    "#e67e22", // Orange
    "#e74c3c", // Red
    "#ecf0f1", // Light Gray
    "#95a5a6", // Gray
    "#34495e", // Dark Blue
    "#2c3e50", // Very Dark Blue
    "#16a085", // Greenish Blue
    "#27ae60", // Green
    "#2980b9", // Blue
    "#2ecc71", // Light Green
    "#d35400", // Dark Orange
    "#c0392b", // Dark Red
    "#bdc3c7", // Light Gray
    "#7f8c8d", // Gray
    "#22313f", // Very Dark Blue
    "#6c7a89", // Gray
    "#3a539b", // Blue
    "#96281b", // Dark Red
    "#1f3a93", // Dark Blue
    "#4b77be", // Blue
    "#26a65b", // Green
    "#8e44ad", // Dark Purple
    "#2abb9b", // Light Green
    "#f27935", // Orange
    "#d91e18", // Red
    "#be90d4", // Light Purple
    "#913d88", // Purple
    "#f62459", // Pink
    "#db0a5b", // Dark Pink
    "#e4f1fe", // Very Light Blue
    "#c5eff7", // Light Blue
    "#d5d6d2", // Light Gray
  ];
  const [btn, setBtn] = useState({
    colorType: true,
    fontSizeType: true,
    fontWeightType: false,
    fontStyleType: false,
    fontFamilyType: false,
    alignType: false,
  });
  const [value, setValue] = useState(2);
  const [fontValue, setFontValue] = useState(null);
  const [styleModal, setStyleModal] = useState({
    colorModal: false,
    fontSizeModal: false,
    fontWeightModal: false,
    fontStyleModal: false,
    fontFamilyModal: false,
    alignModal: false,
  });
  const [displayImageGallery, setDisplayImageGallery] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageGalleryType, setImageGalleryType] = useState({
    uploads: true,
    vectors: false,
    AI: false,
  });
  const fileInputRef = useRef();

  const formatter = (value) => {
    const formattedValue = value
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${formattedValue}`;
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    // Allow the input to be cleared and typed anew, and ensure the value is at least 2
    if (
      newValue === "" ||
      (!isNaN(newValue) && newValue.trim() !== "" && Number(newValue) >= 2)
    ) {
      setValue(newValue === "" ? "" : Number(newValue));
    }
  };

  const handleCustomColorChange = (e, type) => {
    let value = e.target.value;

    if (type === "hex") {
      // Remove any non-alphanumeric characters
      value = value.replace(/[^a-fA-F0-9]/g, "");

      // Limit to 6 characters
      value = value.slice(0, 6);
    } else {
      // For RGB inputs, only allow numbers and limit to 3 characters
      value = value.replace(/\D/g, "").slice(0, 3);

      // Ensure the value is between 0 and 255
      value = Math.min(255, Math.max(0, parseInt(value) || 0)).toString();
    }

    setCustomColor((prev) => ({ ...prev, [type]: value }));
  };

  const handleCustomColorSubmit = () => {
    let color;
    if (colorType) {
      // HEX
      color = customColor.hex.startsWith("#")
        ? customColor.hex
        : `#${customColor.hex}`;
    } else {
      // RGB
      color = `rgb(${customColor.r}, ${customColor.g}, ${customColor.b})`;
    }
    handleColorClick(color);
  };

  useEffect(() => {
    setFontValue(value);
    handleFontSizeClick(
      btn.fontSizeType ? `${fontValue}px` : `${fontValue}rem`
    );
  }, [value]);

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    const maxFileSize = 3 * 1024 * 1024; // 3 MB in bytes

    // Check if the file is selected and its size
    if (file && file.size > maxFileSize) {
      setSelectedFile(null); // Clear the file selection
      setPreviewUrl(null); // Clear preview
      message.warning("File size should not exceed 3 MB."); // Display warning
      return;
    }

    setSelectedFile(file); // Set the selected file in state

    // Check if the file is an image
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader(); // Create a new FileReader instance

      // When the file is read, set the preview URL
      reader.onloadend = () => {
        setPreviewUrl(reader.result); // Set the preview URL (base64)
      };

      // Read the file as a Data URL (base64 encoded)
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null); // Clear preview if the file is not an image
      message.warning(
        "Please select a valid image file (jpeg, png, jpg, webp)."
      );
    }
  };


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      message.warning("Please select a file before uploading.");
      return;
    }

    // Create FormData object to send the file
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const accessToken = Cookies.get("accessToken");
      setUploading(true);

      // Send file to backend using Axios
      const response = await axiosInstance.post("/auth/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      // Show success message and set the uploaded image URL
      message.success(response.data.message);
      handleUserData();
      setPreviewUrl(null);
    } catch (error) {
      console.error("Error uploading image:", error);
      message.error(
        error.response?.data?.error || "An error occurred during upload."
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <div>
        <textarea
          className="bg-[rgb(42,42,47)] text-white h-[70px] min-h-[70px] max-h-[70px] w-[95%] mx-auto ml-2 outline-none px-2 py-1 rounded-md"
          placeholder="Click on a text to edit"
          value={clickedText}
          onChange={handleTextareaChange}
        ></textarea>

        <div className="content-style-container text-[rgb(145,151,155)] font-medium text-sm flex gap-1 justify-center my-1 flex-wrap">
          <div className="w-[95%]">
            <button
              className={`${
                styleModal.colorModal ||
                styleModal.fontSizeModal ||
                styleModal.fontWeightModal ||
                styleModal.fontStyleModal ||
                styleModal.fontFamilyModal ||
                styleModal.alignModal
                  ? "hidden"
                  : "block"
              } bg-[rgb(36,37,40)] rounded-[5px] px-2 py-1 w-full text-nowrap`}
              onClick={() => {
                setStyleModal({ colorModal: true });
              }}
            >
              color
            </button>

            <div className={`${styleModal.colorModal ? "block" : "hidden"}`}>
              <div className="bg-[rgb(36,37,40)] rounded-[5px] px-2 pb-2 ">
                <IoIosClose
                  className=" float-right text-3xl pb-1 block cursor-pointer"
                  onClick={() => {
                    setStyleModal({ colorModal: false });
                  }}
                />
                <div className={`w-full flex  justify-between`}>
                  <div>
                    {btn.colorType ? (
                      <div className="flex gap-1 items-center">
                        <span>#</span>
                        <input
                          type="text"
                          className="w-[80px] h-[25px] text-center bg-[rgb(37,39,45)] border-[1px] rounded-[3px] border-[rgba(145,151,155,0.65)] uppercase outline-none"
                          value={customColor.hex}
                          onChange={(e) => handleCustomColorChange(e, "hex")}
                        />
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        {["r", "g", "b"].map((color) => (
                          <div
                            key={color}
                            className="flex gap-1 flex-col justify-center items-center"
                          >
                            <input
                              type="text"
                              className="w-[40px] h-[25px] text-center bg-[rgb(37,39,45)] border-[1px] rounded-[3px] border-[rgba(145,151,155,0.65)] uppercase outline-none"
                              value={customColor[color]}
                              onChange={(e) =>
                                handleCustomColorChange(e, color)
                              }
                            />
                            <span>{color.toUpperCase()}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <button className="w-[50px] text-center bg-transparent border-[1px] rounded-[3px] border-[rgb(145,151,155)] text-[rgb(145,151,155)] text-sm bg-[rgb(37,39,45)] font-medium flex justify-center items-center h-[25px]">
                    HEX
                  </button>
                </div>
                <button
                  className="mt-2 w-full bg-[rgb(37,39,45)] border-[1px] rounded-[3px] border-[rgb(145,151,155)] text-[rgb(145,151,155)] text-sm font-medium py-1"
                  onClick={handleCustomColorSubmit}
                >
                  Apply Custom Color
                </button>
              </div>

              <div className="color-container my-3 bg-[rgb(36,37,40)] rounded-[5px] px-2 py-4 w-full flex gap-4 justify-center flex-wrap">
                {textColor.map((color) => (
                  <button
                    key={color}
                    className="size-4 rounded-full"
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      handleColorClick(color);
                    }}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          <div className="w-[95%]">
            <button
              className={`${
                styleModal.colorModal ||
                styleModal.fontSizeModal ||
                styleModal.fontWeightModal ||
                styleModal.fontStyleModal ||
                styleModal.fontFamilyModal ||
                styleModal.alignModal
                  ? "hidden"
                  : "block"
              } bg-[rgb(36,37,40)] rounded-[5px] px-2 py-1 w-full text-nowrap`}
              onClick={() => {
                setStyleModal({ fontSizeModal: true });
              }}
            >
              font size
            </button>

            <div className={`${styleModal.fontSizeModal ? "block" : "hidden"}`}>
              <div className="bg-[rgb(36,37,40)] rounded-[5px] px-2 pb-2">
                <div className="flex justify-end">
                  <IoIosClose
                    className="text-3xl pb-1 block cursor-pointer"
                    onClick={() => {
                      setStyleModal({ fontSizeType: false });
                    }}
                  />
                </div>

                <div className="flex gap-2 items-center justify-center">
                  <input
                    type="text"
                    className="w-[40px]  text-center bg-[rgb(37,39,45)] border-[1px] rounded-[3px] border-[rgba(145,151,155,0.65)] uppercase outline-none"
                    value={value}
                    onChange={() => {
                      handleInputChange();
                    }}
                  />

                  <button
                    className="w-[50px] text-center bg-transparent border-[1px] rounded-[3px] border-[rgb(145,151,155)] text-[rgb(145,151,155)] text-sm bg-[rgb(37,39,45)] font-medium flex justify-center items-center "
                    onClick={() => {
                      setBtn((prevState) => ({
                        fontSizeType: !prevState.fontSizeType,
                      }));
                    }}
                  >
                    {btn.fontSizeType ? "px" : "rem"}
                  </button>
                </div>

                <div className="mt-5">
                  <ConfigProvider
                    theme={{
                      token: {
                        colorBgSpotlight: "rgba(100, 199, 255, 0.5)",
                        colorTextLightSolid: "rgba(0, 31, 36, 1)",
                        fontSize: 20,
                      },
                    }}
                  >
                    <Slider
                      range
                      defaultValue={[2, 100]}
                      value={value}
                      min={2}
                      max={100}
                      onChange={setValue}
                      tooltip={{ open: false, formatter, zIndex: 0 }}
                    />
                  </ConfigProvider>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[95%]">
            <button
              className={`${
                styleModal.colorModal ||
                styleModal.fontSizeModal ||
                styleModal.fontWeightModal ||
                styleModal.fontStyleModal ||
                styleModal.fontFamilyModal ||
                styleModal.alignModal
                  ? "hidden"
                  : "block"
              } bg-[rgb(36,37,40)] rounded-[5px] px-2 py-1 w-full text-nowrap`}
              onClick={() => {
                setStyleModal({ fontWeightModal: true });
              }}
            >
              font weight
            </button>

            <div
              className={`${styleModal.fontWeightModal ? "block" : "hidden"}`}
            >
              <div className="bg-[rgb(36,37,40)] rounded-[5px] px-2 pb-2">
                <div className="flex justify-end">
                  <IoIosClose
                    className="text-3xl pb-1 block cursor-pointer"
                    onClick={() => {
                      setStyleModal({ fontWeightModal: false });
                    }}
                  />
                </div>

                <div className="flex flex-wrap gap-2 items-center justify-center">
                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() => handleFontWeightClick(100)}
                  >
                    Thin
                  </button>

                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() => handleFontWeightClick(200)}
                  >
                    extra-light
                  </button>

                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() => handleFontWeightClick(300)}
                  >
                    Light
                  </button>

                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() => handleFontWeightClick(400)}
                  >
                    Normal
                  </button>

                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() => handleFontWeightClick(500)}
                  >
                    Medium
                  </button>

                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() => handleFontWeightClick(600)}
                  >
                    Semi-bold
                  </button>

                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() => handleFontWeightClick(700)}
                  >
                    Bold
                  </button>

                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() => handleFontWeightClick(800)}
                  >
                    Extra-bold
                  </button>

                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() => handleFontWeightClick(900)}
                  >
                    Black
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[95%]">
            <button
              className={`${
                styleModal.colorModal ||
                styleModal.fontSizeModal ||
                styleModal.fontWeightModal ||
                styleModal.fontStyleModal ||
                styleModal.fontFamilyModal ||
                styleModal.alignModal
                  ? "hidden"
                  : "block"
              } bg-[rgb(36,37,40)] rounded-[5px] px-2 py-1 w-full text-nowrap`}
              onClick={() => {
                setStyleModal({ fontStyleModal: true });
              }}
            >
              font style
            </button>

            <div
              className={`${styleModal.fontStyleModal ? "block" : "hidden"}`}
            >
              <div className="bg-[rgb(36,37,40)] rounded-[5px] px-2 pb-2">
                <div className="flex justify-end">
                  <IoIosClose
                    className="text-3xl pb-1 block cursor-pointer"
                    onClick={() => {
                      setStyleModal({ fontStyleModal: false });
                    }}
                  />
                </div>

                <div className="flex flex-wrap gap-2 items-center justify-center">
                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() => handleFontStyleClick("italic")}
                  >
                    Italic
                  </button>
                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() => handleFontStyleClick("normal")}
                  >
                    non-italic
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[95%]">
            <button
              className={`${
                styleModal.colorModal ||
                styleModal.fontSizeModal ||
                styleModal.fontWeightModal ||
                styleModal.fontStyleModal ||
                styleModal.fontFamilyModal ||
                styleModal.alignModal
                  ? "hidden"
                  : "block"
              } bg-[rgb(36,37,40)] rounded-[5px] px-2 py-1 w-full text-nowrap`}
              onClick={() => {
                setStyleModal({ fontFamilyModal: true });
              }}
            >
              font family
            </button>

            <div
              className={`${styleModal.fontFamilyModal ? "block" : "hidden"}`}
            >
              <div className="bg-[rgb(36,37,40)] rounded-[5px] px-2 pb-2">
                <div className="flex justify-end">
                  <IoIosClose
                    className="text-3xl pb-1 block cursor-pointer"
                    onClick={() => {
                      setStyleModal({ fontFamilyModal: false });
                    }}
                  />
                </div>

                <div className="flex flex-wrap gap-2 items-center justify-center">
                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() =>
                      handleFontFamilyClick(
                        "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
                      )
                    }
                  >
                    Gill
                  </button>

                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() =>
                      handleFontFamilyClick(
                        "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif "
                      )
                    }
                  >
                    Frank
                  </button>

                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() =>
                      handleFontFamilyClick(
                        "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
                      )
                    }
                  >
                    Lucida
                  </button>

                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() =>
                      handleFontFamilyClick(
                        "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                      )
                    }
                  >
                    Segoe
                  </button>

                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() =>
                      handleFontFamilyClick("'Times New Roman', Times, serif")
                    }
                  >
                    Times
                  </button>

                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() =>
                      handleFontFamilyClick(
                        "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
                      )
                    }
                  >
                    Trebuc
                  </button>

                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() =>
                      handleFontFamilyClick("Arial, Helvetica, sans-serif")
                    }
                  >
                    Arial
                  </button>

                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() =>
                      handleFontFamilyClick(
                        "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
                      )
                    }
                  >
                    Cambr
                  </button>

                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() =>
                      handleFontFamilyClick(
                        "Georgia, 'Times New Roman', Times, serif"
                      )
                    }
                  >
                    Georg
                  </button>

                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() =>
                      handleFontFamilyClick(
                        "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
                      )
                    }
                  >
                    Impac
                  </button>

                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() =>
                      handleFontFamilyClick(
                        "Verdana, Geneva, Tahoma, sans-serif"
                      )
                    }
                  >
                    Verda
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[95%]">
            <button
              className={`${
                styleModal.colorModal ||
                styleModal.fontSizeModal ||
                styleModal.fontWeightModal ||
                styleModal.fontStyleModal ||
                styleModal.fontFamilyModal ||
                styleModal.alignModal
                  ? "hidden"
                  : "block"
              } bg-[rgb(36,37,40)] rounded-[5px] px-2 py-1 w-full text-nowrap`}
              onClick={() => {
                setStyleModal({ alignModal: true });
              }}
            >
              align
            </button>

            <div className={`${styleModal.alignModal ? "block" : "hidden"}`}>
              <div className="bg-[rgb(36,37,40)] rounded-[5px] px-2 pb-2">
                <div className="flex justify-end">
                  <IoIosClose
                    className="text-3xl pb-1 block cursor-pointer"
                    onClick={() => {
                      setStyleModal({ alignModal: false });
                    }}
                  />
                </div>

                <div className="flex flex-wrap gap-2 items-center justify-center">
                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() => handleTextAlignmentClick("left")}
                  >
                    Left
                  </button>

                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() => handleTextAlignmentClick("right")}
                  >
                    Right
                  </button>

                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() => handleTextAlignmentClick("center")}
                  >
                    Center
                  </button>

                  <button
                    className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
                    onClick={() => handleTextAlignmentClick("justify")}
                  >
                    Justify
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <button
            className={`bg-[rgb(36,37,40)] rounded-[5px] mt-10 px-2 py-2 w-full text-[rgb(145,151,155)] font-medium text-sm flex justify-between items-center`}
            onClick={() => {
              setDisplayImageGallery(true);
            }}
          >
            <span>Picture </span>
            <span>
              {selectedImage === "" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  fill="currentColor"
                >
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.88.97-4.43 2.79-.18.58.26 1.17.87 1.17h.2c.41 0 .74-.29.88-.67.32-.89 1.27-1.5 2.3-1.28.95.2 1.65 1.13 1.57 2.1-.1 1.34-1.62 1.63-2.45 2.88 0 .01-.01.01-.01.02-.01.02-.02.03-.03.05-.09.15-.18.32-.25.5-.01.03-.03.05-.04.08-.01.02-.01.04-.02.07-.12.34-.2.75-.2 1.25h2c0-.42.11-.77.28-1.07.02-.03.03-.06.05-.09.08-.14.18-.27.28-.39.01-.01.02-.03.03-.04.1-.12.21-.23.33-.34.96-.91 2.26-1.65 1.99-3.56-.24-1.74-1.61-3.21-3.35-3.47z"></path>
                </svg>
              ) : (
                <img
                  className="w-[40px] h-[30px] object-cover"
                  src={selectedImage}
                  alt="Selected"
                />
              )}
            </span>
          </button>

          <div
            className={`${
              displayImageGallery ? "block" : "hidden"
            } w-[500px] h-[400px] bg-[rgb(36,37,40)] absolute left-[100%] bottom-[-4vw] z-[45] border-[rgba(255,255,255,0.5)] border-[1px] pt-2 rounded-[5px]`}
          >
            <div className="flex justify-end pr-5 mb-3 text-2xl">
              <button
                className="cursor-pointer text-[rgb(145,151,155)]"
                onClick={() => {
                  setDisplayImageGallery(false);
                }}
              >
                <IoIosClose />
              </button>
            </div>

            <div className="border-[rgba(255,255,255,0.5)] border-b-[1px] pb-2 px-2 flex justify-evenly">
              <button
                className={`${
                  imageGalleryType.uploads
                    ? "bg-[rgb(146,146,148)] text-[rgba(0,0,0)]"
                    : "text-[rgb(145,151,155)]"
                } font-medium text-sm px-8 py-1`}
                onClick={() => {
                  setImageGalleryType({ uploads: true });
                }}
              >
                Uploads
              </button>
              <button
                className={`${
                  imageGalleryType.vectors
                    ? "bg-[rgb(146,146,148)] text-[rgba(0,0,0)]"
                    : "text-[rgb(145,151,155)]"
                } font-medium text-sm px-8 py-1`}
                onClick={() => {
                  setImageGalleryType({ vectors: true });
                }}
              >
                Vectors
              </button>
              <button
                className={`${
                  imageGalleryType.AI
                    ? "bg-[rgb(146,146,148)] text-[rgba(0,0,0)]"
                    : "text-[rgb(145,151,155)]"
                } font-medium text-sm px-8 py-1`}
                onClick={() => {
                  setImageGalleryType({ AI: true });
                }}
              >
                AI Images
              </button>
            </div>

            {previewUrl && (
              <div
                className={`${
                  displayImageGallery ? "block" : "hidden"
                } w-[500px] h-[400px] bg-[rgb(36,37,40)] absolute bottom-[0vw] z-[45] border-[rgba(255,255,255,0.5)] border-[1px] pt-2 rounded-[5px]`}
              >
                <div className="flex">
                  <button
                    className="block text-[rgba(0,0,0,0.8)] font-medium text-sm bg-white w-[150px] mx-auto py-1 mb-3"
                    onClick={() => {
                      setPreviewUrl(null);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="block text-[rgba(0,0,0,0.8)] font-medium text-sm bg-white w-[150px] mx-auto py-1 mb-3"
                    onClick={handleSubmit}
                    disabled={uploading}
                  >
                    {uploading ? (
                      <div>
                        <ImSpinner6 className="animate-spin text-black block mx-auto" />
                      </div>
                    ) : (
                      "Save"
                    )}
                  </button>
                </div>
                <img
                  src={previewUrl}
                  alt="Selected"
                  className="block w-[80%] h-[80%] mx-auto object-cover"
                />
              </div>
            )}

            {imageGalleryType.uploads && (
              <div className="default h-[83%] relative">
                <div className="flex justify-center gap-4 flex-wrap px-6 max-h-[87%] overflow-y-scroll">
                  {userData.imageGallery &&
                    userData.imageGallery.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={image}
                        className="block w-[50px] h-[50px] object-cover cursor-pointer my-2"
                        onClick={() => {
                          handleGalleryImageClick(image);
                        }}
                      />
                    ))}
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-[-2px] w-[80%]">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    className="hidden"
                  />
                  <button
                    type="button"
                    className={`${
                      userData.status === "free" && userData.trial === 0
                        ? " opacity-50 cursor-not-allowed"
                        : ""
                    } block text-[rgba(0,0,0,0.8)] font-medium text-sm bg-white w-full mx-auto py-1`}
                    onClick={() => fileInputRef.current.click()}
                    disabled={
                      userData.status === "free" && userData.trial === 0
                    }
                  >
                    Upload File
                  </button>
                </div>
              </div>
            )}

            {imageGalleryType.vectors && (
              <div className="default h-[80%] overflow-y-scroll relative">
                <div className="flex justify-center gap-4 flex-wrap px-6 relative">
                  {vectors.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={image}
                      className={`${
                        userData.status === "free" && userData.trial === 0
                          ? "pointer-events-none"
                          : ""
                      } block w-[50px] h-[50px] object-cover cursor-pointer my-2`}
                      onClick={() => {
                        handleGalleryImageClick(
                          userData.status === "free" && userData.trial === 0
                            ? null
                            : image
                        );
                      }}
                    />
                  ))}
                  {userData.status === "free" && userData.trial === 0 && (
                    <div
                      className={`${
                        userData.status === "free" && userData.trial === 0
                          ? "backdrop-blur"
                          : ""
                      } w-full h-full absolute top-0`}
                    ></div>
                  )}
                </div>
              </div>
            )}

            {imageGalleryType.AI && (
              <div className="default h-[80%] overflow-y-scroll relative">
                <div className="flex justify-center gap-4 flex-wrap px-6 relative">
                  {text.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={image}
                      className={`${
                        userData.status === "free" && userData.trial === 0
                          ? "pointer-events-none"
                          : ""
                      } block w-[50px] h-[50px] object-cover cursor-pointer my-2`}
                      onClick={() => {
                        handleGalleryImageClick(
                          userData.status === "free" && userData.trial === 0
                            ? null
                            : image
                        );
                      }}
                    />
                  ))}
                  {userData.status === "free" && userData.trial === 0 && (
                    <div
                      className={`${
                        userData.status === "free" && userData.trial === 0
                          ? "backdrop-blur"
                          : ""
                      } w-full h-full absolute top-0`}
                    ></div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditContentComponent;
