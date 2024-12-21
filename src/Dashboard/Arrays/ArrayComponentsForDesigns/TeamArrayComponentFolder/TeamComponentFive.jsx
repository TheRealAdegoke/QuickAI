const TeamComponentFive = ({
  text,
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
  handleCardClick,
}) => {
  return (
    <>
      <section
        onClick={handleDivClick}
        id={`team-section-${index + 1}-${uniqueId}`}
        style={getStyle(`team-section-${index + 1}`, uniqueId)}
      >
        <div className="text-black py-32 w-[90%] max-w-[1000px] mx-auto">
          <div className="mb-10 text-center">
            <h1
              id={`team-heading-${index + 1}-${uniqueId}`}
              style={getElementStyle(`team-heading-${index + 1}`, uniqueId)}
              className={`team-heading-${
                index + 1
              }-${uniqueId} text-3xl font-bold text-[#212529] mb-2 `}
              data-text="Heading"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`team-heading-${index + 1}-${uniqueId}`]
                  ? elementContent[`team-heading-${index + 1}-${uniqueId}`]
                  : elementContent[`team-heading-${index + 1}-${uniqueId}`] ||
                    text.teamHeader[0],
              }}
            ></h1>
            <p
              id={`team-paragraph-${index + 1}-${uniqueId}`}
              style={getElementStyle(`team-paragraph-${index + 1}`, uniqueId)}
              className={`team-paragraph-${index + 1}-${uniqueId}`}
              data-text="Type a paragraph"
              data-uses-dangerously-set-inner-html="true"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`team-paragraph-${index + 1}-${uniqueId}`]
                  ? elementContent[`team-paragraph-${index + 1}-${uniqueId}`]
                  : elementContent[`team-paragraph-${index + 1}-${uniqueId}`] ||
                    text.teamParagraphTexts[0],
              }}
            ></p>
          </div>

          <div
            className={`${
              isMobile ? "flex-col" : ""
            }  flex flex-wrap max-md:flex-col gap-4`}
          >
            <div
              id={`team-card-${index + 1}-${uniqueId}`}
              className={`${
                isMobile ? "w-[90%]" : "lg:w-[30%]"
              } text-white rounded-2xl w-[90%] max-w-[350px] mx-auto py-5`}
              onClick={handleCardClick}
              style={getStyle(
                `team-card-${index + 1}`,
                uniqueId,
                "rgba(0,0,0,0.78)"
              )}
            >
              <div className="w-[90%] mx-auto">
                <img
                  id={`team-paragraph-image-${index + 1}-${uniqueId}`}
                  src={
                    elementContent[
                      `team-paragraph-image-${index + 1}-${uniqueId}`
                    ] ||
                    "https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
                  }
                  alt=""
                  className="block w-full h-[250px] mx-auto object-cover rounded-lg"
                  onClick={() =>
                    handleImageClick(
                      elementContent[
                        `team-paragraph-image-${index + 1}-${uniqueId}`
                      ] ||
                        "https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png",
                      `team-paragraph-image-${index + 1}-${uniqueId}`
                    )
                  }
                />
              </div>

              <div className="text-left mt-4 px-8">
                <h1
                  id={`team-name-header-paragraph-text-1-${
                    index + 1
                  }-${uniqueId}`}
                  style={getElementStyle(
                    `team-name-header-paragraph-${index + 1}`,
                    uniqueId
                  )}
                  className={`team-name-header-paragraph-${
                    index + 1
                  }-${uniqueId} font-semibold`}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[
                    `team-name-header-paragraph-text-1-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `team-name-header-paragraph-text-1-${
                          index + 1
                        }-${uniqueId}`
                      ]
                    : elementContent[
                        `team-name-header-paragraph-text-1-${
                          index + 1
                        }-${uniqueId}`
                      ] || "Gabriel"}
                </h1>
                <p
                  id={`team-name-paragraph-text-1-${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `team-name-paragraph-${index + 1}`,
                    uniqueId
                  )}
                  className={`team-name-paragraph-${index + 1}-${uniqueId}`}
                  data-text="Type a paragraph"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[
                    `team-name-paragraph-text-1-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `team-name-paragraph-text-1-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `team-name-paragraph-text-1-${index + 1}-${uniqueId}`
                      ] || "Founder"}
                </p>
                <div className="flex gap-3 justify-start my-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="24"
                    height="24"
                    className=""
                  >
                    <path
                      d="M416 32H31.9A32.1 32.1 0 0 0 0 64.3v383.4A32.1 32.1 0 0 0 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3A32.2 32.2 0 0 0 416 32zM135.4 416H69V202.2h66.5V416zm-33.2-243a38.5 38.5 0 1 1 0-77 38.5 38.5 0 0 1 0 77zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="24"
                    height="24"
                    className=""
                  >
                    <path
                      d="M459.4 151.7c.3 4.6.3 9.1.3 13.7 0 138.7-105.6 298.5-298.6 298.5A296.5 296.5 0 0 1 0 417a217 217 0 0 0 25.3 1.2c49 0 94.3-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8a111 111 0 0 0 47.4-2 105 105 0 0 1-84.1-103v-1.2c14 7.8 30.2 12.6 47.4 13.3A104.9 104.9 0 0 1 35.7 67.2a298.3 298.3 0 0 0 216.4 109.9 104.9 104.9 0 0 1 179-95.8 206.6 206.6 0 0 0 66.6-25.4 104.7 104.7 0 0 1-46.1 57.8c21-2.3 41.6-8.1 60.4-16.2a225.6 225.6 0 0 1-52.6 54.2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <p
                  id={`team-sub-paragraph-text-1-${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `team-sub-paragraph-${index + 1}`,
                    uniqueId
                  )}
                  className={`team-sub-paragraph-${index + 1}-${uniqueId} mt-6`}
                  data-text="Type a paragraph"
                  data-uses-dangerously-set-inner-html="true"
                  contentEditable={false}
                  onClick={handleTextClick}
                  dangerouslySetInnerHTML={{
                    __html: isEdited[
                      `team-sub-paragraph-text-1-${index + 1}-${uniqueId}`
                    ]
                      ? elementContent[
                          `team-sub-paragraph-text-1-${index + 1}-${uniqueId}`
                        ]
                      : elementContent[
                          `team-sub-paragraph-text-1-${index + 1}-${uniqueId}`
                        ] || text.description,
                  }}
                ></p>
              </div>
            </div>

            <div
              id={`team-card-${index + 1}-${uniqueId}`}
              className={`${
                isMobile ? "w-[90%]" : "lg:w-[30%]"
              } bg-gradient-to-t from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-white rounded-2xl w-[90%] max-w-[350px] mx-auto py-5`}
              onClick={handleCardClick}
              style={getStyle(
                `team-card-${index + 1}`,
                uniqueId,
                "rgba(0,0,0,0.78)"
              )}
            >
              <div className="w-[90%] mx-auto">
                <img
                  id={`team-paragraph-image-${index + 2}-${uniqueId}`}
                  src={
                    elementContent[
                      `team-paragraph-image-${index + 2}-${uniqueId}`
                    ] ||
                    "https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
                  }
                  alt=""
                  className="block w-full h-[250px] mx-auto object-cover rounded-lg"
                  onClick={() =>
                    handleImageClick(
                      elementContent[
                        `team-paragraph-image-${index + 2}-${uniqueId}`
                      ] ||
                        "https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png",
                      `team-paragraph-image-${index + 2}-${uniqueId}`
                    )
                  }
                />
              </div>

              <div className="text-left mt-4 px-8">
                <h1
                  id={`team-name-header-paragraph-text-2-${
                    index + 1
                  }-${uniqueId}`}
                  style={getElementStyle(
                    `team-name-header-paragraph-${index + 1}`,
                    uniqueId
                  )}
                  className={`team-name-header-paragraph-${
                    index + 1
                  }-${uniqueId} font-semibold`}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[
                    `team-name-header-paragraph-text-2-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `team-name-header-paragraph-text-2-${
                          index + 1
                        }-${uniqueId}`
                      ]
                    : elementContent[
                        `team-name-header-paragraph-text-2-${
                          index + 1
                        }-${uniqueId}`
                      ] || "Gabriel"}
                </h1>
                <p
                  id={`team-name-paragraph-text-2-${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `team-name-paragraph-${index + 1}`,
                    uniqueId
                  )}
                  className={`team-name-paragraph-${index + 1}-${uniqueId}`}
                  data-text="Type a paragraph"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[
                    `team-name-paragraph-text-2-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `team-name-paragraph-text-2-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `team-name-paragraph-text-2-${index + 1}-${uniqueId}`
                      ] || "Founder"}
                </p>
                <div className="flex gap-3 justify-start my-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="24"
                    height="24"
                    className=""
                  >
                    <path
                      d="M416 32H31.9A32.1 32.1 0 0 0 0 64.3v383.4A32.1 32.1 0 0 0 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3A32.2 32.2 0 0 0 416 32zM135.4 416H69V202.2h66.5V416zm-33.2-243a38.5 38.5 0 1 1 0-77 38.5 38.5 0 0 1 0 77zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="24"
                    height="24"
                    className=""
                  >
                    <path
                      d="M459.4 151.7c.3 4.6.3 9.1.3 13.7 0 138.7-105.6 298.5-298.6 298.5A296.5 296.5 0 0 1 0 417a217 217 0 0 0 25.3 1.2c49 0 94.3-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8a111 111 0 0 0 47.4-2 105 105 0 0 1-84.1-103v-1.2c14 7.8 30.2 12.6 47.4 13.3A104.9 104.9 0 0 1 35.7 67.2a298.3 298.3 0 0 0 216.4 109.9 104.9 104.9 0 0 1 179-95.8 206.6 206.6 0 0 0 66.6-25.4 104.7 104.7 0 0 1-46.1 57.8c21-2.3 41.6-8.1 60.4-16.2a225.6 225.6 0 0 1-52.6 54.2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <p
                  id={`team-sub-paragraph-text-2-${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `team-sub-paragraph-${index + 1}`,
                    uniqueId
                  )}
                  className={`team-sub-paragraph-${index + 1}-${uniqueId} mt-6`}
                  data-text="Type a paragraph"
                  data-uses-dangerously-set-inner-html="true"
                  contentEditable={false}
                  onClick={handleTextClick}
                  dangerouslySetInnerHTML={{
                    __html: isEdited[
                      `team-sub-paragraph-text-2-${index + 1}-${uniqueId}`
                    ]
                      ? elementContent[
                          `team-sub-paragraph-text-2-${index + 1}-${uniqueId}`
                        ]
                      : elementContent[
                          `team-sub-paragraph-text-2-${index + 1}-${uniqueId}`
                        ] || text.description,
                  }}
                ></p>
              </div>
            </div>

            <div
              id={`team-card-${index + 1}-${uniqueId}`}
              className={`${
                isMobile ? "w-[90%]" : "lg:w-[30%]"
              } text-white rounded-2xl w-[90%] max-w-[350px] mx-auto py-5`}
              onClick={handleCardClick}
              style={getStyle(
                `team-card-${index + 1}`,
                uniqueId,
                "rgba(0,0,0,0.78)"
              )}
            >
              <div className="w-[90%] mx-auto">
                <img
                  id={`team-paragraph-image-${index + 3}-${uniqueId}`}
                  src={
                    elementContent[
                      `team-paragraph-image-${index + 3}-${uniqueId}`
                    ] ||
                    "https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
                  }
                  alt=""
                  className="block w-full h-[250px] mx-auto object-cover rounded-lg"
                  onClick={() =>
                    handleImageClick(
                      elementContent[
                        `team-paragraph-image-${index + 3}-${uniqueId}`
                      ] ||
                        "https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png",
                      `team-paragraph-image-${index + 3}-${uniqueId}`
                    )
                  }
                />
              </div>

              <div className="text-left mt-4 px-8">
                <h1
                  id={`team-name-header-paragraph-text-3-${
                    index + 1
                  }-${uniqueId}`}
                  style={getElementStyle(
                    `team-name-header-paragraph-${index + 1}`,
                    uniqueId
                  )}
                  className={`team-name-header-paragraph-${
                    index + 1
                  }-${uniqueId} font-semibold`}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[
                    `team-name-header-paragraph-text-3-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `team-name-header-paragraph-text-3-${
                          index + 1
                        }-${uniqueId}`
                      ]
                    : elementContent[
                        `team-name-header-paragraph-text-3-${
                          index + 1
                        }-${uniqueId}`
                      ] || "Gabriel"}
                </h1>
                <p
                  id={`team-name-paragraph-text-3-${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `team-name-paragraph-${index + 1}`,
                    uniqueId
                  )}
                  className={`team-name-paragraph-${index + 1}-${uniqueId}`}
                  data-text="Type a paragraph"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[
                    `team-name-paragraph-text-3-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `team-name-paragraph-text-3-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `team-name-paragraph-text-3-${index + 1}-${uniqueId}`
                      ] || "Founder"}
                </p>
                <div className="flex gap-3 justify-start my-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="24"
                    height="24"
                    className=""
                  >
                    <path
                      d="M416 32H31.9A32.1 32.1 0 0 0 0 64.3v383.4A32.1 32.1 0 0 0 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3A32.2 32.2 0 0 0 416 32zM135.4 416H69V202.2h66.5V416zm-33.2-243a38.5 38.5 0 1 1 0-77 38.5 38.5 0 0 1 0 77zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="24"
                    height="24"
                    className=""
                  >
                    <path
                      d="M459.4 151.7c.3 4.6.3 9.1.3 13.7 0 138.7-105.6 298.5-298.6 298.5A296.5 296.5 0 0 1 0 417a217 217 0 0 0 25.3 1.2c49 0 94.3-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8a111 111 0 0 0 47.4-2 105 105 0 0 1-84.1-103v-1.2c14 7.8 30.2 12.6 47.4 13.3A104.9 104.9 0 0 1 35.7 67.2a298.3 298.3 0 0 0 216.4 109.9 104.9 104.9 0 0 1 179-95.8 206.6 206.6 0 0 0 66.6-25.4 104.7 104.7 0 0 1-46.1 57.8c21-2.3 41.6-8.1 60.4-16.2a225.6 225.6 0 0 1-52.6 54.2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <p
                  id={`team-sub-paragraph-text-3-${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `team-sub-paragraph-${index + 1}`,
                    uniqueId
                  )}
                  className={`team-sub-paragraph-${index + 1}-${uniqueId} mt-6`}
                  data-text="Type a paragraph"
                  data-uses-dangerously-set-inner-html="true"
                  contentEditable={false}
                  onClick={handleTextClick}
                  dangerouslySetInnerHTML={{
                    __html: isEdited[
                      `team-sub-paragraph-text-3-${index + 1}-${uniqueId}`
                    ]
                      ? elementContent[
                          `team-sub-paragraph-text-3-${index + 1}-${uniqueId}`
                        ]
                      : elementContent[
                          `team-sub-paragraph-text-3-${index + 1}-${uniqueId}`
                        ] || text.description,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamComponentFive;
