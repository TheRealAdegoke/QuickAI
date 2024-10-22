import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { ImSpinner6 } from "react-icons/im";
import { message } from "antd";
import WebLogo from "../../assets/WebLogo";
import { axiosInstance } from "./AuthChecker/axiosInstance";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

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
      message.success(response.data.message);
      Cookies.set("resetToken", response.data.forgotpasswordToken, {
        expires: 7,
        sameSite: "Lax",
        secure: true,
        path: "/",
      });
    } catch (error) {
      console.log(error.response.data.error);
      message.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>QuickUI - Effortless Landing Page Creation</title>

        {/* Canonical URL */}
        <link rel="canonical" href="https://quickui.co/forgotpassword" />

        {/* Meta Description */}
        <meta
          name="description"
          content="QuickUI helps you create and customize landing pages effortlessly. No coding skills required. Get started today and build your next project with ease."
        />

        {/* Keywords for SEO */}
        <meta
          name="keywords"
          content="QuickUI, landing pages, web design, create landing page, no code, easy web design, landing page builder"
        />

        {/* Open Graph for Social Sharing */}
        <meta
          property="og:title"
          content="QuickUI - Effortless Landing Page Creation"
        />
        <meta
          property="og:description"
          content="Create and customize landing pages effortlessly with QuickUI. Get started today!"
        />
        <meta property="og:url" content="https://quickui.co/forgotpassword" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://quickui.co/assets/preview-image-DktLHLuD.png"
        />

        {/* Twitter Card for Social Sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="QuickUI - Effortless Landing Page Creation"
        />
        <meta
          name="twitter:description"
          content="QuickUI makes creating landing pages easy. Try it out today!"
        />
        <meta
          name="twitter:image"
          content="https://quickui.co/assets/preview-image-DktLHLuD.png"
        />
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
