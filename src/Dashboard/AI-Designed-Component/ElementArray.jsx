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
    text,
    buttonIndex,
    isMobile,
    isFocused,
    setIsFocused,
    backgroundStyle,
    clickedIndex,
    setClickedIndex,
    handleFocus,
    handleBlur,
  } = useContext(DashContext);
  const location = useLocation()

  const navElement = navComponents({
    text,
    buttonIndex,
    isMobile,
    backgroundStyle,
    isFocused,
    setIsFocused,
    handleFocus,
    handleBlur,
    location
  })[navIndex];
  const heroElement = heroComponents({
    text,
    buttonIndex,
    isMobile,
    backgroundStyle,
    isFocused,
    setIsFocused,
    handleFocus,
    handleBlur,
    location
  })[heroIndex];
  const featuresWithCardElement = featuresWithCardsComponent({
    text,
    buttonIndex,
    isMobile,
    backgroundStyle,
    isFocused,
    setIsFocused,
    handleFocus,
    handleBlur,
    location
  })[featuresWithCardIndex];
  const featuresElement = featuresComponents({
    text,
    buttonIndex,
    isMobile,
    backgroundStyle,
    isFocused,
    setIsFocused,
    handleFocus,
    handleBlur,
    location
  })[featuresIndex];
  const testimonialElement = testimonialComponent({
    text,
    buttonIndex,
    isMobile,
    backgroundStyle,
    isFocused,
    setIsFocused,
    handleFocus,
    handleBlur,
    location
  })[testimonialIndex];
  const faqElement = faqComponent({
    text,
    buttonIndex,
    isMobile,
    backgroundStyle,
    isFocused,
    setIsFocused,
    handleFocus,
    handleBlur,
    location
  })[faqIndex];
  const teamElement = teamComponent({
    text,
    buttonIndex,
    isMobile,
    backgroundStyle,
    isFocused,
    setIsFocused,
    handleFocus,
    handleBlur,
    location
  })[teamIndex];
  const contactElement = contactComponent({
    text,
    buttonIndex,
    isMobile,
    backgroundStyle,
    isFocused,
    setIsFocused,
    handleFocus,
    handleBlur,
    location
  })[contactIndex];
  const footerElement = footerComponent({
    text,
    buttonIndex,
    isMobile,
    backgroundStyle,
    isFocused,
    setIsFocused,
    handleFocus,
    handleBlur,
    location
  })[footerIndex];

  const elements = [
    {
      index: navIndex,
      element: navElement,
    },
    {
      index: heroIndex,
      element: heroElement,
    },
    {
      index: featuresWithCardIndex,
      element: featuresWithCardElement,
    },
    {
      index: featuresIndex,
      element: featuresElement,
    },
    {
      index: testimonialIndex,
      element: testimonialElement,
    },
    { index: faqIndex, element: faqElement },
    { index: teamIndex, element: teamElement },
    { index: footerIndex, element: footerElement },
  ];

  return {
    elements,
    navElement,
    heroElement,
    featuresWithCardElement,
    featuresElement,
    testimonialElement,
    faqElement,
    teamElement,
    contactElement,
    footerElement,
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
