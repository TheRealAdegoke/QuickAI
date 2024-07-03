import React, { useContext, useEffect, useRef, useState } from "react";
import { DashContext } from "../../DashboardChecker/DashboardContext";

const EditAndSaveDesignModal = ({
  handleTextClick,
  changeNavSectionIndex,
  changeHeroSectionIndex,
  changeFeatureWithCardSectionIndex,
  changeFeatureSectionIndex,
  changeTestimonialSectionIndex,
  changeTeamSectionIndex,
  changeFAQSectionIndex,
  changeFooterSectionIndex,
}) => {
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
    changeContactSectionIndex,
    footerComponent,
    text,
    buttonIndex,
    isMobile,
  } = useContext(DashContext);

  const navElement = navComponents({
    text,
    buttonIndex,
    isMobile,
    handleTextClick,
  })[
    navIndex !== undefined && changeNavSectionIndex !== undefined
      ? changeNavSectionIndex
      : navIndex
  ];
  const heroElement = heroComponents({
    text,
    buttonIndex,
    isMobile,
    handleTextClick,
  })[
    heroIndex !== undefined && changeHeroSectionIndex !== undefined
      ? changeHeroSectionIndex
      : heroIndex
  ];
  const featuresWithCardElement = featuresWithCardsComponent({
    text,
    isMobile,
    handleTextClick,
  })[
    featuresWithCardIndex !== undefined && changeFeatureWithCardSectionIndex !== undefined
      ? changeFeatureWithCardSectionIndex
      : featuresWithCardIndex
  ];
  const featuresElement = featuresComponents({
    text,
    isMobile,
    handleTextClick,
  })[
    featuresIndex !== undefined && changeFeatureSectionIndex !== undefined
      ? changeFeatureSectionIndex
      : featuresIndex
  ];
  const testimonialElement = testimonialComponent({
    text,
    isMobile,
    handleTextClick,
  })[
    testimonialIndex !== undefined && changeTestimonialSectionIndex !== undefined
      ? changeTestimonialSectionIndex
      : testimonialIndex
  ];
  const faqElement = faqComponent({ text, isMobile, handleTextClick })[
    faqIndex !== undefined && changeFAQSectionIndex !== undefined
      ? changeFAQSectionIndex
      : faqIndex
  ];
  const teamElement = teamComponent({ text, isMobile, handleTextClick })[
    teamIndex !== undefined && changeTeamSectionIndex !== undefined
      ? changeTeamSectionIndex
      : teamIndex
  ];
  const contactElement = contactComponent({ text, isMobile, handleTextClick })[
    contactIndex !== undefined && changeContactSectionIndex !== undefined
      ? changeContactSectionIndex
      : contactIndex
  ];
  const footerElement = footerComponent({ text, isMobile, handleTextClick })[
    footerIndex !== undefined && changeFooterSectionIndex !== undefined
      ? changeFooterSectionIndex
      : footerIndex
  ];

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

  return (
    <>
      <div className="">
        {elements.map((item, idx) => (
          <div key={idx}>{item.element}</div>
        ))}
      </div>
    </>
  );
};

export default EditAndSaveDesignModal;
