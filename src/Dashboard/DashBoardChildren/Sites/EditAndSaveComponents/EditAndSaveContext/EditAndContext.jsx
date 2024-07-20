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
  const [isGradient, setIsGradient] = useState(false);
  const [color1, setColor1] = useState({ r: 255, g: 255, b: 255, a: 1 });
  const [color2, setColor2] = useState({ r: 255, g: 255, b: 255, a: 1 });
  const [hex1, setHex1] = useState("#ffffff");
  const [hex2, setHex2] = useState("#ffffff");
  const [inputValue, setInputValue] = useState("ffffff");
  const [isActive, setIsActive] = useState(0);
  const [backgroundStyle, setBackgroundStyle] = useState("")

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
        currentSection,
        backgroundStyle,
        isGradient,
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
        setCurrentSection,
        setIsGradient,
        color1,
        setColor1,
        color2,
        setColor2,
        hex1,
        setHex1,
        hex2,
        setHex2,
        inputValue,
        setInputValue,
        isActive,
        setIsActive,
        setBackgroundStyle,
      }}
    >
      {children}
    </EditContext.Provider>
  );
};

export default EditAndSaveProvider;
