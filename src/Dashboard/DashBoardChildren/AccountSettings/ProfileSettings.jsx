import React from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

const ProfileSettings = () => {
  return (
    <>
      <main className="bg-[rgb(30,30,30)] min-h-[100vh]">
        <section>
          <Link to="/home" className="my-5 ml-5 inline-block">
            <FaChevronLeft className="text-white text-2xl" />
          </Link>

          <div className="w-[80%] h-[500px] max-md:h-[600px] bg-[rgb(20,21,24)] mx-auto border-[rgba(255,255,255,0.5)] border-[1px] rounded-lg max-w-[800px] px-10 py-5 text-[rgba(255,255,255,0.8)]">
            <div>
              <h1 className="text-4xl font-bold mb-5">Profile</h1>
              <form action="" className="mb-24">
                <div className="flex max-sm:flex-col items-center justify-between max-sm:items-start mb-5">
                  <label htmlFor="name" className="font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    className="bg-[rgb(37,39,45)] w-[80%] max-sm:w-full h-[35px] text-white rounded pl-2"
                  />
                </div>
                <div className="relative">
                  <button
                    type="submit"
                    className="bg-white text-black px-3 py-2 rounded absolute right-0"
                  >
                    Update Name
                  </button>
                </div>
              </form>

              <h1 className="text-4xl font-bold mb-5">Password</h1>
              <form action="">
                <div className="flex max-sm:flex-col items-center justify-between max-sm:items-start mb-5">
                  <label htmlFor="name" className="font-semibold">
                    Old password
                  </label>
                  <input
                    type="password"
                    className="bg-[rgb(37,39,45)] w-[80%] max-sm:w-full h-[35px] text-white rounded pl-2"
                  />
                </div>
                <div className="flex max-sm:flex-col items-center justify-between max-sm:items-start mb-5">
                  <label htmlFor="name" className="font-semibold">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="bg-[rgb(37,39,45)] w-[80%] max-sm:w-full h-[35px] text-white rounded pl-2"
                  />
                </div>
                <div className="flex max-sm:flex-col items-center justify-between max-sm:items-start mb-5">
                  <label htmlFor="name" className="font-semibold">
                    Confirm
                  </label>
                  <input
                    type="password"
                    className="bg-[rgb(37,39,45)] w-[80%] max-sm:w-full h-[35px] text-white rounded pl-2"
                  />
                </div>
                <div className="relative">
                  <button
                    type="submit"
                    className="bg-white text-black px-3 py-2 rounded absolute right-0"
                  >
                    Update Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProfileSettings;
