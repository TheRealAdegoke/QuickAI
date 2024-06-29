/* This is modal is used for building designs, to use this modal follow the instructions below

1 Import the TestDesignModal component on the Dashboard.jsx component located on the Dashboard folder which is the parent folder of this component

2 This component should be called below this code 
<div className="flex justify-center">
    {showDesignModal ? <DesignModal /> : <AIGenerator />}
</div>
in the Dashboard.jsx component

3 Please always make sure this import TestDesignModal from "./Test Modal/TestDesignModal" and 
<div className="flex justify-center">
    {testDesignModal && <TestDesignModal />}
</div> on the Dashboard.jsx component is commented before pushing to production

4 This component should only be used on development

Steps on how to use this component

1 First import this component on the Dashboard.jsx component

2 Let's say you are designing a Hero section the Hero section component should be called in the <main></main> so you will be able to see your design

3 To display the modal go to the DashboardContext.jsx file and set the const [testDesignModal, setTestDesignModal] = useState(true). Do not forget to set it back to false once you are done working with the TestDesignModal component

NB: <TestDesignModal/> should be completely removed from the Dashboard.jsx component before pushing to production

*/

import { useContext, useEffect, useRef, useState } from "react";
import { DashContext } from "../DashboardChecker/DashboardContext";

const TestDesignModal = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobileToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <main className="bg-white w-full mt-5 max-md:mt-0 mx-10 h-[93vh] max-md:h-[89vh] max-[499px]:mx-4 overflow-scroll overflow-x-hidden pt-14">
      <div className="min-h-screen flex flex-col items-center gap-6  bg-gray-100 px-10">
        <div className="mt-4 flex space-x-4">
          <button
            onClick={handleMobileToggle}
            className="bg-green-500 text-white p-2 rounded hover:bg-green-700"
          >
            {isMobile ? "Desktop" : "Mobile"}
          </button>
        </div>
        <div
          className={`border p-4 ${
            isMobile ? "w-80" : "w-full"
          } transition-all duration-500`}
        >
          <nav className={`bg-white w-full shadow-xl relative z-50`}>
            <div className={`flex justify-between items-center px-5`}>
              <div className="w-1/5 max-md:w-[30%] flex items-center gap-1 py-3 text-black">
                QuickUI
              </div>

              <label
                htmlFor="id-show-menu"
                className={`${isMobile ? "lg:block" : "lg:hidden"} show-menu`}
              >
                <div className="text-2xl text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                  </svg>
                </div>
              </label>
              <input
                type="checkbox"
                id="id-show-menu"
                className="appearance-none hidden peer"
                role="button"
              />

              <div
                className={`${
                  isMobile
                    ? "absolute left-0 top-14 w-full h-[400px] px-0"
                    : "lg:opacity-100 lg:visible"
                } menu-block max-lg:absolute max-lg:left-0 top-14 max-lg:w-full max-lg:h-[400px] bg-white max-lg:px-0 opacity-0 align-middle invisible transition-all duration-75 peer-checked:visible peer-checked:opacity-100 `}
              >
                <ul
                  className={`${
                    isMobile ? "flex-col gap-0" : ""
                  } flex justify-evenly max-lg:flex-col w-full gap-5 max-lg:gap-0 text-[rgba(0,0,0,0.8)] text-lg text-center font-semibold`}
                >
                  <li
                    className={`${
                      isMobile ? "border-t-[1px]" : ""
                    } max-lg:border-t-[1px] py-3 cursor-pointer hover:underline`}
                  >
                    <a href="">Home</a>
                  </li>
                  <li
                    className={`${
                      isMobile ? "border-t-[1px]" : ""
                    } max-lg:border-t-[1px] py-3 cursor-pointer hover:underline`}
                  >
                    <a href="">About</a>
                  </li>
                  <li
                    className={`${
                      isMobile ? "border-t-[1px]" : ""
                    } max-lg:border-t-[1px] py-3 cursor-pointer hover:underline`}
                  >
                    <a href="">Work</a>
                  </li>
                  <li
                    className={`${
                      isMobile ? "border-t-[1px]" : ""
                    } max-lg:border-t-[1px] py-3 cursor-pointer hover:underline`}
                  >
                    <a href="">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default TestDesignModal;


// {
//   randomOrder === "featuresFirst" ? (
//     <>
//       {featuresIndex !== undefined && featuresElement}
//       {testimonialIndex !== undefined && testimonialElement}
//     </>
//   ) : (
//     <>
//       {testimonialIndex !== undefined && testimonialElement}
//       {featuresIndex !== undefined && featuresElement}
//     </>
//   );
// }
