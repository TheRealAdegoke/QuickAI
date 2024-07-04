import React, { useContext, useEffect, useRef, useState } from "react";
import { DashContext } from "../../DashboardChecker/DashboardContext";
import { EditContext } from "./EditAndSaveComponents/EditAndSaveContext/EditAndContext";
import { HeaderImages } from "./EditAndSaveComponents/HeaderEditComponent";
import { HeroImages } from "./EditAndSaveComponents/HeroEditComponent";
import { CardFeaturesImages } from "./EditAndSaveComponents/CardFeatureEditComponent";
import { ClassicalFeaturesImages } from "./EditAndSaveComponents/ClassicalFeatureEditComponent";
import { TestimonialImages } from "./EditAndSaveComponents/TestimonialEditComponent";
import { FAQImages } from "./EditAndSaveComponents/FAQEditComponent";
import { TeamImages } from "./EditAndSaveComponents/TeamEditComponent";


const EditAndSaveDesignModal = ({ handleTextClick, elementRefs }) => {
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

  const {
    changeNavSectionIndex,
    changeHeroSectionIndex,
    changeFeatureWithCardSectionIndex,
    changeFeatureSectionIndex,
    changeFAQSectionIndex,
    changeTeamSectionIndex,
    changeTestimonialSectionIndex,
    changeContactSectionIndex,
    changeFooterSectionIndex,
    setDisplayEditModal,
    setChangeSection,
    setChangeSectionHeaderText,
    setChangeNavSectionIndex,
    setChangeHeroSectionIndex,
    setChangeFeatureWithCardSectionIndex,
    setChangeFeatureSectionIndex,
    setChangeFAQSectionIndex,
    setChangeTeamSectionIndex,
    setChangeTestimonialSectionIndex,
    setChangeContactSectionIndex,
    setChangeFooterSectionIndex,
    setIsPattern,
  } = useContext(EditContext);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
    featuresWithCardIndex !== undefined &&
    changeFeatureWithCardSectionIndex !== undefined
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
    testimonialIndex !== undefined &&
    changeTestimonialSectionIndex !== undefined
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
  // ! Don't forget the changeContactSectionIndex in the dashContext file
  // const contactElement = contactComponent({ text, isMobile, handleTextClick })[
  //   contactIndex !== undefined && changeContactSectionIndex !== undefined
  //     ? changeContactSectionIndex
  //     : contactIndex
  // ];
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

  const handleElementClick = (idx) => {
    setDisplayEditModal(true);
    switch (idx) {
      case 0:
        setChangeSectionHeaderText("Header");
        setIsPattern(false);
        setChangeSection(
          <HeaderImages setChangeSectionIndex={setChangeNavSectionIndex} />
        );
        break;
      case 1:
        setChangeSectionHeaderText("Hero");
        setIsPattern(false);
        setChangeSection(
          <HeroImages setChangeSectionIndex={setChangeHeroSectionIndex} />
        );
        break;
      case 2:
        setChangeSectionHeaderText("Card Feature");
        setIsPattern(false);
        setChangeSection(
          <CardFeaturesImages
            setChangeSectionIndex={setChangeFeatureWithCardSectionIndex}
          />
        );
        break;
      case 3:
        setChangeSectionHeaderText("Classic Feature");
        setIsPattern(false);
        setChangeSection(
          <ClassicalFeaturesImages
            setChangeSectionIndex={setChangeFeatureSectionIndex}
          />
        );
        break;
      case 4:
        setChangeSectionHeaderText("Testimonial");
        setIsPattern(false);
        setChangeSection(
          <TestimonialImages
            setChangeSectionIndex={setChangeTestimonialSectionIndex}
          />
        );
        break;
      case 5:
        setChangeSectionHeaderText("FAQ");
        setIsPattern(false);
        setChangeSection(
          <FAQImages setChangeSectionIndex={setChangeFAQSectionIndex} />
        );
        break;
      case 6:
        setChangeSectionHeaderText("Team");
        setIsPattern(false);
        setChangeSection(
          <TeamImages setChangeSectionIndex={setChangeTeamSectionIndex} />
        );
        break;
      default:
        setChangeSectionHeaderText("");
        setIsPattern(true);
        break;
    }
  };

  return (
    <>
      <div className="">
        {elements.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => (elementRefs.current[idx] = el)}
            className={`${
              hoveredIndex === idx
                ? "border-dotted border-[2px] border-y-indigo-800 cursor-pointer"
                : ""}`
            }
            onClick={() => handleElementClick(idx)}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {item.element}
          </div>
        ))}
      </div>
    </>
  );
};

export default EditAndSaveDesignModal;
