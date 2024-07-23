import React, { useContext, useState } from "react";
import { Button } from "../EditAndSaveDesignModal";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DashContext } from "../../../DashboardChecker/DashboardContext";

const MainEditComponent = () => {
  const {
    setDisplayEditModal,
    setChangeSection,
    setChangeSectionHeaderText,
    setIsPattern,
    buttons,
    currentSection,
    setCurrentSection,
    setClickedIndex,
  } = useContext(DashContext);


  return (
    <>
      <div>
        <h1 className="text-[rgba(255,255,255,0.8)] text-sm font-medium border-[rgba(255,255,255,0.5)] border-b-[1px] px-2 py-2">
          Edit your landing page from our gallery of designs.
        </h1>

        <DndProvider backend={HTML5Backend}>
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
              currentSection={currentSection}
              setCurrentSection={setCurrentSection}
              setClickedIndex={setClickedIndex}
            />
          ))}
        </DndProvider>
      </div>
    </>
  );
};

export default MainEditComponent;
