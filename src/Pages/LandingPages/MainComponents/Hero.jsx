import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DashContext } from "../../../Dashboard/DashboardChecker/DashboardContext";
import { placeholderText, randomIdeas } from "../../../Dashboard/Arrays/Arrays";
import { useTypewriter } from "react-simple-typewriter";
import { IoMdArrowRoundUp } from "react-icons/io";
import { WiStars } from "react-icons/wi";
import { ImSpinner6 } from "react-icons/im";
import DesignModal from "../../../Dashboard/AI-Designed-Component/AI-Design-Modal/DesignModal";

const Hero = () => {
  const {
    closeSideNav,
    showDesignModal,
    handleGeminiResponses,
    userInput,
    setUserInput,
    selectedIdea,
    setSelectedIdea,
    loading,
  } = useContext(DashContext);
  const [text] = useTypewriter({
    words: placeholderText,
    loop: 0,
  });

  const [deviceWidth, setDeviceWidth] = useState(undefined)

  useEffect(() => {
    setDeviceWidth(window.innerWidth >= 767)
  }, [])

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length >= selectedIdea.length) {
      setUserInput(value);
    } else {
      setSelectedIdea("");
      setUserInput(value);
    }
  };

  const handleprompt = async (e) => {
    e.preventDefault();
    try {
      await handleGeminiResponses();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <section className="pt-[120px] max-lg:pt-[100px] flex justify-between max-lg:flex-col px-10 max-lg:max-w-[800px] mx-auto max-w-[1500px] mb-32">
        <div className="w-[50%] max-lg:w-full max-lg:mb-10 max-w-[700px]">
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-left max-lg:text-center text-[2.85rem] max-lg:text-[2.85rem] max-md:text-[2rem] max-md:max-w-[600px] max-md:mx-auto capitalize font-extrabold max-[1305px]:text-[2rem]">
              Create website designs 10X faster with{" "}
              <span className="gradient-text">QuickUI</span>
            </h1>
            <p className="text-2xl text-[rgb(189,189,189)] font-semibold max-lg:text-center max-lg:max-w-[500px] max-lg:mx-auto">
              Design websites super fast with QuickUI! No more long hours
              coding.
            </p>
          </div>

          <div className="mt-10 max-w-[700px] max-lg:mx-auto">
            <form
              action=""
              className={`${
                closeSideNav ? "max-lg:max-w-[500px]" : ""
              } glowing-light lg:max-w-[630px] max-md:max-w-[500px] border-zinc-600 border-[1px] rounded-[10px] flex max-lg:mx-auto justify-between items-center pr-3`}
            >
              <input
                type="text"
                name=""
                id=""
                value={userInput || selectedIdea}
                onChange={handleChange}
                placeholder={text}
                className="bg-transparent border-none outline-none text-xl w-full h-[66px] pl-4 rounded-[8px]"
              />

              <button
                className={`my-2 ml-2`}
                type="submit"
                onClick={handleprompt}
                disabled={loading || userInput === ""}
              >
                {window.innerWidth < 766 ? (
                  <div
                    className={`${
                      userInput === ""
                        ? "input-btn-gradient-opacity cursor-not-allowed"
                        : "input-btn-gradient"
                    } block rounded-[8px] p-2 text-white`}
                  >
                    {loading ? (
                      <span>
                        <ImSpinner6 className="animate-spin text-2xl text-black block mx-auto" />
                      </span>
                    ) : (
                      <IoMdArrowRoundUp />
                    )}
                  </div>
                ) : (
                  <div
                    className={`${
                      userInput === ""
                        ? "input-btn-gradient-opacity cursor-not-allowed"
                        : "input-btn-gradient"
                    } input-btn-gradient rounded-[8px] py-3 px-3 text-white text-lg font-medium w-[120px]`}
                  >
                    {loading ? (
                      <span>
                        <ImSpinner6 className="animate-spin text-2xl text-black block mx-auto" />
                      </span>
                    ) : (
                      <span className="flex items-center gap-[2px]">
                        Generate <WiStars className="text-2xl" />
                      </span>
                    )}
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>

        <div
          className={`text-black bg-white shadow-xl w-[45%] max-lg:w-full h-[500px] overflow-y-auto rounded-lg`}
        >
          {showDesignModal ? (
            <DesignModal />
          ) : (
            <nav className={`bg-white w-full shadow-xl relative z-40 ${window.innerWidth > 767 ? "" : ""}`}>
              <div className={`flex justify-between items-center px-5`}>
                <div className="flex items-center gap-1 py-3">
                  <img
                    src="https://res.cloudinary.com/dpyp7innp/image/upload/v1715591674/ad53c5d6-b066-455b-a840-7c1c3538e430.png"
                    alt="Web logo"
                    className="w-[40px]"
                  />
                  <h1 className="font-semibold text-black">QuickUI</h1>
                </div>

                <label htmlFor="id-show-menu" className="show-menu lg:hidden">
                  <div className="text-2xl text-black cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="25"
                      height="25"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                    </svg>
                  </div>
                </label>
                <input
                  type="checkbox"
                  id="id-show-menu"
                  className="appearance-none hidden peer"
                  role="button"
                />

                <div
                  className={`text-black bg-white font-medium flex max-lg:flex-col items-center justify-between w-[60%] max-lg:absolute max-lg:left-0 top-14 max-lg:w-full max-lg:h-[89vh] max-lg:block opacity-0 align-middle invisible transition-all duration-75 peer-checked:visible peer-checked:opacity-100 lg:opacity-100 lg:visible`}
                >
                  <ul className="flex max-lg:flex-col max-lg:items-center max-lg:gap-0 gap-4">
                    <li className="hover:text-[rgba(255,0,0)] max-lg:mt-8">
                      <a href="">Login</a>
                    </li>
                    <li className="hover:text-[rgba(255,0,0)] max-lg:my-3">
                      <a href="">Login</a>
                    </li>
                    <li className="hover:text-[rgba(255,0,0)] max-lg:my-3">
                      <a href="">Login</a>
                    </li>
                  </ul>

                  <ul className="flex max-lg:flex-col max-lg:items-center max-lg:gap-0 gap-4  lg:items-center">
                    <li className="hover:text-[rgba(255,0,0)] max-lg:my-3">
                      <a href="">Login</a>
                    </li>
                    <li className="bg-[rgba(0,0,0,0.1)] py-2 px-5 max-lg:px-10 rounded hover:text-[rgba(255,0,0)] max-lg:my-3">
                      <a href="">Sign Up</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          )}
        </div>
      </section>
    </>
  );
};

export default Hero;
