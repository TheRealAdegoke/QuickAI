import React, { createContext, useEffect, useState } from "react";
import { heroComponents, navComponents } from "../../Dashboard/Arrays/Arrays";
import axios from "axios";
import { message } from "antd";

export const DashContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [closeSideNav, setCloseSideNav] = useState(false);
  const [closeAINav, setCloseAINav] = useState(false);
  const [showDesignModal, setShowDesignModal] = useState(false);
  const [randomNav, setRandomNav] = useState(undefined);
  const [randomHero, setRandomHero] = useState(undefined);
  const [userModal, setUserModal] = useState(false);
  const [userData, setUserData] = useState("");
  const [userInput, setUserInput] = useState("");
  const [selectedIdea, setSelectedIdea] = useState("");
  const [imagePrompt, setImagePrompt] = useState([]);
  const [heroPrompt, setHeroPrompt] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

  const handleGenerateNav = () => {
    const randomIndex = Math.floor(Math.random() * navComponents.length);
    setRandomNav(randomIndex);
  };

  const handleGenerateHero = () => {
    const randomIndex = Math.floor(Math.random() * heroComponents.length);
    setRandomHero(randomIndex);
  };

  const handleUserData = async () => {
    const response = await axios.get(`${baseUrl}/auth/user-data`, {
      withCredentials: true,
    });
    setUserData(response.data);
  };

  const handleImagePrompt = async () => {
    message.config({
      duration: 2,
      maxCount: 1,
    });
    setLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/search-image`, {
        prompt: userInput || selectedIdea,
      });
      setImagePrompt(response.data.imageUrls);

      if (response.data.imageUrls === 400) {
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

  const handleHeroPrompt = async () => {
    message.config({
      duration: 2,
      maxCount: 1,
    });
    setLoading(true);
    try {
      const response = await axios.post(
        `${baseUrl}/gemini-chat-hero-section-header`,
        { prompt: userInput || selectedIdea }
      );
      setHeroPrompt(response.data.promptResponse);

      if (response.data.promptResponse === 400) {
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

  const handleHeroDescription = async () => {
    message.config({
      duration: 2,
      maxCount: 1,
    });
    setLoading(true);
    try {
      const response = await axios.post(
        `${baseUrl}/gemini-chat-hero-section-description`,
        { prompt: userInput || selectedIdea }
      );
      setHeroDescription(response.data.promptResponse);

      if (response.data.promptResponse === 400) {
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
    setImagePrompt([]);
    setHeroPrompt("");
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
        handleImagePrompt,
        imagePrompt,
        setImagePrompt,
        navComponents,
        handleGenerateHero,
        randomHero,
        heroComponents,
        clearDesigns,
      }}
    >
      {children}
    </DashContext.Provider>
  );
};
