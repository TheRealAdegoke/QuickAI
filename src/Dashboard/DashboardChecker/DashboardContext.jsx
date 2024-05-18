import React, {
  createContext,
  useEffect,
  useState,
} from "react";
import { axiosInstance } from "../../Pages/AuthPages/AuthChecker/axiosInstance";
import { message } from "antd";
import { heroComponents } from "../Arrays/HeroSectionArray";
import { WebButtonsArray } from "../Arrays/WebButtonsArray";
import { navComponents } from "../Arrays/NavArray";
import { featuresWithCardsComponent } from "../Arrays/FeaturesWithCardsArray";
import { featuresComponents } from "../Arrays/FeaturesArray";
import { testimonialComponent } from "../Arrays/TestimonialArray";

export const DashContext = createContext();
export const DashboardProvider = ({ children }) => {
  const [closeSideNav, setCloseSideNav] = useState(false);
  const [closeAINav, setCloseAINav] = useState(true);
  const [showDesignModal, setShowDesignModal] = useState(false);
  const [testDesignModal, setTestDesignModal] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const [userData, setUserData] = useState(undefined);
  const [userInput, setUserInput] = useState("");
  const [selectedIdea, setSelectedIdea] = useState("");
  const [geminiResponses, setGeminiResponses] = useState({});
  const [loading, setLoading] = useState(false);
  const [buttonIndex, setButtonIndex] = useState(undefined);
  const [navIndex, setNavIndex] = useState(undefined);
  const [heroIndex, setHeroIndex] = useState(undefined);
  const [featuresWithCardIndex, setFeaturesWithCardIndex] = useState(undefined);
  const [featuresIndex, setFeaturesIndex] = useState(undefined);
  const [testimonialIndex, setTestimonialIndex] = useState(undefined);
  const [shuffled, setShuffled] = useState(false);
  const [text, setText] = useState({
    prompt: "",
    description: "",
    images: [],
    webLogo: "",
    buttonTexts: [],
  });

  useEffect(() => {
    if (!shuffled && geminiResponses.randomButtonText) {
      const shuffuleButtonTextArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };

      const shuffledButtonTexts = shuffuleButtonTextArray(
        geminiResponses.randomButtonText
      );

      setText((text) => ({
        ...text,
        buttonTexts: shuffledButtonTexts,
      }));

      setShuffled(true);
    }
  }, [geminiResponses, shuffled]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText((prevText) => ({
        ...prevText,
        prompt: geminiResponses.heroHeader
          ? geminiResponses.heroHeader.slice(0, prevText.prompt.length + 1)
          : "",
        description: geminiResponses.heroDescription
          ? geminiResponses.heroDescription.slice(
              0,
              prevText.description.length + 1
            )
          : "",
        images: geminiResponses.imageUrls || [],
        webLogo: geminiResponses.logo
          ? geminiResponses.logo.slice(0, prevText.webLogo.length + 1)
          : "",
      }));
    }, 30);

    return () => clearTimeout(timeout);
  }, [geminiResponses, text]);

  const handleGenerateNav = () => {
    const randomNavIndex = Math.floor(
      Math.random() * navComponents({ text }).length
    );
    const randomHeroIndex = Math.floor(
      Math.random() * heroComponents({ text, buttonIndex }).length
    );
    const randomButtonsIndex = Math.floor(
      Math.random() * WebButtonsArray({ text, buttonIndex }).length
    );
    const randomfeaturesWithCardIndex = Math.floor(
      Math.random() * featuresWithCardsComponent({ text }).length
    );
    const randomfeaturesIndex = Math.floor(
      Math.random() * featuresComponents({text}).length
    );
    const randomTestimonialIndex = Math.floor(
      Math.random() * testimonialComponent({ text }).length
    );

    setNavIndex(randomNavIndex);
    setHeroIndex(randomHeroIndex);
    setButtonIndex(randomButtonsIndex);
    setFeaturesWithCardIndex(randomfeaturesWithCardIndex)
    setFeaturesIndex(randomfeaturesIndex);
    setTestimonialIndex(randomTestimonialIndex)
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
      const response = await axiosInstance.post("/quick-ai", {
        prompt: userInput || selectedIdea,
      });
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
      handleGenerateNav();
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
    setShuffled(false);
    setNavIndex(undefined);
    setHeroIndex(undefined);
    setButtonIndex(undefined);
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
        featuresWithCardsComponent,
        featuresComponents,
        testimonialComponent,
        clearDesigns,
        testDesignModal,
        setTestDesignModal,
        buttonIndex,
        navIndex,
        heroIndex,
        featuresWithCardIndex,
        featuresIndex,
        testimonialIndex,
        text,
        setText,
      }}
    >
      {children}
    </DashContext.Provider>
  );
};
