import React, { useContext, createElement } from "react";
import { DashContext } from "../../DashboardChecker/DashboardContext";

const DesignModal = () => {
  const { showDesignModal, heroIndex, navIndex, navComponents, heroComponents } =
    useContext(DashContext);

  return (
    <>
      <main
        className={`${
          showDesignModal ? "block" : "hidden"
        } bg-white w-full mt-5 max-md:mt-0 mx-10 h-[93vh] max-md:h-[89vh] max-[499px]:mx-4 overflow-scroll overflow-x-hidden`}
      >
        {navIndex !== undefined &&
          createElement(
            navComponents[
              navIndex
            ]
          )}
        {heroIndex !== undefined &&
          createElement(
            heroComponents[
              heroIndex
            ]
          )}
      </main>
    </>
  );
};

export default DesignModal;
