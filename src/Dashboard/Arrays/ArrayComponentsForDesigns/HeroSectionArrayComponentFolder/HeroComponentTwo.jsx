import { WebButtonsArray } from "../../WebButtonsArray";

const HeroComponentTwo = ({
  text,
  buttonIndex,
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
  handleDivButtonClick,
  handleCardClick,
}) => {
  const buttonElement = WebButtonsArray({
    text,
    buttonIndex,
    handleTextClick,
    getElementStyle,
    getStyle,
    index,
    isEdited,
    uniqueId,
    elementContent,
    handleDivButtonClick,
  })[buttonIndex];

  return (
    <>
      <section
        onClick={handleDivClick}
        id={`hero-section-${index + 1}-${uniqueId}`}
        style={getStyle(`hero-section-${index + 1}`, uniqueId)}
      >
        <div
          className={`${
            isMobile ? "h-[750px] flex-col" : ""
          } min-h-[600px] max-lg:h-[750px] pt-10 flex lg:gap-8 lg:justify-evenly max-lg:flex-col max-w-[1200px] mx-auto lg:pl-5`}
        >
          <div
            className={`${
              isMobile ? "w-[90%]" : ""
            } text-[rgb(33,37,41)] w-[40%] max-lg:w-[90%] max-w-[500px] mx-auto lg:pt-16`}
          >
            <h1
              id={`hero-heading-${index + 1}-${uniqueId}`}
              style={getElementStyle(`hero-heading-${index + 1}`, uniqueId)}
              className={`hero-heading-${
                index + 1
              }-${uniqueId} font-bold xl:text-5xl text-3xl mb-4 break-words`}
              data-text="Heading"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`hero-heading-${index + 1}-${uniqueId}`]
                  ? elementContent[`hero-heading-${index + 1}-${uniqueId}`]
                  : elementContent[`hero-heading-${index + 1}-${uniqueId}`] ||
                    text.heroHeaderText,
              }}
            ></h1>
            <p
              id={`hero-paragraph-${index + 1}-${uniqueId}`}
              style={getElementStyle(`hero-paragraph-${index + 1}`, uniqueId)}
              className={`hero-paragraph-${
                index + 1
              }-${uniqueId} font-medium break-words`}
              data-text="Type a paragraph"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`hero-paragraph-${index + 1}-${uniqueId}`]
                  ? elementContent[`hero-paragraph-${index + 1}-${uniqueId}`]
                  : elementContent[`hero-paragraph-${index + 1}-${uniqueId}`] ||
                    text.description,
              }}
            ></p>
            {buttonIndex !== undefined && buttonElement}
          </div>
          <div
            className={`${
              isMobile ? "w-full max-w-[500px] mx-auto" : ""
            } relative w-[55%] h-full max-lg:w-full max-lg:max-w-[500px] max-lg:mx-auto`}
          >
            <div
              id={`hero-image-card-${index + 1}-${uniqueId}`}
              className={`${
                isMobile ? "left-[35%] transform -translate-x-1/2" : ""
              } w-[250px] h-[400px] rounded-[35px] px-3 pt-3 mb-4 absolute top-2 max-lg:left-[35%] max-lg:transform max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 max-lg:top-1/2 max-xl:top-2 max-xl:right-32 z-20`}
              onClick={handleCardClick}
              style={getStyle(
                `hero-image-card-${index + 1}`,
                uniqueId,
                "rgb(33,37,41)"
              )}
            >
              <img
                id={`hero-image-${index + 1}-${uniqueId}`}
                src={
                  elementContent[`hero-image-${index + 1}-${uniqueId}`] ||
                  text.images[0]
                }
                alt="quickui-lib-image"
                className="h-[350px] rounded-[35px] object-cover"
                onClick={() =>
                  handleImageClick(
                    elementContent[`hero-image-${index + 1}-${uniqueId}`] ||
                      text.images[0],
                    `hero-image-${index + 1}-${uniqueId}`
                  )
                }
              />
            </div>
            <div
              id={`hero-image-card-${index + 1}-${uniqueId}`}
              className={`${
                isMobile ? "left-[60%] transform -translate-x-1/2" : ""
              } w-[260px] h-[480px] rounded-[35px] px-3 pt-3 absolute max-lg:left-[60%] max-lg:transform max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 max-lg:top-1/2 top-[7%] right-0 xl:right-[28%] z-10`}
              onClick={handleCardClick}
              style={getStyle(
                `hero-image-card-${index + 1}`,
                uniqueId,
                "rgb(33,37,41)"
              )}
            >
              <img
                id={`hero-image-${index + 2}-${uniqueId}`}
                src={
                  elementContent[`hero-image-${index + 2}-${uniqueId}`] ||
                  text.images[1]
                }
                alt="quickui-lib-image"
                className="h-[420px] rounded-[35px] object-cover"
                onClick={() =>
                  handleImageClick(
                    elementContent[`hero-image-${index + 2}-${uniqueId}`] ||
                      text.images[1],
                    `hero-image-${index + 2}-${uniqueId}`
                  )
                }
              />
            </div>
            <div
              id={`hero-image-card-${index + 1}-${uniqueId}`}
              className={`${
                isMobile ? "hidden" : ""
              } w-[260px] h-[450px] rounded-[35px] px-3 py-3 absolute top-14 right-5 max-xl:hidden`}
              onClick={handleCardClick}
              style={getStyle(
                `hero-image-card-${index + 1}`,
                uniqueId,
                "rgb(33,37,41)"
              )}
            >
              <img
                id={`hero-image-${index + 3}-${uniqueId}`}
                src={
                  elementContent[`hero-image-${index + 3}-${uniqueId}`] ||
                  text.images[2]
                }
                alt="quickui-lib-image"
                className="h-full rounded-[35px] object-cover"
                onClick={() =>
                  handleImageClick(
                    elementContent[`hero-image-${index + 3}-${uniqueId}`] ||
                      text.images[2],
                    `hero-image-${index + 3}-${uniqueId}`
                  )
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroComponentTwo;
