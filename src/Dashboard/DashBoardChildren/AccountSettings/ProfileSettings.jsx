import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { message } from "antd";
import { axiosInstance } from "../../../Pages/AuthPages/AuthChecker/axiosInstance";
import { ImSpinner6 } from "react-icons/im";

const ProfileSettings = () => {
  const navigate = useNavigate();
  const [newFullName, setNewFullName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordLoading, setPasswordLoading] = useState(false);

  const handleUpdateName = async (e) => {
    e.preventDefault();
    message.config({
      duration: 2,
      maxCount: 1,
    });
    setLoading(true);
    const postData = {
      newFullName,
    };
    try {
      const response = await axiosInstance.put(
        "/auth/updateFullName",
        postData
      );
      message.success(response.data.message);
      navigate("/home");
    } catch (error) {
      console.error(error.response?.data?.error || error.message);
      if (error.response?.status === 429) {
        message.error("Too many attempts, please try again after 5 minutes");
      } else {
        message.error(error.response?.data?.error || "An error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    message.config({
      duration: 2,
      maxCount: 1,
    });
    setPasswordLoading(true);
    const postData = {
      oldPassword,
      newPassword,
      confirmNewPassword,
    };
    try {
      const response = await axiosInstance.put(
        "/auth/updatePassword",
        postData
      );
      message.success(response.data.message);
      navigate("/home");
    } catch (error) {
      console.error(error.response?.data?.error || error.message);
      if (error.response?.status === 429) {
        message.error("Too many attempts, please try again after 5 minutes");
      } else {
        message.error(error.response?.data?.error || "An error occurred");
      }
    } finally {
      setPasswordLoading(false);
    }
  };

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
              <form className="mb-24" onSubmit={handleUpdateName}>
                <div className="flex max-sm:flex-col items-center justify-between max-sm:items-start mb-5">
                  <label htmlFor="name" className="font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    className="bg-[rgb(37,39,45)] w-[80%] max-sm:w-full h-[35px] text-white rounded pl-2"
                    onChange={(e) => {
                      setNewFullName(e.target.value);
                    }}
                  />
                </div>
                <div className="relative">
                  <button
                    type="submit"
                    className={`${
                      newFullName.trim() === ""
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    } bg-white text-black px-3 py-2 rounded absolute right-0 min-w-[150px]`}
                    disabled={loading || newFullName.trim() === ""}
                  >
                    {loading ? (
                      <div>
                        <ImSpinner6 className="animate-spin text-2xl text-black block mx-auto" />
                      </div>
                    ) : (
                      "Update Name"
                    )}
                  </button>
                </div>
              </form>

              <h1 className="text-4xl font-bold mb-5">Password</h1>
              <form onSubmit={handleUpdatePassword}>
                <div className="flex max-sm:flex-col items-center justify-between max-sm:items-start mb-5">
                  <label htmlFor="name" className="font-semibold">
                    Old password
                  </label>
                  <input
                    type="password"
                    className="bg-[rgb(37,39,45)] w-[80%] max-sm:w-full h-[35px] text-white rounded pl-2"
                    onChange={(e) => {
                      setOldPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="flex max-sm:flex-col items-center justify-between max-sm:items-start mb-5">
                  <label htmlFor="name" className="font-semibold">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="bg-[rgb(37,39,45)] w-[80%] max-sm:w-full h-[35px] text-white rounded pl-2"
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="flex max-sm:flex-col items-center justify-between max-sm:items-start mb-5">
                  <label htmlFor="name" className="font-semibold">
                    Confirm
                  </label>
                  <input
                    type="password"
                    className="bg-[rgb(37,39,45)] w-[80%] max-sm:w-full h-[35px] text-white rounded pl-2"
                    onChange={(e) => {
                      setConfirmNewPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="relative">
                  <button
                    type="submit"
                    className={`${
                      oldPassword.trim() === "" ||
                      newPassword.trim() === "" ||
                      confirmNewPassword.trim() === ""
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    } bg-white text-black px-3 py-2 rounded absolute right-0 min-w-[150px]`}
                    disabled={
                      passwordLoading ||
                      oldPassword.trim() === "" ||
                      newPassword.trim() === "" ||
                      confirmNewPassword.trim() === ""
                    }
                  >
                    {passwordLoading ? (
                      <div>
                        <ImSpinner6 className="animate-spin text-2xl text-black block mx-auto" />
                      </div>
                    ) : (
                      "Update Password"
                    )}
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
