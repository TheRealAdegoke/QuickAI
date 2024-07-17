import React, { useContext, useMemo, useState } from "react";
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
import ColorPickerComponent from "./ColorPicker";

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
  const [isContent, setIsContent] = useState(true);
  const [color, setColor] = useState({ r: 102, g: 102, b: 102, a: 1 });
  const [isGradient, setIsGradient] = useState(false);
  const [isActive, setIsActive] = useState(0);

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
            Style
          </button>
        </div>

        <div className="h-[69vh]">
          <div className="overflow-y-scroll ">
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
              <div className="w-full py-3 pl-3 overflow-hidden">
                <div className="flex justify-between mb-2 max-w-[200px] mx-auto text-[rgb(145,151,155)] font-medium px-3 py-1 rounded-[5px] text-sm">
                  <button
                    className={`${
                      isContent ? "bg-[rgb(36,37,40)] rounded-[5px]" : ""
                    } px-2 py-1`}
                    onClick={() => {
                      setIsContent(true);
                    }}
                  >
                    Content
                  </button>
                  <button
                    className={`${
                      isContent ? "" : "bg-[rgb(36,37,40)] rounded-[5px]"
                    } px-2 py-1`}
                    onClick={() => {
                      setIsContent(false);
                    }}
                  >
                    Background
                  </button>
                </div>

                {isContent ? (
                  <textarea
                    name=""
                    id=""
                    value={textAreaContent}
                    onChange={handleTextareaChange}
                    className="border-[rgba(255,255,255,0.5)] border-[1px] w-full h-[250px] max-h-[250px] min-h-[250px] bg-[rgb(37,39,45)] rounded-[5px] text-white p-2 outline-none"
                  ></textarea>
                ) : (
                  <div className="mb-4">
                    <ColorPickerComponent
                      color={color}
                      setColor={setColor}
                      isGradient={isGradient}
                      setIsGradient={setIsGradient}
                      isActive={isActive}
                      setIsActive={setIsActive}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditDesignModalComponent;
