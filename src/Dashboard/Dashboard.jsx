import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Pages/AuthPages/AuthChecker/AuthContext";
import DashNav from "./DashNav";

const Dashboard = ({children}) => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()

  useEffect(() => {
    const getCookie = (name) => {
      const cookies = document.cookie.split("; ");

      for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=");

        if (cookieName === name) {
          return cookieValue;
        }
      }

      return null;
    };

    const myCookieValue = getCookie("token");

    if (myCookieValue) {
      sessionStorage.setItem("token", myCookieValue);
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  }, []);

  if (!isAuthenticated) {
    return navigate("/login");
  }

  return (
    <>
      <DashNav />
      <main className={`${location.pathname === "/dashboard" ? "block" : "hidden"}`}>
        <div className="flex justify-center mt-[200px]">
          <h1 className=" text-5xl font-medium">DashBoard</h1>
        </div>
      </main>
      {children}
    </>
  );
};

export default Dashboard;
