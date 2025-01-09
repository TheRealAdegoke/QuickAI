import React, { useContext } from "react";
import CardFeatureImage0 from "../../../../assets/CardFeatureImage/CardFeatureImage0.webp";
import CardFeatureImage1 from "../../../../assets/CardFeatureImage/CardFeatureImage1.webp";
import CardFeatureImage2 from "../../../../assets/CardFeatureImage/CardFeatureImage2.webp";
import CardFeatureImage3 from "../../../../assets/CardFeatureImage/CardFeatureImage3.webp";
import CardFeatureImage4 from "../../../../assets/CardFeatureImage/CardFeatureImage4.webp";
import CardFeatureImage5 from "../../../../assets/CardFeatureImage/CardFeatureImage5.webp";
import CardFeatureImage6 from "../../../../assets/CardFeatureImage/CardFeatureImage6.webp";
import { DashContext } from "../../../DashboardChecker/DashboardContext";

export const CardFeaturesImages = () => {
  const { setSectionModal, addElement, userData } = useContext(DashContext);
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
    },
    {
      index: 5,
      image: CardFeatureImage5,
    },
    {
      index: 6,
      image: CardFeatureImage6,
    },
  ];

  return (
    <>
      {images.map(
        (item, idx) =>
          item.index !== undefined && (
            <div
              key={idx}
              className="bg-[rgb(42,42,47)] p-3 rounded-[8px] w-[45%] h-fit cursor-pointer relative"
              onClick={() => {
                setSectionModal(false);
                addElement(
                  "featuresWithCards",
                  userData.status === "free" && userData.trial === 0
                    ? null
                    : item.index
                );
              }}
            >
              <img src={item.image} alt="" className="rounded-[8px] w-full" />
              <div
                className={`${
                  userData.status === "free" && userData.trial === 0
                    ? "backdrop-blur"
                    : ""
                } w-full h-full absolute top-0`}
              ></div>
            </div>
          )
      )}
    </>
  );
};
