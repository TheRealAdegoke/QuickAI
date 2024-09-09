/* This is modal is used for building designs, to use this modal follow the instructions below

1 Import the TestDesignModal component on the Dashboard.jsx component located on the Dashboard folder which is the parent folder of this component

2 This component should be called below this code 
<div className="flex justify-center">
    {showDesignModal ? <DesignModal /> : <AIGenerator />}
</div>
in the Dashboard.jsx component

3 Please always make sure this import TestDesignModal from "./Test Modal/TestDesignModal" and 
<div className="flex justify-center">
    {testDesignModal && <TestDesignModal />}
</div> on the Dashboard.jsx component is commented before pushing to production

4 This component should only be used on development

Steps on how to use this component

1 First import this component on the Dashboard.jsx component

2 Let's say you are designing a Hero section the Hero section component should be called in the <main></main> so you will be able to see your design

3 To display the modal go to the DashboardContext.jsx file and set the const [testDesignModal, setTestDesignModal] = useState(true). Do not forget to set it back to false once you are done working with the TestDesignModal component

NB: <TestDesignModal/> should be completely removed from the Dashboard.jsx component before pushing to production

*/

import { useContext, useEffect, useRef, useState } from "react";
import { DashContext } from "../DashboardChecker/DashboardContext";
import testImage from "../../assets/Default-Card.jpg";
import reactElementToJSXString from "react-element-to-jsx-string";
import { RgbaColorPicker } from "react-colorful";
import {
  hexToRgba,
  rgbaToHex,
} from "../DashBoardChildren/Sites/EditAndSaveComponents/ColorUtils";

