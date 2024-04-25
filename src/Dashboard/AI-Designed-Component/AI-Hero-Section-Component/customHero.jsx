import React, { useContext, useState, useEffect } from "react";
import { DashContext } from "../../DashboardChecker/DashboardContext";
import PromptUpdater from "../Prompt-Updater/PromptUpdater";
import modalLogo from "../../../assets/quickModalLogo.png";
import testImage from "../../../assets/Default-Card.jpg";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export const HeroOne = () => {
  const text = PromptUpdater();

  return (
    <>
      <section className="text-black my-5">
        <h1 className="text-5xl text-[rgb(33,37,41)] lg:text-6xl font-extrabold text-center  max-[499px]:text-4xl phone:max-w-[350px] max-lg:max-w-[400px] max-w-[500px] mx-auto my-3">
          {text.prompt}
        </h1>

        <p className="text-xl text-[rgb(52,58,64)] font-medium text-center phone:max-w-[350px] max-lg:max-w-[400px] max-w-[500px] mx-auto">
          {text.description}
        </p>

        <div className="bg-[rgb(24,24,27)] w-[90%] max-w-[800px] h-[400px] mx-auto my-5 p-3 rounded-lg">
          <img
            src={text.images}
            alt=""
            className="block w-full max-w-[800px] h-[375px] rounded-lg object-cover"
          />
        </div>
      </section>
    </>
  );
};

export const HeroTwo = () => {
  const text = PromptUpdater();

  return (
    <>
      <section className="text-black mb-3 flex justify-between max-lg:flex-col px-5">
        <div className="w-[45%] max-lg:w-full mt-9">
          <h1 className="text-5xl text-[rgb(33,37,41)] font-extrabold text-center max-[499px]:text-4xl phone:max-w-[350px] max-lg:max-w-[400px] max-w-[500px] mx-auto mb-3">
            {text.prompt}
          </h1>

          <p className="text-xl text-[rgb(52,58,64)] font-medium text-center phone:max-w-[350px] max-lg:max-w-[400px] max-w-[500px] mx-auto">
            {text.description}
          </p>
        </div>

        <div className="bg-[rgb(24,24,27)] w-[45%] max-lg:w-full h-[400px] my-5 p-3 rounded-lg">
          <img
            src={text.images}
            alt=""
            className="block w-full max-w-[800px] h-[375px] rounded-lg object-cover"
          />
        </div>
      </section>
    </>
  );
};

export const HeroThree = () => {
  const text = PromptUpdater();

  return (
    <>
      <section className="text-black mb-3 flex flex-row-reverse justify-between max-lg:flex-col px-5">
        <div className="w-[45%] max-lg:w-full mt-9">
          <h1 className="text-4xl text-[rgb(33,37,41)] font-extrabold text-center max-[499px]:text-4xl phone:max-w-[350px] max-lg:max-w-[400px] max-w-[500px] mx-auto mb-3">
            {text.prompt}
          </h1>

          <p className="text-xl text-[rgb(52,58,64)] font-medium text-center phone:max-w-[350px] max-lg:max-w-[400px] max-w-[500px] mx-auto">
            {text.description}
          </p>
        </div>

        <div className="bg-[rgb(24,24,27)] w-[45%] max-lg:w-full h-[400px] my-5 p-3 rounded-lg">
          <img
            src={text.images}
            alt=""
            className="block w-full max-w-[800px] h-[375px] rounded-lg object-cover"
          />
        </div>
      </section>
    </>
  );
};

export const HeroFour = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section
        className="text-black py-5"
        style={{
          background: isMobile
            ? `linear-gradient(to bottom, rgb(26,46,53) 30%, rgb(28,187,180) 70%)`
            : `linear-gradient(to right, rgb(26,46,53) 50%, rgb(28,187,180) 50%)`,
        }}
      >
        <header>
          <nav className="bg-transparent relative">
            <div className="flex justify-between items-center px-5">
              <Link to="/" className="flex items-center gap-3">
                <img
                  src={modalLogo}
                  alt={modalLogo}
                  className="block w-[35px]"
                />
                <h3 className="text-white font-bold text-2xl">Spering</h3>
              </Link>

              <div
                className={`${
                  toggleNav
                    ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    : "left-full"
                } absolute max-lg:hidden transform transition-transform duration-300 ease-out`}
              >
                <ul className={`flex gap-5 text-white font-medium`}>
                  <li>
                    <Link>Home</Link>
                  </li>
                  <li>
                    <Link>About</Link>
                  </li>
                  <li>
                    <Link>Work</Link>
                  </li>
                  <li>
                    <Link>Category</Link>
                  </li>
                </ul>
              </div>

              <button
                className="text-white text-3xl cursor-pointer z-50"
                onClick={() => {
                  setToggleNav(!toggleNav);
                }}
              >
                {toggleNav ? <IoClose /> : <FaBarsStaggered />}
              </button>
            </div>

            <div className="">
              <ul
                className={`${
                  toggleNav ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                } flex flex-col justify-center items-center gap-5 text-white font-medium lg:hidden transition-all duration-500 my-10`}
              >
                <li className={`${toggleNav ? "block" : "hidden"}`}>
                  <Link>Home</Link>
                </li>
                <li className={`${toggleNav ? "block" : "hidden"}`}>
                  <Link>About</Link>
                </li>
                <li className={`${toggleNav ? "block" : "hidden"}`}>
                  <Link>Work</Link>
                </li>
                <li className={`${toggleNav ? "block" : "hidden"}`}>
                  <Link>Category</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <div className="my-8 flex items-center  max-lg:flex-col gap-8 lg:px-5">
          <div className="flex flex-col max-lg:text-center max-lg:max-w-[300px] gap-5 w-1/2 max-lg:w-full px-4">
            <h1 className="text-white text-[2.5rem] max-lg:text-[2.2rem] font-bold">
              YOU CAN HIRE FREELANCER HERE
            </h1>
            <p className="text-white font-medium">
              It is a long established fact that a reader will be distracted by
              the readable content of a page
            </p>
            <div className="flex gap-4 max-lg:flex-col items-center">
              <button className="bg-[rgb(255,79,90)] p-3 text-white w-[200px] hover:bg-transparent hover:border-[rgb(255,79,90)] border-[rgb(255,79,90)] hover:border-[1px] hover:text-[rgb(255,79,90)] duration-300 ease-in-out">
                About Us
              </button>
              <button className="bg-white p-3 text-black w-[200px] hover:bg-transparent hover:border-white border-white hover:border-[1px] hover:text-white duration-300 ease-in-out">
                Get A Quote
              </button>
            </div>
          </div>

          <div className="bg-[rgba(0,0,0,0.8)] w-1/2 max-lg:w-[95%] max-lg:max-w-[450px] p-3 rounded-lg">
            <img src={testImage} alt={testImage} />
          </div>
        </div>
      </section>
    </>
  );
};

export const HeroFive = () => {
  return (
    <>
      <section
        className="text-black py-8"
      >
        <h1 className="text-center text-[3rem] font-light">
          Homemade Restaurant
        </h1>
        <div
          className="h-[400px] my-5 bg-cover"
          style={{ backgroundImage: `url(${testImage})` }}
        ></div>
        <p className="text-center text-xl max-w-[700px] mx-auto font-normal mt-5">
          Make it something to look forward to with stacks of pancakes, healthy
          smoothie bowls or perfect poached eggs.{" "}
        </p>

        <button className="font-bold block w-[200px] my-12 mx-auto border-black border-[2px] py-4 text-xl hover:bg-black hover:text-white">
          Learn More
        </button>
      </section>
    </>
  );
};
