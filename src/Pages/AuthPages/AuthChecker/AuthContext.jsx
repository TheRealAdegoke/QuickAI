import { axiosInstance } from "../AuthChecker/axiosInstance";
import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  const handleAuthentication = async () => {
    try {
      const accessToken = Cookies.get("accessToken");
      const response = await axiosInstance.get("/auth/loggedIn", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.data.authenticated) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      
    } catch (error) {
      console.error(error.response.data.error);
      setIsAuthenticated(false);
    }
  };

  const refreshAccessToken = async () => {
    try {
      await axiosInstance.post("/auth/refresh");
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const unAuthenticate = async () => {
    try {
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      handleAuthentication();
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    handleAuthentication();
    const interval = setInterval(refreshAccessToken, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        handleAuthentication,
        isAuthenticated,
        refreshAccessToken,
        unAuthenticate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
