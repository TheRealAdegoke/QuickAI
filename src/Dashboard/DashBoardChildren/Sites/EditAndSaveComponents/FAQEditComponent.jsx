import React, { useContext } from "react";
import FAQImage0 from "../../../../assets/FAQImage/FAQImage0.webp";
import FAQImage1 from "../../../../assets/FAQImage/FAQImage1.webp";
import FAQImage2 from "../../../../assets/FAQImage/FAQImage2.webp";
import FAQImage3 from "../../../../assets/FAQImage/FAQImage3.webp";
import { DashContext } from "../../../DashboardChecker/DashboardContext";

export const FAQImages = () => {
  const { setFaqIndex } = useContext(DashContext);
  const images = [
    {
      index: 0,
      image: FAQImage0,
    },
    {
      index: 1,
      image: FAQImage1,
    },
    {
      index: 2,
      image: FAQImage2,
    },
    {
      index: 3,
      image: FAQImage3,
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
                setFaqIndex(item.index);
              }}
            >
              <img src={item.image} alt="" className="rounded-[8px] w-full" />
            </div>
          )
      )}
    </>
  );
};
