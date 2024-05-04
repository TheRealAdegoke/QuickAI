import React, { createContext, useEffect, useState } from "react";
import { WebButtonsArray, heroComponents, navComponents } from "../../Dashboard/Arrays/Arrays";
import { axiosInstance } from "../../Pages/AuthPages/AuthChecker/axiosInstance";
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
  const [geminiResponses, setGeminiResponses] = useState({
    randomButtonText: [],
    logo: "",
    heroHeader: "",
    heroDescription: "",
    imageUrls: [],
  });
  const [loading, setLoading] = useState(false);
  const [buttonIndex, setButtonIndex] = useState(undefined);
  const [navIndex, setNavIndex] = useState(undefined);
  const [heroIndex, setHeroIndex] = useState(undefined);


  const handleGenerateNav = () => {
    const randomNavIndex = Math.floor(Math.random() * navComponents.length);
    const randomHeroIndex = Math.floor(Math.random() * heroComponents.length);
    const randomButtonsIndex = Math.floor(Math.random() * WebButtonsArray.length)

    setNavIndex(randomNavIndex);
    setHeroIndex(randomHeroIndex);
    setButtonIndex(randomButtonsIndex)
  };

  const handleUserData = async () => {
    try {
      const response = await axiosInstance.get("/auth/user-data");
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
      const response = await axiosInstance.post("/quick-ai",
        {
          prompt: userInput || selectedIdea,
        })
      setGeminiResponses({
        randomButtonText: response.data.randomButtonText,
        logo: response.data.logo,
        heroHeader: response.data.heroHeader,
        heroDescription: response.data.heroDescription,
        imageUrls: response.data.imageUrls,
      });
      if (response.data === 400) {
        setShowDesignModal(false);
      } else {
        setShowDesignModal(true);
      }
      handleUserData()
    } catch (error) {
      console.error(error.response.data.error);
      message.error(error.response.data.error);
      setLoading(false);
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
        setLoading,
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
