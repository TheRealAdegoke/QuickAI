import { FaBars } from "react-icons/fa6";

export const navComponents = ({ text, isMobile, handleTextClick }) => {
  return [
    <nav className={`bg-white w-full shadow-xl relative z-40`}>
      <div className={`flex justify-between items-center px-5`}>
        <div className={`w-1/5 max-md:w-[30%] flex items-center gap-1 py-3`}>
          <img
            src="https://res.cloudinary.com/dpyp7innp/image/upload/v1715591674/ad53c5d6-b066-455b-a840-7c1c3538e430.png"
            alt="Web logo"
            className="w-[40px]"
          />
          <h1
            className="font-semibold text-black"
            onClick={(e) => handleTextClick(e.target)}
          >
            {text.webLogo}
          </h1>
        </div>

        <label
          htmlFor="id-show-menu"
          className={`${isMobile ? "lg:block" : "lg:hidden"} show-menu`}
        >
          <div className="text-2xl text-black cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 50 50"
            >
              <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
            </svg>
          </div>
        </label>
        <input
          type="checkbox"
          id="id-show-menu"
          className="appearance-none hidden peer"
          role="button"
        />

        <div
          className={`${
            isMobile
              ? "absolute left-0 top-14 w-full h-[400px] px-0"
              : "lg:opacity-100 lg:visible"
          } menu-block max-lg:absolute max-lg:left-0 top-14 max-lg:w-full max-lg:h-[400px] bg-white max-lg:px-0 opacity-0 align-middle invisible transition-all duration-75 peer-checked:visible peer-checked:opacity-100 `}
        >
          <ul
            className={`${
              isMobile ? "flex-col" : "lg:gap-5"
            } flex max-lg:flex-col w-full text-[rgba(0,0,0,0.8)] text-lg text-center font-semibold`}
          >
            <li
              className={`${
                isMobile ? "border-t-[1px]" : ""
              } max-lg:border-t-[1px] py-5 cursor-pointer hover:underline flex justify-center items-center`}
              onClick={(e) => handleTextClick(e.target)}
            >
              <a href="#">Home</a>
            </li>
            <li
              className={`${
                isMobile ? "border-t-[1px]" : ""
              } max-lg:border-t-[1px] py-5 cursor-pointer hover:underline flex justify-center items-center`}
              onClick={(e) => handleTextClick(e.target)}
            >
              <a href="#">{text.buttonTexts[4]}</a>
            </li>
            <li
              className={`${
                isMobile ? "border-t-[1px]" : ""
              } max-lg:border-t-[1px] py-5 cursor-pointer hover:underline flex justify-center items-center`}
              onClick={(e) => handleTextClick(e.target)}
            >
              <a href="#">{text.buttonTexts[5]}</a>
            </li>
            <li
              className={`${
                isMobile ? "border-t-[1px]" : ""
              } max-lg:border-t-[1px] py-5 cursor-pointer hover:underline flex justify-center items-center`}
              onClick={(e) => handleTextClick(e.target)}
            >
              <a href="#">{text.buttonTexts[6]}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>,

    <nav className={`bg-white w-full shadow-xl relative z-40`}>
      <div className={`flex justify-between items-center px-5`}>
        <div className="flex items-center gap-1 py-3">
          <img
            src="https://res.cloudinary.com/dpyp7innp/image/upload/v1715591674/ad53c5d6-b066-455b-a840-7c1c3538e430.png"
            alt="Web logo"
            className="w-[40px]"
          />
          <h1
            className="font-semibold text-black"
            onClick={(e) => handleTextClick(e.target)}
          >
            {text.webLogo}
          </h1>
        </div>

        <label
          htmlFor="id-show-menu"
          className={`${isMobile ? "lg:block" : "lg:hidden"} show-menu`}
        >
          <div className="text-2xl text-black cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 50 50"
            >
              <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
            </svg>
          </div>
        </label>
        <input
          type="checkbox"
          id="id-show-menu"
          className="appearance-none hidden peer"
          role="button"
        />

        <div
          className={`${
            isMobile
              ? "flex flex-col items-center absolute left-0 top-14 w-full h-[89vh] pt-10"
              : "lg:opacity-100 lg:visible justify-between"
          } text-black bg-white font-medium flex max-lg:flex-col items-center gap-4 w-[60%] max-lg:absolute max-lg:left-0 top-14 max-lg:w-full max-lg:h-[89vh] max-lg:block opacity-0 align-middle invisible transition-all duration-75 peer-checked:visible peer-checked:opacity-100 `}
        >
          <ul
            className={`${
              isMobile ? "flex flex-col items-center gap-0" : ""
            } flex max-lg:flex-col max-lg:items-center max-lg:gap-0 gap-4`}
          >
            <li
              className="hover:text-[rgba(255,0,0)] max-lg:mt-8"
              onClick={(e) => handleTextClick(e.target)}
            >
              <a href="#">{text.buttonTexts[4]}</a>
            </li>
            <li
              className="hover:text-[rgba(255,0,0)] max-lg:my-3"
              onClick={(e) => handleTextClick(e.target)}
            >
              <a href="#">{text.buttonTexts[5]}</a>
            </li>
            <li
              className="hover:text-[rgba(255,0,0)] max-lg:my-3"
              onClick={(e) => handleTextClick(e.target)}
            >
              <a href="#">{text.buttonTexts[6]}</a>
            </li>
          </ul>

          <ul
            className={`${
              isMobile ? "flex flex-col items-center gap-0" : ""
            } flex max-lg:flex-col max-lg:items-center max-lg:gap-0 gap-4 lg:items-center`}
          >
            <li
              className="hover:text-[rgba(255,0,0)] max-lg:my-3"
              onClick={(e) => handleTextClick(e.target)}
            >
              <a href="#">Login</a>
            </li>
            <li className="bg-[rgba(0,0,0,0.1)] py-2 px-5 max-lg:px-10 rounded hover:text-[rgba(255,0,0)] max-lg:my-3" onClick={(e) => handleTextClick(e.target)}>
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>,

    <nav
      className={`bg-white w-[90%] border-[1px] max-w-[800px] my-[20px] rounded-xl mx-auto shadow-xl relative left-0 z-40`}
    >
      <div className={`flex justify-between items-center px-5`}>
        <div className="w-[20%] flex items-center gap-1 py-3">
          <img
            src="https://res.cloudinary.com/dpyp7innp/image/upload/v1715591674/ad53c5d6-b066-455b-a840-7c1c3538e430.png"
            alt="Web logo"
            className="w-[40px]"
          />
          <h1
            className="font-semibold text-black"
            onClick={(e) => handleTextClick(e.target)}
          >
            {text.webLogo}
          </h1>
        </div>

        <label
          htmlFor="id-show-menu"
          className={`${isMobile ? "lg:block" : "lg:hidden"} show-menu`}
        >
          <div className="text-2xl text-black cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 50 50"
            >
              <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
            </svg>
          </div>
        </label>
        <input
          type="checkbox"
          id="id-show-menu"
          className="appearance-none hidden peer"
          role="button"
        />

        <div
          className={`${
            isMobile
              ? "flex flex-col absolute left-0 w-[250px] h-[300px] rounded-xl shadow-xl pt-10"
              : "lg:opacity-100 lg:visible justify-between w-[75%] "
          } text-black bg-white font-medium flex max-lg:flex-col items-center gap-4 max-lg:absolute max-lg:left-0 top-20 max-lg:w-[250px] max-lg:h-[300px] max-lg:block max-lg:rounded-xl max-lg:shadow-xl opacity-0 align-middle invisible transition-all duration-75 peer-checked:visible peer-checked:opacity-100`}
        >
          <ul
            className={`${
              isMobile ? "flex flex-col gap-0" : ""
            } flex max-lg:flex-col max-lg:items-center max-lg:gap-0 gap-4 text-center`}
          >
            <li
              className="hover:text-[rgba(255,0,0)] max-lg:mt-8"
              onClick={(e) => handleTextClick(e.target)}
            >
              <a href="#">{text.buttonTexts[4]}</a>
            </li>
            <li
              className="hover:text-[rgba(255,0,0)] max-lg:my-3"
              onClick={(e) => handleTextClick(e.target)}
            >
              <a href="#">{text.buttonTexts[5]}</a>
            </li>
            <li
              className="hover:text-[rgba(255,0,0)] max-lg:my-3"
              onClick={(e) => handleTextClick(e.target)}
            >
              <a href="#">{text.buttonTexts[6]}</a>
            </li>
          </ul>

          <ul
            className={`${
              isMobile ? "flex flex-col gap-0" : ""
            } flex max-lg:flex-col max-lg:items-center max-lg:gap-0 gap-4 lg:items-center`}
          >
            <li
              className="hover:text-[rgba(255,0,0)] max-lg:my-3"
              onClick={(e) => handleTextClick(e.target)}
            >
              <a href="#">Login</a>
            </li>
            <li
              className="bg-[rgba(0,0,0,0.1)] py-2 px-5 max-lg:px-10 rounded hover:text-[rgba(255,0,0)] max-lg:my-3"
              onClick={(e) => handleTextClick(e.target)}
            >
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>,
  ];
};
