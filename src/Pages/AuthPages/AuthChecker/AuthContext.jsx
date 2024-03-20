import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);
  const [closeSideNav, setCloseSideNav] = useState(false);

  const getLoggedIn = async () => {
    try {
      const response = await axios.get("http://localhost:3000/loggedIn", {
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
        "http://localhost:3000/refresh",
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
  }, []);

  useEffect(() => {
    const interval = setInterval(refreshToken, 300000);
    return () => clearInterval(interval);
  }, [refreshToken]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, getLoggedIn, closeSideNav, setCloseSideNav }}
    >
      {children}
    </AuthContext.Provider>
  );
};
