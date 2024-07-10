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
    duplicateButton,
    deleteButton,
  } = useContext(EditContext);
  const [openMenuId, setOpenMenuId] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

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
              buttons={buttons}
              openMenuId={openMenuId}
              toggleMenu={toggleMenu}
              duplicateButton={duplicateButton}
              deleteButton={deleteButton}
            />
          ))}
        </DndProvider>
      </div>
    </>
  );
};

export default MainEditComponent;
