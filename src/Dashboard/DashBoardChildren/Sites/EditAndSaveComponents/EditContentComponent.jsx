import React, { useContext, useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { Slider, ConfigProvider } from "antd";
import { DashContext } from "../../../DashboardChecker/DashboardContext";

const EditContentComponent = () => {
  const {
    clickedText,
    handleTextareaChange,
    handleColorClick,
    handleFontSizeClick,
    handleFontWeightClick,
    handleFontStyleClick,
    handleFontFamilyClick,
    handleTextAlignmentClick,
  } = useContext(DashContext);
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

  useEffect(() => {
    setFontValue(value)
    handleFontSizeClick(btn.fontSizeType ? `${fontValue}px` : `${fontValue}rem`);
  }, [value])

  return (
    <>
      <div>
        <textarea
          className="bg-[rgb(42,42,47)] text-white h-[70px] min-h-[70px] max-h-[70px] w-[95%] mx-auto ml-2 outline-none px-2 py-1 rounded-md"
          placeholder="Typing..."
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
                        />
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <div className="flex gap-1 flex-col justify-center items-center">
                          <input
                            type="text"
                            className="w-[40px] h-[25px] text-center bg-[rgb(37,39,45)] border-[1px] rounded-[3px] border-[rgba(145,151,155,0.65)] uppercase outline-none"
                          />
                          <span>R</span>
                        </div>

                        <div className="flex gap-1 flex-col justify-center items-center">
                          <input
                            type="text"
                            className="w-[40px] h-[25px] text-center bg-[rgb(37,39,45)] border-[1px] rounded-[3px] border-[rgba(145,151,155,0.65)] uppercase outline-none"
                          />
                          <span>G</span>
                        </div>

                        <div className="flex gap-1 flex-col justify-center items-center">
                          <input
                            type="text"
                            className="w-[40px] h-[25px] text-center bg-[rgb(37,39,45)] border-[1px] rounded-[3px] border-[rgba(145,151,155,0.65)] uppercase outline-none"
                          />
                          <span>B</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    className="w-[50px] text-center bg-transparent border-[1px] rounded-[3px] border-[rgb(145,151,155)] text-[rgb(145,151,155)] text-sm bg-[rgb(37,39,45)] font-medium flex justify-center items-center h-[25px]"
                    onClick={() => {
                      setBtn((prevState) => ({
                        colorType: !prevState.colorType,
                      }));
                    }}
                  >
                    {btn.colorType ? "HEX" : "RGB"}
                  </button>
                </div>
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
      </div>
    </>
  );
};

export default EditContentComponent;
