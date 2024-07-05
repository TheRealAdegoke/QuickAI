import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineWeb } from "react-icons/md";
import FAQImage0 from "../../../../assets/FAQImage/FAQImage0.webp";
import FAQImage1 from "../../../../assets/FAQImage/FAQImage1.webp";
import FAQImage2 from "../../../../assets/FAQImage/FAQImage2.webp";
import FAQImage3 from "../../../../assets/FAQImage/FAQImage3.webp";

const FAQEditComponent = ({
  setDisplayEditModal,
  setChangeSection,
  setChangeSectionIndex,
  setChangeSectionHeaderText,
  handleScroll,
  setIsPattern,
}) => {
  return (
    <>
      <div>
        <div className="bg-[rgb(42,42,47)] text-white px-3 py-2 rounded-[5px] flex justify-between items-center cursor-pointer">
          <button
            className="flex items-center gap-1 w-full"
            onClick={() => {
              setIsPattern(true) 
              setDisplayEditModal(true);
              setChangeSection(
                <FAQImages setChangeSectionIndex={setChangeSectionIndex} />
              );
              setChangeSectionHeaderText("FAQ");
              handleScroll(5);
            }}
          >
            <MdOutlineWeb className="text-blue-600" />
            <span className="text-[rgba(255,255,255,0.8)] font-medium">
              FAQ
            </span>
          </button>
          <div className="bg-[rgb(9,11,14)] p-1 rounded-[5px]">
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQEditComponent;

export const FAQImages = ({
  setChangeSectionIndex,
}) => {
  const images = [
    {
      index: 0,
      image: FAQImage0,
    },
    {
      index: 1,
      image: FAQImage1,
    },
    {
      index: 2,
      image: FAQImage2,
    },
    {
      index: 3,
      image: FAQImage3,
    },
  ];

  return (
    <>
      {images.map(
        (item, idx) =>
          item.index !== undefined && (
            <div
              key={idx}
              className="bg-[rgb(42,42,47)] p-3 rounded-[8px] w-[45%] cursor-pointer"
              onClick={() => {
                setChangeSectionIndex(item.index);
              }}
            >
              <img src={item.image} alt="" className="rounded-[8px] w-full" />
            </div>
          )
      )}
    </>
  );
};
