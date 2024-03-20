import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Pages/AuthPages/AuthChecker/AuthContext";
import SideBar from "./NavigationComponents/SideBar";
import TopNav from "./NavigationComponents/TopNav";
import { FaChevronLeft } from "react-icons/fa";
import AIGenerator from "./DashBoardChildren/QuickAIGenerator/AIGenerator";

const Dashboard = ({ children }) => {
  const { isAuthenticated, closeSideNav, setCloseSideNav } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <main className={`dashboard-background h-screen flex text-white`}>
        <SideBar />
        <section
          className={`${
            location.pathname === "/home"
              ? "bg-Quick bg-no-repeat bg-center"
              : ""
          } w-full dashboard-navigation-darkmode rounded-[25px] my-1 mx-2 phone:rounded-none phone:m-0`}
        >
          {" "}
          <div onClick={() => {
            setCloseSideNav(!closeSideNav)
          }}>close</div>
          <TopNav />
          <AIGenerator />
          {children}
        </section>
      </main>
    </>
  );
};

export default Dashboard;
