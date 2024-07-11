import React, { useContext, useEffect, useRef, useState } from "react";
import { DashContext } from "../../DashboardChecker/DashboardContext";
import { EditContext } from "./EditAndSaveComponents/EditAndSaveContext/EditAndContext";
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
    setDisplayEditModal,
    setChangeSectionHeaderText,
    setIsPattern,
    clickedIndex,
    setClickedIndex,
    elements,
    setElements,
    handleScroll,
    buttons,
    setCurrentSection,
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
      const buttonType = buttonText.split("-")[0];
      switch (buttonType) {
        case "Header":
          return {
            index: idx,
            element: navComponents({
              text,
              buttonIndex,
              isMobile,
              handleTextClick,
            })[navIndex],
          };
        case "Hero":
          return {
            index: idx,
            element: heroComponents({
              text,
              buttonIndex,
              isMobile,
              handleTextClick,
            })[heroIndex],
          };
        case "Card Feature":
          return {
            index: idx,
            element: featuresWithCardsComponent({
              text,
              isMobile,
              handleTextClick,
            })[featuresWithCardIndex],
          };
        case "Classical Feature":
          return {
            index: idx,
            element: featuresComponents({
              text,
              isMobile,
              handleTextClick,
            })[featuresIndex],
          };
        case "Testimonial":
          return {
            index: idx,
            element: testimonialComponent({
              text,
              isMobile,
              handleTextClick,
            })[testimonialIndex],
          };
        case "FAQ":
          return {
            index: idx,
            element: faqComponent({
              text,
              isMobile,
              handleTextClick,
            })[faqIndex],
          };
        case "Team":
          return {
            index: idx,
            element: teamComponent({
              text,
              isMobile,
              handleTextClick,
            })[teamIndex],
          };
        case "Footer":
          return {
            index: idx,
            element: footerComponent({
              text,
              isMobile,
              handleTextClick,
            })[footerIndex],
          };
        default:
          return null;
      }
    });

    setElements(updatedElements);
  }, [handleGenerateNav]);

  const handleElementClick = (idx) => {
    setDisplayEditModal(true);
    handleScroll(idx);
    const buttonType = buttons[idx].split("-")[0];
    setCurrentSection(buttonType);

    switch (buttonType) {
      case "Header":
        setChangeSectionHeaderText("Header");
        setIsPattern(false);
        break;
      case "Hero":
        setChangeSectionHeaderText("Hero");
        setIsPattern(false);
        break;
      case "Card Feature":
        setChangeSectionHeaderText("Card Feature");
        setIsPattern(false);
        break;
      case "Classical Feature":
        setChangeSectionHeaderText("Classical Feature");
        setIsPattern(false);
        break;
      case "Testimonial":
        setChangeSectionHeaderText("Testimonial");
        setIsPattern(false);
        break;
      case "FAQ":
        setChangeSectionHeaderText("FAQ");
        setIsPattern(false);
        break;
      case "Team":
        setChangeSectionHeaderText("Team");
        setIsPattern(false);
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
  setIsPattern,
  handleScroll,
  buttons,
  openMenuId,
  toggleMenu,
  moveButton,
  duplicateButton,
  deleteButton,
  setCurrentSection,
}) => {
  const ref = useRef(null);

  // Conditionally apply drag behavior only if the button text is not "Header"
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
    canDrag: id !== "Header",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // Apply drag if the button is not "Header"
  if (id !== "Header") {
    drag(drop(ref));
  } else {
    drop(ref);
  }

  const handleClick = (index) => {
    setIsPattern(true);
    setDisplayEditModal(true);
    const buttonType = buttons[index].split("-")[0];
    setChangeSectionHeaderText(buttonType);
    setCurrentSection(buttonType);
    handleScroll(index);
    switch (index) {
      case "Header":
        setChangeSectionHeaderText("Header");
        break;
      case "Hero":
        setChangeSectionHeaderText("Hero");
        break;
      case "Card Feature":
        setChangeSectionHeaderText("Card Feature");
        break;
      case "Classical Feature":
        setChangeSectionHeaderText("Classical Feature");
        break;
      case "Testimonial":
        setChangeSectionHeaderText("Testimonial");
        break;
      case "FAQ":
        setChangeSectionHeaderText("FAQ");
        break;
      case "Team":
        setChangeSectionHeaderText("Team");
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative">
      <div
        className={`bg-[rgb(42,42,47)] text-white px-3 py-2 rounded-[5px] flex justify-between items-center cursor-pointer my-3 mx-2`}
      >
        <button
          ref={ref}
          className="flex items-center gap-1 w-full"
          onClick={() => handleClick(index)}
        >
          <MdOutlineWeb className="text-blue-600" />
          <span className="text-[rgba(255,255,255,0.8)] font-medium">{id}</span>
        </button>
        <div
          className="bg-[rgb(9,11,14)] p-1 rounded-[5px]"
          onClick={() => toggleMenu(id)}
        >
          <BsThreeDotsVertical />
        </div>
      </div>

      {openMenuId === id && (
        <div
          className={`bg-[rgb(9,11,14)] border-[1px] rounded-[8px] border-[rgba(255,255,255,0.3)] text-white px-3 py-1 flex flex-col items-start cursor-pointer mx-2 w-[150px] text-sm absolute right-0 top-11 z-50`}
        >
          <button
            className="hover:bg-[rgb(42,42,47)] block w-full py-1 pl-1 rounded-[5px] text-left"
            onClick={() => duplicateButton(index)}
          >
            Duplicate
          </button>
          <button
            className="text-[red] hover:bg-[rgb(42,42,47)] block w-full py-1 pl-1 rounded-[5px] text-left"
            onClick={() => deleteButton(index)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};
