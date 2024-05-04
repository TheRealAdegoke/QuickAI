import React, { useContext, createElement, useEffect } from "react";
import { DashContext, DashboardProvider } from "../../DashboardChecker/DashboardContext";
import ReactDOMServer from "react-dom/server";
import reactElementToJSXString from "react-element-to-jsx-string";
import { plugins, format as prettyFormat } from "pretty-format";
import renderer from "react-test-renderer";
import { NavFour } from "../AI-Nav-Components/customNav";
import { HeroFour } from "../AI-Hero-Section-Component/customHero";

const { ReactElement, ReactTestComponent } = plugins;

const DesignModal = () => {
  const {
    showDesignModal,
    heroIndex,
    navIndex,
    navComponents,
    heroComponents,
  } = useContext(DashContext);
  
    // const HeroComponent = heroComponents[heroIndex];
    // console.log(
    //   prettyFormat(renderer.create(<HeroComponent />).toJSON(), {
    //     plugins: [ReactTestComponent],
    //     printFunctionName: true,
    //   })
    // );

  return (
    <>
      <main
        className={`${
          showDesignModal ? "block" : "hidden"
        } bg-white w-full mt-5 max-md:mt-0 mx-10 h-[93vh] max-md:h-[89vh] max-[499px]:mx-4 overflow-scroll overflow-x-hidden`}
      >
        {/* {navIndex !== undefined && createElement(navComponents[navIndex])} */}
        {heroIndex !== undefined && createElement(heroComponents[heroIndex])}
        {/* {prettyFormat(
          renderer
            .create(
              <DashboardProvider>
                <div className="text-black">
                  <HeroFour />
                </div>
              </DashboardProvider>
            )
            .toJSON(),
          {
            plugins: [ReactTestComponent],
            printFunctionName: true,
          }
        )} */}
      </main>
    </>
  );
};

export default DesignModal;
