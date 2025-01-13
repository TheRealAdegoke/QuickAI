import { Link } from "react-router-dom";

const HeroComponentNine = ({
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
  handleDivButtonClick,
}) => {
  return (
    <>
      <section
        onClick={handleDivClick}
        id={`hero-section-${index + 1}-${uniqueId}`}
        style={getStyle(`hero-section-${index + 1}`, uniqueId, "#4294E3")}
        className=""
      >
        <div className="pt-24 max-lg:pt-10 text-black">
          <div className="flex justify-center max-lg:flex-col max-lg:gap-y-20 gap-x-28">
            <div className="w-full max-lg:w-[95%] max-lg:max-w-[650px] max-lg:mx-auto max-w-[550px] pl-5 max-lg:text-center">
              <h1
                id={`hero-heading-${index + 1}-${uniqueId}`}
                style={getElementStyle(`hero-heading-${index + 1}`, uniqueId)}
                className={`hero-heading-${
                  index + 1
                }-${uniqueId} text-4xl font-bold mb-5`}
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
                }-${uniqueId} font-semibold mb-9`}
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
              <div className="flex gap-x-5 max-lg:justify-center">
                <Link
                  to=""
                  id={`hero-link-${index + 1}-${uniqueId}`}
                  style={getStyle(
                    `hero-link-${index + 1}`,
                    uniqueId,
                    "rgb(0,0,0)"
                  )}
                  className="px-14 py-4 rounded-full font-medium text-white"
                  onClick={handleDivButtonClick}
                >
                  <span
                    id={`hero-link-text-1-${index + 1}-${uniqueId}`}
                    className={`hero-link-text-${index + 1}-${uniqueId}`}
                    style={getElementStyle(
                      `hero-link-text-${index + 1}`,
                      uniqueId
                    )}
                    data-text="Link text"
                    contentEditable={false}
                    onClick={handleTextClick}
                  >
                    {isEdited[`hero-link-text-1-${index + 1}-${uniqueId}`]
                      ? elementContent[
                          `hero-link-text-1-${index + 1}-${uniqueId}`
                        ]
                      : elementContent[
                          `hero-link-text-1-${index + 1}-${uniqueId}`
                        ] || text.buttonTexts[5]}
                  </span>
                </Link>
                <Link
                  to=""
                  id={`hero-link-${index + 1}-${uniqueId}`}
                  style={getStyle(
                    `hero-link-${index + 1}`,
                    uniqueId,
                    "rgb(0,0,0)"
                  )}
                  className="px-14 py-4 rounded-full font-medium text-white"
                  onClick={handleDivButtonClick}
                >
                  <span
                    id={`hero-link-text-2-${index + 1}-${uniqueId}`}
                    className={`hero-link-text-${index + 1}-${uniqueId}`}
                    style={getElementStyle(
                      `hero-link-text-${index + 1}`,
                      uniqueId
                    )}
                    data-text="Link text"
                    contentEditable={false}
                    onClick={handleTextClick}
                  >
                    {isEdited[`hero-link-text-2-${index + 1}-${uniqueId}`]
                      ? elementContent[
                          `hero-link-text-2-${index + 1}-${uniqueId}`
                        ]
                      : elementContent[
                          `hero-link-text-2-${index + 1}-${uniqueId}`
                        ] || text.buttonTexts[5]}
                  </span>
                </Link>
              </div>
            </div>

            <div className="w-[30%] max-lg:w-full max-lg:flex max-lg:justify-center">
              <div
                className="w-[253px] h-[500px] p-[15px] lg:mr-[30px]"
                style={{
                  backgroundImage: `url('https://quickui.co/assets/screenshot-frame-DqZaIl2V.png')`,
                }}
              >
                <img
                  id={`hero-image-${index + 1}-${uniqueId}`}
                  src={
                    elementContent[`hero-image-${index + 1}-${uniqueId}`] ||
                    text.images[0]
                  }
                  alt="quickui-lib-image"
                  className="w-[223px] h-[470px] rounded-3xl object-cover"
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
        </div>
        <div className="w-full">
          <img
            src="https://quickui.co/assets/bg-bottom-DVEVYhXn.png"
            alt=""
            className="w-full"
          />
        </div>
      </section>
    </>
  );
};

export default HeroComponentNine;
