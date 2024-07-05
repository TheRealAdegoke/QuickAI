import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineWeb } from "react-icons/md";
import ClassicFeatureImage0 from "../../../../assets/ClassicFeatureImage/ClassicFeatureImage0.webp";
import ClassicFeatureImage1 from "../../../../assets/ClassicFeatureImage/ClassicFeatureImage1.webp";
import ClassicFeatureImage2 from "../../../../assets/ClassicFeatureImage/ClassicFeatureImage2.webp";
import ClassicFeatureImage3 from "../../../../assets/ClassicFeatureImage/ClassicFeatureImage3.webp";
import ClassicFeatureImage4 from "../../../../assets/ClassicFeatureImage/ClassicFeatureImage4.webp";
import ClassicFeatureImage5 from "../../../../assets/ClassicFeatureImage/ClassicFeatureImage5.webp";
import ClassicFeatureImage6 from "../../../../assets/ClassicFeatureImage/ClassicFeatureImage6.webp";
import ClassicFeatureImage7 from "../../../../assets/ClassicFeatureImage/ClassicFeatureImage7.webp";
import ClassicFeatureImage8 from "../../../../assets/ClassicFeatureImage/ClassicFeatureImage8.webp";

const ClassicalFeatureEditComponent = ({
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
                <ClassicalFeaturesImages
                  setChangeSectionIndex={setChangeSectionIndex}
                />
              );
              setChangeSectionHeaderText("Classic Feature");
              handleScroll(3);
            }}
          >
            <MdOutlineWeb className="text-blue-600" />
            <span className="text-[rgba(255,255,255,0.8)] font-medium">
              Classic feature
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

export default ClassicalFeatureEditComponent;


export const ClassicalFeaturesImages = ({
  setChangeSectionIndex,
}) => {
  const images = [
    {
      index: 0,
      image: ClassicFeatureImage0,
    },
    {
      index: 1,
      image: ClassicFeatureImage1,
    },
    {
      index: 2,
      image: ClassicFeatureImage2,
    },
    {
      index: 3,
      image: ClassicFeatureImage3,
    },
    {
      index: 4,
      image: ClassicFeatureImage4,
    },
    {
      index: 5,
      image: ClassicFeatureImage5,
    },
    {
      index: 6,
      image: ClassicFeatureImage6,
    },
    {
      index: 7,
      image: ClassicFeatureImage7,
    },
    {
      index: 8,
      image: ClassicFeatureImage8,
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

