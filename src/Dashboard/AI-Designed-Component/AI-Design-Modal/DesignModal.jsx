import React, { useContext, useRef, useState, useEffect } from "react";
import { DashContext } from "../../DashboardChecker/DashboardContext";
import reactElementToJSXString from "react-element-to-jsx-string";
import { axiosInstance } from "../../../Pages/AuthPages/AuthChecker/axiosInstance";
import html2canvas from "html2canvas";
import { ImSpinner6 } from "react-icons/im";
import axios from "axios";

const DesignModal = () => {
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
  } = useContext(DashContext);

  const ref = useRef(null);
  const mainRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  const cloudinaryBaseURL = import.meta.env.VITE_REACT_APP_CLOUDINARY_BASE_URL;
  const cloudinaryFormDataAppend = import.meta.env
    .VITE_REACT_APP_CLOUDINARY_FORM_DATA_APPEND;

  const elements = [
    {
      index: navIndex,
      element: navComponents({ text, buttonIndex })[navIndex],
    },
    {
      index: heroIndex,
      element: heroComponents({ text, buttonIndex })[heroIndex],
    },
    {
      index: featuresWithCardIndex,
      element: featuresWithCardsComponent({ text })[featuresWithCardIndex],
    },
    {
      index: featuresIndex,
      element: featuresComponents({ text })[featuresIndex],
    },
    {
      index: testimonialIndex,
      element: testimonialComponent({ text })[testimonialIndex],
    },
    { index: faqIndex, element: faqComponent({ text })[faqIndex] },
    { index: teamIndex, element: teamComponent({ text })[teamIndex] },
    { index: footerIndex, element: footerComponent({ text })[footerIndex] },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 1500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    if (mainRef.current && autoScroll) {
      mainRef.current.scrollTop = mainRef.current.scrollHeight;
    }
  }, [currentIndex, autoScroll]);

  useEffect(() => {
    if (currentIndex >= elements.length - 1) {
      setAutoScroll(false);
    }
  }, [currentIndex]);

  const saveDesign = async () => {
    setLoading(true);
    try {
      const canvas = await html2canvas(ref.current, { useCORS: true });
      const dataURL = canvas.toDataURL();
      const formData = new FormData();
      formData.append("file", dataURL);
      formData.append("upload_preset", `${cloudinaryFormDataAppend}`);

      const cloudinaryResponse = await axios.post(
        `${cloudinaryBaseURL}`,
        formData
      );
      const cloudinaryURL = cloudinaryResponse.data.secure_url;

      const postData = {
        prompt: userInput || selectedIdea,
        navStyle: {
          index: navIndex,
          style: reactElementToJSXString(elements[0].element, {
            showFunctions: true,
            functionValue: (fn) => fn,
          }),
        },
        heroStyle: {
          index: heroIndex,
          style: reactElementToJSXString(elements[1].element, {
            showFunctions: true,
            functionValue: (fn) => fn,
          }),
        },
        sectionOneStyle: {
          index: featuresWithCardIndex,
          style: reactElementToJSXString(elements[2].element, {
            showFunctions: true,
            functionValue: (fn) => fn,
          }),
        },
        sectionTwoStyle: {
          index: featuresIndex,
          style: reactElementToJSXString(elements[3].element, {
            showFunctions: true,
            functionValue: (fn) => fn,
          }),
        },
        sectionThreeStyle: {
          index: testimonialIndex,
          style: reactElementToJSXString(elements[4].element, {
            showFunctions: true,
            functionValue: (fn) => fn,
          }),
        },
        sectionFourStyle: {
          index: teamIndex,
          style: reactElementToJSXString(elements[6].element, {
            showFunctions: true,
            functionValue: (fn) => fn,
          }),
        },
        sectionFiveStyle: {
          index: faqIndex,
          style: reactElementToJSXString(elements[5].element, {
            showFunctions: true,
            functionValue: (fn) => fn,
          }),
        },
        footerStyle: {
          index: footerIndex,
          style: reactElementToJSXString(elements[8].element, {
            showFunctions: true,
            functionValue: (fn) => fn,
          }),
        },
        webDesignImagePreview: cloudinaryURL,
      };

      await axiosInstance.post("/save-landing-styles", postData);

      clearDesigns();
      handleUserData();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
            <button
              type="submit"
              className="text-black bg-white w-[200px] hover:bg-[rgba(255,255,255,0.9)] block p-3 rounded-[5px] font-medium"
              onClick={saveDesign}
              disabled={loading}
            >
              {loading ? (
                <div>
                  <ImSpinner6 className="animate-spin text-2xl text-black block mx-auto" />
                </div>
              ) : (
                "Save"
              )}
            </button>
          )}
        </div>
        <section ref={mainRef} className="bg-white h-[90%] overflow-y-scroll">
          {elements.slice(0, currentIndex + 1).map(
            (item, idx) =>
              item.index !== undefined && (
                <div key={idx} className="animate-scaleIn">
                  {item.element}
                </div>
              )
          )}
        </section>
      </div>
    </>
  );
};

export default DesignModal;
