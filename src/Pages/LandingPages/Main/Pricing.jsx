import React, { useEffect } from "react";
import Nav from "../Nav/Nav";
import Footer from "../MainComponents/Footer";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TiArrowRightOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Create a landing page ai</title>
        <meta
          name="description"
          content="QuickUI lets you easily create landing pages without coding. Build your next project faster with our intuitive platform."
        />
        <meta name="keywords" content="" Create a landing page ai />
        <meta property="og:title" content="Create a landing page ai" />
        <meta
          property="og:description"
          content="QuickUI helps you build and customize landing pages easily. No coding skills needed!"
        />
        <meta property="og:image" content="https://i.imgur.com/HSA0Pbh.png" />
        <meta property="og:url" content="https://quickui.co/pricing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Create a landing page ai" />
        <meta
          name="twitter:description"
          content="Create and customize landing pages easily with QuickUI!"
        />
        <meta name="twitter:image" content="https://i.imgur.com/HSA0Pbh.png" />
        <link rel="canonical" href="https://quickui.co/pricing" />
      </Helmet>
      <main className="radial text-white min-h-screen pb-10 overflow-y-hidden">
        <Nav />
        <div data-aos="fade-up" className="pt-[150px] ">
          <div className="flex flex-col items-center justify-center mb-10 gap-2">
            <h1 className="text-4xl font-semibold">
              Explore Our Pricing Plans
            </h1>
            <p className="text-xl text-[rgba(189,189,189)]">
              Upgrade your plan
            </p>
          </div>

          <div className="my-20 w-[90%] max-md:max-w-[500px] mx-auto flex max-md:flex-col justify-center gap-10">
            <div className="border-[1px] px-8 rounded-xl min-h-[300px] py-10 flex flex-col relative">
              <h2 className="text-3xl">Free</h2>
              <p className="text-2xl my-2">$0</p>
              <p className="text-[rgba(189,189,189)] font-semibold">
                Get started with limited features
              </p>

              <div className="my-5">
                <p className="flex items-center gap-2">
                  <IoMdCheckmarkCircleOutline />3 trials
                </p>
              </div>

              <Link
                to="/register"
                className="block text-center border border-[rgba(255,255,255,0.2)] py-2 px-4 rounded-[8px] transition-all duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.2)] max-md:mt-5 md:absolute md:bottom-[-10px] md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:w-[90%]"
              >
                <span className="flex justify-center items-center gap-2">
                  Sign Up <TiArrowRightOutline />
                </span>
              </Link>
            </div>

            <div className="bg-[linear-gradient(40deg,rgba(116,38,240,0)_0%,rgb(5,8,32)_100%)] border-[1px] px-8 rounded-xl min-h-[300px] py-10 flex flex-col relative">
              <h2 className="text-3xl">
                Premium{" "}
                <span className="text-[rgba(189,189,189)]">
                  (one time payment)
                </span>
              </h2>
              <p className="text-2xl my-2">$60</p>
              <p className="text-[rgba(189,189,189)] font-semibold">
                Get access to all features forever
              </p>

              <div className="mt-5 mb-10">
                <p className="flex items-center gap-2">
                  <IoMdCheckmarkCircleOutline />
                  Unlimited Design
                </p>
                <p className="flex items-center gap-2">
                  <IoMdCheckmarkCircleOutline />
                  Save Design
                </p>
                <p className="flex items-center gap-2">
                  <IoMdCheckmarkCircleOutline />
                  Access to code
                </p>
                <p className="flex items-center gap-2">
                  <IoMdCheckmarkCircleOutline />
                  Access to editing site
                </p>
                <p className="flex items-center gap-2">
                  <IoMdCheckmarkCircleOutline />
                  Access to QuickUI chatbot
                </p>
                <p className="flex items-center gap-2 max-sm:flex-col max-sm:items-start max-sm:mb-3">
                  <span className="flex items-center gap-2">
                    <IoMdCheckmarkCircleOutline />
                    Download landing page folder
                  </span>{" "}
                  <span className="text-xs">(React, Next)</span>
                </p>
                <p className="flex items-center gap-2">
                  <IoMdCheckmarkCircleOutline />
                  Updates on new designs
                </p>
              </div>

              <Link
                to="/register"
                className="block text-center border border-[rgba(255,255,255,0.2)] py-2 px-4 rounded-[8px] transition-all duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.2)] max-md:mt-5 md:absolute md:bottom-[-10px] md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:w-[90%]"
              >
                <span className="flex justify-center items-center gap-2">
                  Sign Up <TiArrowRightOutline />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Pricing;
