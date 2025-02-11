import React, { useContext, useEffect, useRef, useState } from "react";
import { MdOutlineWeb } from "react-icons/md";
import { MdFolder } from "react-icons/md";
import { DashContext } from "../../DashboardChecker/DashboardContext";
import reactElementToJSXString from "react-element-to-jsx-string";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoIosUndo } from "react-icons/io";

const EditAndSaveDesignModal = ({
  elements,
  handleSaveElements,
  setDesignElements,
  designElements,
}) => {
  const {
    setDisplayEditModal,
    newElementRef,
    elementsContainerRef,
    setDisplayCode,
    setElements,
  } = useContext(DashContext);
  const navigate = useNavigate();
  const [iconText, setIconText] = useState({
    up: false,
    down: false,
    undo: false,
  });
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [deletedElements, setDeletedElements] = useState([]);

  // useEffect(() => {
  //   if (elements.length === 1) {
  //     navigate("/home");
  //   }
  // }, [elements, navigate]);

  const handleElementClick = (item, index) => {
    const element = item.type({
      ...item.props,
      ref: null,
    });

    let elementString = reactElementToJSXString(element, {
      showFunctions: false,
    });

    // Remove fragments
    elementString = elementString.replace(/<>|<\/>/g, "");

    // Save the toggle button's content
    const toggleButtonMatch = elementString.match(
      /<button[^>]*data-allows-toggle-for-button="true"[^>]*>[\s\S]*?<\/button>/
    );

    if (toggleButtonMatch) {
      // Temporarily replace the entire toggle button with a placeholder
      elementString = elementString.replace(
        toggleButtonMatch[0],
        "PRESERVE_TOGGLE_BUTTON"
      );
    }

    // Remove onClick attributes and their values
    elementString = elementString.replace(/\s*onClick={[^}]+}}/g, "");

    // Also remove any remaining onClick handlers with different patterns
    elementString = elementString.replace(
      /\s*onClick={\([^}]*\)\s*=>\s*{[\s\S]*?}}/g,
      ""
    );
    elementString = elementString.replace(
      /\s*onClick={\s*\([^)]*\)\s*=>\s*{[\s\S]*?}}/g,
      ""
    );
    elementString = elementString.replace(
      /\s*onClick={\s*function\s*\([^)]*\)\s*{[\s\S]*?}}/g,
      ""
    );
    elementString = elementString.replace(/\s*onClick={\([^}]*\)}/g, "");

    // Restore the toggle button
    if (toggleButtonMatch) {
      elementString = elementString.replace(
        "PRESERVE_TOGGLE_BUTTON",
        `<button
            data-allows-toggle-for-button="true"
            className="border-[1px] px-3 py-2 rounded-lg"
            onClick={() => setToggleNav(!toggleNav)}
          >
          <FaBarsStaggered />
        </button>`
      );
    }

    // Remove id attributes
    elementString = elementString.replace(/\s*id="[^"]*"/g, "");

    // Remove data attributes except data-allows-toggle
    elementString = elementString.replace(
      /\s*data-uses-dangerously-set-inner-html="[^"]*"/g,
      ""
    );
    elementString = elementString.replace(/\s*data-text="[^"]*"/g, "");

    // Handle elements with data-allows-toggle
    elementString = elementString.replace(
      /className="([^"]*)"\s*data-allows-toggle="true"/g,
      (match, classContent) => {
        // Extract all classes except hidden/block
        const otherClasses = classContent
          .replace(/\bhidden\b/, "")
          .replace(/\bblock\b/, "")
          .trim();

        return `
          data-allows-toggle="true"
          className={\`\${
            toggleNav ? "block" : "hidden"
          } ${otherClasses}\`}`;
      }
    );

    // Handle dangerouslySetInnerHTML
    elementString = elementString.replace(
      /<(\w+)([^>]*)dangerouslySetInnerHTML={{\s*__html:\s*'([^']*)'\s*}}([^>]*)\/?>/g,
      (_, tagName, beforeAttributes, content, afterAttributes) =>
        `<${tagName}${beforeAttributes}${afterAttributes}>${content}</${tagName}>`
    );

    // Fix self-closing tags and icons
    elementString = elementString.replace(/\/>/g, ">"); // First convert all self-closing tags
    elementString = elementString.replace(/<br>/g, "<br />");


    // Handle other self-closing elements
    elementString = elementString.replace(/<img([^>]*)>/g, "<img$1 />");
    elementString = elementString.replace(/<input([^>]*)>/g, "<input$1 />");
    elementString = elementString.replace(/<FaBarsStaggered([^>]*)>/g, "<FaBarsStaggered$1 />");

    // Handle path elements that need closing tags
    elementString = elementString.replace(/<path([^>]*)>/g, "<path$1></path>");

    setDisplayCode(elementString);
    setDisplayEditModal(true);
    setSelectedItemIndex(index);
    setDesignElements(elementString);
    // console.log(elementString);
    // console.log("Data from design elements: ", designElements);
  };

  const moveElementUp = (index) => {
    if (index > 1) {
      setElements((prevElements) => {
        const newElements = [...prevElements];
        [newElements[index], newElements[index - 1]] = [
          newElements[index - 1],
          newElements[index],
        ];
        return newElements;
      });
      setSelectedItemIndex(index - 1);
    }
  };

  const moveElementDown = (index) => {
    if (index < elements.length - 2) {
      setElements((prevElements) => {
        const newElements = [...prevElements];
        [newElements[index], newElements[index + 1]] = [
          newElements[index + 1],
          newElements[index],
        ];
        return newElements;
      });
      setSelectedItemIndex(index + 1);
    }
  };

  const handleDeleteElement = (index) => {
    setElements((prevElements) => {
      const deletedElement = prevElements[index];
      setDeletedElements((prev) => [
        ...prev,
        { element: deletedElement, index },
      ]);
      return prevElements.filter((_, i) => i !== index);
    });
    setSelectedItemIndex(null);
    setDisplayEditModal(false);
    setDisplayCode("");
  };

  const handleUndo = () => {
    if (deletedElements.length > 0) {
      const lastDeleted = deletedElements[deletedElements.length - 1];
      setElements((prevElements) => {
        const newElements = [...prevElements];
        newElements.splice(lastDeleted.index, 0, lastDeleted.element);
        return newElements;
      });
      setSelectedItemIndex(lastDeleted.index);
      setDeletedElements((prev) => prev.slice(0, -1));
    }
  };

  // const handleElementRef = (el) => {
  //   if (el) {
  //     newElementRef.current = el;
  //     photoRef.current = el;
  //   }
  // };

  return (
    <>
      <div
        ref={elementsContainerRef}
        className="overflow-y-auto h-full"
        onClick={handleSaveElements}
      >
        {elements.map((item, idx) => (
          <div
            ref={newElementRef}
            key={item.key || idx}
            onClick={() => handleElementClick(item.element, idx)}
            className="relative"
          >
            {item.element}

            {selectedItemIndex === idx &&
              selectedItemIndex !== 0 &&
              selectedItemIndex !== elements.length - 1 && (
                <div
                  className={`max-[1000px]:hidden absolute top-0 left-0 text-3xl flex justify-between gap-3 px-1 py-1 border-black border-[1px] w-[150px] bg-white`}
                >
                  <div
                    className="relative"
                    onClick={() => moveElementUp(idx)}
                    onMouseEnter={() => setIconText({ up: true })}
                    onMouseLeave={() => setIconText({ up: false })}
                  >
                    <FaChevronUp className="cursor-pointer text-2xl" />
                    <span
                      className={`${
                        iconText.up ? "block" : "hidden"
                      } bg-black text-white text-sm text-center pb-1 absolute top-[40px] w-[100px]`}
                    >
                      Move Up
                    </span>
                  </div>
                  <div
                    className="relative"
                    onClick={() => moveElementDown(idx)}
                    onMouseEnter={() => setIconText({ down: true })}
                    onMouseLeave={() => setIconText({ down: false })}
                  >
                    <FaChevronDown className="cursor-pointer text-2xl" />
                    <span
                      className={`${
                        iconText.down ? "block" : "hidden"
                      } bg-black text-white text-sm text-center pb-1 absolute top-[40px] right-[-30px] w-[100px]`}
                    >
                      Move down
                    </span>
                  </div>
                  <div
                    className="relative"
                    onClick={handleUndo}
                    onMouseEnter={() => setIconText({ undo: true })}
                    onMouseLeave={() => setIconText({ undo: false })}
                  >
                    <IoIosUndo className="cursor-pointer text-2xl" />
                    <span
                      className={`${
                        iconText.undo ? "block" : "hidden"
                      } bg-black text-white text-sm text-center pb-1 absolute top-[40px] right-[-30px] w-[100px]`}
                    >
                      Undo
                    </span>
                  </div>
                  <div onClick={() => handleDeleteElement(idx)}>
                    <MdDeleteOutline className="text-[red] cursor-pointer text-2xl" />
                  </div>
                </div>
              )}
          </div>
        ))}
      </div>
    </>
  );
};

