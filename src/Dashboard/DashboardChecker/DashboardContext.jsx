import React, { createContext, useEffect, useRef, useState } from "react";
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
import { webContentObject } from "../Arrays/Arrays";

export const DashContext = createContext();
export const DashboardProvider = ({ children }) => {
  const [closeSideNav, setCloseSideNav] = useState(false);
  const [closeAINav, setCloseAINav] = useState(true);
  const [showDesignModal, setShowDesignModal] = useState(false);
  const [testDesignModal, setTestDesignModal] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
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
  const [isFocused, setIsFocused] = useState(false);
  const scrollableDivRef = useRef(null);
  const [displayEditModal, setDisplayEditModal] = useState(false);
  const [changeSectionHeaderText, setChangeSectionHeaderText] = useState("");
  const [isPattern, setIsPattern] = useState(true);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const buttons = [
    "Header",
    "Hero",
    "Card Feature",
    "Classical Feature",
    "Testimonial",
    "FAQ",
    "Team",
  ];
  const [heroBackGroundStyle, setHeroBackGroundStyle] = useState("")
  const [cardFeatureBackGroundStyle, setcardFeatureBackGroundStyle] =
    useState("");

  useEffect(() => {
    if (!shuffled && webContentObject.randomButtonText) {
      const shuffuleTextArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };

      const shuffledButtonTexts = shuffuleTextArray(
        webContentObject.randomButtonText
      );
      const shuffledFeatureHeadersTexts = shuffuleTextArray(
        webContentObject.featureHeaders
      );
      const shuffledCustomersHeadersTexts = shuffuleTextArray(
        webContentObject.customerHeaders
      );
      const shuffledCustomerParagraphText = shuffuleTextArray(
        webContentObject.customerParagraphTexts
      );
      const shuffledCustomerReviewText = shuffuleTextArray(
        webContentObject.customerReviewTexts
      );
      const shuffledTeamHeader = shuffuleTextArray(
        webContentObject.teamHeaders
      );
      const shuffledTeamParagraphText = shuffuleTextArray(
        webContentObject.teamParagraphTexts
      );
      const shuffledFAQsHeaders = shuffuleTextArray(
        webContentObject.FAQsHeaders
      );
      const shuffledFAQParagraphTexts = shuffuleTextArray(
        webContentObject.faqParagraphTexts
      );
      const shuffledFAQQuestions = shuffuleTextArray(
        webContentObject.faqQuestions
      );
      const shuffledFAQAnswers = shuffuleTextArray(webContentObject.faqAnswers);
      const shuffledStatsHeaders = shuffuleTextArray(
        webContentObject.statsHeaders
      );
      const shuffledPartnerHeaders = shuffuleTextArray(
        webContentObject.partnerHeaders
      );
      const shuffledContactHeaders = shuffuleTextArray(
        webContentObject.contactHeaders
      );

      setText((text) => ({
        ...text,
        heroHeaderText: webContentObject.heroHeader,
        description: webContentObject.heroDescription,
        images: webContentObject.imageUrls || [],
        webLogo: webContentObject.logo,
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
        contactHeader: shuffledContactHeaders,
      }));

      setShuffled(true);
    }
  }, [geminiResponses, shuffled]);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setText((prevText) => ({
  //       ...prevText,
  //       heroHeaderText: geminiResponses.heroHeader
  //         ? geminiResponses.heroHeader.slice(
  //             0,
  //             prevText.heroHeaderText.length + 1
  //           )
  //         : "",
  //       description: geminiResponses.heroDescription
  //         ? geminiResponses.heroDescription.slice(
  //             0,
  //             prevText.description.length + 1
  //           )
  //         : "",
  //       images: geminiResponses.imageUrls || [],
  //       webLogo: geminiResponses.logo
  //         ? geminiResponses.logo.slice(0, prevText.webLogo.length + 1)
  //         : "",
  //     }));
  //   }, 30);

  //   return () => clearTimeout(timeout);
  // }, [geminiResponses, text]);

  const handleGenerateNav = () => {
    const randomNavIndex = Math.floor(
      Math.random() * navComponents({ text, location }).length
    );
    const randomHeroIndex = Math.floor(
      Math.random() * heroComponents({ text, buttonIndex, location }).length
    );
    const randomButtonsIndex = Math.floor(
      Math.random() * WebButtonsArray({ text, buttonIndex, location }).length
    );
    const randomfeaturesWithCardIndex = Math.floor(
      Math.random() * featuresWithCardsComponent({ text, location }).length
    );
    const randomfeaturesIndex = Math.floor(
      Math.random() * featuresComponents({ text, location }).length
    );
    const randomTestimonialIndex = Math.floor(
      Math.random() * testimonialComponent({ text, location }).length
    );
    const randomFaqIndex = Math.floor(
      Math.random() * faqComponent({ text, location }).length
    );
    const randomTeamIndex = Math.floor(
      Math.random() * teamComponent({ text, location }).length
    );
    const randomContactIndex = Math.floor(
      Math.random() * contactComponent({ text, location }).length
    );
    const randomFooterIndex = Math.floor(
      Math.random() * footerComponent({ text, location }).length
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
    setFooterIndex(randomFooterIndex);
    setShowDesignModal(true);
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

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <DashContext.Provider
      value={{
        closeSideNav,
        setCloseSideNav,
        showDesignModal,
        setShowDesignModal,
        closeAINav,
        setCloseAINav,
        userData,
        handleUserData,
        geminiResponses,
        setGeminiResponses,
        handleGeminiResponses,
        handleGenerateNav,
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
        isMobile,
        setIsMobile,
        setNavIndex,
        setHeroIndex,
        setFeaturesWithCardIndex,
        setFeaturesIndex,
        setTestimonialIndex,
        setFaqIndex,
        setTeamIndex,
        setContactIndex,
        setFooterIndex,
        isFocused,
        setIsFocused,
        scrollableDivRef,
        displayEditModal,
        changeSectionHeaderText,
        isPattern,
        clickedIndex,
        buttons,
        currentSection,
        setDisplayEditModal,
        setChangeSectionHeaderText,
        setIsPattern,
        setClickedIndex,
        setCurrentSection,
        isFocused,
        setIsFocused,
        handleFocus,
        handleBlur,
        heroBackGroundStyle,
        setHeroBackGroundStyle,
        cardFeatureBackGroundStyle,
        setcardFeatureBackGroundStyle,
      }}
    >
      {children}
    </DashContext.Provider>
  );
};
