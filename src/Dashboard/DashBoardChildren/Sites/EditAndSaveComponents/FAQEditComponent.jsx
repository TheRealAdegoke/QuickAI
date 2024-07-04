import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineWeb } from "react-icons/md";
import testImage from "../../../../assets/Default-Card.jpg";

const FAQEditComponent = ({
  setDisplayEditModal,
  setChangeSection,
  setChangeSectionIndex,
  setChangeSectionHeaderText,
}) => {
  return (
    <>
      <div>
        <div className="bg-[rgb(42,42,47)] text-white px-3 py-2 rounded-[5px] flex justify-between items-center cursor-pointer">
          <button
            className="flex items-center gap-1 w-full"
            onClick={() => {
              setDisplayEditModal(true);
              setChangeSection(
                <FAQImages
                  setChangeSectionIndex={setChangeSectionIndex}
                />
              );
              setChangeSectionHeaderText("FAQ")
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
      image: testImage,
    },
    {
      index: 1,
      image: testImage,
    },
    {
      index: 2,
      image: testImage,
    },
    {
      index: 3,
      image: testImage,
    },
    {
      index: 4,
      image: testImage,
    },
    {
      index: 5,
      image: testImage,
    },
    {
      index: 6,
      image: testImage,
    },
    {
      index: 7,
      image: testImage,
    },
    {
      index: 8,
      image: testImage,
    },
    {
      index: 9,
      image: testImage,
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
