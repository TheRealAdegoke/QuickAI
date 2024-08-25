export const faqComponent = ({
  text,
  isMobile,
  isFocused,
  location,
  handleDivClick,
  handleTextClick,
  getStyle,
  getElementStyle,
  index,
  isEdited,
}) => {
  let classNames = "";

  if (location.pathname === "/home") {
    classNames = "";
  } else if (location.pathname !== "/home" && isFocused) {
    classNames = "";
  } else {
    classNames += " hover:border-[2px] hover:border-[rgb(0,111,173)]";
  }

  return [
    <section
      onClick={handleDivClick}
      id={`faq-section-${index + 1}`}
      style={getStyle(`faq-section-${index + 1}`)}
    >
      <div
        className={`${
          isMobile ? "max-w-[800px]" : ""
        } text-black py-32 w-[90%] max-lg:max-w-[400px] mx-auto max-w-[1000px]`}
      >
        <div className="mb-10">
          <h1
            id={`faq-heading-${index + 1}`}
            style={getElementStyle(`faq-heading-${index + 1}`)}
            className={`faq-heading-${
              index + 1
            } text-3xl font-bold text-[#212529] mb-2 `}
            data-text="Heading"
            contentEditable={false}
            onClick={handleTextClick}
            dangerouslySetInnerHTML={{
              __html: isEdited[`faq-heading-${index + 1}`]
                ? document.getElementById(`faq-heading-${index + 1}`)
                    ?.innerHTML || text.FAQsHeader[0]
                : text.FAQsHeader[0],
            }}
          ></h1>
          <p
            id={`faq-paragraph-${index + 1}`}
            style={getElementStyle(`faq-paragraph-${index + 1}`)}
            className={`faq-paragraph-${index + 1}`}
            data-text="Type a paragraph"
            contentEditable={false}
            onClick={handleTextClick}
            dangerouslySetInnerHTML={{
              __html: isEdited[`faq-paragraph-${index + 1}`]
                ? document.getElementById(`faq-paragraph-${index + 1}`)
                    ?.innerHTML || text.faqParagraphText[0]
                : text.faqParagraphText[0],
            }}
          ></p>
        </div>

        <div
          className={`${
            isMobile ? "flex-col" : ""
          } flex flex-wrap justify-between max-lg:flex-col gap-5`}
        >
          <div
            className={`${isMobile ? "w-[80%]" : ""} w-[40%] max-lg:w-[80%]`}
          >
            <h2
              id={`faq-sub-heading-text-1-${index + 1}`}
              style={getElementStyle(`faq-sub-heading-${index + 1}`)}
              className={`faq-sub-heading-${index + 1}`}
              data-text="Heading"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-sub-heading-text-1-${index + 1}`]
                  ? document.getElementById(
                      `faq-sub-heading-text-1-${index + 1}`
                    )?.innerHTML || "Question 1"
                  : "Question 1",
              }}
            ></h2>
            <p
              id={`faq-sub-paragraph-text-1-${index + 1}`}
              style={getElementStyle(`faq-sub-paragraph-${index + 1}`)}
              className={`faq-sub-paragraph-${index + 1} my-2`}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-sub-paragraph-text-1-${index + 1}`]
                  ? document.getElementById(
                      `faq-sub-paragraph-text-1-${index + 1}`
                    )?.innerHTML || text.faqAnswer[0]
                  : text.faqAnswer[0],
              }}
            ></p>
          </div>

          <div
            className={`${isMobile ? "w-[80%]" : ""} w-[40%] max-lg:w-[80%]`}
          >
            <h2
              id={`faq-sub-heading-text-2-${index + 1}`}
              style={getElementStyle(`faq-sub-heading-${index + 1}`)}
              className={`faq-sub-heading-${index + 1}`}
              data-text="Heading"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-sub-heading-text-2-${index + 1}`]
                  ? document.getElementById(
                      `faq-sub-heading-text-2-${index + 1}`
                    )?.innerHTML || "Question 2"
                  : "Question 2",
              }}
            ></h2>
            <p
              id={`faq-sub-paragraph-text-2-${index + 1}`}
              style={getElementStyle(`faq-sub-paragraph-${index + 1}`)}
              className={`faq-sub-paragraph-${index + 1} my-2`}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-sub-paragraph-text-2-${index + 1}`]
                  ? document.getElementById(
                      `faq-sub-paragraph-text-2-${index + 1}`
                    )?.innerHTML || text.faqAnswer[0]
                  : text.faqAnswer[0],
              }}
            ></p>
          </div>

          <div
            className={`${isMobile ? "w-[80%]" : ""} w-[40%] max-lg:w-[80%]`}
          >
            <h2
              id={`faq-sub-heading-text-3-${index + 1}`}
              style={getElementStyle(`faq-sub-heading-${index + 1}`)}
              className={`faq-sub-heading-${index + 1}`}
              data-text="Heading"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-sub-heading-text-3-${index + 1}`]
                  ? document.getElementById(
                      `faq-sub-heading-text-3-${index + 1}`
                    )?.innerHTML || "Question 3"
                  : "Question 3",
              }}
            ></h2>
            <p
              id={`faq-sub-paragraph-text-3-${index + 1}`}
              style={getElementStyle(`faq-sub-paragraph-${index + 1}`)}
              className={`faq-sub-paragraph-${index + 1} my-2`}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-sub-paragraph-text-3-${index + 1}`]
                  ? document.getElementById(
                      `faq-sub-paragraph-text-3-${index + 1}`
                    )?.innerHTML || text.faqAnswer[0]
                  : text.faqAnswer[0],
              }}
            ></p>
          </div>

          <div
            className={`${isMobile ? "w-[80%]" : ""} w-[40%] max-lg:w-[80%]`}
          >
            <h2
              id={`faq-sub-heading-text-4-${index + 1}`}
              style={getElementStyle(`faq-sub-heading-${index + 1}`)}
              className={`faq-sub-heading-${index + 1}`}
              data-text="Heading"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-sub-heading-text-4-${index + 1}`]
                  ? document.getElementById(
                      `faq-sub-heading-text-4-${index + 1}`
                    )?.innerHTML || "Question 4"
                  : "Question 4",
              }}
            ></h2>
            <p
              id={`faq-sub-paragraph-text-4-${index + 1}`}
              style={getElementStyle(`faq-sub-paragraph-${index + 1}`)}
              className={`faq-sub-paragraph-${index + 1} my-2`}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-sub-paragraph-text-4-${index + 1}`]
                  ? document.getElementById(
                      `faq-sub-paragraph-text-4-${index + 1}`
                    )?.innerHTML || text.faqAnswer[0]
                  : text.faqAnswer[0],
              }}
            ></p>
          </div>
        </div>
      </div>
    </section>,
    <section
      className="py-10"
      onClick={handleDivClick}
      id={`faq-section-${index + 1}`}
      style={getStyle(`faq-section-${index + 1}`)}
    >
      <div
        className={`${
          isMobile ? "max-w-[800px]" : ""
        } text-black py-32 w-[90%] max-lg:max-w-[400px] mx-auto max-w-[1000px] bg-white border-solid shadow-2xl rounded-xl p-5`}
      >
        <div className="mb-10">
          <h1
            id={`faq-heading-${index + 1}`}
            style={getElementStyle(`faq-heading-${index + 1}`)}
            className={`faq-heading-${
              index + 1
            } text-3xl font-bold text-[#212529] mb-2 `}
            data-text="Heading"
            contentEditable={false}
            onClick={handleTextClick}
            dangerouslySetInnerHTML={{
              __html: isEdited[`faq-heading-${index + 1}`]
                ? document.getElementById(`faq-heading-${index + 1}`)
                    ?.innerHTML || text.FAQsHeader[0]
                : text.FAQsHeader[0],
            }}
          ></h1>
          <p
            id={`faq-paragraph-${index + 1}`}
            style={getElementStyle(`faq-paragraph-${index + 1}`)}
            className={`faq-paragraph-${index + 1}`}
            data-text="Type a paragraph"
            contentEditable={false}
            onClick={handleTextClick}
            dangerouslySetInnerHTML={{
              __html: isEdited[`faq-paragraph-${index + 1}`]
                ? document.getElementById(`faq-paragraph-${index + 1}`)
                    ?.innerHTML || text.faqParagraphText[0]
                : text.faqParagraphText[0],
            }}
          ></p>
        </div>

        <div
          className={`${
            isMobile ? "flex-col" : ""
          } flex flex-wrap justify-between max-lg:flex-col gap-5`}
        >
          <div
            className={`${isMobile ? "w-[80%]" : ""} w-[40%] max-lg:w-[80%]`}
          >
            <h2
              id={`faq-sub-heading-text-1-${index + 1}`}
              style={getElementStyle(`faq-sub-heading-${index + 1}`)}
              className={`faq-sub-heading-${index + 1}`}
              data-text="Heading"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-sub-heading-text-1-${index + 1}`]
                  ? document.getElementById(
                      `faq-sub-heading-text-1-${index + 1}`
                    )?.innerHTML || "Question 1"
                  : "Question 1",
              }}
            ></h2>
            <p
              id={`faq-sub-paragraph-text-1-${index + 1}`}
              style={getElementStyle(`faq-sub-paragraph-${index + 1}`)}
              className={`faq-sub-paragraph-${index + 1} my-2`}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-sub-paragraph-text-1-${index + 1}`]
                  ? document.getElementById(
                      `faq-sub-paragraph-text-1-${index + 1}`
                    )?.innerHTML || text.faqAnswer[0]
                  : text.faqAnswer[0],
              }}
            ></p>
          </div>

          <div
            className={`${isMobile ? "w-[80%]" : ""} w-[40%] max-lg:w-[80%]`}
          >
            <h2
              id={`faq-sub-heading-text-2-${index + 1}`}
              style={getElementStyle(`faq-sub-heading-${index + 1}`)}
              className={`faq-sub-heading-${index + 1}`}
              data-text="Heading"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-sub-heading-text-2-${index + 1}`]
                  ? document.getElementById(
                      `faq-sub-heading-text-2-${index + 1}`
                    )?.innerHTML || "Question 2"
                  : "Question 2",
              }}
            ></h2>
            <p
              id={`faq-sub-paragraph-text-2-${index + 1}`}
              style={getElementStyle(`faq-sub-paragraph-${index + 1}`)}
              className={`faq-sub-paragraph-${index + 1} my-2`}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-sub-paragraph-text-2-${index + 1}`]
                  ? document.getElementById(
                      `faq-sub-paragraph-text-2-${index + 1}`
                    )?.innerHTML || text.faqAnswer[0]
                  : text.faqAnswer[0],
              }}
            ></p>
          </div>

          <div
            className={`${isMobile ? "w-[80%]" : ""} w-[40%] max-lg:w-[80%]`}
          >
            <h2
              id={`faq-sub-heading-text-3-${index + 1}`}
              style={getElementStyle(`faq-sub-heading-${index + 1}`)}
              className={`faq-sub-heading-${index + 1}`}
              data-text="Heading"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-sub-heading-text-3-${index + 1}`]
                  ? document.getElementById(
                      `faq-sub-heading-text-3-${index + 1}`
                    )?.innerHTML || "Question 3"
                  : "Question 3",
              }}
            ></h2>
            <p
              id={`faq-sub-paragraph-text-3-${index + 1}`}
              style={getElementStyle(`faq-sub-paragraph-${index + 1}`)}
              className={`faq-sub-paragraph-${index + 1} my-2`}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-sub-paragraph-text-3-${index + 1}`]
                  ? document.getElementById(
                      `faq-sub-paragraph-text-3-${index + 1}`
                    )?.innerHTML || text.faqAnswer[0]
                  : text.faqAnswer[0],
              }}
            ></p>
          </div>

          <div
            className={`${isMobile ? "w-[80%]" : ""} w-[40%] max-lg:w-[80%]`}
          >
            <h2
              id={`faq-sub-heading-text-4-${index + 1}`}
              style={getElementStyle(`faq-sub-heading-${index + 1}`)}
              className={`faq-sub-heading-${index + 1}`}
              data-text="Heading"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-sub-heading-text-4-${index + 1}`]
                  ? document.getElementById(
                      `faq-sub-heading-text-4-${index + 1}`
                    )?.innerHTML || "Question 4"
                  : "Question 4",
              }}
            ></h2>
            <p
              id={`faq-sub-paragraph-text-4-${index + 1}`}
              style={getElementStyle(`faq-sub-paragraph-${index + 1}`)}
              className={`faq-sub-paragraph-${index + 1} my-2`}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-sub-paragraph-text-4-${index + 1}`]
                  ? document.getElementById(
                      `faq-sub-paragraph-text-4-${index + 1}`
                    )?.innerHTML || text.faqAnswer[0]
                  : text.faqAnswer[0],
              }}
            ></p>
          </div>
        </div>
      </div>
    </section>,
    <section
      className="py-10"
      onClick={handleDivClick}
      id={`faq-section-${index + 1}`}
      style={getStyle(`faq-section-${index + 1}`)}
    >
      <div
        className={`${
          isMobile ? "max-w-[800px]" : ""
        } text-black py-32 w-[90%] max-lg:max-w-[400px] mx-auto max-w-[1000px] bg-white border-solid shadow-2xl rounded-xl p-5`}
      >
        <div className="mb-5">
          <h1
            id={`faq-heading-${index + 1}`}
            style={getElementStyle(`faq-heading-${index + 1}`)}
            className={`faq-heading-${
              index + 1
            } text-3xl font-bold text-[#212529] mb-2 `}
            data-text="Heading"
            contentEditable={false}
            onClick={handleTextClick}
            dangerouslySetInnerHTML={{
              __html: isEdited[`faq-heading-${index + 1}`]
                ? document.getElementById(`faq-heading-${index + 1}`)
                    ?.innerHTML || text.FAQsHeader[0]
                : text.FAQsHeader[0],
            }}
          ></h1>
          <p
            id={`faq-paragraph-${index + 1}`}
            style={getElementStyle(`faq-paragraph-${index + 1}`)}
            className={`faq-paragraph-${index + 1}`}
            data-text="Type a paragraph"
            contentEditable={false}
            onClick={handleTextClick}
            dangerouslySetInnerHTML={{
              __html: isEdited[`faq-paragraph-${index + 1}`]
                ? document.getElementById(`faq-paragraph-${index + 1}`)
                    ?.innerHTML || text.faqParagraphText[0]
                : text.faqParagraphText[0],
            }}
          ></p>
        </div>

        <div
          className={`${
            isMobile ? "flex-col" : ""
          } flex flex-wrap justify-between max-lg:flex-col gap-5 bg-white border-solid shadow-2xl rounded-xl pt-5`}
        >
          <div className="w-full border-b-[2px] pl-5">
            <label htmlFor="id-show-menu-1" className="show-menu">
              <div className="">
                <h2
                  id={`faq-sub-heading-text-1-${index + 1}`}
                  style={getElementStyle(`faq-sub-heading-${index + 1}`)}
                  className={`faq-sub-heading-${
                    index + 1
                  } hover:underline hover:cursor-pointer mb-3`}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                  dangerouslySetInnerHTML={{
                    __html: isEdited[`faq-sub-heading-text-1-${index + 1}`]
                      ? document.getElementById(
                          `faq-sub-heading-text-1-${index + 1}`
                        )?.innerHTML || "Question 1"
                      : "Question 1",
                  }}
                ></h2>
              </div>
            </label>
            <input
              type="checkbox"
              id="id-show-menu-1"
              className="appearance-none hidden peer"
            />
            <p
              id={`faq-sub-paragraph-text-1-${index + 1}`}
              style={getElementStyle(`faq-sub-paragraph-${index + 1}`)}
              className={`faq-sub-paragraph-${
                index + 1
              } hidden transition-all duration-75 peer-checked:block peer-checked:opacity-100 lg:opacity-100 mb-3`}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-sub-paragraph-text-1-${index + 1}`]
                  ? document.getElementById(
                      `faq-sub-paragraph-text-1-${index + 1}`
                    )?.innerHTML || text.faqAnswer[0]
                  : text.faqAnswer[0],
              }}
            ></p>
          </div>

          <div className="w-full border-b-[2px] pl-5">
            <label htmlFor="id-show-menu-2" className="show-menu">
              <div className="">
                <h2
                  id={`faq-sub-heading-text-2-${index + 1}`}
                  style={getElementStyle(`faq-sub-heading-${index + 1}`)}
                  className={`faq-sub-heading-${
                    index + 1
                  } hover:underline hover:cursor-pointer mb-3`}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                  dangerouslySetInnerHTML={{
                    __html: isEdited[`faq-sub-heading-text-2-${index + 1}`]
                      ? document.getElementById(
                          `faq-sub-heading-text-2-${index + 1}`
                        )?.innerHTML || "Question 2"
                      : "Question 2",
                  }}
                ></h2>
              </div>
            </label>
            <input
              type="checkbox"
              id="id-show-menu-2"
              className="appearance-none hidden peer"
              role="button"
            />
            <p
              id={`faq-sub-paragraph-text-2-${index + 1}`}
              style={getElementStyle(`faq-sub-paragraph-${index + 1}`)}
              className={`faq-sub-paragraph-${
                index + 1
              } hidden transition-all duration-75 peer-checked:block peer-checked:opacity-100 lg:opacity-100 mb-3`}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-sub-paragraph-text-2-${index + 1}`]
                  ? document.getElementById(
                      `faq-sub-paragraph-text-2-${index + 1}`
                    )?.innerHTML || text.faqAnswer[0]
                  : text.faqAnswer[0],
              }}
            ></p>
          </div>

          <div className="w-full border-b-[2px] pl-5">
            <label htmlFor="id-show-menu-3" className="show-menu">
              <div className="">
                <h2
                  id={`faq-sub-heading-text-3-${index + 1}`}
                  style={getElementStyle(`faq-sub-heading-${index + 1}`)}
                  className={`faq-sub-heading-${
                    index + 1
                  } hover:underline hover:cursor-pointer mb-3`}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                  dangerouslySetInnerHTML={{
                    __html: isEdited[`faq-sub-heading-text-3-${index + 1}`]
                      ? document.getElementById(
                          `faq-sub-heading-text-3-${index + 1}`
                        )?.innerHTML || "Question 3"
                      : "Question 3",
                  }}
                ></h2>
              </div>
            </label>
            <input
              type="checkbox"
              id="id-show-menu-3"
              className="appearance-none hidden peer"
              role="button"
            />
            <p
              id={`faq-sub-paragraph-text-3-${index + 1}`}
              style={getElementStyle(`faq-sub-paragraph-${index + 1}`)}
              className={`faq-sub-paragraph-${
                index + 1
              } hidden transition-all duration-75 peer-checked:block peer-checked:opacity-100 lg:opacity-100 mb-3`}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-sub-paragraph-text-3-${index + 1}`]
                  ? document.getElementById(
                      `faq-sub-paragraph-text-3-${index + 1}`
                    )?.innerHTML || text.faqAnswer[0]
                  : text.faqAnswer[0],
              }}
            ></p>
          </div>

          <div className="w-full pl-5">
            <label htmlFor="id-show-menu-4" className="show-menu">
              <div className="">
                <h2
                  id={`faq-sub-heading-text-4-${index + 1}`}
                  style={getElementStyle(`faq-sub-heading-${index + 1}`)}
                  className={`faq-sub-heading-${
                    index + 1
                  } hover:underline hover:cursor-pointer mb-3`}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                  dangerouslySetInnerHTML={{
                    __html: isEdited[`faq-sub-heading-text-4-${index + 1}`]
                      ? document.getElementById(
                          `faq-sub-heading-text-4-${index + 1}`
                        )?.innerHTML || "Question 4"
                      : "Question 4",
                  }}
                ></h2>
              </div>
            </label>
            <input
              type="checkbox"
              id="id-show-menu-4"
              className="appearance-none hidden peer"
              role="button"
            />
            <p
              id={`faq-sub-paragraph-text-4-${index + 1}`}
              style={getElementStyle(`faq-sub-paragraph-${index + 1}`)}
              className={`faq-sub-paragraph-${
                index + 1
              } hidden transition-all duration-75 peer-checked:block peer-checked:opacity-100 lg:opacity-100 mb-3`}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-sub-paragraph-text-4-${index + 1}`]
                  ? document.getElementById(
                      `faq-sub-paragraph-text-4-${index + 1}`
                    )?.innerHTML || text.faqAnswer[0]
                  : text.faqAnswer[0],
              }}
            ></p>
          </div>
        </div>
      </div>
    </section>,
    <section
      className="py-10"
      onClick={handleDivClick}
      id={`faq-section-${index + 1}`}
      style={getStyle(`faq-section-${index + 1}`)}
    >
      <div
        className={`${
          isMobile ? "max-w-[800px]" : ""
        } text-black py-32 w-[90%] max-lg:max-w-[400px] mx-auto max-w-[1000px] bg-white border-solid shadow-2xl rounded-xl p-5`}
      >
        <div className="mb-5">
          <h1
            id={`faq-heading-${index + 1}`}
            style={getElementStyle(`faq-heading-${index + 1}`)}
            className={`faq-heading-${
              index + 1
            } text-3xl font-bold text-[#212529] mb-2 `}
            data-text="Heading"
            contentEditable={false}
            onClick={handleTextClick}
            dangerouslySetInnerHTML={{
              __html: isEdited[`faq-heading-${index + 1}`]
                ? document.getElementById(`faq-heading-${index + 1}`)
                    ?.innerHTML || text.FAQsHeader[0]
                : text.FAQsHeader[0],
            }}
          ></h1>
          <p
            id={`faq-paragraph-${index + 1}`}
            style={getElementStyle(`faq-paragraph-${index + 1}`)}
            className={`faq-paragraph-${index + 1}`}
            data-text="Type a paragraph"
            contentEditable={false}
            onClick={handleTextClick}
            dangerouslySetInnerHTML={{
              __html: isEdited[`faq-paragraph-${index + 1}`]
                ? document.getElementById(`faq-paragraph-${index + 1}`)
                    ?.innerHTML || text.faqParagraphText[0]
                : text.faqParagraphText[0],
            }}
          ></p>
        </div>

        <div
          className={`${
            isMobile ? "flex-col" : ""
          } flex flex-wrap justify-between max-lg:flex-col gap-5`}
        >
          <div className="w-full">
            <label
              htmlFor={`id-show-menu-1-${index + 1}`}
              className="show-menu"
            >
              <div className="">
                <h2
                  id={`faq-sub-heading-text-1-${index + 1}`}
                  style={getElementStyle(`faq-sub-heading-${index + 1}`)}
                  className={`faq-sub-heading-${
                    index + 1
                  } hover:underline hover:cursor-pointer mb-3`}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                  dangerouslySetInnerHTML={{
                    __html: isEdited[`faq-sub-heading-text-1-${index + 1}`]
                      ? document.getElementById(
                          `faq-sub-heading-text-1-${index + 1}`
                        )?.innerHTML || "Question 1"
                      : "Question 1",
                  }}
                ></h2>
              </div>
            </label>
            <input
              type="checkbox"
              id={`id-show-menu-1-${index + 1}`}
              className="appearance-none hidden peer"
            />
            <p
              id={`faq-sub-paragraph-text-1-${index + 1}`}
              style={getElementStyle(`faq-sub-paragraph-${index + 1}`)}
              className={`faq-sub-paragraph-${
                index + 1
              } hidden transition-all duration-75 peer-checked:block peer-checked:opacity-100 lg:opacity-100 mb-3`}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-sub-paragraph-text-1-${index + 1}`]
                  ? document.getElementById(
                      `faq-sub-paragraph-text-1-${index + 1}`
                    )?.innerHTML || text.faqAnswer[0]
                  : text.faqAnswer[0],
              }}
            ></p>
          </div>

          <div className="w-full">
            <label
              htmlFor={`id-show-menu-2-${index + 1}`}
              className="show-menu"
            >
              <div className="">
                <h2
                  id={`faq-sub-heading-text-2-${index + 1}`}
                  style={getElementStyle(`faq-sub-heading-${index + 1}`)}
                  className={`faq-sub-heading-${
                    index + 1
                  } hover:underline hover:cursor-pointer mb-3`}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                  dangerouslySetInnerHTML={{
                    __html: isEdited[`faq-sub-heading-text-2-${index + 1}`]
                      ? document.getElementById(
                          `faq-sub-heading-text-2-${index + 1}`
                        )?.innerHTML || "Question 2"
                      : "Question 2",
                  }}
                ></h2>
              </div>
            </label>
            <input
              type="checkbox"
              id={`id-show-menu-2-${index + 1}`}
              className="appearance-none hidden peer"
            />
            <p
              id={`faq-sub-paragraph-text-2-${index + 1}`}
              style={getElementStyle(`faq-sub-paragraph-${index + 1}`)}
              className={`faq-sub-paragraph-${
                index + 1
              } hidden transition-all duration-75 peer-checked:block peer-checked:opacity-100 lg:opacity-100 mb-3`}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-sub-paragraph-text-2-${index + 1}`]
                  ? document.getElementById(
                      `faq-sub-paragraph-text-2-${index + 1}`
                    )?.innerHTML || text.faqAnswer[0]
                  : text.faqAnswer[0],
              }}
            ></p>
          </div>

          <div className="w-full">
            <label
              htmlFor={`id-show-menu-3-${index + 1}`}
              className="show-menu"
            >
              <div className="">
                <h2
                  id={`faq-sub-heading-text-3-${index + 1}`}
                  style={getElementStyle(`faq-sub-heading-${index + 1}`)}
                  className={`faq-sub-heading-${
                    index + 1
                  } hover:underline hover:cursor-pointer mb-3`}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                  dangerouslySetInnerHTML={{
                    __html: isEdited[`faq-sub-heading-text-3-${index + 1}`]
                      ? document.getElementById(
                          `faq-sub-heading-text-3-${index + 1}`
                        )?.innerHTML || "Question 3"
                      : "Question 3",
                  }}
                ></h2>
              </div>
            </label>
            <input
              type="checkbox"
              id={`id-show-menu-3-${index + 1}`}
              className="appearance-none hidden peer"
            />
            <p
              id={`faq-sub-paragraph-text-3-${index + 1}`}
              style={getElementStyle(`faq-sub-paragraph-${index + 1}`)}
              className={`faq-sub-paragraph-${
                index + 1
              } hidden transition-all duration-75 peer-checked:block peer-checked:opacity-100 lg:opacity-100 mb-3`}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-sub-paragraph-text-3-${index + 1}`]
                  ? document.getElementById(
                      `faq-sub-paragraph-text-3-${index + 1}`
                    )?.innerHTML || text.faqAnswer[0]
                  : text.faqAnswer[0],
              }}
            ></p>
          </div>

          <div className="w-full">
            <label
              htmlFor={`id-show-menu-4-${index + 1}`}
              className="show-menu"
            >
              <div className="">
                <h2
                  id={`faq-sub-heading-text-4-${index + 1}`}
                  style={getElementStyle(`faq-sub-heading-${index + 1}`)}
                  className={`faq-sub-heading-${
                    index + 1
                  } hover:underline hover:cursor-pointer mb-3`}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                  dangerouslySetInnerHTML={{
                    __html: isEdited[`faq-sub-heading-text-4-${index + 1}`]
                      ? document.getElementById(
                          `faq-sub-heading-text-4-${index + 1}`
                        )?.innerHTML || "Question 4"
                      : "Question 4",
                  }}
                ></h2>
              </div>
            </label>
            <input
              type="checkbox"
              id={`id-show-menu-4-${index + 1}`}
              className="appearance-none hidden peer"
            />
            <p
              id={`faq-sub-paragraph-text-4-${index + 1}`}
              style={getElementStyle(`faq-sub-paragraph-${index + 1}`)}
              className={`faq-sub-paragraph-${
                index + 1
              } hidden transition-all duration-75 peer-checked:block peer-checked:opacity-100 lg:opacity-100 mb-3`}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
              dangerouslySetInnerHTML={{
                __html: isEdited[`faq-sub-paragraph-text-4-${index + 1}`]
                  ? document.getElementById(
                      `faq-sub-paragraph-text-4-${index + 1}`
                    )?.innerHTML || text.faqAnswer[0]
                  : text.faqAnswer[0],
              }}
            ></p>
          </div>
        </div>
      </div>
    </section>,
  ];
};
