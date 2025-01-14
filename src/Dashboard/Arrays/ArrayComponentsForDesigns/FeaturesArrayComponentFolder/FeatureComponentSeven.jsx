const FeatureComponentSeven = ({
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
          <div className="text-center">
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

          <div className="flex justify-center flex-wrap gap-6 w-[90%] max-w-[1200px] mx-auto max-md:flex-col">
            <div
              id={`features-section-card-${index + 1}-${uniqueId}`}
              className="w-[30%] max-md:w-[95%] mx-auto px-3 py-8 rounded-lg flex flex-col items-start justify-center gap-y-4"
              onClick={handleCardClick}
              style={getStyle(
                `features-section-card-${index + 1}`,
                uniqueId,
                "rgb(240,246,255)"
              )}
            >
              <div
                id={`features-button-${index + 1}-${uniqueId}`}
                className="text-xl text-white inline-block p-5 rounded-full"
                onClick={handleDivButtonClick}
                style={getStyle(
                  `features-button-${index + 1}`,
                  uniqueId,
                  "#4294E3"
                )}
              >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="um-icon _92496331"
                fill="currentColor"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path>
              </svg>
              </div>
              <h2
                id={`features-sub-heading-text-1-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `features-sub-heading-${index + 1}`,
                  uniqueId
                )}
                className={`features-sub-heading-${
                  index + 1
                }-${uniqueId} text-xl font-semibold`}
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
              className="w-[30%] max-md:w-[95%] mx-auto px-3 py-8 rounded-lg flex flex-col items-start justify-center gap-y-4"
              onClick={handleCardClick}
              style={getStyle(
                `features-section-card-${index + 1}`,
                uniqueId,
                "rgb(240,246,255)"
              )}
            >
              <div
                id={`features-button-${index + 1}-${uniqueId}`}
                className="text-xl text-white inline-block p-5 rounded-full"
                onClick={handleDivButtonClick}
                style={getStyle(
                  `features-button-${index + 1}`,
                  uniqueId,
                  "#4294E3"
                )}
              >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="um-icon _92496331"
                fill="currentColor"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path>
              </svg>
              </div>
              <h2
                id={`features-sub-heading-text-2-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `features-sub-heading-${index + 1}`,
                  uniqueId
                )}
                className={`features-sub-heading-${
                  index + 1
                }-${uniqueId} text-xl font-semibold`}
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
              className="w-[30%] max-md:w-[95%] mx-auto px-3 py-8 rounded-lg flex flex-col items-start justify-center gap-y-4"
              onClick={handleCardClick}
              style={getStyle(
                `features-section-card-${index + 1}`,
                uniqueId,
                "rgb(240,246,255)"
              )}
            >
              <div
                id={`features-button-${index + 1}-${uniqueId}`}
                className="text-xl text-white inline-block p-5 rounded-full"
                onClick={handleDivButtonClick}
                style={getStyle(
                  `features-button-${index + 1}`,
                  uniqueId,
                  "#4294E3"
                )}
              >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="um-icon _92496331"
                fill="currentColor"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path>
              </svg>
              </div>
              <h2
                id={`features-sub-heading-text-3-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `features-sub-heading-${index + 1}`,
                  uniqueId
                )}
                className={`features-sub-heading-${
                  index + 1
                }-${uniqueId} text-xl font-semibold`}
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

            <div
              id={`features-section-card-${index + 1}-${uniqueId}`}
              className="w-[30%] max-md:w-[95%] mx-auto px-3 py-8 rounded-lg flex flex-col items-start justify-center gap-y-4"
              onClick={handleCardClick}
              style={getStyle(
                `features-section-card-${index + 1}`,
                uniqueId,
                "rgb(240,246,255)"
              )}
            >
              <div
                id={`features-button-${index + 1}-${uniqueId}`}
                className="text-xl text-white inline-block p-5 rounded-full"
                onClick={handleDivButtonClick}
                style={getStyle(
                  `features-button-${index + 1}`,
                  uniqueId,
                  "#4294E3"
                )}
              >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="um-icon _92496331"
                fill="currentColor"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path>
              </svg>
              </div>
              <h2
                id={`features-sub-heading-text-4-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `features-sub-heading-${index + 1}`,
                  uniqueId
                )}
                className={`features-sub-heading-${
                  index + 1
                }-${uniqueId} text-xl font-semibold`}
                data-text="Heading"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[
                    `features-sub-heading-text-4-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `features-sub-heading-text-4-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `features-sub-heading-text-4-${index + 1}-${uniqueId}`
                      ] || "High Resolution",
                }}
              ></h2>
              <p
                id={`features-sub-paragraph-text-4-${index + 1}-${uniqueId}`}
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
                    `features-sub-paragraph-text-4-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `features-sub-paragraph-text-4-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `features-sub-paragraph-text-4-${index + 1}-${uniqueId}`
                      ] || text.description,
                }}
              ></p>
            </div>

            <div
              id={`features-section-card-${index + 1}-${uniqueId}`}
              className="w-[30%] max-md:w-[95%] mx-auto px-3 py-8 rounded-lg flex flex-col items-start justify-center gap-y-4"
              onClick={handleCardClick}
              style={getStyle(
                `features-section-card-${index + 1}`,
                uniqueId,
                "rgb(240,246,255)"
              )}
            >
              <div
                id={`features-button-${index + 1}-${uniqueId}`}
                className="text-xl text-white inline-block p-5 rounded-full"
                onClick={handleDivButtonClick}
                style={getStyle(
                  `features-button-${index + 1}`,
                  uniqueId,
                  "#4294E3"
                )}
              >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="um-icon _92496331"
                fill="currentColor"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path>
              </svg>
              </div>
              <h2
                id={`features-sub-heading-text-5-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `features-sub-heading-${index + 1}`,
                  uniqueId
                )}
                className={`features-sub-heading-${
                  index + 1
                }-${uniqueId} text-xl font-semibold`}
                data-text="Heading"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[
                    `features-sub-heading-text-5-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `features-sub-heading-text-5-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `features-sub-heading-text-5-${index + 1}-${uniqueId}`
                      ] || "High Resolution",
                }}
              ></h2>
              <p
                id={`features-sub-paragraph-text-5-${index + 1}-${uniqueId}`}
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
                    `features-sub-paragraph-text-5-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `features-sub-paragraph-text-5-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `features-sub-paragraph-text-5-${index + 1}-${uniqueId}`
                      ] || text.description,
                }}
              ></p>
            </div>

            <div
              id={`features-section-card-${index + 1}-${uniqueId}`}
              className="w-[30%] max-md:w-[95%] mx-auto px-3 py-8 rounded-lg flex flex-col items-start justify-center gap-y-4"
              onClick={handleCardClick}
              style={getStyle(
                `features-section-card-${index + 1}`,
                uniqueId,
                "rgb(240,246,255)"
              )}
            >
              <div
                id={`features-button-${index + 1}-${uniqueId}`}
                className="text-xl text-white inline-block p-5 rounded-full"
                onClick={handleDivButtonClick}
                style={getStyle(
                  `features-button-${index + 1}`,
                  uniqueId,
                  "#4294E3"
                )}
              >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="um-icon _92496331"
                fill="currentColor"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path>
              </svg>
              </div>
              <h2
                id={`features-sub-heading-text-6-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `features-sub-heading-${index + 1}`,
                  uniqueId
                )}
                className={`features-sub-heading-${
                  index + 1
                }-${uniqueId} text-xl font-semibold`}
                data-text="Heading"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[
                    `features-sub-heading-text-6-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `features-sub-heading-text-6-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `features-sub-heading-text-6-${index + 1}-${uniqueId}`
                      ] || "High Resolution",
                }}
              ></h2>
              <p
                id={`features-sub-paragraph-text-6-${index + 1}-${uniqueId}`}
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
                    `features-sub-paragraph-text-6-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `features-sub-paragraph-text-6-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `features-sub-paragraph-text-6-${index + 1}-${uniqueId}`
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

export default FeatureComponentSeven;
