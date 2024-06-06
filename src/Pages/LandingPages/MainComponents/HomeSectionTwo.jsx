import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { MdSaveAlt } from "react-icons/md";
import { FaCode } from 'react-icons/fa6';
import { FaCloudUploadAlt } from "react-icons/fa";

const HomeSectionTwo = () => {
    useEffect(() => {
      AOS.init({
        duration: 1500,
      });
    }, []);

  return (
    <>
      <section
        data-aos="fade-up"
        className="my-44 max-lg:my-32 w-[90%] max-w-[1500px] mx-auto"
      >
        <div className="mb-14">
          <h2 className="text-center text-2xl sm:text-4xl font-semibold mb-4">
            Do more with QuickUI
          </h2>
          <p className="text-[rgb(189,189,189)] text-xl text-center font-semibold max-lg:text-center max-lg:max-w-[500px] max-lg:mx-auto">
            The simplest way to launch your new startup website and reach your
            customers.
          </p>
        </div>

        <div className="flex max-md:flex-col gap-5 justify-center max-md:items-center">
          <div className="flex flex-col gap-3 border-[1px] border-[rgba(255,255,255,0.3)] rounded-xl py-4 px-5 w-[30%] max-md:w-full max-md:max-w-[500px]">
            <div className="bg-[rgb(63,81,181)] max-w-[40px] flex justify-center items-center py-2 rounded-md">
              <MdSaveAlt className="text-xl" />
            </div>
            <h3 className="text-xl">Save Designs</h3>
            <p className="text-[rgb(189,189,189)]">
              Did you create a landing page you absolutely love? No worries! You
              can save any design you create and revisit it whenever you want.
            </p>
          </div>

          <div className="flex flex-col gap-3 border-[1px] border-[rgba(255,255,255,0.3)] rounded-xl py-4 px-5 w-[30%] max-md:w-full max-md:max-w-[500px]">
            <div className="bg-[rgb(63,81,181)] max-w-[40px] flex justify-center items-center py-2 rounded-md">
              <FaCode className="text-lg" />
            </div>
            <h3 className="text-xl">Get Code</h3>
            <p className="text-[rgb(189,189,189)] h-[100px] max-md:h-auto max-xl:h-[180px]">
              Liked what you've designed? You can easily copy the code for your
              landing page. It's quick and simple to share or use it elsewhere.
            </p>
            <p>Coming soon</p>
          </div>

          <div className="flex flex-col gap-3 border-[1px] border-[rgba(255,255,255,0.3)] rounded-xl py-4 px-5 w-[30%] max-md:w-full max-md:max-w-[500px]">
            <div className="bg-[rgb(63,81,181)] max-w-[40px] flex justify-center items-center py-2 rounded-md">
              <FaCloudUploadAlt className="text-lg" />
            </div>
            <h3 className="text-xl">Publish Site</h3>
            <p className="text-[rgb(189,189,189)] h-[100px] max-md:h-auto max-xl:h-[180px]">
              Ready to show off your website to the world? With our publish
              feature, it's easy to make your site live. Share your site
              with others and make your mark online.
            </p>
            <p>Coming soon</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeSectionTwo