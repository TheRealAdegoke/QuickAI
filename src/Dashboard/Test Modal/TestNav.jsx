import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { DashContext } from "../DashboardChecker/DashboardContext";
import ModalWebLogo from "../../assets/ModalWebLogo";

export const TestNavOne = () => {
  const { closeAINav, setCloseAINav } = useContext(DashContext);
  return (
    <>
      <nav className={`bg-white w-full shadow-xl relative z-50`}>
        <div className={`flex justify-between items-center px-5`}>
          <div className="w-1/5 max-md:w-[30%] flex items-center gap-1 py-3">
            <ModalWebLogo />
          </div>

          <label htmlFor="id-show-menu" className="show-menu lg:hidden">
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
            className={`menu-block max-lg:absolute max-lg:left-0 top-14 max-lg:w-full max-lg:h-[400px] bg-white max-lg:px-0 opacity-0 align-middle invisible transition-all duration-75 peer-checked:visible peer-checked:opacity-100 lg:opacity-100 lg:visible`}
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

export const TestNavTwo = () => {
  const { closeAINav, setCloseAINav } = useContext(DashContext);
  return (
    <>
      <nav className={`bg-white w-full shadow-xl relative z-50`}>
        <div className={`flex justify-between items-center px-5`}>
          <div className="w-[20%] flex items-center gap-1 py-3">
            <ModalWebLogo />
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

export const TestNavThree = () => {
  const { closeAINav, setCloseAINav } = useContext(DashContext);
  return (
    <>
      <nav
        className={`bg-white w-[90%] border-[1px] max-w-[800px] my-[20px] rounded-xl mx-auto shadow-xl relative left-0 z-50`}
      >
        <div className={`flex justify-between items-center px-5`}>
          <div className="w-[20%] flex items-center gap-1 py-3">
            <img
              src="https://res.cloudinary.com/dpyp7innp/image/upload/v1715591674/ad53c5d6-b066-455b-a840-7c1c3538e430.png"
              alt="modal image"
            />
          </div>

          <button
            className="text-[rgba(0,0,0,0.8)] hidden max-lg:block  text-xl cursor-pointer"
            onClick={() => {
              setCloseAINav(!closeAINav);
            }}
          >
            Icon
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
