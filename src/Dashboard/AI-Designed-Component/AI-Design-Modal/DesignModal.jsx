import React, { useContext } from "react";
import { DashContext } from "../../DashboardChecker/DashboardContext";
import {
  HeroOne,
  HeroTwo,
  HeroThree
} from "../../AI-Designed-Component/AI-Hero-Section-Component/customHero";

const DesignModal = () => {
  const { showDesignModal, randomIndex, navComponents, heroComponents } =
    useContext(DashContext);

  return (
    <>
      <main
        className={`${
          showDesignModal ? "block" : "hidden"
        } bg-white w-full mt-5 phone:mt-0 mx-10 h-[93vh] phone:h-[89vh] smallDevice:mx-4 rounded-lg overflow-scroll overflow-x-hidden`}
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
