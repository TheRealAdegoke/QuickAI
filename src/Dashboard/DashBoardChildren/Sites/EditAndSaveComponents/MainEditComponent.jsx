import React, { useContext, useState } from "react";
import { EditContext } from "./EditAndSaveContext/EditAndContext";
import { Button } from "../EditAndSaveDesignModal";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const MainEditComponent = () => {
  const {
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
    moveButton,
    changeNavSectionIndex,
    changeHeroSectionIndex,
  } = useContext(EditContext);
  return (
    <>
      <div>
        <h1 className="text-[rgba(255,255,255,0.8)] text-sm font-medium border-[rgba(255,255,255,0.5)] border-b-[1px] px-2 py-2">
          Edit your landing page from our gallery of designs.
        </h1>

        <DndProvider backend={HTML5Backend}>
          {buttons.map((id, index) => (
            <Button
              key={id}
              id={id}
              index={index}
              moveButton={moveButton}
              setDisplayEditModal={setDisplayEditModal}
              setChangeSection={setChangeSection}
              setChangeSectionHeaderText={setChangeSectionHeaderText}
              setChangeNavSectionIndex={setChangeNavSectionIndex}
              setChangeHeroSectionIndex={setChangeHeroSectionIndex}
              setChangeFeatureWithCardSectionIndex={
                setChangeFeatureWithCardSectionIndex
              }
              setChangeFeatureSectionIndex={setChangeFeatureSectionIndex}
              setChangeFAQSectionIndex={setChangeFAQSectionIndex}
              setChangeTeamSectionIndex={setChangeTeamSectionIndex}
              setChangeTestimonialSectionIndex={
                setChangeTestimonialSectionIndex
              }
              setChangeContactSectionIndex={setChangeContactSectionIndex}
              setChangeFooterSectionIndex={setChangeFooterSectionIndex}
              setIsPattern={setIsPattern}
              handleScroll={handleScroll}
              changeNavSectionIndex={changeNavSectionIndex}
              changeHeroSectionIndex={changeHeroSectionIndex}
              buttons={buttons}
            />
          ))}
        </DndProvider>
      </div>
    </>
  );
};

export default MainEditComponent;
