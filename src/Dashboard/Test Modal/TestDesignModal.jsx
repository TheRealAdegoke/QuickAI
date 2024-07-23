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
    handleTextClick,
    backgroundStyle,
    isFocused,
    handleFocus,
    handleBlur,
  } = useContext(DashContext);



  const navElement = navComponents({
    text,
    buttonIndex,
    isMobile,
    handleTextClick,
  })[0];
  const element = heroComponents({
    text,
    buttonIndex,
    isMobile,
    handleTextClick,
    isFocused,
    handleFocus,
    handleBlur,
  })[4];

  return (
    <main className="bg-white w-full mt-5 max-md:mt-0 mx-10 h-[93vh] max-md:h-[89vh] max-[499px]:mx-4 overflow-scroll overflow-x-hidden pt-14 select-none">
      {element}

      {/* <section style={{ background: backgroundStyle }}>
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
              className={`font-bold xl:text-5xl text-3xl mb-4 outline-none ${
                isFocused
                  ? ""
                  : "hover:border-[2px] hover:border-[rgb(0,111,173)]"
              }`}
              data-text="Heading"
              contentEditable
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {text.heroHeaderText}
            </h1>
            <p
              className={`font-medium outline-none ${
                isFocused
                  ? ""
                  : "hover:border-[2px] hover:border-[rgb(0,111,173)]"
              }`}
              data-text="Type a paragraph"
              contentEditable
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
      </section> */}
    </main>
  );
};

export default TestDesignModal;







// import React, {
//   createContext,
//   useContext,
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// export const EditContext = createContext();

// const EditAndSaveProvider = ({ children }) => {
//   const elementRefs = useRef([]);
//   const scrollableDivRef = useRef(null);
//   const [displayEditModal, setDisplayEditModal] = useState(false);
//   const [changeSectionHeaderText, setChangeSectionHeaderText] = useState("");
//   const [isPattern, setIsPattern] = useState(true);
//   const [clickedIndex, setClickedIndex] = useState(null);
//   const [elements, setElements] = useState([]);
//   const [currentSection, setCurrentSection] = useState(null);
//   const [isGradient, setIsGradient] = useState(false);
//   const [color1, setColor1] = useState({ r: 255, g: 255, b: 255, a: 1 });
//   const [color2, setColor2] = useState({ r: 255, g: 255, b: 255, a: 1 });
//   const [hex1, setHex1] = useState("#ffffff");
//   const [hex2, setHex2] = useState("#ffffff");
//   const [inputValue, setInputValue] = useState("ffffff");
//   const [isActive, setIsActive] = useState(0);
//   const [isFocused, setIsFocused] = useState(false);
//   const buttons = [
//     "Header",
//     "Hero",
//     "Card Feature",
//     "Classical Feature",
//     "Testimonial",
//     "FAQ",
//     "Team",
//   ];

//   return (
//     <EditContext.Provider
//       value={{
//         elementRefs,
//         scrollableDivRef,
//         displayEditModal,
//         changeSectionHeaderText,
//         isPattern,
//         clickedIndex,
//         buttons,
//         elements,
//         currentSection,
//         isGradient,
//         setDisplayEditModal,
//         setChangeSectionHeaderText,
//         setIsPattern,
//         setClickedIndex,
//         setElements,
//         setCurrentSection,
//         setIsGradient,
//         color1,
//         setColor1,
//         color2,
//         setColor2,
//         hex1,
//         setHex1,
//         hex2,
//         setHex2,
//         inputValue,
//         setInputValue,
//         isActive,
//         setIsActive,
//         isFocused,
//         setIsFocused,
//       }}
//     >
//       {children}
//     </EditContext.Provider>
//   );
// };

// export default EditAndSaveProvider;
