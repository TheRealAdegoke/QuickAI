import React, { useContext, useEffect, useRef, useState } from "react";
import { DashContext } from "../../DashboardChecker/DashboardContext";
import { MdOutlineWeb } from "react-icons/md";
import { MdFolder } from "react-icons/md";
import ElementArray from "../../AI-Designed-Component/ElementArray";

const EditAndSaveDesignModal = () => {
  const {
    elements,
    clickedIndex,
    setClickedIndex,
  } = ElementArray();

  useEffect(() => {
    let timer;
    if (clickedIndex !== null) {
      timer = setTimeout(() => {
        setClickedIndex(null);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [clickedIndex]);

  return (
    <div className="">
      {elements.map((item, idx) => (
        <div key={idx}>{item.element}</div>
      ))}
    </div>
  );
};

export default EditAndSaveDesignModal;

export const Button = ({
  id,
  index,
  setDisplayEditModal,
  setChangeSectionHeaderText,
  setIsPattern,
  buttons,
  setCurrentSection,
}) => {
  const ref = useRef(null);

  const handleClick = (index) => {
    setIsPattern(true);
    setDisplayEditModal(true);
    const buttonType = buttons[index].split("-")[0];
    setChangeSectionHeaderText(buttonType);
    setCurrentSection(buttonType);
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
        <div className="bg-[rgb(9,11,14)] p-1 rounded-[5px]">
          <MdFolder />
        </div>
      </div>
    </div>
  );
};
