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

{
  /* <section
      onClick={handleDivClick}
      id={`features-section-${index + 1}-${uniqueId}`}
      style={getStyle(`features-section-${index + 1}`, uniqueId)}
    >
      <div className="text-black py-32 max-w-[1000px] mx-auto">
        <div className="flex flex-col justify-center items-center text-center">
          <h1
            id={`features-heading-${index + 1}-${uniqueId}`}
            style={getElementStyle(`features-heading-${index + 1}`, uniqueId)}
            className={`features-heading-${
              index + 1
            }-${uniqueId} text-3xl font-bold my-2 text-center `}
            data-text="Heading"
            data-uses-dangerously-set-inner-html="true"
            contentEditable={false}
            onClick={handleTextClick}
            dangerouslySetInnerHTML={{
              __html: isEdited[`features-heading-${index + 1}-${uniqueId}`]
                ? elementContent[`features-heading-${index + 1}-${uniqueId}`]
                : elementContent[`features-heading-${index + 1}-${uniqueId}`] ||
                  text.featureHeader[1],
            }}
          ></h1>
          <p
            id={`features-paragraph-${index + 1}-${uniqueId}`}
            style={getElementStyle(`features-paragraph-${index + 1}`, uniqueId)}
            className={`features-paragraph-${index + 1}-${uniqueId}`}
            data-text="Type a paragraph"
            data-uses-dangerously-set-inner-html="true"
            contentEditable={false}
            onClick={handleTextClick}
            dangerouslySetInnerHTML={{
              __html: isEdited[`features-paragraph-${index + 1}-${uniqueId}`]
                ? elementContent[`features-paragraph-${index + 1}-${uniqueId}`]
                : elementContent[
                    `features-paragraph-${index + 1}-${uniqueId}`
                  ] || text.description,
            }}
          ></p>
        </div>

        <div
          className={`${
            isMobile ? "flex-col" : ""
          } my-10 flex flex-wrap max-sm:flex-col gap-8`}
        >
          <div
            id={`features-section-card-${index + 1}-${uniqueId}`}
            className={`${
              isMobile ? "w-[45%]" : ""
            } flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl`}
            onClick={handleCardClick}
            style={getStyle(`features-section-card-${index + 1}`, uniqueId)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="um-icon _92496331"
              fill="currentColor"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path>
            </svg>
            <h2
              id={`features-sub-heading-text-1-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `features-sub-heading-${index + 1}`,
                uniqueId
              )}
              className={`features-sub-heading-${
                index + 1
              }-${uniqueId} font-semibold `}
              data-text="Heading"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[
                  `features-sub-heading-text-1-${index + 1}-${uniqueId}`
                ]
                  ? elementContent[
                      `features-sub-heading-text-1-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `features-sub-heading-text-1-${index + 1}-${uniqueId}`
                    ] || "Item 1",
              }}
            ></h2>
            <p
              id={`features-sub-paragraph-text-1-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `features-sub-paragraph-${index + 1}`,
                uniqueId
              )}
              className={`features-sub-paragraph-${index + 1}-${uniqueId}`}
              data-text="Type a paragraph"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[
                  `features-sub-paragraph-text-1-${index + 1}-${uniqueId}`
                ]
                  ? elementContent[
                      `features-sub-paragraph-text-1-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `features-sub-paragraph-text-1-${index + 1}-${uniqueId}`
                    ] || text.description,
              }}
            ></p>
            <button className="capitalize block text-black bg-white px-5 py-1 rounded-full font-semibold text-sm my-3">
              <span
                id={`features-button-text-1-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `features-button-text-style-${index + 1}`,
                  uniqueId
                )}
                className={`features-button-text-style-${
                  index + 1
                }-${uniqueId}`}
                data-text="Button text"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[`features-button-text-1-${index + 1}-${uniqueId}`]
                  ? elementContent[
                      `features-button-text-1-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `features-button-text-1-${index + 1}-${uniqueId}`
                    ] || text.buttonTexts[5]}
              </span>
            </button>
          </div>

          <div
            id={`features-section-card-${index + 1}-${uniqueId}`}
            className={`${
              isMobile ? "w-[45%]" : ""
            } flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl`}
            onClick={handleCardClick}
            style={getStyle(`features-section-card-${index + 1}`, uniqueId)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="um-icon _92496331"
              fill="currentColor"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path>
            </svg>
            <h2
              id={`features-sub-heading-text-2-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `features-sub-heading-${index + 1}`,
                uniqueId
              )}
              className={`features-sub-heading-${
                index + 1
              }-${uniqueId} font-semibold `}
              data-text="Heading"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[
                  `features-sub-heading-text-2-${index + 1}-${uniqueId}`
                ]
                  ? elementContent[
                      `features-sub-heading-text-2-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `features-sub-heading-text-2-${index + 1}-${uniqueId}`
                    ] || "Item 2",
              }}
            ></h2>
            <p
              id={`features-sub-paragraph-text-2-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `features-sub-paragraph-${index + 1}`,
                uniqueId
              )}
              className={`features-sub-paragraph-${index + 1}-${uniqueId}`}
              data-text="Type a paragraph"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[
                  `features-sub-paragraph-text-2-${index + 1}-${uniqueId}`
                ]
                  ? elementContent[
                      `features-sub-paragraph-text-2-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `features-sub-paragraph-text-2-${index + 1}-${uniqueId}`
                    ] || text.description,
              }}
            ></p>
            <button className="capitalize block text-black bg-white px-5 py-1 rounded-full font-semibold text-sm my-3">
              <span
                id={`features-button-text-2-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `features-button-text-style-${index + 1}`,
                  uniqueId
                )}
                className={`features-button-text-style-${
                  index + 1
                }-${uniqueId}`}
                data-text="Button text"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[`features-button-text-2-${index + 1}-${uniqueId}`]
                  ? elementContent[
                      `features-button-text-2-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `features-button-text-2-${index + 1}-${uniqueId}`
                    ] || text.buttonTexts[5]}
              </span>
            </button>
          </div>

          <div
            id={`features-section-card-${index + 1}-${uniqueId}`}
            className={`${
              isMobile ? "w-[45%]" : ""
            } flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl`}
            onClick={handleCardClick}
            style={getStyle(`features-section-card-${index + 1}`, uniqueId)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="um-icon _92496331"
              fill="currentColor"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"></path>
            </svg>
            <h2
              id={`features-sub-heading-text-3-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `features-sub-heading-${index + 1}`,
                uniqueId
              )}
              className={`features-sub-heading-${
                index + 1
              }-${uniqueId} font-semibold `}
              data-text="Heading"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[
                  `features-sub-heading-text-3-${index + 1}-${uniqueId}`
                ]
                  ? elementContent[
                      `features-sub-heading-text-3-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `features-sub-heading-text-3-${index + 1}-${uniqueId}`
                    ] || "Item 3",
              }}
            ></h2>
            <p
              id={`features-sub-paragraph-text-3-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `features-sub-paragraph-${index + 1}`,
                uniqueId
              )}
              className={`features-sub-paragraph-${index + 1}-${uniqueId}`}
              data-text="Type a paragraph"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[
                  `features-sub-paragraph-text-3-${index + 1}-${uniqueId}`
                ]
                  ? elementContent[
                      `features-sub-paragraph-text-3-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `features-sub-paragraph-text-3-${index + 1}-${uniqueId}`
                    ] || text.description,
              }}
            ></p>
            <button className="capitalize block text-black bg-white px-5 py-1 rounded-full font-semibold text-sm my-3">
              <span
                id={`features-button-text-3-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `features-button-text-style-${index + 1}`,
                  uniqueId
                )}
                className={`features-button-text-style-${
                  index + 1
                }-${uniqueId}`}
                data-text="Button text"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[`features-button-text-3-${index + 1}-${uniqueId}`]
                  ? elementContent[
                      `features-button-text-3-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `features-button-text-3-${index + 1}-${uniqueId}`
                    ] || text.buttonTexts[5]}
              </span>
            </button>
          </div>

          <div
            id={`features-section-card-${index + 1}-${uniqueId}`}
            className={`${
              isMobile ? "w-[45%]" : ""
            } flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl`}
            onClick={handleCardClick}
            style={getStyle(`features-section-card-${index + 1}`, uniqueId)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="um-icon _92496331"
              fill="currentColor"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
            </svg>
            <h2
              id={`features-sub-heading-text-4-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `features-sub-heading-${index + 1}`,
                uniqueId
              )}
              className={`features-sub-heading-${
                index + 1
              }-${uniqueId} font-semibold `}
              data-text="Heading"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[
                  `features-sub-heading-text-4-${index + 1}-${uniqueId}`
                ]
                  ? elementContent[
                      `features-sub-heading-text-4-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `features-sub-heading-text-4-${index + 1}-${uniqueId}`
                    ] || "Item 4",
              }}
            ></h2>
            <p
              id={`features-sub-paragraph-text-4-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `features-sub-paragraph-${index + 1}`,
                uniqueId
              )}
              className={`features-sub-paragraph-${index + 1}-${uniqueId}`}
              data-text="Type a paragraph"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[
                  `features-sub-paragraph-text-4-${index + 1}-${uniqueId}`
                ]
                  ? elementContent[
                      `features-sub-paragraph-text-4-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `features-sub-paragraph-text-4-${index + 1}-${uniqueId}`
                    ] || text.description,
              }}
            ></p>
            <button className="capitalize block text-black bg-white px-5 py-1 rounded-full font-semibold text-sm my-3">
              <span
                id={`features-button-text-4-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `features-button-text-style-${index + 1}`,
                  uniqueId
                )}
                className={`features-button-text-style-${
                  index + 1
                }-${uniqueId}`}
                data-text="Button text"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[`features-button-text-4-${index + 1}-${uniqueId}`]
                  ? elementContent[
                      `features-button-text-4-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `features-button-text-4-${index + 1}-${uniqueId}`
                    ] || text.buttonTexts[5]}
              </span>
            </button>
          </div>

          <div
            id={`features-section-card-${index + 1}-${uniqueId}`}
            className={`${
              isMobile ? "w-[45%]" : ""
            } flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl`}
            onClick={handleCardClick}
            style={getStyle(`features-section-card-${index + 1}`, uniqueId)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="um-icon _92496331"
              fill="currentColor"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
            </svg>
            <h2
              id={`features-sub-heading-text-5-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `features-sub-heading-${index + 1}`,
                uniqueId
              )}
              className={`features-sub-heading-${
                index + 1
              }-${uniqueId} font-semibold `}
              data-text="Heading"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[
                  `features-sub-heading-text-5-${index + 1}-${uniqueId}`
                ]
                  ? elementContent[
                      `features-sub-heading-text-5-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `features-sub-heading-text-5-${index + 1}-${uniqueId}`
                    ] || "Item 5",
              }}
            ></h2>
            <p
              id={`features-sub-paragraph-text-5-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `features-sub-paragraph-${index + 1}`,
                uniqueId
              )}
              className={`features-sub-paragraph-${index + 1}-${uniqueId}`}
              data-text="Type a paragraph"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[
                  `features-sub-paragraph-text-5-${index + 1}-${uniqueId}`
                ]
                  ? elementContent[
                      `features-sub-paragraph-text-5-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `features-sub-paragraph-text-5-${index + 1}-${uniqueId}`
                    ] || text.description,
              }}
            ></p>
            <button className="capitalize block text-black bg-white px-5 py-1 rounded-full font-semibold text-sm my-3">
              <span
                id={`features-button-text-5-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `features-button-text-style-${index + 1}`,
                  uniqueId
                )}
                className={`features-button-text-style-${
                  index + 1
                }-${uniqueId}`}
                data-text="Button text"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[`features-button-text-5-${index + 1}-${uniqueId}`]
                  ? elementContent[
                      `features-button-text-5-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `features-button-text-5-${index + 1}-${uniqueId}`
                    ] || text.buttonTexts[5]}
              </span>
            </button>
          </div>

          <div
            id={`features-section-card-${index + 1}-${uniqueId}`}
            className={`${
              isMobile ? "w-[45%]" : ""
            } flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl`}
            onClick={handleCardClick}
            style={getStyle(`features-section-card-${index + 1}`, uniqueId)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="um-icon _92496331"
              fill="currentColor"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"></path>
            </svg>
            <h2
              id={`features-sub-heading-text-6-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `features-sub-heading-${index + 1}`,
                uniqueId
              )}
              className={`features-sub-heading-${
                index + 1
              }-${uniqueId} font-semibold `}
              data-text="Heading"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[
                  `features-sub-heading-text-6-${index + 1}-${uniqueId}`
                ]
                  ? elementContent[
                      `features-sub-heading-text-6-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `features-sub-heading-text-6-${index + 1}-${uniqueId}`
                    ] || "Item 6",
              }}
            ></h2>
            <p
              id={`features-sub-paragraph-text-6-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `features-sub-paragraph-${index + 1}`,
                uniqueId
              )}
              className={`features-sub-paragraph-${index + 1}-${uniqueId}`}
              data-text="Type a paragraph"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[
                  `features-sub-paragraph-text-6-${index + 1}-${uniqueId}`
                ]
                  ? elementContent[
                      `features-sub-paragraph-text-6-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `features-sub-paragraph-text-6-${index + 1}-${uniqueId}`
                    ] || text.description,
              }}
            ></p>
            <button className="capitalize block text-black bg-white px-5 py-1 rounded-full font-semibold text-sm my-3">
              <span
                id={`features-button-text-6-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `features-button-text-style-${index + 1}`,
                  uniqueId
                )}
                className={`features-button-text-style-${
                  index + 1
                }-${uniqueId}`}
                data-text="Button text"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[`features-button-text-6-${index + 1}-${uniqueId}`]
                  ? elementContent[
                      `features-button-text-6-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `features-button-text-6-${index + 1}-${uniqueId}`
                    ] || text.buttonTexts[5]}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>, */
}

  // <section
  //   onClick={handleDivClick}
  //   id={`features-section-${index + 1}-${uniqueId}`}
  //   style={getStyle(`features-section-${index + 1}`, uniqueId)}
  // >
  //   <div className="text-black py-32 max-w-[1000px] mx-auto">
  //     <div className="flex flex-col justify-center items-center text-center">
  //       <h1
  //         id={`features-heading-${index + 1}-${uniqueId}`}
  //         style={getElementStyle(`features-heading-${index + 1}`, uniqueId)}
  //         className={`features-heading-${
  //           index + 1
  //         }-${uniqueId} text-3xl font-bold my-2 text-center `}
  //         data-text="Heading"
  //         data-uses-dangerously-set-inner-html="true"
  //         contentEditable={false}
  //         onClick={handleTextClick}
  //         dangerouslySetInnerHTML={{
  //           __html: isEdited[`features-heading-${index + 1}-${uniqueId}`]
  //             ? elementContent[`features-heading-${index + 1}-${uniqueId}`]
  //             : elementContent[`features-heading-${index + 1}-${uniqueId}`] ||
  //               text.featureHeader[1],
  //         }}
  //       ></h1>
  //       <p
  //         id={`features-paragraph-${index + 1}-${uniqueId}`}
  //         style={getElementStyle(`features-paragraph-${index + 1}`, uniqueId)}
  //         className={`features-paragraph-${index + 1}-${uniqueId}`}
  //         data-text="Type a paragraph"
  //         data-uses-dangerously-set-inner-html="true"
  //         contentEditable={false}
  //         onClick={handleTextClick}
  //         dangerouslySetInnerHTML={{
  //           __html: isEdited[`features-paragraph-${index + 1}-${uniqueId}`]
  //             ? elementContent[`features-paragraph-${index + 1}-${uniqueId}`]
  //             : elementContent[`features-paragraph-${index + 1}-${uniqueId}`] ||
  //               text.description,
  //         }}
  //       ></p>
  //     </div>

  //     <div
  //       className={`${
  //         isMobile ? "flex-col" : ""
  //       } my-10 flex flex-wrap max-sm:flex-col gap-8`}
  //     >
  //       <div
  //         className={`${
  //           isMobile ? "w-[45%]" : ""
  //         } flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl`}
  //       >
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="um-icon _92496331"
  //           fill="currentColor"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path>
  //         </svg>
  //         <h2
  //           id={`features-sub-heading-text-1-${index + 1}-${uniqueId}`}
  //           style={getElementStyle(
  //             `features-sub-heading-${index + 1}`,
  //             uniqueId
  //           )}
  //           className={`features-sub-heading-${
  //             index + 1
  //           }-${uniqueId} font-semibold `}
  //           data-text="Heading"
  //           data-uses-dangerously-set-inner-html="true"
  //           contentEditable={false}
  //           onClick={handleTextClick}
  //           dangerouslySetInnerHTML={{
  //             __html: isEdited[
  //               `features-sub-heading-text-1-${index + 1}-${uniqueId}`
  //             ]
  //               ? elementContent[
  //                   `features-sub-heading-text-1-${index + 1}-${uniqueId}`
  //                 ]
  //               : elementContent[
  //                   `features-sub-heading-text-1-${index + 1}-${uniqueId}`
  //                 ] || "Item 1",
  //           }}
  //         ></h2>
  //         <p
  //           id={`features-sub-paragraph-text-1-${index + 1}-${uniqueId}`}
  //           style={getElementStyle(
  //             `features-sub-paragraph-${index + 1}`,
  //             uniqueId
  //           )}
  //           className={`features-sub-paragraph-${index + 1}-${uniqueId}`}
  //           data-text="Type a paragraph"
  //           data-uses-dangerously-set-inner-html="true"
  //           contentEditable={false}
  //           onClick={handleTextClick}
  //           dangerouslySetInnerHTML={{
  //             __html: isEdited[
  //               `features-sub-paragraph-text-1-${index + 1}-${uniqueId}`
  //             ]
  //               ? elementContent[
  //                   `features-sub-paragraph-text-1-${index + 1}-${uniqueId}`
  //                 ]
  //               : elementContent[
  //                   `features-sub-paragraph-text-1-${index + 1}-${uniqueId}`
  //                 ] || text.description,
  //           }}
  //         ></p>
  //       </div>

  //       <div
  //         className={`${
  //           isMobile ? "w-[45%]" : ""
  //         } flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl`}
  //       >
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="um-icon _92496331"
  //           fill="currentColor"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path>
  //         </svg>
  //         <h2
  //           id={`features-sub-heading-text-2-${index + 1}-${uniqueId}`}
  //           style={getElementStyle(
  //             `features-sub-heading-${index + 1}`,
  //             uniqueId
  //           )}
  //           className={`features-sub-heading-${
  //             index + 1
  //           }-${uniqueId} font-semibold `}
  //           data-text="Heading"
  //           data-uses-dangerously-set-inner-html="true"
  //           contentEditable={false}
  //           onClick={handleTextClick}
  //           dangerouslySetInnerHTML={{
  //             __html: isEdited[
  //               `features-sub-heading-text-2-${index + 1}-${uniqueId}`
  //             ]
  //               ? elementContent[
  //                   `features-sub-heading-text-2-${index + 1}-${uniqueId}`
  //                 ]
  //               : elementContent[
  //                   `features-sub-heading-text-2-${index + 1}-${uniqueId}`
  //                 ] || "Item 2",
  //           }}
  //         ></h2>
  //         <p
  //           id={`features-sub-paragraph-text-2-${index + 1}-${uniqueId}`}
  //           style={getElementStyle(
  //             `features-sub-paragraph-${index + 1}`,
  //             uniqueId
  //           )}
  //           className={`features-sub-paragraph-${index + 1}-${uniqueId}`}
  //           data-text="Type a paragraph"
  //           data-uses-dangerously-set-inner-html="true"
  //           contentEditable={false}
  //           onClick={handleTextClick}
  //           dangerouslySetInnerHTML={{
  //             __html: isEdited[
  //               `features-sub-paragraph-text-2-${index + 1}-${uniqueId}`
  //             ]
  //               ? elementContent[
  //                   `features-sub-paragraph-text-2-${index + 1}-${uniqueId}`
  //                 ]
  //               : elementContent[
  //                   `features-sub-paragraph-text-2-${index + 1}-${uniqueId}`
  //                 ] || text.description,
  //           }}
  //         ></p>
  //       </div>

  //       <div
  //         className={`${
  //           isMobile ? "w-[45%]" : ""
  //         } flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl`}
  //       >
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="um-icon _92496331"
  //           fill="currentColor"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"></path>
  //         </svg>
  //         <h2
  //           id={`features-sub-heading-text-3-${index + 1}-${uniqueId}`}
  //           style={getElementStyle(
  //             `features-sub-heading-${index + 1}`,
  //             uniqueId
  //           )}
  //           className={`features-sub-heading-${
  //             index + 1
  //           }-${uniqueId} font-semibold `}
  //           data-text="Heading"
  //           data-uses-dangerously-set-inner-html="true"
  //           contentEditable={false}
  //           onClick={handleTextClick}
  //           dangerouslySetInnerHTML={{
  //             __html: isEdited[
  //               `features-sub-heading-text-3-${index + 1}-${uniqueId}`
  //             ]
  //               ? elementContent[
  //                   `features-sub-heading-text-3-${index + 1}-${uniqueId}`
  //                 ]
  //               : elementContent[
  //                   `features-sub-heading-text-3-${index + 1}-${uniqueId}`
  //                 ] || "Item 3",
  //           }}
  //         ></h2>
  //         <p
  //           id={`features-sub-paragraph-text-3-${index + 1}-${uniqueId}`}
  //           style={getElementStyle(
  //             `features-sub-paragraph-${index + 1}`,
  //             uniqueId
  //           )}
  //           className={`features-sub-paragraph-${index + 1}-${uniqueId}`}
  //           data-text="Type a paragraph"
  //           data-uses-dangerously-set-inner-html="true"
  //           contentEditable={false}
  //           onClick={handleTextClick}
  //           dangerouslySetInnerHTML={{
  //             __html: isEdited[
  //               `features-sub-paragraph-text-3-${index + 1}-${uniqueId}`
  //             ]
  //               ? elementContent[
  //                   `features-sub-paragraph-text-3-${index + 1}-${uniqueId}`
  //                 ]
  //               : elementContent[
  //                   `features-sub-paragraph-text-3-${index + 1}-${uniqueId}`
  //                 ] || text.description,
  //           }}
  //         ></p>
  //       </div>

  //       <div
  //         className={`${
  //           isMobile ? "w-[45%]" : ""
  //         } flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl`}
  //       >
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="um-icon _92496331"
  //           fill="currentColor"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
  //         </svg>
  //         <h2
  //           id={`features-sub-heading-text-4-${index + 1}-${uniqueId}`}
  //           style={getElementStyle(
  //             `features-sub-heading-${index + 1}`,
  //             uniqueId
  //           )}
  //           className={`features-sub-heading-${
  //             index + 1
  //           }-${uniqueId} font-semibold `}
  //           data-text="Heading"
  //           data-uses-dangerously-set-inner-html="true"
  //           contentEditable={false}
  //           onClick={handleTextClick}
  //           dangerouslySetInnerHTML={{
  //             __html: isEdited[
  //               `features-sub-heading-text-4-${index + 1}-${uniqueId}`
  //             ]
  //               ? elementContent[
  //                   `features-sub-heading-text-4-${index + 1}-${uniqueId}`
  //                 ]
  //               : elementContent[
  //                   `features-sub-heading-text-4-${index + 1}-${uniqueId}`
  //                 ] || "Item 4",
  //           }}
  //         ></h2>
  //         <p
  //           id={`features-sub-paragraph-text-4-${index + 1}-${uniqueId}`}
  //           style={getElementStyle(
  //             `features-sub-paragraph-${index + 1}`,
  //             uniqueId
  //           )}
  //           className={`features-sub-paragraph-${index + 1}-${uniqueId}`}
  //           data-text="Type a paragraph"
  //           data-uses-dangerously-set-inner-html="true"
  //           contentEditable={false}
  //           onClick={handleTextClick}
  //           dangerouslySetInnerHTML={{
  //             __html: isEdited[
  //               `features-sub-paragraph-text-4-${index + 1}-${uniqueId}`
  //             ]
  //               ? elementContent[
  //                   `features-sub-paragraph-text-4-${index + 1}-${uniqueId}`
  //                 ]
  //               : elementContent[
  //                   `features-sub-paragraph-text-4-${index + 1}-${uniqueId}`
  //                 ] || text.description,
  //           }}
  //         ></p>
  //       </div>

  //       <div
  //         className={`${
  //           isMobile ? "w-[45%]" : ""
  //         } flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl`}
  //       >
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="um-icon _92496331"
  //           fill="currentColor"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
  //         </svg>
  //         <h2
  //           id={`features-sub-heading-text-5-${index + 1}-${uniqueId}`}
  //           style={getElementStyle(
  //             `features-sub-heading-${index + 1}`,
  //             uniqueId
  //           )}
  //           className={`features-sub-heading-${
  //             index + 1
  //           }-${uniqueId} font-semibold `}
  //           data-text="Heading"
  //           data-uses-dangerously-set-inner-html="true"
  //           contentEditable={false}
  //           onClick={handleTextClick}
  //           dangerouslySetInnerHTML={{
  //             __html: isEdited[
  //               `features-sub-heading-text-5-${index + 1}-${uniqueId}`
  //             ]
  //               ? elementContent[
  //                   `features-sub-heading-text-5-${index + 1}-${uniqueId}`
  //                 ]
  //               : elementContent[
  //                   `features-sub-heading-text-5-${index + 1}-${uniqueId}`
  //                 ] || "Item 5",
  //           }}
  //         ></h2>
  //         <p
  //           id={`features-sub-paragraph-text-5-${index + 1}-${uniqueId}`}
  //           style={getElementStyle(
  //             `features-sub-paragraph-${index + 1}`,
  //             uniqueId
  //           )}
  //           className={`features-sub-paragraph-${index + 1}-${uniqueId}`}
  //           data-text="Type a paragraph"
  //           data-uses-dangerously-set-inner-html="true"
  //           contentEditable={false}
  //           onClick={handleTextClick}
  //           dangerouslySetInnerHTML={{
  //             __html: isEdited[
  //               `features-sub-paragraph-text-5-${index + 1}-${uniqueId}`
  //             ]
  //               ? elementContent[
  //                   `features-sub-paragraph-text-5-${index + 1}-${uniqueId}`
  //                 ]
  //               : elementContent[
  //                   `features-sub-paragraph-text-5-${index + 1}-${uniqueId}`
  //                 ] || text.description,
  //           }}
  //         ></p>
  //       </div>

  //       <div
  //         className={`${
  //           isMobile ? "w-[45%]" : ""
  //         } flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl`}
  //       >
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="um-icon _92496331"
  //           fill="currentColor"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"></path>
  //         </svg>
  //         <h2
  //           id={`features-sub-heading-text-6-${index + 1}-${uniqueId}`}
  //           style={getElementStyle(
  //             `features-sub-heading-${index + 1}`,
  //             uniqueId
  //           )}
  //           className={`features-sub-heading-${
  //             index + 1
  //           }-${uniqueId} font-semibold `}
  //           data-text="Heading"
  //           data-uses-dangerously-set-inner-html="true"
  //           contentEditable={false}
  //           onClick={handleTextClick}
  //           dangerouslySetInnerHTML={{
  //             __html: isEdited[
  //               `features-sub-heading-text-6-${index + 1}-${uniqueId}`
  //             ]
  //               ? elementContent[
  //                   `features-sub-heading-text-6-${index + 1}-${uniqueId}`
  //                 ]
  //               : elementContent[
  //                   `features-sub-heading-text-6-${index + 1}-${uniqueId}`
  //                 ] || "Item 6",
  //           }}
  //         ></h2>
  //         <p
  //           id={`features-sub-paragraph-text-6-${index + 1}-${uniqueId}`}
  //           style={getElementStyle(
  //             `features-sub-paragraph-${index + 1}`,
  //             uniqueId
  //           )}
  //           className={`features-sub-paragraph-${index + 1}-${uniqueId}`}
  //           data-text="Type a paragraph"
  //           data-uses-dangerously-set-inner-html="true"
  //           contentEditable={false}
  //           onClick={handleTextClick}
  //           dangerouslySetInnerHTML={{
  //             __html: isEdited[
  //               `features-sub-paragraph-text-6-${index + 1}-${uniqueId}`
  //             ]
  //               ? elementContent[
  //                   `features-sub-paragraph-text-6-${index + 1}-${uniqueId}`
  //                 ]
  //               : elementContent[
  //                   `features-sub-paragraph-text-6-${index + 1}-${uniqueId}`
  //                 ] || text.description,
  //           }}
  //         ></p>
  //       </div>
  //     </div>
  //   </div>
  // </section>
  

    // <section
    //   onClick={handleDivClick}
    //   id={`features-section-${index + 1}-${uniqueId}`}
    //   style={getStyle(`features-section-${index + 1}`, uniqueId)}
    // >
    //   <div className="text-black py-32 max-w-[1000px] mx-auto">
    //     <div className="flex flex-col justify-center items-center text-center">
    //       <h1
    //         id={`features-heading-${index + 1}-${uniqueId}`}
    //         style={getElementStyle(`features-heading-${index + 1}`, uniqueId)}
    //         className={`features-heading-${
    //           index + 1
    //         }-${uniqueId} text-3xl font-bold my-2 text-center `}
    //         data-text="Heading"
    //         data-uses-dangerously-set-inner-html="true"
    //         contentEditable={false}
    //         onClick={handleTextClick}
    //         dangerouslySetInnerHTML={{
    //           __html: isEdited[`features-heading-${index + 1}-${uniqueId}`]
    //             ? elementContent[`features-heading-${index + 1}-${uniqueId}`]
    //             : elementContent[`features-heading-${index + 1}-${uniqueId}`] ||
    //               text.featureHeader[1],
    //         }}
    //       ></h1>
    //       <p
    //         id={`features-paragraph-${index + 1}-${uniqueId}`}
    //         style={getElementStyle(`features-paragraph-${index + 1}`, uniqueId)}
    //         className={`features-paragraph-${index + 1}-${uniqueId}`}
    //         data-text="Type a paragraph"
    //         data-uses-dangerously-set-inner-html="true"
    //         contentEditable={false}
    //         onClick={handleTextClick}
    //         dangerouslySetInnerHTML={{
    //           __html: isEdited[`features-paragraph-${index + 1}-${uniqueId}`]
    //             ? elementContent[`features-paragraph-${index + 1}-${uniqueId}`]
    //             : elementContent[
    //                 `features-paragraph-${index + 1}-${uniqueId}`
    //               ] || text.description,
    //         }}
    //       ></p>
    //     </div>

    //     <div
    //       className={`${
    //         isMobile ? "flex-col" : ""
    //       } my-10 flex flex-wrap max-sm:flex-col gap-8`}
    //     >
    //       <div
    //         className={`${
    //           isMobile ? "w-[45%]" : ""
    //         } flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl`}
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="um-icon _92496331"
    //           fill="currentColor"
    //           width="24"
    //           height="24"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path>
    //         </svg>
    //         <h2
    //           id={`features-sub-heading-text-1-${index + 1}-${uniqueId}`}
    //           style={getElementStyle(
    //             `features-sub-heading-${index + 1}`,
    //             uniqueId
    //           )}
    //           className={`features-sub-heading-${
    //             index + 1
    //           }-${uniqueId} font-semibold `}
    //           data-text="Heading"
    //           data-uses-dangerously-set-inner-html="true"
    //           contentEditable={false}
    //           onClick={handleTextClick}
    //           dangerouslySetInnerHTML={{
    //             __html: isEdited[
    //               `features-sub-heading-text-1-${index + 1}-${uniqueId}`
    //             ]
    //               ? elementContent[
    //                   `features-sub-heading-text-1-${index + 1}-${uniqueId}`
    //                 ]
    //               : elementContent[
    //                   `features-sub-heading-text-1-${index + 1}-${uniqueId}`
    //                 ] || "Item 1",
    //           }}
    //         ></h2>
    //         <p
    //           id={`features-sub-paragraph-text-1-${index + 1}-${uniqueId}`}
    //           style={getElementStyle(
    //             `features-sub-paragraph-${index + 1}`,
    //             uniqueId
    //           )}
    //           className={`features-sub-paragraph-${index + 1}-${uniqueId}`}
    //           data-text="Type a paragraph"
    //           data-uses-dangerously-set-inner-html="true"
    //           contentEditable={false}
    //           onClick={handleTextClick}
    //           dangerouslySetInnerHTML={{
    //             __html: isEdited[
    //               `features-sub-paragraph-text-1-${index + 1}-${uniqueId}`
    //             ]
    //               ? elementContent[
    //                   `features-sub-paragraph-text-1-${index + 1}-${uniqueId}`
    //                 ]
    //               : elementContent[
    //                   `features-sub-paragraph-text-1-${index + 1}-${uniqueId}`
    //                 ] || text.description,
    //           }}
    //         ></p>
    //         <button className="capitalize block text-black bg-white px-5 py-1 rounded-full font-semibold text-sm my-3">
    //           <span
    //             id={`features-button-text-1-${index + 1}-${uniqueId}`}
    //             style={getElementStyle(
    //               `features-button-text-style-${index + 1}`,
    //               uniqueId
    //             )}
    //             className={`features-button-text-style-${
    //               index + 1
    //             }-${uniqueId}`}
    //             data-text="Button text"
    //             contentEditable={false}
    //             onClick={handleTextClick}
    //           >
    //             {isEdited[`features-button-text-1-${index + 1}-${uniqueId}`]
    //               ? elementContent[
    //                   `features-button-text-1-${index + 1}-${uniqueId}`
    //                 ]
    //               : elementContent[
    //                   `features-button-text-1-${index + 1}-${uniqueId}`
    //                 ] || text.buttonTexts[5]}
    //           </span>
    //         </button>
    //       </div>

    //       <div
    //         className={`${
    //           isMobile ? "w-[45%]" : ""
    //         } flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl`}
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="um-icon _92496331"
    //           fill="currentColor"
    //           width="24"
    //           height="24"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path>
    //         </svg>
    //         <h2
    //           id={`features-sub-heading-text-2-${index + 1}-${uniqueId}`}
    //           style={getElementStyle(
    //             `features-sub-heading-${index + 1}`,
    //             uniqueId
    //           )}
    //           className={`features-sub-heading-${
    //             index + 1
    //           }-${uniqueId} font-semibold `}
    //           data-text="Heading"
    //           data-uses-dangerously-set-inner-html="true"
    //           contentEditable={false}
    //           onClick={handleTextClick}
    //           dangerouslySetInnerHTML={{
    //             __html: isEdited[
    //               `features-sub-heading-text-2-${index + 1}-${uniqueId}`
    //             ]
    //               ? elementContent[
    //                   `features-sub-heading-text-2-${index + 1}-${uniqueId}`
    //                 ]
    //               : elementContent[
    //                   `features-sub-heading-text-2-${index + 1}-${uniqueId}`
    //                 ] || "Item 2",
    //           }}
    //         ></h2>
    //         <p
    //           id={`features-sub-paragraph-text-2-${index + 1}-${uniqueId}`}
    //           style={getElementStyle(
    //             `features-sub-paragraph-${index + 1}`,
    //             uniqueId
    //           )}
    //           className={`features-sub-paragraph-${index + 1}-${uniqueId}`}
    //           data-text="Type a paragraph"
    //           data-uses-dangerously-set-inner-html="true"
    //           contentEditable={false}
    //           onClick={handleTextClick}
    //           dangerouslySetInnerHTML={{
    //             __html: isEdited[
    //               `features-sub-paragraph-text-2-${index + 1}-${uniqueId}`
    //             ]
    //               ? elementContent[
    //                   `features-sub-paragraph-text-2-${index + 1}-${uniqueId}`
    //                 ]
    //               : elementContent[
    //                   `features-sub-paragraph-text-2-${index + 1}-${uniqueId}`
    //                 ] || text.description,
    //           }}
    //         ></p>
    //         <button className="capitalize block text-black bg-white px-5 py-1 rounded-full font-semibold text-sm my-3">
    //           <span
    //             id={`features-button-text-2-${index + 1}-${uniqueId}`}
    //             style={getElementStyle(
    //               `features-button-text-style-${index + 1}`,
    //               uniqueId
    //             )}
    //             className={`features-button-text-style-${
    //               index + 1
    //             }-${uniqueId}`}
    //             data-text="Button text"
    //             contentEditable={false}
    //             onClick={handleTextClick}
    //           >
    //             {isEdited[`features-button-text-2-${index + 1}-${uniqueId}`]
    //               ? elementContent[
    //                   `features-button-text-2-${index + 1}-${uniqueId}`
    //                 ]
    //               : elementContent[
    //                   `features-button-text-2-${index + 1}-${uniqueId}`
    //                 ] || text.buttonTexts[5]}
    //           </span>
    //         </button>
    //       </div>

    //       <div
    //         className={`${
    //           isMobile ? "w-[45%]" : ""
    //         } flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl`}
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="um-icon _92496331"
    //           fill="currentColor"
    //           width="24"
    //           height="24"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"></path>
    //         </svg>
    //         <h2
    //           id={`features-sub-heading-text-3-${index + 1}-${uniqueId}`}
    //           style={getElementStyle(
    //             `features-sub-heading-${index + 1}`,
    //             uniqueId
    //           )}
    //           className={`features-sub-heading-${
    //             index + 1
    //           }-${uniqueId} font-semibold `}
    //           data-text="Heading"
    //           data-uses-dangerously-set-inner-html="true"
    //           contentEditable={false}
    //           onClick={handleTextClick}
    //           dangerouslySetInnerHTML={{
    //             __html: isEdited[
    //               `features-sub-heading-text-3-${index + 1}-${uniqueId}`
    //             ]
    //               ? elementContent[
    //                   `features-sub-heading-text-3-${index + 1}-${uniqueId}`
    //                 ]
    //               : elementContent[
    //                   `features-sub-heading-text-3-${index + 1}-${uniqueId}`
    //                 ] || "Item 3",
    //           }}
    //         ></h2>
    //         <p
    //           id={`features-sub-paragraph-text-3-${index + 1}-${uniqueId}`}
    //           style={getElementStyle(
    //             `features-sub-paragraph-${index + 1}`,
    //             uniqueId
    //           )}
    //           className={`features-sub-paragraph-${index + 1}-${uniqueId}`}
    //           data-text="Type a paragraph"
    //           data-uses-dangerously-set-inner-html="true"
    //           contentEditable={false}
    //           onClick={handleTextClick}
    //           dangerouslySetInnerHTML={{
    //             __html: isEdited[
    //               `features-sub-paragraph-text-3-${index + 1}-${uniqueId}`
    //             ]
    //               ? elementContent[
    //                   `features-sub-paragraph-text-3-${index + 1}-${uniqueId}`
    //                 ]
    //               : elementContent[
    //                   `features-sub-paragraph-text-3-${index + 1}-${uniqueId}`
    //                 ] || text.description,
    //           }}
    //         ></p>
    //         <button className="capitalize block text-black bg-white px-5 py-1 rounded-full font-semibold text-sm my-3">
    //           <span
    //             id={`features-button-text-3-${index + 1}-${uniqueId}`}
    //             style={getElementStyle(
    //               `features-button-text-style-${index + 1}`,
    //               uniqueId
    //             )}
    //             className={`features-button-text-style-${
    //               index + 1
    //             }-${uniqueId}`}
    //             data-text="Button text"
    //             contentEditable={false}
    //             onClick={handleTextClick}
    //           >
    //             {isEdited[`features-button-text-3-${index + 1}-${uniqueId}`]
    //               ? elementContent[
    //                   `features-button-text-3-${index + 1}-${uniqueId}`
    //                 ]
    //               : elementContent[
    //                   `features-button-text-3-${index + 1}-${uniqueId}`
    //                 ] || text.buttonTexts[5]}
    //           </span>
    //         </button>
    //       </div>

    //       <div
    //         className={`${
    //           isMobile ? "w-[45%]" : ""
    //         } flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl`}
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="um-icon _92496331"
    //           fill="currentColor"
    //           width="24"
    //           height="24"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
    //         </svg>
    //         <h2
    //           id={`features-sub-heading-text-4-${index + 1}-${uniqueId}`}
    //           style={getElementStyle(
    //             `features-sub-heading-${index + 1}`,
    //             uniqueId
    //           )}
    //           className={`features-sub-heading-${
    //             index + 1
    //           }-${uniqueId} font-semibold `}
    //           data-text="Heading"
    //           data-uses-dangerously-set-inner-html="true"
    //           contentEditable={false}
    //           onClick={handleTextClick}
    //           dangerouslySetInnerHTML={{
    //             __html: isEdited[
    //               `features-sub-heading-text-4-${index + 1}-${uniqueId}`
    //             ]
    //               ? elementContent[
    //                   `features-sub-heading-text-4-${index + 1}-${uniqueId}`
    //                 ]
    //               : elementContent[
    //                   `features-sub-heading-text-4-${index + 1}-${uniqueId}`
    //                 ] || "Item 4",
    //           }}
    //         ></h2>
    //         <p
    //           id={`features-sub-paragraph-text-4-${index + 1}-${uniqueId}`}
    //           style={getElementStyle(
    //             `features-sub-paragraph-${index + 1}`,
    //             uniqueId
    //           )}
    //           className={`features-sub-paragraph-${index + 1}-${uniqueId}`}
    //           data-text="Type a paragraph"
    //           data-uses-dangerously-set-inner-html="true"
    //           contentEditable={false}
    //           onClick={handleTextClick}
    //           dangerouslySetInnerHTML={{
    //             __html: isEdited[
    //               `features-sub-paragraph-text-4-${index + 1}-${uniqueId}`
    //             ]
    //               ? elementContent[
    //                   `features-sub-paragraph-text-4-${index + 1}-${uniqueId}`
    //                 ]
    //               : elementContent[
    //                   `features-sub-paragraph-text-4-${index + 1}-${uniqueId}`
    //                 ] || text.description,
    //           }}
    //         ></p>
    //       </div>

    //       <div
    //         className={`${
    //           isMobile ? "w-[45%]" : ""
    //         } flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl`}
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="um-icon _92496331"
    //           fill="currentColor"
    //           width="24"
    //           height="24"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
    //         </svg>
    //         <h2
    //           id={`features-sub-heading-text-5-${index + 1}-${uniqueId}`}
    //           style={getElementStyle(
    //             `features-sub-heading-${index + 1}`,
    //             uniqueId
    //           )}
    //           className={`features-sub-heading-${
    //             index + 1
    //           }-${uniqueId} font-semibold `}
    //           data-text="Heading"
    //           data-uses-dangerously-set-inner-html="true"
    //           contentEditable={false}
    //           onClick={handleTextClick}
    //           dangerouslySetInnerHTML={{
    //             __html: isEdited[
    //               `features-sub-heading-text-5-${index + 1}-${uniqueId}`
    //             ]
    //               ? elementContent[
    //                   `features-sub-heading-text-5-${index + 1}-${uniqueId}`
    //                 ]
    //               : elementContent[
    //                   `features-sub-heading-text-5-${index + 1}-${uniqueId}`
    //                 ] || "Item 5",
    //           }}
    //         ></h2>
    //         <p
    //           id={`features-sub-paragraph-text-5-${index + 1}-${uniqueId}`}
    //           style={getElementStyle(
    //             `features-sub-paragraph-${index + 1}`,
    //             uniqueId
    //           )}
    //           className={`features-sub-paragraph-${index + 1}-${uniqueId}`}
    //           data-text="Type a paragraph"
    //           data-uses-dangerously-set-inner-html="true"
    //           contentEditable={false}
    //           onClick={handleTextClick}
    //           dangerouslySetInnerHTML={{
    //             __html: isEdited[
    //               `features-sub-paragraph-text-5-${index + 1}-${uniqueId}`
    //             ]
    //               ? elementContent[
    //                   `features-sub-paragraph-text-5-${index + 1}-${uniqueId}`
    //                 ]
    //               : elementContent[
    //                   `features-sub-paragraph-text-5-${index + 1}-${uniqueId}`
    //                 ] || text.description,
    //           }}
    //         ></p>
    //       </div>

    //       <div
    //         className={`${
    //           isMobile ? "w-[45%]" : ""
    //         } flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl`}
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="um-icon _92496331"
    //           fill="currentColor"
    //           width="24"
    //           height="24"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"></path>
    //         </svg>
    //         <h2
    //           id={`features-sub-heading-text-6-${index + 1}-${uniqueId}`}
    //           style={getElementStyle(
    //             `features-sub-heading-${index + 1}`,
    //             uniqueId
    //           )}
    //           className={`features-sub-heading-${
    //             index + 1
    //           }-${uniqueId} font-semibold `}
    //           data-text="Heading"
    //           data-uses-dangerously-set-inner-html="true"
    //           contentEditable={false}
    //           onClick={handleTextClick}
    //           dangerouslySetInnerHTML={{
    //             __html: isEdited[
    //               `features-sub-heading-text-6-${index + 1}-${uniqueId}`
    //             ]
    //               ? elementContent[
    //                   `features-sub-heading-text-6-${index + 1}-${uniqueId}`
    //                 ]
    //               : elementContent[
    //                   `features-sub-heading-text-6-${index + 1}-${uniqueId}`
    //                 ] || "Item 6",
    //           }}
    //         ></h2>
    //         <p
    //           id={`features-sub-paragraph-text-6-${index + 1}-${uniqueId}`}
    //           style={getElementStyle(
    //             `features-sub-paragraph-${index + 1}`,
    //             uniqueId
    //           )}
    //           className={`features-sub-paragraph-${index + 1}-${uniqueId}`}
    //           data-text="Type a paragraph"
    //           data-uses-dangerously-set-inner-html="true"
    //           contentEditable={false}
    //           onClick={handleTextClick}
    //           dangerouslySetInnerHTML={{
    //             __html: isEdited[
    //               `features-sub-paragraph-text-6-${index + 1}-${uniqueId}`
    //             ]
    //               ? elementContent[
    //                   `features-sub-paragraph-text-6-${index + 1}-${uniqueId}`
    //                 ]
    //               : elementContent[
    //                   `features-sub-paragraph-text-6-${index + 1}-${uniqueId}`
    //                 ] || text.description,
    //           }}
    //         ></p>
    //       </div>
    //     </div>
    //   </div>
    // </section>,