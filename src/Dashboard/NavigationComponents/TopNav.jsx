import React, { useContext } from "react";
import { Link } from "react-router-dom";
import WebLogo from "../../assets/WebLogo";
import { FaRegEdit } from "react-icons/fa";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { AuthContext } from "../../Pages/AuthPages/AuthChecker/AuthContext";

const TopNav = () => {
  const { closeSideNav, setCloseSideNav } = useContext(AuthContext);
  return (
    <>
      <nav>
        <div className="phone:flex items-center justify-between m-3 hidden">
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
          <button className="bg-[rgb(9,23,56)] flex justify-center items-center p-[0.5rem] rounded-full">
            AD
          </button>
        </div>

        {/* <div className="bg-[rgb(0,0,0)] phone:hidden w-full h-[50px] border-b-[1px] border-[rgba(236,236,236,0.5)] rounded-t-[25px]"></div> */}
      </nav>
    </>
  );
};

export default TopNav;
