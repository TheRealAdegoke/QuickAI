import { axiosInstance } from "../AuthChecker/axiosInstance";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(undefined)

  const handleAuthentication = async () => {
    try {
        const response = await axiosInstance.get("/auth/loggedIn");
        if (response.data.authenticated) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
    } catch (error) {
      console.error(error.response.data.error);
      setIsAuthenticated(false);
    }
  }

  const refreshAccessToken = async () => {
    try {
      await axiosInstance.post("/auth/refresh");
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const unAuthenticate = async () => {
    try {
      await axiosInstance.post("/auth/logout");
      handleAuthentication()
    } catch (error) {
      console.error("Error: ", error);
    }
  }

  useEffect(() => {
    handleAuthentication()
    const interval = setInterval(refreshAccessToken, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [isAuthenticated])

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
