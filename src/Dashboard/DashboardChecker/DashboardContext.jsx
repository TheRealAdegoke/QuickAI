import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { axiosInstance } from "../../Pages/AuthPages/AuthChecker/axiosInstance";
import Cookies from "js-cookie";
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
import { v4 as uuidv4 } from "uuid";

export const DashContext = createContext();
export const DashboardProvider = ({ children }) => {
  const [closeSideNav, setCloseSideNav] = useState(false);
  const [closeAINav, setCloseAINav] = useState(true);
  const [showDesignModal, setShowDesignModal] = useState(false);
  const [testDesignModal, setTestDesignModal] = useState(false);
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
  const [displayEditModal, setDisplayEditModal] = useState(false);
  const [changeSectionHeaderText, setChangeSectionHeaderText] = useState("");
  const [isPattern, setIsPattern] = useState(true);
  const [isContent, setIsContent] = useState(true);
  const [clickedIndex, setClickedIndex] = useState("");
  const [currentSection, setCurrentSection] = useState(false);
  const buttons = [
    "Header",
    "Hero",
    "Card",
    "Classic",
    "Testimonial",
    "FAQ",
    "Team",
    "Footer",
  ];
  const [heroBackGroundStyle, setHeroBackGroundStyle] = useState("");
  const [cardFeatureBackGroundStyle, setcardFeatureBackGroundStyle] =
    useState("");
  const [clickedText, setClickedText] = useState("");
  const [selectedElement, setSelectedElement] = useState(null);
  const [elementContent, setElementContent] = useState({});
  const [elementStyles, setElementStyles] = useState({});
  const [backGroundStyle, setBackGroundStyle] = useState("");
  const [selectedDiv, setSelectedDiv] = useState(null);
  const [sectionModal, setSectionModal] = useState(false);
  const [divStyles, setDivStyles] = useState({});
  const defaultBackgroundColor = "#ffffff";
  const [generatedElements, setGeneratedElements] = useState([]);
  const [elements, setElements] = useState([]);
  const [activeSection, setActiveSection] = useState({
    Header: true,
    Hero: false,
    Card: false,
    Classic: false,
    Testimonial: false,
    FAQ: false,
    Team: false,
    Footer: false,
  });
  const newElementRef = useRef(null);
  const elementsContainerRef = useRef(null);
  const [isEdited, setIsEdited] = useState({});
  const [displayCode, setDisplayCode] = useState("");
  const [elementUniqueIds, setElementUniqueIds] = useState({});
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedHeroImageId, setSelectedHeroImageId] = useState(null);
  const lastClickedDivRef = useRef(null);

  useEffect(() => {
    if (geminiResponses && Object.keys(geminiResponses).length > 0) {
      setText((prevText) => ({
        ...prevText,
        heroHeaderText: geminiResponses.heroHeader,
        images: geminiResponses.imageUrls || [],
      }));
      setShuffled(true);
    }
  }, [geminiResponses]);

  useEffect(() => {
    if (
      geminiResponses &&
      Object.keys(geminiResponses).length > 0 &&
      !shuffled &&
      webContentObject.randomButtonText
    ) {
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
        description: webContentObject.heroDescription,
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

    console.log("HeroHeader: ", text.heroHeaderText);
  }, [geminiResponses, shuffled, text]);

  const getStyle = (id, uniqueId) => {
    const fullId = `${id}-${uniqueId}`;
    if (divStyles[fullId] && Object.keys(divStyles[fullId]).length > 0) {
      return divStyles[fullId];
    }
    return { background: defaultBackgroundColor };
  };

  const getElementStyle = (className, uniqueId) => {
    const fullClassName = `${className}-${uniqueId}`;
    return elementStyles[fullClassName] || {};
  };

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

  const handleGenerateDesigns = () => {
    const randomNavIndex = Math.floor(
      Math.random() *
        navComponents({
          text,
          location,
          getStyle,
          getElementStyle,
          isEdited,
          elementContent,
        }).length
    );
    const randomHeroIndex = Math.floor(
      Math.random() *
        heroComponents({
          text,
          buttonIndex,
          location,
          getStyle,
          getElementStyle,
          handleDivClick,
          backGroundStyle,
          clickedText,
          isEdited,
          elementContent,
          selectedImage,
          setSelectedImage,
          handleImageClick,
          handleGalleryImageClick,
        }).length
    );
    const randomButtonsIndex = Math.floor(
      Math.random() *
        WebButtonsArray({
          text,
          buttonIndex,
          location,
          getStyle,
          getElementStyle,
          isEdited,
          elementContent,
        }).length
    );
    const randomfeaturesWithCardIndex = Math.floor(
      Math.random() *
        featuresWithCardsComponent({
          text,
          location,
          getStyle,
          getElementStyle,
          handleDivClick,
          isEdited,
          elementContent,
          selectedImage,
          setSelectedImage,
          handleImageClick,
          handleGalleryImageClick,
        }).length
    );
    const randomfeaturesIndex = Math.floor(
      Math.random() *
        featuresComponents({
          text,
          location,
          getStyle,
          getElementStyle,
          isEdited,
          elementContent,
        }).length
    );
    const randomTestimonialIndex = Math.floor(
      Math.random() *
        testimonialComponent({
          text,
          location,
          getStyle,
          getElementStyle,
          isEdited,
          elementContent,
        }).length
    );
    const randomFaqIndex = Math.floor(
      Math.random() *
        faqComponent({
          text,
          location,
          getStyle,
          getElementStyle,
          isEdited,
          elementContent,
        }).length
    );
    const randomTeamIndex = Math.floor(
      Math.random() *
        teamComponent({
          text,
          location,
          getStyle,
          getElementStyle,
          isEdited,
          elementContent,
        }).length
    );
    const randomContactIndex = Math.floor(
      Math.random() *
        contactComponent({
          text,
          location,
          getStyle,
          getElementStyle,
          isEdited,
          elementContent,
        }).length
    );
    const randomFooterIndex = Math.floor(
      Math.random() *
        footerComponent({
          text,
          location,
          getStyle,
          getElementStyle,
          isEdited,
          elementContent,
        }).length
    );

    const newGeneratedElements = [
      { type: "header", index: randomNavIndex },
      { type: "hero", index: randomHeroIndex },
      { type: "featuresWithCards", index: randomfeaturesWithCardIndex },
      { type: "classicFeatures", index: randomfeaturesIndex },
      { type: "testimonial", index: randomTestimonialIndex },
      { type: "faq", index: randomFaqIndex },
      { type: "team", index: randomTeamIndex },
      { type: "footer", index: randomFooterIndex },
    ];

    setNavIndex(randomNavIndex);
    // setHeroIndex(randomHeroIndex);
    setButtonIndex(randomButtonsIndex);
    // setFeaturesWithCardIndex(randomfeaturesWithCardIndex);
    // setFeaturesIndex(randomfeaturesIndex);
    // setTestimonialIndex(randomTestimonialIndex);
    // setFaqIndex(randomFaqIndex);
    // setTeamIndex(randomTeamIndex);
    // setContactIndex(randomContactIndex);
    setFooterIndex(randomFooterIndex);
    setGeneratedElements(newGeneratedElements);
    setElements(newGeneratedElements);
    setShowDesignModal(true);
  };

  const handleUserData = async () => {
    try {
      const accessToken = Cookies.get("accessToken"); // Get access token from cookie
      const response = await axiosInstance.get("/auth/user-data", {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Send token in headers
        },
      });
      setUserData(response.data);
    } catch (error) {
      console.error(error.response ? error.response.data.error : error.message);
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
      console.log(response.data.heroHeader);
      handleGenerateDesigns();
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
    setDivStyles({});
    setElementStyles({});
  };

  const updateElementStyle = (className, property, value) => {
    if (selectedElement) {
      setElementStyles((prevStyles) => ({
        ...prevStyles,
        [className]: {
          ...prevStyles[className],
          [property]: value,
        },
      }));
    }
  };

  const handleTextClick = (event) => {
    const elementId = event.target.id;
    setClickedText(event.target.innerText);
    setSelectedElement(event.target);
    setIsEdited((prev) => ({ ...prev, [elementId]: true }));
    setElementContent((prev) => ({
      ...prev,
      [elementId]: event.target.innerHTML,
    }));
  };

  const handleTextareaChange = (event) => {
    const newText = event.target.value;
    setClickedText(newText);

    if (selectedElement) {
      const elementId = selectedElement.id;

      // Check if the element uses dangerouslySetInnerHTML
      const usesDangerouslySetInnerHTML =
        selectedElement.getAttribute("data-uses-dangerously-set-inner-html") ===
        "true";

      const formattedText = usesDangerouslySetInnerHTML
        ? newText.split("\n").join("<br/>")
        : newText;

      // Update the state instead of directly modifying the DOM
      setElementContent((prev) => ({
        ...prev,
        [elementId]: formattedText,
      }));
    }
  };

  const handleColorClick = (color) => {
    if (selectedElement) {
      updateElementStyle(
        selectedElement.className.split(" ")[0],
        "color",
        color
      );
    }
  };

  const handleFontSizeClick = (fontSize) => {
    if (selectedElement) {
      const className = selectedElement.className.split(" ")[0];
      updateElementStyle(className, "fontSize", fontSize);
      updateElementStyle(className, "wordWrap", "break-word");
      updateElementStyle(className, "lineHeight", "1.2");
    }
  };

  const handleFontWeightClick = (fontWeight) => {
    if (selectedElement) {
      updateElementStyle(
        selectedElement.className.split(" ")[0],
        "fontWeight",
        fontWeight
      );
    }
  };

  const handleFontStyleClick = (fontStyle) => {
    if (selectedElement) {
      updateElementStyle(
        selectedElement.className.split(" ")[0],
        "fontStyle",
        fontStyle
      );
    }
  };

  const handleFontFamilyClick = (fontFamily) => {
    if (selectedElement) {
      updateElementStyle(
        selectedElement.className.split(" ")[0],
        "fontFamily",
        fontFamily
      );
    }
  };

  const handleTextAlignmentClick = (textAlign) => {
    if (selectedElement) {
      updateElementStyle(
        selectedElement.className.split(" ")[0],
        "textAlign",
        textAlign
      );
    }
  };

  const handleDivClick = (event) => {
    lastClickedDivRef.current = event.currentTarget;
    setSelectedDiv(event.currentTarget);
  };

  const handleBGColorClick = (color) => {
    if (selectedDiv) {
      setDivStyles((prevStyles) => ({
        ...prevStyles,
        [selectedDiv.id]: { ...prevStyles[selectedDiv.id], background: color },
      }));
    }
  };

  const handleImageClick = (imageSrc, imageId) => {
    setSelectedImage(imageSrc);
    setSelectedHeroImageId(imageId);
  };

  const handleGalleryImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    // Update the hero image
    if (selectedHeroImageId) {
      setElementContent((prevContent) => ({
        ...prevContent,
        [selectedHeroImageId]: imageSrc,
      }));
    }
  };

  useEffect(() => {
    handleBGColorClick(backGroundStyle);
  }, [backGroundStyle]);

  const addElement = (componentType, index) => {
    const newUniqueId = uuidv4();
    setElements((prevElements) => {
      if (componentType === "footer") {
        return prevElements.map((el) =>
          el.type === "footer" ? { ...el, index } : el
        );
      }

      setElementUniqueIds((prev) => ({ ...prev, [newUniqueId]: true }));

      const footerIndex = prevElements.findIndex((el) => el.type === "footer");
      const newElement = {
        type: componentType,
        index: index,
        key: Date.now(),
        uniqueId: newUniqueId,
      };

      if (footerIndex === -1) {
        return [...prevElements, newElement];
      } else {
        const newElements = [...prevElements];
        newElements.splice(footerIndex, 0, newElement);
        return newElements;
      }
    });

    setTimeout(() => {
      if (
        newElementRef.current &&
        elementsContainerRef.current &&
        componentType !== "footer" &&
        componentType !== "header"
      ) {
        const container = elementsContainerRef.current;
        const element = newElementRef.current;
        const elementTop = element.offsetTop;

        // Scroll to the exact top of the new element
        container.scrollTo({
          top: showDesignModal === false ? elementTop : elementTop - 700,
          behavior: "smooth",
        });
      }
    }, 0);
  };

  return (
    <DashContext.Provider
      value={{
        closeSideNav,
        showDesignModal,
        closeAINav,
        userData,
        geminiResponses,
        userInput,
        selectedIdea,
        loading,
        testDesignModal,
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
        isMobile,
        displayEditModal,
        changeSectionHeaderText,
        isPattern,
        clickedIndex,
        buttons,
        currentSection,
        heroBackGroundStyle,
        cardFeatureBackGroundStyle,
        clickedText,
        selectedElement,
        setCloseSideNav,
        setShowDesignModal,
        setCloseAINav,
        handleUserData,
        setGeminiResponses,
        handleGeminiResponses,
        handleGenerateDesigns,
        setUserInput,
        setSelectedIdea,
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
        setTestDesignModal,
        setText,
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
        setDisplayEditModal,
        setChangeSectionHeaderText,
        setIsPattern,
        setClickedIndex,
        setCurrentSection,
        setHeroBackGroundStyle,
        setcardFeatureBackGroundStyle,
        setClickedText,
        setSelectedElement,
        setSelectedDiv,
        backGroundStyle,
        setBackGroundStyle,
        handleDivClick,
        handleTextClick,
        handleTextareaChange,
        handleColorClick,
        handleFontSizeClick,
        handleFontWeightClick,
        handleFontStyleClick,
        handleFontFamilyClick,
        handleTextAlignmentClick,
        sectionModal,
        setSectionModal,
        divStyles,
        defaultBackgroundColor,
        elementStyles,
        elements,
        addElement,
        getStyle,
        getElementStyle,
        generatedElements,
        isContent,
        setIsContent,
        activeSection,
        setActiveSection,
        newElementRef,
        elementsContainerRef,
        isEdited,
        displayCode,
        setDisplayCode,
        elementUniqueIds,
        lastClickedDivRef,
        setElements,
        setIsEdited,
        elementContent,
        setElementContent,
        setElementStyles,
        selectedImage,
        setSelectedImage,
        handleImageClick,
        handleGalleryImageClick,
      }}
    >
      {children}
    </DashContext.Provider>
  );
};
