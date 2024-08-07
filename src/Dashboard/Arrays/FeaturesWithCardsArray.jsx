import testImage from "../../assets/Default-Card.jpg";

export const featuresWithCardsComponent = ({
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
      id="features-with-card-section"
      style={getStyle("features-with-card-section")}
    >
      <div
        className={`${
          isMobile ? "flex-col" : ""
        } text-black w-[90%] mx-auto py-24 flex max-lg:flex-col justify-between max-w-[1000px]`}
      >
        <div
          className={`${
            isMobile ? "w-full" : ""
          } w-[50%] flex flex-col items-start gap-3 max-lg:w-full`}
        >
          <div className="">
            <h1
              id="features-with-card-heading"
              style={getElementStyle("features-with-card-heading")}
              className={`text-[#231e41] text-3xl font-bold mb-1 `}
              data-text="Heading"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.featureHeader[0]}
            </h1>
            <p
              id="features-with-card-paragraph"
              style={getElementStyle("features-with-card-paragraph")}
              className={`text-[#231e41] max-w-[500px] `}
              data-text="Type a paragraph"
              contentEditable={false}
              onClick={handleTextClick}
            >
              Here's some more information about this amazing feature. You can
              use basic formatting and also multiple paragraphs.
            </p>
          </div>

          <div>
            <div className="flex gap-3 max-w-[400px] mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#231e41"
                width="50"
                height="50"
                viewBox="0 0 24 24"
              >
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
              </svg>

              <div className="mt-2">
                <h2
                  id="features-with-card-sub-heading"
                  style={getElementStyle("features-with-card-sub-heading")}
                  className={`capitalize text-xl font-semibold text-[#231e41] `}
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  Item One
                </h2>
                <p
                  id="features-with-card-sub-paragraph"
                  style={getElementStyle("features-with-card-sub-paragraph")}
                  className={`text-[#231e41] `}
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum labore iure hic nemo ipsam totam veritatis provident
                  et aut quae?
                </p>
              </div>
            </div>

            <div className="flex gap-3 max-w-[400px] mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#231e41"
                width="50"
                height="50"
                viewBox="0 0 512 512"
              >
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg>

              <div className="mt-2">
                <h2
                  id="features-with-card-sub-heading"
                  style={getElementStyle("features-with-card-sub-heading")}
                  className={`capitalize text-xl font-semibold text-[#231e41] `}
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  Item two
                </h2>
                <p
                  id="features-with-card-sub-paragraph-2"
                  style={getElementStyle("features-with-card-sub-paragraph")}
                  className={`text-[#231e41] `}
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum labore iure hic nemo ipsam totam veritatis provident
                  et aut quae?
                </p>
              </div>
            </div>

            <div className="flex gap-3 max-w-[400px] mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#231e41"
                width="50"
                height="50"
                viewBox="0 0 24 24"
              >
                <path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
              </svg>

              <div className="mt-2">
                <h2
                  id="features-with-card-sub-heading"
                  style={getElementStyle("features-with-card-sub-heading")}
                  className={`capitalize text-xl font-semibold text-[#231e41] `}
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  Item Three
                </h2>
                <p
                  id="features-with-card-sub-paragraph"
                  style={getElementStyle("features-with-card-sub-paragraph")}
                  className={`text-[#231e41] `}
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum labore iure hic nemo ipsam totam veritatis provident
                  et aut quae?
                </p>
              </div>
            </div>
          </div>

          <button className="capitalize flex text-white bg-[rgba(0,0,0,0.9)] px-8 py-2 rounded-full font-semibold text-sm my-3">
            <span
              id="features-with-card-button-text"
              style={getElementStyle("features-with-card-button-text")}
              className=""
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.buttonTexts[4]}
            </span>
          </button>
        </div>

        <div
          className={`${
            isMobile ? "mt-5 w-full" : ""
          } w-[40%] max-lg:w-full max-lg:mt-5`}
        >
          <img
            src={testImage}
            alt={testImage}
            className="block h-[550px] mx-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </section>,
    <section
      onClick={handleDivClick}
      id="features-with-card-section"
      style={getStyle("features-with-card-section")}
    >
      <div
        className={`${
          isMobile ? "flex-col-reverse" : ""
        } text-black w-[90%] mx-auto py-24 flex flex-row-reverse max-lg:flex-col-reverse justify-between max-w-[1000px]`}
      >
        <div
          className={`${
            isMobile ? "w-full" : ""
          } w-[50%] flex flex-col items-start gap-3 max-lg:w-full`}
        >
          <div className={`${isMobile ? "mt-4" : ""} max-lg:mt-4`}>
            <h1
              id="features-with-card-heading"
              style={getElementStyle("features-with-card-heading")}
              className={`text-[#231e41] text-3xl font-bold mb-1 `}
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.featureHeader[0]}
            </h1>
            <p
              id="features-with-card-paragraph"
              style={getElementStyle("features-with-card-paragraph")}
              className={`text-[#231e41] `}
              contentEditable={false}
              onClick={handleTextClick}
            >
              Here's some more information about this amazing feature. You can
              use basic formatting and also multiple paragraphs.
            </p>
          </div>

          <div>
            <div className="flex gap-3 max-w-[400px] mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#231e41"
                width="50"
                height="50"
                viewBox="0 0 24 24"
              >
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
              </svg>

              <div className="mt-2">
                <h2
                  id="features-with-card-sub-heading"
                  style={getElementStyle("features-with-card-sub-heading")}
                  className={`capitalize text-xl font-semibold text-[#231e41] `}
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  Item One
                </h2>
                <p
                  id="features-with-card-sub-paragraph"
                  style={getElementStyle("features-with-card-sub-paragraph")}
                  className={`text-[#231e41] `}
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum labore iure hic nemo ipsam totam veritatis provident
                  et aut quae?
                </p>
              </div>
            </div>

            <div className="flex gap-3 max-w-[400px] mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#231e41"
                width="50"
                height="50"
                viewBox="0 0 512 512"
              >
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg>

              <div className="mt-2">
                <h2
                  id="features-with-card-sub-heading"
                  style={getElementStyle("features-with-card-sub-heading")}
                  className={`capitalize text-xl font-semibold text-[#231e41] `}
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  Item two
                </h2>
                <p
                  id="features-with-card-sub-paragraph"
                  style={getElementStyle("features-with-card-sub-paragraph")}
                  className={`text-[#231e41] `}
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum labore iure hic nemo ipsam totam veritatis provident
                  et aut quae?
                </p>
              </div>
            </div>

            <div className="flex gap-3 max-w-[400px] mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#231e41"
                width="50"
                height="50"
                viewBox="0 0 24 24"
              >
                <path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
              </svg>

              <div className="mt-2">
                <h2
                  id="features-with-card-sub-heading"
                  style={getElementStyle("features-with-card-sub-heading")}
                  className={`capitalize text-xl font-semibold text-[#231e41] `}
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  Item Three
                </h2>
                <p
                  id="features-with-card-sub-paragraph-3"
                  style={getElementStyle("features-with-card-sub-paragraph-3")}
                  className={`text-[#231e41] `}
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum labore iure hic nemo ipsam totam veritatis provident
                  et aut quae?
                </p>
              </div>
            </div>
          </div>

          <button className="capitalize flex text-white bg-[rgba(0,0,0,0.9)] px-8 py-2 rounded-full font-semibold text-sm my-3">
            <span
              id="features-with-card-button-text"
              style={getElementStyle("features-with-card-button-text")}
              className=""
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.buttonTexts[4]}
            </span>
          </button>
        </div>

        <div
          className={`${
            isMobile ? "mt-5 w-full" : ""
          } w-[40%] max-lg:w-full max-lg:mt-5`}
        >
          <img
            src={testImage}
            alt={testImage}
            className="block h-[550px] mx-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </section>,
    <section
      onClick={handleDivClick}
      id="features-with-card-section"
      style={getStyle("features-with-card-section")}
    >
      <div
        className={`${
          isMobile ? "flex-col" : ""
        } text-black w-[90%] mx-auto py-24 flex max-lg:flex-col justify-between max-w-[1000px]`}
      >
        <div
          className={`${
            isMobile ? "w-full" : ""
          } w-[50%] flex flex-col items-start gap-3 max-lg:w-full`}
        >
          <div className="">
            <h1
              id="features-with-card-heading"
              style={getElementStyle("features-with-card-heading")}
              className={`text-[#231e41] text-3xl font-bold mb-1 `}
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.featureHeader[0]}
            </h1>
            <p
              id="features-with-card-paragraph"
              style={getElementStyle("features-with-card-paragraph")}
              className={`text-[#231e41] `}
              contentEditable={false}
              onClick={handleTextClick}
            >
              Here's some more information about this amazing feature. You can
              use basic formatting and also multiple paragraphs.
            </p>
          </div>

          <div>
            <div className="flex gap-3 max-w-[400px] mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#231e41"
                width="50"
                height="50"
                viewBox="0 0 24 24"
              >
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
              </svg>

              <div className="mt-2">
                <h2
                  id="features-with-card-sub-heading"
                  style={getElementStyle("features-with-card-sub-heading")}
                  className={`capitalize text-xl font-semibold text-[#231e41] `}
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  Item One
                </h2>
                <p
                  id="features-with-card-sub-paragraph"
                  style={getElementStyle("features-with-card-sub-paragraph")}
                  className={`text-[#231e41] `}
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum labore iure hic nemo ipsam totam veritatis provident
                  et aut quae?
                </p>
              </div>
            </div>

            <div
              className={`${
                isMobile ? "hidden" : ""
              } w-full max-lg:mt-5 max-lg:hidden`}
            >
              <img
                src={testImage}
                alt={testImage}
                className="block w-full h-[300px] mx-auto object-cover rounded-xl"
              />
            </div>
          </div>

          <button className="capitalize flex text-white bg-[rgba(0,0,0,0.9)] px-8 py-2 rounded-full font-semibold text-sm my-3">
            <span
              id="features-with-card-button-text"
              style={getElementStyle("features-with-card-button-text")}
              className=""
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.buttonTexts[4]}
            </span>
          </button>
        </div>

        <div
          className={`${
            isMobile ? "w-full mt-5" : ""
          } w-[40%] max-lg:w-full max-lg:mt-5`}
        >
          <img
            src={testImage}
            alt={testImage}
            className="block w-full h-[550px] mx-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </section>,
    <section
      onClick={handleDivClick}
      id="features-with-card-section"
      style={getStyle("features-with-card-section")}
    >
      <div
        className={`${
          isMobile ? "flex-col" : ""
        } text-black w-[90%] mx-auto py-24 flex flex-row-reverse max-lg:flex-col justify-between max-w-[1000px]`}
      >
        <div
          className={`${
            isMobile ? "w-full" : ""
          } w-[50%] flex flex-col items-start gap-3 max-lg:w-full`}
        >
          <div className="">
            <h1
              id="features-with-card-heading"
              style={getElementStyle("features-with-card-heading")}
              className={`text-[#231e41] text-3xl font-bold mb-1 `}
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.featureHeader[0]}
            </h1>
            <p
              id="features-with-card-paragraph"
              style={getElementStyle("features-with-card-paragraph")}
              className={`text-[#231e41] `}
              contentEditable={false}
              onClick={handleTextClick}
            >
              Here's some more information about this amazing feature. You can
              use basic formatting and also multiple paragraphs.
            </p>
          </div>

          <div>
            <div className="flex gap-3 max-w-[400px] mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#231e41"
                width="50"
                height="50"
                viewBox="0 0 24 24"
              >
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
              </svg>

              <div className="mt-2">
                <h2
                  id="features-with-card-sub-heading"
                  style={getElementStyle("features-with-card-sub-heading")}
                  className={`capitalize text-xl font-semibold text-[#231e41] `}
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  Item One
                </h2>
                <p
                  id="features-with-card-sub-paragraph"
                  style={getElementStyle("features-with-card-sub-paragraph")}
                  className={`text-[#231e41] `}
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum labore iure hic nemo ipsam totam veritatis provident
                  et aut quae?
                </p>
              </div>
            </div>

            <div
              className={`${
                isMobile ? "hidden mt-5" : ""
              } w-full max-lg:mt-5 max-lg:hidden`}
            >
              <img
                src={testImage}
                alt={testImage}
                className="block w-full h-[300px] mx-auto object-cover rounded-xl"
              />
            </div>
          </div>

          <button className="capitalize flex text-white bg-[rgba(0,0,0,0.9)] px-8 py-2 rounded-full font-semibold text-sm my-3">
            <span
              id="features-with-card-button-text"
              style={getElementStyle("features-with-card-button-text")}
              className=""
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.buttonTexts[4]}
            </span>
          </button>
        </div>

        <div
          className={`${
            isMobile ? "w-full mt-5" : ""
          } w-[40%] max-lg:w-full max-lg:mt-5`}
        >
          <img
            src={testImage}
            alt={testImage}
            className="block w-full h-[550px] mx-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </section>,
    <section
      onClick={handleDivClick}
      id="features-with-card-section"
      style={getStyle("features-with-card-section")}
    >
      <div
        className={`${
          isMobile ? "flex-col" : ""
        } text-black w-[90%] mx-auto py-24 flex max-lg:flex-col justify-between max-w-[1000px]`}
      >
        <div
          className={`${
            isMobile ? "w-full" : ""
          } w-[45%] flex flex-col items-start gap-3 max-lg:w-full`}
        >
          <div className="">
            <h1
              id="features-with-card-heading"
              style={getElementStyle("features-with-card-heading")}
              className={`text-[#231e41] text-3xl font-bold mb-1 `}
              contentEditable={false}
              onClick={handleTextClick}
            >
              {text.featureHeader[0]}
            </h1>
            <p
              id="features-with-card-paragraph"
              style={getElementStyle("features-with-card-paragraph")}
              className={`text-[#231e41] max-w-[500px] `}
              contentEditable={false}
              onClick={handleTextClick}
            >
              Here's some more information about this amazing feature. You can
              use basic formatting and also multiple paragraphs.
            </p>
          </div>

          <div>
            <div className="flex gap-3 max-w-[400px] mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#231e41"
                width="50"
                height="50"
                viewBox="0 0 24 24"
              >
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
              </svg>

              <div className="mt-2">
                <h2
                  id="features-with-card-sub-heading"
                  style={getElementStyle("features-with-card-sub-heading")}
                  className={`capitalize text-xl font-semibold text-[#231e41] `}
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  Item One
                </h2>
                <p
                  id="features-with-card-sub-paragraph"
                  style={getElementStyle("features-with-card-sub-paragraph")}
                  className={`text-[#231e41] `}
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum labore iure hic nemo ipsam totam veritatis provident
                  et aut quae?
                </p>
              </div>
            </div>

            <div className="flex gap-3 max-w-[400px] mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#231e41"
                width="50"
                height="50"
                viewBox="0 0 512 512"
              >
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg>

              <div className="mt-2">
                <h2
                  id="features-with-card-sub-heading"
                  style={getElementStyle("features-with-card-sub-heading")}
                  className={`capitalize text-xl font-semibold text-[#231e41] `}
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  Item two
                </h2>
                <p
                  id="features-with-card-sub-paragraph-2"
                  style={getElementStyle("features-with-card-sub-paragraph-2")}
                  className={`text-[#231e41] `}
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum labore iure hic nemo ipsam totam veritatis provident
                  et aut quae?
                </p>
              </div>
            </div>

            <div className="flex gap-3 max-w-[400px] mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#231e41"
                width="50"
                height="50"
                viewBox="0 0 24 24"
              >
                <path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
              </svg>

              <div className="mt-2">
                <h2
                  id="features-with-card-sub-heading"
                  style={getElementStyle("features-with-card-sub-heading")}
                  className={`capitalize text-xl font-semibold text-[#231e41] `}
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  Item Three
                </h2>
                <p
                  id="features-with-card-sub-paragraph-3"
                  style={getElementStyle("features-with-card-sub-paragraph-3")}
                  className={`text-[#231e41] `}
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum labore iure hic nemo ipsam totam veritatis provident
                  et aut quae?
                </p>
              </div>
            </div>
          </div>

          <button className="capitalize flex text-white bg-[rgba(0,0,0,0.9)] px-8 py-2 rounded-full font-semibold text-sm my-3">
            <span
              id="features-with-card-button-text"
              style={getElementStyle("features-with-card-button-text")}
              className=""
              contentEditable={false}
              onClick={handleTextClick}
            >
              Learn
            </span>
          </button>
        </div>

        <div
          className={`${
            isMobile ? "mt-5 w-full" : ""
          } w-[50%] max-lg:w-full max-lg:mt-5`}
        >
          <div className="mx-auto relative my-10">
            <div
              className={`${
                isMobile ? "w-[80%] max-md:max-w-[400px]" : ""
              } bg-[linear-gradient(314deg,#212529_70%,#484e53_100%)] w-[80%] max-w-[400px] max-md:w-[80%] lg:w-[85%] max-md:max-w-[400px] h-[250px] mx-auto rounded-t-2xl flex justify-center items-center`}
            >
              <img
                src={testImage}
                alt={testImage}
                className="h-[230px] w-[95%] rounded-t-2xl block object-cover"
              />
            </div>
            <div>
              <div
                className={`${
                  isMobile ? "w-[100%] max-w-[500px]" : ""
                } bg-[linear-gradient(0deg,#212529_0%,#484e53_100%)] w-[95%] lg:w-full max-w-[500px] max-md:w-[100%] max-md:max-w-[500px] h-[20px] mx-auto rounded-b-xl`}
              >
                <div className="bg-[#868e96] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] w-[100px] h-[10px] mx-auto rounded-b-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>,
  ];
};
