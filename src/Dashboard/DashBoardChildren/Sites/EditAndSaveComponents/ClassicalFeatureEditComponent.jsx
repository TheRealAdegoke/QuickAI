import React, { useContext } from "react";
import ClassicFeatureImage1 from "../../../../assets/ClassicFeatureImage/ClassicFeatureImage1.webp";
import ClassicFeatureImage2 from "../../../../assets/ClassicFeatureImage/ClassicFeatureImage2.webp";
import ClassicFeatureImage3 from "../../../../assets/ClassicFeatureImage/ClassicFeatureImage3.webp";
import ClassicFeatureImage4 from "../../../../assets/ClassicFeatureImage/ClassicFeatureImage4.webp";
import ClassicFeatureImage5 from "../../../../assets/ClassicFeatureImage/ClassicFeatureImage5.webp";
import ClassicFeatureImage6 from "../../../../assets/ClassicFeatureImage/ClassicFeatureImage6.webp";
import { DashContext } from "../../../DashboardChecker/DashboardContext";

export const ClassicalFeaturesImages = () => {
  const { setSectionModal, addElement, userData } =
    useContext(DashContext);
  const images = [
    {
      index: 0,
      image: ClassicFeatureImage1,
    },
    {
      index: 1,
      image: ClassicFeatureImage2,
    },
    {
      index: 2,
      image: ClassicFeatureImage3,
    },
    {
      index: 3,
      image: ClassicFeatureImage4,
    },
    {
      index: 4,
      image: ClassicFeatureImage5,
    },
    {
      index: 5,
      image: ClassicFeatureImage6,
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
                  "classicFeatures",
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