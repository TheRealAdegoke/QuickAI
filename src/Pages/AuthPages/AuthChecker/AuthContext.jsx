import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { navComponents } from "../../../Dashboard/Arrays/Arrays";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(undefined)
  const [closeSideNav, setCloseSideNav] = useState(false);
  const [closeAINav, setCloseAINav] = useState(false);
  const [showDesignModal, setShowDesignModal] = useState(false);
  const [randomNav, setRandomNav] = useState(null);
  const [userModal, setUserModal] = useState(false);
  const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

  const handleAuthentication = async () => {
    try {
        const response = await axios.get(`${baseUrl}/auth/loggedIn`, {
          withCredentials: true,
        });
        if (response.data.authenticated) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
        console.log("contextIsAuthenticated: ", isAuthenticated);
    } catch (error) {
      console.error(error.response.data.error);
      setIsAuthenticated(false);
    }
  }

  const refreshAccessToken = async () => {
    try {
      const response = await axios.post(`${baseUrl}/auth/refresh`, "", {
        withCredentials: true,
      });
      console.log("Access token refreshed successfully.");
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  useEffect(() => {
    handleAuthentication()
    const interval = setInterval(refreshAccessToken, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [isAuthenticated])

  const handleGenerate = () => {
    const randomIndex = Math.floor(Math.random() * navComponents.length);
    setRandomNav(randomIndex);
  };

  return (
    <AuthContext.Provider
      value={{
        closeSideNav,
        setCloseSideNav,
        userModal,
        setUserModal,
        showDesignModal,
        setShowDesignModal,
        closeAINav,
        setCloseAINav,
        handleGenerate,
        randomNav,
        setRandomNav,
        handleAuthentication,
        isAuthenticated,
        refreshAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
