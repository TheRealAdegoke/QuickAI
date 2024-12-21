const TestimonialComponentThree = ({
  text,
  handleDivClick,
  handleTextClick,
  getStyle,
  getElementStyle,
  index,
  isEdited,
  uniqueId,
  elementContent,
}) => {
  return (
    <>
      <section
        onClick={handleDivClick}
        id={`testimonial-section-${index + 1}-${uniqueId}`}
        style={getStyle(`testimonial-section-${index + 1}`, uniqueId)}
      >
        <div className="py-32 text-black w-[90%] max-w-[1000px] mx-auto">
          <h1
            id={`testimonial-heading-${index + 1}-${uniqueId}`}
            style={getElementStyle(
              `testimonial-heading-${index + 1}`,
              uniqueId
            )}
            className={`testimonial-heading-${
              index + 1
            }-${uniqueId} text-3xl font-semibold capitalize mb-1 text-center`}
            data-text="Heading"
            data-uses-dangerously-set-inner-html="true"
            contentEditable={false}
            onClick={handleTextClick}
            dangerouslySetInnerHTML={{
              __html: isEdited[`testimonial-heading-${index + 1}-${uniqueId}`]
                ? elementContent[`testimonial-heading-${index + 1}-${uniqueId}`]
                : elementContent[
                    `testimonial-heading-${index + 1}-${uniqueId}`
                  ] || text.customerHeader[0],
            }}
          ></h1>
          <p
            id={`testimonial-paragraph-${index + 1}-${uniqueId}`}
            style={getElementStyle(
              `testimonial-paragraph-${index + 1}`,
              uniqueId
            )}
            className={`testimonial-paragraph-${
              index + 1
            }-${uniqueId} text-base text-center`}
            data-text="Type a paragraph"
            data-uses-dangerously-set-inner-html="true"
            contentEditable={false}
            onClick={handleTextClick}
            dangerouslySetInnerHTML={{
              __html: isEdited[`testimonial-paragraph-${index + 1}-${uniqueId}`]
                ? elementContent[
                    `testimonial-paragraph-${index + 1}-${uniqueId}`
                  ]
                : elementContent[
                    `testimonial-paragraph-${index + 1}-${uniqueId}`
                  ] || text.customerParagraphText[0],
            }}
          ></p>

          <div className="flex flex-wrap justify-evenly mt-10 max-[600px]:gap-5 max-[600px]:flex-col text-center">
            <div className="flex flex-col gap-1 w-[30%] max-[600px]:w-[90%]">
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
                      ] || "★★★★★",
                }}
              ></p>
              <h2
                id={`testimonial-sub-heading-text-1-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `testimonial-sub-heading-${index + 1}`,
                  uniqueId
                )}
                className={`testimonial-sub-heading-${
                  index + 1
                }-${uniqueId} text-base font-semibold`}
                data-text="Heading"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[
                    `testimonial-sub-heading-text-1-${index + 1}-${uniqueId}`
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
                      ] || "The Most Amazing product ever",
                }}
              ></h2>
              <p
                id={`testimonial-sub-paragraph-text-1-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `testimonial-sub-paragraph-${index + 1}`,
                  uniqueId
                )}
                className={`testimonial-sub-paragraph-${
                  index + 1
                }-${uniqueId} text-sm md:min-h-[9rem] `}
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
                }-${uniqueId} max-lg:mt-3`}
                data-text="Type a paragraph"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[
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
                    ] || "Gabriel - Founder"}
              </p>
            </div>
            <div className="flex flex-col gap-1 w-[30%] max-[600px]:w-[90%]">
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
                      ] || "★★★★★",
                }}
              ></p>
              <h2
                id={`testimonial-sub-heading-text-2-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `testimonial-sub-heading-${index + 1}`,
                  uniqueId
                )}
                className={`testimonial-sub-heading-${
                  index + 1
                }-${uniqueId} text-base font-semibold`}
                data-text="Heading"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[
                    `testimonial-sub-heading-text-2-${index + 1}-${uniqueId}`
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
                      ] || "The Most Amazing product ever",
                }}
              ></h2>
              <p
                id={`testimonial-sub-paragraph-text-2-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `testimonial-sub-paragraph-${index + 1}`,
                  uniqueId
                )}
                className={`testimonial-sub-paragraph-${
                  index + 1
                }-${uniqueId} text-sm md:min-h-[9rem] `}
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
                }-${uniqueId} max-lg:mt-3`}
                data-text="Type a paragraph"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[
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
                    ] || "Gabriel - Founder"}
              </p>
            </div>
            <div className="flex flex-col gap-1 w-[30%] max-[600px]:w-[90%]">
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
                      ] || "★★★★★",
                }}
              ></p>
              <h2
                id={`testimonial-sub-heading-text-3-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `testimonial-sub-heading-${index + 1}`,
                  uniqueId
                )}
                className={`testimonial-sub-heading-${
                  index + 1
                }-${uniqueId} text-base font-semibold`}
                data-text="Heading"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[
                    `testimonial-sub-heading-text-3-${index + 1}-${uniqueId}`
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
                      ] || "The Most Amazing product ever",
                }}
              ></h2>
              <p
                id={`testimonial-sub-paragraph-text-3-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `testimonial-sub-paragraph-${index + 1}`,
                  uniqueId
                )}
                className={`testimonial-sub-paragraph-${
                  index + 1
                }-${uniqueId} text-sm md:min-h-[9rem] `}
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
                }-${uniqueId} max-lg:mt-3`}
                data-text="Type a paragraph"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[
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
                    ] || "Gabriel - Founder"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialComponentThree;
