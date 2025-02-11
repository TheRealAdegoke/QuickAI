import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { ImSpinner6 } from "react-icons/im";
import { message } from "antd";
import WebLogo from "../../assets/WebLogo";
import { axiosInstance } from "./AuthChecker/axiosInstance";
import AOS from "aos";
import "aos/dist/aos.css";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const handleCreatePassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      message.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const resetToken = Cookies.get("resetToken");
      const response = await axiosInstance.post(
        "/auth/resetpassword",
        {
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${resetToken}`,
          },
        }
      );
      setLoading(false);
      message.success(response.data.message);
      Cookies.remove("resetToken");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error(error.response.data.error || "Something went wrong");
    }
  };

  return (
    <>
      <Helmet>
        <title>Create a landing page ai</title>
        <meta
          name="description"
          content="QuickUI lets you easily create landing pages without coding. Build your next project faster with our intuitive platform."
        />
        <meta name="keywords" content="Create a landing page ai" />
        <meta property="og:title" content="Create a landing page ai" />
        <meta
          property="og:description"
          content="QuickUI helps you build and customize landing pages easily. No coding skills needed!"
        />
        <meta property="og:image" content="https://i.imgur.com/HSA0Pbh.png" />
        <meta property="og:url" content="https://quickui.co/resetpassword" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Create a landing page ai" />
        <meta
          name="twitter:description"
          content="Create and customize landing pages easily with QuickUI!"
        />
        <meta name="twitter:image" content="https://i.imgur.com/HSA0Pbh.png" />
        <link rel="canonical" href="https://quickui.co/resetpassword" />
      </Helmet>
      <main className="bg-[rgb(3,11,21)] min-h-screen text-white">
        <div
          data-aos="zoom-in"
          className="flex justify-center items-center py-5"
        >
          <WebLogo />
        </div>

        <div
          data-aos="zoom-in"
          className="bg-[rgb(2,8,16)] w-4/5 max-w-[400px] mx-auto pb-8 border border-[rgb(64,65,67)] rounded-[8px]"
        >
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
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
