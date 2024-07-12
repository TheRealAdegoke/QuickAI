import React, { useContext, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import testImage from "../../../../assets/Default-Card.jpg";
import { HeroImages } from "./HeroEditComponent";
import { EditContext } from "./EditAndSaveContext/EditAndContext";
import { DashContext } from "../../../DashboardChecker/DashboardContext";
import { HeaderImages } from "./HeaderEditComponent";
import { CardFeaturesImages } from "./CardFeatureEditComponent";
import { ClassicalFeaturesImages } from "./ClassicalFeatureEditComponent";
import { TestimonialImages } from "./TestimonialEditComponent";
import { FAQImages } from "./FAQEditComponent";
import { TeamImages } from "./TeamEditComponent";

const EditDesignModalComponent = () => {
  const { textAreaContent, setTextAreaContent, selectedElement } =
    useContext(DashContext);
  const {
    setDisplayEditModal,
    changeSectionHeaderText,
    isPattern,
    setIsPattern,
    currentSection,
  } = useContext(EditContext);

  const handleTextareaChange = (e) => {
    setTextAreaContent(e.target.value);
    if (selectedElement) {
      selectedElement.innerText = e.target.value;
    }
  };

  return (
    <>
      <div className={`flex flex-col justify-between gap-3 pt-4`}>
        <div className="flex items-center justify-center gap-5 px-2">
          <button
            onClick={() => {
              setDisplayEditModal(false);
            }}
            className="text-white font-semibold text-2xl w-[50px] border-[rgba(255,255,255,0.5)] border-[1px] px-2 py-1 rounded-[5px] flex justify-center"
          >
            <IoIosArrowRoundBack />
          </button>

          <h1 className="text-[rgba(255,255,255,0.8)] text-sm font-medium border-[rgba(255,255,255,0.5)] border-[1px] px-2 py-1 rounded-[5px] w-[70%]">
            {changeSectionHeaderText}
          </h1>
        </div>

        <div className="text-[rgba(255,255,255,0.8)] flex gap-3 border-[rgba(255,255,255,0.5)] border-b-[1px] pl-2">
          <button
            className={`${
              isPattern ? "border-b-[3px] border-[rgb(60,97,169)] pb-1" : "pb-1"
            } h-[40px]`}
            onClick={() => {
              setIsPattern(true);
            }}
          >
            Pattern
          </button>
          <button
            className={`${
              isPattern ? "pb-2" : "border-b-[3px] border-[rgb(60,97,169)]"
            } h-[40px]`}
            onClick={() => {
              setIsPattern(false);
            }}
          >
            Design
          </button>
        </div>

        <div className="overflow-y-scroll h-[69vh]">
          <div>
            {isPattern ? (
              <div className="flex flex-wrap gap-3 justify-evenly px-2">
                {currentSection.includes("Header") && <HeaderImages />}
                {currentSection.includes("Hero") && <HeroImages />}
                {currentSection.includes("Card Feature") && (
                  <CardFeaturesImages />
                )}
                {currentSection.includes("Classical Feature") && (
                  <ClassicalFeaturesImages />
                )}
                {currentSection.includes("Testimonial") && (
                  <TestimonialImages />
                )}
                {currentSection.includes("FAQ") && <FAQImages />}
                {currentSection.includes("Team") && <TeamImages />}
              </div>
            ) : (
              <div className="w-full p-3">
                <textarea
                  name=""
                  id=""
                  value={textAreaContent}
                  onChange={handleTextareaChange}
                  className="border-[rgba(255,255,255,0.5)] border-[1px] w-full h-[50px] bg-[rgb(37,39,45)] rounded-[5px] text-white"
                ></textarea>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditDesignModalComponent;
