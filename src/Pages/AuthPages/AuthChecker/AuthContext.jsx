import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { navComponents } from "../../../Dashboard/Arrays/Arrays";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);
  const [closeSideNav, setCloseSideNav] = useState(false);
  const [closeAINav, setCloseAINav] = useState(false);
  const [showDesignModal, setShowDesignModal] = useState(false)
  const [randomNav, setRandomNav] = useState(null);
  const [userModal, setUserModal] = useState(false);
  const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

  const getLoggedIn = async () => {
    try {
      const response = await axios.get(`${baseUrl}/auth/loggedIn`, {
        withCredentials: true,
      });
      setIsAuthenticated(response.data);
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  const refreshToken = async () => {
    try {
      await axios.post(
        `${baseUrl}/auth/refresh`,
        {},
        {
          withCredentials: true,
        }
      );
      await getLoggedIn();
    } catch (error) {
      console.error("Failed to refresh token:", error);
      // Handle token refresh failure, such as logging out the user
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    getLoggedIn();
  }, [getLoggedIn, refreshToken]);

  useEffect(() => {
    const interval = setInterval(refreshToken, 300000);
    return () => clearInterval(interval);
  }, [getLoggedIn, refreshToken]);

  const handleGenerate = () => {
    const randomIndex = Math.floor(Math.random() * navComponents.length)
    setRandomNav(randomIndex)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        getLoggedIn,
        refreshToken,
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
