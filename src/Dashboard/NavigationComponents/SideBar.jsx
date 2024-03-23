import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WebLogo from "../../assets/WebLogo";
import { FaRegEdit } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { AuthContext } from "../../Pages/AuthPages/AuthChecker/AuthContext";
import { FaChevronRight } from "react-icons/fa6";

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
        <button className="block w-full mb-4">
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

        <button className="flex items-center fixed bottom-5 gap-2 px-">
          <span className="bg-[rgb(9,23,56)] flex justify-center items-center p-[0.5rem] rounded-full">
            AD
          </span>
          <p>Adegoke Adewale</p>
        </button>
      </aside>
    </>
  );
};

export default SideBar;
