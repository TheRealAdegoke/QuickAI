import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { axiosInstance } from "../../../Pages/AuthPages/AuthChecker/axiosInstance";
import { FaChevronLeft } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { ImSpinner6 } from "react-icons/im";
import parse from "html-react-parser";
import WebLogo from "../../../assets/WebLogo";
import { DashContext } from "../../DashboardChecker/DashboardContext";
import reactElementToJSXString from "react-element-to-jsx-string";
import JsxParser from "react-jsx-parser";
import Cookies from "js-cookie";
import { IoClose } from "react-icons/io5";
import { HiMiniBars2 } from "react-icons/hi2";
import { TiArrowRightOutline } from "react-icons/ti";
import { FaBarsStaggered } from "react-icons/fa6";
import BGBottom from "../../../assets/bg-bottom.png";
import BGTop from "../../../assets/bg-top.png";
import ScreenShotFrame from "../../../assets/screenshot-frame.png";
import ScreenShotImage from "../../../assets/screenshot-1.png";
import { FaGears } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";

const WebPreview = () => {
  const { userData } = useContext(DashContext);
  const { id } = useParams();
  const [historyData, setHistoryData] = useState("");
  const [loading, setLoading] = useState(true);
  const [itemsDropdown, setItemsDropdown] = useState(false);
  const modalRef = useRef(null);
  const [toggleNav, setToggleNav] = useState(false);
  const [active, setActive] = useState(1);
  const homeSidebarRef = useRef(null);
  const location = useLocation();

  const handleToggleNav = () => {
    setToggleNav((prev) => !prev);
  };

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
        const accessToken = Cookies.get("accessToken");
        const response = await axiosInstance.get(`/auth/user-data/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setHistoryData(response.data);
        setLoading(false);
        console.log(response.data);
        
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
    fetchHistoryItem();
  }, [id]);

  const bindings = {
    toggleNav: toggleNav,
    setToggleNav: handleToggleNav,
    active: active,
    setActive: setActive,
    homeSidebarRef: homeSidebarRef,
    location: location,
  };

  const components = {
    Link,
    BGBottom,
    BGTop,
    ScreenShotFrame,
    ScreenShotImage,
    IoClose,
    HiMiniBars2,
    TiArrowRightOutline,
    FaBarsStaggered,
    FaGears,
    FaCheck,
    FaEye,
    IoLocationSharp,
    FaEnvelope,
    FaPhoneAlt,
    FaXTwitter,
    GrFacebookOption,
    FaInstagram,
    FaLinkedinIn,
    MdChevronRight,
  };

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
              <Link
                to="/account"
                className="flex items-center gap-1 w-full hover:px-1 border-zinc-600 hover:border-[1px] rounded-[5px] px-1 py-1 hover:bg-[rgb(33,33,33)]"
              >
                <MdOutlineManageAccounts />
                Account
              </Link>
              <Link
                to="/settings"
                className="flex items-center gap-1 w-full hover:px-1 border-zinc-600 hover:border-[1px] rounded-[5px] px-1 py-1 hover:bg-[rgb(33,33,33)]"
              >
                <IoSettingsOutline />
                Settings
              </Link>
            </div>
          </div>
          <div className="pt-14">
            {/* {historyData.navStyle && parse(historyData.navStyle.style)} */}
            {historyData.style &&
              historyData.style.map((styles, index) => (
                <div key={index}>
                  {/* {parse(styles)} */}
                  {/* {styles} */}
                  <JsxParser
                    jsx={styles}
                    bindings={bindings}
                    components={components}
                    renderInWrapper={false}
                    blacklistedAttrs={[]}
                    showWarnings={true}
                  />
                </div>
              ))}
            {/* <TestingWeb historyData={historyData} /> */}
          </div>
        </main>
      )}
    </>
  );
};

export default WebPreview;
