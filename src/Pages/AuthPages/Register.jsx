import React from "react";
import NavLogo from "../../assets/NavLogo.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
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

        <div className="bg-[rgb(2,8,16)] w-4/5 PC:max-w-[400px] h-[500px] w mx-auto border border-[rgb(64,65,67)] rounded-[8px]">
          <form className="px-6">
            <div className="mt-4 mb-6">
              <h1 className="text-[rgb(201,209,217)] text-2xl font-bold">
                Create Account
              </h1>
              <p className="text-[rgb(161,167,171)] font-semibold">
                Get started for free
              </p>
            </div>

            <div>
              <div className="flex flex-col my-4">
                <label
                  htmlFor="name"
                  className="text-[rgb(161,167,171)] font-semibold"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  className="bg-[rgb(42,42,47)] border border-[rgb(64,65,67)] rounded-[5px] h-[40px] px-3 focus:border-[rgb(54,116,220)] outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col my-4">
                <label
                  htmlFor="email"
                  className="text-[rgb(161,167,171)] font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="bg-[rgb(42,42,47)] border border-[rgb(64,65,67)] rounded-[5px] h-[40px] px-3 focus:border-[rgb(54,116,220)] outline-none"
                  placeholder="johndoe@example.com"
                />
              </div>

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
            </div>

            <button
              type="submit"
              className="text-black bg-white hover:bg-[rgba(255,255,255,0.9)] block mx-auto p-3 rounded-[5px] font-medium w-[200px]"
            >
              Create Account
            </button>
          </form>

          <div className="relative text-[rgb(201,209,217)]">
            <hr className="my-5 border-[rgb(64,65,67)]" />
            <span className="absolute-center bg-[rgb(2,8,16)] flex items-center justify-center rounded-full  w-[40px] text-center h-[40px] text-[1.2rem]">
              or
            </span>
          </div>

          <div className="w-4/5 PC:w-[350px] mx-auto text-center my-4 hover:bg-[rgb(42,42,47)] py-2 rounded-[5px] flex items-center justify-center gap-2 cursor-pointer border border-[rgb(64,65,67)]">
            <FcGoogle className="text-[1.4rem]" />
            <span className="font-medium text-[rgb(201,209,217)]">
              Sign up with Google
            </span>
          </div>
        </div>

        <div className="w-[250px] mx-auto text-center my-4 bg-[rgb(42,42,47)] py-2 rounded-[5px] text-[rgb(201,209,217)]">
          <Link to="/login" className=" hover:underline">
            I already have an account
          </Link>
        </div>
      </main>
    </>
  );
};

export default Register;
