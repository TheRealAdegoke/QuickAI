export const faqComponent = ({
  text,
  isMobile,
  isFocused,
  location,
  handleDivClick,
  handleTextClick,
  getStyle,
  getElementStyle,
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
      id="faq-section"
      style={getStyle("faq-section")}
    >
      <div
        className={`${
          isMobile ? "max-w-[800px]" : ""
        } text-black py-32 w-[90%] max-lg:max-w-[400px] mx-auto max-w-[1000px]`}
      >
        <div className="mb-10">
          <h1
            id="faq-heading"
            style={getElementStyle("faq-heading")}
            className={`text-3xl font-bold text-[#212529] mb-2 `}
            data-text="Heading"
            contentEditable={false}
            onClick={handleTextClick}
          >
            {text.FAQsHeader[0]}
          </h1>
          <p
            id="faq-paragraph"
            style={getElementStyle("faq-paragraph")}
            className={``}
            data-text="Type a paragraph"
            contentEditable={false}
            onClick={handleTextClick}
          >
            {text.faqParagraphText[0]}
          </p>
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
              id="faq-sub-heading"
              style={getElementStyle("faq-sub-heading")}
              className={``}
              data-text="Heading"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.faqQuestion[0]}
            </h2>
            <p
              id="faq-sub-paragraph"
              style={getElementStyle("faq-sub-paragraph")}
              className={`my-2 `}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.faqAnswer[0]}
            </p>
          </div>

          <div
            className={`${isMobile ? "w-[80%]" : ""} w-[40%] max-lg:w-[80%]`}
          >
            <h2
              id="faq-sub-heading"
              style={getElementStyle("faq-sub-heading")}
              className={``}
              data-text="Heading"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.faqQuestion[0]}
            </h2>
            <p
              id="faq-sub-paragraph"
              style={getElementStyle("faq-sub-paragraph")}
              className={`my-2 `}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.faqAnswer[0]}
            </p>
          </div>

          <div
            className={`${isMobile ? "w-[80%]" : ""} w-[40%] max-lg:w-[80%]`}
          >
            <h2
              id="faq-sub-heading"
              style={getElementStyle("faq-sub-heading")}
              className={``}
              data-text="Heading"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.faqQuestion[0]}
            </h2>
            <p
              id="faq-sub-paragraph"
              style={getElementStyle("faq-sub-paragraph")}
              className={`my-2 `}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.faqAnswer[0]}
            </p>
          </div>

          <div
            className={`${isMobile ? "w-[80%]" : ""} w-[40%] max-lg:w-[80%]`}
          >
            <h2
              id="faq-sub-heading"
              style={getElementStyle("faq-sub-heading")}
              className={``}
              data-text="Heading"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.faqQuestion[0]}
            </h2>
            <p
              id="faq-sub-paragraph"
              style={getElementStyle("faq-sub-paragraph")}
              className={`my-2 `}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.faqAnswer[0]}
            </p>
          </div>
        </div>
      </div>
    </section>,
    <section
      className="py-10"
      onClick={handleDivClick}
      id="faq-section"
      style={getStyle("faq-section")}
    >
      <div
        className={`${
          isMobile ? "max-w-[800px]" : ""
        } text-black py-32 w-[90%] max-lg:max-w-[400px] mx-auto max-w-[1000px] bg-white border-solid shadow-2xl rounded-xl p-5`}
      >
        <div className="mb-10">
          <h1
            id="faq-heading"
            style={getElementStyle("faq-heading")}
            className={`text-3xl font-bold text-[#212529] mb-2 `}
            data-text="Heading"
            contentEditable={false}
            onClick={handleTextClick}
          >
            {text.FAQsHeader[0]}
          </h1>
          <p
            id="faq-paragraph"
            style={getElementStyle("faq-paragraph")}
            className={``}
            data-text="Type a paragraph"
            contentEditable={false}
            onClick={handleTextClick}
          >
            {text.faqParagraphText[0]}
          </p>
        </div>

        <div
          className={`${
            isMobile ? "flex-col" : ""
          } flex flex-wrap justify-between max-lg:flex-col gap-5`}
        >
          <div
            className={`${isMobile ? "w-[80%]" : ""}  w-[40%] max-lg:w-[80%]`}
          >
            <h2
              id="faq-sub-heading"
              style={getElementStyle("faq-sub-heading")}
              className={``}
              data-text="Heading"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.faqQuestion[0]}
            </h2>
            <p
              id="faq-sub-paragraph"
              style={getElementStyle("faq-sub-paragraph")}
              className={`my-2 `}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.faqAnswer[0]}
            </p>
          </div>

          <div
            className={`${isMobile ? "w-[80%]" : ""}  w-[40%] max-lg:w-[80%]`}
          >
            <h2
              id="faq-sub-heading"
              style={getElementStyle("faq-sub-heading")}
              className={``}
              data-text="Heading"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.faqQuestion[0]}
            </h2>
            <p
              id="faq-sub-paragraph"
              style={getElementStyle("faq-sub-paragraph")}
              className={`my-2 `}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.faqAnswer[0]}
            </p>
          </div>

          <div
            className={`${isMobile ? "w-[80%]" : ""}  w-[40%] max-lg:w-[80%]`}
          >
            <h2
              id="faq-sub-heading"
              style={getElementStyle("faq-sub-heading")}
              className={``}
              data-text="Heading"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.faqQuestion[0]}
            </h2>
            <p
              id="faq-sub-paragraph"
              style={getElementStyle("faq-sub-paragraph")}
              className={`my-2 `}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.faqAnswer[0]}
            </p>
          </div>

          <div
            className={`${isMobile ? "w-[80%]" : ""}  w-[40%] max-lg:w-[80%]`}
          >
            <h2
              id="faq-sub-heading"
              style={getElementStyle("faq-sub-heading")}
              className={``}
              data-text="Heading"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.faqQuestion[0]}
            </h2>
            <p
              id="faq-sub-paragraph"
              style={getElementStyle("faq-sub-paragraph")}
              className={`my-2 `}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.faqAnswer[0]}
            </p>
          </div>
        </div>
      </div>
    </section>,
    <section
      className="py-10"
      onClick={handleDivClick}
      id="faq-section"
      style={getStyle("faq-section")}
    >
      <div
        className={`${
          isMobile ? "max-w-[800px]" : ""
        } text-black py-32 w-[90%] max-lg:max-w-[400px] mx-auto max-w-[1000px] bg-white border-solid shadow-2xl rounded-xl p-5`}
      >
        <div className="mb-5">
          <h1
            id="faq-heading"
            style={getElementStyle("faq-heading")}
            className={`text-3xl font-bold text-[#212529] mb-2 `}
            data-text="Heading"
            contentEditable={false}
            onClick={handleTextClick}
          >
            {text.FAQsHeader[0]}
          </h1>
          <p
            id="faq-paragraph"
            style={getElementStyle("faq-paragraph")}
            className={``}
            data-text="Type a paragraph"
            contentEditable={false}
            onClick={handleTextClick}
          >
            {text.faqParagraphText[0]}
          </p>
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
                  id="faq-sub-heading"
                  style={getElementStyle("faq-sub-heading")}
                  className={`hover:underline hover:cursor-pointer mb-3 `}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {text.faqQuestion[0]}
                </h2>
              </div>
            </label>
            <input
              type="checkbox"
              id="id-show-menu-1"
              className="appearance-none hidden peer"
            />
            <p
              id="faq-sub-paragraph"
              style={getElementStyle("faq-sub-paragraph")}
              className={`hidden transition-all duration-75 peer-checked:block peer-checked:opacity-100 lg:opacity-100 mb-3 `}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.faqAnswer[0]}
            </p>
          </div>

          <div className="w-full border-b-[2px] pl-5">
            <label htmlFor="id-show-menu-2" className="show-menu">
              <div className="">
                <h2
                  id="faq-sub-heading"
                  style={getElementStyle("faq-sub-heading")}
                  className={`hover:underline hover:cursor-pointer mb-3 `}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {text.faqQuestion[1]}
                </h2>
              </div>
            </label>
            <input
              type="checkbox"
              id="id-show-menu-2"
              className="appearance-none hidden peer"
              role="button"
            />
            <p
              id="faq-sub-paragraph"
              style={getElementStyle("faq-sub-paragraph")}
              className={`hidden transition-all duration-75 peer-checked:block peer-checked:opacity-100 lg:opacity-100 mb-3 `}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.faqAnswer[1]}
            </p>
          </div>

          <div className="w-full border-b-[2px] pl-5">
            <label htmlFor="id-show-menu-3" className="show-menu">
              <div className="">
                <h2
                  id="faq-sub-heading"
                  style={getElementStyle("faq-sub-heading")}
                  className={`hover:underline hover:cursor-pointer mb-3 `}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {text.faqQuestion[2]}
                </h2>
              </div>
            </label>
            <input
              type="checkbox"
              id="id-show-menu-3"
              className="appearance-none hidden peer"
              role="button"
            />
            <p
              id="faq-sub-paragraph"
              style={getElementStyle("faq-sub-paragraph")}
              className={`hidden transition-all duration-75 peer-checked:block peer-checked:opacity-100 lg:opacity-100 mb-3 `}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.faqAnswer[2]}
            </p>
          </div>

          <div className="w-full pl-5">
            <label htmlFor="id-show-menu-4" className="show-menu">
              <div className="">
                <h2
                  id="faq-sub-heading"
                  style={getElementStyle("faq-sub-heading")}
                  className={`hover:underline hover:cursor-pointer mb-3 `}
                  data-text="Header"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {text.faqQuestion[3]}
                </h2>
              </div>
            </label>
            <input
              type="checkbox"
              id="id-show-menu-4"
              className="appearance-none hidden peer"
              role="button"
            />
            <p
              id="faq-sub-paragraph"
              style={getElementStyle("faq-sub-paragraph")}
              className={`hidden transition-all duration-75 peer-checked:block peer-checked:opacity-100 lg:opacity-100 mb-3 `}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.faqAnswer[3]}
            </p>
          </div>
        </div>
      </div>
    </section>,
    <section
      className="py-10"
      onClick={handleDivClick}
      id="faq-section"
      style={getStyle("faq-section")}
    >
      <div
        className={`${
          isMobile ? "max-w-[800px]" : ""
        } text-black py-32 w-[90%] max-lg:max-w-[400px] mx-auto max-w-[1000px] bg-white border-solid shadow-2xl rounded-xl p-5`}
      >
        <div className="mb-5">
          <h1
            id="faq-heading"
            style={getElementStyle("faq-heading")}
            className={`text-3xl font-bold text-[#212529] mb-2 `}
            data-text="Heading"
            contentEditable={false}
            onClick={handleTextClick}
          >
            {text.FAQsHeader[0]}
          </h1>
          <p
            id="faq-paragraph"
            style={getElementStyle("faq-paragraph")}
            className={``}
            data-text="Type a paragraph"
            contentEditable={false}
            onClick={handleTextClick}
          >
            {text.faqParagraphText[0]}
          </p>
        </div>

        <div
          className={`${
            isMobile ? "flex-col" : ""
          } flex flex-wrap justify-between max-lg:flex-col gap-5`}
        >
          <div className="w-full">
            <label htmlFor="id-show-menu-1" className="show-menu">
              <div className="">
                <h2
                  id="faq-sub-heading"
                  style={getElementStyle("faq-sub-heading")}
                  className={`hover:underline hover:cursor-pointer mb-3 `}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {text.faqQuestion[0]}
                </h2>
              </div>
            </label>
            <input
              type="checkbox"
              id="id-show-menu-1"
              className="appearance-none hidden peer"
            />
            <p
              id="faq-sub-paragraph"
              style={getElementStyle("faq-sub-paragraph")}
              className={`hidden transition-all duration-75 peer-checked:block peer-checked:opacity-100 lg:opacity-100 mb-3 `}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.faqAnswer[0]}
            </p>
          </div>

          <div className="w-full">
            <label htmlFor="id-show-menu-2" className="show-menu">
              <div className="">
                <h2
                  id="faq-sub-heading"
                  style={getElementStyle("faq-sub-heading")}
                  className={`hover:underline hover:cursor-pointer mb-3 `}
                  data-text="Type a paragraph"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {text.faqQuestion[1]}
                </h2>
              </div>
            </label>
            <input
              type="checkbox"
              id="id-show-menu-2"
              className="appearance-none hidden peer"
              role="button"
            />
            <p
              id="faq-sub-paragraph"
              style={getElementStyle("faq-sub-paragraph")}
              className={`hidden transition-all duration-75 peer-checked:block peer-checked:opacity-100 lg:opacity-100 mb-3 `}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.faqAnswer[1]}
            </p>
          </div>

          <div className="w-full">
            <label htmlFor="id-show-menu-3" className="show-menu">
              <div className="">
                <h2
                  id="faq-sub-heading"
                  style={getElementStyle("faq-sub-heading")}
                  className={`hover:underline hover:cursor-pointer mb-3 `}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {text.faqQuestion[2]}
                </h2>
              </div>
            </label>
            <input
              type="checkbox"
              id="id-show-menu-3"
              className="appearance-none hidden peer"
              role="button"
            />
            <p
              id="faq-sub-paragraph"
              style={getElementStyle("faq-sub-paragraph")}
              className={`hidden transition-all duration-75 peer-checked:block peer-checked:opacity-100 lg:opacity-100 mb-3 `}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.faqAnswer[2]}
            </p>
          </div>

          <div className="w-full">
            <label htmlFor="id-show-menu-4" className="show-menu">
              <div className="">
                <h2
                  id="faq-sub-heading"
                  style={getElementStyle("faq-sub-heading")}
                  className={`hover:underline hover:cursor-pointer mb-3 `}
                  data-text="Heading"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {text.faqQuestion[3]}
                </h2>
              </div>
            </label>
            <input
              type="checkbox"
              id="id-show-menu-4"
              className="appearance-none hidden peer"
              role="button"
            />
            <p
              id="faq-sub-paragraph"
              style={getElementStyle("faq-sub-paragraph")}
              className={`hidden transition-all duration-75 peer-checked:block peer-checked:opacity-100 lg:opacity-100 mb-3 `}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.faqAnswer[3]}
            </p>
          </div>
        </div>
      </div>
    </section>,
  ];
};
