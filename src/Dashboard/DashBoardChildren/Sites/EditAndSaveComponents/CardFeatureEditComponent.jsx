import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineWeb } from "react-icons/md";
import CardFeatureImage0 from "../../../../assets/CardFeatureImage/CardFeatureImage0.webp";
import CardFeatureImage1 from "../../../../assets/CardFeatureImage/CardFeatureImage1.webp";
import CardFeatureImage2 from "../../../../assets/CardFeatureImage/CardFeatureImage2.webp";
import CardFeatureImage3 from "../../../../assets/CardFeatureImage/CardFeatureImage3.webp";
import CardFeatureImage4 from "../../../../assets/CardFeatureImage/CardFeatureImage4.webp";

const CardFeatureEditComponent = ({
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
                <CardFeaturesImages
                  setChangeSectionIndex={setChangeSectionIndex}
                />
              );
              setChangeSectionHeaderText("Card feature");
              handleScroll(2);
            }}
          >
            <MdOutlineWeb className="text-blue-600" />
            <span className="text-[rgba(255,255,255,0.8)] font-medium">
              Card feature
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

export default CardFeatureEditComponent;


export const CardFeaturesImages = ({ setChangeSectionIndex }) => {
  const images = [
    {
      index: 0,
      image: CardFeatureImage0,
    },
    {
      index: 1,
      image: CardFeatureImage1,
    },
    {
      index: 2,
      image: CardFeatureImage2,
    },
    {
      index: 3,
      image: CardFeatureImage3,
    },
    {
      index: 4,
      image: CardFeatureImage4,
    }
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
