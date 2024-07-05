import React, { createContext, useEffect, useRef, useState } from "react";

export const EditContext = createContext();

const EditAndSaveProvider = ({ children }) => {
  const elementRefs = useRef([]);
  const scrollableDivRef = useRef(null);
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
  const [scrollIdx, setScrollIdx] = useState(null)
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleScroll = (idx) => {
    setScrollIdx(idx);
    setClickedIndex(idx);
  };

  useEffect(() => {
    if (
      scrollIdx !== null &&
      elementRefs.current[scrollIdx] &&
      scrollableDivRef.current
    ) {
      scrollableDivRef.current.scrollTo({
        top: elementRefs.current[scrollIdx].offsetTop,
        behavior: "smooth",
      });
    }
    console.log(scrollIdx);
  }, [scrollIdx]);

  return (
    <EditContext.Provider
      value={{
        elementRefs,
        scrollableDivRef,
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
        clickedIndex,
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
        handleScroll,
        setClickedIndex,
      }}
    >
      {children}
    </EditContext.Provider>
  );
};

export default EditAndSaveProvider;
