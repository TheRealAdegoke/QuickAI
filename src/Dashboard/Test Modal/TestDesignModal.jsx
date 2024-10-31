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
      <main>
        <nav
          className="w-full shadow-xl relative z-40"
          style={{
            background: "#aa2579",
          }}
        >
          <div className="flex justify-between items-center px-5">
            <div className="w-1/5 max-md:w-[30%] flex items-center gap-1 py-3">
              <img
                alt="Web logo"
                className="w-[40px]"
                src="https://res.cloudinary.com/dpyp7innp/image/upload/v1715591674/ad53c5d6-b066-455b-a840-7c1c3538e430.png"
              />
              <h1 className="nav-name-1-0 font-semibold text-black" style={{}}>
                Lorem
              </h1>
            </div>
            <label className="lg:hidden show-menu" htmlFor="id-show-menu">
              <div className="text-2xl text-black cursor-pointer">
                <svg
                  height="25"
                  viewBox="0 0 50 50"
                  width="25"
                  x="0px"
                  xmlns="http://www.w3.org/2000/svg"
                  y="0px"
                >
                  <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                </svg>
              </div>
            </label>
            <input
              className="appearance-none hidden peer"
              role="button"
              type="checkbox"
            />
            <div className="lg:opacity-100 lg:visible menu-block max-lg:absolute max-lg:left-0 top-14 max-lg:w-full max-lg:h-[400px]  max-lg:px-0 opacity-0 align-middle invisible transition-all duration-75 peer-checked:visible peer-checked:opacity-100 ">
              <ul className="lg:gap-5 flex max-lg:flex-col w-full text-[rgba(0,0,0,0.8)] text-lg text-center font-semibold">
                <li className=" max-lg:border-t-[1px] py-5 cursor-pointer hover:underline flex justify-center items-center">
                  <span className="list-link-text-1-0" style={{}}>
                    Get Help
                  </span>
                </li>
                <li className=" max-lg:border-t-[1px] py-5 cursor-pointer hover:underline flex justify-center items-center">
                  <span className="list-link-text-1-0" style={{}}>
                    Explore
                  </span>
                </li>
                <li className=" max-lg:border-t-[1px] py-5 cursor-pointer hover:underline flex justify-center items-center">
                  <span className="list-link-text-1-0" style={{}}>
                    Download Now
                  </span>
                </li>
                <li className=" max-lg:border-t-[1px] py-5 cursor-pointer hover:underline flex justify-center items-center">
                  <span className="list-link-text-1-0" style={{}}>
                    Pricing
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section
          style={{
            background: "#962020",
          }}
        >
          <div className=" py-24 max-w-[1200px] mx-auto flex flex-row-reverse justify-center max-lg:flex-col-reverse">
            <div className=" text-[rgb(33,37,41)] w-[45%] max-lg:w-[90%] max-w-[500px] mx-auto lg:pt-16">
              <h1
                className="hero-heading-6-undefined font-bold xl:text-5xl text-3xl mb-4 break-words"
                style={{
                  color: "#3498db",
                  fontSize: "nullpx",
                  lineHeight: "1.2",
                  wordWrap: "break-word",
                }}
              >
                Wellness Retreat Planning Made Easy \n
              </h1>
              <p
                className="hero-paragraph-6-undefined font-medium break-words"
                style={{
                  color: "#ffffff",
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </p>
              <div className="my-3 flex gap-3">
                <button
                  className="py-3 px-4 bg-white border-[1px] text-black shadow-lg font-semibold min-w-[250px]"
                  style={{
                    background: "#682096",
                  }}
                >
                  <span className="Hero-btn-text-style-6-undefined" style={{}}>
                    Shop Now
                  </span>
                </button>
              </div>
            </div>
            <div className=" w-[45%] max-lg:w-full mb-10">
              <div
                className="mx-auto w-[90%] max-w-[500px] h-[500px] px-3 py-3"
                style={{
                  background: "#162b80",
                }}
              >
                <img
                  alt="quickui-lib-image"
                  className="object-cover h-full w-full"
                  src="https://images.unsplash.com/photo-1556760544-74068565f05c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODA1ODh8MHwxfHNlYXJjaHwxfHxXZWxsbmVzcyUyMFJldHJlYXQlMjBQbGFubmluZ3xlbnwwfHx8fDE3Mjk0ODY5NTV8MA&ixlib=rb-4.0.3&q=80&w=1080"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          style={{
            background: "#10288c",
          }}
        >
          <div className=" text-black w-[90%] mx-auto py-24 flex max-lg:flex-col justify-between max-w-[1000px]">
            <div className=" w-[50%] flex flex-col items-start gap-3 max-lg:w-full">
              <div className="">
                <h1
                  className="features-with-card-heading-1-undefined text-[#231e41] text-3xl font-bold mb-1 break-words"
                  style={{
                    color: "#f1c40f",
                    fontSize: "nullpx",
                    lineHeight: "1.2",
                    wordWrap: "break-word",
                  }}
                >
                  Product Features
                </h1>
                <p
                  className="features-with-card-paragraph-1-undefined text-[#231e41] max-w-[500px] break-words"
                  style={{}}
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
              </div>
              <div>
                <div className="flex gap-3 max-w-[400px] mb-5">
                  <svg
                    fill="#231e41"
                    height="50"
                    viewBox="0 0 24 24"
                    width="50"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
                  </svg>
                  <div className="mt-2">
                    <h2
                      className="features-with-card-sub-heading-1-undefined capitalize text-xl font-semibold text-[#231e41]"
                      style={{}}
                    >
                      Item One
                    </h2>
                    <p
                      className="features-with-card-sub-paragraph-1-undefined text-[#231e41] "
                      style={{}}
                    >
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 max-w-[400px] mb-5">
                  <svg
                    fill="#231e41"
                    height="50"
                    viewBox="0 0 512 512"
                    width="50"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                  </svg>
                  <div className="mt-2">
                    <h2
                      className="features-with-card-sub-heading-1-undefined capitalize text-xl font-semibold text-[#231e41]"
                      style={{}}
                    >
                      Item Two
                    </h2>
                    <p
                      className="features-with-card-sub-paragraph-1-undefined text-[#231e41] "
                      style={{}}
                    >
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 max-w-[400px] mb-5">
                  <svg
                    fill="#231e41"
                    height="50"
                    viewBox="0 0 24 24"
                    width="50"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
                  </svg>
                  <div className="mt-2">
                    <h2
                      className="features-with-card-sub-heading-1-undefined capitalize text-xl font-semibold text-[#231e41]"
                      style={{}}
                    >
                      Item Three
                    </h2>
                    <p
                      className="features-with-card-sub-paragraph-1-undefined text-[#231e41] "
                      style={{}}
                    >
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="capitalize flex text-black shadow-lg px-8 py-2 rounded-full font-semibold text-sm my-3 border-[1px] border-[rgba(0,0,0,0.2)]"
                style={{
                  background: "#6b108c",
                }}
              >
                <span
                  className="features-with-card-button-text-style-1-undefined"
                  style={{}}
                >
                  Explore
                </span>
              </button>
            </div>
            <div
              className=" w-[40%] max-lg:w-full max-lg:mt-5"
              style={{
                background: "#254a19",
              }}
            >
              <img
                alt="quickui-lib-image"
                className="block h-[550px] mx-auto object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1531299244174-d247dd4e5a66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODA1ODh8MHwxfHNlYXJjaHw3fHxXZWxsbmVzcyUyMFJldHJlYXQlMjBQbGFubmluZ3xlbnwwfHx8fDE3Mjk0ODY5NTV8MA&ixlib=rb-4.0.3&q=80&w=1080"
              />
            </div>
          </div>
        </section>
        <section
          style={{
            background: "#3bb5b4",
          }}
        >
          <div className="text-black py-32 max-w-[1000px] mx-auto">
            <div className="flex flex-col justify-center items-center text-center">
              <h1
                className="features-heading-2-undefined text-3xl font-bold my-2 text-center "
                style={{}}
              >
                Feature Set
              </h1>
              <p className="features-paragraph-2-undefined" style={{}}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </p>
            </div>
            <div className=" my-10 flex flex-wrap max-sm:flex-col gap-8">
              <div
                className=" flex flex-col gap-2 justify-center items-center text-center text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl"
                style={{
                  background: "#87b53b",
                }}
              >
                <svg
                  className="um-icon _92496331"
                  fill="currentColor"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path>
                </svg>
                <h2
                  className="features-sub-heading-2-undefined font-semibold "
                  style={{}}
                >
                  Item 1
                </h2>
                <p className="features-sub-paragraph-2-undefined" style={{}}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
                <button
                  className="capitalize block text-black shadow-lg border-[1px] border-[rgba(0,0,0,0.2)] px-5 py-1 rounded-full font-semibold text-sm my-3"
                  style={{
                    background: "#a03bb5",
                  }}
                >
                  <span
                    className="features-button-text-style-2-undefined"
                    style={{}}
                  >
                    Download Now
                  </span>
                </button>
              </div>
              <div
                className=" flex flex-col gap-2 justify-center items-center text-center text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl"
                style={{
                  background: "#87b53b",
                }}
              >
                <svg
                  className="um-icon _92496331"
                  fill="currentColor"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path>
                </svg>
                <h2
                  className="features-sub-heading-2-undefined font-semibold "
                  style={{}}
                >
                  Item 2
                </h2>
                <p className="features-sub-paragraph-2-undefined" style={{}}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
                <button
                  className="capitalize block text-black shadow-lg border-[1px] border-[rgba(0,0,0,0.2)] px-5 py-1 rounded-full font-semibold text-sm my-3"
                  style={{
                    background: "#a03bb5",
                  }}
                >
                  <span
                    className="features-button-text-style-2-undefined"
                    style={{}}
                  >
                    Download Now
                  </span>
                </button>
              </div>
              <div
                className=" flex flex-col gap-2 justify-center items-center text-center text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl"
                style={{
                  background: "#87b53b",
                }}
              >
                <svg
                  className="um-icon _92496331"
                  fill="currentColor"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"></path>
                </svg>
                <h2
                  className="features-sub-heading-2-undefined font-semibold "
                  style={{}}
                >
                  Item 3
                </h2>
                <p className="features-sub-paragraph-2-undefined" style={{}}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
                <button
                  className="capitalize block text-black shadow-lg border-[1px] border-[rgba(0,0,0,0.2)] px-5 py-1 rounded-full font-semibold text-sm my-3"
                  style={{
                    background: "#a03bb5",
                  }}
                >
                  <span
                    className="features-button-text-style-2-undefined"
                    style={{}}
                  >
                    Download Now
                  </span>
                </button>
              </div>
              <div
                className=" flex flex-col gap-2 justify-center items-center text-center text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl"
                style={{
                  background: "#87b53b",
                }}
              >
                <svg
                  className="um-icon _92496331"
                  fill="currentColor"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
                </svg>
                <h2
                  className="features-sub-heading-2-undefined font-semibold "
                  style={{}}
                >
                  Item 4
                </h2>
                <p className="features-sub-paragraph-2-undefined" style={{}}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
                <button
                  className="capitalize block text-black shadow-lg border-[1px] border-[rgba(0,0,0,0.2)] px-5 py-1 rounded-full font-semibold text-sm my-3"
                  style={{
                    background: "#a03bb5",
                  }}
                >
                  <span
                    className="features-button-text-style-2-undefined"
                    style={{}}
                  >
                    Download Now
                  </span>
                </button>
              </div>
              <div
                className=" flex flex-col gap-2 justify-center items-center text-center text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl"
                style={{
                  background: "#87b53b",
                }}
              >
                <svg
                  className="um-icon _92496331"
                  fill="currentColor"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
                </svg>
                <h2
                  className="features-sub-heading-2-undefined font-semibold "
                  style={{}}
                >
                  Item 5
                </h2>
                <p className="features-sub-paragraph-2-undefined" style={{}}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
                <button
                  className="capitalize block text-black shadow-lg border-[1px] border-[rgba(0,0,0,0.2)] px-5 py-1 rounded-full font-semibold text-sm my-3"
                  style={{
                    background: "#a03bb5",
                  }}
                >
                  <span
                    className="features-button-text-style-2-undefined"
                    style={{}}
                  >
                    Download Now
                  </span>
                </button>
              </div>
              <div
                className=" flex flex-col gap-2 justify-center items-center text-center text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl"
                style={{
                  background: "#87b53b",
                }}
              >
                <svg
                  className="um-icon _92496331"
                  fill="currentColor"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"></path>
                </svg>
                <h2
                  className="features-sub-heading-2-undefined font-semibold "
                  style={{}}
                >
                  Item 6
                </h2>
                <p className="features-sub-paragraph-2-undefined" style={{}}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
                <button
                  className="capitalize block text-black shadow-lg border-[1px] border-[rgba(0,0,0,0.2)] px-5 py-1 rounded-full font-semibold text-sm my-3"
                  style={{
                    background: "#a03bb5",
                  }}
                >
                  <span
                    className="features-button-text-style-2-undefined"
                    style={{}}
                  >
                    Download Now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-10"
          style={{
            background: "#36620e",
          }}
        >
          <div
            className="py-32 text-black w-[90%] max-w-[1000px] mx-auto bg-white border-solid shadow-xl rounded-lg p-5"
            style={{
              background: "#530e62",
            }}
          >
            <h1
              className="testimonial-heading-4-undefined text-3xl font-semibold capitalize mb-5 "
              style={{}}
            >
              Feedback from Clients
            </h1>
            <p
              className="testimonial-paragraph-4-undefined text-xl "
              style={{}}
            >
              QuickUI is incredibly cool. The builder is easy to use and gets
              you beautiful results. The team is also pretty cool. I might be a
              bit biased so take a look for yourself!
            </p>
            <div className="my-8 flex items-center gap-3">
              <img
                alt=""
                className="block rounded-full w-[50px] h-[50px] object-cover"
                src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
              />
              <div className="text-sm font-semibold">
                <p
                  className="testimonial-name-header-paragraph-4-undefined"
                  style={{}}
                >
                  Gabriel
                </p>
                <p
                  className="testimonial-name-paragraph-4-undefined"
                  style={{}}
                >
                  Founder QuickUI
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-10"
          style={{
            background: "#2725aa",
          }}
        >
          <div
            className=" text-black py-32 w-[90%] max-lg:max-w-[400px] mx-auto max-w-[1000px] border-solid shadow-2xl rounded-xl p-5"
            style={{
              background: "#64aa25",
            }}
          >
            <div className="mb-10">
              <h1
                className="faq-heading-2-undefined text-3xl font-bold text-[#212529] mb-2 "
                style={{}}
              >
                Quick Help
              </h1>
              <p className="faq-paragraph-2-undefined" style={{}}>
                Explore answers to popular questions from our customers.
              </p>
            </div>
            <div className=" flex flex-wrap justify-between max-lg:flex-col gap-5">
              <div className=" w-[40%] max-lg:w-[80%]">
                <h2 className="faq-sub-heading-2-undefined" style={{}}>
                  Question 1
                </h2>
                <p className="faq-sub-paragraph-2-undefined my-2" style={{}}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
              </div>
              <div className=" w-[40%] max-lg:w-[80%]">
                <h2 className="faq-sub-heading-2-undefined" style={{}}>
                  Question 2
                </h2>
                <p className="faq-sub-paragraph-2-undefined my-2" style={{}}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
              </div>
              <div className=" w-[40%] max-lg:w-[80%]">
                <h2 className="faq-sub-heading-2-undefined" style={{}}>
                  Question 3
                </h2>
                <p className="faq-sub-paragraph-2-undefined my-2" style={{}}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
              </div>
              <div className=" w-[40%] max-lg:w-[80%]">
                <h2 className="faq-sub-heading-2-undefined" style={{}}>
                  Question 4
                </h2>
                <p className="faq-sub-paragraph-2-undefined my-2" style={{}}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          style={{
            background: "#25aa49",
          }}
        >
          <div className="text-black py-32 w-[90%] max-w-[1000px] mx-auto">
            <div className="mb-10 text-center">
              <h1
                className="team-heading-2-undefined text-3xl font-bold text-[#212529] mb-2 "
                style={{}}
              >
                Our Experts
              </h1>
              <p className="team-paragraph-2-undefined" style={{}}>
                Learn about the passionate team dedicated to driving change.
              </p>
            </div>
            <div className="  flex flex-wrap max-md:flex-col gap-4">
              <div
                className="lg:w-[30%] border-solid shadow-2xl text-black rounded-2xl w-[90%] max-w-[350px] mx-auto py-5"
                style={{
                  background: "#9725aa",
                }}
              >
                <div className="w-[90%] mx-auto">
                  <img
                    alt=""
                    className="block w-full h-[250px] mx-auto object-cover rounded-lg"
                    src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
                  />
                </div>
                <div className="text-center mt-4 px-8">
                  <h1
                    className="team-name-header-paragraph-2-undefined font-semibold"
                    style={{}}
                  >
                    Gabriel
                  </h1>
                  <p className="team-name-paragraph-2-undefined" style={{}}>
                    Founder
                  </p>
                  <div className="flex gap-3 justify-center my-3">
                    <svg
                      className=""
                      height="24"
                      viewBox="0 0 448 512"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M416 32H31.9A32.1 32.1 0 0 0 0 64.3v383.4A32.1 32.1 0 0 0 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3A32.2 32.2 0 0 0 416 32zM135.4 416H69V202.2h66.5V416zm-33.2-243a38.5 38.5 0 1 1 0-77 38.5 38.5 0 0 1 0 77zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <svg
                      className=""
                      height="24"
                      viewBox="0 0 512 512"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M459.4 151.7c.3 4.6.3 9.1.3 13.7 0 138.7-105.6 298.5-298.6 298.5A296.5 296.5 0 0 1 0 417a217 217 0 0 0 25.3 1.2c49 0 94.3-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8a111 111 0 0 0 47.4-2 105 105 0 0 1-84.1-103v-1.2c14 7.8 30.2 12.6 47.4 13.3A104.9 104.9 0 0 1 35.7 67.2a298.3 298.3 0 0 0 216.4 109.9 104.9 104.9 0 0 1 179-95.8 206.6 206.6 0 0 0 66.6-25.4 104.7 104.7 0 0 1-46.1 57.8c21-2.3 41.6-8.1 60.4-16.2a225.6 225.6 0 0 1-52.6 54.2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="team-sub-paragraph-2-undefined mt-6" style={{}}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa.
                  </p>
                </div>
              </div>
              <div
                className="lg:w-[30%] border-solid shadow-2xl text-black rounded-2xl w-[90%] max-w-[350px] mx-auto py-5"
                style={{
                  background: "#9725aa",
                }}
              >
                <div className="w-[90%] mx-auto">
                  <img
                    alt=""
                    className="block w-full h-[250px] mx-auto object-cover rounded-lg"
                    src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
                  />
                </div>
                <div className="text-center mt-4 px-8">
                  <h1
                    className="team-name-header-paragraph-2-undefined font-semibold"
                    style={{}}
                  >
                    Gabriel
                  </h1>
                  <p className="team-name-paragraph-2-undefined" style={{}}>
                    Founder
                  </p>
                  <div className="flex gap-3 justify-center my-3">
                    <svg
                      className=""
                      height="24"
                      viewBox="0 0 448 512"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M416 32H31.9A32.1 32.1 0 0 0 0 64.3v383.4A32.1 32.1 0 0 0 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3A32.2 32.2 0 0 0 416 32zM135.4 416H69V202.2h66.5V416zm-33.2-243a38.5 38.5 0 1 1 0-77 38.5 38.5 0 0 1 0 77zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <svg
                      className=""
                      height="24"
                      viewBox="0 0 512 512"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M459.4 151.7c.3 4.6.3 9.1.3 13.7 0 138.7-105.6 298.5-298.6 298.5A296.5 296.5 0 0 1 0 417a217 217 0 0 0 25.3 1.2c49 0 94.3-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8a111 111 0 0 0 47.4-2 105 105 0 0 1-84.1-103v-1.2c14 7.8 30.2 12.6 47.4 13.3A104.9 104.9 0 0 1 35.7 67.2a298.3 298.3 0 0 0 216.4 109.9 104.9 104.9 0 0 1 179-95.8 206.6 206.6 0 0 0 66.6-25.4 104.7 104.7 0 0 1-46.1 57.8c21-2.3 41.6-8.1 60.4-16.2a225.6 225.6 0 0 1-52.6 54.2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="team-sub-paragraph-2-undefined mt-6" style={{}}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa.
                  </p>
                </div>
              </div>
              <div
                className="lg:w-[30%] border-solid shadow-2xl text-black rounded-2xl w-[90%] max-w-[350px] mx-auto py-5"
                style={{
                  background: "#9725aa",
                }}
              >
                <div className="w-[90%] mx-auto">
                  <img
                    alt=""
                    className="block w-full h-[250px] mx-auto object-cover rounded-lg"
                    src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
                  />
                </div>
                <div className="text-center mt-4 px-8">
                  <h1
                    className="team-name-header-paragraph-2-undefined font-semibold"
                    style={{}}
                  >
                    Gabriel
                  </h1>
                  <p className="team-name-paragraph-2-undefined" style={{}}>
                    Founder
                  </p>
                  <div className="flex gap-3 justify-center my-3">
                    <svg
                      className=""
                      height="24"
                      viewBox="0 0 448 512"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M416 32H31.9A32.1 32.1 0 0 0 0 64.3v383.4A32.1 32.1 0 0 0 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3A32.2 32.2 0 0 0 416 32zM135.4 416H69V202.2h66.5V416zm-33.2-243a38.5 38.5 0 1 1 0-77 38.5 38.5 0 0 1 0 77zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <svg
                      className=""
                      height="24"
                      viewBox="0 0 512 512"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M459.4 151.7c.3 4.6.3 9.1.3 13.7 0 138.7-105.6 298.5-298.6 298.5A296.5 296.5 0 0 1 0 417a217 217 0 0 0 25.3 1.2c49 0 94.3-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8a111 111 0 0 0 47.4-2 105 105 0 0 1-84.1-103v-1.2c14 7.8 30.2 12.6 47.4 13.3A104.9 104.9 0 0 1 35.7 67.2a298.3 298.3 0 0 0 216.4 109.9 104.9 104.9 0 0 1 179-95.8 206.6 206.6 0 0 0 66.6-25.4 104.7 104.7 0 0 1-46.1 57.8c21-2.3 41.6-8.1 60.4-16.2a225.6 225.6 0 0 1-52.6 54.2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="team-sub-paragraph-2-undefined mt-6" style={{}}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer
          style={{
            background: "#aa8825",
          }}
        >
          <div className=" border-t-[1px] py-14 flex max-md:flex-col max-md:items-start max-md:gap-10 justify-center items-center max-md:pl-5">
            <div className="flex flex-col justify-start items-start w-[20%]">
              <h1
                className="footer-first-heading-1-undefined text-black"
                style={{}}
              >
                © 2024 Your Company
              </h1>
              <h2
                className="footer-second-heading-1-undefined font-bold text-[rgb(42,42,47)] text-3xl"
                style={{}}
              >
                Lorem
              </h2>
              <div className="text-black flex gap-2 mt-3">
                <a href="https://www.linkedin.com/in/gabriel-adewale-adegoke/">
                  <svg
                    className=""
                    height="24"
                    viewBox="0 0 448 512"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M416 32H31.9A32.1 32.1 0 0 0 0 64.3v383.4A32.1 32.1 0 0 0 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3A32.2 32.2 0 0 0 416 32zM135.4 416H69V202.2h66.5V416zm-33.2-243a38.5 38.5 0 1 1 0-77 38.5 38.5 0 0 1 0 77zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <a href="https://twitter.com/TheReal_Adegoke">
                  <svg
                    className=""
                    height="24"
                    viewBox="0 0 512 512"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M459.4 151.7c.3 4.6.3 9.1.3 13.7 0 138.7-105.6 298.5-298.6 298.5A296.5 296.5 0 0 1 0 417a217 217 0 0 0 25.3 1.2c49 0 94.3-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8a111 111 0 0 0 47.4-2 105 105 0 0 1-84.1-103v-1.2c14 7.8 30.2 12.6 47.4 13.3A104.9 104.9 0 0 1 35.7 67.2a298.3 298.3 0 0 0 216.4 109.9 104.9 104.9 0 0 1 179-95.8 206.6 206.6 0 0 0 66.6-25.4 104.7 104.7 0 0 1-46.1 57.8c21-2.3 41.6-8.1 60.4-16.2a225.6 225.6 0 0 1-52.6 54.2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className=" text-[rgb(42,42,47)] flex max-md:flex-col max-md:gap-10 justify-evenly w-[70%]">
              <div className="w-[30%]">
                <h2
                  className="footer-sub-heading-1-undefined font-semibold"
                  style={{}}
                >
                  Features
                </h2>
                <div>
                  <p
                    className="footer-sub-paragraph-1-undefined cursor-pointer hover:underline text-sm"
                    style={{}}
                  >
                    Something Great
                  </p>
                  <p
                    className="footer-sub-paragraph-1-undefined cursor-pointer hover:underline text-sm"
                    style={{}}
                  >
                    Another Thing
                  </p>
                  <p
                    className="footer-sub-paragraph-1-undefined cursor-pointer hover:underline text-sm"
                    style={{}}
                  >
                    So many Features
                  </p>
                  <p
                    className="footer-sub-paragraph-1-undefined cursor-pointer hover:underline text-sm"
                    style={{}}
                  >
                    It's Amazing
                  </p>
                </div>
              </div>
              <div className="w-[30%]">
                <h2
                  className="footer-sub-heading-1-undefined font-semibold"
                  style={{}}
                >
                  Company
                </h2>
                <div>
                  <p
                    className="footer-sub-paragraph-1-undefined cursor-pointer hover:underline text-sm"
                    style={{}}
                  >
                    Blogs
                  </p>
                  <p
                    className="footer-sub-paragraph-1-undefined cursor-pointer hover:underline text-sm"
                    style={{}}
                  >
                    Contact
                  </p>
                  <p
                    className="footer-sub-paragraph-1-undefined cursor-pointer hover:underline text-sm"
                    style={{}}
                  >
                    About Us
                  </p>
                  <p
                    className="footer-sub-paragraph-1-undefined cursor-pointer hover:underline text-sm"
                    style={{}}
                  >
                    Jobs
                  </p>
                </div>
              </div>
              <div className="w-[30%]">
                <h2
                  className="footer-sub-heading-1-undefined font-semibold"
                  style={{}}
                >
                  Legal
                </h2>
                <div>
                  <p
                    className="footer-sub-paragraph-1-undefined cursor-pointer hover:underline text-sm"
                    style={{}}
                  >
                    Privacy Policy
                  </p>
                  <p
                    className="footer-sub-paragraph-1-undefined cursor-pointer hover:underline text-sm"
                    style={{}}
                  >
                    Terms of Use
                  </p>
                  <p
                    className="footer-sub-paragraph-1-undefined cursor-pointer hover:underline text-sm"
                    style={{}}
                  >
                    Cookie Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </main>
  );
};

export default TestDesignModal;
    // </section>,