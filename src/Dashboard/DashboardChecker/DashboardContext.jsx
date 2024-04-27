import React, { createContext, useEffect, useState } from "react";
import { heroComponents, navComponents } from "../../Dashboard/Arrays/Arrays";
import axios from "axios";
import { message } from "antd";

export const DashContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [closeSideNav, setCloseSideNav] = useState(false);
  const [closeAINav, setCloseAINav] = useState(false);
  const [showDesignModal, setShowDesignModal] = useState(false);
  const [testDesignModal, setTestDesignModal] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const [userData, setUserData] = useState("");
  const [userInput, setUserInput] = useState("");
  const [selectedIdea, setSelectedIdea] = useState("");
  const [geminiResponses, setGeminiResponses] = useState("");
  const [loading, setLoading] = useState(false);
  const [navIndex, setNavIndex] = useState(undefined);
  const [heroIndex, setHeroIndex] = useState(undefined);
  const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;


  const handleGenerateNav = () => {
    const navIndex = Math.floor(Math.random() * navComponents.length);
    const heroIndex = Math.floor(Math.random() * heroComponents.length);

    setNavIndex(navIndex);
    setHeroIndex(heroIndex);
    console.log("Nav Index: ", navIndex, "Hero Index: ", heroIndex);
  };

  const handleUserData = async () => {
    const response = await axios.get(`${baseUrl}/auth/user-data`, {
      withCredentials: true,
    });
    setUserData(response.data);
  };

  const handleGeminiResponses = async () => {
    message.config({
      duration: 2,
      maxCount: 1,
    });
    setLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/quick-ai`, {
        prompt: userInput || selectedIdea,
      });
      setGeminiResponses(response.data);

      if (response.data === 400) {
        setShowDesignModal(false);
      } else {
        setShowDesignModal(true);
      }
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data.error);
      message.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const clearDesigns = () => {
    setShowDesignModal(false);
    setUserInput("");
    setSelectedIdea("");
    setGeminiResponses("");
  }

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
        handleGenerateNav,
        userData,
        handleUserData,
        geminiResponses,
        setGeminiResponses,
        handleGeminiResponses,
        userInput,
        setUserInput,
        selectedIdea,
        setSelectedIdea,
        loading,
        navComponents,
        heroComponents,
        clearDesigns,
        testDesignModal,
        setTestDesignModal,
        navIndex,
        heroIndex,
      }}
    >
      {children}
    </DashContext.Provider>
  );
};
