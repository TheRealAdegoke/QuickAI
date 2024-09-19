import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";
import Hero from "../MainComponents/Hero";
import HomeSectionOne from "../MainComponents/HomeSectionOne";
import HomeSectionTwo from "../MainComponents/HomeSectionTwo";
import Footer from "../MainComponents/Footer";
import HomeSectionThree from "../MainComponents/HomeSectionThree";
import HomeSectionFour from "../MainComponents/HomeSectionFour";

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "q" || event.key === "Q") {
        navigate("/register");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  return (
    <main className="radial min-h-screen overflow-y-hidden">
      <Nav />
      <div className="pt-[100px] flex justify-center mb-10">
        <div className="dLSFRA px-10 py-2 max-lg:hidden">
          <p>Press Q to register</p>
        </div>
      </div>
      <Hero />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree/>
      <HomeSectionFour/>
      <Footer />
    </main>
  );
};

export default Main;

 {
   /* <section
        data-aos="fade-up"
        className="bg-gradient-to-r from-[rgb(10,4,17)] to-[rgb(4,8,16)] w-full my-44 p-10 flex"
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
      </section> */
 }