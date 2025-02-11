import { Link } from "react-router-dom";

const NavComponentOne = ({
  text,
  isMobile,
  handleTextClick,
  handleDivClick,
  getStyle,
  getElementStyle,
  index,
  isEdited,
  uniqueId,
  elementContent,
  handleImageClick,
}) => {
  return (
    <>
      <nav
        onClick={handleDivClick}
        id={`header-section-${index + 1}-${uniqueId}`}
        style={getStyle(`header-section-${index + 1}`, uniqueId)}
        className={`w-full shadow-xl relative z-40`}
      >
        <div className={`flex justify-between items-center px-5`}>
          <div className={`w-1/5 max-md:w-[30%] flex items-center gap-1 py-3`}>
            <img
              id={`header-image-${index + 1}-${uniqueId}`}
              src={
                elementContent[`header-image-${index + 1}-${uniqueId}`] ||
                "https://res.cloudinary.com/dpyp7innp/image/upload/v1715591674/ad53c5d6-b066-455b-a840-7c1c3538e430.png"
              }
              alt="Web logo"
              className="w-[40px]"
              onClick={() =>
                handleImageClick(
                  elementContent[`header-image-${index + 1}-${uniqueId}`] ||
                    "https://res.cloudinary.com/dpyp7innp/image/upload/v1715591674/ad53c5d6-b066-455b-a840-7c1c3538e430.png",
                  `header-image-${index + 1}-${uniqueId}`
                )
              }
            />
            <Link
              id={`nav-name-${index + 1}-${uniqueId}`}
              className={`nav-name-${
                index + 1
              }-${uniqueId} font-semibold text-black`}
              style={getElementStyle(`nav-name-${index + 1}`, uniqueId)}
              data-text="Heading"
              contentEditable={false}
              onClick={handleTextClick}
            >
              {isEdited[`nav-name-${index + 1}-${uniqueId}`]
                ? elementContent[`nav-name-${index + 1}-${uniqueId}`]
                : elementContent[`nav-name-${index + 1}-${uniqueId}`] ||
                  text.webLogo}
            </Link>
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
            } menu-block max-lg:absolute max-lg:left-0 top-14 max-lg:w-full max-lg:h-[400px]  max-lg:px-0 opacity-0 align-middle invisible transition-all duration-75 peer-checked:visible peer-checked:opacity-100 `}
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
              >
                <span
                  id={`list-link-text-1-${index + 1}-${uniqueId}`}
                  className={`list-link-text-${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `list-link-text-${index + 1}`,
                    uniqueId
                  )}
                  data-text="Link text"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[`list-link-text-1-${index + 1}-${uniqueId}`]
                    ? elementContent[
                        `list-link-text-1-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `list-link-text-1-${index + 1}-${uniqueId}`
                      ] || text.buttonTexts[3]}
                </span>
              </li>
              <li
                className={`${
                  isMobile ? "border-t-[1px]" : ""
                } max-lg:border-t-[1px] py-5 cursor-pointer hover:underline flex justify-center items-center`}
                onClick={handleTextClick}
              >
                <span
                  id={`list-link-text-2-${index + 1}-${uniqueId}`}
                  className={`list-link-text-${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `list-link-text-${index + 1}`,
                    uniqueId
                  )}
                  data-text="Link text"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[`list-link-text-2-${index + 1}-${uniqueId}`]
                    ? elementContent[
                        `list-link-text-2-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `list-link-text-2-${index + 1}-${uniqueId}`
                      ] || text.buttonTexts[4]}
                </span>
              </li>
              <li
                className={`${
                  isMobile ? "border-t-[1px]" : ""
                } max-lg:border-t-[1px] py-5 cursor-pointer hover:underline flex justify-center items-center`}
                onClick={handleTextClick}
              >
                <span
                  id={`list-link-text-3-${index + 1}-${uniqueId}`}
                  className={`list-link-text-${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `list-link-text-${index + 1}`,
                    uniqueId
                  )}
                  data-text="Link text"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[`list-link-text-3-${index + 1}-${uniqueId}`]
                    ? elementContent[
                        `list-link-text-3-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `list-link-text-3-${index + 1}-${uniqueId}`
                      ] || text.buttonTexts[5]}
                </span>
              </li>
              <li
                className={`${
                  isMobile ? "border-t-[1px]" : ""
                } max-lg:border-t-[1px] py-5 cursor-pointer hover:underline flex justify-center items-center`}
                onClick={handleTextClick}
              >
                <span
                  id={`list-link-text-4-${index + 1}-${uniqueId}`}
                  className={`list-link-text-${index + 1}-${uniqueId}`}
                  style={getElementStyle(
                    `list-link-text-${index + 1}`,
                    uniqueId
                  )}
                  data-text="Link text"
                  contentEditable={false}
                  onClick={handleTextClick}
                >
                  {isEdited[`list-link-text-4-${index + 1}-${uniqueId}`]
                    ? elementContent[
                        `list-link-text-4-${index + 1}-${uniqueId}`
                      ]
                    : elementContent[
                        `list-link-text-4-${index + 1}-${uniqueId}`
                      ] || text.buttonTexts[6]}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavComponentOne;
