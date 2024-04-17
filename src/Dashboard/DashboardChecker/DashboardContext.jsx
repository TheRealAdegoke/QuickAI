import React, { createContext, useEffect, useState } from "react";
import { navComponents } from "../../Dashboard/Arrays/Arrays";
import axios from "axios";

export const DashContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [closeSideNav, setCloseSideNav] = useState(false);
  const [closeAINav, setCloseAINav] = useState(false);
  const [showDesignModal, setShowDesignModal] = useState(false);
  const [randomNav, setRandomNav] = useState(null);
  const [userModal, setUserModal] = useState(false);
  const [userData, setUserData] = useState("")
  const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

  const handleGenerate = () => {
    const randomIndex = Math.floor(Math.random() * navComponents.length);
    setRandomNav(randomIndex);
  };

  const handleUserData = async () => {
    const response = await axios.get(`${baseUrl}/auth/user-data`, {
      withCredentials: true,
    });
    setUserData(response.data);
  };


  return (
    <DashContext.Provider
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
        userData,
        handleUserData
      }}
    >
      {children}
    </DashContext.Provider>
  );
};
