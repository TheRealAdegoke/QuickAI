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
    setShowDesignModal,
    userData
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
        } dashboard-navigation-darkmode w-[250px] h-screen phone:border-r-[1px] phone:border-[rgb(26,26,26)] phone:fixed z-50 p-2`}
      >
        <button
          className="block w-full mb-4"
          onClick={() => {
            setShowDesignModal(false);
          }}
        >
          <div className="flex justify-between items-center cursor-pointer select-none">
            <WebLogo />
            <FaRegEdit className="text-[rgb(236,236,236)] text-xl" />
          </div>
          <div
            className="absolute top-[15px] right-[-40px] hidden phone:block border-[2px] cursor-pointer"
            onClick={() => {
              setCloseSideNav(false);
            }}
          >
            <IoCloseSharp className="text-[1.6rem]" />
          </div>
        </button>

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
          } bg-[rgb(36,37,40)] w-full max-w-[190px] tablet:max-w-[175px] mx-auto flex-col items-start gap-2 border-zinc-600 border-[1px] px-2 py-1 rounded-[5px] phone:hidden font-semibold fixed left-[0.7%] tablet:left-[0.8%] bottom-20`}
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
            }}
          >
            <CiLogout />
            Logout
          </button>
        </div>

        <button
          className="flex items-center fixed left-2 tablet:left-1 bottom-5 gap-2 px-2 py-1 hover:bg-[rgb(33,33,33)] phone:w-full phone:max-w-[230px] hover:px-2 border-zinc-600 hover:border-[1px] rounded-[5px]"
          onClick={() => {
            setUserModal(!userModal);
          }}
        >
          <span className="bg-[rgb(9,23,56)] flex justify-center items-center py-[0.5rem] px-[0.6rem] rounded-full uppercase">
            {userData &&  userData.fullname.slice(0, 2)}
          </span>
          <p>{userData && userData.fullname}</p>
        </button>
      </aside>
    </>
  );
};

export default SideBar;
