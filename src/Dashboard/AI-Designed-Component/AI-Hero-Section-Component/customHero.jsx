import React, { useContext, useState, useEffect } from "react";
import { DashContext } from "../../DashboardChecker/DashboardContext";
import PromptUpdater from "../Prompt-Updater/PromptUpdater";

export const HeroOne = () => {
  const text = PromptUpdater();

  return (
    <>
      <section className="text-black my-5">
        <h1 className="text-5xl text-[rgb(33,37,41)] PC:text-6xl font-extrabold text-center adamina-regular smallDevice:text-4xl phone:max-w-[350px] tablet:max-w-[400px] max-w-[500px] mx-auto my-3">
          {text.prompt}
        </h1>

        <p className="text-xl text-[rgb(52,58,64)] font-extrabold text-center adamina-regular phone:max-w-[350px] tablet:max-w-[400px] max-w-[500px] mx-auto">
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
      <section className="text-black mb-3 flex justify-between mobile:flex-col px-5">
        <div className="w-[45%] mobile:w-full mt-9">
          <h1 className="text-5xl text-[rgb(33,37,41)] font-extrabold text-center adamina-regular smallDevice:text-4xl phone:max-w-[350px] tablet:max-w-[400px] max-w-[500px] mx-auto mb-3">
            {text.prompt}
          </h1>

          <p className="text-xl text-[rgb(52,58,64)] font-extrabold text-center adamina-regular phone:max-w-[350px] tablet:max-w-[400px] max-w-[500px] mx-auto">
            {text.description}
          </p>
        </div>

        <div className="bg-[rgb(24,24,27)] w-[45%] mobile:w-full h-[400px] my-5 p-3 rounded-lg">
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
      <section className="text-black mb-3 flex flex-row-reverse justify-between mobile:flex-col px-5">
        <div className="w-[45%] mobile:w-full mt-9">
          <h1 className="text-4xl text-[rgb(33,37,41)] font-extrabold text-center adamina-regular smallDevice:text-4xl phone:max-w-[350px] tablet:max-w-[400px] max-w-[500px] mx-auto mb-3">
            {text.prompt}
          </h1>

          <p className="text-xl text-[rgb(52,58,64)] font-extrabold text-center adamina-regular phone:max-w-[350px] tablet:max-w-[400px] max-w-[500px] mx-auto">
            {text.description}
          </p>
        </div>

        <div className="bg-[rgb(24,24,27)] w-[45%] mobile:w-full h-[400px] my-5 p-3 rounded-lg">
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
