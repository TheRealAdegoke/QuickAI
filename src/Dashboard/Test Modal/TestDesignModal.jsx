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
      <main></main>
    </main>
  );
};

export default TestDesignModal;




<nav
  className="w-full shadow-xl relative z-40"
  style={{
    background: "#aa2579",
  }}
>
  <div className="flex justify-between items-center px-5">
    <div className="w-1/5 max-md:w-[30%] flex items-center gap-1 py-3">
      <img
        alt="Web logo"
        className="w-[40px]"
        src="https://res.cloudinary.com/dpyp7innp/image/upload/v1715591674/ad53c5d6-b066-455b-a840-7c1c3538e430.png"
      />
      <h1 className="nav-name-1-0 font-semibold text-black" style={{}}>
        Lorem
      </h1>
    </div>
    <label className="lg:hidden show-menu" htmlFor="id-show-menu">
      <div className="text-2xl text-black cursor-pointer">
        <svg
          height="25"
          viewBox="0 0 50 50"
          width="25"
          x="0px"
          xmlns="http://www.w3.org/2000/svg"
          y="0px"
        >
          <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
        </svg>
      </div>
    </label>
    <input
      className="appearance-none hidden peer"
      role="button"
      type="checkbox"
    />
    <div className="lg:opacity-100 lg:visible menu-block max-lg:absolute max-lg:left-0 top-14 max-lg:w-full max-lg:h-[400px]  max-lg:px-0 opacity-0 align-middle invisible transition-all duration-75 peer-checked:visible peer-checked:opacity-100 ">
      <ul className="lg:gap-5 flex max-lg:flex-col w-full text-[rgba(0,0,0,0.8)] text-lg text-center font-semibold">
        <li className=" max-lg:border-t-[1px] py-5 cursor-pointer hover:underline flex justify-center items-center">
          <span className="list-link-text-1-0" style={{}}>
            Get Help
          </span>
        </li>
        <li className=" max-lg:border-t-[1px] py-5 cursor-pointer hover:underline flex justify-center items-center">
          <span className="list-link-text-1-0" style={{}}>
            Explore
          </span>
        </li>
        <li className=" max-lg:border-t-[1px] py-5 cursor-pointer hover:underline flex justify-center items-center">
          <span className="list-link-text-1-0" style={{}}>
            Download Now
          </span>
        </li>
        <li className=" max-lg:border-t-[1px] py-5 cursor-pointer hover:underline flex justify-center items-center">
          <span className="list-link-text-1-0" style={{}}>
            Pricing
          </span>
        </li>
      </ul>
    </div>
  </div>
</nav>;