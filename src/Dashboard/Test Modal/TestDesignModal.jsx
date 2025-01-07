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

  return (
    <main className="bg-white w-full mt-5 max-md:mt-0 mx-10 h-[89vh] max-md:h-[89vh] max-[499px]:mx-4 overflow-scroll overflow-x-hidden">
      <main></main>
    </main>
  );
};

export default TestDesignModal;
