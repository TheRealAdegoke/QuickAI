import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineWeb } from "react-icons/md";
import TestimonialImage0 from "../../../../assets/TestimonialImage/TestimonialImage0.webp";
import TestimonialImage1 from "../../../../assets/TestimonialImage/TestimonialImage1.webp";
import TestimonialImage2 from "../../../../assets/TestimonialImage/TestimonialImage2.webp";
import TestimonialImage3 from "../../../../assets/TestimonialImage/TestimonialImage3.webp";
import TestimonialImage4 from "../../../../assets/TestimonialImage/TestimonialImage4.webp";
import TestimonialImage5 from "../../../../assets/TestimonialImage/TestimonialImage5.webp";
import TestimonialImage6 from "../../../../assets/TestimonialImage/TestimonialImage6.webp";
import TestimonialImage7 from "../../../../assets/TestimonialImage/TestimonialImage7.webp";

const TestimonialEditComponent = ({
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
              setIsPattern(true);
              setDisplayEditModal(true);
              setChangeSection(
                <TestimonialImages
                  setChangeSectionIndex={setChangeSectionIndex}
                />
              );
              setChangeSectionHeaderText("Testimonial");
              handleScroll(4);
            }}
          >
            <MdOutlineWeb className="text-blue-600" />
            <span className="text-[rgba(255,255,255,0.8)] font-medium">
              Testimonial
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

export default TestimonialEditComponent;

export const TestimonialImages = ({
  setChangeSectionIndex,
}) => {
  const images = [
    {
      index: 0,
      image: TestimonialImage0,
    },
    {
      index: 1,
      image: TestimonialImage1,
    },
    {
      index: 2,
      image: TestimonialImage2,
    },
    {
      index: 3,
      image: TestimonialImage3,
    },
    {
      index: 4,
      image: TestimonialImage4,
    },
    {
      index: 5,
      image: TestimonialImage5,
    },
    {
      index: 6,
      image: TestimonialImage6,
    },
    {
      index: 7,
      image: TestimonialImage7,
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
