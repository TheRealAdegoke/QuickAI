import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(undefined)
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
    } catch (error) {
      console.error(error.response.data.error);
      setIsAuthenticated(false);
    }
  }

  const refreshAccessToken = async () => {
    try {
      await axios.post(`${baseUrl}/auth/refresh`, "", {
        withCredentials: true,
      });
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const unAuthenticate = async () => {
    try {
      await axios.post(`${baseUrl}/auth/logout`, "", {
        withCredentials: true,
      });
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
