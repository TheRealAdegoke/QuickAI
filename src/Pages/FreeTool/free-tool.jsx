import React from "react";
import Nav from "../LandingPages/Nav/Nav";
import colorPickerImage from "../../assets/Color-picker.webp";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const FreeTool = () => {
  return (
    <>
      <Helmet>
        <title>{`Create a landing page ai`}</title>
        <meta name="description" content={`Create and customize landing pages easily with QuickUI!`} />
        <meta name="keywords" content={`Create a landing page ai`} />
        <meta property="og:title" content={`Create a landing page ai`} />
        <meta property="og:description" content={`Create and customize landing pages easily with QuickUI!`} />
        <meta property="og:image" content="https://i.imgur.com/HSA0Pbh.png" />
        <meta
          property="og:url"
          content={`https://quickui.co/free-tool`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Create a landing page ai`} />
        <meta name="twitter:description" content={`Create and customize landing pages easily with QuickUI!`} />
        <meta name="twitter:image" content="https://i.imgur.com/HSA0Pbh.png" />
        <link
          rel="canonical"
          href={`https://quickui.co/free-tool`}
        />
      </Helmet>
      <Nav />
      <main className="radial min-h-screen overflow-y-hidden pt-[100px]">
        <div className="px-5">
          <div className="w-[300px] rounded-lg pb-5 border-[1px] border-[rgba(255,255,255,0.5)] hover:border-[rgb(9,105,221)]">
            <Link
              to="/free-tool/background-text-color-generator"
              className="w-full h-full"
            >
              <img
                src={colorPickerImage}
                alt="Color picker image"
                className="w-full rounded-t-lg"
              />
              <p className="mt-4 font-semibold ml-5">Random Color Generator</p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default FreeTool;
