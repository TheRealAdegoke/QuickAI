import React, { useContext, useState, useEffect } from "react";
import { DashContext } from "../../DashboardChecker/DashboardContext";
import PromptUpdater from "../Prompt-Updater/PromptUpdater";
import modalLogo from "../../../assets/quickModalLogo.png";
import testImage from "../../../assets/Default-Card.jpg";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

// export const HeroOne = () => {
//   const text = PromptUpdater();

//   return (
//     <>
//       <section className="text-black my-5">
//         <h1 className="text-5xl text-[rgb(33,37,41)] lg:text-6xl font-extrabold text-center  max-[499px]:text-4xl phone:max-w-[350px] max-lg:max-w-[400px] max-w-[500px] mx-auto my-3">
//           {text.prompt}
//         </h1>

//         <p className="text-xl text-[rgb(52,58,64)] font-medium text-center phone:max-w-[350px] max-lg:max-w-[400px] max-w-[500px] mx-auto">
//           {text.description}
//         </p>

//         <div className="bg-[rgb(24,24,27)] w-[90%] max-w-[800px] h-[400px] mx-auto my-5 p-3 rounded-lg">
//           <img
//             src={text.images}
//             alt=""
//             className="block w-full max-w-[800px] h-[375px] rounded-lg object-cover"
//           />
//         </div>
//       </section>
//     </>
//   );
// };

// export const HeroTwo = () => {
//   const text = PromptUpdater();

//   return (
//     <>
//       <section className="text-black mb-3 flex justify-between max-lg:flex-col px-5">
//         <div className="w-[45%] max-lg:w-full mt-9">
//           <h1 className="text-5xl text-[rgb(33,37,41)] font-extrabold text-center max-[499px]:text-4xl phone:max-w-[350px] max-lg:max-w-[400px] max-w-[500px] mx-auto mb-3">
//             {text.prompt}
//           </h1>

//           <p className="text-xl text-[rgb(52,58,64)] font-medium text-center phone:max-w-[350px] max-lg:max-w-[400px] max-w-[500px] mx-auto">
//             {text.description}
//           </p>
//         </div>

//         <div className="bg-[rgb(24,24,27)] w-[45%] max-lg:w-full h-[400px] my-5 p-3 rounded-lg">
//           <img
//             src={text.images}
//             alt=""
//             className="block w-full max-w-[800px] h-[375px] rounded-lg object-cover"
//           />
//         </div>
//       </section>
//     </>
//   );
// };

// export const HeroThree = () => {
//   const text = PromptUpdater();

//   return (
//     <>
//       <section className="text-black mb-3 flex flex-row-reverse justify-between max-lg:flex-col px-5">
//         <div className="w-[45%] max-lg:w-full mt-9">
//           <h1 className="text-4xl text-[rgb(33,37,41)] font-extrabold text-center max-[499px]:text-4xl phone:max-w-[350px] max-lg:max-w-[400px] max-w-[500px] mx-auto mb-3">
//             {text.prompt}
//           </h1>

//           <p className="text-xl text-[rgb(52,58,64)] font-medium text-center phone:max-w-[350px] max-lg:max-w-[400px] max-w-[500px] mx-auto">
//             {text.description}
//           </p>
//         </div>

//         <div className="bg-[rgb(24,24,27)] w-[45%] max-lg:w-full h-[400px] my-5 p-3 rounded-lg">
//           <img
//             src={text.images}
//             alt=""
//             className="block w-full max-w-[800px] h-[375px] rounded-lg object-cover"
//           />
//         </div>
//       </section>
//     </>
//   );
// };

export const HeroOne = () => {
  const text = PromptUpdater();
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
          <button className="flex items-center gap-1 bg-[rgb(76,48,246)] p-4 max-lg:mx-auto rounded-[8px] text-white font-semibold">
            Register now
          </button>
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
            <p className="my-5 max-lg:max-w-[400px]">
              {text.description}
            </p>
            <button className="flex items-center gap-1 border-[2px] rounded-full px-8 py-2 text-white font-semibold hover:bg-white hover:text-black">
              contact us
            </button>
          </div>
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
      </section>
    </>
  );
};

