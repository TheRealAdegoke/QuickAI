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
import { useDrag, useDrop } from "react-dnd";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineWeb } from "react-icons/md";

const EditAndSaveDesignModal = ({ elementRefs }) => {
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
    handleTextClick,
    handleGenerateNav,
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
    changeSectionHeaderText,
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
    clickedIndex,
    setClickedIndex,
    elements,
    setElements,
    handleScroll,
    buttons,
  } = useContext(EditContext);

  useEffect(() => {
    let timer;
    if (clickedIndex !== null) {
      timer = setTimeout(() => {
        setClickedIndex(null);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [clickedIndex]);

  useEffect(() => {
    const updatedElements = buttons.map((buttonText, idx) => {
      switch (buttonText) {
        case "Header":
          return {
            index: idx,
            element: navComponents({
              text,
              buttonIndex,
              isMobile,
              handleTextClick,
            })[
              navIndex !== undefined && changeNavSectionIndex !== undefined
                ? changeNavSectionIndex
                : navIndex
            ],
          };
        case "Hero":
          return {
            index: idx,
            element: heroComponents({
              text,
              buttonIndex,
              isMobile,
              handleTextClick,
            })[
              heroIndex !== undefined && changeHeroSectionIndex !== undefined
                ? changeHeroSectionIndex
                : heroIndex
            ],
          };
        case "Card Feature":
          return {
            index: idx,
            element: featuresWithCardsComponent({
              text,
              isMobile,
              handleTextClick,
            })[
              featuresWithCardIndex !== undefined &&
              changeFeatureWithCardSectionIndex !== undefined
                ? changeFeatureWithCardSectionIndex
                : featuresWithCardIndex
            ],
          };
        case "Classical Feature":
          return {
            index: idx,
            element: featuresComponents({
              text,
              isMobile,
              handleTextClick,
            })[
              featuresIndex !== undefined &&
              changeFeatureSectionIndex !== undefined
                ? changeFeatureSectionIndex
                : featuresIndex
            ],
          };
        case "Testimonial":
          return {
            index: idx,
            element: testimonialComponent({
              text,
              isMobile,
              handleTextClick,
            })[
              testimonialIndex !== undefined &&
              changeTestimonialSectionIndex !== undefined
                ? changeTestimonialSectionIndex
                : testimonialIndex
            ],
          };
        case "FAQ":
          return {
            index: idx,
            element: faqComponent({
              text,
              isMobile,
              handleTextClick,
            })[
              faqIndex !== undefined && changeFAQSectionIndex !== undefined
                ? changeFAQSectionIndex
                : faqIndex
            ],
          };
        case "Team":
          return {
            index: idx,
            element: teamComponent({
              text,
              isMobile,
              handleTextClick,
            })[
              teamIndex !== undefined && changeTeamSectionIndex !== undefined
                ? changeTeamSectionIndex
                : teamIndex
            ],
          };
        case "Footer":
          return {
            index: idx,
            element: footerComponent({
              text,
              isMobile,
              handleTextClick,
            })[
              footerIndex !== undefined &&
              changeFooterSectionIndex !== undefined
                ? changeFooterSectionIndex
                : footerIndex
            ],
          };
        default:
          return null;
      }
    });

    setElements(updatedElements);
  }, [
    buttons,
    changeNavSectionIndex,
    changeHeroSectionIndex,
    changeFeatureWithCardSectionIndex,
    changeFeatureSectionIndex,
    changeFAQSectionIndex,
    changeTeamSectionIndex,
    changeTestimonialSectionIndex,
    changeContactSectionIndex,
    changeFooterSectionIndex,
    handleGenerateNav,
  ]);


  const handleElementClick = (idx) => {
    setDisplayEditModal(true);
    handleScroll(idx);

    // Use the updated button text for the clicked index
    const buttonText = buttons[idx];

    switch (buttonText) {
      case "Header":
        setChangeSectionHeaderText("Header");
        setIsPattern(false);
        setChangeSection(
          <HeaderImages setChangeSectionIndex={setChangeNavSectionIndex} />
        );
        break;
      case "Hero":
        setChangeSectionHeaderText("Hero");
        setIsPattern(false);
        setChangeSection(
          <HeroImages setChangeSectionIndex={setChangeHeroSectionIndex} />
        );
        break;
      case "Card Feature":
        setChangeSectionHeaderText("Card Feature");
        setIsPattern(false);
        setChangeSection(
          <CardFeaturesImages
            setChangeSectionIndex={setChangeFeatureWithCardSectionIndex}
          />
        );
        break;
      case "Classical Feature":
        setChangeSectionHeaderText("Classical Feature");
        setIsPattern(false);
        setChangeSection(
          <ClassicalFeaturesImages
            setChangeSectionIndex={setChangeFeatureSectionIndex}
          />
        );
        break;
      case "Testimonial":
        setChangeSectionHeaderText("Testimonial");
        setIsPattern(false);
        setChangeSection(
          <TestimonialImages
            setChangeSectionIndex={setChangeTestimonialSectionIndex}
          />
        );
        break;
      case "FAQ":
        setChangeSectionHeaderText("FAQ");
        setIsPattern(false);
        setChangeSection(
          <FAQImages setChangeSectionIndex={setChangeFAQSectionIndex} />
        );
        break;
      case "Team":
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
    <div className="">
      {elements.map((item, idx) => (
        <div
          key={idx}
          ref={(el) => (elementRefs.current[idx] = el)}
          className={`${
            clickedIndex === idx
              ? "border-dotted border-b-[2px] border-t-[1px] border-y-indigo-800"
              : "border-none cursor-pointer"
          }`}
          onClick={() => {
            handleElementClick(idx);
          }}
        >
          {item.element}
        </div>
      ))}
    </div>
  );
};

export default EditAndSaveDesignModal;

export const Button = ({
  id,
  index,
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
  handleScroll,
  buttons,
}) => {
  const { moveButton } = useContext(EditContext);
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "button",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveButton(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [, drag] = useDrag({
    type: "button",
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const handleClick = () => {
    setIsPattern(true);
    setDisplayEditModal(true);
    switch (id) {
      case "Header":
        setChangeSectionHeaderText("Header");
        handleScroll(buttons.indexOf("Header"));
        setChangeSection(
          <HeaderImages setChangeSectionIndex={setChangeNavSectionIndex} />
        );
        break;
      case "Hero":
        setChangeSectionHeaderText("Hero");
        handleScroll(buttons.indexOf("Hero"));
        setChangeSection(
          <HeroImages setChangeSectionIndex={setChangeHeroSectionIndex} />
        );
        break;
      case "Card Feature":
        setChangeSectionHeaderText("Card Feature");
        handleScroll(buttons.indexOf("Card Feature"));
        setChangeSection(
          <CardFeaturesImages
            setChangeSectionIndex={setChangeFeatureWithCardSectionIndex}
          />
        );
        break;
      case "Classical Feature":
        setChangeSectionHeaderText("Classical Feature");
        handleScroll(buttons.indexOf("Classical Feature"));
        setChangeSection(
          <ClassicalFeaturesImages
            setChangeSectionIndex={setChangeFeatureSectionIndex}
          />
        );
        break;
      case "Testimonial":
        setChangeSectionHeaderText("Testimonial");
        handleScroll(buttons.indexOf("Testimonial"));
        setChangeSection(
          <TestimonialImages
            setChangeSectionIndex={setChangeTestimonialSectionIndex}
          />
        );
        break;
      case "FAQ":
        setChangeSectionHeaderText("FAQ");
        handleScroll(buttons.indexOf("FAQ"));
        setChangeSection(
          <FAQImages setChangeSectionIndex={setChangeFAQSectionIndex} />
        );
        break;
      case "Team":
        setChangeSectionHeaderText("Team");
        handleScroll(buttons.indexOf("Team"));
        setChangeSection(
          <TeamImages setChangeSectionIndex={setChangeTeamSectionIndex} />
        );
        break;
      default:
        break;
    }
  };

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={`bg-[rgb(42,42,47)] text-white px-3 py-2 rounded-[5px] flex justify-between items-center cursor-pointer my-3 mx-2`}
    >
      <button className="flex items-center gap-1 w-full">
        <MdOutlineWeb className="text-blue-600" />
        <span className="text-[rgba(255,255,255,0.8)] font-medium">{id}</span>
      </button>
      <div className="bg-[rgb(9,11,14)] p-1 rounded-[5px]">
        <BsThreeDotsVertical />
      </div>
    </div>
  );
};
