import React, { useState } from "react";
import HeaderEditComponent from "./HeaderEditComponent";
import HeroEditComponent from "./HeroEditComponent";
import ClassicalFeatureEditComponent from "./ClassicalFeatureEditComponent";
import CardFeatureEditComponent from "./CardFeatureEditComponent";
import TeamEditComponent from "./TeamEditComponent";
import TestimonialEditComponent from "./TestimonialEditComponent";
import FAQEditComponent from "./FAQEditComponent";

const MainEditComponent = ({
  setDisplayEditModal,
  setChangeSection,
  setChangeNavSectionIndex,
  setChangeHeroSectionIndex,
  setChangeFeatureWithCardSectionIndex,
  setChangeFeatureSectionIndex,
  setChangeFAQSectionIndex,
  setChangeTeamSectionIndex,
  setChangeTestimonialSectionIndex,
  setChangeContactSectionIndex,
  setChangeFooterSectionIndex,
}) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <HeaderEditComponent
          setDisplayEditModal={setDisplayEditModal}
          setChangeSection={setChangeSection}
          setChangeSectionIndex={setChangeNavSectionIndex}
        />
        <HeroEditComponent
          setDisplayEditModal={setDisplayEditModal}
          setChangeSection={setChangeSection}
          setChangeSectionIndex={setChangeHeroSectionIndex}
        />
        <CardFeatureEditComponent
          setDisplayEditModal={setDisplayEditModal}
          setChangeSection={setChangeSection}
          setChangeSectionIndex={setChangeFeatureWithCardSectionIndex}
        />
        <ClassicalFeatureEditComponent
          setDisplayEditModal={setDisplayEditModal}
          setChangeSection={setChangeSection}
          setChangeSectionIndex={setChangeFeatureSectionIndex}
        />
        <TestimonialEditComponent
          setDisplayEditModal={setDisplayEditModal}
          setChangeSection={setChangeSection}
          setChangeSectionIndex={setChangeTestimonialSectionIndex}
        />
        <FAQEditComponent
          setDisplayEditModal={setDisplayEditModal}
          setChangeSection={setChangeSection}
          setChangeSectionIndex={setChangeFAQSectionIndex}
        />
        <TeamEditComponent
          setDisplayEditModal={setDisplayEditModal}
          setChangeSection={setChangeSection}
          setChangeSectionIndex={setChangeTeamSectionIndex}
        />
      </div>

      <div></div>
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
