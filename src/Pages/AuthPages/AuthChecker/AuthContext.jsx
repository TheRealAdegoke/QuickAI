import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);
  const [closeSideNav, setCloseSideNav] = useState(false);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
