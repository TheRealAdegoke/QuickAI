import { WebButtonsArray } from "../../WebButtonsArray";

const HeroComponentOne = ({
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
        <div className="py-24 px-5">
          <div className="flex justify-center gap-10 max-lg:flex-col">
            <div
              className={`${isMobile ? "hidden" : ""} max-lg:hidden w-[50%]`}
            >
              <h1
                id={`hero-heading-${index + 1}-${uniqueId}`}
                style={getElementStyle(`hero-heading-${index + 1}`, uniqueId)}
                className={`hero-heading-${
                  index + 1
                }-${uniqueId} text-6xl font-bold max-w-[500px] break-words`}
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

              <div className="w-[85%] grid grid-cols-3 gap-4 my-10">
                <div
                  id={`hero-image-card-${index + 1}-${uniqueId}`}
                  className="shadow-md h-[250px] p-3 rounded-[8px] col-span-3"
                  onClick={handleCardClick}
                  style={getStyle(
                    `hero-image-card-${index + 1}`,
                    uniqueId,
                    "rgba(0,0,0,0.5)"
                  )}
                >
                  <img
                    id={`hero-image-${index + 1}-${uniqueId}`}
                    src={
                      elementContent[`hero-image-${index + 1}-${uniqueId}`] ||
                      text.images[0]
                    }
                    alt="quickui-lib-image"
                    className="rounded-[8px] w-full h-full object-cover"
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
                  className="shadow-md h-[200px] p-3 rounded-[8px]"
                  onClick={handleCardClick}
                  style={getStyle(
                    `hero-image-card-${index + 1}`,
                    uniqueId,
                    "rgba(0,0,0,0.5)"
                  )}
                >
                  <img
                    id={`hero-image-${index + 2}-${uniqueId}`}
                    src={
                      elementContent[`hero-image-${index + 2}-${uniqueId}`] ||
                      text.images[1]
                    }
                    alt="quickui-lib-image"
                    className="rounded-[8px] w-full h-full object-cover"
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
                  className="shadow-md h-[200px] p-3 rounded-[8px]"
                  onClick={handleCardClick}
                  style={getStyle(
                    `hero-image-card-${index + 1}`,
                    uniqueId,
                    "rgba(0,0,0,0.5)"
                  )}
                >
                  <img
                    id={`hero-image-${index + 3}-${uniqueId}`}
                    src={
                      elementContent[`hero-image-${index + 3}-${uniqueId}`] ||
                      text.images[2]
                    }
                    alt="quickui-lib-image"
                    className="rounded-[8px] w-full h-full object-cover"
                    onClick={() =>
                      handleImageClick(
                        elementContent[`hero-image-${index + 3}-${uniqueId}`] ||
                          text.images[2],
                        `hero-image-${index + 3}-${uniqueId}`
                      )
                    }
                  />
                </div>
                <div
                  id={`hero-image-card-${index + 1}-${uniqueId}`}
                  className="shadow-md h-[200px] p-3 rounded-[8px]"
                  onClick={handleCardClick}
                  style={getStyle(
                    `hero-image-card-${index + 1}`,
                    uniqueId,
                    "rgba(0,0,0,0.5)"
                  )}
                >
                  <img
                    id={`hero-image-${index + 4}-${uniqueId}`}
                    src={
                      elementContent[`hero-image-${index + 4}-${uniqueId}`] ||
                      text.images[3]
                    }
                    alt="quickui-lib-image"
                    className="rounded-[8px] w-full h-full object-cover"
                    onClick={() =>
                      handleImageClick(
                        elementContent[`hero-image-${index + 4}-${uniqueId}`] ||
                          text.images[3],
                        `hero-image-${index + 4}-${uniqueId}`
                      )
                    }
                  />
                </div>
                <div
                  id={`hero-image-card-${index + 1}-${uniqueId}`}
                  className="shadow-md h-[200px] p-3 rounded-[8px] col-span-3"
                  style={getStyle(
                    `hero-image-card-${index + 1}`,
                    uniqueId,
                    "rgba(0,0,0,0.5)"
                  )}
                >
                  <img
                    id={`hero-image-${index + 5}-${uniqueId}`}
                    src={
                      elementContent[`hero-image-${index + 5}-${uniqueId}`] ||
                      text.images[4]
                    }
                    alt="quickui-lib-image"
                    className="rounded-[8px] w-full h-full object-cover"
                    onClick={() =>
                      handleImageClick(
                        elementContent[`hero-image-${index + 5}-${uniqueId}`] ||
                          text.images[4],
                        `hero-image-${index + 5}-${uniqueId}`
                      )
                    }
                  />
                </div>
              </div>
            </div>
            <div
              className={`${
                isMobile ? "max-w-[800px] w-[95%] mx-auto" : ""
              } max-lg:max-w-[800px] max-lg:w-[95%] max-lg:mx-auto w-[50%]`}
            >
              <img
                id={`hero-image-${index + 6}-${uniqueId}`}
                src={
                  elementContent[`hero-image-${index + 6}-${uniqueId}`] ||
                  text.images[5]
                }
                alt="quickui-lib-image"
                className={`${
                  isMobile ? "max-w-[800px] w-[95%] h-[400px]" : ""
                } block max-lg:w-[95%] w-full h-[600px] max-lg:h-[400px] max-lg:max-w-[800px]`}
                onClick={() =>
                  handleImageClick(
                    elementContent[`hero-image-${index + 6}-${uniqueId}`] ||
                      text.images[5],
                    `hero-image-${index + 6}-${uniqueId}`
                  )
                }
              />
              <p
                id={`hero-paragraph-${index + 1}-${uniqueId}`}
                style={getElementStyle(`hero-paragraph-${index + 1}`, uniqueId)}
                className={`hero-paragraph-${index + 1}-${uniqueId} ${
                  isMobile ? "max-w-[400px]" : ""
                } my-5 max-lg:max-w-[400px] break-words`}
                data-text="Type a paragraph"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[`hero-paragraph-${index + 1}-${uniqueId}`]
                    ? elementContent[`hero-paragraph-${index + 1}-${uniqueId}`]
                    : elementContent[
                        `hero-paragraph-${index + 1}-${uniqueId}`
                      ] || text.description,
                }}
              ></p>
              {buttonIndex !== undefined && buttonElement}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroComponentOne;
