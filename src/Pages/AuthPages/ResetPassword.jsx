import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ImSpinner6 } from "react-icons/im";
import axios from "axios";
import { message } from "antd";
import WebLogo from "../../assets/WebLogo";

const ResetPassword = () => {
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const navigate = useNavigate()

  const handleCreatePassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    const postData = {
      token: token,
      password: password,
    };
    try {
      const response = await axios.post(
        "https://quickui-backend.onrender.com/auth/resetpassword",
        postData
      );
      console.log(response.data);
      message.success(response.data.message)
      navigate("/login")
    } catch (error) {
      console.error(error.response.data.error);
      message.error(error.response.data.error);
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <main className="bg-[rgb(3,11,21)] min-h-screen text-white">
        <div className="flex justify-center items-center py-5">
          <WebLogo />
        </div>

        <div className="bg-[rgb(2,8,16)] w-4/5 max-w-[400px] mx-auto pb-8 border border-[rgb(64,65,67)] rounded-[8px]">
          <form className="px-6" onSubmit={handleCreatePassword}>
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
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
              {loading ? (
                <div>
                  <ImSpinner6 className="animate-spin text-2xl text-black block mx-auto" />
                </div>
              ) : (
                "Create Password"
              )}
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default ResetPassword;
