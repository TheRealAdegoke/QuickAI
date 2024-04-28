import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import ModalWebLogo from "../../../assets/ModalWebLogo";
import { DashContext } from "../../DashboardChecker/DashboardContext";
import PromptUpdater from "../Prompt-Updater/PromptUpdater";
import modalLogo from "../../../assets/quickModalLogo.png";

export const NavOne = () => {
  const { closeAINav, setCloseAINav } = useContext(DashContext);
  const text = PromptUpdater()
  return (
    <>
      <nav className={`bg-white w-full shadow-xl relative z-40`}>
        <div className={`flex justify-between items-center px-5`}>
          <div className="w-1/5 max-md:w-[30%] flex items-center gap-1 py-3">
            <img src={modalLogo} alt={modalLogo} className="w-[40px]" />
            <h1 className="font-semibold text-black">{text.webLogo}</h1>
          </div>

          <button
            className="text-[rgba(0,0,0,0.8)] hidden max-lg:block  text-xl cursor-pointer"
            onClick={() => {
              setCloseAINav(!closeAINav);
            }}
          >
            <FaBars />
          </button>

          <div
            className={`${
              closeAINav ? "max-lg:block" : "max-lg:hidden"
            } max-lg:absolute max-lg:left-0 top-14 max-lg:w-full max-lg:h-[400px] bg-white max-lg:px-0`}
          >
            <ul className="flex justify-evenly max-lg:flex-col w-full gap-5 max-lg:gap-0 text-[rgba(0,0,0,0.8)] text-lg text-center font-semibold">
              <li className="max-lg:border-t-[1px] py-3 cursor-pointer hover:underline">
                <a href="">Home</a>
              </li>
              <li className="max-lg:border-t-[1px] py-3 cursor-pointer hover:underline">
                <a href="">About</a>
              </li>
              <li className="max-lg:border-t-[1px] py-3 cursor-pointer hover:underline">
                <a href="">Work</a>
              </li>
              <li className="max-lg:border-t-[1px] py-3 cursor-pointer hover:underline">
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export const NavTwo = () => {
  const { closeAINav, setCloseAINav } = useContext(DashContext);
  const text = PromptUpdater();
  return (
    <>
      <nav className={`bg-white w-full shadow-xl relative z-40`}>
        <div className={`flex justify-between items-center px-5`}>
          <div className="w-[20%] flex items-center gap-1 py-3">
            <img src={modalLogo} alt={modalLogo} className="w-[40px]" />
            <h1 className="font-semibold text-black">{text.webLogo}</h1>
          </div>

          <button
            className="text-[rgba(0,0,0,0.8)] hidden max-lg:block  text-xl cursor-pointer"
            onClick={() => {
              setCloseAINav(!closeAINav);
            }}
          >
            <FaBars />
          </button>

          <div
            className={`${
              closeAINav ? "max-lg:block" : "max-lg:hidden"
            } text-black bg-white font-medium flex max-lg:flex-col items-center justify-between w-[60%] max-lg:absolute max-lg:left-0 top-14 max-lg:w-full max-lg:h-[89vh] max-lg:block`}
          >
            <ul className="flex max-lg:flex-col max-lg:items-center max-lg:gap-0 gap-4">
              <li className="hover:text-[rgba(255,0,0)] max-lg:mt-8">
                <a href="">Home</a>
              </li>
              <li className="hover:text-[rgba(255,0,0)] max-lg:my-3">
                <a href="">Pricing</a>
              </li>
              <li className="hover:text-[rgba(255,0,0)] max-lg:my-3">
                <a href="">Features</a>
              </li>
            </ul>

            <ul className="flex max-lg:flex-col max-lg:items-center max-lg:gap-0 gap-4  lg:items-center">
              <li className="hover:text-[rgba(255,0,0)] max-lg:my-3">
                <a href="">Login</a>
              </li>
              <li className="bg-[rgba(0,0,0,0.1)] py-2 px-5 max-lg:px-10 rounded hover:text-[rgba(255,0,0)] max-lg:my-3">
                <a href="">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export const NavThree = () => {
  const { closeAINav, setCloseAINav } = useContext(DashContext);
  const text = PromptUpdater();
  return (
    <>
      <nav
        className={`bg-white w-[90%] border-[1px] max-w-[800px] my-[20px] rounded-xl mx-auto shadow-xl relative left-0 z-40`}
      >
        <div className={`flex justify-between items-center px-5`}>
          <div className="w-[20%] flex items-center gap-1 py-3">
            <img src={modalLogo} alt={modalLogo} className="w-[40px]" />
            <h1 className="font-semibold text-black">{text.webLogo}</h1>
          </div>

          <button
            className="text-[rgba(0,0,0,0.8)] hidden max-lg:block  text-xl cursor-pointer"
            onClick={() => {
              setCloseAINav(!closeAINav);
            }}
          >
            <FaBars />
          </button>

          <div
            className={`${
              closeAINav ? "max-lg:block" : "max-lg:hidden"
            } text-black bg-white font-medium flex max-lg:flex-col items-center justify-between w-[65%] max-lg:absolute max-lg:left-0 top-16 max-lg:w-[250px] max-lg:h-[300px] max-lg:block max-lg:rounded-xl max-lg:shadow-xl`}
          >
            <ul className="flex max-lg:flex-col max-lg:items-center max-lg:gap-0 gap-4">
              <li className="hover:text-[rgba(255,0,0)] max-lg:mt-8">
                <a href="">Home</a>
              </li>
              <li className="hover:text-[rgba(255,0,0)] max-lg:my-3">
                <a href="">Pricing</a>
              </li>
              <li className="hover:text-[rgba(255,0,0)] max-lg:my-3">
                <a href="">Features</a>
              </li>
            </ul>

            <ul className="flex max-lg:flex-col max-lg:items-center max-lg:gap-0 gap-4  lg:items-center">
              <li className="hover:text-[rgba(255,0,0)] max-lg:my-3">
                <a href="">Login</a>
              </li>
              <li className="bg-[rgba(0,0,0,0.1)] py-2 px-5 max-lg:px-10 rounded hover:text-[rgba(255,0,0)] max-lg:my-3">
                <a href="">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};