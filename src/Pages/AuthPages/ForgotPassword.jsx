import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ImSpinner6 } from "react-icons/im";
import { message } from "antd";
import WebLogo from "../../assets/WebLogo";
import { axiosInstance } from "./AuthChecker/axiosInstance";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    const postData = {
      email: email,
    };

    setLoading(true);
    try {
      const response = await axiosInstance.post(
        "/auth/forgotpassword",
        postData
      );
      console.log(response.data);
      message.success(response.data.message);
    } catch (error) {
      console.log(error.response.data.error);
      message.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <main className="bg-[rgb(3,11,21)] min-h-screen text-white">
        <div className="flex justify-center items-center py-5">
          <WebLogo />
        </div>

        <div className="bg-[rgb(2,8,16)] w-4/5 max-w-[400px] mx-auto pb-8 border border-[rgb(64,65,67)] rounded-[8px]">
          <form className="px-6" onSubmit={handleReset}>
            <div className="mt-4 mb-6">
              <h1 className="text-[rgb(201,209,217)] text-2xl font-bold">
                Forgot Password
              </h1>
              <p className="text-[rgb(161,167,171)] font-semibold">
                Forgot your password? don't worry we got you covered
              </p>
            </div>

            <div>
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="text-black bg-white hover:bg-[rgba(255,255,255,0.9)] block mx-auto p-3 rounded-[5px] font-medium w-full"
              disabled={loading}
            >
              {loading ? (
                <div>
                  <ImSpinner6 className="animate-spin text-2xl text-black block mx-auto" />
                </div>
              ) : (
                "Send Link"
              )}
            </button>
          </form>
        </div>

        <div className="">
          <Link
            to="/login"
            className="block w-[250px] mx-auto text-center my-4 bg-[rgb(42,42,47)] py-2 rounded-[5px] text-[rgb(201,209,217)] hover:underline"
          >
            Back to Login
          </Link>
        </div>
      </main>
    </>
  );
};

export default ForgotPassword;
