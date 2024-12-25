const FooterComponentTwo = ({
  handleTextClick,
  handleDivClick,
  getStyle,
  getElementStyle,
  index,
  isEdited,
  uniqueId,
  elementContent,
}) => {
  return (
    <>
      <footer>
        <div
          onClick={handleDivClick}
          id={`footer-section-${index + 1}-${uniqueId}`}
          style={getStyle(`footer-section-${index + 1}`, uniqueId, "white")}
          className="w-[95%] mx-auto my-24 py-14 px-10 rounded-3xl flex max-lg:flex-col max-lg:gap-y-10 gap-x-20 max-w-[1300px] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] text-black"
        >
          <div className="w-[40%]">
            <div>
              <h2
                id={`footer-heading-${index + 1}-${uniqueId}`}
                className={`footer-heading-${
                  index + 1
                }-${uniqueId} font-bold text-[rgb(42,42,47)] text-3xl`}
                style={getElementStyle(`footer-heading-${index + 1}`, uniqueId)}
                data-text="Heading"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[`footer-heading-${index + 1}-${uniqueId}`]
                  ? elementContent[`footer-heading-${index + 1}-${uniqueId}`]
                  : elementContent[`footer-heading-${index + 1}-${uniqueId}`] ||
                    "Lorem"}
              </h2>

              <p
                id={`footer-paragraph-text-1-${index + 1}-${uniqueId}`}
                className={`footer-paragraph-text-${
                  index + 1
                }-${uniqueId} my-8 font-semibold text-lg`}
                style={getElementStyle(
                  `footer-paragraph-text-${index + 1}`,
                  uniqueId
                )}
                data-text="Heading"
                contentEditable={false}
                onClick={handleTextClick}
              >
                {isEdited[`footer-paragraph-text-1-${index + 1}-${uniqueId}`]
                  ? elementContent[
                      `footer-paragraph-text-1-${index + 1}-${uniqueId}`
                    ]
                  : elementContent[
                      `footer-paragraph-text-1-${index + 1}-${uniqueId}`
                    ] ||
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo laborum earum est pariatur"}
              </p>

              <div className="flex gap-5 font-medium mt-6">
                <a
                  href=""
                  id={`footer-link-text-1-${index + 1}-${uniqueId}`}
                  className={`footer-link-${index + 1}-${uniqueId}`}
                  style={getElementStyle(`footer-link-${index + 1}`, uniqueId)}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[`footer-link-text-1-${index + 1}-${uniqueId}`]
                    ? elementContent[
                        `footer-link-text-1-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `footer-link-text-1-${index + 1}-${uniqueId}`
                      ] || "Home"}
                </a>

                <a
                  href=""
                  id={`footer-link-text-2-${index + 1}-${uniqueId}`}
                  className={`footer-link-${index + 1}-${uniqueId}`}
                  style={getElementStyle(`footer-link-${index + 1}`, uniqueId)}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[`footer-link-text-2-${index + 1}-${uniqueId}`]
                    ? elementContent[
                        `footer-link-text-2-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `footer-link-text-2-${index + 1}-${uniqueId}`
                      ] || "Classes"}
                </a>

                <a
                  href=""
                  id={`footer-link-text-3-${index + 1}-${uniqueId}`}
                  className={`footer-link-${index + 1}-${uniqueId}`}
                  style={getElementStyle(`footer-link-${index + 1}`, uniqueId)}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[`footer-link-text-3-${index + 1}-${uniqueId}`]
                    ? elementContent[
                        `footer-link-text-3-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `footer-link-text-3-${index + 1}-${uniqueId}`
                      ] || "About"}
                </a>

                <a
                  href=""
                  id={`footer-link-text-4-${index + 1}-${uniqueId}`}
                  className={`footer-link-${index + 1}-${uniqueId}`}
                  style={getElementStyle(`footer-link-${index + 1}`, uniqueId)}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[`footer-link-text-4-${index + 1}-${uniqueId}`]
                    ? elementContent[
                        `footer-link-text-4-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `footer-link-text-4-${index + 1}-${uniqueId}`
                      ] || "Contact"}
                </a>

                <a
                  href=""
                  id={`footer-link-text-5-${index + 1}-${uniqueId}`}
                  className={`footer-link-${index + 1}-${uniqueId}`}
                  style={getElementStyle(`footer-link-${index + 1}`, uniqueId)}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[`footer-link-text-5-${index + 1}-${uniqueId}`]
                    ? elementContent[
                        `footer-link-text-5-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `footer-link-text-5-${index + 1}-${uniqueId}`
                      ] || "Blog"}
                </a>
              </div>
            </div>
          </div>

          <div className="w-[40%]">
            <div>
              <div className="mb-10">
                <h2
                  id={`footer-sub-heading-text-1-${index + 1}-${uniqueId}`}
                  className={`footer-sub-heading-${index + 1}-${uniqueId} mb-3`}
                  style={getElementStyle(
                    `footer-sub-heading-${index + 1}`,
                    uniqueId
                  )}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[
                    `footer-sub-heading-text-1-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `footer-sub-heading-text-1-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `footer-sub-heading-text-1-${index + 1}-${uniqueId}`
                      ] || "Address"}
                </h2>
                <p
                  id={`footer-paragraph-text-2-${index + 1}-${uniqueId}`}
                  className={`footer-paragraph-text-${
                    index + 1
                  }-${uniqueId} font-bold text-xl`}
                  style={getElementStyle(
                    `footer-paragraph-text-${index + 1}`,
                    uniqueId
                  )}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[`footer-paragraph-text-2-${index + 1}-${uniqueId}`]
                    ? elementContent[
                        `footer-paragraph-text-2-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `footer-paragraph-text-2-${index + 1}-${uniqueId}`
                      ] || "123 Fitness Avenue, Cityville, State 12345, USA"}
                </p>
              </div>

              <div className="mb-10">
                <h2
                  id={`footer-sub-heading-text-2-${index + 1}-${uniqueId}`}
                  className={`footer-sub-heading-${index + 1}-${uniqueId} mb-3`}
                  style={getElementStyle(
                    `footer-sub-heading-${index + 1}`,
                    uniqueId
                  )}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[
                    `footer-sub-heading-text-2-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `footer-sub-heading-text-2-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `footer-sub-heading-text-2-${index + 1}-${uniqueId}`
                      ] || "Phone"}
                </h2>
                <p
                  id={`footer-paragraph-text-3-${index + 1}-${uniqueId}`}
                  className={`footer-paragraph-text-${
                    index + 1
                  }-${uniqueId} font-bold text-xl`}
                  style={getElementStyle(
                    `footer-paragraph-text-${index + 1}`,
                    uniqueId
                  )}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[`footer-paragraph-text-3-${index + 1}-${uniqueId}`]
                    ? elementContent[
                        `footer-paragraph-text-3-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `footer-paragraph-text-3-${index + 1}-${uniqueId}`
                      ] || "+1 (123) 456-7890"}
                </p>
              </div>

              <div className="mb-10">
                <h2
                  id={`footer-sub-heading-text-3-${index + 1}-${uniqueId}`}
                  className={`footer-sub-heading-${index + 1}-${uniqueId} mb-3`}
                  style={getElementStyle(
                    `footer-sub-heading-${index + 1}`,
                    uniqueId
                  )}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[
                    `footer-sub-heading-text-3-${index + 1}-${uniqueId}`
                  ]
                    ? elementContent[
                        `footer-sub-heading-text-3-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `footer-sub-heading-text-3-${index + 1}-${uniqueId}`
                      ] || "Email"}
                </h2>
                <p
                  id={`footer-paragraph-text-4-${index + 1}-${uniqueId}`}
                  className={`footer-paragraph-text-${
                    index + 1
                  }-${uniqueId} font-bold text-xl`}
                  style={getElementStyle(
                    `footer-paragraph-text-${index + 1}`,
                    uniqueId
                  )}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[`footer-paragraph-text-4-${index + 1}-${uniqueId}`]
                    ? elementContent[
                        `footer-paragraph-text-4-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `footer-paragraph-text-4-${index + 1}-${uniqueId}`
                      ] || "info@supafitness.com"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponentTwo;