export default EditAndSaveDesignModal;

export const Button = ({
  id,
  setSectionModal,
  setCurrentSection,
  setActiveSection,
}) => {
  const ref = useRef(null);

  const handleClick = (id) => {
    console.log("Clicked id:", id);
    setSectionModal(true);
    setCurrentSection(true);

    const newActiveSection = {
      Header: false,
      Hero: false,
      CardFeatures: false,
      ClassicFeatures: false,
      Testimonial: false,
      FAQ: false,
      Team: false,
      [id]: true, // This will set the correct property to true
    };

    // console.log("New active section:", newActiveSection);
    setActiveSection(newActiveSection);
  };

  return (
    <div className="relative">
      <div
        className={`bg-[rgb(42,42,47)] text-white px-3 py-2 rounded-[5px] flex justify-between items-center cursor-pointer my-3 mx-2`}
      >
        <button
          ref={ref}
          className="flex items-center gap-1 w-full"
          onClick={() => handleClick(id)}
        >
          <MdOutlineWeb className="text-blue-600" />
          <span className="text-[rgba(255,255,255,0.8)] font-medium">{id}</span>
        </button>
        <div className="bg-[rgb(9,11,14)] p-1 rounded-[5px]">
          <MdFolder />
        </div>
      </div>
    </div>
  );
};
