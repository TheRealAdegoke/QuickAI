import React from "react";

const AIGenerator = () => {
  return (
    <>
      <section className="text-center mt-80 phone:mt-52 text-[rgb(201,209,217)]">
        <p className="font-bold text-2xl ">
          Tell us what you need a website for!
        </p>

        <div className="input-container border-zinc-600 w-auto max-w-[800px] mx-auto py-5">
          <div className="flex flex-wrap justify-evenly gap-3">
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
        </div>
      </section>
    </>
  );
};

export default AIGenerator;
