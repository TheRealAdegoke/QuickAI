const FeatureWithCardComponentSix = ({
  text,
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
        <div className="py-24">
          <div className="w-[90%] max-w-[800px] mx-auto my-20">
            <h2
              id={`features-with-card-heading-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `features-with-card-heading-${index + 1}`,
                uniqueId
              )}
              className={`features-with-card-heading-${
                index + 1
              }-${uniqueId} text-5xl max-lg:text-4xl text-[rgba(22,38,23,1)] font-extrabold text-center`}
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
            ></h2>
            <div
              id={`header-underline-${index + 1}-${uniqueId}`}
              className="h-[6px] w-[100px] my-8 mx-auto"
              onClick={handleCardClick}
              style={getStyle(
                `header-underline-${index + 1}`,
                uniqueId,
                "rgba(22,38,23,1)"
              )}
            ></div>
            <p
              id={`features-with-card-paragraph-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `features-with-card-paragraph-${index + 1}`,
                uniqueId
              )}
              className={`features-with-card-paragraph-${
                index + 1
              }-${uniqueId} text-[rgba(22,38,23,1)] text-center`}
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

          <div className="lg:flex lg:gap-10 lg:mt-48 max-w-[1200px] mx-auto lg:px-10">
            <div
              id={`features-with-card-card-${index + 1}-${uniqueId}`}
              className="h-[450px] w-2/6 max-lg:w-[90%] max-lg:mx-auto rounded-3xl pr-2 pt-1 pb-2 relative"
              onClick={handleCardClick}
              style={getStyle(
                `features-with-card-card-${index + 1}`,
                uniqueId,
                "rgba(22,38,23,1)"
              )}
            >
              <img
                id={`features-with-card-image-1-${index + 2}-${uniqueId}`}
                src={
                  elementContent[
                    `features-with-card-image-1-${index + 2}-${uniqueId}`
                  ] || text.images[8]
                }
                alt="quickui-lib-image"
                className="h-full w-full rounded-3xl object-cover"
                onClick={() =>
                  handleImageClick(
                    elementContent[
                      `features-with-card-image-1-${index + 2}-${uniqueId}`
                    ] || text.images[8],
                    `features-with-card-image-1-${index + 2}-${uniqueId}`
                  )
                }
              />
              <span
                id={`features-with-card-span-as-button-${
                  index + 1
                }-${uniqueId}`}
                className="px-10 py-5 rounded-xl shadow-[4px_4px_0px_0px_rgba(22,38,23,1)] text-black w-[200px] absolute top-[10%] right-[-40%] text-center font-bold max-lg:hidden"
                onClick={handleDivButtonClick}
                style={getStyle(
                  `features-with-card-span-as-button-${index + 1}`,
                  uniqueId
                )}
              >
                <span
                  id={`features-with-card-button-text-1-${
                    index + 1
                  }-${uniqueId}`}
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
                    `features-with-card-button-text-1-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `features-with-card-button-text-1-${
                          index + 1
                        }-${uniqueId}`
                      ]
                    : elementContent[
                        `features-with-card-button-text-1-${
                          index + 1
                        }-${uniqueId}`
                      ] || text.buttonTexts[4]}
                </span>
              </span>
              <span
                id={`features-with-card-span-as-button-${
                  index + 1
                }-${uniqueId}`}
                className="px-10 py-5 rounded-xl shadow-[4px_4px_0px_0px_rgba(22,38,23,1)] text-black w-[200px] absolute bottom-[20%] left-[-15%] text-center font-bold max-lg:hidden"
                onClick={handleDivButtonClick}
                style={getStyle(
                  `features-with-card-span-as-button-${index + 1}`,
                  uniqueId
                )}
              >
                <span
                  id={`features-with-card-button-text-2-${
                    index + 1
                  }-${uniqueId}`}
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
                    `features-with-card-button-text-2-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `features-with-card-button-text-2-${
                          index + 1
                        }-${uniqueId}`
                      ]
                    : elementContent[
                        `features-with-card-button-text-2-${
                          index + 1
                        }-${uniqueId}`
                      ] || text.buttonTexts[4]}
                </span>
              </span>
            </div>

            <div
              id={`features-with-card-card-${index + 1}-${uniqueId}`}
              className="h-[450px] w-2/6 rounded-3xl pr-2 pt-1 pb-2 mt-[-80px] max-lg:hidden"
              onClick={handleCardClick}
              style={getStyle(
                `features-with-card-card-${index + 1}`,
                uniqueId,
                "rgba(22,38,23,1)"
              )}
            >
              <img
                id={`features-with-card-image-2-${index + 2}-${uniqueId}`}
                src={
                  elementContent[
                    `features-with-card-image-2-${index + 2}-${uniqueId}`
                  ] || text.images[7]
                }
                alt="quickui-lib-image"
                className="h-full w-full rounded-3xl object-cover"
                onClick={() =>
                  handleImageClick(
                    elementContent[
                      `features-with-card-image-2-${index + 2}-${uniqueId}`
                    ] || text.images[7],
                    `features-with-card-image-2-${index + 2}-${uniqueId}`
                  )
                }
              />
            </div>

            <div
              id={`features-with-card-card-${index + 1}-${uniqueId}`}
              className="h-[450px] w-2/6 rounded-3xl pr-2 pt-1 pb-2 relative max-lg:hidden"
              onClick={handleCardClick}
              style={getStyle(
                `features-with-card-card-${index + 1}`,
                uniqueId,
                "rgba(22,38,23,1)"
              )}
            >
              <img
                id={`features-with-card-image-3-${index + 2}-${uniqueId}`}
                src={
                  elementContent[
                    `features-with-card-image-3-${index + 2}-${uniqueId}`
                  ] || text.images[6]
                }
                alt="quickui-lib-image"
                className="h-full w-full rounded-3xl object-cover"
                onClick={() =>
                  handleImageClick(
                    elementContent[
                      `features-with-card-image-3-${index + 2}-${uniqueId}`
                    ] || text.images[6],
                    `features-with-card-image-3-${index + 2}-${uniqueId}`
                  )
                }
              />
              <span
                id={`features-with-card-span-as-button-${
                  index + 1
                }-${uniqueId}`}
                className="px-10 py-5 rounded-xl shadow-[4px_4px_0px_0px_rgba(22,38,23,1)] text-black w-[200px] absolute top-0 left-[-50%] text-center font-bold max-lg:hidden"
                onClick={handleDivButtonClick}
                style={getStyle(
                  `features-with-card-span-as-button-${index + 1}`,
                  uniqueId
                )}
              >
                <span
                  id={`features-with-card-button-text-3-${
                    index + 1
                  }-${uniqueId}`}
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
                    `features-with-card-button-text-3-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `features-with-card-button-text-3-${
                          index + 1
                        }-${uniqueId}`
                      ]
                    : elementContent[
                        `features-with-card-button-text-3-${
                          index + 1
                        }-${uniqueId}`
                      ] || text.buttonTexts[4]}
                </span>
              </span>
              <span
                id={`features-with-card-span-as-button-${
                  index + 1
                }-${uniqueId}`}
                className="px-10 py-5 rounded-xl shadow-[4px_4px_0px_0px_rgba(22,38,23,1)] text-black w-[200px] absolute top-[40%] right-[-15%] text-center font-bold max-lg:hidden"
                onClick={handleDivButtonClick}
                style={getStyle(
                  `features-with-card-span-as-button-${index + 1}`,
                  uniqueId
                )}
              >
                <span
                  id={`features-with-card-button-text-4-${
                    index + 1
                  }-${uniqueId}`}
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
                    `features-with-card-button-text-4-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `features-with-card-button-text-4-${
                          index + 1
                        }-${uniqueId}`
                      ]
                    : elementContent[
                        `features-with-card-button-text-4-${
                          index + 1
                        }-${uniqueId}`
                      ] || text.buttonTexts[4]}
                </span>
              </span>
              <span
                id={`features-with-card-span-as-button-${
                  index + 1
                }-${uniqueId}`}
                className="px-10 py-5 rounded-xl shadow-[4px_4px_0px_0px_rgba(22,38,23,1)] text-black w-[200px] absolute bottom-10 left-[-50%] text-center font-bold max-lg:hidden"
                onClick={handleDivButtonClick}
                style={getStyle(
                  `features-with-card-span-as-button-${index + 1}`,
                  uniqueId
                )}
              >
                <span
                  id={`features-with-card-button-text-5-${
                    index + 1
                  }-${uniqueId}`}
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
                    `features-with-card-button-text-5-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `features-with-card-button-text-5-${
                          index + 1
                        }-${uniqueId}`
                      ]
                    : elementContent[
                        `features-with-card-button-text-5-${
                          index + 1
                        }-${uniqueId}`
                      ] || text.buttonTexts[4]}
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureWithCardComponentSix;
