const FeatureWithCardComponentOne = ({
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
              <h1
                id={`features-with-card-heading-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `features-with-card-heading-${index + 1}`,
                  uniqueId
                )}
                className={`features-with-card-heading-${
                  index + 1
                }-${uniqueId} text-[#231e41] text-3xl font-bold mb-1 break-words`}
                data-text="Heading"
                data-uses-dangerously-set-inner-html="true"
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
              ></h1>
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
                data-uses-dangerously-set-inner-html="true"
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

              <div className="flex gap-3 max-w-[400px] mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#231e41"
                  width="50"
                  height="50"
                  viewBox="0 0 512 512"
                >
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                </svg>

                <div className="mt-2">
                  <h2
                    id={`features-with-card-sub-heading-text-2-${
                      index + 1
                    }-${uniqueId}`}
                    className={`features-with-card-sub-heading-${
                      index + 1
                    }-${uniqueId} capitalize text-xl font-semibold text-[#231e41]`}
                    style={getElementStyle(
                      `features-with-card-sub-heading-${index + 1}`,
                      uniqueId
                    )}
                    data-text="Heading"
                    contentEditable={false}
                    onClick={handleTextClick}
                  >
                    {isEdited[
                      `features-with-card-sub-heading-text-2-${
                        index + 1
                      }-${uniqueId}`
                    ]
                      ? elementContent[
                          `features-with-card-sub-heading-text-2-${
                            index + 1
                          }-${uniqueId}`
                        ]
                      : elementContent[
                          `features-with-card-sub-heading-text-2-${
                            index + 1
                          }-${uniqueId}`
                        ] || "Item Two"}
                  </h2>
                  <p
                    id={`features-with-card-sub-paragraph-text-2-${
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
                      `features-with-card-sub-paragraph-text-2-${
                        index + 1
                      }-${uniqueId}`
                    ]
                      ? elementContent[
                          `features-with-card-sub-paragraph-text-2-${
                            index + 1
                          }-${uniqueId}`
                        ]
                      : elementContent[
                          `features-with-card-sub-paragraph-text-2-${
                            index + 1
                          }-${uniqueId}`
                        ] || text.description}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 max-w-[400px] mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#231e41"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
                </svg>

                <div className="mt-2">
                  <h2
                    id={`features-with-card-sub-heading-text-3-${
                      index + 1
                    }-${uniqueId}`}
                    className={`features-with-card-sub-heading-${
                      index + 1
                    }-${uniqueId} capitalize text-xl font-semibold text-[#231e41]`}
                    style={getElementStyle(
                      `features-with-card-sub-heading-${index + 1}`,
                      uniqueId
                    )}
                    data-text="Heading"
                    contentEditable={false}
                    onClick={handleTextClick}
                  >
                    {isEdited[
                      `features-with-card-sub-heading-text-3-${
                        index + 1
                      }-${uniqueId}`
                    ]
                      ? elementContent[
                          `features-with-card-sub-heading-text-3-${
                            index + 1
                          }-${uniqueId}`
                        ]
                      : elementContent[
                          `features-with-card-sub-heading-text-3-${
                            index + 1
                          }-${uniqueId}`
                        ] || "Item Three"}
                  </h2>
                  <p
                    id={`features-with-card-sub-paragraph-text-3-${
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
                      `features-with-card-sub-paragraph-text-3-${
                        index + 1
                      }-${uniqueId}`
                    ]
                      ? elementContent[
                          `features-with-card-sub-paragraph-text-3-${
                            index + 1
                          }-${uniqueId}`
                        ]
                      : elementContent[
                          `features-with-card-sub-paragraph-text-3-${
                            index + 1
                          }-${uniqueId}`
                        ] || text.description}
                  </p>
                </div>
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
              isMobile ? "mt-5 w-full" : ""
            } w-[40%] max-lg:w-full max-lg:mt-5`}
            onClick={handleCardClick}
            style={getStyle(`features-with-card-card-${index + 1}`, uniqueId)}
          >
            <img
              id={`features-with-card-image-${index + 1}-${uniqueId}`}
              src={
                elementContent[
                  `features-with-card-image-${index + 1}-${uniqueId}`
                ] || text.images[6]
              }
              alt="quickui-lib-image"
              className="block h-[550px] mx-auto object-cover rounded-xl"
              onClick={() =>
                handleImageClick(
                  elementContent[
                    `features-with-card-image-${index + 1}-${uniqueId}`
                  ] || text.images[6],
                  `features-with-card-image-${index + 1}-${uniqueId}`
                )
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureWithCardComponentOne