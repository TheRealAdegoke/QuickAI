import React, { createContext, useState } from "react";

export const EditContext = createContext();

const EditAndSaveProvider = ({ children }) => {
  const [displayEditModal, setDisplayEditModal] = useState(false);
  const [changeSection, setChangeSection] = useState(undefined);
  const [changeSectionHeaderText, setChangeSectionHeaderText] = useState("");
  const [changeNavSectionIndex, setChangeNavSectionIndex] = useState(undefined);
  const [changeHeroSectionIndex, setChangeHeroSectionIndex] =
    useState(undefined);
  const [
    changeFeatureWithCardSectionIndex,
    setChangeFeatureWithCardSectionIndex,
  ] = useState(undefined);
  const [changeFeatureSectionIndex, setChangeFeatureSectionIndex] =
    useState(undefined);
  const [changeFAQSectionIndex, setChangeFAQSectionIndex] = useState(undefined);
  const [changeTeamSectionIndex, setChangeTeamSectionIndex] =
    useState(undefined);
  const [changeTestimonialSectionIndex, setChangeTestimonialSectionIndex] =
    useState(undefined);
  const [changeContactSectionIndex, setChangeContactSectionIndex] =
    useState(undefined);
  const [changeFooterSectionIndex, setChangeFooterSectionIndex] =
    useState(undefined);
  const [isPattern, setIsPattern] = useState(true);
  const [textAreaContent, setTextAreaContent] = useState("");
  const [selectedElement, setSelectedElement] = useState(null);
  const [scrollIdx, setScrollIdx] = useState(0)

  return (
    <EditContext.Provider
      value={{
        displayEditModal,
        changeSection,
        changeSectionHeaderText,
        changeNavSectionIndex,
        changeHeroSectionIndex,
        changeFeatureWithCardSectionIndex,
        changeFeatureSectionIndex,
        changeFAQSectionIndex,
        changeTeamSectionIndex,
        changeTestimonialSectionIndex,
        changeContactSectionIndex,
        changeFooterSectionIndex,
        isPattern,
        textAreaContent,
        selectedElement,
        scrollIdx,
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
        setTextAreaContent,
        setSelectedElement,
        setScrollIdx,
      }}
    >
      {children}
    </EditContext.Provider>
  );
};

export default EditAndSaveProvider;
