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
          <HiMiniBars3BottomLeft
            className="block text-2xl cursor-pointer"
            onClick={() => {
              setCloseSideNav(true);
            }}
          />
          <div className={`${closeSideNav ? "hidden" : "block"}`}>
            <WebLogo />
          </div>
          <FaRegEdit className="text-[rgb(236,236,236)] text-2xl block" />
        </div>
      </nav>
    </>
  );
};

export default TopNav;
