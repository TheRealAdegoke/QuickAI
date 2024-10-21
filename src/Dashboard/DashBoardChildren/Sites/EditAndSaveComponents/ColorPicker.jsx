import React, { useEffect, useState } from "react";
import { RgbaColorPicker } from "react-colorful";
import { hexToRgba, rgbaToHex } from "./ColorUtils";

export const ColorPickerComponent = ({
  setBackGroundStyle,
  lastClickedDivRef,
  lastClickedCardRef,
  lastClickedButtonRef,
  setSelectedDiv,
  selectedOption,
}) => {
  const [isActive, setIsActive] = useState(0);
  const [isGradient, setIsGradient] = useState(false);
  const [color1, setColor1] = useState({ r: 255, g: 255, b: 255, a: 1 });
  const [color2, setColor2] = useState({ r: 255, g: 255, b: 255, a: 1 });
  const [hex1, setHex1] = useState("#ffffff");
  const [hex2, setHex2] = useState("#ffffff");
  const [inputValue, setInputValue] = useState("ffffff");

  useEffect(() => {
    if (isActive === 0) {
      setHex1(rgbaToHex(color1));
    } else {
      setHex2(rgbaToHex(color2));
    }
  }, [color1, color2, isActive]);

  useEffect(() => {
    if (isActive === 0) {
      setInputValue(hex1.slice(1)); // remove '#' for input value
    } else {
      setInputValue(hex2.slice(1));
    }
  }, [hex1, hex2, isActive]);

  const handleColorChange = (newColor) => {
    if (selectedOption === "background") {
      setSelectedDiv({ sectionBG: lastClickedDivRef.current });
    } else if (selectedOption === "card") {
      setSelectedDiv({ card: lastClickedCardRef.current });
    } else {
      setSelectedDiv({ button: lastClickedButtonRef.current });
    }
    if (isActive === 0) {
      setColor1(newColor);
    } else {
      setColor2(newColor);
    }
  };

  const handleHexChange = (e) => {
    const newHex = e.target.value;
    const sanitizedHex = newHex.replace(/[^a-fA-F0-9]/g, "").slice(0, 6);
    setInputValue(sanitizedHex);

    if (/^[0-9A-Fa-f]{6}$/.test(sanitizedHex)) {
      if (isActive === 0) {
        setHex1(`#${sanitizedHex}`);
        setColor1(hexToRgba(`#${sanitizedHex}`));
      } else {
        setHex2(`#${sanitizedHex}`);
      }
    }
  };

  useEffect(() => {
    const newBackground = isGradient
      ? `linear-gradient(90deg, ${hex1} 0%, ${hex2} 100%)`
      : hex1;
    setBackGroundStyle(newBackground);
  }, [isGradient, hex1, hex2]);

  return (
    <section className="bg-[rgb(36,37,40)] py-5 rounded-[8px] px-2">
      <div
        className={`${
          isGradient ? "block" : "hidden"
        } flex justify-between mb-2 max-w-[200px] mx-auto`}
      >
        <button
          className={`${
            isActive === 0 ? "border-[2px]" : "border-[1px]"
          } w-[30px] h-[30px] flex justify-center items-center`}
          onClick={() => {
            setIsActive(0);
          }}
        >
          <span
            className="w-[20px] h-[20px]"
            style={{ backgroundColor: hex1 }}
          ></span>
        </button>

        <button
          className={`${
            isActive === 1 ? "border-[2px]" : "border-[1px]"
          } w-[30px] h-[30px] flex justify-center items-center`}
          onClick={() => {
            setIsActive(1);
          }}
        >
          <span
            className="w-[20px] h-[20px]"
            style={{ backgroundColor: hex2 }}
          ></span>
        </button>
      </div>

      <div className="flex justify-between mb-2 max-w-[200px] mx-auto text-[rgb(145,151,155)] font-medium bg-[rgb(19,24,32)] px-3 py-1 rounded-[5px] text-sm">
        <button
          className={`${
            isGradient ? "" : "bg-[rgb(36,37,40)] rounded-[5px]"
          } px-2 py-1`}
          onClick={() => {
            setIsGradient(false);
            setIsActive(0);
          }}
        >
          Color
        </button>
        <button
          className={`${
            isGradient ? "bg-[rgb(36,37,40)] rounded-[5px]" : ""
          } px-2 py-1`}
          onClick={() => {
            setIsGradient(true);
          }}
        >
          Gradient
        </button>
      </div>

      <div className="custom-layout example flex justify-center">
        <RgbaColorPicker
          color={isActive === 0 ? color1 : color2}
          onChange={handleColorChange}
        />
      </div>

      <div className="my-4 flex justify-between px-2 max-w-[240px] mx-auto">
        <div className="text-[rgb(145,151,155)] font-medium flex gap-1">
          <span className="text-xl">#</span>
          <input
            type="text"
            className="w-[70px] text-center bg-[rgb(37,39,45)] border-[1px] rounded-[3px] border-[rgba(145,151,155,0.65)] uppercase"
            value={inputValue}
            onChange={handleHexChange}
          />
        </div>

        <div className="w-[50px] text-center bg-transparent border-[1px] rounded-[3px] border-[rgb(145,151,155)] text-[rgb(145,151,155)] text-sm bg-[rgb(37,39,45)] font-medium flex justify-center items-center">
          <p>HEX</p>
        </div>
      </div>
    </section>
  );
};

