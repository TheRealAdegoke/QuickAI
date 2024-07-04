import React from "react";
import { BsThreeDotsVertical, BsTruckFlatbed } from "react-icons/bs";
import { MdOutlineWeb } from "react-icons/md";
import testImage from "../../../../assets/Default-Card.jpg";

const HeaderEditComponent = ({
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
                <HeaderImages
                  setChangeSectionIndex={setChangeSectionIndex}
                />
              );
              setChangeSectionHeaderText("Header")
            }}
          >
            <MdOutlineWeb className="text-blue-600" />
            <span className="text-[rgba(255,255,255,0.8)] font-medium">
              Header
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

export default HeaderEditComponent;

export const HeaderImages = ({ setChangeSectionIndex }) => {
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
  ];

  return (
    <>
      {images.map(
        (item, idx) =>
          item.index !== undefined && (
            <div
              key={idx}
              className="bg-[rgb(42,42,47)] p-3 rounded-[8px] w-[45%] max-h-[100px] cursor-pointer"
              onClick={() => {
                setChangeSectionIndex(item.index);
              }}
            >
              <img src={item.image} alt="" className="rounded-[8px] w-full h-[full]" />
            </div>
          )
      )}
    </>
  );
};
