import React, { createContext, useEffect, useState } from "react";
import { WebButtonsArray, heroComponents, navComponents } from "../../Dashboard/Arrays/Arrays";
import axios from "axios";
import { message } from "antd";

export const DashContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [closeSideNav, setCloseSideNav] = useState(false);
  const [closeAINav, setCloseAINav] = useState(false);
  const [showDesignModal, setShowDesignModal] = useState(false);
  const [testDesignModal, setTestDesignModal] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const [userData, setUserData] = useState(undefined);
  const [userInput, setUserInput] = useState("");
  const [selectedIdea, setSelectedIdea] = useState("");
  const [geminiResponses, setGeminiResponses] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonIndex, setButtonIndex] = useState(undefined);
  const [navIndex, setNavIndex] = useState(undefined);
  const [heroIndex, setHeroIndex] = useState(undefined);
  const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;


  const handleGenerateNav = () => {
    const randomNavIndex = Math.floor(Math.random() * navComponents.length);
    const randomHeroIndex = Math.floor(Math.random() * heroComponents.length);
    const randomButtonsIndex = Math.floor(Math.random() * WebButtonsArray.length)

    setNavIndex(randomNavIndex);
    setHeroIndex(randomHeroIndex);
    setButtonIndex(randomButtonsIndex)
    console.log("Nav Index: ", randomNavIndex, "Hero Index: ", randomHeroIndex, "Button Index: ", randomButtonsIndex);
  };

  const handleUserData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/auth/user-data`, {
        withCredentials: true,
      });
      setUserData(response.data);
    } catch (error) {
      console.error(error.response.data.error);
    }
  };

  const handleGeminiResponses = async () => {
    message.config({
      duration: 2,
      maxCount: 1,
    });
    setLoading(true);
    try {
      const response = await axios.post(
        `${baseUrl}/quick-ai`,
        {
          prompt: userInput || selectedIdea,
        },
        {withCredentials: true}
      );
      setGeminiResponses(response.data);

      if (response.data === 400) {
        setShowDesignModal(false);
      } else {
        setShowDesignModal(true);
      }
      handleUserData()
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
        WebButtonsArray,
        navComponents,
        heroComponents,
        clearDesigns,
        testDesignModal,
        setTestDesignModal,
        buttonIndex,
        navIndex,
        heroIndex,
      }}
    >
      {children}
    </DashContext.Provider>
  );
};
