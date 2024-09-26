export const testimonialComponent = ({
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
}) => {

  return [
    <section
      onClick={handleDivClick}
      id={`testimonial-section-${index + 1}-${uniqueId}`}
      style={getStyle(`testimonial-section-${index + 1}`, uniqueId)}
    >
      <div className="py-32 text-black w-[90%] max-w-[1000px] mx-auto">
        <h1
          id={`testimonial-heading-${index + 1}-${uniqueId}`}
          style={getElementStyle(`testimonial-heading-${index + 1}`, uniqueId)}
          className={`testimonial-heading-${
            index + 1
          }-${uniqueId} text-center text-3xl font-semibold capitalize mb-5 `}
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
          }-${uniqueId} text-center text-xl `}
          data-text="Type a paragraph"
          data-uses-dangerously-set-inner-html="true"
          contentEditable={false}
          onClick={handleTextClick}
          dangerouslySetInnerHTML={{
            __html: isEdited[`testimonial-paragraph-${index + 1}-${uniqueId}`]
              ? elementContent[`testimonial-paragraph-${index + 1}-${uniqueId}`]
              : elementContent[
                  `testimonial-paragraph-${index + 1}-${uniqueId}`
                ] || text.customerReviewText[0],
          }}
        ></p>

        <div className="my-8 flex items-center justify-center gap-3">
          <img
            src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
            alt=""
            className="block rounded-full w-[50px] h-[50px] object-cover"
          />
          <div className="text-sm font-semibold">
            <p
              id={`testimonial-name-header-paragraph-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `testimonial-name-header-paragraph-${index + 1}`,
                uniqueId
              )}
              className={`testimonial-name-header-paragraph-${
                index + 1
              }-${uniqueId}`}
              data-text="Type a paragraph"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {isEdited[
                `testimonial-name-header-paragraph-${index + 1}-${uniqueId}`
              ]
                ? elementContent[
                    `testimonial-name-header-paragraph-${index + 1}-${uniqueId}`
                  ]
                : elementContent[
                    `testimonial-name-header-paragraph-${index + 1}-${uniqueId}`
                  ] || "Gabriel"}
            </p>
            <p
              id={`testimonial-name-paragraph-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `testimonial-name-paragraph-${index + 1}`,
                uniqueId
              )}
              className={`testimonial-name-paragraph-${index + 1}-${uniqueId}`}
              data-text="Type a paragraph"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {isEdited[`testimonial-name-paragraph-${index + 1}-${uniqueId}`]
                ? elementContent[
                    `testimonial-name-paragraph-${index + 1}-${uniqueId}`
                  ]
                : elementContent[
                    `testimonial-name-paragraph-${index + 1}-${uniqueId}`
                  ] || "Founder QuickUI"}
            </p>
          </div>
        </div>
      </div>
    </section>,
    <section
      onClick={handleDivClick}
      id={`testimonial-section-${index + 1}-${uniqueId}`}
      style={getStyle(`testimonial-section-${index + 1}`, uniqueId)}
    >
      <div className="py-32 text-black w-[90%] max-w-[1000px] mx-auto">
        <h1
          id={`testimonial-heading-${index + 1}-${uniqueId}`}
          style={getElementStyle(`testimonial-heading-${index + 1}`, uniqueId)}
          className={`testimonial-heading-${
            index + 1
          }-${uniqueId} text-3xl font-semibold capitalize mb-1 `}
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
          className={`testimonial-paragraph-${index + 1}-${uniqueId} text-base`}
          data-text="Type a paragraph"
          data-uses-dangerously-set-inner-html="true"
          contentEditable={false}
          onClick={handleTextClick}
          dangerouslySetInnerHTML={{
            __html: isEdited[`testimonial-paragraph-${index + 1}-${uniqueId}`]
              ? elementContent[`testimonial-paragraph-${index + 1}-${uniqueId}`]
              : elementContent[
                  `testimonial-paragraph-${index + 1}-${uniqueId}`
                ] || text.customerParagraphText[0],
          }}
        ></p>

        <div className="flex flex-wrap justify-evenly gap-8 mt-10 max-[600px]:gap-5 max-[600px]:flex-col">
          <div className="flex flex-col gap-1 w-[30%] max-[600px]:w-[90%]">
            <p
              id={`testimonial-icon-text-1-${index + 1}-${uniqueId}`}
              style={getElementStyle(`testimonial-icon-${index + 1}`, uniqueId)}
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
                      `testimonial-sub-heading-text-1-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `testimonial-sub-heading-text-1-${index + 1}-${uniqueId}`
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
              data-uses-dangerously-set-inner-html="true"
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
              style={getElementStyle(`testimonial-icon-${index + 1}`, uniqueId)}
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
                      `testimonial-sub-heading-text-2-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `testimonial-sub-heading-text-2-${index + 1}-${uniqueId}`
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
              style={getElementStyle(`testimonial-icon-${index + 1}`, uniqueId)}
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
                      `testimonial-sub-heading-text-3-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `testimonial-sub-heading-text-3-${index + 1}-${uniqueId}`
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
    </section>,
    <section
      onClick={handleDivClick}
      id={`testimonial-section-${index + 1}-${uniqueId}`}
      style={getStyle(`testimonial-section-${index + 1}`, uniqueId)}
    >
      <div className="py-32 text-black w-[90%] max-w-[1000px] mx-auto">
        <h1
          id={`testimonial-heading-${index + 1}-${uniqueId}`}
          style={getElementStyle(`testimonial-heading-${index + 1}`, uniqueId)}
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
              ? elementContent[`testimonial-paragraph-${index + 1}-${uniqueId}`]
              : elementContent[
                  `testimonial-paragraph-${index + 1}-${uniqueId}`
                ] || text.customerParagraphText[0],
          }}
        ></p>

        <div className="flex flex-wrap justify-evenly mt-10 max-[600px]:gap-5 max-[600px]:flex-col text-center">
          <div className="flex flex-col gap-1 w-[30%] max-[600px]:w-[90%]">
            <p
              id={`testimonial-icon-text-1-${index + 1}-${uniqueId}`}
              style={getElementStyle(`testimonial-icon-${index + 1}`, uniqueId)}
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
                      `testimonial-sub-heading-text-1-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `testimonial-sub-heading-text-1-${index + 1}-${uniqueId}`
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
              style={getElementStyle(`testimonial-icon-${index + 1}`, uniqueId)}
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
                      `testimonial-sub-heading-text-2-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `testimonial-sub-heading-text-2-${index + 1}-${uniqueId}`
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
              style={getElementStyle(`testimonial-icon-${index + 1}`, uniqueId)}
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
                      `testimonial-sub-heading-text-3-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `testimonial-sub-heading-text-3-${index + 1}-${uniqueId}`
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
    </section>,
    <section
      className="py-10"
      onClick={handleDivClick}
      id={`testimonial-section-${index + 1}-${uniqueId}`}
      style={getStyle(`testimonial-section-${index + 1}`, uniqueId)}
    >
      <div className="py-32 text-black w-[90%] max-w-[1000px] mx-auto bg-white border-solid shadow-xl rounded-lg p-5">
        <h1
          id={`testimonial-heading-${index + 1}-${uniqueId}`}
          style={getElementStyle(`testimonial-heading-${index + 1}`, uniqueId)}
          className={`testimonial-heading-${
            index + 1
          }-${uniqueId} text-3xl font-semibold capitalize mb-5 `}
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
          className={`testimonial-paragraph-${index + 1}-${uniqueId} text-xl `}
          data-text="Type a paragraph"
          data-uses-dangerously-set-inner-html="true"
          contentEditable={false}
          onClick={handleTextClick}
          dangerouslySetInnerHTML={{
            __html: isEdited[`testimonial-paragraph-${index + 1}-${uniqueId}`]
              ? elementContent[`testimonial-paragraph-${index + 1}-${uniqueId}`]
              : elementContent[
                  `testimonial-paragraph-${index + 1}-${uniqueId}`
                ] || text.customerReviewText[0],
          }}
        ></p>

        <div className="my-8 flex items-center gap-3">
          <img
            src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
            alt=""
            className="block rounded-full w-[50px] h-[50px] object-cover"
          />
          <div className="text-sm font-semibold">
            <p
              id={`testimonial-name-header-paragraph-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `testimonial-name-header-paragraph-${index + 1}`,
                uniqueId
              )}
              className={`testimonial-name-header-paragraph-${
                index + 1
              }-${uniqueId}`}
              data-text="Type a paragraph"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {isEdited[
                `testimonial-name-header-paragraph-${index + 1}-${uniqueId}`
              ]
                ? elementContent[
                    `testimonial-name-header-paragraph-${index + 1}-${uniqueId}`
                  ]
                : elementContent[
                    `testimonial-name-header-paragraph-${index + 1}-${uniqueId}`
                  ] || "Gabriel"}
            </p>
            <p
              id={`testimonial-name-paragraph-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `testimonial-name-paragraph-${index + 1}`,
                uniqueId
              )}
              className={`testimonial-name-paragraph-${index + 1}-${uniqueId}`}
              data-text="Type a paragraph"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {isEdited[`testimonial-name-paragraph-${index + 1}-${uniqueId}`]
                ? elementContent[
                    `testimonial-name-paragraph-${index + 1}-${uniqueId}`
                  ]
                : elementContent[
                    `testimonial-name-paragraph-${index + 1}-${uniqueId}`
                  ] || "Founder QuickUI"}
            </p>
          </div>
        </div>
      </div>
    </section>,
    <section
      className="py-10"
      onClick={handleDivClick}
      id={`testimonial-section-${index + 1}-${uniqueId}`}
      style={getStyle(`testimonial-section-${index + 1}`, uniqueId)}
    >
      <div className="py-32 text-black w-[90%] max-w-[1000px] mx-auto bg-white border-solid shadow-xl rounded-lg p-5">
        <h1
          id={`testimonial-heading-${index + 1}-${uniqueId}`}
          style={getElementStyle(`testimonial-heading-${index + 1}`, uniqueId)}
          className={`testimonial-heading-${
            index + 1
          }-${uniqueId} text-center text-3xl font-semibold capitalize mb-5 `}
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
          }-${uniqueId} text-center text-xl `}
          data-text="Type a paragraph"
          data-uses-dangerously-set-inner-html="true"
          contentEditable={false}
          onClick={handleTextClick}
          dangerouslySetInnerHTML={{
            __html: isEdited[`testimonial-paragraph-${index + 1}-${uniqueId}`]
              ? elementContent[`testimonial-paragraph-${index + 1}-${uniqueId}`]
              : elementContent[
                  `testimonial-paragraph-${index + 1}-${uniqueId}`
                ] || text.customerReviewText[0],
          }}
        ></p>

        <div className="my-8 flex items-center justify-center gap-3">
          <img
            src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
            alt=""
            className="block rounded-full w-[50px] h-[50px] object-cover"
          />
          <div className="text-sm font-semibold">
            <p
              id={`testimonial-name-header-paragraph-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `testimonial-name-header-paragraph-${index + 1}`,
                uniqueId
              )}
              className={`testimonial-name-header-paragraph-${
                index + 1
              }-${uniqueId}`}
              data-text="Type a paragraph"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {isEdited[
                `testimonial-name-header-paragraph-${index + 1}-${uniqueId}`
              ]
                ? elementContent[
                    `testimonial-name-header-paragraph-${index + 1}-${uniqueId}`
                  ]
                : elementContent[
                    `testimonial-name-header-paragraph-${index + 1}-${uniqueId}`
                  ] || "Gabriel"}
            </p>
            <p
              id={`testimonial-name-paragraph-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `testimonial-name-paragraph-${index + 1}`,
                uniqueId
              )}
              className={`testimonial-name-paragraph-${index + 1}-${uniqueId}`}
              data-text="Type a paragraph"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {isEdited[`testimonial-name-paragraph-${index + 1}-${uniqueId}`]
                ? elementContent[
                    `testimonial-name-paragraph-${index + 1}-${uniqueId}`
                  ]
                : elementContent[
                    `testimonial-name-paragraph-${index + 1}-${uniqueId}`
                  ] || "Founder QuickUI"}
            </p>
          </div>
        </div>
      </div>
    </section>,
    <section
      onClick={handleDivClick}
      id={`testimonial-section-${index + 1}-${uniqueId}`}
      style={getStyle(`testimonial-section-${index + 1}`, uniqueId)}
    >
      <div className="py-32 text-black w-[90%] max-w-[1000px] mx-auto">
        <h1
          id={`testimonial-heading-${index + 1}-${uniqueId}`}
          style={getElementStyle(`testimonial-heading-${index + 1}`, uniqueId)}
          className={`testimonial-heading-${
            index + 1
          }-${uniqueId} text-3xl font-semibold capitalize mb-5 `}
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
          className={`testimonial-paragraph-${index + 1}-${uniqueId} text-xl `}
          data-text="Type a paragraph"
          data-uses-dangerously-set-inner-html="true"
          contentEditable={false}
          onClick={handleTextClick}
          dangerouslySetInnerHTML={{
            __html: isEdited[`testimonial-paragraph-${index + 1}-${uniqueId}`]
              ? elementContent[`testimonial-paragraph-${index + 1}-${uniqueId}`]
              : elementContent[
                  `testimonial-paragraph-${index + 1}-${uniqueId}`
                ] || text.customerReviewText[0],
          }}
        ></p>

        <div className="my-8 flex items-center gap-3">
          <img
            src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
            alt=""
            className="block rounded-full w-[50px] h-[50px] object-cover"
          />
          <div className="text-sm font-semibold">
            <p
              id={`testimonial-name-header-paragraph-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `testimonial-name-header-paragraph-${index + 1}`,
                uniqueId
              )}
              className={`testimonial-name-header-paragraph-${
                index + 1
              }-${uniqueId}`}
              data-text="Type a paragraph"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {isEdited[
                `testimonial-name-header-paragraph-${index + 1}-${uniqueId}`
              ]
                ? elementContent[
                    `testimonial-name-header-paragraph-${index + 1}-${uniqueId}`
                  ]
                : elementContent[
                    `testimonial-name-header-paragraph-${index + 1}-${uniqueId}`
                  ] || "Gabriel"}
            </p>
            <p
              id={`testimonial-name-paragraph-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `testimonial-name-paragraph-${index + 1}`,
                uniqueId
              )}
              className={`testimonial-name-paragraph-${index + 1}-${uniqueId}`}
              data-text="Type a paragraph"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {isEdited[`testimonial-name-paragraph-${index + 1}-${uniqueId}`]
                ? elementContent[
                    `testimonial-name-paragraph-${index + 1}-${uniqueId}`
                  ]
                : elementContent[
                    `testimonial-name-paragraph-${index + 1}-${uniqueId}`
                  ] || "Founder QuickUI"}
            </p>
          </div>
        </div>
      </div>
    </section>,
    <section
      onClick={handleDivClick}
      id={`testimonial-section-${index + 1}-${uniqueId}`}
      style={getStyle(`testimonial-section-${index + 1}`, uniqueId)}
    >
      <div
        className={`${
          isMobile ? "max-w-[350px] flex-col items-start gap-5" : ""
        } py-32 text-black w-[90%] max-md:max-w-[350px] max-w-[1000px] mx-auto flex max-md:flex-col gap-10 items-center max-md:items-start max-md:gap-5`}
      >
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
            alt=""
            className="block w-[150px] h-[200px] object-cover rounded-md"
          />
        </div>
        <div className="">
          <h1
            id={`testimonial-heading-${index + 1}-${uniqueId}`}
            style={getElementStyle(
              `testimonial-heading-${index + 1}`,
              uniqueId
            )}
            className={`testimonial-heading-${
              index + 1
            }-${uniqueId} text-3xl font-semibold capitalize mb-3 `}
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
            }-${uniqueId} text-xl max-w-[700px]`}
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
                  ] || text.customerReviewText[0],
            }}
          ></p>
        </div>
      </div>
    </section>,
    <section
      className="py-10"
      onClick={handleDivClick}
      id={`testimonial-section-${index + 1}-${uniqueId}`}
      style={getStyle(`testimonial-section-${index + 1}`, uniqueId)}
    >
      <div
        className={`${
          isMobile ? "max-w-[350px] flex-col items-start gap-5" : ""
        } py-32 text-black w-[90%] max-md:max-w-[350px] max-w-[1000px] mx-auto flex max-md:flex-col gap-10 items-center max-md:items-start max-md:gap-5 bg-white border-solid shadow-xl rounded-lg p-5`}
      >
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
            alt=""
            className="block w-[150px] h-[200px] object-cover rounded-md"
          />
        </div>
        <div className="">
          <h1
            id={`testimonial-heading-${index + 1}-${uniqueId}`}
            style={getElementStyle(
              `testimonial-heading-${index + 1}`,
              uniqueId
            )}
            className={`testimonial-heading-${
              index + 1
            }-${uniqueId} text-3xl font-semibold capitalize mb-3 `}
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
            }-${uniqueId} text-xl max-w-[700px]`}
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
                  ] || text.customerReviewText[0],
            }}
          ></p>
        </div>
      </div>
    </section>,
  ];
};
