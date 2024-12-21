const FooterComponentOne = ({
  text,
  isMobile,
  handleTextClick,
  handleDivClick,
  getStyle,
  getElementStyle,
  index,
  isEdited,
  uniqueId,
  elementContent,
}) => {
  return (
    <>
      <footer
        onClick={handleDivClick}
        id={`footer-section-${index + 1}-${uniqueId}`}
        style={getStyle(`footer-section-${index + 1}`, uniqueId)}
      >
        <div
          className={`${
            isMobile ? "flex-col items-start gap-10" : ""
          } border-t-[1px] py-14 flex max-md:flex-col max-md:items-start max-md:gap-10 justify-center items-center max-md:pl-5`}
        >
          <div className="flex flex-col justify-start items-start w-[20%]">
            <h1
              id={`footer-first-heading-${index + 1}-${uniqueId}`}
              className={`footer-first-heading-${
                index + 1
              }-${uniqueId} text-black`}
              style={getElementStyle(
                `footer-first-heading-${index + 1}`,
                uniqueId
              )}
              data-text="Heading"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {isEdited[`footer-first-heading-${index + 1}-${uniqueId}`]
                ? elementContent[
                    `footer-first-heading-${index + 1}-${uniqueId}`
                  ]
                : elementContent[
                    `footer-first-heading-${index + 1}-${uniqueId}`
                  ] || "© 2024 Your Company"}
            </h1>
            <h2
              id={`footer-second-heading-${index + 1}-${uniqueId}`}
              className={`footer-second-heading-${
                index + 1
              }-${uniqueId} font-bold text-[rgb(42,42,47)] text-3xl`}
              style={getElementStyle(
                `footer-second-heading-${index + 1}`,
                uniqueId
              )}
              data-text="Heading"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {isEdited[`footer-second-heading-${index + 1}-${uniqueId}`]
                ? elementContent[
                    `footer-second-heading-${index + 1}-${uniqueId}`
                  ]
                : elementContent[
                    `footer-second-heading-${index + 1}-${uniqueId}`
                  ] || text.webLogo}
            </h2>
            <div className="text-black flex gap-2 mt-3">
              <a href="https://www.linkedin.com/in/gabriel-adewale-adegoke/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="24"
                  height="24"
                  className=""
                >
                  <path
                    d="M416 32H31.9A32.1 32.1 0 0 0 0 64.3v383.4A32.1 32.1 0 0 0 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3A32.2 32.2 0 0 0 416 32zM135.4 416H69V202.2h66.5V416zm-33.2-243a38.5 38.5 0 1 1 0-77 38.5 38.5 0 0 1 0 77zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>

              <a href="https://twitter.com/TheReal_Adegoke">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="24"
                  height="24"
                  className=""
                >
                  <path
                    d="M459.4 151.7c.3 4.6.3 9.1.3 13.7 0 138.7-105.6 298.5-298.6 298.5A296.5 296.5 0 0 1 0 417a217 217 0 0 0 25.3 1.2c49 0 94.3-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8a111 111 0 0 0 47.4-2 105 105 0 0 1-84.1-103v-1.2c14 7.8 30.2 12.6 47.4 13.3A104.9 104.9 0 0 1 35.7 67.2a298.3 298.3 0 0 0 216.4 109.9 104.9 104.9 0 0 1 179-95.8 206.6 206.6 0 0 0 66.6-25.4 104.7 104.7 0 0 1-46.1 57.8c21-2.3 41.6-8.1 60.4-16.2a225.6 225.6 0 0 1-52.6 54.2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div
            className={`${
              isMobile ? "flex-col gap-10" : ""
            } text-[rgb(42,42,47)] flex max-md:flex-col max-md:gap-10 justify-evenly w-[70%]`}
          >
            <div className="w-[30%]">
              <h2
                id={`footer-sub-first-heading-${index + 1}-${uniqueId}`}
                className={`footer-sub-heading-${
                  index + 1
                }-${uniqueId} font-semibold`}
                style={getElementStyle(
                  `footer-sub-heading-${index + 1}`,
                  uniqueId
                )}
                data-text="Heading"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[`footer-sub-first-heading-${index + 1}-${uniqueId}`]
                  ? elementContent[
                      `footer-sub-first-heading-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `footer-sub-first-heading-${index + 1}-${uniqueId}`
                    ] || "Features"}
              </h2>
              <div>
                <p
                  id={`footer-sub-paragraph-first-text-1-${
                    index + 1
                  }-${uniqueId}`}
                  className={`footer-sub-paragraph-${
                    index + 1
                  }-${uniqueId} cursor-pointer hover:underline text-sm`}
                  style={getElementStyle(
                    `footer-sub-paragraph-${index + 1}`,
                    uniqueId
                  )}
                  data-text="Type a paragraph"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[
                    `footer-sub-paragraph-first-text-1-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `footer-sub-paragraph-first-text-1-${
                          index + 1
                        }-${uniqueId}`
                      ]
                    : elementContent[
                        `footer-sub-paragraph-first-text-1-${
                          index + 1
                        }-${uniqueId}`
                      ] || "Something Great"}
                </p>
                <p
                  id={`footer-sub-paragraph-first-text-2-${
                    index + 1
                  }-${uniqueId}`}
                  className={`footer-sub-paragraph-${
                    index + 1
                  }-${uniqueId} cursor-pointer hover:underline text-sm`}
                  style={getElementStyle(
                    `footer-sub-paragraph-${index + 1}`,
                    uniqueId
                  )}
                  data-text="Type a paragraph"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[
                    `footer-sub-paragraph-first-text-2-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `footer-sub-paragraph-first-text-2-${
                          index + 1
                        }-${uniqueId}`
                      ]
                    : elementContent[
                        `footer-sub-paragraph-first-text-2-${
                          index + 1
                        }-${uniqueId}`
                      ] || "Another Thing"}
                </p>
                <p
                  id={`footer-sub-paragraph-first-text-3-${
                    index + 1
                  }-${uniqueId}`}
                  className={`footer-sub-paragraph-${
                    index + 1
                  }-${uniqueId} cursor-pointer hover:underline text-sm`}
                  style={getElementStyle(
                    `footer-sub-paragraph-${index + 1}`,
                    uniqueId
                  )}
                  data-text="Type a paragraph"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[
                    `footer-sub-paragraph-first-text-3-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `footer-sub-paragraph-first-text-3-${
                          index + 1
                        }-${uniqueId}`
                      ]
                    : elementContent[
                        `footer-sub-paragraph-first-text-3-${
                          index + 1
                        }-${uniqueId}`
                      ] || "So many Features"}
                </p>
                <p
                  id={`footer-sub-paragraph-first-text-4-${
                    index + 1
                  }-${uniqueId}`}
                  className={`footer-sub-paragraph-${
                    index + 1
                  }-${uniqueId} cursor-pointer hover:underline text-sm`}
                  style={getElementStyle(
                    `footer-sub-paragraph-${index + 1}`,
                    uniqueId
                  )}
                  data-text="Type a paragraph"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[
                    `footer-sub-paragraph-first-text-4-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `footer-sub-paragraph-first-text-4-${
                          index + 1
                        }-${uniqueId}`
                      ]
                    : elementContent[
                        `footer-sub-paragraph-first-text-4-${
                          index + 1
                        }-${uniqueId}`
                      ] || "It's Amazing"}
                </p>
              </div>
            </div>

            <div className="w-[30%]">
              <h2
                id={`footer-sub-second-heading-${index + 1}-${uniqueId}`}
                className={`footer-sub-heading-${
                  index + 1
                }-${uniqueId} font-semibold`}
                style={getElementStyle(
                  `footer-sub-heading-${index + 1}`,
                  uniqueId
                )}
                data-text="Heading"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[`footer-sub-second-heading-${index + 1}-${uniqueId}`]
                  ? elementContent[
                      `footer-sub-second-heading-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `footer-sub-second-heading-${index + 1}-${uniqueId}`
                    ] || "Company"}
              </h2>
              <div>
                <p
                  id={`footer-sub-paragraph-second-text-1-${
                    index + 1
                  }-${uniqueId}`}
                  className={`footer-sub-paragraph-${
                    index + 1
                  }-${uniqueId} cursor-pointer hover:underline text-sm`}
                  style={getElementStyle(
                    `footer-sub-paragraph-${index + 1}`,
                    uniqueId
                  )}
                  data-text="Type a paragraph"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[
                    `footer-sub-paragraph-second-text-1-${
                      index + 1
                    }-${uniqueId}`
                  ]
                    ? elementContent[
                        `footer-sub-paragraph-second-text-1-${
                          index + 1
                        }-${uniqueId}`
                      ]
                    : elementContent[
                        `footer-sub-paragraph-second-text-1-${
                          index + 1
                        }-${uniqueId}`
                      ] || "Blogs"}
                </p>
                <p
                  id={`footer-sub-paragraph-second-text-2-${
                    index + 1
                  }-${uniqueId}`}
                  className={`footer-sub-paragraph-${
                    index + 1
                  }-${uniqueId} cursor-pointer hover:underline text-sm`}
                  style={getElementStyle(
                    `footer-sub-paragraph-${index + 1}`,
                    uniqueId
                  )}
                  data-text="Type a paragraph"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[
                    `footer-sub-paragraph-second-text-2-${
                      index + 1
                    }-${uniqueId}`
                  ]
                    ? elementContent[
                        `footer-sub-paragraph-second-text-2-${
                          index + 1
                        }-${uniqueId}`
                      ]
                    : elementContent[
                        `footer-sub-paragraph-second-text-2-${
                          index + 1
                        }-${uniqueId}`
                      ] || "Contact"}
                </p>
                <p
                  id={`footer-sub-paragraph-second-text-3-${
                    index + 1
                  }-${uniqueId}`}
                  className={`footer-sub-paragraph-${
                    index + 1
                  }-${uniqueId} cursor-pointer hover:underline text-sm`}
                  style={getElementStyle(
                    `footer-sub-paragraph-${index + 1}`,
                    uniqueId
                  )}
                  data-text="Type a paragraph"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[
                    `footer-sub-paragraph-second-text-3-${
                      index + 1
                    }-${uniqueId}`
                  ]
                    ? elementContent[
                        `footer-sub-paragraph-second-text-3-${
                          index + 1
                        }-${uniqueId}`
                      ]
                    : elementContent[
                        `footer-sub-paragraph-second-text-3-${
                          index + 1
                        }-${uniqueId}`
                      ] || "About Us"}
                </p>
                <p
                  id={`footer-sub-paragraph-second-text-4-${
                    index + 1
                  }-${uniqueId}`}
                  className={`footer-sub-paragraph-${
                    index + 1
                  }-${uniqueId} cursor-pointer hover:underline text-sm`}
                  style={getElementStyle(
                    `footer-sub-paragraph-${index + 1}`,
                    uniqueId
                  )}
                  data-text="Type a paragraph"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[
                    `footer-sub-paragraph-second-text-4-${
                      index + 1
                    }-${uniqueId}`
                  ]
                    ? elementContent[
                        `footer-sub-paragraph-second-text-4-${
                          index + 1
                        }-${uniqueId}`
                      ]
                    : elementContent[
                        `footer-sub-paragraph-second-text-4-${
                          index + 1
                        }-${uniqueId}`
                      ] || "Jobs"}
                </p>
              </div>
            </div>

            <div className="w-[30%]">
              <h2
                id={`footer-sub-third-heading-${index + 1}-${uniqueId}`}
                className={`footer-sub-heading-${
                  index + 1
                }-${uniqueId} font-semibold`}
                style={getElementStyle(
                  `footer-sub-heading-${index + 1}`,
                  uniqueId
                )}
                data-text="Heading"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[`footer-sub-third-heading-${index + 1}-${uniqueId}`]
                  ? elementContent[
                      `footer-sub-third-heading-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `footer-sub-third-heading-${index + 1}-${uniqueId}`
                    ] || "Legal"}
              </h2>
              <div>
                <p
                  id={`footer-sub-paragraph-third-text-1-${
                    index + 1
                  }-${uniqueId}`}
                  className={`footer-sub-paragraph-${
                    index + 1
                  }-${uniqueId} cursor-pointer hover:underline text-sm`}
                  style={getElementStyle(
                    `footer-sub-paragraph-${index + 1}`,
                    uniqueId
                  )}
                  data-text="Type a paragraph"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[
                    `footer-sub-paragraph-third-text-1-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `footer-sub-paragraph-third-text-1-${
                          index + 1
                        }-${uniqueId}`
                      ]
                    : elementContent[
                        `footer-sub-paragraph-third-text-1-${
                          index + 1
                        }-${uniqueId}`
                      ] || "Privacy Policy"}
                </p>
                <p
                  id={`footer-sub-paragraph-third-text-2-${
                    index + 1
                  }-${uniqueId}`}
                  className={`footer-sub-paragraph-${
                    index + 1
                  }-${uniqueId} cursor-pointer hover:underline text-sm`}
                  style={getElementStyle(
                    `footer-sub-paragraph-${index + 1}`,
                    uniqueId
                  )}
                  data-text="Type a paragraph"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[
                    `footer-sub-paragraph-third-text-2-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `footer-sub-paragraph-third-text-2-${
                          index + 1
                        }-${uniqueId}`
                      ]
                    : elementContent[
                        `footer-sub-paragraph-third-text-2-${
                          index + 1
                        }-${uniqueId}`
                      ] || "Terms of Use"}
                </p>
                <p
                  id={`footer-sub-paragraph-third-text-3-${
                    index + 1
                  }-${uniqueId}`}
                  className={`footer-sub-paragraph-${
                    index + 1
                  }-${uniqueId} cursor-pointer hover:underline text-sm`}
                  style={getElementStyle(
                    `footer-sub-paragraph-${index + 1}`,
                    uniqueId
                  )}
                  data-text="Type a paragraph"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[
                    `footer-sub-paragraph-third-text-3-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `footer-sub-paragraph-third-text-3-${
                          index + 1
                        }-${uniqueId}`
                      ]
                    : elementContent[
                        `footer-sub-paragraph-third-text-3-${
                          index + 1
                        }-${uniqueId}`
                      ] || "Cookie Policy"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponentOne