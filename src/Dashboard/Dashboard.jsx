import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Pages/AuthPages/AuthChecker/AuthContext";
import DashNav from "./DashNav";

const Dashboard = ({ children,  }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <DashNav />
      <main
        className={`${location.pathname === "/dashboard" ? "block" : "hidden"}`}
      >
        <div className="flex justify-center mt-[200px]">
          <h1 className="text-5xl font-medium">DashBoard</h1>
        </div>
      </main>
      {children}
    </>
  );
};

export default Dashboard;
