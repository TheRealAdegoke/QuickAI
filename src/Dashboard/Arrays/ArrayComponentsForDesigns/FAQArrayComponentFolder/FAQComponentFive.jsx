import React from "react";

const FAQComponentFive = ({
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
  handleDivButtonClick,
}) => {
  return (
    <>
      <section
        onClick={handleDivClick}
        id={`faq-section-${index + 1}-${uniqueId}`}
        style={getStyle(`faq-section-${index + 1}`, uniqueId)}
      >
        <div className="py-24 flex max-lg:flex-col max-w-[1300px] mx-auto px-10">
          <div className="w-3/5 max-lg:w-full mb-20">
            <div className="max-w-[600px]">
              <h2
                id={`faq-heading-${index + 1}-${uniqueId}`}
                style={getElementStyle(`faq-heading-${index + 1}`, uniqueId)}
                className={`faq-heading-${
                  index + 1
                }-${uniqueId} text-5xl max-lg:text-4xl max-w-[450px] text-[rgba(22,38,23,1)] font-extrabold`}
                data-text="Heading"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[`faq-heading-${index + 1}-${uniqueId}`]
                    ? elementContent[`faq-heading-${index + 1}-${uniqueId}`]
                    : elementContent[`faq-heading-${index + 1}-${uniqueId}`] ||
                      text.featureHeader[2],
                }}
              ></h2>
              <div
                id={`header-underline-${index + 1}-${uniqueId}`}
                className="h-[6px] w-[100px] mt-5 mb-8"
                onClick={handleCardClick}
                style={getStyle(
                  `header-underline-${index + 1}`,
                  uniqueId,
                  "rgba(22,38,23,1)"
                )}
              ></div>
              <p
                id={`faq-paragraph-${index + 1}-${uniqueId}`}
                style={getElementStyle(`faq-paragraph-${index + 1}`, uniqueId)}
                className={`faq-paragraph-${
                  index + 1
                }-${uniqueId} text-[rgba(22,38,23,1)] mb-10`}
                data-text="Type a paragraph"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[`faq-paragraph-${index + 1}-${uniqueId}`]
                    ? elementContent[`faq-paragraph-${index + 1}-${uniqueId}`]
                    : elementContent[
                        `faq-paragraph-${index + 1}-${uniqueId}`
                      ] || text.description,
                }}
              ></p>
              <button
                id={`faq-button-${index + 1}-${uniqueId}`}
                className="bg-white px-10 py-3 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] text-black w-[200px]"
                onClick={handleDivButtonClick}
                style={getStyle(`faq-button-${index + 1}`, uniqueId)}
              >
                <span
                  id={`faq-button-text-1-${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `faq-button-text-style-${index + 1}`,
                    uniqueId
                  )}
                  className={`faq-button-text-style-${index + 1}-${uniqueId}`}
                  data-text="Button text"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[`faq-button-text-1-${index + 1}-${uniqueId}`]
                    ? elementContent[
                        `faq-button-text-1-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `faq-button-text-1-${index + 1}-${uniqueId}`
                      ] || text.buttonTexts[3]}
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-col max-lg:w-full gap-y-5 w-[40%]">
            <div className="relative">
              <span
                className="absolute bg-[rgba(0,0,0,0.8)] top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"
                onClick={handleCardClick}
              ></span>
              <div
                id={`faq-card-${index + 1}-${uniqueId}`}
                className="relative h-full border-2 border-[rgba(0,0,0,0.8)] rounded-lg text-[rgba(22,38,23,1)] font-bold p-5"
                onClick={handleCardClick}
                style={getStyle(`faq-card-${index + 1}`, uniqueId, "white")}
              >
                <p
                  id={`faq-sub-paragraph-text-1-${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `faq-sub-paragraph-${index + 1}`,
                    uniqueId
                  )}
                  className={`faq-sub-paragraph-${index + 1}-${uniqueId}`}
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
            </div>
            <div className="relative">
              <span
                className="absolute bg-[rgba(0,0,0,0.8)] top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"
                onClick={handleCardClick}
              ></span>
              <div
                id={`faq-card-${index + 1}-${uniqueId}`}
                className="relative h-full border-2 border-[rgba(0,0,0,0.8)] rounded-lg text-[rgba(22,38,23,1)] font-bold p-5"
                onClick={handleCardClick}
                style={getStyle(`faq-card-${index + 1}`, uniqueId, "white")}
              >
                <p
                  id={`faq-sub-paragraph-text-2-${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `faq-sub-paragraph-${index + 1}`,
                    uniqueId
                  )}
                  className={`faq-sub-paragraph-${index + 1}-${uniqueId}`}
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
            </div>
            <div className="relative">
              <span
                className="absolute bg-[rgba(0,0,0,0.8)] top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"
                onClick={handleCardClick}
              ></span>
              <div
                id={`faq-card-${index + 1}-${uniqueId}`}
                className="relative h-full border-2 border-[rgba(0,0,0,0.8)] rounded-lg text-[rgba(22,38,23,1)] font-bold p-5"
                onClick={handleCardClick}
                style={getStyle(`faq-card-${index + 1}`, uniqueId, "white")}
              >
                <p
                  id={`faq-sub-paragraph-text-3-${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `faq-sub-paragraph-${index + 1}`,
                    uniqueId
                  )}
                  className={`faq-sub-paragraph-${index + 1}-${uniqueId}`}
                  data-text="Type a paragraph"
                  data-uses-dangerously-set-inner-html="true"
                  contentEditable={false}
                  onClick={handleTextClick}
                  dangerouslySetInnerHTML={{
                    __html: isEdited[
                      `faq-sub-paragraph-text-3-${index + 1}-${uniqueId}`
                    ]
                      ? elementContent[
                          `faq-sub-paragraph-text-3-${index + 1}-${uniqueId}`
                        ]
                      : elementContent[
                          `faq-sub-paragraph-text-3-${index + 1}-${uniqueId}`
                        ] || text.faqAnswer[0],
                  }}
                ></p>
              </div>
            </div>
            <div className="relative">
              <span
                className="absolute bg-[rgba(0,0,0,0.8)] top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"
                onClick={handleCardClick}
              ></span>
              <div
                id={`faq-card-${index + 1}-${uniqueId}`}
                className="relative h-full border-2 border-[rgba(0,0,0,0.8)] rounded-lg text-[rgba(22,38,23,1)] font-bold p-5"
                onClick={handleCardClick}
                style={getStyle(`faq-card-${index + 1}`, uniqueId, "white")}
              >
                <p
                  id={`faq-sub-paragraph-text-4-${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `faq-sub-paragraph-${index + 1}`,
                    uniqueId
                  )}
                  className={`faq-sub-paragraph-${index + 1}-${uniqueId}`}
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
        </div>
      </section>
    </>
  );
};

export default FAQComponentFive;
