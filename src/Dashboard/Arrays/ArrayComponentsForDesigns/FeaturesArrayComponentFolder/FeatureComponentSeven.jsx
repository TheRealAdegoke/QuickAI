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
        <div className="py-24">
          <div className="w-[90%] max-w-[800px] mx-auto my-20">
            <h2
              id={`features-heading-${index + 1}-${uniqueId}`}
              style={getElementStyle(`features-heading-${index + 1}`, uniqueId)}
              className={`features-heading-${
                index + 1
              }-${uniqueId} text-5xl max-lg:text-4xl text-[rgba(22,38,23,1)] font-extrabold text-center`}
              data-text="Heading"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`features-heading-${index + 1}-${uniqueId}`]
                  ? elementContent[`features-heading-${index + 1}-${uniqueId}`]
                  : elementContent[
                      `features-heading-${index + 1}-${uniqueId}`
                    ] || text.featureHeader[5],
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
              id={`features-paragraph-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `features-paragraph-${index + 1}`,
                uniqueId
              )}
              className={`features-paragraph-${
                index + 1
              }-${uniqueId} text-[rgba(22,38,23,1)] text-center`}
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
                    ] || text.description,
              }}
            ></p>
          </div>

          <div className="lg:flex flex-row-reverse justify-between w-[95%] max-w-[1300px] mx-auto">
            <div className="flex flex-col w-full mb-8 lg:flex-row lg:w-[50%]">
              <div className="w-full lg:mb-0">
                <div className="relative h-full ml-0 mr-0 lg:mx-3">
                  <span
                    id={`features-card-${index + 1}-${uniqueId}`}
                    className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"
                    onClick={handleCardClick}
                    style={getStyle(
                      `features-card-${index + 1}`,
                      uniqueId,
                      "rgba(22,38,23,1)"
                    )}
                  ></span>
                  <div className="relative h-full bg-[rgb(222,222,222)] border-2 border-[rgba(22,38,23,1)] rounded-lg">
                    <img
                      id={`features-image-1-${index + 2}-${uniqueId}`}
                      src={
                        elementContent[
                          `features-image-1-${index + 2}-${uniqueId}`
                        ] || text.images[8]
                      }
                      alt="quickui-lib-image"
                      onClick={() =>
                        handleImageClick(
                          elementContent[
                            `features-image-1-${index + 2}-${uniqueId}`
                          ] || text.images[8],
                          `features-image-1-${index + 2}-${uniqueId}`
                        )
                      }
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full mb-5 lg:flex-row flex-wrap lg:gap-y-10">
              <div className="w-full mb-8 lg:mb-0 lg:w-1/2">
                <div className="relative h-full ml-0 mr-0 lg:mx-3">
                  <span
                    id={`features-card-${index + 1}-${uniqueId}`}
                    className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"
                    onClick={handleCardClick}
                    style={getStyle(
                      `features-card-${index + 1}`,
                      uniqueId,
                      "rgba(22,38,23,1)"
                    )}
                  ></span>
                  <div className="relative h-full bg-[rgb(222,222,222)] border-2 border-[rgba(22,38,23,1)] rounded-lg">
                    <img
                      id={`features-image-2-${index + 2}-${uniqueId}`}
                      src={
                        elementContent[
                          `features-image-2-${index + 2}-${uniqueId}`
                        ] || text.images[9]
                      }
                      alt="quickui-lib-image"
                      onClick={() =>
                        handleImageClick(
                          elementContent[
                            `features-image-2-${index + 2}-${uniqueId}`
                          ] || text.images[9],
                          `features-image-2-${index + 2}-${uniqueId}`
                        )
                      }
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full mb-8 lg:mb-0 lg:w-1/2">
                <div className="relative h-full ml-0 mr-0 lg:mx-3">
                  <span
                    id={`features-card-${index + 1}-${uniqueId}`}
                    className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"
                    onClick={handleCardClick}
                    style={getStyle(
                      `features-card-${index + 1}`,
                      uniqueId,
                      "rgba(22,38,23,1)"
                    )}
                  ></span>
                  <div className="relative h-full bg-[rgb(222,222,222)] border-2 border-[rgba(22,38,23,1)] rounded-lg">
                    <img
                      id={`features-image-3-${index + 2}-${uniqueId}`}
                      src={
                        elementContent[
                          `features-image-3-${index + 2}-${uniqueId}`
                        ] || text.images[3]
                      }
                      alt="quickui-lib-image"
                      onClick={() =>
                        handleImageClick(
                          elementContent[
                            `features-image-3-${index + 2}-${uniqueId}`
                          ] || text.images[3],
                          `features-image-3-${index + 2}-${uniqueId}`
                        )
                      }
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full mb-8 lg:mb-0 lg:w-1/2">
                <div className="relative h-full ml-0 mr-0 lg:mx-3">
                  <span
                    id={`features-card-${index + 1}-${uniqueId}`}
                    className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"
                    onClick={handleCardClick}
                    style={getStyle(
                      `features-card-${index + 1}`,
                      uniqueId,
                      "rgba(22,38,23,1)"
                    )}
                  ></span>
                  <div className="relative h-full bg-[rgb(222,222,222)] border-2 border-[rgba(22,38,23,1)] rounded-lg">
                    <img
                      id={`features-image-4-${index + 2}-${uniqueId}`}
                      src={
                        elementContent[
                          `features-image-4-${index + 2}-${uniqueId}`
                        ] || text.images[1]
                      }
                      alt="quickui-lib-image"
                      onClick={() =>
                        handleImageClick(
                          elementContent[
                            `features-image-4-${index + 2}-${uniqueId}`
                          ] || text.images[1],
                          `features-image-4-${index + 2}-${uniqueId}`
                        )
                      }
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="relative h-full ml-0 md:mx-3">
                  <span
                    id={`features-card-${index + 1}-${uniqueId}`}
                    className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"
                    onClick={handleCardClick}
                    style={getStyle(
                      `features-card-${index + 1}`,
                      uniqueId,
                      "rgba(22,38,23,1)"
                    )}
                  ></span>
                  <div className="relative h-full bg-[rgb(222,222,222)] border-2 border-[rgba(22,38,23,1)] rounded-lg">
                    <img
                      id={`features-image-5-${index + 2}-${uniqueId}`}
                      src={
                        elementContent[
                          `features-image-5-${index + 2}-${uniqueId}`
                        ] || text.images[5]
                      }
                      alt="quickui-lib-image"
                      onClick={() =>
                        handleImageClick(
                          elementContent[
                            `features-image-5-${index + 2}-${uniqueId}`
                          ] || text.images[5],
                          `features-image-5-${index + 2}-${uniqueId}`
                        )
                      }
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-10">
            <span
              id={`features-with-card-span-as-button-${index + 1}-${uniqueId}`}
              className="bg-white px-10 py-3 rounded-xl shadow-[4px_4px_0px_0px_rgba(22,38,23,1)] text-black w-[200px] text-center"
              onClick={handleDivButtonClick}
              style={getStyle(
                `features-with-card-span-as-button-${index + 1}`,
                uniqueId
              )}
            >
              <span
                id={`features-with-card-button-text-1-${index + 1}-${uniqueId}`}
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
                    ] || text.buttonTexts[3]}
              </span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureComponentSeven;
