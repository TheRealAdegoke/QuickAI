import React from "react";

const FAQComponentFour = ({
  text,
  isMobile,
  handleDivClick,
  handleTextClick,
  getStyle,
  getElementStyle,
  index,
  isEdited,
  uniqueId,
  elementContent,
  handleCardClick,
}) => {
  return (
    <>
      <section
        className="py-10"
        onClick={handleDivClick}
        id={`faq-section-${index + 1}-${uniqueId}`}
        style={getStyle(`faq-section-${index + 1}`, uniqueId)}
      >
        <div
          id={`faq-card-${index + 1}-${uniqueId}`}
          className={`${
            isMobile ? "max-w-[800px]" : ""
          } text-black py-32 w-[90%] max-lg:max-w-[400px] mx-auto max-w-[1000px] border-solid shadow-2xl rounded-xl p-5`}
          onClick={handleCardClick}
          style={getStyle(`faq-card-${index + 1}`, uniqueId)}
        >
          <div className="mb-5">
            <h1
              id={`faq-heading-${index + 1}-${uniqueId}`}
              style={getElementStyle(`faq-heading-${index + 1}`, uniqueId)}
              className={`faq-heading-${
                index + 1
              }-${uniqueId} text-3xl font-bold text-[#212529] mb-2 `}
              data-text="Heading"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-heading-${index + 1}-${uniqueId}`]
                  ? elementContent[`faq-heading-${index + 1}-${uniqueId}`]
                  : elementContent[`faq-heading-${index + 1}-${uniqueId}`] ||
                    text.FAQsHeader[0],
              }}
            ></h1>
            <p
              id={`faq-paragraph-${index + 1}-${uniqueId}`}
              style={getElementStyle(`faq-paragraph-${index + 1}`, uniqueId)}
              className={`faq-paragraph-${index + 1}-${uniqueId}`}
              data-text="Type a paragraph"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-paragraph-${index + 1}-${uniqueId}`]
                  ? elementContent[`faq-paragraph-${index + 1}-${uniqueId}`]
                  : elementContent[`faq-paragraph-${index + 1}-${uniqueId}`] ||
                    text.faqParagraphText[0],
              }}
            ></p>
          </div>

          <div
            className={`${
              isMobile ? "flex-col" : ""
            } flex flex-wrap justify-between max-lg:flex-col gap-5`}
          >
            <div className="w-full">
              <label
                htmlFor={`id-show-menu-1-${index + 1}-${uniqueId}`}
                className="show-menu"
              >
                <div className="">
                  <h2
                    id={`faq-sub-heading-text-1-${index + 1}-${uniqueId}`}
                    style={getElementStyle(
                      `faq-sub-heading-${index + 1}`,
                      uniqueId
                    )}
                    className={`faq-sub-heading-${
                      index + 1
                    }-${uniqueId} hover:underline hover:cursor-pointer mb-3`}
                    data-text="Heading"
                    data-uses-dangerously-set-inner-html="true"
                    contentEditable={false}
                    onClick={handleTextClick}
                    dangerouslySetInnerHTML={{
                      __html: isEdited[
                        `faq-sub-heading-text-1-${index + 1}-${uniqueId}`
                      ]
                        ? elementContent[
                            `faq-sub-heading-text-1-${index + 1}-${uniqueId}`
                          ]
                        : elementContent[
                            `faq-sub-heading-text-1-${index + 1}-${uniqueId}`
                          ] || "Question 1",
                    }}
                  ></h2>
                </div>
              </label>
              <input
                type="checkbox"
                id={`id-show-menu-1-${index + 1}-${uniqueId}`}
                className="appearance-none hidden peer"
              />
              <p
                id={`faq-sub-paragraph-text-1-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `faq-sub-paragraph-${index + 1}`,
                  uniqueId
                )}
                className={`faq-sub-paragraph-${
                  index + 1
                }-${uniqueId} hidden transition-all duration-75 peer-checked:block peer-checked:opacity-100 lg:opacity-100 mb-3`}
                data-text="Type a paragraph"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[
                    `faq-sub-paragraph-text-1-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `faq-sub-paragraph-text-1-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `faq-sub-paragraph-text-1-${index + 1}-${uniqueId}`
                      ] || text.faqAnswer[0],
                }}
              ></p>
            </div>

            <div className="w-full">
              <label
                htmlFor={`id-show-menu-2-${index + 1}-${uniqueId}`}
                className="show-menu"
              >
                <div className="">
                  <h2
                    id={`faq-sub-heading-text-2-${index + 1}-${uniqueId}`}
                    style={getElementStyle(
                      `faq-sub-heading-${index + 1}`,
                      uniqueId
                    )}
                    className={`faq-sub-heading-${
                      index + 1
                    }-${uniqueId} hover:underline hover:cursor-pointer mb-3`}
                    data-text="Heading"
                    data-uses-dangerously-set-inner-html="true"
                    contentEditable={false}
                    onClick={handleTextClick}
                    dangerouslySetInnerHTML={{
                      __html: isEdited[
                        `faq-sub-heading-text-2-${index + 1}-${uniqueId}`
                      ]
                        ? elementContent[
                            `faq-sub-heading-text-2-${index + 1}-${uniqueId}`
                          ]
                        : elementContent[
                            `faq-sub-heading-text-2-${index + 1}-${uniqueId}`
                          ] || "Question 2",
                    }}
                  ></h2>
                </div>
              </label>
              <input
                type="checkbox"
                id={`id-show-menu-2-${index + 1}-${uniqueId}`}
                className="appearance-none hidden peer"
              />
              <p
                id={`faq-sub-paragraph-text-2-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `faq-sub-paragraph-${index + 1}`,
                  uniqueId
                )}
                className={`faq-sub-paragraph-${
                  index + 1
                }-${uniqueId} hidden transition-all duration-75 peer-checked:block peer-checked:opacity-100 lg:opacity-100 mb-3`}
                data-text="Type a paragraph"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[
                    `faq-sub-paragraph-text-2-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `faq-sub-paragraph-text-2-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `faq-sub-paragraph-text-2-${index + 1}-${uniqueId}`
                      ] || text.faqAnswer[0],
                }}
              ></p>
            </div>

            <div className="w-full">
              <label
                htmlFor={`id-show-menu-3-${index + 1}-${uniqueId}`}
                className="show-menu"
              >
                <div className="">
                  <h2
                    id={`faq-sub-heading-text-3-${index + 1}-${uniqueId}`}
                    style={getElementStyle(
                      `faq-sub-heading-${index + 1}`,
                      uniqueId
                    )}
                    className={`faq-sub-heading-${
                      index + 1
                    }-${uniqueId} hover:underline hover:cursor-pointer mb-3`}
                    data-text="Heading"
                    data-uses-dangerously-set-inner-html="true"
                    contentEditable={false}
                    onClick={handleTextClick}
                    dangerouslySetInnerHTML={{
                      __html: isEdited[
                        `faq-sub-heading-text-3-${index + 1}-${uniqueId}`
                      ]
                        ? elementContent[
                            `faq-sub-heading-text-3-${index + 1}-${uniqueId}`
                          ]
                        : elementContent[
                            `faq-sub-heading-text-3-${index + 1}-${uniqueId}`
                          ] || "Question 3",
                    }}
                  ></h2>
                </div>
              </label>
              <input
                type="checkbox"
                id={`id-show-menu-3-${index + 1}-${uniqueId}`}
                className="appearance-none hidden peer"
              />
              <p
                id={`faq-sub-paragraph-text-3-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `faq-sub-paragraph-${index + 1}`,
                  uniqueId
                )}
                className={`faq-sub-paragraph-${
                  index + 1
                }-${uniqueId} hidden transition-all duration-75 peer-checked:block peer-checked:opacity-100 lg:opacity-100 mb-3`}
                data-text="Type a paragraph"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[`faq-sub-paragraph-${index + 1}-${uniqueId}`]
                    ? elementContent[
                        `faq-sub-paragraph-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `faq-sub-paragraph-${index + 1}-${uniqueId}`
                      ] || text.faqAnswer[0],
                }}
              ></p>
            </div>

            <div className="w-full">
              <label
                htmlFor={`id-show-menu-4-${index + 1}-${uniqueId}`}
                className="show-menu"
              >
                <div className="">
                  <h2
                    id={`faq-sub-heading-text-4-${index + 1}-${uniqueId}`}
                    style={getElementStyle(
                      `faq-sub-heading-${index + 1}`,
                      uniqueId
                    )}
                    className={`faq-sub-heading-${
                      index + 1
                    }-${uniqueId} hover:underline hover:cursor-pointer mb-3`}
                    data-text="Heading"
                    data-uses-dangerously-set-inner-html="true"
                    contentEditable={false}
                    onClick={handleTextClick}
                    dangerouslySetInnerHTML={{
                      __html: isEdited[
                        `faq-sub-heading-text-4-${index + 1}-${uniqueId}`
                      ]
                        ? elementContent[
                            `faq-sub-heading-text-4-${index + 1}-${uniqueId}`
                          ]
                        : elementContent[
                            `faq-sub-heading-text-4-${index + 1}-${uniqueId}`
                          ] || "Question 4",
                    }}
                  ></h2>
                </div>
              </label>
              <input
                type="checkbox"
                id={`id-show-menu-4-${index + 1}-${uniqueId}`}
                className="appearance-none hidden peer"
              />
              <p
                id={`faq-sub-paragraph-text-4-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `faq-sub-paragraph-${index + 1}`,
                  uniqueId
                )}
                className={`faq-sub-paragraph-${
                  index + 1
                }-${uniqueId} hidden transition-all duration-75 peer-checked:block peer-checked:opacity-100 lg:opacity-100 mb-3`}
                data-text="Type a paragraph"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[
                    `faq-sub-paragraph-text-4-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `faq-sub-paragraph-text-4-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `faq-sub-paragraph-text-4-${index + 1}-${uniqueId}`
                      ] || text.faqAnswer[0],
                }}
              ></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQComponentFour;
