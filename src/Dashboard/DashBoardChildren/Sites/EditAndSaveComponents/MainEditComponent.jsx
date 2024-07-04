import React, { useContext, useState } from "react";
import HeaderEditComponent from "./HeaderEditComponent";
import HeroEditComponent from "./HeroEditComponent";
import ClassicalFeatureEditComponent from "./ClassicalFeatureEditComponent";
import CardFeatureEditComponent from "./CardFeatureEditComponent";
import TeamEditComponent from "./TeamEditComponent";
import TestimonialEditComponent from "./TestimonialEditComponent";
import FAQEditComponent from "./FAQEditComponent";
import { EditContext } from "./EditAndSaveContext/EditAndContext";

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
  } = useContext(EditContext);
  return (
    <>
      <div>
        <h1 className="text-[rgba(255,255,255,0.8)] text-sm font-medium border-[rgba(255,255,255,0.5)] border-b-[1px] px-2 py-2">
          Edit your landing page from our gallery of designs.
        </h1>
        <div className="flex flex-col gap-4 px-2 py-4">
          <HeaderEditComponent
            setDisplayEditModal={setDisplayEditModal}
            setChangeSection={setChangeSection}
            setChangeSectionHeaderText={setChangeSectionHeaderText}
            setChangeSectionIndex={setChangeNavSectionIndex}
          />
          <HeroEditComponent
            setDisplayEditModal={setDisplayEditModal}
            setChangeSection={setChangeSection}
            setChangeSectionHeaderText={setChangeSectionHeaderText}
            setChangeSectionIndex={setChangeHeroSectionIndex}
          />
          <CardFeatureEditComponent
            setDisplayEditModal={setDisplayEditModal}
            setChangeSection={setChangeSection}
            setChangeSectionHeaderText={setChangeSectionHeaderText}
            setChangeSectionIndex={setChangeFeatureWithCardSectionIndex}
          />
          <ClassicalFeatureEditComponent
            setDisplayEditModal={setDisplayEditModal}
            setChangeSection={setChangeSection}
            setChangeSectionHeaderText={setChangeSectionHeaderText}
            setChangeSectionIndex={setChangeFeatureSectionIndex}
          />
          <TestimonialEditComponent
            setDisplayEditModal={setDisplayEditModal}
            setChangeSection={setChangeSection}
            setChangeSectionHeaderText={setChangeSectionHeaderText}
            setChangeSectionIndex={setChangeTestimonialSectionIndex}
          />
          <FAQEditComponent
            setDisplayEditModal={setDisplayEditModal}
            setChangeSection={setChangeSection}
            setChangeSectionHeaderText={setChangeSectionHeaderText}
            setChangeSectionIndex={setChangeFAQSectionIndex}
          />
          <TeamEditComponent
            setDisplayEditModal={setDisplayEditModal}
            setChangeSection={setChangeSection}
            setChangeSectionHeaderText={setChangeSectionHeaderText}
            setChangeSectionIndex={setChangeTeamSectionIndex}
          />
        </div>
      </div>
    </>
  );
};

export default MainEditComponent;

{
  /* <div className="w-full p-3">
  <textarea
    name=""
    id=""
    value={textAreaContent}
    onChange={handleTextareaChange}
    className="border-[rgba(255,255,255,0.5)] border-[1px] w-full h-[50px] bg-[rgb(37,39,45)] rounded-[5px] text-white"
  ></textarea>
</div>; */
}
