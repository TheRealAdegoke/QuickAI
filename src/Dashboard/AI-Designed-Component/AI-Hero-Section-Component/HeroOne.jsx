import React, { useContext } from 'react'
import DefaultImage from "../../../assets/Default-Card.jpg";
import { DashContext } from '../../DashboardChecker/DashboardContext';
import { useTypewriter, Typewriter } from "react-simple-typewriter";

const HeroOne = () => {
  const { heroPrompt, heroDescription } =
    useContext(DashContext);

  return (
    <>
      <main className="text-black my-5">
        <h1 className="text-5xl text-[rgb(33,37,41)] PC:text-6xl font-extrabold text-center adamina-regular smallDevice:text-4xl phone:max-w-[350px] tablet:max-w-[400px] max-w-[500px] mx-auto my-3">
          <Typewriter
            words={[heroPrompt]}
            loop={1}
            cursor
            cursorStyle=""
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>

        <p className="text-xl text-[rgb(52,58,64)] font-extrabold text-center adamina-regular phone:max-w-[350px] tablet:max-w-[400px] max-w-[500px] mx-auto">
          <Typewriter
            words={[heroDescription]}
            loop={1}
            cursor
            cursorStyle=""
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>

        <div className="bg-[rgb(24,24,27)] w-[90%] max-w-[800px] h-[400px] mx-auto my-5 p-3 rounded-lg">
          <img
            src={DefaultImage}
            alt=""
            className="block w-full max-w-[800px] h-[375px] rounded-lg object-cover"
          />
        </div>
      </main>
    </>
  );
}

export default HeroOne