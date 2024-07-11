import React, { useContext } from "react";
import TeamImage0 from "../../../../assets/TeamImage/TeamImage0.webp";
import TeamImage1 from "../../../../assets/TeamImage/TeamImage1.webp";
import TeamImage2 from "../../../../assets/TeamImage/TeamImage2.webp";
import TeamImage3 from "../../../../assets/TeamImage/TeamImage3.webp";
import TeamImage4 from "../../../../assets/TeamImage/TeamImage4.webp";
import TeamImage5 from "../../../../assets/TeamImage/TeamImage5.webp";
import { DashContext } from "../../../DashboardChecker/DashboardContext";

export const TeamImages = () => {
  const { setTeamIndex } = useContext(DashContext);
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
                setTeamIndex(item.index);
              }}
            >
              <img src={item.image} alt="" className="rounded-[8px] w-full" />
            </div>
          )
      )}
    </>
  );
};
