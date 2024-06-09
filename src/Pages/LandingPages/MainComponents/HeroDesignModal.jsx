import React, { useContext, useEffect, useRef, useState } from 'react'
import { DashContext } from '../../../Dashboard/DashboardChecker/DashboardContext';

const HeroDesignModal = ({mainRef}) => {
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
  } = useContext(DashContext);
    const [autoScroll, setAutoScroll] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

  const elements = [
    {
      index: navIndex,
      element: navComponents({ text, buttonIndex })[navIndex],
    },
    {
      index: heroIndex,
      element: heroComponents({ text, buttonIndex })[heroIndex],
    },
    {
      index: featuresWithCardIndex,
      element: featuresWithCardsComponent({ text })[featuresWithCardIndex],
    },
    {
      index: featuresIndex,
      element: featuresComponents({ text })[featuresIndex],
    },
    {
      index: testimonialIndex,
      element: testimonialComponent({ text })[testimonialIndex],
    },
    { index: faqIndex, element: faqComponent({ text })[faqIndex] },
    { index: teamIndex, element: teamComponent({ text })[teamIndex] },
    { index: footerIndex, element: footerComponent({ text })[footerIndex] },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 1500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    if (mainRef.current && autoScroll) {
      mainRef.current.scrollTop = mainRef.current.scrollHeight;
    }
  }, [currentIndex, autoScroll]);

  useEffect(() => {
    if (currentIndex >= elements.length - 1) {
      setAutoScroll(false);
    }
  }, [currentIndex]);

  return (
    <>
      <section className="">
        {elements.slice(0, currentIndex + 1).map(
          (item, idx) =>
            item.index !== undefined && (
              <div key={idx} className="animate-scaleIn">
                {item.element}
              </div>
            )
        )}
      </section>
    </>
  );
}

export default HeroDesignModal