import { WebButtonsArray } from "../../WebButtonsArray";

const HeroComponentSix = ({
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
            isMobile ? "flex-col-reverse" : ""
          } py-24 max-w-[1200px] mx-auto flex flex-row-reverse justify-center max-lg:flex-col-reverse`}
        >
          <div
            className={`${
              isMobile ? "w-[90%]" : ""
            } text-[rgb(33,37,41)] w-[45%] max-lg:w-[90%] max-w-[500px] mx-auto lg:pt-16`}
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
              isMobile ? "w-full" : ""
            } w-[45%] max-lg:w-full mb-10`}
          >
            <div
              id={`hero-image-card-${index + 1}-${uniqueId}`}
              className="mx-auto w-[90%] max-w-[500px] h-[500px] px-3 py-3"
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
                className="object-cover h-full w-full"
                onClick={() =>
                  handleImageClick(
                    elementContent[`hero-image-${index + 1}-${uniqueId}`] ||
                      text.images[0],
                    `hero-image-${index + 1}-${uniqueId}`
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

export default HeroComponentSix;
