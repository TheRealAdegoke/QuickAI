import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WebLogo from "../../assets/WebLogo";
import { FaRegEdit } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { AuthContext } from "../../Pages/AuthPages/AuthChecker/AuthContext";

const SideBar = () => {
  const { closeSideNav, setCloseSideNav } = useContext(AuthContext);

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
        } dashboard-navigation-darkmode w-[250px] h-screen p-2 phone:border-r-[1px] phone:border-[rgb(26,26,26)] phone:fixed z-50`}
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
      </aside>
    </>
  );
};

export default SideBar;
