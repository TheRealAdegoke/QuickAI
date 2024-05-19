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
    navComponents,
    heroComponents,
    featuresWithCardsComponent,
    featuresComponents,
    testimonialComponent,
    faqComponent,
    teamComponent,
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
  const faqElement = faqComponent({ text })[faqIndex];
  const teamElement = teamComponent({ text })[teamIndex];

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
          {teamIndex !== undefined && teamElement}
          {faqIndex !== undefined && faqElement}
          <div className="w-[90%] max-w-[1000px] mx-auto my-24">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126082.63117777245!2d7.4985258706102815!3d9.056264578816574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1716136585984!5m2!1sen!2sng"
              width="600"
              height="450"
              style={{ border: "0" }}
              className="w-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* <button className="text-black p-5" onClick={handleClicky}>
            Clicky
          </button> */}
        </main>
      </div>
    </>
  );
};

export default DesignModal;
