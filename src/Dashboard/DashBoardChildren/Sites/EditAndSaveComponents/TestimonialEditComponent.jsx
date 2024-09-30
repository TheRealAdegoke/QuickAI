import { useContext } from "react";
import TestimonialImage0 from "../../../../assets/TestimonialImage/TestimonialImage0.webp";
import TestimonialImage1 from "../../../../assets/TestimonialImage/TestimonialImage1.webp";
import TestimonialImage2 from "../../../../assets/TestimonialImage/TestimonialImage2.webp";
import TestimonialImage3 from "../../../../assets/TestimonialImage/TestimonialImage3.webp";
import TestimonialImage4 from "../../../../assets/TestimonialImage/TestimonialImage4.webp";
import TestimonialImage5 from "../../../../assets/TestimonialImage/TestimonialImage5.webp";
import TestimonialImage6 from "../../../../assets/TestimonialImage/TestimonialImage6.webp";
import TestimonialImage7 from "../../../../assets/TestimonialImage/TestimonialImage7.webp";
import { DashContext } from "../../../DashboardChecker/DashboardContext";

export const TestimonialImages = () => {
  const { setSectionModal, addElement, userData } = useContext(DashContext);
  const images = [
    {
      index: 0,
      image: TestimonialImage0,
    },
    {
      index: 1,
      image: TestimonialImage1,
    },
    {
      index: 2,
      image: TestimonialImage2,
    },
    {
      index: 3,
      image: TestimonialImage3,
    },
    {
      index: 4,
      image: TestimonialImage4,
    },
    {
      index: 5,
      image: TestimonialImage5,
    },
    {
      index: 6,
      image: TestimonialImage6,
    },
    {
      index: 7,
      image: TestimonialImage7,
    },
  ];

  return (
    <>
      {images.map(
        (item, idx) =>
          item.index !== undefined && (
            <div
              key={idx}
              className="bg-[rgb(42,42,47)] p-3 rounded-[8px] w-[45%] cursor-pointer h-fit relative"
              onClick={() => {
                setSectionModal(false);
                addElement(
                  "testimonial",
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
