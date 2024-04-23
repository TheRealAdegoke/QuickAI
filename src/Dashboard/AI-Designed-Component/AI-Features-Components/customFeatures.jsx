import React from 'react'
import testImage from "../../../assets/Default-Card.jpg";

export const FeaturesOne = () => {
  return (
    <>
      <section className="my-8 mx-5">
        <div className="flex justify-center items-center gap-5 max-lg:flex-col">
          <div className="bg-[rgba(0,0,0,0.8)] w-1/2 max-lg:w-[95%] max-lg:max-w-[450px] p-3 rounded-lg">
            <img src={testImage} alt={testImage} />
          </div>

          <div className="flex flex-col max-lg:text-center gap-5 w-1/2 max-lg:w-full px-4">
            <h1 className="text-black text-[2.5rem] max-lg:text-[2rem] max-sm:text-[1.5rem] font-bold">
              BEST EXPERINCED FREELANCER HERE
            </h1>
            <p className="text-black font-medium">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as
            </p>
            <div className="flex max-lg:justify-center gap-4 items-center">
              <button className="bg-[rgb(255,79,90)] p-3 text-white w-[200px] hover:bg-transparent hover:border-[rgb(255,79,90)] border-[rgb(255,79,90)] hover:border-[1px] hover:text-[rgb(255,79,90)] duration-300 ease-in-out">
                About Us
              </button>
              <button className="bg-[rgb(26,46,53)] p-3 text-white w-[200px] hover:bg-transparent hover:border-[rgb(26,46,53)] border-[rgb(26,46,53)] hover:border-[1px] hover:text-[rgb(26,46,53)] duration-300 ease-in-out">
                Get A Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}