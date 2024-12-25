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
        <div className="py-24 lg:px-10 px-5 flex max-lg:flex-col gap-24 w-[95%] max-w-[1300px] mx-auto">
          <div className="w-2/5 max-lg:w-full">
            <h2
              id={`testimonial-heading-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `testimonial-heading-${index + 1}`,
                uniqueId
              )}
              className={`testimonial-heading-${
                index + 1
              }-${uniqueId} text-5xl max-lg:text-4xl text-[rgba(22,38,23,1)] font-extrabold`}
              data-text="Heading"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`testimonial-heading-${index + 1}-${uniqueId}`]
                  ? elementContent[
                      `testimonial-heading-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `testimonial-heading-${index + 1}-${uniqueId}`
                    ] || text.featureHeader[2],
              }}
            ></h2>
            <div
              id={`header-underline-${index + 1}-${uniqueId}`}
              className="h-[6px] w-[100px] my-5"
              onClick={handleCardClick}
              style={getStyle(
                `header-underline-${index + 1}`,
                uniqueId,
                "rgba(22,38,23,1)"
              )}
            ></div>
            <p
              id={`testimonial-paragraph-${index + 1}-${uniqueId}`}
              style={getElementStyle(
                `testimonial-paragraph-${index + 1}`,
                uniqueId
              )}
              className={`testimonial-paragraph-${
                index + 1
              }-${uniqueId} text-[rgba(22,38,23,1)]`}
              data-text="Type a paragraph"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[
                  `testimonial-paragraph-${index + 1}-${uniqueId}`
                ]
                  ? elementContent[
                      `testimonial-paragraph-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `testimonial-paragraph-${index + 1}-${uniqueId}`
                    ] || text.description,
              }}
            ></p>
          </div>

          <div
            className="h-[450px] bg-[rgba(0,0,0,0.6)] w-2/6 max-lg:w-full rounded-3xl pr-2 pt-1 pb-2 relative"
          >
            <img
              id={`testimonial-image-${index + 2}-${uniqueId}`}
              src={
                elementContent[`testimonial-image-${index + 2}-${uniqueId}`] ||
                text.images[9]
              }
              alt="quickui-lib-image"
              onClick={() =>
                handleImageClick(
                  elementContent[
                    `testimonial-image-${index + 2}-${uniqueId}`
                  ] || text.images[4],
                  `testimonial-image-${index + 2}-${uniqueId}`
                )
              }
              className="h-full w-full rounded-3xl object-cover"
            />
            <span
              id={`testimonial-image-card-2-${index + 1}-${uniqueId}`}
              className="px-10 py-5 rounded-xl shadow-[4px_4px_0px_0px_rgba(22,38,23,1)] max-lg:w-[80%] w-[100%] absolute top-[25%] right-[-40%] max-lg:top-[60%] max-lg:right-[11%] flex flex-col gap-3 text-black"
              onClick={handleCardClick}
              style={getStyle(
                `testimonial-image-card-2-${index + 1}`,
                uniqueId,
                "white"
              )}
            >
              <p
                id={`testimonial-star-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `testimonial-star-${index + 1}`,
                  uniqueId
                )}
                className={`testimonial-star-${index + 1}-${uniqueId}`}
                data-text="Type a paragraph"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[`testimonial-star-${index + 1}-${uniqueId}`]
                  ? elementContent[`testimonial-star-${index + 1}-${uniqueId}`]
                  : elementContent[
                      `testimonial-star-${index + 1}-${uniqueId}`
                    ] || "★★★★★"}
              </p>
              <p
                id={`testimonial-desc-1-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `testimonial-desc-1-${index + 1}`,
                  uniqueId
                )}
                className={`testimonial-desc-1-${index + 1}-${uniqueId}`}
                data-text="Type a paragraph"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[`testimonial-desc-1-${index + 1}-${uniqueId}`]
                  ? elementContent[
                      `testimonial-desc-1-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `testimonial-desc-1-${index + 1}-${uniqueId}`
                    ] ||
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et architecto voluptate distinctio. Maxime consectetur placeat ipsum voluptatibus blanditiis cum iure."}
              </p>

              <div>
                <h2
                  id={`testimonial-name-desc-${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `testimonial-name-desc-${index + 1}`,
                    uniqueId
                  )}
                  className={`testimonial-name-desc-${
                    index + 1
                  }-${uniqueId} font-bold`}
                  data-text="Type a paragraph"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[`testimonial-name-desc-${index + 1}-${uniqueId}`]
                    ? elementContent[
                        `testimonial-name-desc-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `testimonial-name-desc-${index + 1}-${uniqueId}`
                      ] || "John Doe"}
                </h2>
                <p
                  id={`testimonial-desc-2${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `testimonial-desc-2${index + 1}`,
                    uniqueId
                  )}
                  className={`testimonial-desc-2${index + 1}-${uniqueId}`}
                  data-text="Type a paragraph"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[`testimonial-desc-2${index + 1}-${uniqueId}`]
                    ? elementContent[
                        `testimonial-desc-2${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `testimonial-desc-2${index + 1}-${uniqueId}`
                      ] || "Founder"}
                </p>
              </div>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialComponentNine;
