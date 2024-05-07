import React, { useContext, createElement, useEffect } from "react";
import { DashContext } from "../../DashboardChecker/DashboardContext";
import reactElementToJSXString from "react-element-to-jsx-string";

const DesignModal = () => {
  const {
    showDesignModal,
    heroIndex,
    navIndex,
    navComponents,
    heroComponents,
  } = useContext(DashContext);

   const saveComponentReturnToLocalStorage = () => {
     if (heroIndex !== undefined) {
       const navString = reactElementToJSXString(navComponents[navIndex]);
       const heroString = reactElementToJSXString(heroComponents[heroIndex]);
       console.log(navString);
       console.log(heroString);
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
