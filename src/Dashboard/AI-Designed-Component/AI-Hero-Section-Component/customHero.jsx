import React, { useContext, useState, useEffect, createElement } from "react";
import { DashContext } from "../../DashboardChecker/DashboardContext";
import PromptUpdater from "../Prompt-Updater/PromptUpdater";
import modalLogo from "../../../assets/quickModalLogo.png";
import testImage from "../../../assets/Default-Card.jpg";

export const HeroOne = () => {
  const text = PromptUpdater();
  const { buttonIndex, WebButtonsArray } = useContext(DashContext);
  return (
    <>
      <section
        className="text-black py-8 max-lg:block flex justify-evenly rounded-[8px] w-[95%] mx-auto my-[20px]"
        style={{
          background:
            "radial-gradient(circle at 100% 100%, rgba(241,209,160,1) 21%, rgba(186,170,233,1) 50%, #e2dcf6 75%, rgba(183,178,238,1) 100%)",
        }}
      >
        <div className="max-lg:w-[95%] w-[40%] max-lg:pb-10 max-lg:mx-auto rounded-[8px] lg:px-5">
          <h1 className="text-5xl max-lg:text-center font-bold">
            {text.prompt}
          </h1>
          <p className="max-lg:text-center my-6 max-lg: max-lg:max-w-[400px] lg:max-w-[500px] max-lg:mx-auto max-lg:px-3">
            {text.description}
          </p>
          <div className="max-lg:flex justify-center">
            {buttonIndex !== undefined &&
              createElement(WebButtonsArray[buttonIndex])}
          </div>
        </div>

        <div className="max-lg:hidden w-[55%] m-auto grid grid-cols-3 gap-4">
          <div className="bg-white shadow-md h-[200px]  p-3 rounded-[8px] col-span-2">
            <img
              src={text.images[0]}
              alt={text.images[0]}
              className="rounded-[8px] w-full h-full object-cover"
            />
          </div>
          <div className="bg-white shadow-md h-[200px]  p-3 rounded-[8px]">
            <img
              src={text.images[1]}
              alt={text.images[1]}
              className="rounded-[8px] w-full h-full object-cover"
            />
          </div>
          <div className="bg-white shadow-md h-[200px]  p-3 rounded-[8px]">
            <img
              src={text.images[2]}
              alt={text.images[2]}
              className="rounded-[8px] w-full h-full object-cover"
            />
          </div>
          <div className="bg-white shadow-md h-[200px]  p-3 rounded-[8px] col-span-2">
            <img
              src={text.images[3]}
              alt={text.images[3]}
              className="rounded-[8px] w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export const HeroTwo = () => {
  const text = PromptUpdater();
  const { buttonIndex, WebButtonsArray } = useContext(DashContext);
  return (
    <>
      <section className="mb-[20px] py-10 px-5 bg-[rgb(26,26,26)]">
        <div className="flex justify-center gap-10 max-lg:flex-col lg:max-w-[]">
          <div className="max-lg:hidden w-[50%]">
            <h1 className="text-6xl text-white font-bold max-w-[500px]">
              {text.prompt}
            </h1>

            <div className="w-[85%] grid grid-cols-3 gap-4 my-10">
              <div className="bg-[rgba(0,0,0,0.5)] shadow-md h-[250px]  p-3 rounded-[8px] col-span-3">
                <img
                  src={text.images[0]}
                  alt={text.images[0]}
                  className="rounded-[8px] w-full h-full object-cover"
                />
              </div>
              <div className="bg-[rgba(0,0,0,0.5)] shadow-md h-[200px]  p-3 rounded-[8px]">
                <img
                  src={text.images[1]}
                  alt={text.images[1]}
                  className="rounded-[8px] w-full h-full object-cover"
                />
              </div>
              <div className="bg-[rgba(0,0,0,0.5)] shadow-md h-[200px]  p-3 rounded-[8px]">
                <img
                  src={text.images[2]}
                  alt={text.images[2]}
                  className="rounded-[8px] w-full h-full object-cover"
                />
              </div>
              <div className="bg-[rgba(0,0,0,0.5)] shadow-md h-[200px]  p-3 rounded-[8px]">
                <img
                  src={text.images[3]}
                  alt={text.images[3]}
                  className="rounded-[8px] w-full h-full object-cover"
                />
              </div>
              <div className="bg-[rgba(0,0,0,0.5)] shadow-md h-[250px]  p-3 rounded-[8px] col-span-3">
                <img
                  src={text.images[4]}
                  alt={text.images[4]}
                  className="rounded-[8px] w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="max-lg:max-w-[800px] max-lg:w-[95%] max-lg:mx-auto w-[50%]">
            <img
              src={text.images[5]}
              alt={text.images[5]}
              className="block max-lg:w-[95%] w-full h-[600px] max-lg:h-[400px] max-lg:max-w-[800px]"
            />
            <p className="my-5 max-lg:max-w-[400px]">{text.description}</p>
            {buttonIndex !== undefined &&
              createElement(WebButtonsArray[buttonIndex])}
          </div>
        </div>
      </section>
    </>
  );
};

export const HeroThree = () => {
  const text = PromptUpdater();
  const { buttonIndex, WebButtonsArray } = useContext(DashContext);
  return (
    <>
      <section
        className="max-md:h-[600px] bg-cover bg-no-repeat lg:mb-40 mb-5"
        style={{ backgroundImage: `url(${text.images[0]})` }}
      >
        <div className="bg-[rgba(0,0,0,0.5)] h-full relative pb-[10%]">
          <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start">
            <div className="bg-[rgba(30,72,111,0.8)] w-[80%] max-w-[500px] max-md:h-[450px] lg:min-h-[350px] lg:ml-20 px-6 py-12 my-8">
              <h1 className="text-5xl max-md:text-3xl text-white font-bold">
                {text.prompt}
              </h1>
              <p className="py-4 max-w-[400px] font-medium">
                {text.description}
              </p>
              {buttonIndex !== undefined &&
                createElement(WebButtonsArray[buttonIndex])}
            </div>
          </div>

          <div className="max-lg:hidden flex gap-5 justify-center absolute bottom-[-25%] w-full">
            <div className="bg-white shadow-lg text-black w-[20%] p-2 rounded-md  min-h-[150px] max-h-[200px]">
              <img
                src={text.images[1]}
                alt={text.images[1]}
                className="w-full rounded-md h-full"
              />
            </div>

            <div className="bg-white shadow-lg text-black w-[20%] p-2 rounded-md  min-h-[150px] max-h-[200px]">
              <img
                src={text.images[2]}
                alt={text.images[2]}
                className="w-full rounded-md h-full"
              />
            </div>

            <div className="bg-white shadow-lg text-black w-[20%] p-2 rounded-md  min-h-[150px] max-h-[200px]">
              <img
                src={text.images[3]}
                alt={text.images[3]}
                className="w-full rounded-md h-full"
              />
            </div>

            <div className="bg-white shadow-lg text-black w-[20%] p-2 rounded-md  min-h-[150px] max-h-[200px]">
              <img
                src={text.images[4]}
                alt={text.images[4]}
                className="w-full rounded-md h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const HeroFour = () => {
  const text = PromptUpdater();
  const { buttonIndex, WebButtonsArray } = useContext(DashContext);
  return (
    <>
      <section className="h-[600px] max-lg:h-[750px] my-5 flex lg:gap-8 lg:justify-evenly max-lg:flex-col max-w-[1200px] mx-auto lg:pl-5">
        <div className="text-[rgb(33,37,41)] w-[40%] max-lg:w-[90%] max-w-[500px] mx-auto lg:pt-16">
            <h1 className="font-bold xl:text-5xl text-3xl mb-4">
              {text.prompt}
            </h1>
          <p className="font-medium">{text.description}</p>
          {buttonIndex !== undefined &&
            createElement(WebButtonsArray[buttonIndex])}
        </div>
        <div className="relative w-[55%] h-full max-lg:w-full max-lg:max-w-[500px] max-lg:mx-auto">
          <div className="w-[250px] h-[400px] bg-[rgb(33,37,41)] rounded-[35px] px-3 pt-3 mb-4 absolute top-2 max-lg:left-[35%] max-lg:transform max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 max-lg:top-1/2 max-xl:top-2 max-xl:right-32 z-20">
            <img
              src={text.images[0]}
              alt={text.images[0]}
              className="h-[350px] rounded-[35px] object-cover"
            />
          </div>
          <div className="w-[260px] h-[480px] bg-[rgb(33,37,41)] rounded-[35px] px-3 pt-3 absolute max-lg:left-[60%] max-lg:transform max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 max-lg:top-1/2 top-[7%] right-0 xl:right-[28%] z-10">
            <img
              src={text.images[1]}
              alt={text.images[1]}
              className="h-[420px] rounded-[35px] object-cover"
            />
          </div>
          <div className="w-[260px] h-[450px] bg-[rgb(33,37,41)] rounded-[35px] px-3 py-3 absolute top-14 right-5 max-xl:hidden">
            <img
              src={text.images[2]}
              alt={text.images[2]}
              className="h-full rounded-[35px] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export const HeroFive = () => {
  const text = PromptUpdater();
  const { buttonIndex, WebButtonsArray } = useContext(DashContext);
  return (
    <>
      <section className="my-5 max-w-[1000px] mx-auto flex justify-center max-lg:flex-col">
        <div className="text-[rgb(33,37,41)] w-[45%] max-lg:w-[90%] max-w-[500px] mx-auto lg:pt-16">
          <h1 className="font-bold xl:text-5xl text-3xl mb-4">{text.prompt}</h1>
          <p className="font-medium">{text.description}</p>
          {buttonIndex !== undefined &&
            createElement(WebButtonsArray[buttonIndex])}
        </div>

        <div className="w-[45%] max-lg:w-full mt-10">
          <div className="w-[260px] mx-auto h-[480px] bg-[rgb(33,37,41)] rounded-[35px] px-3 pt-3">
            <img
              src={text.images[0]}
              alt={text.images[0]}
              className="h-[420px] rounded-[35px] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export const HeroSix = () => {
  const text = PromptUpdater();
  const { buttonIndex, WebButtonsArray } = useContext(DashContext);
  return (
    <>
      <section className="my-5 max-w-[1000px] mx-auto flex flex-row-reverse justify-center max-lg:flex-col">
        <div className="text-[rgb(33,37,41)] w-[45%] max-lg:w-[90%] max-w-[500px] mx-auto lg:pt-16">
          <h1 className="font-bold xl:text-5xl text-3xl mb-4">{text.prompt}</h1>
          <p className="font-medium">{text.description}</p>
          {buttonIndex !== undefined &&
            createElement(WebButtonsArray[buttonIndex])}
        </div>

        <div className="w-[45%] max-lg:w-full mt-10">
          <div className="w-[260px] mx-auto h-[480px] bg-[rgb(33,37,41)] rounded-[35px] px-3 pt-3">
            <img
              src={text.images[0]}
              alt={text.images[0]}
              className="h-[420px] w-full rounded-[35px] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export const HeroSeven = () => {
  const text = PromptUpdater();
  const { buttonIndex, WebButtonsArray } = useContext(DashContext);
  return (
    <>
      <section className="my-5 max-w-[1200px] mx-auto flex justify-center max-lg:flex-col-reverse">
        <div className="text-[rgb(33,37,41)] w-[45%] max-lg:w-[90%] max-w-[500px] mx-auto lg:pt-16">
          <h1 className="font-bold xl:text-5xl text-3xl mb-4">{text.prompt}</h1>
          <p className="font-medium">{text.description}</p>
          {buttonIndex !== undefined &&
            createElement(WebButtonsArray[buttonIndex])}
        </div>

        <div className="w-[45%] max-lg:w-full mb-10">
          <div className="mx-auto w-[90%] max-w-[500px] h-[500px] bg-[rgb(33,37,41)] px-3 py-3">
            <img
              src={text.images[0]}
              alt={text.images[0]}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export const HeroEight = () => {
  const text = PromptUpdater();
  const { buttonIndex, WebButtonsArray } = useContext(DashContext);
  return (
    <>
      <section className="my-5 max-w-[1200px] mx-auto flex flex-row-reverse justify-center max-lg:flex-col-reverse">
        <div className="text-[rgb(33,37,41)] w-[45%] max-lg:w-[90%] max-w-[500px] mx-auto lg:pt-16">
          <h1 className="font-bold xl:text-5xl text-3xl mb-4">{text.prompt}</h1>
          <p className="font-medium">{text.description}</p>
          {buttonIndex !== undefined &&
            createElement(WebButtonsArray[buttonIndex])}
        </div>

        <div className="w-[45%] max-lg:w-full mb-10">
          <div className="mx-auto w-[90%] max-w-[500px] h-[500px] bg-[rgb(33,37,41)] px-3 py-3">
            <img
              src={text.images[0]}
              alt={text.images[0]}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export const HeroNine = () => {
  const text = PromptUpdater();
  const { buttonIndex, WebButtonsArray } = useContext(DashContext);
  return (
    <>
      <section className="my-5 max-w-[1200px] mx-auto flex justify-center gap-5 max-lg:flex-col">
        <div className="w-[45%] max-lg:w-full">
          <div className="mx-auto w-[90%] max-w-[500px] h-[500px] bg-[rgb(33,37,41)] px-3 py-3">
            <img
              src={text.images[0]}
              alt={text.images[0]}
              className="object-cover h-full w-full"
            />
          </div>
        </div>

        <div className="text-[rgb(33,37,41)] w-[45%] max-lg:w-[90%] max-w-[500px] mx-auto lg:pt-16 max-lg:my-10">
          <h1 className="font-bold xl:text-4xl xl:text-center text-3xl mb-4">
            {text.prompt}
          </h1>
          <p className="font-medium">
            {text.description}
          </p>
          {buttonIndex !== undefined && createElement(WebButtonsArray[buttonIndex])}
        </div>

        <div className="w-[45%] max-lg:w-full mb-10">
          <div className="mx-auto w-[90%] max-w-[500px] h-[500px] bg-[rgb(33,37,41)] px-3 py-3">
            <img
              src={text.images[1]}
              alt={text.images[1]}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export const HeroTen = () => {
  return (
    <>
      <section
        className="text-black py-8 max-lg:block flex justify-evenly rounded-[8px] w-[95%] mx-auto my-[20px]"
        style={{
          background:
            "radial-gradient(circle at 100% 100%, rgba(241,209,160,1) 21%, rgba(186,170,233,1) 50%, #e2dcf6 75%, rgba(183,178,238,1) 100%)",
        }}
      >
        <div className="max-lg:w-[95%] w-[40%] max-lg:pb-10 max-lg:mx-auto rounded-[8px] lg:px-5">
          <h1 className="text-5xl max-lg:text-center font-bold">QuickUI</h1>
          <p className="max-lg:text-center my-6 max-lg: max-lg:max-w-[400px] lg:max-w-[500px] max-lg:mx-auto max-lg:px-3">
            QuickUI
          </p>
          <div className="max-lg:flex justify-center">QuickUI</div>
        </div>

        <div className="max-lg:hidden w-[55%] m-auto grid grid-cols-3 gap-4">
          <div className="bg-white shadow-md h-[200px]  p-3 rounded-[8px] col-span-2">
            <img
              src={testImage}
              alt={testImage}
              className="rounded-[8px] w-full h-full object-cover"
            />
          </div>
          <div className="bg-white shadow-md h-[200px]  p-3 rounded-[8px]">
            <img
              src={testImage}
              alt={testImage}
              className="rounded-[8px] w-full h-full object-cover"
            />
          </div>
          <div className="bg-white shadow-md h-[200px]  p-3 rounded-[8px]">
            <img
              src={testImage}
              alt={testImage}
              className="rounded-[8px] w-full h-full object-cover"
            />
          </div>
          <div className="bg-white shadow-md h-[200px]  p-3 rounded-[8px] col-span-2">
            <img
              src={testImage}
              alt={testImage}
              className="rounded-[8px] w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};