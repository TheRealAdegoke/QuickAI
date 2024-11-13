import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import WebLogo from "../../assets/WebLogo";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { AuthContext } from "../../Pages/AuthPages/AuthChecker/AuthContext";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa6";
import { DashContext } from "../DashboardChecker/DashboardContext";
import { MdOutlineUpgrade } from "react-icons/md";

const TopNav = () => {
  const [userModal, setUserModal] = useState(false);
  const { unAuthenticate } = useContext(AuthContext);
  const location = useLocation()
  const {
    closeSideNav,
    setCloseSideNav,
    userData,
    clearDesigns,
  } = useContext(DashContext);
  const modalRef = useRef(null);
  const checkoutURL = `https://quickuiorganization.lemonsqueezy.com/buy/ce82c0d9-14fc-46b0-9d8c-5d314d1352d3?checkout[email]=${userData?.email}&checkout[name]=${userData?.fullname}`;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setUserModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setUserModal]);

  return (
    <>
      <nav>
        <div className="flex items-center justify-end m-3" ref={modalRef}>
          {/* <button
            onClick={() => {
              setCloseSideNav(true);
            }}
          >
            <HiMiniBars3BottomLeft className="block text-2xl cursor-pointer" />
          </button> */}
          {/* <div className={`${closeSideNav ? "hidden" : "block"}`}>
            <WebLogo />
          </div> */}
          <button
            className="bg-[rgb(9,23,56)] flex justify-center items-center py-[0.5rem] px-[0.6rem] rounded-full uppercase text-white"
            onClick={() => {
              if (userModal) {
                setUserModal(false);
              } else {
                setUserModal(!userModal);
              }
            }}
          >
            {userData && userData.fullname.slice(0, 2)}
          </button>

          <div
            className={`${
              userModal ? "max-md:flex" : "hidden"
            } bg-[rgb(36,37,40)] w-full max-w-[190px] mx-auto flex-col items-start gap-2 border-zinc-600 border-[1px] px-2 py-1 rounded-[5px] font-semibold fixed top-16 right-[0.7%] z-50 md:hidden`}
          >
            <Link
              to={location.pathname === "/site" ? "/home" : "/site"}
              className="flex items-center justify-between gap-1 w-full hover:px-1 border-zinc-600 hover:border-[1px] rounded-[5px] px-1 py-1 hover:bg-[rgb(33,33,33)]"
              onClick={() => {
                clearDesigns();
              }}
            >
              {location.pathname === "/site" ? (
                <span className="flex items-center justify-between w-full">
                  Home <FaChevronRight />
                </span>
              ) : (
                <span className="flex items-center justify-between w-full">
                  Site <FaChevronRight />
                </span>
              )}
            </Link>
            <Link
              to="/account"
              className="flex items-center gap-1 w-full hover:px-1 border-zinc-600 hover:border-[1px] rounded-[5px] px-1 py-1 hover:bg-[rgb(33,33,33)]"
            >
              <MdOutlineManageAccounts />
              Account
            </Link>
            <Link
              to="/settings"
              className="flex items-center gap-1 w-full hover:px-1 border-zinc-600 hover:border-[1px] rounded-[5px] px-1 py-1 hover:bg-[rgb(33,33,33)]"
            >
              <IoSettingsOutline />
              Settings
            </Link>
            <Link
              to={checkoutURL}
              className="flex items-center gap-1 w-full hover:px-1 border-zinc-600 hover:border-[1px] rounded-[5px] px-1 py-1 hover:bg-[rgb(33,33,33)]"
              onClick={(e) => {
                e.preventDefault();
                window.open(checkoutURL, "_blank");
              }}
            >
              <MdOutlineUpgrade />
              Upgrade
            </Link>
            <hr className="w-full md:my-2" />
            <button
              className="flex items-center gap-1 w-full hover:px-1 border-zinc-600 hover:border-[1px] rounded-[5px] px-1 py-1 hover:bg-[rgb(33,33,33)]"
              onClick={() => {
                unAuthenticate();
                setUserModal(false);
                clearDesigns();
              }}
            >
              <CiLogout />
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNav;
