import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AuthContext } from "../../../Pages/AuthPages/AuthChecker/AuthContext";
import ModalWebLogo from "../../../assets/ModalWebLogo";

export const NavOne = () => {
  const { closeAINav, setCloseAINav } = useContext(AuthContext);
  return (
    <>
      <nav className={`bg-white w-full shadow-xl relative`}>
        <div className={`flex justify-between items-center px-5`}>
          <div className="w-1/5 phone:w-[30%] flex  py-3">
            <ModalWebLogo />
          </div>

          <button
            className="text-[rgba(0,0,0,0.8)] hidden mobile:block  text-xl cursor-pointer"
            onClick={() => {
              setCloseAINav(!closeAINav);
            }}
          >
            <FaBars />
          </button>

          <div
            className={`${
              closeAINav ? "mobile:block" : "mobile:hidden"
            } mobile:absolute mobile:left-0 top-14 mobile:w-full mobile:h-[400px] bg-white mobile:px-0`}
          >
            <ul className="flex justify-evenly mobile:flex-col w-full gap-5 mobile:gap-0 text-[rgba(0,0,0,0.8)] text-lg text-center font-semibold">
              <li className="mobile:border-t-[1px] py-3 cursor-pointer hover:underline">
                <a href="">Home</a>
              </li>
              <li className="mobile:border-t-[1px] py-3 cursor-pointer hover:underline">
                <a href="">About</a>
              </li>
              <li className="mobile:border-t-[1px] py-3 cursor-pointer hover:underline">
                <a href="">Work</a>
              </li>
              <li className="mobile:border-t-[1px] py-3 cursor-pointer hover:underline">
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
  const { closeAINav, setCloseAINav } = useContext(AuthContext);
  return (
    <>
      <nav className={`bg-white w-full shadow-xl relative`}>
        <div className={`flex justify-between items-center px-5`}>
          <div className="w-[20%] flex py-3">
            <ModalWebLogo />
          </div>

          <button
            className="text-[rgba(0,0,0,0.8)] hidden mobile:block  text-xl cursor-pointer"
            onClick={() => {
              setCloseAINav(!closeAINav);
            }}
          >
            <FaBars />
          </button>

          <div
            className={`${
              closeAINav ? "mobile:block" : "mobile:hidden"
            } text-black bg-white font-medium flex mobile:flex-col items-center justify-between w-[60%] mobile:absolute mobile:left-0 top-14 mobile:w-full mobile:h-[89vh] mobile:block`}
          >
            <ul className="flex mobile:flex-col mobile:items-center mobile:gap-0 gap-4">
              <li className="hover:text-[rgba(255,0,0)] mobile:mt-8">
                <a href="">Home</a>
              </li>
              <li className="hover:text-[rgba(255,0,0)] mobile:my-3">
                <a href="">Pricing</a>
              </li>
              <li className="hover:text-[rgba(255,0,0)] mobile:my-3">
                <a href="">Features</a>
              </li>
            </ul>

            <ul className="flex mobile:flex-col mobile:items-center mobile:gap-0 gap-4  PC:items-center">
              <li className="hover:text-[rgba(255,0,0)] mobile:my-3">
                <a href="">Login</a>
              </li>
              <li className="bg-[rgba(0,0,0,0.1)] py-2 px-5 mobile:px-10 rounded hover:text-[rgba(255,0,0)] mobile:my-3">
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
  const { closeAINav, setCloseAINav } = useContext(AuthContext);
  return (
    <>
      <nav
        className={`bg-white w-[90%] border-[1px] max-w-[800px] my-[20px] rounded-xl mx-auto shadow-xl relative left-0`}
      >
        <div className={`flex justify-between items-center px-5`}>
          <div className="w-[20%] flex py-3">
            <ModalWebLogo />
          </div>

          <button
            className="text-[rgba(0,0,0,0.8)] hidden mobile:block  text-xl cursor-pointer"
            onClick={() => {
              setCloseAINav(!closeAINav);
            }}
          >
            <FaBars />
          </button>

          <div
            className={`${
              closeAINav ? "mobile:block" : "mobile:hidden"
            } text-black bg-white font-medium flex mobile:flex-col items-center justify-between w-[65%] mobile:absolute mobile:left-0 top-16 mobile:w-[250px] mobile:h-[300px] mobile:block mobile:rounded-xl mobile:shadow-xl`}
          >
            <ul className="flex mobile:flex-col mobile:items-center mobile:gap-0 gap-4">
              <li className="hover:text-[rgba(255,0,0)] mobile:mt-8">
                <a href="">Home</a>
              </li>
              <li className="hover:text-[rgba(255,0,0)] mobile:my-3">
                <a href="">Pricing</a>
              </li>
              <li className="hover:text-[rgba(255,0,0)] mobile:my-3">
                <a href="">Features</a>
              </li>
            </ul>

            <ul className="flex mobile:flex-col mobile:items-center mobile:gap-0 gap-4  PC:items-center">
              <li className="hover:text-[rgba(255,0,0)] mobile:my-3">
                <a href="">Login</a>
              </li>
              <li className="bg-[rgba(0,0,0,0.1)] py-2 px-5 mobile:px-10 rounded hover:text-[rgba(255,0,0)] mobile:my-3">
                <a href="">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};