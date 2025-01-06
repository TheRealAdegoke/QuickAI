import React, { useState, useEffect } from "react";
import Nav from "../LandingPages/Nav/Nav";
import { Helmet } from "react-helmet";

// Function to generate random color
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Function to convert HEX to RGB
const hexToRgb = (hex) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgb(${r}, ${g}, ${b})`;
};

const BackgroundAndTextColorPicker = () => {
  const [bgColor, setBgColor] = useState("#FF5733");
  const [textColor, setTextColor] = useState("#00B991");
  const [useRgb, setUseRgb] = useState(false);
  const [copyTextLabel, setCopyTextLabel] = useState("Copy Text");
  const [copyBgLabel, setCopyBgLabel] = useState("Copy BG");

  const displayTextColor = useRgb ? hexToRgb(textColor) : textColor;
  const displayBgColor = useRgb ? hexToRgb(bgColor) : bgColor;

  // Function to handle keypress events
  const handleKeyPress = (event) => {
    if (event.code === "Space") {
      event.preventDefault(); // Prevent scrolling when space is pressed
      generateRandomColors();
    }
  };

  const generateRandomColors = () => {
    setBgColor(getRandomColor());
    setTextColor(getRandomColor());
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "text") {
      setCopyTextLabel("Copied");
      setTimeout(() => setCopyTextLabel("Copy Text"), 1500);
    } else if (type === "bg") {
      setCopyBgLabel("Copied");
      setTimeout(() => setCopyBgLabel("Copy BG"), 1500);
    }
  };

  // Add event listener for keydown
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{`random color generator`}</title>
        <meta name="description" content={``} />
        <meta name="keywords" content={`random color generator`} />
        <meta property="og:title" content={`random color generator`} />
        <meta property="og:description" content={``} />
        <meta property="og:image" content="https://i.imgur.com/HSA0Pbh.png" />
        <meta
          property="og:url"
          content={`https://quickui.co/free-tool/background-text-color-generator`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`random color generator`} />
        <meta name="twitter:description" content={``} />
        <meta name="twitter:image" content="https://i.imgur.com/HSA0Pbh.png" />
        <link
          rel="canonical"
          href={`https://quickui.co/free-tool/background-text-color-generator`}
        />
      </Helmet>
      <Nav />
      <main className="min-h-screen overflow-y-hidden pt-[75px]">
        <div
          className="flex justify-center items-center h-screen relative"
          style={{ backgroundColor: bgColor }}
        >
          <h2
            className="font-bold text-center text-xl"
            style={{ color: textColor }}
          >
            This text has a color of {displayTextColor} with a background color
            of {displayBgColor}.
          </h2>

          <div className="bg-white w-[250px] h-[400px] absolute top-[20px] rounded-xl left-5 shadow-md p-5">
            <h1 className="font-bold mb-2">Random Color Generator</h1>
            <p>Free tool to generate a  text and background color.</p>

            <div className="my-3">
              <div>
                <h2 className="font-bold mb-1">HEX</h2>
                <button
                  className={`border-[1px] border-[rgba(0,0,0,0.6)] w-[200px] rounded ${
                    !useRgb
                      ? "bg-[rgba(0,0,0,0.6)] text-white"
                      : "hover:bg-[rgba(0,0,0,0.6)] hover:text-white"
                  } font-semibold`}
                  onClick={() => setUseRgb(false)}
                >
                  {!useRgb ? "Enabled" : "Enable"}
                </button>
              </div>
            </div>

            <div className="my-3">
              <h2 className="font-bold mb-1">RGB</h2>
              <button
                className={`border-[1px] border-[rgba(0,0,0,0.6)] w-[200px] rounded ${
                  useRgb
                    ? "bg-[rgba(0,0,0,0.6)] text-white"
                    : "hover:bg-[rgba(0,0,0,0.6)] hover:text-white"
                } font-semibold`}
                onClick={() => setUseRgb(true)}
              >
                {useRgb ? "Enabled" : "Enable"}
              </button>
            </div>

            <div className="flex gap-4">
              <button
                className="border-[1px] border-[rgba(0,0,0,0.6)] w-[200px] rounded bg-[rgb(0,0,0)] text-white"
                onClick={() => copyToClipboard(displayTextColor, "text")}
              >
                {copyTextLabel}
              </button>

              <button
                className="border-[1px] border-[rgba(0,0,0,0.6)] w-[200px] rounded bg-[rgb(0,0,0)] text-white"
                onClick={() => copyToClipboard(displayBgColor, "bg")}
              >
                {copyBgLabel}
              </button>
            </div>

            <button
              className="border-[1px] border-[rgba(0,0,0,0.6)] w-[200px] rounded bg-[rgb(0,0,0)] text-white mt-10"
              onClick={generateRandomColors}
            >
              Generate
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default BackgroundAndTextColorPicker;
