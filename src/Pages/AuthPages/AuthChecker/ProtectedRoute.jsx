import React, { useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { Route, Routes, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ element, ...rest }) => {
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
    <Routes>
      <Route element={element} {...rest} />
    </Routes>
  );
};

export default ProtectedRoute;
