import React, { useContext } from "react";
import testImage from "../../../../assets/Default-Card.jpg";
import { DashContext } from "../../../DashboardChecker/DashboardContext";

export const ContactImages = () => {
  const { setContactIndex } = useContext(DashContext);
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
    {
      index: 3,
      image: testImage,
    },
    {
      index: 4,
      image: testImage,
    },
    {
      index: 5,
      image: testImage,
    },
    {
      index: 6,
      image: testImage,
    },
    {
      index: 7,
      image: testImage,
    },
    {
      index: 8,
      image: testImage,
    },
    {
      index: 9,
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
              className="bg-[rgb(42,42,47)] p-3 rounded-[8px] w-[45%] cursor-pointer"
              onClick={() => {
                setContactIndex(item.index);
              }}
            >
              <img src={item.image} alt="" className="rounded-[8px] w-full" />
            </div>
          )
      )}
    </>
  );
};
