import React from "react";
import FAQImage0 from "../../../../assets/FAQImage/FAQImage0.webp";
import FAQImage1 from "../../../../assets/FAQImage/FAQImage1.webp";
import FAQImage2 from "../../../../assets/FAQImage/FAQImage2.webp";
import FAQImage3 from "../../../../assets/FAQImage/FAQImage3.webp";

export const FAQImages = ({
  setChangeSectionIndex,
}) => {
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
