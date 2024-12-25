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
        style={getStyle(`hero-section-${index + 1}`, uniqueId)}
        className="py-24"
      >
        <div className="w-[95%] lg:h-[800px] mx-auto rounded-3xl relative text-white">
          <div className="h-full w-full absolute">
            <img
              id={`hero-bg-image-${index + 1}-${uniqueId}`}
              src={
                elementContent[`hero-bg-image-${index + 1}-${uniqueId}`] ||
                text.images[0]
              }
              alt="quickui-lib-image"
              className="h-full w-full rounded-3xl object-cover"
              onClick={() =>
                handleImageClick(
                  elementContent[`hero-bg-image-${index + 1}-${uniqueId}`] ||
                    text.images[2],
                  `hero-bg-image-${index + 1}-${uniqueId}`
                )
              }
            />
            <div className="bg-[rgba(0,0,0,0.9)] h-full w-full absolute top-0 rounded-3xl"></div>
          </div>

          <div className="container relative flex justify-between max-lg:flex-col w-[95%] max-w-[1200px] mx-auto pt-24 max-lg:pt-14">
            <div className="text-container w-2/5 max-lg:w-full">
              <div className="flex flex-col gap-5 pt-14 max-lg:w-[400px] mx-auto">
                <h1
                  id={`hero-heading-${index + 1}-${uniqueId}`}
                  style={getElementStyle(`hero-heading-${index + 1}`, uniqueId)}
                  className={`hero-heading-${
                    index + 1
                  }-${uniqueId} text-5xl font-extrabold`}
                  data-text="Heading"
                  data-uses-dangerously-set-inner-html="true"
                  contentEditable={false}
                  onClick={handleTextClick}
                  dangerouslySetInnerHTML={{
                    __html: isEdited[`hero-heading-${index + 1}-${uniqueId}`]
                      ? elementContent[`hero-heading-${index + 1}-${uniqueId}`]
                      : elementContent[
                          `hero-heading-${index + 1}-${uniqueId}`
                        ] || text.heroHeaderText,
                  }}
                ></h1>
                <p
                  id={`hero-paragraph-${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `hero-paragraph-${index + 1}`,
                    uniqueId
                  )}
                  className={`hero-paragraph-${index + 1}-${uniqueId} `}
                  data-text="Type a paragraph"
                  data-uses-dangerously-set-inner-html="true"
                  contentEditable={false}
                  onClick={handleTextClick}
                  dangerouslySetInnerHTML={{
                    __html: isEdited[`hero-paragraph-${index + 1}-${uniqueId}`]
                      ? elementContent[
                          `hero-paragraph-${index + 1}-${uniqueId}`
                        ]
                      : elementContent[
                          `hero-paragraph-${index + 1}-${uniqueId}`
                        ] || text.description,
                  }}
                ></p>
                <button
                  id={`web-button-text-${index + 1}-${uniqueId}`}
                  onClick={handleDivButtonClick}
                  style={getStyle(`web-button-text-${index + 1}`, uniqueId)}
                  className="bg-white px-10 py-3 rounded-xl text-black w-[200px]"
                >
                  <span
                    id={`Hero-btn-text-${index + 1}-${uniqueId}`}
                    style={getElementStyle(
                      `Hero-btn-text-style-${index + 1}`,
                      uniqueId
                    )}
                    className={`Hero-btn-text-style-${index + 1}-${uniqueId}`}
                    data-text="Button text"
                    contentEditable={false}
                    onClick={handleTextClick}
                  >
                    {isEdited[`Hero-btn-text-${index + 1}-${uniqueId}`]
                      ? elementContent[`Hero-btn-text-${index + 1}-${uniqueId}`]
                      : elementContent[
                          `Hero-btn-text-${index + 1}-${uniqueId}`
                        ] || text.buttonTexts[0]}
                  </span>
                </button>
              </div>
            </div>

            <div className="image-container w-2/5 max-lg:w-full relative max-lg:mt-20">
              <div className="bg-[rgba(22,38,23,1)] h-[500px] w-[350px] max-lg:w-[400px] max-lg:mx-auto rounded-3xl pr-2 pt-1 pb-2 lg:absolute lg:right-0">
                <img
                  id={`hero-image-1-${index + 1}-${uniqueId}`}
                  src={
                    elementContent[`hero-image-1-${index + 1}-${uniqueId}`] ||
                    text.images[0]
                  }
                  alt="quickui-lib-image"
                  className="h-full w-full rounded-3xl object-cover"
                  onClick={() =>
                    handleImageClick(
                      elementContent[`hero-image-1-${index + 1}-${uniqueId}`] ||
                        text.images[0],
                      `hero-image-1-${index + 1}-${uniqueId}`
                    )
                  }
                />
              </div>

              <div className="bg-[rgba(22,38,23,1)] h-[200px] w-[250px] rounded-3xl pr-2 pt-1 pb-2 absolute right-52 top-48 max-lg:hidden">
                <img
                  id={`hero-image-2-${index + 1}-${uniqueId}`}
                  src={
                    elementContent[`hero-image-2-${index + 1}-${uniqueId}`] ||
                    text.images[1]
                  }
                  alt="quickui-lib-image"
                  className="h-full w-full rounded-3xl object-cover"
                  onClick={() =>
                    handleImageClick(
                      elementContent[`hero-image-2-${index + 1}-${uniqueId}`] ||
                        text.images[1],
                      `hero-image-2-${index + 1}-${uniqueId}`
                    )
                  }
                />
              </div>
            </div>
          </div>

          <div className="lg:absolute lg:bottom-0 max-lg:relative z-50 w-full max-lg:mt-20">
            <div className="bg-white h-[1px] w-[90%] mx-auto"></div>

            <div className="py-10 w-[90%] mx-auto flex justify-between">
              <div>
                <h2
                  id={`hero-sub-heading-text-1-${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `hero-sub-heading-text-${index + 1}`,
                    uniqueId
                  )}
                  className={`hero-sub-heading-text-${
                    index + 1
                  }-${uniqueId} text-4xl max-lg:text-2xl font-extrabold`}
                  data-text="Sub heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[`hero-sub-heading-text-1-${index + 1}-${uniqueId}`]
                    ? elementContent[
                        `hero-sub-heading-text-1-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `hero-sub-heading-text-1-${index + 1}-${uniqueId}`
                      ] || "1.5k+"}
                </h2>
                <p
                  id={`hero-sub-paragraph-text-1-${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `hero-sub-paragraph-text-${index + 1}`,
                    uniqueId
                  )}
                  className={`hero-sub-paragraph-text-${
                    index + 1
                  }-${uniqueId} font-bold`}
                  data-text="Sub paragraph"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[
                    `hero-sub-paragraph-text-1-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `hero-sub-paragraph-text-1-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `hero-sub-paragraph-text-1-${index + 1}-${uniqueId}`
                      ] || "QuickUI"}
                </p>
              </div>

              <div>
                <h2
                  id={`hero-sub-heading-text-2-${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `hero-sub-heading-text-${index + 1}`,
                    uniqueId
                  )}
                  className={`hero-sub-heading-text-${
                    index + 1
                  }-${uniqueId} text-4xl max-lg:text-2xl font-extrabold`}
                  data-text="Sub heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[`hero-sub-heading-text-2-${index + 1}-${uniqueId}`]
                    ? elementContent[
                        `hero-sub-heading-text-2-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `hero-sub-heading-text-2-${index + 1}-${uniqueId}`
                      ] || "2.5M"}
                </h2>
                <p
                  id={`hero-sub-paragraph-text-2-${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `hero-sub-paragraph-text-${index + 1}`,
                    uniqueId
                  )}
                  className={`hero-sub-paragraph-text-${
                    index + 1
                  }-${uniqueId} font-bold`}
                  data-text="Sub paragraph"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[
                    `hero-sub-paragraph-text-2-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `hero-sub-paragraph-text-2-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `hero-sub-paragraph-text-2-${index + 1}-${uniqueId}`
                      ] || "QuickUI"}
                </p>
              </div>

              <div>
                <h2
                  id={`hero-sub-heading-text-3-${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `hero-sub-heading-text-${index + 1}`,
                    uniqueId
                  )}
                  className={`hero-sub-heading-text-${
                    index + 1
                  }-${uniqueId} text-4xl max-lg:text-2xl font-extrabold`}
                  data-text="Sub heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[`hero-sub-heading-text-3-${index + 1}-${uniqueId}`]
                    ? elementContent[
                        `hero-sub-heading-text-3-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `hero-sub-heading-text-3-${index + 1}-${uniqueId}`
                      ] || "3K"}
                </h2>
                <p
                  id={`hero-sub-paragraph-text-3-${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `hero-sub-paragraph-text-${index + 1}`,
                    uniqueId
                  )}
                  className={`hero-sub-paragraph-text-${
                    index + 1
                  }-${uniqueId} font-bold`}
                  data-text="Sub paragraph"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[
                    `hero-sub-paragraph-text-3-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `hero-sub-paragraph-text-3-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `hero-sub-paragraph-text-3-${index + 1}-${uniqueId}`
                      ] || "QuickUI"}
                </p>
              </div>

              <div>
                <h2
                  id={`hero-sub-heading-text-4-${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `hero-sub-heading-text-${index + 1}`,
                    uniqueId
                  )}
                  className={`hero-sub-heading-text-${
                    index + 1
                  }-${uniqueId} text-4xl max-lg:text-2xl font-extrabold`}
                  data-text="Sub heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[`hero-sub-heading-text-4-${index + 1}-${uniqueId}`]
                    ? elementContent[
                        `hero-sub-heading-text-4-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `hero-sub-heading-text-4-${index + 1}-${uniqueId}`
                      ] || "10+"}
                </h2>
                <p
                  id={`hero-sub-paragraph-text-4-${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `hero-sub-paragraph-text-${index + 1}`,
                    uniqueId
                  )}
                  className={`hero-sub-paragraph-text-${
                    index + 1
                  }-${uniqueId} font-bold`}
                  data-text="Sub paragraph"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[
                    `hero-sub-paragraph-text-4-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `hero-sub-paragraph-text-4-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `hero-sub-paragraph-text-4-${index + 1}-${uniqueId}`
                      ] || "QuickUI"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroComponentNine;