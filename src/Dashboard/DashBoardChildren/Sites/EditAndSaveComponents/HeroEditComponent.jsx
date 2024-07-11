import { useContext } from "react";
import HeroImage0 from "../../../../assets/HeroImages/HeroImage0.webp";
import HeroImage1 from "../../../../assets/HeroImages/HeroImage1.webp";
import HeroImage2 from "../../../../assets/HeroImages/HeroImage2.webp";
import HeroImage3 from "../../../../assets/HeroImages/HeroImage3.webp";
import HeroImage4 from "../../../../assets/HeroImages/HeroImage4.webp";
import HeroImage5 from "../../../../assets/HeroImages/HeroImage5.webp";
import HeroImage6 from "../../../../assets/HeroImages/HeroImage6.webp";
import HeroImage7 from "../../../../assets/HeroImages/HeroImage7.webp";
import { DashContext } from "../../../DashboardChecker/DashboardContext";

export const HeroImages = () => {
  const { setHeroIndex } = useContext(DashContext);

  const images = [
    {
      index: 0,
      image: HeroImage0,
    },
    {
      index: 1,
      image: HeroImage1,
    },
    {
      index: 2,
      image: HeroImage2,
    },
    {
      index: 3,
      image: HeroImage3,
    },
    {
      index: 4,
      image: HeroImage4,
    },
    {
      index: 5,
      image: HeroImage5,
    },
    {
      index: 6,
      image: HeroImage6,
    },
    {
      index: 7,
      image: HeroImage7,
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
                setHeroIndex(item.index);
              }}
            >
              <img
                src={item.image}
                alt=""
                className="rounded-[8px] w-full h-full"
              />
            </div>
          )
      )}
    </>
  );
};
