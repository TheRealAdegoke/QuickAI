import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../Pages/AuthPages/AuthChecker/AuthContext";
import { IoMdArrowRoundUp } from "react-icons/io";
import { WiStars } from "react-icons/wi";

const AIGenerator = () => {
  const { closeSideNav } = useContext(AuthContext);
  const location = useLocation();
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typewriterStrings = [
      "Dating App for people who love to travel",
      "Craft Coffee Shop and Roastery",
      "Dog sitting app for corgis",
      "Drone Photography Service",
    ];

    const intervalId = setInterval(() => {
      const currentString = typewriterStrings[currentIndex];
      if (typedText !== currentString) {
        const nextChar = currentString.charAt(typedText.length);
        setTypedText((prevTypedText) => prevTypedText + nextChar);
      } else {
        setTimeout(() => {
          setCurrentIndex(
            (prevIndex) => (prevIndex + 1) % typewriterStrings.length
          );
          setTypedText("");
        }, 450); // Delay before moving to the next string
      }
    }, 100); // Typing speed

    return () => clearInterval(intervalId);
  }, [currentIndex, typedText]);

  return (
    <>
      <section
        className={`${
          location.pathname !== "/home" ? "hidden" : "block"
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
              <button className="block border-zinc-600 border-[1px] p-4 rounded-t-[20px] w-[90%] max-w-[350px] smallDevice:max-w-[800px] hover:bg-[rgb(20,21,24)] cursor-pointer phone:rounded-[10px]">
                <p className="text-[15px] font-medium">Smart Weeding Robot</p>
              </button>

              <button className="block border-zinc-600 border-[1px] p-4 rounded-t-[20px] w-[90%] max-w-[350px] smallDevice:max-w-[800px] hover:bg-[rgb(20,21,24)] cursor-pointer phone:rounded-[10px]">
                <p className="text-[15px] font-medium">
                  AI-Powered Personal Assistant App
                </p>
              </button>

              <button className="block border-zinc-600 border-[1px] p-4 rounded-b-[20px] w-[90%] max-w-[350px] smallDevice:max-w-[800px] hover:bg-[rgb(20,21,24)] cursor-pointer phone:hidden">
                <p className="text-[15px] font-medium">
                  Online Coding Bootcamp
                </p>
              </button>

              <button className="block border-zinc-600 border-[1px] p-4 rounded-b-[20px] w-[90%] max-w-[350px] smallDevice:max-w-[800px] hover:bg-[rgb(20,21,24)] cursor-pointer phone:hidden">
                <p className="text-[15px] font-medium">
                  Virtual Reality Fitness Classes
                </p>
              </button>
            </div>

            <div
              className={`${
                closeSideNav ? "tablet:max-w-[500px]" : ""
              } glowing-light w-[90%] max-w-[800px] phone:max-w-[500px] mx-auto border-zinc-600 border-[1px] rounded-[10px] flex justify-between items-center pr-3`}
            >
              <form action="" className="relative w-[80%] phone:w-[90%]">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder={typedText}
                  className="bg-transparent border-none outline-none text-xl w-full h-[66px] pl-4 rounded-[8px]"
                />
              </form>
              <button className={`my-2 ml-2`}>
                {window.innerWidth < 766 ? (
                  <span className="block bg-[rgb(201,209,217)] rounded-[8px] p-2 text-[rgb(9,11,14)]">
                    <IoMdArrowRoundUp />
                  </span>
                ) : (
                  <span className="flex items-center gap-[2px] bg-[rgb(201,209,217)] rounded-[8px] py-3 px-3 text-[rgb(9,11,14)] text-lg font-semibold">
                    Generate <WiStars className="text-2xl" />
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIGenerator;
