export const featuresComponents = ({ text }) => {
  return [
    <section className="text-black my-40 max-w-[1000px] mx-auto">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold my-2 text-center">
          {text.featureHeader[1]}
        </h1>
        <p className="">Lorem ipsum, dolor sit amet consectetur</p>
      </div>

      <div className="my-10 flex flex-wrap max-sm:flex-col gap-8">
        <div className="flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path>
          </svg>
          <h2 className="font-semibold">Item 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="capitalize block text-black bg-white px-5 py-1 rounded-full font-semibold text-sm my-3">
            {text.buttonTexts[5]}
          </button>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path>
          </svg>
          <h2 className="font-semibold">Item 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="capitalize block text-black bg-white px-5 py-1 rounded-full font-semibold text-sm my-3">
            {text.buttonTexts[5]}
          </button>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"></path>
          </svg>
          <h2 className="font-semibold">Item 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="capitalize block text-black bg-white px-5 py-1 rounded-full font-semibold text-sm my-3">
            {text.buttonTexts[5]}
          </button>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
          </svg>
          <h2 className="font-semibold">Item 4</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="capitalize block text-black bg-white px-5 py-1 rounded-full font-semibold text-sm my-3">
            {text.buttonTexts[5]}
          </button>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
          </svg>
          <h2 className="font-semibold">Item 5</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="capitalize block text-black bg-white px-5 py-1 rounded-full font-semibold text-sm my-3">
            {text.buttonTexts[5]}
          </button>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"></path>
          </svg>
          <h2 className="font-semibold">Item 6</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="capitalize block text-black bg-white px-5 py-1 rounded-full font-semibold text-sm my-3">
            {text.buttonTexts[5]}
          </button>
        </div>
      </div>
    </section>,
    <section className="text-black my-40 max-w-[1000px] mx-auto">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold my-2 text-center">
          {text.featureHeader[1]}
        </h1>
        <p className="">Lorem ipsum, dolor sit amet consectetur</p>
      </div>

      <div className="my-10 flex flex-wrap max-sm:flex-col gap-8">
        <div className="flex flex-col gap-2 justify-center items-center text-center bg-white border-solid shadow-2xl text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path>
          </svg>
          <h2 className="font-semibold">Item 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="capitalize block text-white bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] px-5 py-1 rounded-full font-semibold text-sm my-3">
            {text.buttonTexts[5]}
          </button>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-white border-solid shadow-2xl text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path>
          </svg>
          <h2 className="font-semibold">Item 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="capitalize block text-white bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] px-5 py-1 rounded-full font-semibold text-sm my-3">
            {text.buttonTexts[5]}
          </button>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-white border-solid shadow-2xl text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"></path>
          </svg>
          <h2 className="font-semibold">Item 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="capitalize block text-white bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] px-5 py-1 rounded-full font-semibold text-sm my-3">
            {text.buttonTexts[5]}
          </button>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-white border-solid shadow-2xl text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
          </svg>
          <h2 className="font-semibold">Item 4</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="capitalize block text-white bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] px-5 py-1 rounded-full font-semibold text-sm my-3">
            {text.buttonTexts[5]}
          </button>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-white border-solid shadow-2xl text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
          </svg>
          <h2 className="font-semibold">Item 5</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="capitalize block text-white bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] px-5 py-1 rounded-full font-semibold text-sm my-3">
            {text.buttonTexts[5]}
          </button>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-white border-solid shadow-2xl text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"></path>
          </svg>
          <h2 className="font-semibold">Item 6</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="capitalize block text-white bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] px-5 py-1 rounded-full font-semibold text-sm my-3">
            {text.buttonTexts[5]}
          </button>
        </div>
      </div>
    </section>,
    <section className="text-black my-40 max-w-[1000px] mx-auto">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold my-2 text-center">
          {text.featureHeader[1]}
        </h1>
        <p className="">Lorem ipsum, dolor sit amet consectetur</p>
      </div>

      <div className="my-10 flex flex-wrap max-sm:flex-col gap-8">
        <div className="flex flex-col gap-2 justify-center items-center text-center text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path>
          </svg>
          <h2 className="font-semibold">Item 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="capitalize block text-white bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] px-5 py-1 rounded-full font-semibold text-sm my-3">
            {text.buttonTexts[5]}
          </button>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path>
          </svg>
          <h2 className="font-semibold">Item 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="capitalize block text-white bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] px-5 py-1 rounded-full font-semibold text-sm my-3">
            {text.buttonTexts[5]}
          </button>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"></path>
          </svg>
          <h2 className="font-semibold">Item 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="capitalize block text-white bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] px-5 py-1 rounded-full font-semibold text-sm my-3">
            {text.buttonTexts[5]}
          </button>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
          </svg>
          <h2 className="font-semibold">Item 4</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="capitalize block text-white bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] px-5 py-1 rounded-full font-semibold text-sm my-3">
            {text.buttonTexts[5]}
          </button>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
          </svg>
          <h2 className="font-semibold">Item 5</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="capitalize block text-white bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] px-5 py-1 rounded-full font-semibold text-sm my-3">
            {text.buttonTexts[5]}
          </button>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"></path>
          </svg>
          <h2 className="font-semibold">Item 6</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="capitalize block text-white bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] px-5 py-1 rounded-full font-semibold text-sm my-3">
            {text.buttonTexts[5]}
          </button>
        </div>
      </div>
    </section>,
    <section className="text-black my-40 max-w-[1000px] mx-auto">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold my-2 text-center">
          {text.featureHeader[1]}
        </h1>
        <p className="">Lorem ipsum, dolor sit amet consectetur</p>
      </div>

      <div className="my-10 flex flex-wrap max-sm:flex-col gap-8">
        <div className="flex flex-col gap-2 justify-center items-center text-center text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path>
          </svg>
          <h2 className="font-semibold">Item 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path>
          </svg>
          <h2 className="font-semibold">Item 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"></path>
          </svg>
          <h2 className="font-semibold">Item 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
          </svg>
          <h2 className="font-semibold">Item 4</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
          </svg>
          <h2 className="font-semibold">Item 5</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"></path>
          </svg>
          <h2 className="font-semibold">Item 6</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
    </section>,
    <section className="text-black my-40 max-w-[1000px] mx-auto">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold my-2 text-center">
          {text.featureHeader[1]}
        </h1>
        <p className="">Lorem ipsum, dolor sit amet consectetur</p>
      </div>

      <div className="my-10 flex flex-wrap max-sm:flex-col gap-8">
        <div className="flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path>
          </svg>
          <h2 className="font-semibold">Item 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path>
          </svg>
          <h2 className="font-semibold">Item 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"></path>
          </svg>
          <h2 className="font-semibold">Item 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
          </svg>
          <h2 className="font-semibold">Item 4</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
          </svg>
          <h2 className="font-semibold">Item 5</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"></path>
          </svg>
          <h2 className="font-semibold">Item 6</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
    </section>,
    <section className="text-black my-40 max-w-[1000px] mx-auto">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold my-2 text-center">
          {text.featureHeader[1]}
        </h1>
        <p className="">Lorem ipsum, dolor sit amet consectetur</p>
      </div>

      <div className="my-10 flex flex-wrap max-sm:flex-col gap-8">
        <div className="flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path>
          </svg>
          <h2 className="font-semibold">Item 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="capitalize block text-black bg-white px-5 py-1 rounded-full font-semibold text-sm my-3">
            {text.buttonTexts[5]}
          </button>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path>
          </svg>
          <h2 className="font-semibold">Item 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="capitalize block text-black bg-white px-5 py-1 rounded-full font-semibold text-sm my-3">
            {text.buttonTexts[5]}
          </button>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"></path>
          </svg>
          <h2 className="font-semibold">Item 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="capitalize block text-black bg-white px-5 py-1 rounded-full font-semibold text-sm my-3">
            {text.buttonTexts[5]}
          </button>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
          </svg>
          <h2 className="font-semibold">Item 4</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
          </svg>
          <h2 className="font-semibold">Item 5</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-[rgba(200,200,200)] p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"></path>
          </svg>
          <h2 className="font-semibold">Item 6</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
    </section>,
    <section className="text-black my-40 max-w-[1000px] mx-auto">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold my-2 text-center">
          {text.featureHeader[1]}
        </h1>
        <p className="">Lorem ipsum, dolor sit amet consectetur</p>
      </div>

      <div className="my-10 flex flex-wrap max-sm:flex-col gap-8">
        <div className="flex flex-col gap-2 justify-center items-center text-center bg-white border-solid shadow-2xl text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path>
          </svg>
          <h2 className="font-semibold">Item 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="capitalize block text-white bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] px-5 py-1 rounded-full font-semibold text-sm my-3">
            {text.buttonTexts[5]}
          </button>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-white border-solid shadow-2xl text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path>
          </svg>
          <h2 className="font-semibold">Item 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="capitalize block text-white bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] px-5 py-1 rounded-full font-semibold text-sm my-3">
            {text.buttonTexts[5]}
          </button>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-white border-solid shadow-2xl text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"></path>
          </svg>
          <h2 className="font-semibold">Item 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="capitalize block text-white bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] px-5 py-1 rounded-full font-semibold text-sm my-3">
            {text.buttonTexts[5]}
          </button>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-white border-solid shadow-2xl text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
          </svg>
          <h2 className="font-semibold">Item 4</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-white border-solid shadow-2xl text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
          </svg>
          <h2 className="font-semibold">Item 5</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-white border-solid shadow-2xl text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"></path>
          </svg>
          <h2 className="font-semibold">Item 6</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
    </section>,
    <section className="text-black my-40 max-w-[1000px] mx-auto">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold my-2 text-center">
          {text.featureHeader[1]}
        </h1>
        <p className="">Lorem ipsum, dolor sit amet consectetur</p>
      </div>

      <div className="my-10 flex flex-wrap max-sm:flex-col gap-8">
        <div className="flex flex-col gap-2 justify-center items-center text-center bg-white border-solid shadow-2xl text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path>
          </svg>
          <h2 className="font-semibold">Item 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-white border-solid shadow-2xl text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path>
          </svg>
          <h2 className="font-semibold">Item 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-white border-solid shadow-2xl text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"></path>
          </svg>
          <h2 className="font-semibold">Item 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-white border-solid shadow-2xl text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
          </svg>
          <h2 className="font-semibold">Item 4</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-white border-solid shadow-2xl text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
          </svg>
          <h2 className="font-semibold">Item 5</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center bg-white border-solid shadow-2xl text-black p-6 w-[30%] max-w-[300px] max-md:w-[90%] max-lg:w-[45%] mx-auto rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"></path>
          </svg>
          <h2 className="font-semibold">Item 6</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
    </section>,
    <section className="text-black my-40 max-w-[1000px] mx-auto flex max-lg:flex-col gap-5 max-lg:gap-0 items-start max-lg:px-6">
      <div className="flex flex-col justify-start items-start mt-8 w-[35%] max-w-[280px] max-lg:w-[90%]">
        <h1 className="text-3xl font-bold my-2 text-center capitalize lg:text-2xl">
          {text.featureHeader[1]}
        </h1>
        <p className="max-w-[200px]">Lorem ipsum, dolor sit amet consectetur</p>
        <button className="capitalize block text-white bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] px-5 py-1 rounded-full font-semibold text-sm my-3">
          {text.buttonTexts[5]}
        </button>
      </div>

      <div className="my-10 flex justify-between flex-wrap max-[594px]:flex-col gap-8 w-full max-[594px]:w-full">
        <div className="flex flex-col gap-2 justify-start items-start text-left text-black w-[30%] max-w-[300px] max-[594px]:w-full max-lg:w-[45%] rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path>
          </svg>
          <h2 className="font-semibold">Item 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-start items-start text-left w-[30%] max-w-[300px] max-[594px]:w-full max-lg:w-[45%] rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path>
          </svg>
          <h2 className="font-semibold">Item 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-start items-start text-left w-[30%] max-w-[300px] max-[594px]:w-full max-lg:w-[45%] rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"></path>
          </svg>
          <h2 className="font-semibold">Item 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-start items-start text-left w-[30%] max-w-[300px] max-[594px]:w-full max-lg:w-[45%] rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
          </svg>
          <h2 className="font-semibold">Item 4</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-start items-start text-left w-[30%] max-w-[300px] max-[594px]:w-full max-lg:w-[45%] rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
          </svg>
          <h2 className="font-semibold">Item 5</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-start items-start text-left w-[30%] max-w-[300px] max-[594px]:w-full max-lg:w-[45%] rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="um-icon _92496331"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"></path>
          </svg>
          <h2 className="font-semibold">Item 6</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
    </section>,
  ];
};
