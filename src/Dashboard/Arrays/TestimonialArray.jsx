export const testimonialComponent = ({ text, isMobile, handleTextClick }) => {
  return [
    <section className="my-32 text-black w-[90%] max-w-[1000px] mx-auto">
      <h1
        className="text-center text-3xl font-semibold capitalize mb-5"
        onClick={(e) => handleTextClick(e.target)}
      >
        {text.customerHeader[0]}
      </h1>
      <p
        className="text-center text-xl"
        onClick={(e) => handleTextClick(e.target)}
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
          <p onClick={(e) => handleTextClick(e.target)}>Gabriel</p>
          <p onClick={(e) => handleTextClick(e.target)}>Founder QuickUI</p>
        </div>
      </div>
    </section>,
    <section className="my-32 text-black w-[90%] max-w-[1000px] mx-auto">
      <h1
        className="text-3xl font-semibold capitalize mb-1"
        onClick={(e) => handleTextClick(e.target)}
      >
        {text.customerHeader[0]}
      </h1>
      <p className="text-base" onClick={(e) => handleTextClick(e.target)}>
        {text.customerParagraphText[0]}
      </p>

      <div className="flex flex-wrap justify-evenly gap-8 mt-10 max-[600px]:gap-5 max-[600px]:flex-col">
        <div className="flex flex-col gap-1 w-[30%] max-[600px]:w-[90%]">
          <p onClick={(e) => handleTextClick(e.target)}>★★★★★</p>
          <h2
            className="text-base font-semibold"
            onClick={(e) => handleTextClick(e.target)}
          >
            The Most Amazing product ever
          </h2>
          <p
            className="text-sm md:min-h-[9rem]"
            onClick={(e) => handleTextClick(e.target)}
          >
            {text.customerReviewText[0]}
          </p>
          <p className="max-lg:mt-3" onClick={(e) => handleTextClick(e.target)}>
            Gabriel - Founder
          </p>
        </div>
        <div className="flex flex-col gap-1 w-[30%] max-[600px]:w-[90%]">
          <p onClick={(e) => handleTextClick(e.target)}>★★★★★</p>
          <h2
            className="text-base font-semibold"
            onClick={(e) => handleTextClick(e.target)}
          >
            The Most Amazing product ever
          </h2>
          <p
            className="text-sm md:min-h-[9rem]"
            onClick={(e) => handleTextClick(e.target)}
          >
            {text.customerReviewText[1]}
          </p>
          <p className="max-md:mt-3" onClick={(e) => handleTextClick(e.target)}>
            Gabriel - Founder
          </p>
        </div>
        <div className="flex flex-col gap-1 w-[30%] max-[600px]:w-[90%]">
          <p onClick={(e) => handleTextClick(e.target)}>★★★★★</p>
          <h2
            className="text-base font-semibold"
            onClick={(e) => handleTextClick(e.target)}
          >
            The Most Amazing product ever
          </h2>
          <p
            className="text-sm md:min-h-[9rem]"
            onClick={(e) => handleTextClick(e.target)}
          >
            {text.customerReviewText[2]}
          </p>
          <p className="max-lg:mt-3" onClick={(e) => handleTextClick(e.target)}>
            Gabriel - Founder
          </p>
        </div>
      </div>
    </section>,
    <section className="my-32 text-black w-[90%] max-w-[1000px] mx-auto">
      <h1
        className="text-3xl font-semibold capitalize mb-1 text-center"
        onClick={(e) => handleTextClick(e.target)}
      >
        {text.customerHeader[0]}
      </h1>
      <p
        className="text-base text-center"
        onClick={(e) => handleTextClick(e.target)}
      >
        {text.customerParagraphText[0]}
      </p>

      <div className="flex flex-wrap justify-evenly mt-10 max-[600px]:gap-5 max-[600px]:flex-col text-center">
        <div className="flex flex-col gap-1 w-[30%] max-[600px]:w-[90%]">
          <p onClick={(e) => handleTextClick(e.target)}>★★★★★</p>
          <h2
            className="text-base font-semibold"
            onClick={(e) => handleTextClick(e.target)}
          >
            The Most Amazing product ever
          </h2>
          <p
            className="text-sm md:min-h-[9rem]"
            onClick={(e) => handleTextClick(e.target)}
          >
            {text.customerReviewText[0]}
          </p>
          <p className="max-lg:mt-3" onClick={(e) => handleTextClick(e.target)}>
            Gabriel - Founder
          </p>
        </div>
        <div className="flex flex-col gap-1 w-[30%] max-[600px]:w-[90%]">
          <p onClick={(e) => handleTextClick(e.target)}>★★★★★</p>
          <h2
            className="text-base font-semibold"
            onClick={(e) => handleTextClick(e.target)}
          >
            The Most Amazing product ever
          </h2>
          <p
            className="text-sm md:min-h-[9rem]"
            onClick={(e) => handleTextClick(e.target)}
          >
            {text.customerReviewText[1]}
          </p>
          <p className="max-lg:mt-3" onClick={(e) => handleTextClick(e.target)}>
            Gabriel - Founder
          </p>
        </div>
        <div className="flex flex-col gap-1 w-[30%] max-[600px]:w-[90%]">
          <p onClick={(e) => handleTextClick(e.target)}>★★★★★</p>
          <h2
            className="text-base font-semibold"
            onClick={(e) => handleTextClick(e.target)}
          >
            The Most Amazing product ever
          </h2>
          <p
            className="text-sm md:min-h-[9rem]"
            onClick={(e) => handleTextClick(e.target)}
          >
            {text.customerReviewText[2]}
          </p>
          <p className="max-lg:mt-3" onClick={(e) => handleTextClick(e.target)}>
            Gabriel - Founder
          </p>
        </div>
      </div>
    </section>,
    <section className="my-32 text-black w-[90%] max-w-[1000px] mx-auto bg-white border-solid shadow-xl rounded-lg p-5">
      <h1
        className="text-3xl font-semibold capitalize mb-5"
        onClick={(e) => handleTextClick(e.target)}
      >
        {text.customerHeader[0]}
      </h1>
      <p className="text-xl" onClick={(e) => handleTextClick(e.target)}>
        {text.customerReviewText[0]}
      </p>

      <div className="my-8 flex items-center gap-3">
        <img
          src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
          alt=""
          className="block rounded-full w-[50px] h-[50px] object-cover"
        />
        <div className="text-sm font-semibold">
          <p onClick={(e) => handleTextClick(e.target)}>Gabriel</p>
          <p onClick={(e) => handleTextClick(e.target)}>Founder QuickUI</p>
        </div>
      </div>
    </section>,
    <section className="my-32 text-black w-[90%] max-w-[1000px] mx-auto bg-white border-solid shadow-xl rounded-lg p-5">
      <h1
        className="text-center text-3xl font-semibold capitalize mb-5"
        onClick={(e) => handleTextClick(e.target)}
      >
        {text.customerHeader[0]}
      </h1>
      <p
        className="text-center text-xl max-w-[800px] mx-auto"
        onClick={(e) => handleTextClick(e.target)}
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
          <p onClick={(e) => handleTextClick(e.target)}>Gabriel</p>
          <p onClick={(e) => handleTextClick(e.target)}>Founder QuickUI</p>
        </div>
      </div>
    </section>,
    <section className="my-32 text-black w-[90%] max-w-[1000px] mx-auto">
      <h1
        className="text-3xl font-semibold capitalize mb-5"
        onClick={(e) => handleTextClick(e.target)}
      >
        {text.customerHeader[0]}
      </h1>
      <p
        className="text-xl max-w-[800px]"
        onClick={(e) => handleTextClick(e.target)}
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
          <p onClick={(e) => handleTextClick(e.target)}>Gabriel</p>
          <p onClick={(e) => handleTextClick(e.target)}>Founder QuickUI</p>
        </div>
      </div>
    </section>,
    <section
      className={`${
        isMobile ? "max-w-[350px] flex-col items-start gap-5" : ""
      } my-32 text-black w-[90%] max-md:max-w-[350px] max-w-[1000px] mx-auto flex max-md:flex-col gap-10 items-center max-md:items-start max-md:gap-5`}
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
          className="text-3xl font-semibold capitalize mb-3"
          onClick={(e) => handleTextClick(e.target)}
        >
          {text.customerHeader[0]}
        </h1>
        <p
          className="text-xl max-w-[700px]"
          onClick={(e) => handleTextClick(e.target)}
        >
          {text.customerReviewText[0]}
        </p>
      </div>
    </section>,
    <section
      className={`${
        isMobile ? "max-w-[350px] flex-col items-start gap-5" : ""
      } my-32 text-black w-[90%] max-md:max-w-[350px] max-w-[1000px] mx-auto flex max-md:flex-col gap-10 items-center max-md:items-start max-md:gap-5 bg-white border-solid shadow-xl rounded-lg p-5`}
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
          className="text-3xl font-semibold capitalize mb-3"
          onClick={(e) => handleTextClick(e.target)}
        >
          {text.customerHeader[0]}
        </h1>
        <p
          className="text-xl max-w-[700px]"
          onClick={(e) => handleTextClick(e.target)}
        >
          {text.customerReviewText[0]}
        </p>
      </div>
    </section>,
  ];
};
