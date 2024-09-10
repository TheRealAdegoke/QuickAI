import React from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import QuickUI from "../../../assets/Quick-logo-white.png";

const AccountSettings = () => {
  return (
    <>
      <main className="bg-[rgb(30,30,30)] min-h-[100vh]">
        <section>
          <Link to="/home" className="my-5 ml-5 inline-block">
            <FaChevronLeft className="text-white text-2xl" />
          </Link>

          <div className="w-[80%] h-[600px] bg-[rgb(20,21,24)] mx-auto border-[rgba(255,255,255,0.5)] border-[1px] rounded-lg max-w-[800px] px-10 py-5 text-[rgba(255,255,255,0.8)]">
            <h1 className="text-4xl font-bold mb-5">Account</h1>
            <div className="mb-10">
              <div className="bg-[rgb(37,39,45)] w-full max-w-[600px] h-[50px] rounded flex flex-col justify-center px-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <img src={QuickUI} alt="" className="w-[30px] block" />
                    <p className="text-xl font-semibold">Free Plan</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="bg-[rgb(20,21,24)] px-5 py-1 rounded">
                      <p className="font-semibold">Current</p>
                    </div>
                    <FaChevronRight className="text-white text-2xl" />
                  </div>
                </div>
              </div>
              <p className="font-semibold">
                Free access to the AI generator with 3 free editing trials
              </p>
            </div>

            <div className="mb-10">
              <div className="bg-[rgb(37,39,45)] w-full max-w-[600px] h-[50px] rounded flex flex-col justify-center px-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <img src={QuickUI} alt="" className="w-[30px] block" />
                    <p className="text-xl font-semibold">Premium Plan</p>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* <div className="bg-[rgb(20,21,24)] px-5 py-1 rounded">
                      <p className="font-semibold">Current</p>
                    </div> */}
                    <FaChevronRight className="text-white text-2xl" />
                  </div>
                </div>
              </div>
              <p className="font-semibold">
                Comes with all available features and unlimited editing power
              </p>
            </div>

            <div className="bg-[rgb(45,10,10)] px-3 py-5 flex gap-4 w-full max-w-[600px] rounded">
              <div className="mt-1">
                <IoIosWarning />
              </div>

              <div>
                <h1 className="font-semibold mb-5">Important</h1>
                <p className="max-w-[500px]">
                  Please do not edit your email on the Lemon Squeezy portal to
                  avoid any issues with your payment
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AccountSettings;
