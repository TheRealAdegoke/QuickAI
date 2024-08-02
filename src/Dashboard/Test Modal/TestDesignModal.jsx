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
  } = useContext(DashContext);
  const [clickedText, setClickedText] = useState("");
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedDiv, setSelectedDiv] = useState(null)
  const [backGroundStyle, setBackGroundStyle] = useState("");
  const [showColorPicker, setShowColorPicker] = useState(true)



  const navElement = navComponents({
    text,
    buttonIndex,
    isMobile,
  })[0];
  const element = heroComponents({
    text,
    buttonIndex,
    isMobile,
    isFocused,
    handleFocus,
    handleBlur,
    location
  })[4];

   const handleTextClick = (event) => {
     setClickedText(event.target.innerText);
     setSelectedElement(event.target);
   };

   const handleTextareaChange = (event) => {
     const newText = event.target.value;
     setClickedText(newText);
     if (selectedElement) {
       selectedElement.innerText = newText;
     }
   };

   const handleColorClick = (
     color,
   ) => {
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

   const handleBGColorClick = (
     color,
   ) => {
     if (selectedDiv) {
       selectedDiv.style.background = color;
     }
   };

   const handleDivClick = (event) => {
     setSelectedDiv(event.currentTarget);
   };

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

      <button
        onClick={() => {
          setShowColorPicker(!showColorPicker);
        }}
        className="text-black"
      >
        Toggle color picker
      </button>

      {showColorPicker ? (
        <TestColorPickerComponent setBackGroundStyle={setBackGroundStyle} />
      ) : (
        ""
      )}

      <div className="">
        <div
          className="size-[400px] border-[2px] border-[black]"
          onClick={handleDivClick}
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur consequuntur, expedita facere nostrum natus molestiae
            alias adipisci vitae, esse neque vero nemo rerum eum fuga doloremque
            perferendis eligendi tenetur inventore.
          </p>
        </div>
        <div
          className="size-[40px] border-[2px] border-[black]"
          onClick={handleDivClick}
        ></div>
        <div
          className="size-[40px] border-[2px] border-[black]"
          onClick={handleDivClick}
        ></div>
      </div>

      <textarea
        name=""
        id=""
        className="bg-[black] text-white size-[400px] fixed right-0 z-50"
        value={clickedText}
        placeholder="Typing..."
        onChange={handleTextareaChange}
      ></textarea>

      <div className="color-container flex gap-4 justify-center">
        <div
          className="size-4 rounded-full bg-[red] cursor-pointer"
          onClick={() => {
            handleColorClick("red"), handleBGColorClick("red");
          }}
        ></div>
        <div
          className="size-4 rounded-full bg-[blue] cursor-pointer"
          onClick={() => {
            handleColorClick("blue"), handleBGColorClick("blue");
          }}
        ></div>
        <div
          className="size-4 rounded-full bg-[black] cursor-pointer"
          onClick={() => {
            handleColorClick("black"), handleBGColorClick("black");
          }}
        ></div>
      </div>

      <section style={{}}>
        <div
          className={`${
            isMobile ? "h-[750px] flex-col" : ""
          } h-[600px] max-lg:h-[750px] my-5 flex lg:gap-8 lg:justify-evenly max-lg:flex-col max-w-[1200px] mx-auto lg:pl-5`}
        >
          <div
            className={`${
              isMobile ? "w-[90%]" : ""
            } text-[rgb(33,37,41)] w-[40%] max-lg:w-[90%] max-w-[500px] mx-auto lg:pt-16`}
          >
            <h1
              className={`font-bold xl:text-5xl text-3xl mb-4 outline-none`}
            >
              {text.heroHeaderText}
            </h1>
            <p
              className={`font-medium outline-none`}
              onClick={handleTextClick}
              data-text="Type a paragraph"
              contentEditable={false}
            >
              {text.description}
            </p>
            {buttonIndex !== undefined && buttonElement}
          </div>
          <div
            className={`${
              isMobile ? "w-full max-w-[500px] mx-auto" : ""
            } relative w-[55%] h-full max-lg:w-full max-lg:max-w-[500px] max-lg:mx-auto`}
          >
            <div
              className={`${
                isMobile ? "left-[35%] transform -translate-x-1/2" : ""
              } w-[250px] h-[400px] bg-[rgb(33,37,41)] rounded-[35px] px-3 pt-3 mb-4 absolute top-2 max-lg:left-[35%] max-lg:transform max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 max-lg:top-1/2 max-xl:top-2 max-xl:right-32 z-20`}
            >
              <img
                src={testImage}
                alt={testImage}
                className="h-[350px] rounded-[35px] object-cover"
              />
            </div>
            <div
              className={`${
                isMobile ? "left-[60%] transform -translate-x-1/2" : ""
              } w-[260px] h-[480px] bg-[rgb(33,37,41)] rounded-[35px] px-3 pt-3 absolute max-lg:left-[60%] max-lg:transform max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 max-lg:top-1/2 top-[7%] right-0 xl:right-[28%] z-10`}
            >
              <img
                src={testImage}
                alt={testImage}
                className="h-[420px] rounded-[35px] object-cover"
              />
            </div>
            <div
              className={`${
                isMobile ? "hidden" : ""
              } w-[260px] h-[450px] bg-[rgb(33,37,41)] rounded-[35px] px-3 py-3 absolute top-14 right-5 max-xl:hidden`}
            >
              <img
                src={testImage}
                alt={testImage}
                className="h-full rounded-[35px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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

        <button
          className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
          onClick={() => handleColorClick("", "2rem")}
        >
          size
        </button>
      </div>

      <section style={{}}>
        <div
          className={`${
            isMobile ? "flex-col-reverse" : ""
          } py-5 max-w-[1200px] mx-auto flex justify-center max-lg:flex-col-reverse`}
        >
          <div
            className={`${
              isMobile ? "w-[90%]" : ""
            } text-[rgb(33,37,41)] w-[45%] max-lg:w-[90%] max-w-[500px] mx-auto lg:pt-16`}
          >
            <h1
              className={`font-bold xl:text-5xl text-3xl mb-4`}
              onClick={handleTextClick}
              data-text="Heading"
              contentEditable={true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {text.heroHeaderText}
            </h1>
            <p
              className={`font-medium`}
              onClick={handleTextClick}
              data-text="Heading"
              contentEditable={true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {text.description}
            </p>
            {buttonIndex !== undefined && buttonElement}
          </div>

          <div
            className={`${
              isMobile ? "w-full" : ""
            } w-[45%] max-lg:w-full mb-10`}
          >
            <div className="mx-auto w-[90%] max-w-[500px] h-[500px] bg-[rgb(33,37,41)] px-3 py-3">
              <img
                src={testImage}
                alt={testImage}
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
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
  /* <div className="flex flex-wrap gap-2 items-center justify-center">
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
          Extrapbold
        </button>

        <button
          className={`bg-[rgb(9,11,14)] rounded-[5px] px-2 py-1 w-[100px] text-nowrap`}
          onClick={() => handleFontWeightClick(900)}
        >
          Black
        </button>
      </div> */
}

{
  /* <div className="flex flex-wrap gap-2 items-center justify-center">
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

      <div className="flex flex-wrap gap-2 items-center justify-center max-w-[500px]">
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
          onClick={() => handleFontFamilyClick("Arial, Helvetica, sans-serif")}
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
            handleFontFamilyClick("Georgia, 'Times New Roman', Times, serif")
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
            handleFontFamilyClick("Verdana, Geneva, Tahoma, sans-serif")
          }
        >
          Verda
        </button>
      </div> */
}