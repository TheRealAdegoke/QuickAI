import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineWeb } from "react-icons/md";
import TeamImage0 from "../../../../assets/TeamImage/TeamImage0.webp";
import TeamImage1 from "../../../../assets/TeamImage/TeamImage1.webp";
import TeamImage2 from "../../../../assets/TeamImage/TeamImage2.webp";
import TeamImage3 from "../../../../assets/TeamImage/TeamImage3.webp";
import TeamImage4 from "../../../../assets/TeamImage/TeamImage4.webp";
import TeamImage5 from "../../../../assets/TeamImage/TeamImage5.webp";

const TeamEditComponent = ({
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
                <TeamImages setChangeSectionIndex={setChangeSectionIndex} />
              );
              setChangeSectionHeaderText("Team");
              handleScroll(6);
            }}
          >
            <MdOutlineWeb className="text-blue-600" />
            <span className="text-[rgba(255,255,255,0.8)] font-medium">
              Team
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

export default TeamEditComponent;


export const TeamImages = ({
  setChangeSectionIndex,
}) => {
  const images = [
    {
      index: 0,
      image: TeamImage0,
    },
    {
      index: 1,
      image: TeamImage1,
    },
    {
      index: 2,
      image: TeamImage2,
    },
    {
      index: 3,
      image: TeamImage3,
    },
    {
      index: 4,
      image: TeamImage4,
    },
    {
      index: 5,
      image: TeamImage5,
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
