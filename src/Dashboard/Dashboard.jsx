import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Pages/AuthPages/AuthChecker/AuthContext";
import SideBar from "./NavigationComponents/SideBar";
import TopNav from "./NavigationComponents/TopNav";
import AIGenerator from "./DashBoardChildren/QuickAIGenerator/AIGenerator";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import DesignModal from "./AI-Designed-Component/AI-Design-Modal/DesignModal";
import { DashContext } from "./DashboardChecker/DashboardContext";

const Dashboard = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const {
    closeSideNav,
    setCloseSideNav,
    showDesignModal,
    handleUserData,
  } = useContext(DashContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    } else {
      handleUserData();
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <main className={`dashboard-background h-screen flex text-white`}>
        <SideBar />
        <section
          className={`${
            location.pathname === "/home" ? "bg-image max-md:bg-none" : ""
          } w-full dashboard-navigation-darkmode rounded-[25px] my-1 mx-2 max-md:rounded-none max-md:m-0 relative`}
        >
          <TopNav />
          <button
            className={`${
              showDesignModal ? "" : ""
            } absolute top-1/2 left-3 text-xl text-[rgb(95,95,95)] block cursor-pointer z-50 max-md:hidden`}
            onClick={() => {
              setCloseSideNav(!closeSideNav);
            }}
          >
            {closeSideNav ? <FaChevronLeft /> : <FaChevronRight />}
          </button>
          <div className="flex justify-center">
            {showDesignModal ? <DesignModal /> : <AIGenerator />}
          </div>
          {children}
        </section>
      </main>
    </>
  );
};

export default Dashboard;
