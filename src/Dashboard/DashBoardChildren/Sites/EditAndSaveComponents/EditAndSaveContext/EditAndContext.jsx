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
  const [changeSectionHeaderText, setChangeSectionHeaderText] = useState("");
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
  const [currentSection, setCurrentSection] = useState(null);

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

  const duplicateButton = (index) => {
    const newButton = `${buttons[index]}-${Date.now()}`;
    setButtons((prevButtons) => [...prevButtons, newButton]);

    const newElement = { ...elements[index], id: Date.now() };
    setElements((prevElements) => [...prevElements, newElement]);
  };

  const deleteButton = (index) => {
    const updatedButtons = [...buttons];
    updatedButtons.splice(index, 1);
    setButtons(updatedButtons);

    const updatedElements = [...elements];
    updatedElements.splice(index, 1);
    setElements(updatedElements);
  };

  return (
    <EditContext.Provider
      value={{
        elementRefs,
        scrollableDivRef,
        displayEditModal,
        changeSectionHeaderText,
        isPattern,
        scrollIdx,
        clickedIndex,
        buttons,
        elements,
        setDisplayEditModal,
        setChangeSectionHeaderText,
        setIsPattern,
        setScrollIdx,
        handleScroll,
        setClickedIndex,
        moveButton,
        duplicateButton,
        deleteButton,
        setElements,
        currentSection,
        setCurrentSection,
      }}
    >
      {children}
    </EditContext.Provider>
  );
};

export default EditAndSaveProvider;
