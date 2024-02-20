import React from "react";
import NavLogo from "../../assets/NavLogo.png";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <>
      <main className="bg-[rgb(3,11,21)] min-h-screen text-white">
        <div className="flex items-center py-5">
          <img
            src={NavLogo}
            alt="Quick UI Image."
            className="w-32 block select-none mx-auto"
          />
        </div>

        <div className="bg-[rgb(2,8,16)] w-4/5 PC:max-w-[400px] w mx-auto pb-8 border border-[rgb(64,65,67)] rounded-[8px]">
          <form className="px-6">
            <div className="mt-4 mb-6">
              <h1 className="text-[rgb(201,209,217)] text-2xl font-bold">
                Reset Password
              </h1>
              <p className="text-[rgb(161,167,171)] font-semibold">
                Create a new password
              </p>
            </div>

            <div>
              <div className="flex flex-col my-4">
                <label
                  htmlFor="password"
                  className="text-[rgb(161,167,171)] font-semibold"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="bg-[rgb(42,42,47)] border border-[rgb(64,65,67)] rounded-[5px] h-[40px] px-3 focus:border-[rgb(54,116,220)] outline-none"
                  placeholder="123456789"
                />
              </div>

              <div className="flex flex-col my-4">
                <label
                  htmlFor="password"
                  className="text-[rgb(161,167,171)] font-semibold"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="bg-[rgb(42,42,47)] border border-[rgb(64,65,67)] rounded-[5px] h-[40px] px-3 focus:border-[rgb(54,116,220)] outline-none"
                  placeholder="123456789"
                />
              </div>
            </div>

            <button
              type="submit"
              className="text-black bg-white hover:bg-[rgba(255,255,255,0.9)] block mx-auto p-3 rounded-[5px] font-medium w-full"
            >
              Create Password
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default ResetPassword;
