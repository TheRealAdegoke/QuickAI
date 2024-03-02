import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Pages/AuthPages/AuthChecker/AuthContext";

const Dashboard = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

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
      <main className="">
        <Link
          to="/register"
          className="block text-blue-900 font-medium underline ml-5 mt-4"
        >
          Back
        </Link>
        <div className="flex justify-center mt-[200px]">
          <h1 className=" text-5xl font-medium">Dashboard</h1>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
