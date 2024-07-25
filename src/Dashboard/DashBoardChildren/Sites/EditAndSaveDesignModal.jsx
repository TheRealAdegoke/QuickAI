import React, { useContext, useEffect, useRef, useState } from "react";
import { MdOutlineWeb } from "react-icons/md";
import { MdFolder } from "react-icons/md";
import ElementArray from "../../AI-Designed-Component/ElementArray";
import { DashContext } from "../../DashboardChecker/DashboardContext";

const EditAndSaveDesignModal = () => {
  const {
    buttons,
    setIsPattern,
    setDisplayEditModal,
    setCurrentSection,
    setChangeSectionHeaderText,
  } = useContext(DashContext);
  const { elements } = ElementArray();

  const handleElementClick = (idx) => {
    setDisplayEditModal(true);
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
  setChangeSectionHeaderText,
  setIsPattern,
  buttons,
  setCurrentSection,
  setColor1,
  setColor2,
}) => {
  const ref = useRef(null);

  const handleClick = (index) => {
    setIsPattern(true);
    setDisplayEditModal(true);
    const buttonType = buttons[index].split("-")[0];
    setChangeSectionHeaderText(buttonType);
    setCurrentSection(buttonType);
    switch (buttonType) {
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
