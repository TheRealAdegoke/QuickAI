import { useContext } from "react";
import NavImage0 from "../../../../assets/NavImage/NavImage0.webp";
import NavImage1 from "../../../../assets/NavImage/NavImage1.webp";
import NavImage2 from "../../../../assets/NavImage/NavImage2.webp";
import { DashContext } from "../../../DashboardChecker/DashboardContext";

export const HeaderImages = () => {
  const {
    setNavIndex,
    setSectionModal,
    addElement,
  } = useContext(DashContext);
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
              className="bg-[rgb(42,42,47)] p-3 rounded-[8px] w-full h-fit cursor-pointer"
              onClick={() => {
                setSectionModal(false);
                setNavIndex(item.index);
                addElement("header", item.index);;
              }}
            >
              <img
                src={item.image}
                alt=""
                className="rounded-[8px] w-full h-[full]"
              />
            </div>
          )
      )}
    </>
  );
};
