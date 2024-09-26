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
    handleGenerateNav,
    setShowDesignModal
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

  const allElementsDisplayed = currentIndex >= elements.length - 1;

  return (
    <>
      <div
        className={`${
          showDesignModal ? "block" : "hidden"
        } w-full mt-0 max-md:mt-0 mx-10 h-[89vh] max-md:h-[89vh] max-[499px]:mx-4 overflow-hidden`}
      >
        <div className="mb-5 flex justify-end gap-3 items-end">
          <button
            type="submit"
            onClick={() => {
              setShowDesignModal(false)
              
            }}
            className="text-black bg-white w-[150px] hover:bg-[rgba(255,255,255,0.9)] block p-3 rounded-[5px] font-medium text-center"
          >
            Cancel
          </button>
          {allElementsDisplayed && (
            <Link
              to="/site/manage"
              className="text-black bg-white w-[150px] hover:bg-[rgba(255,255,255,0.9)] block p-3 rounded-[5px] font-medium text-center"
            >
              Edit
            </Link>
          )}
        </div>
        <main
          ref={scrollRef}
          className="bg-white text-black h-[90%] overflow-y-scroll"
        >
          {elements.slice(0, currentIndex + 1).map((item, idx) => (
            <div key={idx}>{item.element}</div>
          ))}
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
