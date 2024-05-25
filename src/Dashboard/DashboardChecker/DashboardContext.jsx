import React, { createContext, useEffect, useState } from "react";
import { axiosInstance } from "../../Pages/AuthPages/AuthChecker/axiosInstance";
import { message } from "antd";
import { heroComponents } from "../Arrays/HeroSectionArray";
import { WebButtonsArray } from "../Arrays/WebButtonsArray";
import { navComponents } from "../Arrays/NavArray";
import { featuresWithCardsComponent } from "../Arrays/FeaturesWithCardsArray";
import { featuresComponents } from "../Arrays/FeaturesArray";
import { testimonialComponent } from "../Arrays/TestimonialArray";
import { faqComponent } from "../Arrays/FAQArrays";
import { teamComponent } from "../Arrays/TeamArray";
import { contactComponent } from "../Arrays/ContactArray";
import { footerComponent } from "../Arrays/Footer";

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
  const [faqIndex, setFaqIndex] = useState(undefined);
  const [teamIndex, setTeamIndex] = useState(undefined);
  const [contactIndex, setContactIndex] = useState(undefined);
  const [footerIndex, setFooterIndex] = useState(undefined);
  const [shuffled, setShuffled] = useState(false);
  const [text, setText] = useState({
    heroHeaderText: "",
    description: "",
    featureHeader: [],
    customerHeader: [],
    customerParagraphText: [],
    customerReviewText: [],
    teamHeader: [],
    teamParagraphTexts: [],
    FAQsHeader: [],
    faqParagraphText: [],
    faqQuestion: [],
    faqAnswer: [],
    statsHeader: [],
    partnerHeader: [],
    contactHeader: [],
    images: [],
    webLogo: "",
    buttonTexts: [],
  });

  useEffect(() => {
    if (!shuffled && geminiResponses.randomButtonText) {
      const shuffuleTextArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };

      const shuffledButtonTexts = shuffuleTextArray(
        geminiResponses.randomButtonText
      );
      const shuffledFeatureHeadersTexts = shuffuleTextArray(
        geminiResponses.featureHeaders
      );
      const shuffledCustomersHeadersTexts = shuffuleTextArray(
        geminiResponses.customerHeaders
      );
      const shuffledCustomerParagraphText = shuffuleTextArray(
        geminiResponses.customerParagraphTexts
      );
      const shuffledCustomerReviewText = shuffuleTextArray(
        geminiResponses.customerReviewTexts
      );
      const shuffledTeamHeader = shuffuleTextArray(
        geminiResponses.teamHeaders
      );
      const shuffledTeamParagraphText = shuffuleTextArray(geminiResponses.teamParagraphTexts);
      const shuffledFAQsHeaders = shuffuleTextArray(
        geminiResponses.FAQsHeaders
      );
      const shuffledFAQParagraphTexts = shuffuleTextArray(
        geminiResponses.faqParagraphTexts
      );
      const shuffledFAQQuestions = shuffuleTextArray(
        geminiResponses.faqQuestions
      );
      const shuffledFAQAnswers = shuffuleTextArray(
        geminiResponses.faqAnswers
      );
      const shuffledStatsHeaders = shuffuleTextArray(
        geminiResponses.statsHeaders
      );
      const shuffledPartnerHeaders = shuffuleTextArray(
        geminiResponses.partnerHeaders
      );
      const shuffledContactHeaders = shuffuleTextArray(
        geminiResponses.contactHeaders
      );

      setText((text) => ({
        ...text,
        buttonTexts: shuffledButtonTexts,
        featureHeader: shuffledFeatureHeadersTexts,
        customerHeader: shuffledCustomersHeadersTexts,
        customerParagraphText: shuffledCustomerParagraphText,
        customerReviewText: shuffledCustomerReviewText,
        teamHeader: shuffledTeamHeader,
        teamParagraphTexts: shuffledTeamParagraphText,
        FAQsHeader: shuffledFAQsHeaders,
        faqParagraphText: shuffledFAQParagraphTexts,
        faqQuestion: shuffledFAQQuestions,
        faqAnswer: shuffledFAQAnswers,
        statsHeader: shuffledStatsHeaders,
        partnerHeader: shuffledPartnerHeaders,
        contactHeader: shuffledContactHeaders
      }));

      setShuffled(true);
    }
  }, [geminiResponses, shuffled]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText((prevText) => ({
        ...prevText,
        heroHeaderText: geminiResponses.heroHeader
          ? geminiResponses.heroHeader.slice(
              0,
              prevText.heroHeaderText.length + 1
            )
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
      Math.random() * featuresComponents({ text }).length
    );
    const randomTestimonialIndex = Math.floor(
      Math.random() * testimonialComponent({ text }).length
    );
    const randomFaqIndex = Math.floor(
      Math.random() * faqComponent({ text }).length
    );
    const randomTeamIndex = Math.floor(
      Math.random() * teamComponent({ text }).length
    );
    const randomContactIndex = Math.floor(
      Math.random() * contactComponent({ text }).length
    );
    const randomFooterIndex = Math.floor(
      Math.random() * footerComponent({ text }).length
    );

    setNavIndex(randomNavIndex);
    setHeroIndex(randomHeroIndex);
    setButtonIndex(randomButtonsIndex);
    setFeaturesWithCardIndex(randomfeaturesWithCardIndex);
    setFeaturesIndex(randomfeaturesIndex);
    setTestimonialIndex(randomTestimonialIndex);
    setFaqIndex(randomFaqIndex);
    setTeamIndex(randomTeamIndex);
    setContactIndex(randomContactIndex);
    setFooterIndex(randomFooterIndex)
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
        featureHeaders: response.data.featureHeaders,
        customerHeaders: response.data.customerHeaders,
        customerParagraphTexts: response.data.customerParagraphTexts,
        customerReviewTexts: response.data.customerReviewTexts,
        teamHeaders: response.data.teamHeaders,
        teamParagraphTexts: response.data.teamParagraphTexts,
        FAQsHeaders: response.data.FAQsHeaders,
        faqParagraphTexts: response.data.faqParagraphTexts,
        faqQuestions: response.data.faqQuestions,
        faqAnswers: response.data.faqAnswers,
        statsHeaders: response.data.statsHeaders,
        partnerHeaders: response.data.partnerHeaders,
        contactHeaders: response.data.contactHeaders,
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
        faqComponent,
        teamComponent,
        contactComponent,
        footerComponent,
        clearDesigns,
        testDesignModal,
        setTestDesignModal,
        buttonIndex,
        navIndex,
        heroIndex,
        featuresWithCardIndex,
        featuresIndex,
        testimonialIndex,
        faqIndex,
        teamIndex,
        contactIndex,
        footerIndex,
        text,
        setText,
      }}
    >
      {children}
    </DashContext.Provider>
  );
};
