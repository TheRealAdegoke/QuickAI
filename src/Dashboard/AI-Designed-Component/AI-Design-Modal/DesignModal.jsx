import React, { useContext, createElement } from "react";
import { DashContext } from "../../DashboardChecker/DashboardContext";

const DesignModal = () => {
  const { showDesignModal, randomIndex, navComponents, heroComponents } =
    useContext(DashContext);

  // Check if randomIndex is within bounds of components
  const heroIndex =
    randomIndex !== undefined ? randomIndex % heroComponents.length : undefined;

  return (
    <>
      <main
        className={`${
          showDesignModal ? "block" : "hidden"
        } bg-white w-full mt-5 max-md:mt-0 mx-10 h-[93vh] max-md:h-[89vh] max-[499px]:mx-4 overflow-scroll overflow-x-hidden`}
      >
        {randomIndex !== undefined &&
          createElement(
            navComponents[
              randomIndex < navComponents.length
                ? randomIndex
                : randomIndex % navComponents.length
            ]
          )}

        {randomIndex !== undefined &&
          createElement(
            heroComponents[
              randomIndex < heroComponents.length
                ? randomIndex
                : randomIndex % heroComponents.length
            ]
          )}
      </main>
    </>
  );
};

export default DesignModal;
