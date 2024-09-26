import { WebButtonsArray } from "./WebButtonsArray";
import testImage from "../../assets/Default-Card.jpg";
import { useState } from "react";

export const heroComponents = ({
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
}) => {
  const buttonElement = WebButtonsArray({
    text,
    buttonIndex,
    handleTextClick,
    getElementStyle,
    index,
    isEdited,
    uniqueId,
    elementContent,
  })[buttonIndex];

  return [
    <section
      onClick={handleDivClick}
      id={`hero-section-${index + 1}-${uniqueId}`}
      style={getStyle(`hero-section-${index + 1}`, uniqueId)}
    >
      <div className="py-24 px-5">
        <div className="flex justify-center gap-10 max-lg:flex-col">
          <div className={`${isMobile ? "hidden" : ""} max-lg:hidden w-[50%]`}>
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
              <div className="bg-[rgba(0,0,0,0.5)] shadow-md h-[250px]  p-3 rounded-[8px] col-span-3">
                <img
                  src={text.images[0]}
                  alt="quickui-lib-image"
                  className="rounded-[8px] w-full h-full object-cover"
                />
              </div>
              <div className="bg-[rgba(0,0,0,0.5)] shadow-md h-[200px] p-3 rounded-[8px]">
                <img
                  src={text.images[1]}
                  alt="quickui-lib-image"
                  className="rounded-[8px] w-full h-full object-cover"
                />
              </div>
              <div className="bg-[rgba(0,0,0,0.5)] shadow-md h-[200px]  p-3 rounded-[8px]">
                <img
                  src={text.images[2]}
                  alt="quickui-lib-image"
                  className="rounded-[8px] w-full h-full object-cover"
                />
              </div>
              <div className="bg-[rgba(0,0,0,0.5)] shadow-md h-[200px]  p-3 rounded-[8px]">
                <img
                  src={text.images[3]}
                  alt="quickui-lib-image"
                  className="rounded-[8px] w-full h-full object-cover"
                />
              </div>
              <div className="bg-[rgba(0,0,0,0.5)] shadow-md h-[250px]  p-3 rounded-[8px] col-span-3">
                <img
                  src={text.images[4]}
                  alt="quickui-lib-image"
                  className="rounded-[8px] w-full h-full object-cover"
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
              src={text.images[5]}
              alt="quickui-lib-image"
              className={`${
                isMobile ? "max-w-[800px] w-[95%] h-[400px]" : ""
              } block max-lg:w-[95%] w-full h-[600px] max-lg:h-[400px] max-lg:max-w-[800px]`}
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
                  : elementContent[`hero-paragraph-${index + 1}-${uniqueId}`] ||
                    text.description,
              }}
            ></p>
            {buttonIndex !== undefined && buttonElement}
          </div>
        </div>
      </div>
    </section>,
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
            className={`${
              isMobile ? "left-[35%] transform -translate-x-1/2" : ""
            } w-[250px] h-[400px] bg-[rgb(33,37,41)] rounded-[35px] px-3 pt-3 mb-4 absolute top-2 max-lg:left-[35%] max-lg:transform max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 max-lg:top-1/2 max-xl:top-2 max-xl:right-32 z-20`}
          >
            <img
              src={text.images[0]}
              alt="quickui-lib-image"
              className="h-[350px] rounded-[35px] object-cover"
            />
          </div>
          <div
            className={`${
              isMobile ? "left-[60%] transform -translate-x-1/2" : ""
            } w-[260px] h-[480px] bg-[rgb(33,37,41)] rounded-[35px] px-3 pt-3 absolute max-lg:left-[60%] max-lg:transform max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 max-lg:top-1/2 top-[7%] right-0 xl:right-[28%] z-10`}
          >
            <img
              src={text.images[1]}
              alt="quickui-lib-image"
              className="h-[420px] rounded-[35px] object-cover"
            />
          </div>
          <div
            className={`${
              isMobile ? "hidden" : ""
            } w-[260px] h-[450px] bg-[rgb(33,37,41)] rounded-[35px] px-3 py-3 absolute top-14 right-5 max-xl:hidden`}
          >
            <img
              src={text.images[2]}
              alt="quickui-lib-image"
              className="h-full rounded-[35px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>,
    <section
      onClick={handleDivClick}
      id={`hero-section-${index + 1}-${uniqueId}`}
      style={getStyle(`hero-section-${index + 1}`, uniqueId)}
    >
      <div
        className={`${
          isMobile ? "flex-col" : ""
        } py-24 max-w-[1000px] mx-auto flex justify-center max-lg:flex-col`}
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
          className={`${isMobile ? "w-full" : ""} w-[45%] max-lg:w-full mt-10`}
        >
          <div className="w-[260px] mx-auto h-[480px] bg-[rgb(33,37,41)] rounded-[35px] px-3 pt-3">
            <img
              src={text.images[0]}
              alt="quickui-lib-image"
              className="h-[420px] rounded-[35px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>,
    <section
      onClick={handleDivClick}
      id={`hero-section-${index + 1}-${uniqueId}`}
      style={getStyle(`hero-section-${index + 1}`, uniqueId)}
    >
      <div
        className={`${
          isMobile ? "flex-col" : ""
        } py-24 max-w-[1000px] mx-auto flex flex-row-reverse justify-center max-lg:flex-col`}
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
          className={`${isMobile ? "w-full" : ""} w-[45%] max-lg:w-full mt-10`}
        >
          <div className="w-[260px] mx-auto h-[480px] bg-[rgb(33,37,41)] rounded-[35px] px-3 pt-3">
            <img
              src={text.images[0]}
              alt="quickui-lib-image"
              className="h-[420px] w-full rounded-[35px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>,
    <section
      onClick={handleDivClick}
      id={`hero-section-${index + 1}-${uniqueId}`}
      style={getStyle(`hero-section-${index + 1}`, uniqueId)}
    >
      <div
        className={`${
          isMobile ? "flex-col-reverse" : ""
        } py-24 max-w-[1200px] mx-auto flex justify-center max-lg:flex-col-reverse`}
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
          className={`${isMobile ? "w-full" : ""} w-[45%] max-lg:w-full mb-10`}
        >
          <div className="mx-auto w-[90%] max-w-[500px] h-[500px] bg-[rgb(33,37,41)] px-3 py-3">
            <img
              src={text.images[0]}
              alt="quickui-lib-image"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>,
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
          className={`${isMobile ? "w-full" : ""} w-[45%] max-lg:w-full mb-10`}
        >
          <div className="mx-auto w-[90%] max-w-[500px] h-[500px] bg-[rgb(33,37,41)] px-3 py-3">
            <img
              src={text.images[0]}
              alt="quickui-lib-image"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>,
    <section
      onClick={handleDivClick}
      id={`hero-section-${index + 1}-${uniqueId}`}
      style={getStyle(`hero-section-${index + 1}`, uniqueId)}
    >
      <div
        className={`${
          isMobile ? "flex-col" : ""
        } max-w-[1200px] mx-auto flex justify-center gap-5 max-lg:flex-col py-24`}
      >
        <div className={`${isMobile ? "w-full" : ""} w-[45%] max-lg:w-full`}>
          <div className="mx-auto w-[90%] max-w-[500px] h-[500px] bg-[rgb(33,37,41)] px-3 py-3">
            <img
              src={text.images[0]}
              alt="quickui-lib-image"
              className="object-cover h-full w-full"
            />
          </div>
        </div>

        <div
          className={`${
            isMobile ? "w-[90%] my-10" : ""
          } text-[rgb(33,37,41)] w-[45%] max-lg:w-[90%] max-w-[500px] mx-auto lg:pt-16 max-lg:my-10`}
        >
          <h1
            id={`hero-heading-${index + 1}-${uniqueId}`}
            style={getElementStyle(`hero-heading-${index + 1}`, uniqueId)}
            className={`hero-heading-${
              index + 1
            }-${uniqueId} font-bold xl:text-4xl xl:text-center text-3xl mb-4 break-words`}
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
          <div className={`${isMobile ? "mt-10" : ""} max-lg:mt-10 mt-5`}>
            {buttonIndex !== undefined && buttonElement}
          </div>
        </div>

        <div className={`${isMobile ? "w-full" : ""} w-[45%] max-lg:w-full`}>
          <div className="mx-auto w-[90%] max-w-[500px] h-[500px] bg-[rgb(33,37,41)] px-3 py-3">
            <img
              src={text.images[1]}
              alt="quickui-lib-image"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>,
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
          className={`${isMobile ? "w-full" : ""} mb-10 w-[50%] max-lg:w-full`}
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
            src={text.images[0]}
            alt="quickui-lib-image"
            className="block rounded-full w-[350px] h-[350px] mx-auto object-cover"
          />
        </div>
      </div>
    </section>,
  ];
};