import React, { useContext, useEffect, useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Pages/AuthPages/AuthChecker/AuthContext";
import TopNav from "./NavigationComponents/TopNav";
import AIGenerator from "./DashBoardChildren/QuickAIGenerator/AIGenerator";
import DesignModal from "./AI-Designed-Component/AI-Design-Modal/DesignModal";
import { DashContext } from "./DashboardChecker/DashboardContext";
import TestDesignModal from "./Test Modal/TestDesignModal";
import { Helmet } from "react-helmet";

const Dashboard = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const {
    closeSideNav,
    setCloseSideNav,
    showDesignModal,
    handleUserData,
    testDesignModal,
    modalRef,
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
      <Helmet>
        <title>QuickUI - Effortless Landing Page Creation</title>
        <meta
          name="description"
          content="QuickUI lets you easily create landing pages without coding. Build your next project faster with our intuitive platform."
        />
        <meta name="keywords" content="create a landing page ai" />
        <meta
          property="og:title"
          content="QuickUI - Effortless Landing Page Creation"
        />
        <meta
          property="og:description"
          content="QuickUI helps you build and customize landing pages easily. No coding skills needed!"
        />
        <meta property="og:image" content="https://i.imgur.com/HSA0Pbh.png" />
        <meta property="og:url" content="https://quickui.co/home" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="QuickUI - Effortless Landing Page Creation"
        />
        <meta
          name="twitter:description"
          content="Create and customize landing pages easily with QuickUI!"
        />
        <meta name="twitter:image" content="https://i.imgur.com/HSA0Pbh.png" />
        <link rel="canonical" href="https://quickui.co/home" />
      </Helmet>
      <main className={`dashboard-background h-screen flex text-white`}>
        {/* <SideBar /> */}
        <section
          className={`${
            location.pathname === "/home" ? "bg-image max-md:bg-none" : ""
          } w-full dashboard-navigation-darkmode rounded-[25px] my-1 mx-2 max-md:rounded-none max-md:m-0 relative`}
        >
          <TopNav />
          {/* <button
            className={`${
              showDesignModal ? "" : ""
            } absolute top-1/2 left-3 text-xl text-[rgb(95,95,95)] block cursor-pointer z-50 max-md:hidden`}
            onClick={() => {
              setCloseSideNav(!closeSideNav);
            }}
          >
            {closeSideNav ? <FaChevronLeft /> : <FaChevronRight />}
          </button> */}
          <div className="flex justify-center">
            {showDesignModal ? <DesignModal /> : <AIGenerator />}
          </div>

          <div className="flex justify-center">
            {testDesignModal && <TestDesignModal />}
          </div>
          {children}
        </section>
      </main>
    </>
  );
};

export default Dashboard;
