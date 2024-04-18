import React, { createContext, useEffect, useState } from "react";
import { navComponents } from "../../Dashboard/Arrays/Arrays";
import axios from "axios";
import { message } from "antd";

export const DashContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [closeSideNav, setCloseSideNav] = useState(false);
  const [closeAINav, setCloseAINav] = useState(false);
  const [showDesignModal, setShowDesignModal] = useState(false);
  const [randomNav, setRandomNav] = useState(null);
  const [userModal, setUserModal] = useState(false);
  const [userData, setUserData] = useState("");
  const [userInput, setUserInput] = useState("");
  const [selectedIdea, setSelectedIdea] = useState("");
  const [heroPrompt, setHeroPrompt] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  const [loading, setLoading] = useState(false);
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

  const handleHeroPrompt = async () => {
    message.config({
      duration: 2,
      maxCount: 1,
    });
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/gemini-chat-hero-section-header",
        { prompt: userInput || selectedIdea }
      );
      setHeroPrompt(response.data.promptResponse);

      if (response.data.promptResponse === 400) {
        setShowDesignModal(false);
      } else {
        setShowDesignModal(true);
      }

      console.log(response.data.promptResponse);
    } catch (error) {
      console.error(error.response.data.error);
      message.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const handleHeroDescription = async () => {
    message.config({
      duration: 2,
      maxCount: 1,
    });
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/gemini-chat-hero-section-description",
        { prompt: userInput || selectedIdea }
      );
      setHeroDescription(response.data.promptResponse);

      if (response.data.promptResponse === 400) {
        setShowDesignModal(false);
      } else {
        setShowDesignModal(true);
      }

      console.log(response.data.promptResponse);
    } catch (error) {
      console.error(error.response.data.error);
      message.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
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
        handleUserData,
        heroPrompt,
        setHeroPrompt,
        handleHeroPrompt,
        userInput,
        setUserInput,
        selectedIdea,
        setSelectedIdea,
        loading,
        heroDescription,
        setHeroDescription,
        handleHeroDescription,
      }}
    >
      {children}
    </DashContext.Provider>
  );
};
