import NavImage0 from "../../../../assets/NavImage/NavImage0.webp";
import NavImage1 from "../../../../assets/NavImage/NavImage1.webp";
import NavImage2 from "../../../../assets/NavImage/NavImage2.webp";


export const HeaderImages = ({ setChangeSectionIndex }) => {
  const images = [
    {
      index: 0,
      image: NavImage0,
    },
    {
      index: 1,
      image: NavImage1,
    },
    {
      index: 2,
      image: NavImage2,
    },
  ];

  return (
    <>
      {images.map(
        (item, idx) =>
          item.index !== undefined && (
            <div
              key={idx}
              className="bg-[rgb(42,42,47)] p-3 rounded-[8px] w-[45%] max-h-[100px] cursor-pointer"
              onClick={() => {
                setChangeSectionIndex(item.index);
              }}
            >
              <img src={item.image} alt="" className="rounded-[8px] w-full h-[full]" />
            </div>
          )
      )}
    </>
  );
};
