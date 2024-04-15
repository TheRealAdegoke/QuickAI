import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Pages/AuthPages/AuthChecker/AuthContext";
import {navComponents} from "../../Arrays/Arrays"
import HeroOne from "../AI-Hero-Section-Component/HeroOne";

const DesignModal = () => {
  const { showDesignModal, randomNav} =
    useContext(AuthContext);

  return (
    <>
      <header
        className={`${
          showDesignModal ? "block" : "hidden"
        } bg-white w-full mt-5 phone:mt-0 mx-10 h-[93vh] phone:h-[89vh] smallDevice:mx-4 rounded-lg overflow-scroll overflow-x-hidden`}
      >
        {randomNav !== undefined &&
          React.createElement(navComponents[randomNav])}

        <HeroOne />
      </header>
    </>
  );
};

export default DesignModal;
