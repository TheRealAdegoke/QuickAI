const TestimonialComponentNine = ({
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
}) => {
  return (
    <>
      <section
        onClick={handleDivClick}
        id={`testimonial-section-${index + 1}-${uniqueId}`}
        style={getStyle(`testimonial-section-${index + 1}`, uniqueId)}
      >
        <div className="py-24 text-black">
          <div className="text-center mb-20">
            <p
              id={`testimonial-paragraph-text-1-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `testimonial-paragraph-${index + 1}`,
                uniqueId
              )}
              className={`testimonial-paragraph-${
                index + 1
              }-${uniqueId} font-semibold mb-3`}
              data-text="Type a paragraph"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[
                  `testimonial-paragraph-text-1-${index + 1}-${uniqueId}`
                ]
                  ? elementContent[
                      `testimonial-paragraph-text-1-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `testimonial-paragraph-text-1-${index + 1}-${uniqueId}`
                    ] || "Testimonial",
              }}
            ></p>
            <h1
              id={`testimonial-heading-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `testimonial-heading-${index + 1}`,
                uniqueId
              )}
              className={`testimonial-heading-${
                index + 1
              }-${uniqueId} text-3xl font-bold mb-5`}
              data-text="Heading"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`testimonial-heading-${index + 1}-${uniqueId}`]
                  ? elementContent[
                      `testimonial-heading-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `testimonial-heading-${index + 1}-${uniqueId}`
                    ] || text.customerHeader[0],
              }}
            ></h1>
          </div>

          <div className="flex justify-center flex-wrap gap-6 w-[90%] max-w-[1200px] mx-auto max-md:flex-col max-md:gap-y-14">
            <div
              id={`testimonial-section-card-${index + 1}-${uniqueId}`}
              className="w-[30%] max-md:w-[95%] mx-auto px-3 py-8 rounded-lg flex flex-col items-start justify-center gap-y-4 relative"
              onClick={handleCardClick}
              style={getStyle(
                `testimonial-section-card-${index + 1}`,
                uniqueId,
                "rgb(240,246,255)"
              )}
            >
              <div className="flex gap-x-5">
                <div className="size-[70px]">
                  <img
                    id={`testimonial-image-1-${index + 1}-${uniqueId}`}
                    src={
                      elementContent[
                        `testimonial-image-1-${index + 1}-${uniqueId}`
                      ] ||
                      "https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
                    }
                    alt=""
                    className="block rounded-lg w-full h-full object-cover"
                    onClick={() =>
                      handleImageClick(
                        elementContent[
                          `testimonial-image-1-${index + 1}-${uniqueId}`
                        ] ||
                          "https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png",
                        `testimonial-image-1-${index + 1}-${uniqueId}`
                      )
                    }
                  />
                </div>

                <div>
                  <h2
                    id={`testimonial-sub-heading-text-1-${
                      index + 1
                    }-${uniqueId}`}
                    style={getElementStyle(
                      `testimonial-sub-heading-${index + 1}`,
                      uniqueId
                    )}
                    className={`testimonial-sub-heading-${
                      index + 1
                    }-${uniqueId} text-xl font-semibold`}
                    data-text="Heading"
                    data-uses-dangerously-set-inner-html="true"
                    contentEditable={false}
                    onClick={handleTextClick}
                    dangerouslySetInnerHTML={{
                      __html: isEdited[
                        `testimonial-sub-heading-text-1-${
                          index + 1
                        }-${uniqueId}`
                      ]
                        ? elementContent[
                            `testimonial-sub-heading-text-1-${
                              index + 1
                            }-${uniqueId}`
                          ]
                        : elementContent[
                            `testimonial-sub-heading-text-1-${
                              index + 1
                            }-${uniqueId}`
                          ] || "Client Name",
                    }}
                  ></h2>
                  <p
                    id={`testimonial-name-header-paragraph-text-1-${
                      index + 1
                    }-${uniqueId}`}
                    style={getElementStyle(
                      `testimonial-name-header-paragraph-${index + 1}`,
                      uniqueId
                    )}
                    className={`testimonial-name-header-paragraph-${
                      index + 1
                    }-${uniqueId} font-semibold`}
                    data-text="Type a paragraph"
                    data-uses-dangerously-set-inner-html="true"
                    contentEditable={false}
                    onClick={handleTextClick}
                    dangerouslySetInnerHTML={{
                      __html: isEdited[
                        `testimonial-name-header-paragraph-text-1-${
                          index + 1
                        }-${uniqueId}`
                      ]
                        ? elementContent[
                            `testimonial-name-header-paragraph-text-1-${
                              index + 1
                            }-${uniqueId}`
                          ]
                        : elementContent[
                            `testimonial-name-header-paragraph-text-1-${
                              index + 1
                            }-${uniqueId}`
                          ] || "Profession",
                    }}
                  ></p>
                  <p
                    id={`testimonial-icon-text-1-${index + 1}-${uniqueId}`}
                    style={getElementStyle(
                      `testimonial-icon-${index + 1}`,
                      uniqueId
                    )}
                    className={`testimonial-icon-${index + 1}-${uniqueId}`}
                    data-text="Type a paragraph"
                    data-uses-dangerously-set-inner-html="true"
                    contentEditable={false}
                    onClick={handleTextClick}
                    dangerouslySetInnerHTML={{
                      __html: isEdited[
                        `testimonial-icon-text-1-${index + 1}-${uniqueId}`
                      ]
                        ? elementContent[
                            `testimonial-icon-text-1-${index + 1}-${uniqueId}`
                          ]
                        : elementContent[
                            `testimonial-icon-text-1-${index + 1}-${uniqueId}`
                          ] || "★★★★★★",
                    }}
                  ></p>
                </div>
              </div>
              <p
                id={`testimonial-sub-paragraph-text-1-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `testimonial-sub-paragraph-${index + 1}`,
                  uniqueId
                )}
                className={`testimonial-sub-paragraph-${
                  index + 1
                }-${uniqueId} font-medium text-[rgba(0,0,0,0.5)]`}
                data-text="Type a paragraph"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[
                    `testimonial-sub-paragraph-text-1-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `testimonial-sub-paragraph-text-1-${
                          index + 1
                        }-${uniqueId}`
                      ]
                    : elementContent[
                        `testimonial-sub-paragraph-text-1-${
                          index + 1
                        }-${uniqueId}`
                      ] || text.customerReviewText[0],
                }}
              ></p>
            </div>

            <div
              id={`testimonial-section-card-${index + 1}-${uniqueId}`}
              className="w-[30%] max-md:w-[95%] mx-auto px-3 py-8 rounded-lg flex flex-col items-start justify-center gap-y-4 relative"
              onClick={handleCardClick}
              style={getStyle(
                `testimonial-section-card-${index + 1}`,
                uniqueId,
                "rgb(240,246,255)"
              )}
            >
              <div className="flex gap-x-5">
                <div className="size-[70px]">
                  <img
                    id={`testimonial-image-2-${index + 1}-${uniqueId}`}
                    src={
                      elementContent[
                        `testimonial-image-2-${index + 1}-${uniqueId}`
                      ] ||
                      "https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
                    }
                    alt=""
                    className="block rounded-lg w-full h-full object-cover"
                    onClick={() =>
                      handleImageClick(
                        elementContent[
                          `testimonial-image-2-${index + 1}-${uniqueId}`
                        ] ||
                          "https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png",
                        `testimonial-image-2-${index + 1}-${uniqueId}`
                      )
                    }
                  />
                </div>

                <div>
                  <h2
                    id={`testimonial-sub-heading-text-2-${
                      index + 1
                    }-${uniqueId}`}
                    style={getElementStyle(
                      `testimonial-sub-heading-${index + 1}`,
                      uniqueId
                    )}
                    className={`testimonial-sub-heading-${
                      index + 1
                    }-${uniqueId} text-xl font-semibold`}
                    data-text="Heading"
                    data-uses-dangerously-set-inner-html="true"
                    contentEditable={false}
                    onClick={handleTextClick}
                    dangerouslySetInnerHTML={{
                      __html: isEdited[
                        `testimonial-sub-heading-text-2-${
                          index + 1
                        }-${uniqueId}`
                      ]
                        ? elementContent[
                            `testimonial-sub-heading-text-2-${
                              index + 1
                            }-${uniqueId}`
                          ]
                        : elementContent[
                            `testimonial-sub-heading-text-2-${
                              index + 1
                            }-${uniqueId}`
                          ] || "Client Name",
                    }}
                  ></h2>
                  <p
                    id={`testimonial-name-header-paragraph-text-2-${
                      index + 1
                    }-${uniqueId}`}
                    style={getElementStyle(
                      `testimonial-name-header-paragraph-${index + 1}`,
                      uniqueId
                    )}
                    className={`testimonial-name-header-paragraph-${
                      index + 1
                    }-${uniqueId} font-semibold`}
                    data-text="Type a paragraph"
                    data-uses-dangerously-set-inner-html="true"
                    contentEditable={false}
                    onClick={handleTextClick}
                    dangerouslySetInnerHTML={{
                      __html: isEdited[
                        `testimonial-name-header-paragraph-text-2-${
                          index + 1
                        }-${uniqueId}`
                      ]
                        ? elementContent[
                            `testimonial-name-header-paragraph-text-2-${
                              index + 1
                            }-${uniqueId}`
                          ]
                        : elementContent[
                            `testimonial-name-header-paragraph-text-2-${
                              index + 1
                            }-${uniqueId}`
                          ] || "Profession",
                    }}
                  ></p>
                  <p
                    id={`testimonial-icon-text-2-${index + 1}-${uniqueId}`}
                    style={getElementStyle(
                      `testimonial-icon-${index + 1}`,
                      uniqueId
                    )}
                    className={`testimonial-icon-${index + 1}-${uniqueId}`}
                    data-text="Type a paragraph"
                    data-uses-dangerously-set-inner-html="true"
                    contentEditable={false}
                    onClick={handleTextClick}
                    dangerouslySetInnerHTML={{
                      __html: isEdited[
                        `testimonial-icon-text-2-${index + 1}-${uniqueId}`
                      ]
                        ? elementContent[
                            `testimonial-icon-text-2-${index + 1}-${uniqueId}`
                          ]
                        : elementContent[
                            `testimonial-icon-text-2-${index + 1}-${uniqueId}`
                          ] || "★★★★★★",
                    }}
                  ></p>
                </div>
              </div>
              <p
                id={`testimonial-sub-paragraph-text-2-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `testimonial-sub-paragraph-${index + 1}`,
                  uniqueId
                )}
                className={`testimonial-sub-paragraph-${
                  index + 1
                }-${uniqueId} font-medium text-[rgba(0,0,0,0.5)]`}
                data-text="Type a paragraph"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[
                    `testimonial-sub-paragraph-text-2-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `testimonial-sub-paragraph-text-2-${
                          index + 1
                        }-${uniqueId}`
                      ]
                    : elementContent[
                        `testimonial-sub-paragraph-text-2-${
                          index + 1
                        }-${uniqueId}`
                      ] || text.customerReviewText[0],
                }}
              ></p>
            </div>

            <div
              id={`testimonial-section-card-${index + 1}-${uniqueId}`}
              className="w-[30%] max-md:w-[95%] mx-auto px-3 py-8 rounded-lg flex flex-col items-start justify-center gap-y-4 relative"
              onClick={handleCardClick}
              style={getStyle(
                `testimonial-section-card-${index + 1}`,
                uniqueId,
                "rgb(240,246,255)"
              )}
            >
              <div className="flex gap-x-5">
                <div className="size-[70px]">
                  <img
                    id={`testimonial-image-3-${index + 1}-${uniqueId}`}
                    src={
                      elementContent[
                        `testimonial-image-3-${index + 1}-${uniqueId}`
                      ] ||
                      "https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
                    }
                    alt=""
                    className="block rounded-lg w-full h-full object-cover"
                    onClick={() =>
                      handleImageClick(
                        elementContent[
                          `testimonial-image-3-${index + 1}-${uniqueId}`
                        ] ||
                          "https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png",
                        `testimonial-image-3-${index + 1}-${uniqueId}`
                      )
                    }
                  />
                </div>

                <div>
                  <h2
                    id={`testimonial-sub-heading-text-3-${
                      index + 1
                    }-${uniqueId}`}
                    style={getElementStyle(
                      `testimonial-sub-heading-${index + 1}`,
                      uniqueId
                    )}
                    className={`testimonial-sub-heading-${
                      index + 1
                    }-${uniqueId} text-xl font-semibold`}
                    data-text="Heading"
                    data-uses-dangerously-set-inner-html="true"
                    contentEditable={false}
                    onClick={handleTextClick}
                    dangerouslySetInnerHTML={{
                      __html: isEdited[
                        `testimonial-sub-heading-text-3-${
                          index + 1
                        }-${uniqueId}`
                      ]
                        ? elementContent[
                            `testimonial-sub-heading-text-3-${
                              index + 1
                            }-${uniqueId}`
                          ]
                        : elementContent[
                            `testimonial-sub-heading-text-3-${
                              index + 1
                            }-${uniqueId}`
                          ] || "Client Name",
                    }}
                  ></h2>
                  <p
                    id={`testimonial-name-header-paragraph-text-3-${
                      index + 1
                    }-${uniqueId}`}
                    style={getElementStyle(
                      `testimonial-name-header-paragraph-${index + 1}`,
                      uniqueId
                    )}
                    className={`testimonial-name-header-paragraph-${
                      index + 1
                    }-${uniqueId} font-semibold`}
                    data-text="Type a paragraph"
                    data-uses-dangerously-set-inner-html="true"
                    contentEditable={false}
                    onClick={handleTextClick}
                    dangerouslySetInnerHTML={{
                      __html: isEdited[
                        `testimonial-name-header-paragraph-text-3-${
                          index + 1
                        }-${uniqueId}`
                      ]
                        ? elementContent[
                            `testimonial-name-header-paragraph-text-3-${
                              index + 1
                            }-${uniqueId}`
                          ]
                        : elementContent[
                            `testimonial-name-header-paragraph-text-3-${
                              index + 1
                            }-${uniqueId}`
                          ] || "Profession",
                    }}
                  ></p>
                  <p
                    id={`testimonial-icon-text-3-${index + 1}-${uniqueId}`}
                    style={getElementStyle(
                      `testimonial-icon-${index + 1}`,
                      uniqueId
                    )}
                    className={`testimonial-icon-${index + 1}-${uniqueId}`}
                    data-text="Type a paragraph"
                    data-uses-dangerously-set-inner-html="true"
                    contentEditable={false}
                    onClick={handleTextClick}
                    dangerouslySetInnerHTML={{
                      __html: isEdited[
                        `testimonial-icon-text-3-${index + 1}-${uniqueId}`
                      ]
                        ? elementContent[
                            `testimonial-icon-text-3-${index + 1}-${uniqueId}`
                          ]
                        : elementContent[
                            `testimonial-icon-text-3-${index + 1}-${uniqueId}`
                          ] || "★★★★★★",
                    }}
                  ></p>
                </div>
              </div>
              <p
                id={`testimonial-sub-paragraph-text-3-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `testimonial-sub-paragraph-${index + 1}`,
                  uniqueId
                )}
                className={`testimonial-sub-paragraph-${
                  index + 1
                }-${uniqueId} font-medium text-[rgba(0,0,0,0.5)]`}
                data-text="Type a paragraph"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[
                    `testimonial-sub-paragraph-text-3-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `testimonial-sub-paragraph-text-3-${
                          index + 1
                        }-${uniqueId}`
                      ]
                    : elementContent[
                        `testimonial-sub-paragraph-text-3-${
                          index + 1
                        }-${uniqueId}`
                      ] || text.customerReviewText[0],
                }}
              ></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialComponentNine;
