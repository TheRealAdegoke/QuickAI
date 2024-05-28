import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { axiosInstance } from "../../../Pages/AuthPages/AuthChecker/axiosInstance";
import { FaChevronLeft } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { ImSpinner6 } from "react-icons/im";
import parse from "html-react-parser";
import WebLogo from "../../../assets/WebLogo";
import { DashContext } from "../../DashboardChecker/DashboardContext";

const WebPreview = () => {
  const { userData } = useContext(DashContext);
  const { id } = useParams();
  const [historyData, setHistoryData] = useState("");
  const [loading, setLoading] = useState(true);
  const [itemsDropdown, setItemsDropdown] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setItemsDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setItemsDropdown]);

  useEffect(() => {
    const fetchHistoryItem = async () => {
      try {
        const response = await axiosInstance.get(`/auth/user-data/${id}`);
        setHistoryData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
    fetchHistoryItem();
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="h-screen flex justify-center items-center mx-auto">
          <ImSpinner6 className="animate-spin text-4xl text-black block" />
        </div>
      ) : (
        <main>
          <div
            ref={modalRef}
            className="dashboard-navigation-darkmode py-2 flex justify-between items-center px-3 fixed w-full top-0 z-50 my"
          >
            <div>
              <Link to="/home">
                <FaChevronLeft className="text-white text-2xl" />
              </Link>
            </div>
            <WebLogo />
            <button
              className="bg-[rgb(9,23,56)] flex justify-center items-center py-[0.5rem] px-[0.6rem] rounded-full uppercase text-white"
              onClick={() => {
                setItemsDropdown(!itemsDropdown);
              }}
            >
              {userData && userData.fullname.slice(0, 2)}
            </button>

            <div
              className={`${
                itemsDropdown ? "block" : "hidden"
              } dashboard-navigation-darkmode w-full max-w-[190px] mx-auto flex-col items-start gap-2 border-zinc-600 border-[1px] px-2 py-1 rounded-[5px] font-semibold fixed top-16 right-[0.7%] z-50 text-white`}
            >
              <button className="flex items-center gap-1 w-full hover:px-1 border-zinc-600 hover:border-[1px] rounded-[5px] px-1 py-1 hover:bg-[rgb(33,33,33)]">
                <MdOutlineManageAccounts />
                Account
              </button>
              <button className="flex items-center gap-1 w-full hover:px-1 border-zinc-600 hover:border-[1px] rounded-[5px] px-1 py-1 hover:bg-[rgb(33,33,33)]">
                <IoSettingsOutline />
                Settings
              </button>
            </div>
          </div>
          <div className="pt-14">
            {historyData.navStyle && parse(historyData.navStyle.style)}
            {historyData.heroStyle && parse(historyData.heroStyle.style)}
            {historyData.sectionOneStyle &&
              parse(historyData.sectionOneStyle.style)}
            {historyData.sectionTwoStyle &&
              parse(historyData.sectionTwoStyle.style)}
            {historyData.sectionThreeStyle &&
              parse(historyData.sectionThreeStyle.style)}
            {historyData.sectionFourStyle &&
              parse(historyData.sectionFourStyle.style)}
            {historyData.sectionFiveStyle &&
              parse(historyData.sectionFiveStyle.style)}
            {historyData.footerStyle && parse(historyData.footerStyle.style)}
          </div>
        </main>
      )}
    </>
  );
};

export default WebPreview;
