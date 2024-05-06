import React, { useContext, createElement, useEffect } from "react";
import { DashContext } from "../../DashboardChecker/DashboardContext";

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
       const selectedComponentCode = heroComponents[heroIndex].toString();
       const startIndex = selectedComponentCode.indexOf("return");
       const endIndex = selectedComponentCode.lastIndexOf("}");
       const selectedReturnStatement = selectedComponentCode.substring(
         startIndex,
         endIndex + 1
       );
       localStorage.setItem("selectedComponentReturn", selectedReturnStatement);
       console.log(
         "Return statement saved to localStorage:",
         selectedReturnStatement
       );
     }
   };


  return (
    <>
      <main
        className={`${
          showDesignModal ? "block" : "hidden"
        } bg-white w-full mt-5 max-md:mt-0 mx-10 h-[93vh] max-md:h-[89vh] max-[499px]:mx-4 overflow-scroll overflow-x-hidden`}
      >
        {/* {navIndex !== undefined && createElement(navComponents[navIndex])} */}
        {heroIndex !== undefined && createElement(heroComponents[heroIndex])}

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
