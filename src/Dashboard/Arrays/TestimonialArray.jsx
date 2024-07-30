export const testimonialComponent = ({
  text,
  isMobile,
  isFocused,
  handleFocus,
  handleBlur,
  location,
  cardFeatureBackGroundStyle,
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
    <section style={{ background: cardFeatureBackGroundStyle }}>
      <div className="py-32 text-black w-[90%] max-w-[1000px] mx-auto">
        <h1
          className={`${classNames} text-center text-3xl font-semibold capitalize mb-5 outline-none`}
          data-text="Heading"
          contentEditable={location.pathname === "/home" ? false : true}
          suppressContentEditableWarning
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {text.customerHeader[0]}
        </h1>
        <p
          className={`${classNames} text-center text-xl outline-none`}
          data-text="Type a paragraph"
          contentEditable={location.pathname === "/home" ? false : true}
          suppressContentEditableWarning
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {text.customerReviewText[0]}
        </p>

        <div className="my-8 flex items-center justify-center gap-3">
          <img
            src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
            alt=""
            className="block rounded-full w-[50px] h-[50px] object-cover"
          />
          <div className="text-sm font-semibold">
            <p
              className={`${classNames} outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              Gabriel
            </p>
            <p
              className={`${classNames} outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              Founder QuickUI
            </p>
          </div>
        </div>
      </div>
    </section>,
    <section style={{ background: cardFeatureBackGroundStyle }}>
      <div className="py-32 text-black w-[90%] max-w-[1000px] mx-auto">
        <h1
          className={`${classNames} text-3xl font-semibold capitalize mb-1 outline-none`}
          data-text="Heading"
          contentEditable={location.pathname === "/home" ? false : true}
          suppressContentEditableWarning
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {text.customerHeader[0]}
        </h1>
        <p
          className={`${classNames} text-base outline-none`}
          data-text="Type a paragraph"
          contentEditable={location.pathname === "/home" ? false : true}
          suppressContentEditableWarning
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {text.customerParagraphText[0]}
        </p>

        <div className="flex flex-wrap justify-evenly gap-8 mt-10 max-[600px]:gap-5 max-[600px]:flex-col">
          <div className="flex flex-col gap-1 w-[30%] max-[600px]:w-[90%]">
            <p
              className={`${classNames} outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              ★★★★★
            </p>
            <h2
              className={`${classNames} text-base font-semibold outline-none`}
              data-text="Heading"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              The Most Amazing product ever
            </h2>
            <p
              className={`${classNames} text-sm md:min-h-[9rem] outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {text.customerReviewText[0]}
            </p>
            <p
              className={`${classNames} max-lg:mt-3 outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              Gabriel - Founder
            </p>
          </div>
          <div className="flex flex-col gap-1 w-[30%] max-[600px]:w-[90%]">
            <p
              className={`${classNames} outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              ★★★★★
            </p>
            <h2
              className={`${classNames} text-base font-semibold outline-none`}
              data-text="Heading"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              The Most Amazing product ever
            </h2>
            <p
              className={`${classNames} text-sm md:min-h-[9rem] outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {text.customerReviewText[1]}
            </p>
            <p
              className={`${classNames} max-md:mt-3 outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              Gabriel - Founder
            </p>
          </div>
          <div className="flex flex-col gap-1 w-[30%] max-[600px]:w-[90%]">
            <p
              className={`${classNames} outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              ★★★★★
            </p>
            <h2
              className={`${classNames} text-base font-semibold outline-none`}
              data-text="Heading"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              The Most Amazing product ever
            </h2>
            <p
              className={`${classNames} text-sm md:min-h-[9rem] outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {text.customerReviewText[2]}
            </p>
            <p
              className={`${classNames} max-lg:mt-3 outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              Gabriel - Founder
            </p>
          </div>
        </div>
      </div>
    </section>,
    <section style={{ background: cardFeatureBackGroundStyle }}>
      <div className="py-32 text-black w-[90%] max-w-[1000px] mx-auto">
        <h1
          className={`${classNames} text-3xl font-semibold capitalize mb-1 text-center outline-none`}
          data-text="Heading"
          contentEditable={location.pathname === "/home" ? false : true}
          suppressContentEditableWarning
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {text.customerHeader[0]}
        </h1>
        <p
          className={`${classNames} text-base text-center outline-none`}
          data-text="Type a paragraph"
          contentEditable={location.pathname === "/home" ? false : true}
          suppressContentEditableWarning
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {text.customerParagraphText[0]}
        </p>

        <div className="flex flex-wrap justify-evenly mt-10 max-[600px]:gap-5 max-[600px]:flex-col text-center">
          <div className="flex flex-col gap-1 w-[30%] max-[600px]:w-[90%]">
            <p
              className={`${classNames} outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              ★★★★★
            </p>
            <h2
              className={`${classNames} text-base font-semibold outline-none`}
              data-text="Heading"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              The Most Amazing product ever
            </h2>
            <p
              className={`${classNames} text-sm md:min-h-[9rem] outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {text.customerReviewText[0]}
            </p>
            <p
              className={`${classNames} max-lg:mt-3 outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              Gabriel - Founder
            </p>
          </div>
          <div className="flex flex-col gap-1 w-[30%] max-[600px]:w-[90%]">
            <p
              className={`${classNames} outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              ★★★★★
            </p>
            <h2
              className={`${classNames} text-base font-semibold outline-none`}
              data-text="Heading"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              The Most Amazing product ever
            </h2>
            <p
              className={`${classNames} text-sm md:min-h-[9rem] outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {text.customerReviewText[1]}
            </p>
            <p
              className={`${classNames} max-lg:mt-3 outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              Gabriel - Founder
            </p>
          </div>
          <div className="flex flex-col gap-1 w-[30%] max-[600px]:w-[90%]">
            <p
              className={`${classNames} outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              ★★★★★
            </p>
            <h2
              className={`${classNames} text-base font-semibold outline-none`}
              data-text="Heading"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              The Most Amazing product ever
            </h2>
            <p
              className={`${classNames} text-sm md:min-h-[9rem] outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {text.customerReviewText[2]}
            </p>
            <p
              className={`${classNames} max-lg:mt-3 outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              Gabriel - Founder
            </p>
          </div>
        </div>
      </div>
    </section>,
    <section
      className="py-10"
      style={{ background: cardFeatureBackGroundStyle }}
    >
      <div className="py-32 text-black w-[90%] max-w-[1000px] mx-auto bg-white border-solid shadow-xl rounded-lg p-5">
        <h1
          className={`${classNames} text-3xl font-semibold capitalize mb-5 outline-none`}
          data-text="Heading"
          contentEditable={location.pathname === "/home" ? false : true}
          suppressContentEditableWarning
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {text.customerHeader[0]}
        </h1>
        <p
          className={`${classNames} text-xl outline-none`}
          data-text="Type a paragraph"
          contentEditable={location.pathname === "/home" ? false : true}
          suppressContentEditableWarning
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {text.customerReviewText[0]}
        </p>

        <div className="my-8 flex items-center gap-3">
          <img
            src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
            alt=""
            className="block rounded-full w-[50px] h-[50px] object-cover"
          />
          <div className="text-sm font-semibold">
            <p
              className={`${classNames} outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              Gabriel
            </p>
            <p
              className={`${classNames} outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              Founder QuickUI
            </p>
          </div>
        </div>
      </div>
    </section>,
    <section
      className="py-10"
      style={{ background: cardFeatureBackGroundStyle }}
    >
      <div className="py-32 text-black w-[90%] max-w-[1000px] mx-auto bg-white border-solid shadow-xl rounded-lg p-5">
        <h1
          className={`${classNames} text-center text-3xl font-semibold capitalize mb-5 outline-none`}
          data-text="Heading"
          contentEditable={location.pathname === "/home" ? false : true}
          suppressContentEditableWarning
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {text.customerHeader[0]}
        </h1>
        <p
          className={`${classNames} text-center text-xl max-w-[800px] mx-auto outline-none`}
          data-text="Type a paragraph"
          contentEditable={location.pathname === "/home" ? false : true}
          suppressContentEditableWarning
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {text.customerReviewText[0]}
        </p>

        <div className="my-8 flex items-center justify-center gap-3">
          <img
            src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
            alt=""
            className="block rounded-full w-[50px] h-[50px] object-cover"
          />
          <div className="text-sm font-semibold">
            <p
              className={`${classNames} outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              Gabriel
            </p>
            <p
              className={`${classNames} outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              Founder QuickUI
            </p>
          </div>
        </div>
      </div>
    </section>,
    <section style={{ background: cardFeatureBackGroundStyle }}>
      <div className="py-32 text-black w-[90%] max-w-[1000px] mx-auto">
        <h1
          className={`${classNames} text-3xl font-semibold capitalize mb-5 outline-none`}
          data-text="Heading"
          contentEditable={location.pathname === "/home" ? false : true}
          suppressContentEditableWarning
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {text.customerHeader[0]}
        </h1>
        <p
          className={`${classNames} text-xl max-w-[800px] outline-none`}
          data-text="Type a paragraph"
          contentEditable={location.pathname === "/home" ? false : true}
          suppressContentEditableWarning
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {text.customerReviewText[0]}
        </p>

        <div className="my-8 flex items-center gap-3">
          <img
            src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
            alt=""
            className="block rounded-full w-[50px] h-[50px] object-cover"
          />
          <div className="text-sm font-semibold">
            <p
              className={`${classNames} outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              Gabriel
            </p>
            <p
              className={`${classNames} outline-none`}
              data-text="Type a paragraph"
              contentEditable={location.pathname === "/home" ? false : true}
              suppressContentEditableWarning
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              Founder QuickUI
            </p>
          </div>
        </div>
      </div>
    </section>,
    <section style={{ background: cardFeatureBackGroundStyle }}>
      <div
        className={`${
          isMobile ? "max-w-[350px] flex-col items-start gap-5" : ""
        } py-32 text-black w-[90%] max-md:max-w-[350px] max-w-[1000px] mx-auto flex max-md:flex-col gap-10 items-center max-md:items-start max-md:gap-5`}
      >
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
            alt=""
            className="block w-[150px] h-[200px] object-cover rounded-md"
          />
        </div>
        <div className="">
          <h1
            className={`${classNames} text-3xl font-semibold capitalize mb-3 outline-none`}
            data-text="Heading"
            contentEditable={location.pathname === "/home" ? false : true}
            suppressContentEditableWarning
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {text.customerHeader[0]}
          </h1>
          <p
            className={`${classNames} text-xl max-w-[700px] outline-none`}
            data-text="Type a paragraph"
            contentEditable={location.pathname === "/home" ? false : true}
            suppressContentEditableWarning
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {text.customerReviewText[0]}
          </p>
        </div>
      </div>
    </section>,
    <section className="py-10" style={{ background: cardFeatureBackGroundStyle }}>
      <div
        className={`${
          isMobile ? "max-w-[350px] flex-col items-start gap-5" : ""
        } py-32 text-black w-[90%] max-md:max-w-[350px] max-w-[1000px] mx-auto flex max-md:flex-col gap-10 items-center max-md:items-start max-md:gap-5 bg-white border-solid shadow-xl rounded-lg p-5`}
      >
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
            alt=""
            className="block w-[150px] h-[200px] object-cover rounded-md"
          />
        </div>
        <div className="">
          <h1
            className={`${classNames} text-3xl font-semibold capitalize mb-3 outline-none`}
            data-text="Heading"
            contentEditable={location.pathname === "/home" ? false : true}
            suppressContentEditableWarning
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {text.customerHeader[0]}
          </h1>
          <p
            className={`${classNames} text-xl max-w-[700px] outline-none`}
            data-text="Type a paragraph"
            contentEditable={location.pathname === "/home" ? false : true}
            suppressContentEditableWarning
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {text.customerReviewText[0]}
          </p>
        </div>
      </div>
    </section>,
  ];
};
