import { useContext } from "react";
import NavImage0 from "../../../../assets/NavImage/NavImage0.webp";
import NavImage1 from "../../../../assets/NavImage/NavImage1.webp";
import NavImage2 from "../../../../assets/NavImage/NavImage2.webp";
import { DashContext } from "../../../DashboardChecker/DashboardContext";

export const HeaderImages = () => {
  const { setNavIndex, setSectionModal, addElement, userData } =
    useContext(DashContext);
  const images = [
    {
      index: 0,
      image: NavImage0,
    },
    {
      index: 1,
      image: NavImage1,
    },
  ];


  return (
    <>
      {images.map(
        (item, idx) =>
          item.index !== undefined && (
            <div
              key={idx}
              className="bg-[rgb(42,42,47)] p-3 rounded-[8px] w-full h-fit cursor-pointer relative"
              onClick={() => {
                setSectionModal(false);
                setNavIndex(
                  userData.status === "free" && userData.trial === 0
                    ? null
                    : item.index
                );
                addElement(
                  "header",
                  userData.status === "free" && userData.trial === 0
                    ? null
                    : item.index
                );
              }}
            >
              <img
                src={item.image}
                alt=""
                className="rounded-[8px] w-full h-[full]"
              />
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
