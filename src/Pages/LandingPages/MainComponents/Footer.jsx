import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { TiArrowRightOutline } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    useEffect(() => {
      AOS.init({
        duration: 1500,
      });
    }, []);

  return (
    <footer>
      <div
        data-aos="fade-up"
        className="bg-[linear-gradient(90deg,rgba(116,38,240,0)_0%,rgb(5,8,32)_100%)] border-[rgb(22,23,50)] border-[1px] w-[90%] max-md:max-w-[500px] max-w-[1000px] mx-auto py-10 px-5 rounded-lg flex max-md:flex-col max-md:gap-5 max-md:items-start justify-between items-center mb-10"
      >
        <div>
          <p className="text-3xl font-semibold mb-2">Ready to use QuickUI?</p>
          <p className="text-xl">Get started for free</p>
        </div>
        <Link
          to="/register"
          className="block text-center border border-[rgba(255,255,255,0.2)] py-4 px-8 rounded-[8px] transition-all duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.2)]"
        >
          <span className="flex justify-center items-center gap-2">
            Sign Up <TiArrowRightOutline />
          </span>
        </Link>
      </div>

      <div className="py-10">
        <p className="text-center">
          Copyright © {currentYear}. All Rights Reserved QuickUI
        </p>
      </div>
    </footer>
  );
}

export default Footer
 