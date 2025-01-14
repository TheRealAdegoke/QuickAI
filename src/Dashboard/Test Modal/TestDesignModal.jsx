import { useContext, useState } from "react";
import { DashContext } from "../DashboardChecker/DashboardContext";
import testImage from "../../assets/Default-Card.jpg";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import BGBottom from "../../assets/bg-bottom.png";
import BGTop from "../../assets/bg-top.png";
import ScreenShotFrame from "../../assets/screenshot-frame.png";
import ScreenShotImage from "../../assets/screenshot-1.png";
import { FaGears } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";

const TestDesignModal = () => {
  const {
    showDesignModal,
    heroIndex,
    navIndex,
    featuresWithCardIndex,
    featuresIndex,
    testimonialIndex,
    faqIndex,
    teamIndex,
    contactIndex,
    footerIndex,
    navComponents,
    heroComponents,
    featuresWithCardsComponent,
    featuresComponents,
    testimonialComponent,
    faqComponent,
    teamComponent,
    contactComponent,
    footerComponent,
    userInput,
    selectedIdea,
    handleUserData,
    clearDesigns,
    setIsMobile,
    backgroundStyle,
    isFocused,
    handleFocus,
    handleBlur,
    location,
    text,
    buttonIndex,
    isMobile,
    handleDivClick,
    handleTextClick,
    getStyle,
    getElementStyle,
    index,
    isEdited,
    uniqueId,
    elementContent,
    handleImageClick,
    handleDivButtonClick,
    handleCardClick,
  } = useContext(DashContext);
  const [toggleNav, setToggleNav] = useState(false);

  // const handleElementClick = (item, index) => {
  //   const element = item.type({
  //     ...item.props,
  //     ref: null,
  //   });

  //   let elementString = reactElementToJSXString(element, {
  //     showFunctions: false,
  //   });

  //   // Remove fragments
  //   elementString = elementString.replace(/<>|<\/>/g, "");

  //   // Save the toggle button's content
  //   const toggleButtonMatch = elementString.match(
  //     /<button[^>]*data-allows-toggle-for-button="true"[^>]*>[\s\S]*?<\/button>/
  //   );

  //   if (toggleButtonMatch) {
  //     // Temporarily replace the entire toggle button with a placeholder
  //     elementString = elementString.replace(
  //       toggleButtonMatch[0],
  //       "PRESERVE_TOGGLE_BUTTON"
  //     );
  //   }

  //   // Remove onClick attributes and their values
  //   elementString = elementString.replace(/\s*onClick={[^}]+}}/g, "");

  //   // Also remove any remaining onClick handlers with different patterns
  //   elementString = elementString.replace(
  //     /\s*onClick={\([^}]*\)\s*=>\s*{[\s\S]*?}}/g,
  //     ""
  //   );
  //   elementString = elementString.replace(
  //     /\s*onClick={\s*\([^)]*\)\s*=>\s*{[\s\S]*?}}/g,
  //     ""
  //   );
  //   elementString = elementString.replace(
  //     /\s*onClick={\s*function\s*\([^)]*\)\s*{[\s\S]*?}}/g,
  //     ""
  //   );
  //   elementString = elementString.replace(/\s*onClick={\([^}]*\)}/g, "");

  //   // Restore the toggle button
  //   if (toggleButtonMatch) {
  //     elementString = elementString.replace(
  //       "PRESERVE_TOGGLE_BUTTON",
  //       `<button
  //           data-allows-toggle-for-button="true"
  //           className="border-[1px] px-3 py-2 rounded-lg"
  //           onClick={() => setToggleNav(!toggleNav)}
  //         >
  //         <FaBarsStaggered />
  //       </button>`
  //     );
  //   }

  //   // Remove id attributes
  //   elementString = elementString.replace(/\s*id="[^"]*"/g, "");

  //   // Remove data attributes except data-allows-toggle
  //   elementString = elementString.replace(
  //     /\s*data-uses-dangerously-set-inner-html="[^"]*"/g,
  //     ""
  //   );
  //   elementString = elementString.replace(/\s*data-text="[^"]*"/g, "");

  //   // Handle elements with data-allows-toggle
  //   elementString = elementString.replace(
  //     /className="([^"]*)"\s*data-allows-toggle="true"/g,
  //     (match, classContent) => {
  //       // Extract all classes except hidden/block
  //       const otherClasses = classContent
  //         .replace(/\bhidden\b/, "")
  //         .replace(/\bblock\b/, "")
  //         .trim();

  //       return `
  //         data-allows-toggle="true"
  //         className={\`\${
  //           toggleNav ? "block" : "hidden"
  //         } ${otherClasses}\`}`;
  //     }
  //   );

  //   // Handle dangerouslySetInnerHTML
  //   elementString = elementString.replace(
  //     /<(\w+)([^>]*)dangerouslySetInnerHTML={{\s*__html:\s*'([^']*)'\s*}}([^>]*)\/?>/g,
  //     (_, tagName, beforeAttributes, content, afterAttributes) =>
  //       `<${tagName}${beforeAttributes}${afterAttributes}>${content}</${tagName}>`
  //   );

  //   // Helper function for icons with dynamic attributes
  //   const createIconRegexWithDynamicProps = (componentName) => {
  //     return new RegExp(
  //       `<${componentName}\\s+([^>]*)>(?![\\s\\S]*?<\\/${componentName}>)`,
  //       "g"
  //     );
  //   };

  //   // Fix self-closing tags and icons
  //   elementString = elementString.replace(/\/>/g, ">"); // First convert all self-closing tags
  //   elementString = elementString.replace(/<br>/g, "<br />");

  //   // Handle icon components with preserved attributes
  //   const iconComponents = [
  //     "FaBarsStaggered",
  //     "FaCheck",
  //     "FaEye",
  //     "IoLocationSharp",
  //     "FaPhoneAlt",
  //     "FaEnvelope",
  //     "FaXTwitter",
  //     "GrFacebookOption",
  //     "FaInstagram",
  //     "FaLinkedinIn",
  //     "MdChevronRight",
  //   ];

  //   iconComponents.forEach((componentName) => {
  //     elementString = elementString.replace(
  //       createIconRegexWithDynamicProps(componentName),
  //       (match, attributes) => `<${componentName} ${attributes.trim()} />`
  //     );
  //   });

  //   // Handle other self-closing elements
  //   elementString = elementString.replace(/<img([^>]*)>/g, "<img$1 />");
  //   elementString = elementString.replace(/<input([^>]*)>/g, "<input$1 />");

  //   // Handle path elements that need closing tags
  //   elementString = elementString.replace(/<path([^>]*)>/g, "<path$1></path>");

  //   setDisplayCode(elementString);
  //   setDisplayEditModal(true);
  //   setSelectedItemIndex(index);
  //   setDesignElements(elementString);
  //   // console.log(elementString);
  //   // console.log("Data from design elements: ", designElements);
  // };

  return (
    <main className="bg-white w-full mt-5 max-md:mt-0 mx-10 h-[89vh] max-md:h-[89vh] max-[499px]:mx-4 overflow-scroll overflow-x-hidden">
      <main>
        
      </main>
    </main>
  );
};

export default TestDesignModal;