const TestDesignModal = () => {
  const {
    showDesignModal,
    heroIndex,
    navIndex,
    featuresWithCardIndex,
    featuresIndex,
    testimonialIndex,
    faqIndex,
    teamIndex,
    contactIndex,
    footerIndex,
    navComponents,
    heroComponents,
    featuresWithCardsComponent,
    featuresComponents,
    testimonialComponent,
    faqComponent,
    teamComponent,
    contactComponent,
    footerComponent,
    userInput,
    selectedIdea,
    handleUserData,
    clearDesigns,
    text,
    buttonIndex,
    isMobile,
    setIsMobile,
    backgroundStyle,
    isFocused,
    handleFocus,
    handleBlur,
    location,
    uniqueId,
    elementContent,
    handleDivClick,
    index,
    getStyle,
    getElementStyle,
    handleTextClick,
    isEdited,
  } = useContext(DashContext);
  const [clickedText, setClickedText] = useState("");
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedDiv, setSelectedDiv] = useState(null);
  const [backGroundStyle, setBackGroundStyle] = useState("");
  const [showColorPicker, setShowColorPicker] = useState(true);
  const [bg, setbg] = useState("");

  // const navElement = navComponents({
  //   text,
  //   buttonIndex,
  //   isMobile,
  // })[0];
  // const element = heroComponents({
  //   text,
  //   buttonIndex,
  //   isMobile,
  //   isFocused,
  //   handleFocus,
  //   handleBlur,
  //   location,
  // })[4];

  //  const handleTextClick = (event) => {
  //    setClickedText(event.target.innerText);
  //    setSelectedElement(event.target);
  //  };

  const handleTextareaChange = (event) => {
    const newText = event.target.value;
    setClickedText(newText);
    if (selectedElement) {
      selectedElement.innerText = newText;
    }
  };

  const handleColorClick = (color) => {
    if (selectedElement) {
      selectedElement.style.color = color;
    }
  };

  const handleFontSizeClick = (fontSize) => {
    if (selectedElement) {
      selectedElement.style.fontSize = fontSize;
    }
  };

  const handleFontWeightClick = (fontWeight) => {
    if (selectedElement) {
      selectedElement.style.fontWeight = fontWeight;
    }
  };

  const handleFontStyleClick = (fontStyle) => {
    if (selectedElement) {
      selectedElement.style.fontStyle = fontStyle;
    }
  };

  const handleFontFamilyClick = (FontFamily) => {
    if (selectedElement) {
      selectedElement.style.fontFamily = FontFamily;
    }
  };

  const handleTextAlignmentClick = (textAlign) => {
    if (selectedElement) {
      selectedElement.style.textAlign = textAlign;
    }
  };

  const handleBGColorClick = (color) => {
    if (selectedDiv) {
      setbg(color);
    }
  };

  //  const handleDivClick = (event) => {
  //    setSelectedDiv(event.currentTarget);
  //  };

  useEffect(() => {
    handleBGColorClick(backGroundStyle);
  }, [backGroundStyle]);

  useEffect(() => {
    if (!showColorPicker) {
      setSelectedDiv(null);
    }
  }, [showColorPicker]);

  return (
    <main className="bg-white w-full mt-5 max-md:mt-0 mx-10 h-[93vh] max-md:h-[89vh] max-[499px]:mx-4 overflow-scroll overflow-x-hidden pt-14 select-none">
      {/* {element} */}
      <section
        onClick={handleDivClick}
        id={`hero-section-${index + 1}-${uniqueId}`}
        style={getStyle(`hero-section-${index + 1}`, uniqueId)}
      >
        <div className="py-24 px-5 text-black">
          <div className="flex justify-center gap-10 max-lg:flex-col">
            <div
              className={`${isMobile ? "hidden" : ""} max-lg:hidden w-[50%]`}
            >
              <h1
                id={`hero-heading-${index + 1}-${uniqueId}`}
                style={getElementStyle(`hero-heading-${index + 1}`, uniqueId)}
                className={`hero-heading-${
                  index + 1
                }-${uniqueId} text-6xl font-bold max-w-[500px] break-words`}
                data-text="Heading"
                
                contentEditable={false}
                onClick={handleTextClick}
              >
                Lorem ipsum dolor sit amet.
              </h1>

              <div className="w-[85%] grid grid-cols-3 gap-4 my-10">
                <div className="bg-[rgba(0,0,0,0.5)] shadow-md h-[250px]  p-3 rounded-[8px] col-span-3">
                  <img
                    src={testImage}
                    alt={testImage}
                    className="rounded-[8px] w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[rgba(0,0,0,0.5)] shadow-md h-[200px] p-3 rounded-[8px]">
                  <img
                    src={testImage}
                    alt={testImage}
                    className="rounded-[8px] w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[rgba(0,0,0,0.5)] shadow-md h-[200px]  p-3 rounded-[8px]">
                  <img
                    src={testImage}
                    alt={testImage}
                    className="rounded-[8px] w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[rgba(0,0,0,0.5)] shadow-md h-[200px]  p-3 rounded-[8px]">
                  <img
                    src={testImage}
                    alt={testImage}
                    className="rounded-[8px] w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[rgba(0,0,0,0.5)] shadow-md h-[250px]  p-3 rounded-[8px] col-span-3">
                  <img
                    src={testImage}
                    alt={testImage}
                    className="rounded-[8px] w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div
              className={`${
                isMobile ? "max-w-[800px] w-[95%] mx-auto" : ""
              } max-lg:max-w-[800px] max-lg:w-[95%] max-lg:mx-auto w-[50%]`}
            >
              <img
                src={testImage}
                alt={testImage}
                className={`${
                  isMobile ? "max-w-[800px] w-[95%] h-[400px]" : ""
                } block max-lg:w-[95%] w-full h-[600px] max-lg:h-[400px] max-lg:max-w-[800px]`}
              />
              <p
                id={`hero-paragraph-${index + 1}-${uniqueId}`}
                style={getElementStyle(`hero-paragraph-${index + 1}`, uniqueId)}
                className={`hero-paragraph-${index + 1}-${uniqueId} ${
                  isMobile ? "max-w-[400px]" : ""
                } my-5 max-lg:max-w-[400px] break-words`}
                data-text="Type a paragraph"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloribus asperiores? Dolorem perspiciatis eum tempora officia, harum incidunt.</p>
              {/* {buttonIndex !== undefined && buttonElement} */}
            </div>
          </div>
        </div>
      </section>
      ,
    </main>
  );
};

export default TestDesignModal;

export const TestColorPickerComponent = ({ setBackGroundStyle }) => {
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
