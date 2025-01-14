const FooterComponentThree = ({
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
        style={getStyle(`footer-section-${index + 1}`, uniqueId, "#4294E3")}
      >
        <div className="w-full">
          <img
            src="https://quickui.co/assets/bg-top-6DQqHRlI.png"
            alt=""
            className="w-full"
          />
        </div>
        <div className="flex justify-between max-lg:gap-y-14 flex-wrap max-w-[1100px] mx-auto pb-24 p-5 text-white">
          <div className="flex flex-col gap-y-5 w-1/5 max-lg:w-2/5 max-md:w-full font-semibold">
            <h2
              id={`footer-first-heading-text-1-${index + 1}-${uniqueId}`}
              className={`footer-heading-${index + 1}-${uniqueId} text-2xl`}
              style={getElementStyle(`footer-heading-${index + 1}`, uniqueId)}
              data-text="Heading"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {isEdited[`footer-first-heading-text-1-${index + 1}-${uniqueId}`]
                ? elementContent[
                    `footer-first-heading-text-1-${index + 1}-${uniqueId}`
                  ]
                : elementContent[
                    `footer-first-heading-text-1-${index + 1}-${uniqueId}`
                  ] || "Address"}
            </h2>
            <p
              id={`footer-first-paragraph-first-text-1-${
                index + 1
              }-${uniqueId}`}
              className={`footer-paragraph-${index + 1}-${uniqueId}`}
              style={getElementStyle(`footer-paragraph-${index + 1}`, uniqueId)}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {isEdited[
                `footer-first-paragraph-first-text-1-${index + 1}-${uniqueId}`
              ]
                ? elementContent[
                    `footer-first-paragraph-first-text-1-${
                      index + 1
                    }-${uniqueId}`
                  ]
                : elementContent[
                    `footer-first-paragraph-first-text-1-${
                      index + 1
                    }-${uniqueId}`
                  ] || "123 Street, New York, USA"}
            </p>

            <p
              id={`footer-first-paragraph-first-text-2-${
                index + 1
              }-${uniqueId}`}
              className={`footer-paragraph-${index + 1}-${uniqueId}`}
              style={getElementStyle(`footer-paragraph-${index + 1}`, uniqueId)}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {isEdited[
                `footer-first-paragraph-first-text-2-${index + 1}-${uniqueId}`
              ]
                ? elementContent[
                    `footer-first-paragraph-first-text-2-${
                      index + 1
                    }-${uniqueId}`
                  ]
                : elementContent[
                    `footer-first-paragraph-first-text-2-${
                      index + 1
                    }-${uniqueId}`
                  ] || "+012 345 67890"}
            </p>

            <p
              id={`footer-first-paragraph-first-text-3-${
                index + 1
              }-${uniqueId}`}
              className={`footer-paragraph-${index + 1}-${uniqueId}`}
              style={getElementStyle(`footer-paragraph-${index + 1}`, uniqueId)}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {isEdited[
                `footer-first-paragraph-first-text-3-${index + 1}-${uniqueId}`
              ]
                ? elementContent[
                    `footer-first-paragraph-first-text-3-${
                      index + 1
                    }-${uniqueId}`
                  ]
                : elementContent[
                    `footer-first-paragraph-first-text-3-${
                      index + 1
                    }-${uniqueId}`
                  ] || "info@example.com"}
            </p>
          </div>

          <ul className="flex flex-col gap-y-5 w-1/5 max-lg:w-2/5 max-md:w-full">
            <h2
              id={`footer-second-heading-text-${index + 1}-${uniqueId}`}
              className={`footer-heading-${
                index + 1
              }-${uniqueId} text-2xl font-semibold`}
              style={getElementStyle(`footer-heading-${index + 1}`, uniqueId)}
              data-text="Heading"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {isEdited[`footer-second-heading-text-${index + 1}-${uniqueId}`]
                ? elementContent[
                    `footer-second-heading-text-${index + 1}-${uniqueId}`
                  ]
                : elementContent[
                    `footer-second-heading-text-${index + 1}-${uniqueId}`
                  ] || "Quick Link"}
            </h2>
            <li className="flex items-center gap-x-1 font-semibold">
              <p
                id={`footer-second-paragraph-first-text-1-${
                  index + 1
                }-${uniqueId}`}
                className={`footer-paragraph-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `footer-paragraph-${index + 1}`,
                  uniqueId
                )}
                data-text="Type a paragraph"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[
                  `footer-second-paragraph-first-text-1-${
                    index + 1
                  }-${uniqueId}`
                ]
                  ? elementContent[
                      `footer-second-paragraph-first-text-1-${
                        index + 1
                      }-${uniqueId}`
                    ]
                  : elementContent[
                      `footer-second-paragraph-first-text-1-${
                        index + 1
                      }-${uniqueId}`
                    ] || "About Us"}
              </p>
            </li>

            <li className="flex items-center gap-x-1 font-semibold">
              <p
                id={`footer-second-paragraph-first-text-2-${
                  index + 1
                }-${uniqueId}`}
                className={`footer-paragraph-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `footer-paragraph-${index + 1}`,
                  uniqueId
                )}
                data-text="Type a paragraph"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[
                  `footer-second-paragraph-first-text-2-${
                    index + 1
                  }-${uniqueId}`
                ]
                  ? elementContent[
                      `footer-second-paragraph-first-text-2-${
                        index + 1
                      }-${uniqueId}`
                    ]
                  : elementContent[
                      `footer-second-paragraph-first-text-2-${
                        index + 1
                      }-${uniqueId}`
                    ] || "Contact Us"}
              </p>
            </li>

            <li className="flex items-center gap-x-1 font-semibold">
              <p
                id={`footer-second-paragraph-first-text-3-${
                  index + 1
                }-${uniqueId}`}
                className={`footer-paragraph-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `footer-paragraph-${index + 1}`,
                  uniqueId
                )}
                data-text="Type a paragraph"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[
                  `footer-second-paragraph-first-text-3-${
                    index + 1
                  }-${uniqueId}`
                ]
                  ? elementContent[
                      `footer-second-paragraph-first-text-3-${
                        index + 1
                      }-${uniqueId}`
                    ]
                  : elementContent[
                      `footer-second-paragraph-first-text-3-${
                        index + 1
                      }-${uniqueId}`
                    ] || "Privacy Policy"}
              </p>
            </li>

            <li className="flex items-center gap-x-1 font-semibold">
              <p
                id={`footer-second-paragraph-first-text-4-${
                  index + 1
                }-${uniqueId}`}
                className={`footer-paragraph-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `footer-paragraph-${index + 1}`,
                  uniqueId
                )}
                data-text="Type a paragraph"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[
                  `footer-second-paragraph-first-text-4-${
                    index + 1
                  }-${uniqueId}`
                ]
                  ? elementContent[
                      `footer-second-paragraph-first-text-4-${
                        index + 1
                      }-${uniqueId}`
                    ]
                  : elementContent[
                      `footer-second-paragraph-first-text-4-${
                        index + 1
                      }-${uniqueId}`
                    ] || "Terms & Conditions"}
              </p>
            </li>
          </ul>

          <ul className="flex flex-col gap-y-5 w-1/5 max-lg:w-2/5 max-md:w-full">
            <h2
              id={`footer-third-heading-text-${index + 1}-${uniqueId}`}
              className={`footer-heading-${
                index + 1
              }-${uniqueId} text-2xl font-semibold`}
              style={getElementStyle(`footer-heading-${index + 1}`, uniqueId)}
              data-text="Heading"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {isEdited[`footer-third-heading-text-${index + 1}-${uniqueId}`]
                ? elementContent[
                    `footer-third-heading-text-${index + 1}-${uniqueId}`
                  ]
                : elementContent[
                    `footer-third-heading-text-${index + 1}-${uniqueId}`
                  ] || "Popular Link"}
            </h2>
            <li className="flex items-center gap-x-1 font-semibold">
              <p
                id={`footer-third-paragraph-first-text-1-${
                  index + 1
                }-${uniqueId}`}
                className={`footer-paragraph-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `footer-paragraph-${index + 1}`,
                  uniqueId
                )}
                data-text="Type a paragraph"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[
                  `footer-third-paragraph-first-text-1-${index + 1}-${uniqueId}`
                ]
                  ? elementContent[
                      `footer-third-paragraph-first-text-1-${
                        index + 1
                      }-${uniqueId}`
                    ]
                  : elementContent[
                      `footer-third-paragraph-first-text-1-${
                        index + 1
                      }-${uniqueId}`
                    ] || "About Us"}
              </p>
            </li>

            <li className="flex items-center gap-x-1 font-semibold">
              <p
                id={`footer-third-paragraph-first-text-2-${
                  index + 1
                }-${uniqueId}`}
                className={`footer-paragraph-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `footer-paragraph-${index + 1}`,
                  uniqueId
                )}
                data-text="Type a paragraph"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[
                  `footer-third-paragraph-first-text-2-${index + 1}-${uniqueId}`
                ]
                  ? elementContent[
                      `footer-third-paragraph-first-text-2-${
                        index + 1
                      }-${uniqueId}`
                    ]
                  : elementContent[
                      `footer-third-paragraph-first-text-2-${
                        index + 1
                      }-${uniqueId}`
                    ] || "Contact Us"}
              </p>
            </li>

            <li className="flex items-center gap-x-1 font-semibold">
              <p
                id={`footer-third-paragraph-first-text-3-${
                  index + 1
                }-${uniqueId}`}
                className={`footer-paragraph-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `footer-paragraph-${index + 1}`,
                  uniqueId
                )}
                data-text="Type a paragraph"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[
                  `footer-third-paragraph-first-text-3-${index + 1}-${uniqueId}`
                ]
                  ? elementContent[
                      `footer-third-paragraph-first-text-3-${
                        index + 1
                      }-${uniqueId}`
                    ]
                  : elementContent[
                      `footer-third-paragraph-first-text-3-${
                        index + 1
                      }-${uniqueId}`
                    ] || "Privacy Policy"}
              </p>
            </li>

            <li className="flex items-center gap-x-1 font-semibold">
              <p
                id={`footer-third-paragraph-first-text-4-${
                  index + 1
                }-${uniqueId}`}
                className={`footer-paragraph-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `footer-paragraph-${index + 1}`,
                  uniqueId
                )}
                data-text="Type a paragraph"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[
                  `footer-third-paragraph-first-text-4-${index + 1}-${uniqueId}`
                ]
                  ? elementContent[
                      `footer-third-paragraph-first-text-4-${
                        index + 1
                      }-${uniqueId}`
                    ]
                  : elementContent[
                      `footer-third-paragraph-first-text-4-${
                        index + 1
                      }-${uniqueId}`
                    ] || "Terms & Conditions"}
              </p>
            </li>
          </ul>

          <div className="flex flex-col gap-y-5 w-1/5 max-lg:w-2/5 max-md:w-full">
            <h2
              id={`footer-fourth-heading-text-${index + 1}-${uniqueId}`}
              className={`footer-heading-${
                index + 1
              }-${uniqueId} text-2xl font-semibold`}
              style={getElementStyle(`footer-heading-${index + 1}`, uniqueId)}
              data-text="Heading"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {isEdited[`footer-fourth-heading-text-${index + 1}-${uniqueId}`]
                ? elementContent[
                    `footer-fourth-heading-text-${index + 1}-${uniqueId}`
                  ]
                : elementContent[
                    `footer-fourth-heading-text-${index + 1}-${uniqueId}`
                  ] || "Quick Link"}
            </h2>
            <p
              id={`footer-fourth-paragraph-first-text-1-${
                index + 1
              }-${uniqueId}`}
              className={`footer-paragraph-${index + 1}-${uniqueId}`}
              style={getElementStyle(`footer-paragraph-${index + 1}`, uniqueId)}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {isEdited[
                `footer-fourth-paragraph-first-text-1-${index + 1}-${uniqueId}`
              ]
                ? elementContent[
                    `footer-fourth-paragraph-first-text-1-${
                      index + 1
                    }-${uniqueId}`
                  ]
                : elementContent[
                    `footer-fourth-paragraph-first-text-1-${
                      index + 1
                    }-${uniqueId}`
                  ] ||
                  "Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu"}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponentThree;
