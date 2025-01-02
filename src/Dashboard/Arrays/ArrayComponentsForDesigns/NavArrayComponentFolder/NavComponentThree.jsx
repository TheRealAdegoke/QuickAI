import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";

const NavComponentThree = ({
  text,
  handleTextClick,
  handleDivClick,
  getStyle,
  getElementStyle,
  index,
  isEdited,
  uniqueId,
  elementContent,
  handleDivButtonClick,
  toggleNav,
  setToggleNav,
}) => {

  return (
    <>
      <header>
        <nav
          onClick={handleDivClick}
          id={`header-section-${index + 1}-${uniqueId}`}
          style={getStyle(`header-section-${index + 1}`, uniqueId)}
          className={`text-black w-full py-5 px-5 shadow-xl relative z-40`}
        >
          <div className="flex justify-between items-center">
            <div className="lg:w-[55%]">
              <Link to="">
                <span
                  id={`nav-name-${index + 1}-${uniqueId}`}
                  className={`nav-name-${
                    index + 1
                  }-${uniqueId} font-bold text-4xl`}
                  style={getElementStyle(`nav-name-${index + 1}`, uniqueId)}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[`nav-name-${index + 1}-${uniqueId}`]
                    ? elementContent[`nav-name-${index + 1}-${uniqueId}`]
                    : elementContent[`nav-name-${index + 1}-${uniqueId}`] ||
                      text.webLogo}
                </span>
              </Link>
            </div>

            <div className="hidden max-lg:block">
              <button
                data-allows-toggle-for-button="true"
                className="border-[1px] px-3 py-2 rounded-lg"
                onClick={() => setToggleNav(!toggleNav)}
              >
                <FaBarsStaggered />
              </button>
            </div>

            <div className="flex justify-between lg:w-full items-center max-lg:hidden font-semibold">
              <div className="flex gap-8">
                <Link to="">
                  <span
                    id={`list-link-text-1-${index + 1}-${uniqueId}`}
                    className={`list-link-text-${index + 1}-${uniqueId}`}
                    style={getElementStyle(
                      `list-link-text-${index + 1}`,
                      uniqueId
                    )}
                    data-text="Link text"
                    contentEditable={false}
                    onClick={handleTextClick}
                  >
                    {isEdited[`list-link-text-1-${index + 1}-${uniqueId}`]
                      ? elementContent[
                          `list-link-text-1-${index + 1}-${uniqueId}`
                        ]
                      : elementContent[
                          `list-link-text-1-${index + 1}-${uniqueId}`
                        ] || text.buttonTexts[2]}
                  </span>
                </Link>
                <Link to="">
                  <span
                    id={`list-link-text-2-${index + 1}-${uniqueId}`}
                    className={`list-link-text-${index + 1}-${uniqueId}`}
                    style={getElementStyle(
                      `list-link-text-${index + 1}`,
                      uniqueId
                    )}
                    data-text="Link text"
                    contentEditable={false}
                    onClick={handleTextClick}
                  >
                    {isEdited[`list-link-text-2-${index + 1}-${uniqueId}`]
                      ? elementContent[
                          `list-link-text-2-${index + 1}-${uniqueId}`
                        ]
                      : elementContent[
                          `list-link-text-2-${index + 1}-${uniqueId}`
                        ] || text.buttonTexts[3]}
                  </span>
                </Link>
                <Link to="">
                  <span
                    id={`list-link-text-3-${index + 1}-${uniqueId}`}
                    className={`list-link-text-${index + 1}-${uniqueId}`}
                    style={getElementStyle(
                      `list-link-text-${index + 1}`,
                      uniqueId
                    )}
                    data-text="Link text"
                    contentEditable={false}
                    onClick={handleTextClick}
                  >
                    {isEdited[`list-link-text-3-${index + 1}-${uniqueId}`]
                      ? elementContent[
                          `list-link-text-3-${index + 1}-${uniqueId}`
                        ]
                      : elementContent[
                          `list-link-text-3-${index + 1}-${uniqueId}`
                        ] || text.buttonTexts[4]}
                  </span>
                </Link>
                <Link to="">
                  <span
                    id={`list-link-text-4-${index + 1}-${uniqueId}`}
                    className={`list-link-text-${index + 1}-${uniqueId}`}
                    style={getElementStyle(
                      `list-link-text-${index + 1}`,
                      uniqueId
                    )}
                    data-text="Link text"
                    contentEditable={false}
                    onClick={handleTextClick}
                  >
                    {isEdited[`list-link-text-4-${index + 1}-${uniqueId}`]
                      ? elementContent[
                          `list-link-text-4-${index + 1}-${uniqueId}`
                        ]
                      : elementContent[
                          `list-link-text-4-${index + 1}-${uniqueId}`
                        ] || text.buttonTexts[5]}
                  </span>
                </Link>
              </div>

              <div className="">
                <button
                  id={`nav-button-${index + 1}-${uniqueId}`}
                  className="px-10 py-2 rounded-full font-medium text-white"
                  onClick={handleDivButtonClick}
                  style={getStyle(
                    `nav-button-${index + 1}`,
                    uniqueId,
                    "rgb(0,0,0)"
                  )}
                >
                  <span
                    id={`nav-button-text-${index + 1}-${uniqueId}`}
                    style={getElementStyle(
                      `nav-button-text-style-${index + 1}`,
                      uniqueId
                    )}
                    className={`nav-button-text-style-${index + 1}-${uniqueId}`}
                    data-text="Button text"
                    contentEditable={false}
                    onClick={handleTextClick}
                  >
                    {isEdited[`nav-button-text-${index + 1}-${uniqueId}`]
                      ? elementContent[
                          `nav-button-text-${index + 1}-${uniqueId}`
                        ]
                      : elementContent[
                          `nav-button-text-${index + 1}-${uniqueId}`
                        ] || text.buttonTexts[6]}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div
          style={getStyle(`header-section-${index + 1}`, uniqueId)}
          data-allows-toggle="true"
          className={`${
            toggleNav ? "block" : "hidden"
          } transition-all duration-500 ease-in-out overflow-hidden lg:hidden text-black border-t-[1px] px-5 py-4 mx-auto font-semibold`}
        >
          <div className="flex flex-col gap-8">
            <Link to="">
              <span
                id={`list-link-text-1-${index + 1}-${uniqueId}`}
                className={`list-link-text-${index + 1}-${uniqueId}`}
                style={getElementStyle(`list-link-text-${index + 1}`, uniqueId)}
                data-text="Link text"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[`list-link-text-1-${index + 1}-${uniqueId}`]
                  ? elementContent[`list-link-text-1-${index + 1}-${uniqueId}`]
                  : elementContent[
                      `list-link-text-1-${index + 1}-${uniqueId}`
                    ] || text.buttonTexts[2]}
              </span>
            </Link>
            <Link to="">
              <span
                id={`list-link-text-2-${index + 1}-${uniqueId}`}
                className={`list-link-text-${index + 1}-${uniqueId}`}
                style={getElementStyle(`list-link-text-${index + 1}`, uniqueId)}
                data-text="Link text"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[`list-link-text-2-${index + 1}-${uniqueId}`]
                  ? elementContent[`list-link-text-2-${index + 1}-${uniqueId}`]
                  : elementContent[
                      `list-link-text-2-${index + 1}-${uniqueId}`
                    ] || text.buttonTexts[3]}
              </span>
            </Link>
            <Link to="">
              <span
                id={`list-link-text-3-${index + 1}-${uniqueId}`}
                className={`list-link-text-${index + 1}-${uniqueId}`}
                style={getElementStyle(`list-link-text-${index + 1}`, uniqueId)}
                data-text="Link text"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[`list-link-text-3-${index + 1}-${uniqueId}`]
                  ? elementContent[`list-link-text-3-${index + 1}-${uniqueId}`]
                  : elementContent[
                      `list-link-text-3-${index + 1}-${uniqueId}`
                    ] || text.buttonTexts[4]}
              </span>
            </Link>
            <Link to="">
              <span
                id={`list-link-text-4-${index + 1}-${uniqueId}`}
                className={`list-link-text-${index + 1}-${uniqueId}`}
                style={getElementStyle(`list-link-text-${index + 1}`, uniqueId)}
                data-text="Link text"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[`list-link-text-4-${index + 1}-${uniqueId}`]
                  ? elementContent[`list-link-text-4-${index + 1}-${uniqueId}`]
                  : elementContent[
                      `list-link-text-4-${index + 1}-${uniqueId}`
                    ] || text.buttonTexts[5]}
              </span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavComponentThree;
