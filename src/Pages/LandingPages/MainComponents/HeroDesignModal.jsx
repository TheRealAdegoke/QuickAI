import React, { useContext } from 'react'
import { DashContext } from '../../../Dashboard/DashboardChecker/DashboardContext';

const HeroDesignModal = () => {
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

    const heroElement = heroComponents({ text, buttonIndex })[heroIndex];
    const navElement = navComponents({ text, buttonIndex })[navIndex];
    const featuresWithCardElement = featuresWithCardsComponent({ text })[
      featuresWithCardIndex
    ];
    const featuresElement = featuresComponents({ text })[featuresIndex];
    const testimonialElement = testimonialComponent({ text })[testimonialIndex];
    const faqElement = faqComponent({ text })[faqIndex];
    const teamElement = teamComponent({ text })[teamIndex];
    const contactElement = contactComponent({ text })[contactIndex];
    const footerElement = footerComponent({ text })[footerIndex];
  return (
    <>
      <main className="bg-white">
        {navIndex !== undefined && navElement}
        {heroIndex !== undefined && heroElement}
        {featuresWithCardIndex !== undefined && featuresWithCardElement}
        {featuresIndex !== undefined && featuresElement}
        {testimonialIndex !== undefined && testimonialElement}
        {teamIndex !== undefined && teamElement}
        {faqIndex !== undefined && faqElement}
        {footerIndex !== undefined && footerElement}
      </main>
    </>
  );
}

export default HeroDesignModal