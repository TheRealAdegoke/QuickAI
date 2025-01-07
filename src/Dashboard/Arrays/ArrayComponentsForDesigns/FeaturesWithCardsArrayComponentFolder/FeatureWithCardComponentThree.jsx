const FeatureWithCardComponentThree = ({
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
  handleImageClick,
  handleCardClick,
  handleDivButtonClick,
}) => {
  return (
    <>
      <section
        onClick={handleDivClick}
        id={`features-with-card-section-${index + 1}-${uniqueId}`}
        style={getStyle(`features-with-card-section-${index + 1}`, uniqueId)}
      >
        <div
          className={`${
            isMobile ? "flex-col" : ""
          } text-black w-[90%] mx-auto py-24 flex max-lg:flex-col justify-between max-w-[1000px]`}
        >
          <div
            className={`${
              isMobile ? "w-full" : ""
            } w-[50%] flex flex-col items-start gap-3 max-lg:w-full`}
          >
            <div className="">
              <h2
                id={`features-with-card-heading-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `features-with-card-heading-${index + 1}`,
                  uniqueId
                )}
                className={`features-with-card-heading-${
                  index + 1
                }-${uniqueId} text-[#231e41] text-3xl font-bold mb-1 break-words`}
                data-text="Heading"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[
                    `features-with-card-heading-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `features-with-card-heading-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `features-with-card-heading-${index + 1}-${uniqueId}`
                      ] || text.featureHeader[0],
                }}
              ></h2>
              <p
                id={`features-with-card-paragraph-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `features-with-card-paragraph-${index + 1}`,
                  uniqueId
                )}
                className={`features-with-card-paragraph-${
                  index + 1
                }-${uniqueId} text-[#231e41] max-w-[500px] break-words`}
                data-text="Type a paragraph"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[
                    `features-with-card-paragraph-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `features-with-card-paragraph-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `features-with-card-paragraph-${index + 1}-${uniqueId}`
                      ] || text.description,
                }}
              ></p>
            </div>

            <div>
              <div className="flex gap-3 max-w-[400px] mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#231e41"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
                </svg>

                <div className="mt-2">
                  <h2
                    id={`features-with-card-sub-heading-text-1-${
                      index + 1
                    }-${uniqueId}`}
                    className={`features-with-card-sub-heading-${
                      index + 1
                    }-${uniqueId} capitalize text-xl font-semibold text-[#231e41]`}
                    style={getElementStyle(
                      `features-with-card-sub-heading-${index + 1}`,
                      uniqueId,
                      uniqueId
                    )}
                    data-text="Heading"
                    contentEditable={false}
                    onClick={handleTextClick}
                  >
                    {isEdited[
                      `features-with-card-sub-heading-text-1-${
                        index + 1
                      }-${uniqueId}`
                    ]
                      ? elementContent[
                          `features-with-card-sub-heading-text-1-${
                            index + 1
                          }-${uniqueId}`
                        ]
                      : elementContent[
                          `features-with-card-sub-heading-text-1-${
                            index + 1
                          }-${uniqueId}`
                        ] || "Item One"}
                  </h2>
                  <p
                    id={`features-with-card-sub-paragraph-text-1-${
                      index + 1
                    }-${uniqueId}`}
                    style={getElementStyle(
                      `features-with-card-sub-paragraph-${index + 1}`,
                      uniqueId
                    )}
                    className={`features-with-card-sub-paragraph-${
                      index + 1
                    }-${uniqueId} text-[#231e41] `}
                    data-text="Type a paragraph"
                    contentEditable={false}
                    onClick={handleTextClick}
                  >
                    {isEdited[
                      `features-with-card-sub-paragraph-text-1-${
                        index + 1
                      }-${uniqueId}`
                    ]
                      ? elementContent[
                          `features-with-card-sub-paragraph-text-1-${
                            index + 1
                          }-${uniqueId}`
                        ]
                      : elementContent[
                          `features-with-card-sub-paragraph-text-1-${
                            index + 1
                          }-${uniqueId}`
                        ] || text.description}
                  </p>
                </div>
              </div>

              <div
                id={`features-with-card-card-${index + 1}-${uniqueId}`}
                className={`${
                  isMobile ? "hidden" : ""
                } w-full max-lg:mt-5 max-lg:hidden`}
                onClick={handleCardClick}
                style={getStyle(
                  `features-with-card-card-${index + 1}`,
                  uniqueId
                )}
              >
                <img
                  id={`features-with-card-image-${index + 1}-${uniqueId}`}
                  src={
                    elementContent[
                      `features-with-card-image-${index + 1}-${uniqueId}`
                    ] || text.images[8]
                  }
                  alt="quickui-lib-image"
                  className="block w-full h-[300px] mx-auto object-cover rounded-xl"
                  onClick={() =>
                    handleImageClick(
                      elementContent[
                        `features-with-card-image-${index + 1}-${uniqueId}`
                      ] || text.images[8],
                      `features-with-card-image-${index + 1}-${uniqueId}`
                    )
                  }
                />
              </div>
            </div>

            <button
              id={`features-with-card-button-${index + 1}-${uniqueId}`}
              className="capitalize flex text-black shadow-lg px-8 py-2 rounded-full font-semibold text-sm my-3 border-[1px] border-[rgba(0,0,0,0.2)]"
              onClick={handleDivButtonClick}
              style={getStyle(
                `features-with-card-button-${index + 1}`,
                uniqueId
              )}
            >
              <span
                id={`features-with-card-button-text-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `features-with-card-button-text-style-${index + 1}`,
                  uniqueId
                )}
                className={`features-with-card-button-text-style-${
                  index + 1
                }-${uniqueId}`}
                data-text="Button text"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[
                  `features-with-card-button-text-${index + 1}-${uniqueId}`
                ]
                  ? elementContent[
                      `features-with-card-button-text-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `features-with-card-button-text-${index + 1}-${uniqueId}`
                    ] || text.buttonTexts[4]}
              </span>
            </button>
          </div>

          <div
            id={`features-with-card-card-${index + 1}-${uniqueId}`}
            className={`${
              isMobile ? "w-full mt-5" : ""
            } w-[40%] max-lg:w-full max-lg:mt-5`}
            onClick={handleCardClick}
            style={getStyle(`features-with-card-card-${index + 1}`, uniqueId)}
          >
            <img
              id={`features-with-card-image-${index + 2}-${uniqueId}`}
              src={
                elementContent[
                  `features-with-card-image-${index + 2}-${uniqueId}`
                ] || text.images[7]
              }
              alt="quickui-lib-image"
              className="block w-full h-[550px] mx-auto object-cover rounded-xl"
              onClick={() =>
                handleImageClick(
                  elementContent[
                    `features-with-card-image-${index + 2}-${uniqueId}`
                  ] || text.images[7],
                  `features-with-card-image-${index + 2}-${uniqueId}`
                )
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureWithCardComponentThree;
