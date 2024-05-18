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
    navComponents,
    heroComponents,
    featuresWithCardsComponent,
    featuresComponents,
    testimonialComponent,
    userInput,
    selectedIdea,
    handleUserData,
    clearDesigns,
    text,
    buttonIndex,
  } = useContext(DashContext);
  const ref = useRef(null);
  const [loading, setLoading] = useState(false);
  const [randomOrder, setRandomOrder] = useState(null);

  useEffect(() => {
    // Randomly set the order of elements
    const order = Math.random() < 0.5 ? "featuresFirst" : "cardsFirst";
    setRandomOrder(order);
  }, []);

  const saveDesign = async () => {
    setLoading(true);
    try {
      const canvas = await html2canvas(ref.current, { useCORS: true });
      const dataURL = canvas.toDataURL();
      const formData = new FormData();
      formData.append("file", dataURL);
      formData.append("upload_preset", "bgoegsr5");

      const cloudinaryResponse = await axios.post(
        "https://api.cloudinary.com/v1_1/dpyp7innp/image/upload",
        formData
      );
      const cloudinaryURL = cloudinaryResponse.data.secure_url;

      const postData = {
        prompt: userInput || selectedIdea,
        navStyle: {
          index: navIndex,
          style: reactElementToJSXString(navComponents({ text })[navIndex], {
            showFunctions: true,
            functionValue: (fn) => fn,
          }),
        },
        heroStyle: {
          index: heroIndex,
          style: reactElementToJSXString(
            heroComponents({ text, buttonIndex })[heroIndex],
            {
              showFunctions: true,
              functionValue: (fn) => fn,
            }
          ),
        },
        webDesignImagePreview: cloudinaryURL,
      };

      await axiosInstance.post("save-landing-styles", postData);

      clearDesigns();
      handleUserData();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClicky = () => {
    const elementOrder =
      randomOrder === "featuresFirst"
        ? [testimonialElement, featuresWithCardElement]
        : [featuresWithCardElement, testimonialElement];

    elementOrder.forEach((element) =>
      console.log(reactElementToJSXString(element))
    );
  };

  const heroElement = heroComponents({ text, buttonIndex })[heroIndex];
  const navElement = navComponents({ text, buttonIndex })[navIndex];
  const featuresWithCardElement = featuresWithCardsComponent({ text })[
    featuresWithCardIndex
  ];
  const featuresElement = featuresComponents({ text })[featuresIndex];
  const testimonialElement = testimonialComponent({ text })[testimonialIndex];

  return (
    <>
      <div
        className={`${
          showDesignModal ? "block" : "hidden"
        } w-full mt-5 max-md:mt-0 mx-10 h-[93vh] max-md:h-[89vh] max-[499px]:mx-4 overflow-hidden`}
      >
        <div className="mb-5 flex justify-end items-end">
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
        </div>
        <main ref={ref} className="bg-white h-[90%] overflow-y-scroll">
          {navIndex !== undefined && navElement}
          {heroIndex !== undefined && heroElement}
          {featuresWithCardIndex !== undefined && featuresWithCardElement}
          {randomOrder === "featuresFirst" ? (
            <>
              {featuresIndex !== undefined && featuresElement}
              {testimonialIndex !== undefined && testimonialElement}
            </>
          ) : (
            <>
              {testimonialIndex !== undefined && testimonialElement}
              {featuresIndex !== undefined && featuresElement}
            </>
          )}
          <button className="text-black p-5" onClick={handleClicky}>
            Clicky
          </button>
        </main>
      </div>
    </>
  );
};

export default DesignModal;
