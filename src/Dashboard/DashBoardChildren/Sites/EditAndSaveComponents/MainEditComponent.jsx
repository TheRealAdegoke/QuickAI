import React, { useContext, useState } from "react";
import { Button } from "../EditAndSaveDesignModal";
import { DashContext } from "../../../DashboardChecker/DashboardContext";

const MainEditComponent = () => {
  const {
    setDisplayEditModal,
    setChangeSection,
    setChangeSectionHeaderText,
    setIsPattern,
    buttons,
    setClickedIndex,
    setColor1,
    setColor2,
    setSectionModal,
    setActiveSection,
    setCurrentSection,
    setHeroIndex,
  } = useContext(DashContext);

  return (
    <>
      <div>
        <div className="text-[rgba(255,255,255,0.8)] px-2 py-2">
          <h1 className="layout-text text-2xl mb-1">Select a layout</h1>
          <p className="text-xs">
            Edit your landing page from our gallery of designs.
          </p>
        </div>

        <div className="h-[70v] overflow-y-scroll">
          {buttons.map((id, index) => (
            <Button
              key={`${id}-${index}`}
              id={id}
              index={index}
              setDisplayEditModal={setDisplayEditModal}
              setChangeSection={setChangeSection}
              setChangeSectionHeaderText={setChangeSectionHeaderText}
              setIsPattern={setIsPattern}
              buttons={buttons}
              setClickedIndex={setClickedIndex}
              setColor1={setColor1}
              setColor2={setColor2}
              setSectionModal={setSectionModal}
              setActiveSection={setActiveSection}
              setCurrentSection={setCurrentSection}
            />
          ))}
        </div>

        <button
          className="bg-white py-1 px-3 rounded w-[200px] mx-auto block font-medium"
          onClick={() => {
            setSectionModal(true);
          }}
        >
          Add Section
        </button>
      </div>
    </>
  );
};

export default MainEditComponent;
