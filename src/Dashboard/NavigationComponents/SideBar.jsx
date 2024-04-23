import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WebLogo from "../../assets/WebLogo";
import { FaRegEdit } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { AuthContext } from "../../Pages/AuthPages/AuthChecker/AuthContext";
import { FaChevronRight } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { DashContext } from "../DashboardChecker/DashboardContext";

const SideBar = () => {
  const {
    unAuthenticate,
  } = useContext(AuthContext);

  const {
    closeSideNav,
    setCloseSideNav,
    userModal,
    setUserModal,
    userData,
    clearDesigns,
  } = useContext(DashContext);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767) {
        setCloseSideNav(false);
      } else {
        setCloseSideNav(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <aside
        className={`${
          closeSideNav ? "block" : "hidden"
        } dashboard-navigation-darkmode w-[250px] h-screen max-md:border-r-[1px] max-md:border-[rgb(26,26,26)] max-md:fixed z-50 p-2`}
      >
        <div className="">
          <button
            className="flex justify-between items-center cursor-pointer select-none w-full mb-4 hover:bg-[rgb(33,33,33)] hover:border-[1px] rounded-[5px] hover:px-2 border-zinc-600 px-2 py-1"
            onClick={() => {
              clearDesigns();
            }}
          >
            <WebLogo />
            <FaRegEdit className="text-[rgb(236,236,236)] text-xl" />
          </button>
          <button
            className="absolute top-[15px] right-[-40px] hidden max-md:block border-[2px] cursor-pointer"
            onClick={() => {
              setCloseSideNav(false);
            }}
          >
            <IoCloseSharp className="text-[1.6rem]" />
          </button>
        </div>

        <button className="flex w-full mb-4 border-zinc-600 border-[1px] px-3 py-1 rounded-[5px] bg-[rgba(9,9,9,0.5)] capitalize">
          Manually create site
        </button>

        <Link
          to=""
          className="font-semibold text-xl ml-2 flex justify-between items-center text-[rgb(201,209,217)]"
        >
          Site <FaChevronRight className="text-lg" />
        </Link>

        <div className="history mt-4">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            aliquam sint non dolores nisi, omnis quaerat? Saepe incidunt natus
            expedita dolorum nihil excepturi modi ex, quos nam laudantium,
            beatae facilis.
          </p>
        </div>

        <div
          className={`${
            userModal ? "flex" : "hidden"
          } bg-[rgb(36,37,40)] w-full max-w-[190px] max-lg:max-w-[175px] mx-auto flex-col items-start gap-2 border-zinc-600 border-[1px] px-2 py-1 rounded-[5px] max-md:hidden font-semibold fixed left-[0.7%] max-lg:left-[0.8%] bottom-20`}
        >
          <button className="flex items-center gap-1 w-full hover:px-1 border-zinc-600 hover:border-[1px] rounded-[5px] px-1 py-1 hover:bg-[rgb(33,33,33)]">
            <MdOutlineManageAccounts />
            Account
          </button>
          <button className="flex items-center gap-1 w-full hover:px-1 border-zinc-600 hover:border-[1px] rounded-[5px] px-1 py-1 hover:bg-[rgb(33,33,33)]">
            <IoSettingsOutline />
            Settings
          </button>
          <button className="flex items-center gap-1 w-full hover:px-1 border-zinc-600 hover:border-[1px] rounded-[5px] px-1 py-1 hover:bg-[rgb(33,33,33)]">
            Themes
          </button>
          <hr className="w-full" />
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

        <button
          className="flex items-center fixed left-2 max-lg:left-1 bottom-5 gap-2 px-2 py-1 hover:bg-[rgb(33,33,33)] max-md:w-full max-md:max-w-[230px] hover:px-2 border-zinc-600 hover:border-[1px] rounded-[5px]"
          onClick={() => {
            setUserModal(!userModal);
          }}
        >
          <span className="bg-[rgb(9,23,56)] flex justify-center items-center py-[0.5rem] px-[0.6rem] rounded-full uppercase">
            {userData && userData.fullname.slice(0, 2)}
          </span>
          <p>{userData && userData.fullname}</p>
        </button>
      </aside>
    </>
  );
};

export default SideBar;
