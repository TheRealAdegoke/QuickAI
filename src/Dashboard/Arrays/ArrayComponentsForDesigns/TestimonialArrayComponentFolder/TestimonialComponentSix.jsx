const TestimonialComponentSix = ({
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
            className={`testimonial-paragraph-${
              index + 1
            }-${uniqueId} text-xl `}
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

          <div className="my-8 flex items-center gap-3">
            <img
              id={`testimonial-image-${index + 1}-${uniqueId}`}
              src={
                elementContent[`testimonial-image-${index + 1}-${uniqueId}`] ||
                "https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
              }
              alt=""
              className="block rounded-full w-[50px] h-[50px] object-cover"
              onClick={() =>
                handleImageClick(
                  elementContent[
                    `testimonial-image-${index + 1}-${uniqueId}`
                  ] ||
                    "https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png",
                  `testimonial-image-${index + 1}-${uniqueId}`
                )
              }
            />
            <div className="text-sm font-semibold">
              <p
                id={`testimonial-name-header-paragraph-${
                  index + 1
                }-${uniqueId}`}
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
                      `testimonial-name-header-paragraph-${
                        index + 1
                      }-${uniqueId}`
                    ]
                  : elementContent[
                      `testimonial-name-header-paragraph-${
                        index + 1
                      }-${uniqueId}`
                    ] || "Gabriel"}
              </p>
              <p
                id={`testimonial-name-paragraph-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `testimonial-name-paragraph-${index + 1}`,
                  uniqueId
                )}
                className={`testimonial-name-paragraph-${
                  index + 1
                }-${uniqueId}`}
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
      </section>
    </>
  );
};

export default TestimonialComponentSix;
