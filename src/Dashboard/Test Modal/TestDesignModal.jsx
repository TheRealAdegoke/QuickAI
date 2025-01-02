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
      <main>
        {/* Nav Section */}
        {/* <header>
          <nav
            onClick={handleDivClick}
            id={`header-section-${index + 1}-${uniqueId}`}
            style={getStyle(`header-section-${index + 1}`, uniqueId)}
            className={`${
              toggleNav ? "" : "max-lg:shadow-xl"
            } bg-white text-black w-full py-5 px-5 lg:shadow-xl`}
          >
            <div className="flex justify-between items-center">
              <div className="lg:w-[55%]">
                <Link to="">
                  <span
                    id={`nav-name-${index + 1}-${uniqueId}`}
                    className={`nav-name-${
                      index + 1
                    }-${uniqueId} font-bold text-4xl`}
                    style={getElementStyle(`nav-name-${index + 1}`, uniqueId)}
                    data-text="Heading"
                    contentEditable={false}
                    onClick={handleTextClick}
                  >
                    {isEdited[`nav-name-${index + 1}-${uniqueId}`]
                      ? elementContent[`nav-name-${index + 1}-${uniqueId}`]
                      : elementContent[`nav-name-${index + 1}-${uniqueId}`] ||
                        text.webLogo}
                  </span>
                </Link>
              </div>

              <div className="hidden max-lg:block">
                <button
                  className="border-[1px] px-3 py-2 rounded-lg"
                  onClick={() => {
                    setToggleNav(!toggleNav);
                  }}
                >
                  <FaBarsStaggered />
                </button>
              </div>

              <div className="flex justify-between lg:w-full items-center max-lg:hidden font-semibold">
                <div className="flex gap-8">
                  <Link to="">
                    <span
                      id={`list-link-text-1-${index + 1}-${uniqueId}`}
                      className={`list-link-text-${index + 1}-${uniqueId}`}
                      style={getElementStyle(
                        `list-link-text-${index + 1}`,
                        uniqueId
                      )}
                      data-text="Link text"
                      contentEditable={false}
                      onClick={handleTextClick}
                    >
                      {isEdited[`list-link-text-1-${index + 1}-${uniqueId}`]
                        ? elementContent[
                            `list-link-text-1-${index + 1}-${uniqueId}`
                          ]
                        : elementContent[
                            `list-link-text-1-${index + 1}-${uniqueId}`
                          ] || text.buttonTexts[2]}
                    </span>
                  </Link>
                  <Link to="">
                    <span
                      id={`list-link-text-2-${index + 1}-${uniqueId}`}
                      className={`list-link-text-${index + 1}-${uniqueId}`}
                      style={getElementStyle(
                        `list-link-text-${index + 1}`,
                        uniqueId
                      )}
                      data-text="Link text"
                      contentEditable={false}
                      onClick={handleTextClick}
                    >
                      {isEdited[`list-link-text-2-${index + 1}-${uniqueId}`]
                        ? elementContent[
                            `list-link-text-2-${index + 1}-${uniqueId}`
                          ]
                        : elementContent[
                            `list-link-text-2-${index + 1}-${uniqueId}`
                          ] || text.buttonTexts[3]}
                    </span>
                  </Link>
                  <Link to="">
                    <span
                      id={`list-link-text-3-${index + 1}-${uniqueId}`}
                      className={`list-link-text-${index + 1}-${uniqueId}`}
                      style={getElementStyle(
                        `list-link-text-${index + 1}`,
                        uniqueId
                      )}
                      data-text="Link text"
                      contentEditable={false}
                      onClick={handleTextClick}
                    >
                      {isEdited[`list-link-text-3-${index + 1}-${uniqueId}`]
                        ? elementContent[
                            `list-link-text-3-${index + 1}-${uniqueId}`
                          ]
                        : elementContent[
                            `list-link-text-3-${index + 1}-${uniqueId}`
                          ] || text.buttonTexts[4]}
                    </span>
                  </Link>
                  <Link to="">
                    <span
                      id={`list-link-text-4-${index + 1}-${uniqueId}`}
                      className={`list-link-text-${index + 1}-${uniqueId}`}
                      style={getElementStyle(
                        `list-link-text-${index + 1}`,
                        uniqueId
                      )}
                      data-text="Link text"
                      contentEditable={false}
                      onClick={handleTextClick}
                    >
                      {isEdited[`list-link-text-4-${index + 1}-${uniqueId}`]
                        ? elementContent[
                            `list-link-text-4-${index + 1}-${uniqueId}`
                          ]
                        : elementContent[
                            `list-link-text-4-${index + 1}-${uniqueId}`
                          ] || text.buttonTexts[5]}
                    </span>
                  </Link>
                </div>

                <div className="">
                  <button
                    id={`nav-button-${index + 1}-${uniqueId}`}
                    className="px-10 py-2 rounded-full font-medium text-white"
                    onClick={handleDivButtonClick}
                    style={getStyle(
                      `nav-button-${index + 1}`,
                      uniqueId,
                      "rgb(0,0,0)"
                    )}
                  >
                    <span
                      id={`nav-button-text-${
                        index + 1
                      }-${uniqueId}`}
                      style={getElementStyle(
                        `nav-button-text-style-${index + 1}`,
                        uniqueId
                      )}
                      className={`nav-button-text-style-${
                        index + 1
                      }-${uniqueId}`}
                      data-text="Button text"
                      contentEditable={false}
                      onClick={handleTextClick}
                    >
                      {isEdited[
                        `nav-button-text-${
                          index + 1
                        }-${uniqueId}`
                      ]
                        ? elementContent[
                            `nav-button-text-${
                              index + 1
                            }-${uniqueId}`
                          ]
                        : elementContent[
                            `nav-button-text-${
                              index + 1
                            }-${uniqueId}`
                          ] || text.buttonTexts[6]}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <div
            className={`${
              toggleNav ? "block" : "hidden"
            } transition-all duration-500 ease-in-out overflow-hidden lg:hidden text-black border-t-[1px] w-[93%] py-4 mx-auto font-semibold`}
          >
            <div className="flex flex-col gap-8">
              <Link to="">
                <span>Home</span>
              </Link>
              <Link to="">
                <span>About</span>
              </Link>
              <Link to="">
                <span>Feature</span>
              </Link>
              <Link to="">
                <span>Pricing</span>
              </Link>
            </div>
          </div>
        </header> */}

        {/* <header>
          <nav
            className="text-black w-full py-5 px-5 shadow-xl relative z-40"
            style={{
              background: "#ffffff",
            }}
          >
            <div className="flex justify-between items-center">
              <div className="lg:w-[55%]">
                <Link to="">
                  <span className="nav-name-1-0 font-bold text-4xl" style={{}}>
                    Lorem
                  </span>
                </Link>
              </div>
              <div className="hidden max-lg:block">
                <button
                  data-allows-toggle-for-button="true"
                  className="border-[1px] px-3 py-2 rounded-lg"
                  onClick={() => {
                    setToggleNav(!toggleNav);
                  }}
                >
                  <FaBarsStaggered />
                </button>
              </div>
              <div className="flex justify-between lg:w-full items-center max-lg:hidden font-semibold">
                <div className="flex gap-8">
                  <Link to="">
                    <span className="list-link-text-1-0" style={{}}>
                      View Demo
                    </span>
                  </Link>
                  <Link to="">
                    <span className="list-link-text-1-0" style={{}}>
                      Start Trial
                    </span>
                  </Link>
                  <Link to="">
                    <span className="list-link-text-1-0" style={{}}>
                      Explore Now
                    </span>
                  </Link>
                  <Link to="">
                    <span className="list-link-text-1-0" style={{}}>
                      Features
                    </span>
                  </Link>
                </div>
                <div className="">
                  <button
                    className="px-10 py-2 rounded-full font-medium text-white"
                    style={{
                      background: "rgb(0,0,0)",
                    }}
                  >
                    <span className="nav-button-text-style-1-0" style={{}}>
                      Visit Us
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <div
            data-allows-toggle="true"
            className={`${
              toggleNav ? "block" : "hidden"
            } transition-all duration-500 ease-in-out overflow-hidden lg:hidden text-black border-t-[1px] px-5 py-4 mx-auto font-semibold`}
            style={{
              background: "#ffffff",
            }}
          >
            <div className="flex flex-col gap-8">
              <Link to="">
                <span className="list-link-text-1-0" style={{}}>
                  View Demo
                </span>
              </Link>
              <Link to="">
                <span className="list-link-text-1-0" style={{}}>
                  Start Trial
                </span>
              </Link>
              <Link to="">
                <span className="list-link-text-1-0" style={{}}>
                  Explore Now
                </span>
              </Link>
              <Link to="">
                <span className="list-link-text-1-0" style={{}}>
                  Features
                </span>
              </Link>
            </div>
          </div>
        </header> */}

        {/* Hero */}
        {/* <section className="bg-[#4294E3]">
          <div className="pt-24 max-lg:pt-10 text-black">
            <div className="flex justify-center max-lg:flex-col max-lg:gap-y-20 gap-x-28">
              <div className="w-full max-lg:w-[95%] max-lg:max-w-[650px] max-lg:mx-auto max-w-[550px] pl-5 max-lg:text-center">
                <h1 className="text-4xl font-bold mb-5">
                  The Revolutionary App That Helps To Control Your Own Fitness
                </h1>
                <p className="font-semibold mb-9">
                  Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum
                  stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam.
                  Sit diam sit justo amet ipsum vero ipsum clita lorem
                </p>
                <div className="flex gap-x-5 max-lg:justify-center">
                  <Link
                    to=""
                    href=""
                    className="bg-[rgb(0,0,0)] px-14 py-4 rounded-full font-medium text-white"
                  >
                    Read More
                  </Link>
                  <Link
                    to=""
                    className="bg-[rgb(0,0,0)] px-14 py-4 rounded-full font-medium text-white"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="w-[30%] max-lg:w-full max-lg:flex max-lg:justify-center">
                <div
                  className="w-[253px] h-[500px] p-[15px] lg:mr-[30px]"
                  style={{ backgroundImage: `url(${ScreenShotFrame})` }}
                >
                  <img
                    src={ScreenShotImage}
                    alt="quick-ui-lib-image"
                    className="w-[223px] h-[470px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <img src={BGBottom} alt="" className="w-full" />
          </div>
        </section> */}

        {/* Features with card */}
        {/* <section className="">
          <div className="py-24 max-lg:pt-10 text-black">
            <div className="flex justify-center max-lg:flex-col max-lg:gap-y-20 gap-x-40 max-w-[1300px] mx-auto">
              <div className="w-full max-lg:w-[95%] max-lg:max-w-[650px] max-lg:mx-auto max-w-[550px] pl-5">
                <p className="font-semibold mb-3">About App</p>
                <h1 className="text-4xl font-bold mb-5">
                  #1 App For Your Fitness
                </h1>
                <p className="font-semibold mb-4">
                  Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum
                  stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam.
                  Sit diam sit justo amet ipsum vero ipsum clita lorem
                </p>
                <div className="mb-20 flex max-lg:flex-col max-lg:gap-y-6 gap-x-14">
                  <div className="flex items-center gap-3">
                    <FaGears className="text-5xl" />
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold">1234</span>
                      <span className="text-lg font-medium">
                        Active Install
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaGears className="text-5xl" />
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold">1234</span>
                      <span className="text-lg font-medium">
                        Active Install
                      </span>
                    </div>
                  </div>
                </div>
                <div className="">
                  <Link
                    to=""
                    href=""
                    className="bg-[rgb(0,0,0)] px-14 py-4 rounded-full font-medium text-white"
                  >
                    Read More
                  </Link>
                </div>
              </div>

              <div className="w-[30%] max-lg:w-full max-lg:flex max-lg:justify-center">
                <div
                  className="w-[253px] h-[500px] p-[15px] lg:mr-[30px]"
                  style={{ backgroundImage: `url(${ScreenShotFrame})` }}
                >
                  <img
                    src={ScreenShotImage}
                    alt="quick-ui-lib-image"
                    className="w-[223px] h-[470px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="py-24 max-lg:pt-10 text-black">
            <div className="flex justify-center max-lg:flex-col max-lg:gap-y-20 gap-x-40 max-w-[1300px] mx-auto">
              <div className="w-full max-lg:w-[95%] max-lg:max-w-[650px] max-lg:mx-auto max-w-[550px] pl-5">
                <p className="font-semibold mb-3">Screenshot</p>
                <h1 className="text-3xl font-bold mb-5">
                  User Friendly interface And Very Easy To Use Fitness App
                </h1>
                <p className="font-semibold mb-4">
                  Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum
                  stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam.
                  Sit diam sit justo amet ipsum vero ipsum clita lorem
                </p>
                <div className="mb-14 flex flex-col gap-y-3">
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-xl" />
                    <span className="text-xl">
                      Diam dolor diam ipsum et tempor sit
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaCheck className="text-xl" />
                    <span className="text-xl">
                      Diam dolor diam ipsum et tempor sit
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaCheck className="text-xl" />
                    <span className="text-xl">
                      Diam dolor diam ipsum et tempor sit
                    </span>
                  </div>
                </div>
                <div className="">
                  <Link
                    to=""
                    href=""
                    className="bg-[rgb(0,0,0)] px-14 py-4 rounded-full font-medium text-white"
                  >
                    Read More
                  </Link>
                </div>
              </div>

              <div className="w-[30%] max-lg:w-full max-lg:flex max-lg:justify-center">
                <div
                  className="w-[253px] h-[500px] p-[15px] lg:mr-[30px]"
                  style={{ backgroundImage: `url(${ScreenShotFrame})` }}
                >
                  <img
                    src={ScreenShotImage}
                    alt="quick-ui-lib-image"
                    className="w-[223px] h-[470px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Features Section */}
        {/* <section className="">
          <div className="py-24 text-black">
            <div className="text-center">
              <p className="font-semibold mb-3">How It Works</p>
              <h1 className="text-3xl font-bold mb-5">Awesome Features</h1>
            </div>

            <div className="flex justify-center flex-wrap gap-6 w-[90%] max-w-[1200px] mx-auto max-md:flex-col">
              <div className="bg-[rgb(240,246,255)] w-[30%] max-md:w-[95%] mx-auto px-3 py-8 rounded-lg flex flex-col items-start justify-center gap-y-4">
                <div className="text-xl text-white bg-[#4294E3] inline-block p-5 rounded-full">
                  <FaEye />
                </div>
                <h1 className="text-xl font-semibold">High Resolution</h1>
                <p className="font-medium text-[rgba(0,0,0,0.5)]">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
              </div>

              <div className="bg-[rgb(240,246,255)] w-[30%] max-md:w-[95%] mx-auto px-3 py-8 rounded-lg flex flex-col items-start justify-center gap-y-4">
                <div className="text-xl text-white bg-[#4294E3] inline-block p-5 rounded-full">
                  <FaEye />
                </div>
                <h1 className="text-xl font-semibold">High Resolution</h1>
                <p className="font-medium text-[rgba(0,0,0,0.5)]">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
              </div>

              <div className="bg-[rgb(240,246,255)] w-[30%] max-md:w-[95%] mx-auto px-3 py-8 rounded-lg flex flex-col items-start justify-center gap-y-4">
                <div className="text-xl text-white bg-[#4294E3] inline-block p-5 rounded-full">
                  <FaEye />
                </div>
                <h1 className="text-xl font-semibold">High Resolution</h1>
                <p className="font-medium text-[rgba(0,0,0,0.5)]">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
              </div>

              <div className="bg-[rgb(240,246,255)] w-[30%] max-md:w-[95%] mx-auto px-3 py-8 rounded-lg flex flex-col items-start justify-center gap-y-4">
                <div className="text-xl text-white bg-[#4294E3] inline-block p-5 rounded-full">
                  <FaEye />
                </div>
                <h1 className="text-xl font-semibold">High Resolution</h1>
                <p className="font-medium text-[rgba(0,0,0,0.5)]">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
              </div>

              <div className="bg-[rgb(240,246,255)] w-[30%] max-md:w-[95%] mx-auto px-3 py-8 rounded-lg flex flex-col items-start justify-center gap-y-4">
                <div className="text-xl text-white bg-[#4294E3] inline-block p-5 rounded-full">
                  <FaEye />
                </div>
                <h1 className="text-xl font-semibold">High Resolution</h1>
                <p className="font-medium text-[rgba(0,0,0,0.5)]">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
              </div>

              <div className="bg-[rgb(240,246,255)] w-[30%] max-md:w-[95%] mx-auto px-3 py-8 rounded-lg flex flex-col items-start justify-center gap-y-4">
                <div className="text-xl text-white bg-[#4294E3] inline-block p-5 rounded-full">
                  <FaEye />
                </div>
                <h1 className="text-xl font-semibold">High Resolution</h1>
                <p className="font-medium text-[rgba(0,0,0,0.5)]">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="py-24 text-black">
            <div className="text-center mb-20">
              <p className="font-semibold mb-3">App Features</p>
              <h1 className="text-3xl font-bold mb-5">3 Easy Steps</h1>
            </div>

            <div className="flex justify-center flex-wrap gap-6 w-[90%] max-w-[1200px] mx-auto max-md:flex-col max-md:gap-y-14">
              <div className="bg-[rgb(240,246,255)] w-[30%] max-md:w-[95%] mx-auto px-3 py-8 rounded-lg flex flex-col items-center justify-center gap-y-4 relative text-center">
                <div className="text-4xl text-white bg-[#4294E3] inline-block p-5 rounded-full absolute left-1/2 -translate-x-1/2 top-[-30px]">
                  <FaEye />
                </div>
                <h1 className="text-xl font-semibold mt-10">High Resolution</h1>
                <p className="font-medium text-[rgba(0,0,0,0.5)]">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
              </div>

              <div className="bg-[rgb(240,246,255)] w-[30%] max-md:w-[95%] mx-auto px-3 py-8 rounded-lg flex flex-col items-center justify-center gap-y-4 relative text-center">
                <div className="text-4xl text-white bg-[#4294E3] inline-block p-5 rounded-full absolute left-1/2 -translate-x-1/2 top-[-30px]">
                  <FaEye />
                </div>
                <h1 className="text-xl font-semibold mt-10">High Resolution</h1>
                <p className="font-medium text-[rgba(0,0,0,0.5)]">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
              </div>

              <div className="bg-[rgb(240,246,255)] w-[30%] max-md:w-[95%] mx-auto px-3 py-8 rounded-lg flex flex-col items-center justify-center gap-y-4 relative text-center">
                <div className="text-4xl text-white bg-[#4294E3] inline-block p-5 rounded-full absolute left-1/2 -translate-x-1/2 top-[-30px]">
                  <FaEye />
                </div>
                <h1 className="text-xl font-semibold mt-10">High Resolution</h1>
                <p className="font-medium text-[rgba(0,0,0,0.5)]">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Testimonial Section */}
        {/* <section className="">
          <div className="py-24 text-black">
            <div className="text-center mb-20">
              <p className="font-semibold mb-3">Testimonial</p>
              <h1 className="text-3xl font-bold mb-5">What Say Our Clients!</h1>
            </div>

            <div className="flex justify-center flex-wrap gap-6 w-[90%] max-w-[1200px] mx-auto max-md:flex-col max-md:gap-y-14">
              <div className="bg-[rgb(240,246,255)] w-[30%] max-md:w-[95%] mx-auto px-3 py-8 rounded-lg flex flex-col items-start justify-center gap-y-4 relative">
                <div className="flex gap-x-5">
                  <div className="size-[70px]">
                    <img
                      src={ScreenShotImage}
                      alt=""
                      className="block rounded-lg w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold">Client Name</h2>
                    <p className="text-[rgba(0,0,0,0.5)] font-semibold">
                      Profession
                    </p>
                    <p>★★★★★★</p>
                  </div>
                </div>
                <p className="font-medium text-[rgba(0,0,0,0.5)]">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
              </div>

              <div className="bg-[rgb(240,246,255)] w-[30%] max-md:w-[95%] mx-auto px-3 py-8 rounded-lg flex flex-col items-start justify-center gap-y-4 relative">
                <div className="flex gap-x-5">
                  <div className="size-[70px]">
                    <img
                      src={ScreenShotImage}
                      alt=""
                      className="block rounded-lg w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold">Client Name</h2>
                    <p className="text-[rgba(0,0,0,0.5)] font-semibold">
                      Profession
                    </p>
                    <p>★★★★★★</p>
                  </div>
                </div>
                <p className="font-medium text-[rgba(0,0,0,0.5)]">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
              </div>

              <div className="bg-[rgb(240,246,255)] w-[30%] max-md:w-[95%] mx-auto px-3 py-8 rounded-lg flex flex-col items-start justify-center gap-y-4 relative">
                <div className="flex gap-x-5">
                  <div className="size-[70px]">
                    <img
                      src={ScreenShotImage}
                      alt=""
                      className="block rounded-lg w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold">Client Name</h2>
                    <p className="text-[rgba(0,0,0,0.5)] font-semibold">
                      Profession
                    </p>
                    <p>★★★★★★</p>
                  </div>
                </div>
                <p className="font-medium text-[rgba(0,0,0,0.5)]">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Footer */}
        {/* <footer className="bg-[#4294E3]">
          <div className="w-full">
            <img src={BGTop} alt="" className="w-full" />
          </div>
          <div className="flex justify-between max-lg:gap-y-14 flex-wrap max-w-[1100px] mx-auto pb-24 p-5">
            <div className="flex flex-col gap-y-5 w-1/5 max-lg:w-2/5 max-md:w-full">
              <h2 className="text-2xl font-semibold">Address</h2>
              <div className="flex items-center gap-x-2 font-semibold">
                <IoLocationSharp />
                <p>123 Street, New York, USA</p>
              </div>

              <div className="flex items-center gap-x-2 font-semibold">
                <FaPhoneAlt />
                <p>+012 345 67890</p>
              </div>

              <div className="flex items-center gap-x-2 font-semibold">
                <FaEnvelope />
                <p>info@example.com</p>
              </div>

              <div className="flex items-center gap-x-3 font-semibold">
                <Link
                  to=""
                  className="border-[1px] p-3 rounded-full hover:bg-white hover:text-[rgb(66,148,227)]"
                >
                  <FaXTwitter />
                </Link>
                <Link
                  to=""
                  className="border-[1px] p-3 rounded-full hover:bg-white hover:text-[rgb(66,148,227)]"
                >
                  <GrFacebookOption />
                </Link>
                <Link
                  to=""
                  className="border-[1px] p-3 rounded-full hover:bg-white hover:text-[rgb(66,148,227)]"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to=""
                  className="border-[1px] p-3 rounded-full hover:bg-white hover:text-[rgb(66,148,227)]"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-y-5 w-1/5 max-lg:w-2/5 max-md:w-full">
              <h2 className="text-2xl font-semibold">Quick Link</h2>
              <Link to="" className="flex items-center gap-x-1 font-semibold">
                <MdChevronRight className="text-xl" />
                <p>About Us</p>
              </Link>

              <Link to="" className="flex items-center gap-x-1 font-semibold">
                <MdChevronRight className="text-xl" />
                <p>Contact Us</p>
              </Link>

              <Link to="" className="flex items-center gap-x-1 font-semibold">
                <MdChevronRight className="text-xl" />
                <p>Privacy Policy</p>
              </Link>

              <Link to="" className="flex items-center gap-x-1 font-semibold">
                <MdChevronRight className="text-xl" />
                <p>Terms & Conditions</p>
              </Link>
            </div>

            <div className="flex flex-col gap-y-5 w-1/5 max-lg:w-2/5 max-md:w-full">
              <h2 className="text-2xl font-semibold">Popular Link</h2>
              <Link to="" className="flex items-center gap-x-1 font-semibold">
                <MdChevronRight className="text-xl" />
                <p>About Us</p>
              </Link>

              <Link to="" className="flex items-center gap-x-1 font-semibold">
                <MdChevronRight className="text-xl" />
                <p>Contact Us</p>
              </Link>

              <Link to="" className="flex items-center gap-x-1 font-semibold">
                <MdChevronRight className="text-xl" />
                <p>Privacy Policy</p>
              </Link>

              <Link to="" className="flex items-center gap-x-1 font-semibold">
                <MdChevronRight className="text-xl" />
                <p>Terms & Conditions</p>
              </Link>
            </div>

            <div className="flex flex-col gap-y-5 w-1/5 max-lg:w-2/5 max-md:w-full">
              <h2 className="text-2xl font-semibold">Quick Link</h2>
              <p className="font-semibold">
                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                Curabitur facilisis ornare velit non vulpu
              </p>
            </div>
          </div>
        </footer> */}

        

      </main>
    </main>
  );
};

export default TestDesignModal;
