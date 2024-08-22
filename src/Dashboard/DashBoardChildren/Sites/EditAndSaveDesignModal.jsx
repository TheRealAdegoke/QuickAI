import React, { useContext, useEffect, useRef, useState } from "react";
import { MdOutlineWeb } from "react-icons/md";
import { MdFolder } from "react-icons/md";
import ElementArray from "../../AI-Designed-Component/ElementArray";
import { DashContext } from "../../DashboardChecker/DashboardContext";
import reactElementToJSXString from "react-element-to-jsx-string";

const EditAndSaveDesignModal = () => {
  const { setDisplayEditModal, newElementRef, elementsContainerRef } =
    useContext(DashContext);
  const { elements } = ElementArray();

  const handleElementClick = () => {
    setDisplayEditModal(true);
  };

  return (
    <div ref={elementsContainerRef} className="overflow-y-auto h-full">
      {elements.map((item, idx) => (
        <div
          ref={newElementRef}
          key={item.key || idx}
          onClick={() => {
            handleElementClick(idx);

            // Convert the React element to a string
            let elementString = reactElementToJSXString(item.element, {
              showFunctions: false,
            });

            // Replace dangerouslySetInnerHTML with direct content inside any HTML tag
            elementString = elementString.replace(
              /<(\w+)([^>]*)dangerouslySetInnerHTML={{\s*__html:\s*'([^']*)'\s*}}\s*([^>]*)\/?>/g,
              (_, tagName, beforeAttributes, content, afterAttributes) =>
                `<${tagName}${beforeAttributes}${afterAttributes}>${content}</${tagName}>`
            );

            // Remove any unintended self-closing slash on tags
            elementString = elementString.replace(/\/>/g, ">");

            // Ensure that <br> tags are self-closing
            elementString = elementString.replace(/<br>/g, "<br />");

            console.log(elementString);
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
  setSectionModal,
  setCurrentSection,
  setActiveSection,
}) => {
  const ref = useRef(null);

  const handleClick = (id) => {
    console.log("Clicked id:", id);
    setSectionModal(true);
    setCurrentSection(true);

    const newActiveSection = {
      Header: false,
      Hero: false,
      CardFeatures: false,
      ClassicFeatures: false,
      Testimonial: false,
      FAQ: false,
      Team: false,
      [id]: true, // This will set the correct property to true
    };

    console.log("New active section:", newActiveSection);
    setActiveSection(newActiveSection);
  };

  return (
    <div className="relative">
      <div
        className={`bg-[rgb(42,42,47)] text-white px-3 py-2 rounded-[5px] flex justify-between items-center cursor-pointer my-3 mx-2`}
      >
        <button
          ref={ref}
          className="flex items-center gap-1 w-full"
          onClick={() => handleClick(id)}
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
