const TestimonialComponentSeven = ({
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
  isMobile,
}) => {
  return (
    <>
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
              id={`testimonial-image-${index + 1}-${uniqueId}`}
              src={
                elementContent[`testimonial-image-${index + 1}-${uniqueId}`] ||
                "https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
              }
              alt=""
              className="block w-[150px] h-[200px] object-cover rounded-md"
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
                  ? elementContent[
                      `testimonial-heading-${index + 1}-${uniqueId}`
                    ]
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
                __html: isEdited[
                  `testimonial-paragraph-${index + 1}-${uniqueId}`
                ]
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
      </section>
    </>
  );
};

export default TestimonialComponentSeven;
