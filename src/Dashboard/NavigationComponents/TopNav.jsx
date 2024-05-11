import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import WebLogo from "../../assets/WebLogo";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { AuthContext } from "../../Pages/AuthPages/AuthChecker/AuthContext";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { DashContext } from "../DashboardChecker/DashboardContext";


const TopNav = () => {
  const { unAuthenticate } =
    useContext(AuthContext);
  const {
    closeSideNav,
    setCloseSideNav,
    userModal,
    setUserModal,
    userData,
  } = useContext(DashContext);

  return (
    <>
      <nav>
        <div className="max-md:flex items-center justify-between m-3 hidden">
          <button
            onClick={() => {
              setCloseSideNav(true);
            }}
          >
            <HiMiniBars3BottomLeft className="block text-2xl cursor-pointer" />
          </button>
          <div className={`${closeSideNav ? "hidden" : "block"}`}>
            <WebLogo />
          </div>
          <button
            className="bg-[rgb(9,23,56)] flex justify-center items-center py-[0.5rem] px-[0.6rem] rounded-full uppercase text-white"
            onClick={() => {
              setUserModal(!userModal);
            }}
          >
            {userData && userData.fullname.slice(0, 2)}
          </button>

          <div
            className={`${
              userModal ? "max-md:flex" : "hidden"
            } bg-[rgb(36,37,40)] w-full max-w-[190px] mx-auto flex-col items-start gap-2 border-zinc-600 border-[1px] px-2 py-1 rounded-[5px] font-semibold fixed top-16 right-[0.7%] z-50`}
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
