import React, { useContext } from "react";
import { DashContext } from "../../DashboardChecker/DashboardContext";

const DesignModal = () => {
  const { showDesignModal, randomIndex, navComponents, heroComponents } =
    useContext(DashContext);

  return (
    <>
      <main
        className={`${
          showDesignModal ? "block" : "hidden"
        } bg-white w-full mt-5 max-md:mt-0 mx-10 h-[93vh] max-md:h-[89vh] max-[499px]:mx-4 overflow-scroll overflow-x-hidden`}
      >
        {randomIndex !== undefined &&
          React.createElement(navComponents[randomIndex])}

        {randomIndex !== undefined &&
          React.createElement(heroComponents[randomIndex])}
      </main>
    </>
  );
};

export default DesignModal;
