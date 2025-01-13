import ScreenShotFrame from "https://quickui.co/assets/screenshot-frame-DqZaIl2V.png";
import { FaGears } from "react-icons/fa6";

const FeatureWithCardComponentSix = ({
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
  handleDivButtonClick,
}) => {
  return (
    <>
      <section
        onClick={handleDivClick}
        id={`features-with-card-section-${index + 1}-${uniqueId}`}
        style={getStyle(`features-with-card-section-${index + 1}`, uniqueId)}
      >
        <div className="py-24 max-lg:pt-10 text-black">
          <div className="flex justify-center max-lg:flex-col max-lg:gap-y-20 gap-x-40 max-w-[1300px] mx-auto">
            <div className="w-full max-lg:w-[95%] max-lg:max-w-[650px] max-lg:mx-auto max-w-[550px] pl-5">
              <p
                id={`features-with-card-sub-paragraph-text-1-${
                  index + 1
                }-${uniqueId}`}
                style={getElementStyle(
                  `features-with-card-sub-paragraph-${index + 1}`,
                  uniqueId
                )}
                className={`features-with-card-paragraph-${
                  index + 1
                }-${uniqueId} font-semibold mb-3`}
                data-text="Type a paragraph"
                data-uses-dangerously-set-inner-html="true"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[
                    `features-with-card-sub-paragraph-text-1-${
                      index + 1
                    }-${uniqueId}`
                  ]
                    ? elementContent[
                        `features-with-card-sub-paragraph-text-1-${
                          index + 1
                        }-${uniqueId}`
                      ]
                    : elementContent[
                        `features-with-card-sub-paragraph-text-1-${
                          index + 1
                        }-${uniqueId}`
                      ] || "About App",
                }}
              ></p>
              <h1
                id={`features-with-card-heading-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `features-with-card-heading-${index + 1}`,
                  uniqueId
                )}
                className={`features-with-card-heading-${
                  index + 1
                }-${uniqueId} text-4xl font-bold mb-5`}
                data-text="Heading"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[
                    `features-with-card-heading-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `features-with-card-heading-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `features-with-card-heading-${index + 1}-${uniqueId}`
                      ] || text.featureHeader[0],
                }}
              ></h1>
              <p
                id={`features-with-card-paragraph-${index + 1}-${uniqueId}`}
                style={getElementStyle(
                  `features-with-card-paragraph-${index + 1}`,
                  uniqueId
                )}
                className={`features-with-card-paragraph-${
                  index + 1
                }-${uniqueId} font-semibold mb-4`}
                data-text="Type a paragraph"
                contentEditable={false}
                onClick={handleTextClick}
                dangerouslySetInnerHTML={{
                  __html: isEdited[
                    `features-with-card-paragraph-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `features-with-card-paragraph-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `features-with-card-paragraph-${index + 1}-${uniqueId}`
                      ] || text.description,
                }}
              ></p>
              <div className="mb-20 flex max-lg:flex-col max-lg:gap-y-6 gap-x-14">
                <div className="flex items-center gap-3">
                  <FaGears className="text-5xl" />
                  <div className="flex flex-col">
                    <span
                      id={`features-with-card-span-text-1-${
                        index + 1
                      }-${uniqueId}`}
                      style={getElementStyle(
                        `features-with-card-span-${index + 1}`,
                        uniqueId
                      )}
                      className={`features-with-card-span-${
                        index + 1
                      }-${uniqueId} text-3xl font-bold`}
                      data-text="Type a paragraph"
                      data-uses-dangerously-set-inner-html="true"
                      contentEditable={false}
                      onClick={handleTextClick}
                      dangerouslySetInnerHTML={{
                        __html: isEdited[
                          `features-with-card-span-text-1-${
                            index + 1
                          }-${uniqueId}`
                        ]
                          ? elementContent[
                              `features-with-card-span-text-1-${
                                index + 1
                              }-${uniqueId}`
                            ]
                          : elementContent[
                              `features-with-card-span-text-1-${
                                index + 1
                              }-${uniqueId}`
                            ] || "1234",
                      }}
                    ></span>
                    <span
                      id={`features-with-card-span-text-2-${
                        index + 1
                      }-${uniqueId}`}
                      style={getElementStyle(
                        `features-with-card-span-${index + 1}`,
                        uniqueId
                      )}
                      className={`features-with-card-span-${
                        index + 1
                      }-${uniqueId} text-lg font-medium`}
                      data-text="Type a paragraph"
                      data-uses-dangerously-set-inner-html="true"
                      contentEditable={false}
                      onClick={handleTextClick}
                      dangerouslySetInnerHTML={{
                        __html: isEdited[
                          `features-with-card-span-text-2-${
                            index + 1
                          }-${uniqueId}`
                        ]
                          ? elementContent[
                              `features-with-card-span-text-2-${
                                index + 1
                              }-${uniqueId}`
                            ]
                          : elementContent[
                              `features-with-card-span-text-2-${
                                index + 1
                              }-${uniqueId}`
                            ] || "Active Install",
                      }}
                    ></span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaGears className="text-5xl" />
                  <div className="flex flex-col">
                    <span
                      id={`features-with-card-span-text-3-${
                        index + 1
                      }-${uniqueId}`}
                      style={getElementStyle(
                        `features-with-card-span-${index + 1}`,
                        uniqueId
                      )}
                      className={`features-with-card-span-${
                        index + 1
                      }-${uniqueId} text-3xl font-bold`}
                      data-text="Type a paragraph"
                      data-uses-dangerously-set-inner-html="true"
                      contentEditable={false}
                      onClick={handleTextClick}
                      dangerouslySetInnerHTML={{
                        __html: isEdited[
                          `features-with-card-span-text-3-${
                            index + 1
                          }-${uniqueId}`
                        ]
                          ? elementContent[
                              `features-with-card-span-text-3-${
                                index + 1
                              }-${uniqueId}`
                            ]
                          : elementContent[
                              `features-with-card-span-text-3-${
                                index + 1
                              }-${uniqueId}`
                            ] || "1234",
                      }}
                    ></span>
                    <span
                      id={`features-with-card-span-text-4-${
                        index + 1
                      }-${uniqueId}`}
                      style={getElementStyle(
                        `features-with-card-span-${index + 1}`,
                        uniqueId
                      )}
                      className={`features-with-card-span-${
                        index + 1
                      }-${uniqueId} text-lg font-medium`}
                      data-text="Type a paragraph"
                      data-uses-dangerously-set-inner-html="true"
                      contentEditable={false}
                      onClick={handleTextClick}
                      dangerouslySetInnerHTML={{
                        __html: isEdited[
                          `features-with-card-span-text-4-${
                            index + 1
                          }-${uniqueId}`
                        ]
                          ? elementContent[
                              `features-with-card-span-text-4-${
                                index + 1
                              }-${uniqueId}`
                            ]
                          : elementContent[
                              `features-with-card-span-text-4-${
                                index + 1
                              }-${uniqueId}`
                            ] || "Active Install",
                      }}
                    ></span>
                  </div>
                </div>
              </div>
              <div className="">
                <button
                  id={`features-with-card-button-${index + 1}-${uniqueId}`}
                  className="px-14 py-4 rounded-full font-medium text-white"
                  onClick={handleDivButtonClick}
                  style={getStyle(
                    `features-with-card-button-${index + 1}`,
                    uniqueId,
                    "rgb(0,0,0)"
                  )}
                >
                  <span
                    id={`features-with-card-button-text-${
                      index + 1
                    }-${uniqueId}`}
                    style={getElementStyle(
                      `features-with-card-button-text-style-${index + 1}`,
                      uniqueId
                    )}
                    className={`features-with-card-button-text-style-${
                      index + 1
                    }-${uniqueId}`}
                    data-text="Button text"
                    contentEditable={false}
                    onClick={handleTextClick}
                  >
                    {isEdited[
                      `features-with-card-button-text-${index + 1}-${uniqueId}`
                    ]
                      ? elementContent[
                          `features-with-card-button-text-${
                            index + 1
                          }-${uniqueId}`
                        ]
                      : elementContent[
                          `features-with-card-button-text-${
                            index + 1
                          }-${uniqueId}`
                        ] || text.buttonTexts[4]}
                  </span>
                </button>
              </div>
            </div>

            <div className="w-[30%] max-lg:w-full max-lg:flex max-lg:justify-center">
              <div
                className="w-[253px] h-[500px] p-[15px] lg:mr-[30px]"
                style={{ backgroundImage: `url(${ScreenShotFrame})` }}
              >
                <img
                  id={`features-with-card-image-${index + 2}-${uniqueId}`}
                  src={
                    elementContent[
                      `features-with-card-image-${index + 2}-${uniqueId}`
                    ] || text.images[7]
                  }
                  alt="quickui-lib-image"
                  className="w-[223px] h-[470px] rounded-3xl object-cover"
                  onClick={() =>
                    handleImageClick(
                      elementContent[
                        `features-with-card-image-${index + 2}-${uniqueId}`
                      ] || text.images[7],
                      `features-with-card-image-${index + 2}-${uniqueId}`
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureWithCardComponentSix;
