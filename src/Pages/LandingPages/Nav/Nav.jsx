import React, { useEffect, useRef, useState } from "react";
import transparentQ from "../../../assets/transparentQ.png";
import { HiMiniBars2 } from "react-icons/hi2";
import { TiArrowRightOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import WebLogo from "../../../assets/WebLogo";

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [active, setActive] = useState(1);
  const location = useLocation();
  const homeSidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        homeSidebarRef.current &&
        !homeSidebarRef.current.contains(event.target)
      ) {
        setToggleNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/pricing") {
      setActive(2);
    } else if (location.pathname === "/") {
      setActive(1);
    } else {
      setActive(3);
    }
  }, [location]);

  return (
    <>
      <header>
        <nav className="radial-nav flex items-center justify-between px-10 max-lg:px-3 max-lg:py-4 border-b border-[rgba(255,255,255,0.2)] bg-transparent fixed w-full z-50 2xl:px-60">
          <div className="lg:mt-">
            <Link to="/" className="cursor-pointer">
              <WebLogo />
            </Link>
          </div>

          <div className="flex gap-10 max-lg:hidden lg:mt-4">
            <Link
              to="/"
              className={`${
                active === 1 ? "border-b-[2px] h-[60px]" : ""
              } block text-center text-xl py-2`}
              onClick={() => setActive(1)}
            >
              Home
            </Link>
            <Link
              to="/pricing"
              className={`${
                active === 2 ? "border-b-[2px] h-[60px]" : ""
              } block text-center text-xl py-2`}
              onClick={() => setActive(2)}
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className={`${
                active === 3 ? "border-b-[2px] h-[60px]" : ""
              } block text-center text-xl py-2`}
              onClick={() => setActive(3)}
            >
              Blog
            </Link>
          </div>

          <div>
            <button
              className="hidden max-lg:block"
              onClick={() => setToggleNav(!toggleNav)}
            >
              {toggleNav ? (
                <IoClose className="text-3xl cursor-pointer" />
              ) : (
                <HiMiniBars2 className="text-3xl cursor-pointer" />
              )}
            </button>

            <div
              ref={homeSidebarRef}
              className={`${
                toggleNav ? "max-lg:block" : "max-lg:hidden"
              } max-lg:absolute top-[85px] right-1 border-[rgba(255,255,255,0.2)] max-lg:border max-lg:w-[300px] max-lg:h-[350px] rounded-[8px] max-lg:bg-[linear-gradient(314deg,rgb(22,23,50)_70%,rgb(5,8,32)_100%)] shadow-2xl`}
            >
              <div className="flex justify-center lg:hidden my-2">
                <img
                  src={transparentQ}
                  alt="QuickUI Logo"
                  title="QuickUI Logo"
                  className="block select-none cursor-pointer"
                  width="40"
                  height="40"
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

                <Link
                  to={location.pathname === "/pricing" ? "/" : "/pricing"}
                  className="block text-center border border-[rgba(255,255,255,0.2)] py-2 px-8 rounded-[8px] transition-all duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.2)] lg:hidden"
                >
                  <span>
                    {location.pathname === "/pricing" ? "Home" : "Pricing"}
                  </span>
                </Link>

                <Link
                  to="/blog"
                  className="block text-center border border-[rgba(255,255,255,0.2)] py-2 px-8 rounded-[8px] transition-all duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.2)] lg:hidden"
                >
                  <span>Blog</span>
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
