import { FaEye } from "react-icons/fa";

const FeatureComponentEight = ({
  text,
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
  handleImageClick,
}) => {
  return (
    <>
      <section
        onClick={handleDivClick}
        id={`features-section-${index + 1}-${uniqueId}`}
        style={getStyle(`features-section-${index + 1}`, uniqueId)}
      >
        <div className="py-24 text-black">
          <div className="text-center mb-20">
            <p
              id={`features-paragraph-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `features-paragraph-${index + 1}`,
                uniqueId
              )}
              className={`features-paragraph-${
                index + 1
              }-${uniqueId} font-semibold mb-3`}
              data-text="Type a paragraph"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`features-paragraph-${index + 1}-${uniqueId}`]
                  ? elementContent[
                      `features-paragraph-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `features-paragraph-${index + 1}-${uniqueId}`
                    ] || "Screenshot",
              }}
            ></p>
            <h1
              id={`features-heading-${index + 1}-${uniqueId}`}
              style={getElementStyle(`features-heading-${index + 1}`, uniqueId)}
              className={`features-heading-${
                index + 1
              }-${uniqueId} text-3xl font-bold mb-5`}
              data-text="Heading"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`features-heading-${index + 1}-${uniqueId}`]
                  ? elementContent[`features-heading-${index + 1}-${uniqueId}`]
                  : elementContent[
                      `features-heading-${index + 1}-${uniqueId}`
                    ] || text.featureHeader[1],
              }}
            ></h1>
          </div>

          <div className="flex justify-center flex-wrap gap-6 w-[90%] max-w-[1200px] mx-auto max-md:flex-col max-md:gap-y-14">
            <div
              id={`features-section-card-${index + 1}-${uniqueId}`}
              className="w-[30%] max-md:w-[95%] mx-auto px-3 py-8 rounded-lg flex flex-col items-center justify-center gap-y-4 relative text-center"
              onClick={handleCardClick}
              style={getStyle(
                `features-section-card-${index + 1}`,
                uniqueId,
                "rgb(240,246,255)"
              )}
            >
              <div
                id={`features-button-${index + 1}-${uniqueId}`}
                className="text-4xl text-white inline-block p-5 rounded-full absolute left-1/2 -translate-x-1/2 top-[-30px]"
                onClick={handleDivButtonClick}
                style={getStyle(
                  `features-button-${index + 1}`,
                  uniqueId,
                  "#4294E3"
                )}
              >
                <FaEye />
              </div>
              <h2
                id={`features-sub-heading-text-1-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `features-sub-heading-${index + 1}`,
                  uniqueId
                )}
                className={`features-sub-heading-${
                  index + 1
                }-${uniqueId} text-xl font-semibold mt-10`}
                data-text="Heading"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[
                    `features-sub-heading-text-1-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `features-sub-heading-text-1-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `features-sub-heading-text-1-${index + 1}-${uniqueId}`
                      ] || "High Resolution",
                }}
              ></h2>
              <p
                id={`features-sub-paragraph-text-1-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `features-sub-paragraph-${index + 1}`,
                  uniqueId
                )}
                className={`features-sub-paragraph-${
                  index + 1
                }-${uniqueId} font-medium`}
                data-text="Type a paragraph"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[
                    `features-sub-paragraph-text-1-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `features-sub-paragraph-text-1-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `features-sub-paragraph-text-1-${index + 1}-${uniqueId}`
                      ] || text.description,
                }}
              ></p>
            </div>

            <div
              id={`features-section-card-${index + 1}-${uniqueId}`}
              className="w-[30%] max-md:w-[95%] mx-auto px-3 py-8 rounded-lg flex flex-col items-center justify-center gap-y-4 relative text-center"
              onClick={handleCardClick}
              style={getStyle(
                `features-section-card-${index + 1}`,
                uniqueId,
                "rgb(240,246,255)"
              )}
            >
              <div
                id={`features-button-${index + 1}-${uniqueId}`}
                className="text-4xl text-white inline-block p-5 rounded-full absolute left-1/2 -translate-x-1/2 top-[-30px]"
                onClick={handleDivButtonClick}
                style={getStyle(
                  `features-button-${index + 1}`,
                  uniqueId,
                  "#4294E3"
                )}
              >
                <FaEye />
              </div>
              <h2
                id={`features-sub-heading-text-2-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `features-sub-heading-${index + 1}`,
                  uniqueId
                )}
                className={`features-sub-heading-${
                  index + 1
                }-${uniqueId} text-xl font-semibold mt-10`}
                data-text="Heading"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[
                    `features-sub-heading-text-2-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `features-sub-heading-text-2-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `features-sub-heading-text-2-${index + 1}-${uniqueId}`
                      ] || "High Resolution",
                }}
              ></h2>
              <p
                id={`features-sub-paragraph-text-2-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `features-sub-paragraph-${index + 1}`,
                  uniqueId
                )}
                className={`features-sub-paragraph-${
                  index + 1
                }-${uniqueId} font-medium`}
                data-text="Type a paragraph"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[
                    `features-sub-paragraph-text-2-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `features-sub-paragraph-text-2-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `features-sub-paragraph-text-2-${index + 1}-${uniqueId}`
                      ] || text.description,
                }}
              ></p>
            </div>

            <div
              id={`features-section-card-${index + 1}-${uniqueId}`}
              className="w-[30%] max-md:w-[95%] mx-auto px-3 py-8 rounded-lg flex flex-col items-center justify-center gap-y-4 relative text-center"
              onClick={handleCardClick}
              style={getStyle(
                `features-section-card-${index + 1}`,
                uniqueId,
                "rgb(240,246,255)"
              )}
            >
              <div
                id={`features-button-${index + 1}-${uniqueId}`}
                className="text-4xl text-white inline-block p-5 rounded-full absolute left-1/2 -translate-x-1/2 top-[-30px]"
                onClick={handleDivButtonClick}
                style={getStyle(
                  `features-button-${index + 1}`,
                  uniqueId,
                  "#4294E3"
                )}
              >
                <FaEye />
              </div>
              <h2
                id={`features-sub-heading-text-3-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `features-sub-heading-${index + 1}`,
                  uniqueId
                )}
                className={`features-sub-heading-${
                  index + 1
                }-${uniqueId} text-xl font-semibold mt-10`}
                data-text="Heading"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[
                    `features-sub-heading-text-3-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `features-sub-heading-text-3-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `features-sub-heading-text-3-${index + 1}-${uniqueId}`
                      ] || "High Resolution",
                }}
              ></h2>
              <p
                id={`features-sub-paragraph-text-3-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `features-sub-paragraph-${index + 1}`,
                  uniqueId
                )}
                className={`features-sub-paragraph-${
                  index + 1
                }-${uniqueId} font-medium`}
                data-text="Type a paragraph"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[
                    `features-sub-paragraph-text-3-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `features-sub-paragraph-text-3-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `features-sub-paragraph-text-3-${index + 1}-${uniqueId}`
                      ] || text.description,
                }}
              ></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureComponentEight;
