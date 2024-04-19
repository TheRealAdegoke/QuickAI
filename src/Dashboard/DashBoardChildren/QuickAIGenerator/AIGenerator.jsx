import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IoMdArrowRoundUp } from "react-icons/io";
import { WiStars } from "react-icons/wi";
import { useTypewriter } from "react-simple-typewriter";
import { placeholderText, randomIdeas } from "../../Arrays/Arrays";
import { DashContext } from "../../DashboardChecker/DashboardContext";
import { ImSpinner6 } from "react-icons/im";

const AIGenerator = () => {
  const {
    closeSideNav,
    showDesignModal,
    handleGenerate,
    handleHeroPrompt,
    userInput,
    setUserInput,
    selectedIdea,
    setSelectedIdea,
    loading,
    handleHeroDescription,
    handleImagePrompt,
    setLoading,
    setShowDesignModal,
  } = useContext(DashContext);
  const location = useLocation();
  const [ideas, setIdeas] = useState([]);
  const [text] = useTypewriter({
    words: placeholderText,
    loop: {},
  });

  useEffect(() => {
    const randomIndices = Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * randomIdeas.length)
    );
    const randomIdeasArray = randomIndices.map((index) => randomIdeas[index]);
    setIdeas(randomIdeasArray);
  }, []);

  const handleIdeaClick = (idea) => {
    setSelectedIdea(idea);
    setUserInput("");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length >= selectedIdea.length) {
      setUserInput(value);
    } else {
      setSelectedIdea("");
      setUserInput(value);
    }
  };

  const handlePrompt = async (e) => {
    e.preventDefault();
    try {
      await handleHeroPrompt();
      await handleHeroDescription();
      await handleImagePrompt();
      await handleGenerate();
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <section
        className={`${location.pathname !== "/home" ? "hidden" : "block"} ${
          showDesignModal ? "hidden" : "block"
        } text-center mt-80 phone:mt-52 text-[rgb(201,209,217)] fixed max-w-[800px] w-[90%] bottom-5`}
      >
        <div className="input-container">
          <div className="">
            <p
              className={`${
                closeSideNav &&
                window.innerWidth > 766 &&
                window.innerWidth < 960
                  ? "hidden"
                  : ""
              } font-bold text-2xl phone:text-xl mb-8`}
            >
              Tell us what you need a website for!
            </p>
            <div
              className={`${
                closeSideNav &&
                window.innerWidth > 766 &&
                window.innerWidth < 960
                  ? "flex-col items-center"
                  : ""
              } flex flex-row flex-wrap justify-evenly gap-3 mb-8`}
            >
              <button
                className="block border-zinc-600 border-[1px] p-4 rounded-t-[20px] w-[90%] max-w-[350px] smallDevice:max-w-[800px] hover:bg-[rgb(20,21,24)] cursor-pointer phone:rounded-[10px]"
                onClick={() => handleIdeaClick(ideas[0])}
              >
                <p className="text-[15px] font-medium">{ideas[0]}</p>
              </button>

              <button
                className="block border-zinc-600 border-[1px] p-4 rounded-t-[20px] w-[90%] max-w-[350px] smallDevice:max-w-[800px] hover:bg-[rgb(20,21,24)] cursor-pointer phone:rounded-[10px]"
                onClick={() => handleIdeaClick(ideas[1])}
              >
                <p className="text-[15px] font-medium">{ideas[1]}</p>
              </button>

              <button
                className="block border-zinc-600 border-[1px] p-4 rounded-b-[20px] w-[90%] max-w-[350px] smallDevice:max-w-[800px] hover:bg-[rgb(20,21,24)] cursor-pointer phone:hidden"
                onClick={() => handleIdeaClick(ideas[2])}
              >
                <p className="text-[15px] font-medium">{ideas[2]}</p>
              </button>

              <button
                className="block border-zinc-600 border-[1px] p-4 rounded-b-[20px] w-[90%] max-w-[350px] smallDevice:max-w-[800px] hover:bg-[rgb(20,21,24)] cursor-pointer phone:hidden"
                onClick={() => handleIdeaClick(ideas[3])}
              >
                <p className="text-[15px] font-medium">{ideas[3]}</p>
              </button>
            </div>

            <div className="">
              <form
                action=""
                className={`${
                  closeSideNav ? "tablet:max-w-[500px]" : ""
                } glowing-light w-[90%] max-w-[800px] phone:max-w-[500px] mx-auto border-zinc-600 border-[1px] rounded-[10px] flex justify-between items-center pr-3`}
                onSubmit={handlePrompt}
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

                <button className={`my-2 ml-2`} type="submit">
                  {window.innerWidth < 766 ? (
                    <div className="block bg-[rgb(201,209,217)] rounded-[8px] p-2 text-[rgb(9,11,14)]">
                      {loading ? (
                        <span>
                          <ImSpinner6 className="animate-spin text-2xl text-black block mx-auto" />
                        </span>
                      ) : (
                        <IoMdArrowRoundUp />
                      )}
                    </div>
                  ) : (
                    <div className="bg-[rgb(201,209,217)] rounded-[8px] py-3 px-3 text-[rgb(9,11,14)] text-lg font-semibold w-[120px]">
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
        </div>
      </section>
    </>
  );
};

export default AIGenerator;
