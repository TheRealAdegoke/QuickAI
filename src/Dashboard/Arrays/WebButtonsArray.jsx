export const WebButtonsArray = ({
  text,
  isMobile,
  handleTextClick,
  getElementStyle,
  index,
  isEdited,
  uniqueId,
  elementContent,
}) => {
  return [
    <div
      className={`${
        isMobile ? "justify-center" : ""
      } my-3 flex max-lg:justify-center gap-3`}
    >
      <button className="py-3 px-4 bg-[rgba(0,0,0,0.9)] text-white shadow-lg hover:bg-[rgba(0,0,0,0.7)] rounded-full font-semibold min-w-[120px]">
        <span
          id={`Hero-btn-text-1-${index + 1}-${uniqueId}`}
          style={getElementStyle(`Hero-btn-text-style-${index + 1}`, uniqueId)}
          className={`Hero-btn-text-style-${index + 1}-${uniqueId}`}
          data-text="Button text"
          contentEditable={false}
          onClick={handleTextClick}
        >
          {isEdited[`Hero-btn-text-1-${index + 1}-${uniqueId}`]
            ? elementContent[`Hero-btn-text-1-${index + 1}-${uniqueId}`]
            : elementContent[`Hero-btn-text-1-${index + 1}-${uniqueId}`] ||
              text.buttonTexts[0]}
        </span>
      </button>
      <button className="py-3 px-4 bg-[rgba(0,0,0,0.9)] text-white shadow-lg hover:bg-[rgba(0,0,0,0.7)] rounded-full font-semibold min-w-[120px]">
        <span
          id={`Hero-btn-text-2-${index + 1}-${uniqueId}`}
          style={getElementStyle(`Hero-btn-text-style-${index + 1}`, uniqueId)}
          className={`Hero-btn-text-style-${index + 1}-${uniqueId}`}
          data-text="Button text"
          contentEditable={false}
          onClick={handleTextClick}
        >
          {isEdited[`Hero-btn-text-2-${index + 1}-${uniqueId}`]
            ? elementContent[`Hero-btn-text-2-${index + 1}-${uniqueId}`]
            : elementContent[`Hero-btn-text-2-${index + 1}-${uniqueId}`] ||
              text.buttonTexts[1]}
        </span>
      </button>
    </div>,
    <div className="my-3 flex gap-3">
      <button className="py-3 px-4 bg-[rgb(63,87,255)] shadow-lg hover:bg-white hover:text-[rgb(63,87,255)] hover:border-[1px] hover:border-[rgb(63,87,255)] rounded-xl font-semibold min-w-[200px]">
        <span
          id={`Hero-btn-text-${index + 1}-${uniqueId}`}
          style={getElementStyle(`Hero-btn-text-style-${index + 1}`, uniqueId)}
          className={`Hero-btn-text-style-${index + 1}-${uniqueId}`}
          data-text="Button text"
          contentEditable={false}
          onClick={handleTextClick}
        >
          {isEdited[`Hero-btn-text-${index + 1}-${uniqueId}`]
            ? elementContent[`Hero-btn-text-${index + 1}-${uniqueId}`]
            : elementContent[`Hero-btn-text-${index + 1}-${uniqueId}`] ||
              text.buttonTexts[0]}
        </span>
      </button>
    </div>,
    <div className="my-3 flex gap-3">
      <button className="py-3 px-4 bg-white text-black shadow-lg border-[1px] rounded-xl font-semibold min-w-[200px]">
        <span
          id={`Hero-btn-text-${index + 1}-${uniqueId}`}
          style={getElementStyle(`Hero-btn-text-style-${index + 1}`, uniqueId)}
          className={`Hero-btn-text-style-${index + 1}-${uniqueId}`}
          data-text="Button text"
          contentEditable={false}
          onClick={handleTextClick}
        >
          {isEdited[`Hero-btn-text-${index + 1}-${uniqueId}`]
            ? elementContent[`Hero-btn-text-${index + 1}-${uniqueId}`]
            : elementContent[`Hero-btn-text-${index + 1}-${uniqueId}`] ||
              text.buttonTexts[0]}
        </span>
      </button>
    </div>,
    <div
      className={`${
        isMobile ? "justify-center" : ""
      } my-3 flex gap-3 flex-wrap max-lg:justify-center`}
    >
      <button className="py-3 px-4 bg-[rgb(172,180,75)] shadow-lg hover:bg-white hover:text-[rgb(172,180,75)] hover:border-[1px] hover:border-[rgb(172,180,75)] rounded-xl font-semibold min-w-[150px] max-w-[200px]">
        <span
          id={`Hero-btn-text-1-${index + 1}-${uniqueId}`}
          style={getElementStyle(`Hero-btn-text-style-${index + 1}`, uniqueId)}
          className={`Hero-btn-text-style-${index + 1}-${uniqueId}`}
          data-text="Button text"
          contentEditable={false}
          onClick={handleTextClick}
        >
          {isEdited[`Hero-btn-text-1-${index + 1}-${uniqueId}`]
            ? elementContent[`Hero-btn-text-1-${index + 1}-${uniqueId}`]
            : elementContent[`Hero-btn-text-1-${index + 1}-${uniqueId}`] ||
              text.buttonTexts[0]}
        </span>
      </button>
      <button className="py-3 px-4 border-[1px] text-[rgb(172,180,75)] border-[rgb(172,180,75)] shadow-lg hover:text-white hover:bg-[rgb(172,180,75)] rounded-xl font-semibold min-w-[150px] max-w-[200px]">
        <span
          id={`Hero-btn-text-2-${index + 1}-${uniqueId}`}
          style={getElementStyle(`Hero-btn-text-style-${index + 1}`, uniqueId)}
          className={`Hero-btn-text-style-${index + 1}-${uniqueId}`}
          data-text="Button text"
          contentEditable={false}
          onClick={handleTextClick}
        >
          {isEdited[`Hero-btn-text-2-${index + 1}-${uniqueId}`]
            ? elementContent[`Hero-btn-text-2-${index + 1}-${uniqueId}`]
            : elementContent[`Hero-btn-text-2-${index + 1}-${uniqueId}`] ||
              text.buttonTexts[1]}
        </span>
      </button>
    </div>,
    <div className="my-3 flex gap-3">
      <button className="py-3 px-4 bg-white border-[1px] text-black shadow-lg hover:bg-white hover:text-[rgb(63,87,255)] hover:border-[1px] hover:border-[rgb(63,87,255)] font-semibold min-w-[250px]">
        <span
          id={`Hero-btn-text-${index + 1}-${uniqueId}`}
          style={getElementStyle(`Hero-btn-text-style-${index + 1}`, uniqueId)}
          className={`Hero-btn-text-style-${index + 1}-${uniqueId}`}
          data-text="Button text"
          contentEditable={false}
          onClick={handleTextClick}
        >
          {isEdited[`Hero-btn-text-${index + 1}-${uniqueId}`]
            ? elementContent[`Hero-btn-text-${index + 1}-${uniqueId}`]
            : elementContent[`Hero-btn-text-${index + 1}-${uniqueId}`] ||
              text.buttonTexts[0]}
        </span>
      </button>
    </div>,
    <div
      className={`${
        isMobile ? "justify-center" : ""
      } flex flex-wrap gap-5 max-lg:justify-center mt-5`}
    >
      <button className="text-[#231e41] font-semibold bg-[#f5c332] px-7 py-2 flex items-center justify-center">
        <span
          id={`Hero-btn-text-1-${index + 1}-${uniqueId}`}
          style={getElementStyle(`Hero-btn-text-style-${index + 1}`, uniqueId)}
          className={`Hero-btn-text-style-${index + 1}-${uniqueId}`}
          data-text="Button text"
          contentEditable={false}
          onClick={handleTextClick}
        >
          {isEdited[`Hero-btn-text-1-${index + 1}-${uniqueId}`]
            ? elementContent[`Hero-btn-text-1-${index + 1}-${uniqueId}`]
            : elementContent[`Hero-btn-text-1-${index + 1}-${uniqueId}`] ||
              text.buttonTexts[0]}
        </span>
      </button>
      <button className="text-[#231e41] font-semibold bg-white px-7 py-2 flex items-center justify-center gap-3">
        <span className="bg-[#f8f9fa] rounded-full p-1">
          <img
            src="https://starbelly-react.vercel.app/img/ui/icons/arrow.svg"
            alt=""
            className="w-[20px]"
          />
        </span>
        <span
          id={`Hero-btn-text-1-${index + 1}-${uniqueId}`}
          style={getElementStyle(`Hero-btn-text-style-${index + 1}`, uniqueId)}
          className={`Hero-btn-text-style-${index + 1}-${uniqueId}`}
          data-text="Button text"
          contentEditable={false}
          onClick={handleTextClick}
        >
          {isEdited[`Hero-btn-text-1-${index + 1}-${uniqueId}`]
            ? elementContent[`Hero-btn-text-1-${index + 1}-${uniqueId}`]
            : elementContent[`Hero-btn-text-1-${index + 1}-${uniqueId}`] ||
              text.buttonTexts[1]}
        </span>
      </button>
    </div>,
  ];
};
