import React, { useContext } from "react";
import { DashContext } from "../DashboardChecker/DashboardContext";
import { useLocation } from "react-router-dom";

const ElementArray = () => {
  const {
    heroIndex,
    navIndex,
    featuresWithCardIndex,
    featuresIndex,
    testimonialIndex,
    faqIndex,
    teamIndex,
    contactIndex,
    footerIndex,
    navComponents,
    heroComponents,
    featuresWithCardsComponent,
    featuresComponents,
    testimonialComponent,
    faqComponent,
    teamComponent,
    contactComponent,
    footerComponent,
    WebButtonsArray,
    text,
    buttonIndex,
    isMobile,
    backgroundStyle,
    clickedIndex,
    setClickedIndex,
    handleFocus,
    handleBlur,
    handleDivClick,
    handleTextClick,
    handleTextareaChange,
    handleColorClick,
    handleFontSizeClick,
    handleFontWeightClick,
    handleFontStyleClick,
    handleFontFamilyClick,
    handleTextAlignmentClick,
    elements,
    getStyle,
    getElementStyle,
    updateText,
    selectedElement,
    clickedText,
    texts,
    isEdited,
  } = useContext(DashContext);
  const location = useLocation();

  const componentMap = {
    header: navComponents,
    hero: heroComponents,
    featuresWithCards: featuresWithCardsComponent,
    classicFeatures: featuresComponents,
    testimonial: testimonialComponent,
    faq: faqComponent,
    team: teamComponent,
    footer: footerComponent
  };

  const renderElement = ({ type, index, uniqueId }) => ({
    element: componentMap[type]({
      text,
      buttonIndex,
      isMobile,
      backgroundStyle,
      handleFocus,
      handleBlur,
      location,
      handleDivClick,
      handleTextClick,
      handleTextareaChange,
      handleColorClick,
      handleFontSizeClick,
      handleFontWeightClick,
      handleFontStyleClick,
      handleFontFamilyClick,
      handleTextAlignmentClick,
      getStyle,
      getElementStyle,
      index,
      updateText,
      selectedElement,
      clickedText,
      texts,
      isEdited,
      uniqueId,
    })[index],
  });

  const renderedElements = elements
    .filter(el => el.type !== "header") 
    .map(renderElement);

  return {
    elements: [
      {
        element: componentMap.header({
          index: navIndex,
          text,
          buttonIndex,
          isMobile,
          backgroundStyle,
          handleFocus,
          handleBlur,
          location,
          handleDivClick,
          handleTextClick,
          handleTextareaChange,
          handleColorClick,
          handleFontSizeClick,
          handleFontWeightClick,
          handleFontStyleClick,
          handleFontFamilyClick,
          handleTextAlignmentClick,
          getStyle,
          getElementStyle,
        })[navIndex],
      },
      ...renderedElements,
    ],
    heroIndex,
    navIndex,
    featuresWithCardIndex,
    featuresIndex,
    testimonialIndex,
    faqIndex,
    teamIndex,
    contactIndex,
    footerIndex,
    clickedIndex,
    setClickedIndex,
  };
};

export default ElementArray;
