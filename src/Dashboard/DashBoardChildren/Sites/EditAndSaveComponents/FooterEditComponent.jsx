import { useContext } from "react";
import FooterImage0 from "../../../../assets/FooterImage/FooterImage1.webp";
import { DashContext } from "../../../DashboardChecker/DashboardContext";

const FooterImages = () => {
  const { setFooterIndex, setSectionModal, addElement, userData } =
    useContext(DashContext);
  const images = [
    {
      index: 0,
      image: FooterImage0,
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
                setFooterIndex(
                  userData.status === "free" && userData.trial === 0
                    ? null
                    : item.index
                );
                addElement(
                  "footer",
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

export default FooterImages;
