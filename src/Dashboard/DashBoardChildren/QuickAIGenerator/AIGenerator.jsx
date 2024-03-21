import React from "react";
import { useLocation } from "react-router-dom";

const AIGenerator = () => {
  const location = useLocation()
  // absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 bottom-0
  return (
    <>
      <section
        className={`${
          location.pathname !== "/home" ? "hidden" : "block"
        } text-center mt-80 phone:mt-52 text-[rgb(201,209,217)]`}
      >
        <div className="absolute bottom-[-23%] transform -translate-x-1/2 -translate-y-1/2 left-1/2 smallDevice:bottom-[-20%] input-container border-zinc-600 w-full max-w-[800px] mx-auto py-5">
          <p className="font-bold text-2xl phone:text-xl mb-8">
            Tell us what you need a website for!
          </p>
          <div className="flex flex-row flex-wrap justify-evenly gap-3 mb-8">
            <button className="block border-zinc-600 border-[1px] p-4 rounded-t-[20px] w-[350px] hover:bg-[rgb(20,21,24)] cursor-pointer phone:rounded-[10px]">
              <p className="text-[15px] font-medium">Smart Weeding Robot</p>
            </button>

            <button className="block border-zinc-600 border-[1px] p-4 rounded-t-[20px] w-[350px] hover:bg-[rgb(20,21,24)] cursor-pointer phone:rounded-[10px]">
              <p className="text-[15px] font-medium">
                AI-Powered Personal Assistant App
              </p>
            </button>

            <button className="block border-zinc-600 border-[1px] p-4 rounded-b-[20px] w-[350px] hover:bg-[rgb(20,21,24)] cursor-pointer phone:hidden">
              <p className="text-[15px] font-medium">Online Coding Bootcamp</p>
            </button>

            <button className="block border-zinc-600 border-[1px] p-4 rounded-b-[20px] w-[350px] hover:bg-[rgb(20,21,24)] cursor-pointer phone:hidden">
              <p className="text-[15px] font-medium">
                Virtual Reality Fitness Classes
              </p>
            </button>
          </div>

          <div className="glowing-light w-[90%] max-w-[800px] mx-auto border-zinc-600 border-[1px] p-4 rounded-[10px]">
            <span>House</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIGenerator;
