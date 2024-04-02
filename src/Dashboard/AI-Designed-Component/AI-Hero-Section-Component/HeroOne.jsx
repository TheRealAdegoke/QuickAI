import React from 'react'
import DefaultImage from "../../../assets/Default-Card.jpg";

const HeroOne = () => {
  return (
    <>
      <main className="text-black my-5">
        <h1 className="text-5xl text-[rgb(33,37,41)] PC:text-7xl font-extrabold text-center adamina-regular smallDevice:text-4xl phone:max-w-[350px] tablet:max-w-[400px] max-w-[500px] mx-auto my-3">
          Quickly Design Landing Pages
        </h1>

        <p className="text-xl text-[rgb(52,58,64)] font-extrabold text-center adamina-regular phone:max-w-[350px] tablet:max-w-[400px] max-w-[500px] mx-auto">
          Need a website fast? We design landing pages quickly. Get your brand
          noticed with our speedy service.
        </p>

        <div className="bg-[rgb(24,24,27)] w-[90%] max-w-[800px] h-[400px] mx-auto my-5 p-3 rounded-lg">
          <img
            src={DefaultImage}
            alt=""
            className="block w-full max-w-[800px] h-[375px] rounded-lg object-cover"
          />
        </div>
      </main>
    </>
  );
}

export default HeroOne