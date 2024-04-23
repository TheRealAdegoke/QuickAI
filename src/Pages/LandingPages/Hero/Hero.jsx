import React from "react";
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <>
      <main className="pt-[120px] max-lg:pt-[100px]">
        <section className="">
          <div className="flex justify-center">
            <h1 className="text-center text-[4.2rem] max-md:text-[2.5rem] capitalize w-[800px] font-extrabold px-2">
              Create website designs 10X faster with{" "}
              <span className="gradient-text">QuickUI</span>
            </h1>
          </div>

          <div className="flex justify-center mt-20 px-5">
            <Link
              to="/register"
              className="glow block text-center text-2xl font-bold border border-[rgba(255,255,255,0.2)] py-4 px-8 rounded-[8px] transition-all duration-300 ease-in-out w-[400px]"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
