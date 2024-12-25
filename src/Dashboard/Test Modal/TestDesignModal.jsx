import { useContext } from "react";
import { DashContext } from "../DashboardChecker/DashboardContext";
import testImage from "../../assets/Default-Card.jpg";

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

  return (
    <main className="bg-white w-full mt-5 max-md:mt-0 mx-10 h-[89vh] max-md:h-[89vh] max-[499px]:mx-4 overflow-scroll overflow-x-hidden">
      <main>
        {/* Footer */}
        
      </main>
    </main>
  );
};

export default TestDesignModal;
