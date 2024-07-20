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
import { EditContext } from "../DashBoardChildren/Sites/EditAndSaveComponents/EditAndSaveContext/EditAndContext";

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
  } = useContext(DashContext);
  const {
    backgroundStyle,
  } = useContext(EditContext);
  const [textAreaContent, setTextAreaContent] = useState("");
  const [selectedElement, setSelectedElement] = useState(null);
  const resizableRef = useRef(null);
  const [isResizingRight, setIsResizingRight] = useState(false);
  const [isResizingLeft, setIsResizingLeft] = useState(false);
  const [initialWidth, setInitialWidth] = useState(0);
  const [initialX, setInitialX] = useState(0);
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  // const handleMobileToggle = () => {
  //   setIsMobile(!isMobile);
  // };

  const handleTextClick = (element) => {
    setSelectedElement(element);
    setTextAreaContent(element.innerText);
  };

  const handleTextareaChange = (e) => {
    setTextAreaContent(e.target.value);
    if (selectedElement) {
      selectedElement.innerText = e.target.value;
    }
  };

  const isLargeScreen = () => window.innerWidth >= 1024;

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseDownRight = (e) => {
    if (isLargeScreen()) {
      setIsResizingRight(true);
      setInitialWidth(resizableRef.current.clientWidth);
      setInitialX(e.clientX);
    }
  };

  const handleMouseDownLeft = (e) => {
    if (isLargeScreen()) {
      setIsResizingLeft(true);
      setInitialWidth(resizableRef.current.clientWidth);
      setInitialX(e.clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isResizingRight) {
      const deltaX = e.clientX - initialX;
      const newWidth = initialWidth + deltaX;
      if (newWidth >= 270) {
        resizableRef.current.style.width = `${newWidth}px`;
      } if (newWidth < 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    } else if (isResizingLeft) {
      const deltaX = initialX - e.clientX;
      const newWidth = initialWidth + deltaX;
      if (newWidth >= 270) {
        resizableRef.current.style.width = `${newWidth}px`;
      } if (newWidth < 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
  };

  const handleMouseUp = () => {
    setIsResizingRight(false);
    setIsResizingLeft(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizingRight, isResizingLeft]);

  const navElement = navComponents({
    text,
    buttonIndex,
    isMobile,
    handleTextClick,
  })[0];
  const element = testimonialComponent({
    text,
    buttonIndex,
    isMobile,
    handleTextClick,
  })[8];

  return (
    <main
      className="bg-[blue] w-full mt-5 max-md:mt-0 mx-10 h-[93vh] max-md:h-[89vh] max-[499px]:mx-4 overflow-scroll overflow-x-hidden pt-14 select-none"
      style={{ background: backgroundStyle }}
    >
      <div>
        <textarea
          name=""
          id=""
          value={textAreaContent}
          onChange={handleTextareaChange}
          className="border-red-950 border-2 text-black w-[300px] h-[50px] fixed"
        ></textarea>
      </div>

      <div className="min-h-screen flex flex-col items-center gap-6 px-10 mt-16">
        <div
          ref={resizableRef}
          className="bg-white rounded-xl border-[1px] w-[90%] h-[500px] mx-auto relative"
        >
          <div
            className="absolute top-1/2 right-[-9px] transform -translate-x-1/2 -translate-y-1/2  w-2 h-[50px] cursor-ew-resize bg-[rgba(0,0,0,0.8)] rounded-t-[8px] rounded-b-[8px] max-lg:hidden z-50"
            onMouseDown={handleMouseDownRight}
          ></div>
          <div
            className="absolute top-1/2 left-[0px]  transform -translate-x-1/2 -translate-y-1/2 w-2 h-[50px] cursor-ew-resize bg-[rgba(0,0,0,0.8)] rounded-t-[8px] rounded-b-[8px] max-lg:hidden z-50"
            onMouseDown={handleMouseDownLeft}
          ></div>
          <div className="overflow-y-scroll h-full">
            {navElement}
            {element}
          </div>
        </div>
      </div>
      {/* {element} */}
      <PickerComponent />
    </main>
  );
};

export default TestDesignModal;



export const PickerComponent = () => {
  const {
    backgroundStyle,
    isGradient,
    setIsGradient,
    color1,
    setColor1,
    color2,
    setColor2,
    hex1,
    setHex1,
    hex2,
    setHex2,
    inputValue,
    setInputValue,
    isActive,
    setIsActive,
  } = useContext(EditContext);
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
    // Remove non-alphanumeric characters and limit to 6 characters
    const sanitizedHex = newHex.replace(/[^a-fA-F0-9]/g, "").slice(0, 6);
    setInputValue(sanitizedHex);

    // Validate HEX format before updating the color state
    if (/^[0-9A-Fa-f]{6}$/.test(sanitizedHex)) {
      if (isActive === 0) {
        setHex1(`#${sanitizedHex}`);
        setColor1(hexToRgba(`#${sanitizedHex}`));
      } else {
        setHex2(`#${sanitizedHex}`);
        setColor2(hexToRgba(`#${sanitizedHex}`));
      }
    }
  };

  return (
    <section className="bg-[rgb(36,37,40)] py-5 rounded-[8px] px-2 w-[500px] h-[400px]">
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

      <div
        className={`w-[400px] h-[100px]`}
        style={{ background: backgroundStyle }}
      ></div>
    </section>
  );
};

 PickerComponent;
