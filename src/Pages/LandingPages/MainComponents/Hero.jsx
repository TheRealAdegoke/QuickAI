import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DashContext } from "../../../Dashboard/DashboardChecker/DashboardContext";
import { placeholderText, randomIdeas } from "../../../Dashboard/Arrays/Arrays";
import { useTypewriter } from "react-simple-typewriter";
import { IoMdArrowRoundUp } from "react-icons/io";
import { WiStars } from "react-icons/wi";
import { ImSpinner6 } from "react-icons/im";
import HeroDesignModal from "./HeroDesignModal";
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, []);

  return (
    <>
      <section className="pt-[150px] max-lg:pt-[100px]">
        <div className="flex items-center justify-between max-lg:flex-col px-10 max-lg:max-w-[800px] mx-auto max-w-[1500px] mb-10">
          <div
            data-aos="fade-right"
            className="w-[50%] max-lg:w-full max-lg:mb-10 max-w-[700px]"
          >
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

          <div data-aos="fade-left" className={`w-[45%] max-lg:w-full`}>
            {showDesignModal ? (
              <div data-aos="zoom-in">
                <Link
                  to="/register"
                  type="submit"
                  className="text-black text-center bg-white w-[200px] hover:bg-[rgba(255,255,255,0.9)] block p-3 rounded-[5px] font-medium my-5 lg:hidden"
                >
                  Save Design
                </Link>
                <div className="overflow-y-auto w-full h-[600px] bg-white shadow-xl rounded-lg lg:hidden">
                  <HeroDesignModal />
                </div>
              </div>
            ) : (
              <div className="bg-white">
                <div className="sm:hidden">
                  <video
                    width="100%"
                    height="auto"
                    loop
                    autoPlay
                    muted
                    className=""
                  >
                    <source
                      src="https://res.cloudinary.com/dpyp7innp/video/upload/v1717065164/phone_gif_kd1xia.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )}

            <div className="max-sm:hidden">
              <div className="mx-auto relative hidden lg:block">
                <div className="bg-[linear-gradient(314deg,#212529_70%,#484e53_100%)] w-full max-md:w-[80%] lg:w-[85%] max-md:max-w-[400px] h-[300px] max-xl:h-[250px] mx-auto rounded-t-2xl flex justify-center items-center px-2">
                  <video
                    width="100%"
                    height="auto"
                    loop
                    autoPlay
                    muted
                    className=""
                  >
                    <source
                      src="https://res.cloudinary.com/dpyp7innp/video/upload/v1717065185/desktop_gif_fwxrfk.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div>
                  <div className="bg-[linear-gradient(0deg,#212529_0%,#484e53_100%)] w-full max-md:w-[100%] max-md:max-w-[500px] h-[20px] mx-auto rounded-b-xl">
                    <div className="bg-[#868e96] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] w-[100px] h-[10px] mx-auto rounded-b-xl"></div>
                  </div>
                </div>
              </div>

              <video
                width="100%"
                height="auto"
                loop
                autoPlay
                muted
                className={`${
                  showDesignModal ? "hidden" : "hidden max-lg:block"
                } `}
              >
                <source
                  src="https://res.cloudinary.com/dpyp7innp/video/upload/v1717065185/desktop_gif_fwxrfk.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {showDesignModal && (
          <div
            data-aos="zoom-in"
            className="max-lg:hidden w-[90%] max-w-[1450px] mx-auto h-[600px] flex flex-col items-end"
          >
            <Link
              to="/register"
              type="submit"
              className="text-black text-center bg-white w-[200px] hover:bg-[rgba(255,255,255,0.9)] block p-3 rounded-[5px] font-medium my-5"
            >
              Save Design
            </Link>
            <div className="overflow-y-auto bg-white shadow-xl rounded-lg w-full">
              <HeroDesignModal />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Hero;
