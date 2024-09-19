import React, { useEffect } from "react";
import HomeSectionOneImage from "../../../assets/HomeSectionOneImage.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeSectionOne = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <section
        data-aos="fade-up"
        className="bg-gradient-to-r from-[rgb(10,4,17)] to-[rgb(4,8,16)] w-full my-44 max-md:mt-32 p-10 flex"
      >
        <div>
          <h2 className="text-[2.25rem] font-extrabold max-w-[950px] mb-5">
            Create Beautiful, Responsive Landing Pages in Minutes with{" "}
            <span className="gradient-text">QuickUI</span> – No Coding Required.
          </h2>
          <p className="max-w-[800px] font-semibold">
            <span className="gradient-text">QuickUI</span> is your one-stop
            solution for creating beautiful, high-converting landing pages
            without writing a single line of code. Whether you’re launching a
            startup, promoting a product, or running a marketing campaign,{" "}
            <span className="gradient-text">QuickUI</span> makes it easy to
            bring your vision to life.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomeSectionOne;
