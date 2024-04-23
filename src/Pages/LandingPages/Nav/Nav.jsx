import React, { useState } from "react";
import transparentQ from "../../../assets/transparentQ.png";
import { HiMiniBars2 } from "react-icons/hi2";
import { TiArrowRightOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import WebLogo from "../../../assets/WebLogo";

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <>
      <header>
        <nav className="flex items-center justify-between px-3 py-2 border-b border-[rgba(255,255,255,0.2)] bg-transparent fixed w-full">
          <div>
            <Link to="/" className="cursor-pointer">
              <WebLogo />
            </Link>
          </div>

          <div>
            <button
              className="hidden max-lg:block"
              onClick={() => {
                setToggleNav(!toggleNav);
              }}
            >
              {toggleNav ? (
                <IoClose className="text-3xl cursor-pointer" />
              ) : (
                <HiMiniBars2 className="text-3xl cursor-pointer" />
              )}
            </button>

            <div
              className={`${
                toggleNav ? "max-lg:block" : "max-lg:hidden"
              } max-lg:absolute top-[85px] top right-0 border-[rgba(255,255,255,0.2)] max-lg:border max-lg:w-[300px] max-lg:h-[300px] rounded-[8px] max-lg:bg-black`}
            >
              <div className="flex justify-center lg:hidden">
                <img
                  src={transparentQ}
                  alt="Quick UI Image."
                  className="block select-none cursor-pointer"
                />
              </div>

              <div className="flex max-lg:flex-col max-lg:gap-3 max-lg:px-3 gap-5">
                <Link
                  to="/login"
                  className="block text-center border border-[rgba(255,255,255,0.2)] py-2 px-8 rounded-[8px] transition-all duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.2)]"
                >
                  <span>Login</span>
                </Link>

                <Link
                  to="/register"
                  className="block text-center border border-[rgba(255,255,255,0.2)] py-2 px-4 rounded-[8px] transition-all duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.2)]"
                >
                  <span className="flex justify-center items-center gap-2">
                    Sign Up <TiArrowRightOutline />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
