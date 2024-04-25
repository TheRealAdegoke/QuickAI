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
  const [randomIndex, setRandomIndex] = useState(undefined); 
  const [userModal, setUserModal] = useState(false);
  const [userData, setUserData] = useState("");
  const [userInput, setUserInput] = useState("");
  const [selectedIdea, setSelectedIdea] = useState("");
  const [geminiResponses, setGeminiResponses] = useState("");
  const [loading, setLoading] = useState(false);
  const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

  const handleGenerateNav = () => {
    const randomIndex = Math.floor(
      Math.random() * Math.max(navComponents.length, heroComponents.length)
    );
    setRandomIndex(randomIndex);
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
        randomIndex,
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
      }}
    >
      {children}
    </DashContext.Provider>
  );
};
