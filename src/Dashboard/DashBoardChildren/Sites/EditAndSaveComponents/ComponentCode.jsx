import React, { useContext, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco, nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaRegClipboard } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { IoMdCode } from "react-icons/io";
import { DashContext } from "../../../DashboardChecker/DashboardContext";

const ComponentCode = ({ displayCode }) => {
  const { userData } = useContext(DashContext);
    const [isCodeFull, setIsCodeFull] = useState(true)
    const [copied, setCopied] = useState(false)
    const premiumUserFullCode = `import React from 'react'

const Component = () => {
  
  return (
    <>
      ${displayCode}
    </>
  );
};

export default Component`;

const freeTrialFullCode = `import React from 'react'

const Component = () => {
  
  return (
    <>
      Subscribe to get code
    </>
  );
};

export default Component`;

const premiumUserShortCode = `${displayCode}`
const freeTrialShortCode = `Subscribe to get code`;

const fullCode =
  userData.status === "free" && userData.trial === 0
    ? freeTrialFullCode
    : premiumUserFullCode

  const shortCode =
    userData.status === "free" && userData.trial === 0
      ? freeTrialShortCode
      : premiumUserShortCode

const handleCopy = () => {
    navigator.clipboard.writeText(isCodeFull ? fullCode : shortCode)
    .then(() => {
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 2000);
    })
    .catch(err => {
        console.error("Failed to copy", err);
    })
}

  return (
    <>
      <section className="h-full relative">
        <button
          className={`${
            copied ? "py-[0.13rem]" : "py-1"
          } bg-white w-[130px] absolute right-0 rounded-b-sm`}
          onClick={handleCopy}
        >
          {copied ? (
            <span className="text-sm font-medium">Copied</span>
          ) : (
            <div
              className={`flex items-center justify-center gap-2`}
            >
              <span className="text-sm font-medium">Copy Code</span>{" "}
              <FaRegClipboard />
            </div>
          )}
        </button>
        <div className="bg-white w-[100px] flex items-center justify-evenly absolute right-[10vw] py-1 rounded-b-sm text-xl">
          <button
            className={`${
              isCodeFull ? "bg-[rgba(0,0,0,0.3)]" : ""
            } px-3 rounded-md`}
            onClick={() => {
              setIsCodeFull(true);
            }}
          >
            <FaReact />
          </button>
          <button
            className={`${
              isCodeFull ? "" : "bg-[rgba(0,0,0,0.3)]"
            } px-3 rounded-md`}
            onClick={() => {
              setIsCodeFull(false);
            }}
          >
            <IoMdCode />
          </button>
        </div>
        <SyntaxHighlighter
          language="javascript"
          style={nightOwl}
          wrapLongLines
          showLineNumbers
          customStyle={{
            height: "100%",
            overflowY: "auto",
            paddingTop: "20px",
            paddingBottom: "50px",
          }}
        >
          {isCodeFull ? fullCode : shortCode}
        </SyntaxHighlighter>
      </section>
    </>
  );
};

export default ComponentCode;