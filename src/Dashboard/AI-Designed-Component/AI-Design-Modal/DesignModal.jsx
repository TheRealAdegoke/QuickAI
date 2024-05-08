import React, { useContext, createElement, useEffect } from "react";
import { DashContext } from "../../DashboardChecker/DashboardContext";
import reactElementToJSXString from "react-element-to-jsx-string";
import { axiosInstance } from "../../../Pages/AuthPages/AuthChecker/axiosInstance";

const DesignModal = () => {
  const {
    showDesignModal,
    heroIndex,
    navIndex,
    navComponents,
    heroComponents,
    userInput,
    selectedIdea,
    handleUserData,
  } = useContext(DashContext);

   const saveComponentReturnToLocalStorage = async () => {
    const postData = {
      prompt: userInput || selectedIdea,
      navStyle: {
        index: navIndex,
        style: reactElementToJSXString(navComponents[navIndex]),
      },
      heroStyle: {
        index: heroIndex,
        style: reactElementToJSXString(heroComponents[heroIndex]),
      },
    };
     try {
        const response = await axiosInstance.post(
          "save-landing-styles",
          postData
        );
        console.log(response.data.message);
        handleUserData()
     } catch (error) {
      console.error(error.response.data.error);
      message.error(error.response.data.error);
     }
   };


  return (
    <>
      <main
        className={`${
          showDesignModal ? "block" : "hidden"
        } bg-white w-full mt-5 max-md:mt-0 mx-10 h-[93vh] max-md:h-[89vh] max-[499px]:mx-4 overflow-scroll overflow-x-hidden`}
      >
        {navIndex !== undefined && navComponents[navIndex]}
        {heroIndex !== undefined && heroComponents[heroIndex]}

        <button
          className="text-black p-5"
          onClick={saveComponentReturnToLocalStorage}
        >
          Save
        </button>
      </main>
    </>
  );
};

export default DesignModal;
