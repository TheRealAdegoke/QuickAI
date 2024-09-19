import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { TiArrowRightOutline } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

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
          <p className="text-3xl font-semibold mb-2">
            Ready to Build Your Next Landing Page?
          </p>
          <p className="max-w-[600px]">
            Join thousands of users building beautiful, responsive landing pages
            with QuickUI. Start for free today!
          </p>
        </div>
        <Link
          to="/register"
          className="block text-center border border-[rgba(255,255,255,0.2)] py-4 px-8 rounded-[8px] transition-all duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.2)]"
        >
          <span className="flex justify-center items-center gap-2">
            Get Started <TiArrowRightOutline />
          </span>
        </Link>
      </div>

      <div className="py-10">
        <p className="text-center">
          Copyright © {currentYear}. All Rights Reserved QuickUI
        </p>
        <div className="flex justify-center gap-5 mt-5 text-2xl">
          <a
            href="https://x.com/TheReal_Adegoke"
            target="_blank"
            className="cursor-pointer"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-adewale-adegoke/"
            target="_blank"
            className="cursor-pointer"
          >
            <FaLinkedinIn className="cursor-pointer" />
          </a>
          <a
            href="https://www.facebook.com/adegoke.gabriel.526/"
            target="_blank"
            className="cursor-pointer"
          >
            <FaFacebook className="cursor-pointer" />
          </a>
          <a
            href="https://www.tiktok.com/@therealadegoke"
            target="_blank"
            className="cursor-pointer"
          >
            <FaTiktok className="cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer
 