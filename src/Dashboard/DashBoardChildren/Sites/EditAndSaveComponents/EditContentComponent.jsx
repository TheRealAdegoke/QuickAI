import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

const EditContentComponent = () => {
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
    "#8e44ad", // Dark Purple
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
  const [colorType, setColorType] = useState(true);
  const [styleModal, setStyleModal] = useState({
    colorModal: true,
    fontSizeModal: false,
    fontWeightModal: false,
    fontStyleModal: false,
    fontFamilyModal: false,
    alignModal: false,
  });

  return (
    <>
      <div>
        <textarea
          className="bg-[rgb(42,42,47)] text-white h-[70px] min-h-[70px] max-h-[70px] w-[95%] mx-auto ml-2 outline-none px-2 py-1 rounded-md"
          placeholder="Typing..."
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

            <div
              className={`${
                styleModal.colorModal ||
                styleModal.fontSizeModal ||
                styleModal.fontWeightModal ||
                styleModal.fontStyleModal ||
                styleModal.fontFamilyModal ||
                styleModal.alignModal
                  ? "block"
                  : "hidden"
              }`}
            >
              <div className="bg-[rgb(36,37,40)] rounded-[5px] px-2 pb-2 ">
                <IoIosClose
                  className=" float-right text-3xl pb-1 block cursor-pointer"
                  onClick={() => {
                    setStyleModal({ colorModal: false });
                  }}
                />
                <div className={`w-full flex  justify-between`}>
                  <div>
                    {colorType ? (
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
                      setColorType(!colorType);
                    }}
                  >
                    {colorType ? "HEX" : "RGB"}
                  </button>
                </div>
              </div>

              <div className="color-container my-3 bg-[rgb(36,37,40)] rounded-[5px] px-2 py-4 w-full flex gap-4 justify-center flex-wrap">
                {textColor.map((color) => (
                  <button
                    key={color}
                    className="size-4 rounded-full"
                    style={{ backgroundColor: color }}
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
            >
              font size
            </button>
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
            >
              font weight
            </button>
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
            >
              font style
            </button>
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
            >
              font family
            </button>
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
            >
              align
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditContentComponent;
