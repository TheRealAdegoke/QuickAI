import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

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
  const [scrollIdx, setScrollIdx] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [buttons, setButtons] = useState([
    "Header",
    "Hero",
    "Card Feature",
    "Classical Feature",
    "Testimonial",
    "FAQ",
    "Team",
  ]);
  const [elements, setElements] = useState([]);

  const handleScroll = (idx) => {
    setScrollIdx(idx);
    setClickedIndex(idx);
  };

  const duplicateButton = (index) => {
    const newButton = buttons[index];
    const updatedButtons = [...buttons, newButton];
    setButtons(updatedButtons);

    const newElement = elements[index];
    const updatedElements = [...elements, newElement];
    setElements(updatedElements);
  };

  const deleteButton = (index) => {
    const updatedButtons = buttons.filter((_, idx) => idx !== index);
    setButtons(updatedButtons);

    const updatedElements = elements.filter((_, idx) => idx !== index);
    setElements(updatedElements);
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
  }, [scrollIdx]);

  const moveButton = (dragIndex, hoverIndex) => {
    const updatedButtons = [...buttons];
    const [draggedButton] = updatedButtons.splice(dragIndex, 1);
    updatedButtons.splice(hoverIndex, 0, draggedButton);
    setButtons(updatedButtons);

    const updatedElements = [...elements];
    const [draggedElement] = updatedElements.splice(dragIndex, 1);
    updatedElements.splice(hoverIndex, 0, draggedElement);
    setElements(updatedElements);
  };

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
        scrollIdx,
        clickedIndex,
        buttons,
        elements,
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
        setScrollIdx,
        handleScroll,
        setClickedIndex,
        moveButton,
        setElements,
        duplicateButton,
        deleteButton,
      }}
    >
      {children}
    </EditContext.Provider>
  );
};

export default EditAndSaveProvider;
