import { WebButtonsArray } from "../../WebButtonsArray";

const HeroComponentEight = ({
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
            isMobile ? "flex-col w-[90%] max-w-[600px]" : ""
          } py-24 flex max-lg:flex-col max-lg:w-[90%] items-center justify-between lg:px-5 max-w-[1000px] mx-auto max-lg:max-w-[600px]`}
        >
          <div
            className={`${
              isMobile ? "w-full" : ""
            } mb-10 w-[50%] max-lg:w-full`}
          >
            <h1
              id={`hero-heading-${index + 1}-${uniqueId}`}
              style={getElementStyle(`hero-heading-${index + 1}`, uniqueId)}
              className={`hero-heading-${index + 1}-${uniqueId} ${
                isMobile ? "text-center mx-auto" : ""
              } text-[#231e41] max-lg:text-center text-6xl max-sm:text-5xl max-w-[650px] max-sm:max-w-[400px] font-semibold mb-6 max-lg:mx-auto break-words`}
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
              className={`hero-paragraph-${index + 1}-${uniqueId} ${
                isMobile ? "text-center mx-auto" : ""
              } text-[#231e41] text-sm max-lg:text-center max-w-[350px] max-lg:mx-auto font-medium mb-6 break-words`}
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
            } w-[45%] max-lg:w-full relative`}
          >
            <img
              id={`hero-image-${index + 1}-${uniqueId}`}
              src={
                elementContent[`hero-image-${index + 1}-${uniqueId}`] ||
                text.images[0]
              }
              alt="quickui-lib-image"
              className="block rounded-full w-[350px] h-[350px] mx-auto object-cover"
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
      </section>
    </>
  );
};

export default HeroComponentEight;
