import { useContext } from "react";
import FooterImage0 from "../../../../assets/FooterImage/FooterImage1.webp";
import { DashContext } from "../../../DashboardChecker/DashboardContext";

const FooterImages = () => {
  const { setFooterIndex, setSectionModal, addElement } =
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
              className="bg-[rgb(42,42,47)] p-3 rounded-[8px] w-full h-fit cursor-pointer"
              onClick={() => {
                setSectionModal(false);
                setFooterIndex(item.index);
                addElement("footer", item.index);
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

export default FooterImages;
