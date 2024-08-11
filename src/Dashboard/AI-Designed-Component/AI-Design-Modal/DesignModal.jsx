import React, { useContext, useRef, useState, useEffect } from "react";
import { DashContext } from "../../DashboardChecker/DashboardContext";
import reactElementToJSXString from "react-element-to-jsx-string";
import { axiosInstance } from "../../../Pages/AuthPages/AuthChecker/axiosInstance";
import html2canvas from "html2canvas";
import { ImSpinner6 } from "react-icons/im";
import axios from "axios";
import { Link } from "react-router-dom";
import ElementArray from "../ElementArray";

const DesignModal = () => {
  const {
    showDesignModal,
    userInput,
    selectedIdea,
    handleUserData,
    clearDesigns,
  } = useContext(DashContext);
  const scrollRef = useRef(null);
  const photoRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const {
    elements,
    navElement,
    heroElement,
    featuresWithCardElement,
    featuresElement,
    testimonialElement,
    faqElement,
    teamElement,
    contactElement,
    footerElement,
    heroIndex,
    navIndex,
    featuresWithCardIndex,
    featuresIndex,
    testimonialIndex,
    faqIndex,
    teamIndex,
    contactIndex,
    footerIndex,
  } = ElementArray();

  const cloudinaryBaseURL = import.meta.env.VITE_REACT_APP_CLOUDINARY_BASE_URL;
  const cloudinaryFormDataAppend = import.meta.env
    .VITE_REACT_APP_CLOUDINARY_FORM_DATA_APPEND;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 1500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    if (scrollRef.current && autoScroll) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [currentIndex, autoScroll]);

  useEffect(() => {
    if (currentIndex >= elements.length - 1) {
      setAutoScroll(false);
    }
  }, [currentIndex]);

  // const saveDesign = async () => {
  //   setLoading(true);
  //   try {
  //     const canvas = await html2canvas(photoRef.current, { useCORS: true });
  //     const dataURL = canvas.toDataURL();
  //     const formData = new FormData();
  //     formData.append("file", dataURL);
  //     formData.append("upload_preset", `${cloudinaryFormDataAppend}`);

  //     const cloudinaryResponse = await axios.post(
  //       `${cloudinaryBaseURL}`,
  //       formData
  //     );
  //     const cloudinaryURL = cloudinaryResponse.data.secure_url;

  //     const postData = {
  //       prompt: userInput || selectedIdea,
  //       navStyle: {
  //         index: navIndex,
  //         style: reactElementToJSXString(navElement, {
  //           showFunctions: true,
  //           functionValue: (fn) => fn,
  //         }),
  //       },
  //       heroStyle: {
  //         index: heroIndex,
  //         style: reactElementToJSXString(heroElement, {
  //           showFunctions: true,
  //           functionValue: (fn) => fn,
  //         }),
  //       },
  //       sectionOneStyle: {
  //         index: featuresWithCardIndex,
  //         style: reactElementToJSXString(featuresWithCardElement, {
  //           showFunctions: true,
  //           functionValue: (fn) => fn,
  //         }),
  //       },
  //       sectionTwoStyle: {
  //         index: featuresIndex,
  //         style: reactElementToJSXString(featuresElement, {
  //           showFunctions: true,
  //           functionValue: (fn) => fn,
  //         }),
  //       },
  //       sectionThreeStyle: {
  //         index: testimonialIndex,
  //         style: reactElementToJSXString(testimonialElement, {
  //           showFunctions: true,
  //           functionValue: (fn) => fn,
  //         }),
  //       },
  //       sectionFourStyle: {
  //         index: teamIndex,
  //         style: reactElementToJSXString(teamElement, {
  //           showFunctions: true,
  //           functionValue: (fn) => fn,
  //         }),
  //       },
  //       sectionFiveStyle: {
  //         index: faqIndex,
  //         style: reactElementToJSXString(faqElement, {
  //           showFunctions: true,
  //           functionValue: (fn) => fn,
  //         }),
  //       },
  //       footerStyle: {
  //         index: footerIndex,
  //         style: reactElementToJSXString(footerElement, {
  //           showFunctions: true,
  //           functionValue: (fn) => fn,
  //         }),
  //       },
  //       webDesignImagePreview: cloudinaryURL,
  //     };

  //     await axiosInstance.post("/save-landing-styles", postData);

  //     clearDesigns();
  //     handleUserData();
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const allElementsDisplayed = currentIndex >= elements.length - 1;

  return (
    <>
      <div
        className={`${
          showDesignModal ? "block" : "hidden"
        } w-full mt-5 max-md:mt-0 mx-10 h-[93vh] max-md:h-[89vh] max-[499px]:mx-4 overflow-hidden`}
      >
        <div className="mb-5 flex justify-end items-end">
          {allElementsDisplayed && (
            <Link
              to="/site/manage"
              type="submit"
              className="text-black bg-white w-[150px] hover:bg-[rgba(255,255,255,0.9)] block p-3 rounded-[5px] font-medium text-center"
            >
              Edit and Save
            </Link>
          )}
        </div>
        <main ref={scrollRef} className="bg-white h-[90%] overflow-y-scroll">
          {elements
            .slice(0, currentIndex + 1)
            .map(
              (item, idx) =>
              <div key={idx}>{item.element}</div>
            )}
        </main>

        <div ref={photoRef} className="-z-50 relative">
          {navElement}
          {heroElement}
          {featuresWithCardElement}
        </div>
      </div>
    </>
  );
};

export default DesignModal;
