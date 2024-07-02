import React, { useContext, useEffect, useRef, useState } from 'react'
import { DashContext } from '../../DashboardChecker/DashboardContext';

const EditAndSaveDesignModal = ({ handleTextClick }) => {
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
  } = useContext(DashContext);

  const heroElement = heroComponents({
    text,
    buttonIndex,
    isMobile,
    handleTextClick,
  })[heroIndex];
  const navElement = navComponents({ text, buttonIndex, isMobile, handleTextClick, })[navIndex];
  const featuresWithCardElement = featuresWithCardsComponent({
    text,
    isMobile, handleTextClick,
  })[featuresWithCardIndex];
  const featuresElement = featuresComponents({ text, isMobile, handleTextClick, })[featuresIndex];
  const testimonialElement = testimonialComponent({ text, isMobile, handleTextClick, })[
    testimonialIndex
  ];
  const faqElement = faqComponent({ text, isMobile, handleTextClick, })[faqIndex];
  const teamElement = teamComponent({ text, isMobile, handleTextClick, })[teamIndex];
  const contactElement = contactComponent({ text, isMobile, handleTextClick, })[contactIndex];
  const footerElement = footerComponent({ text, isMobile, handleTextClick, })[footerIndex];

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
        {elements.map(
          (item, idx) =>
            item.index !== undefined && (
              <div key={idx}>
                {item.element}
              </div>
            )
        )}
      </div>
    </>
  );
};

export default EditAndSaveDesignModal