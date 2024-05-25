import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WebLogo from "../../assets/WebLogo";
import { FaRegEdit } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { AuthContext } from "../../Pages/AuthPages/AuthChecker/AuthContext";
import { FaChevronRight } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { DashContext } from "../DashboardChecker/DashboardContext";
import { ImSpinner6 } from "react-icons/im";

const SideBar = () => {
  const { unAuthenticate } = useContext(AuthContext);

  const {
    closeSideNav,
    setCloseSideNav,
    userModal,
    setUserModal,
    userData,
    clearDesigns,
  } = useContext(DashContext);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767) {
        setCloseSideNav(false);
      } else {
        setCloseSideNav(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const history = userData && userData.history ? userData.history : [];
  const sortedHistory = history.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  // Calculate day boundaries
  const todayBoundary = new Date();
  todayBoundary.setHours(0, 0, 0, 0); // Set to midnight
  const yesterdayBoundary = new Date(todayBoundary);
  yesterdayBoundary.setDate(todayBoundary.getDate() - 1);
  const pastSevenDaysBoundary = new Date(todayBoundary);
  pastSevenDaysBoundary.setDate(todayBoundary.getDate() - 7);

  return (
    <>
      <aside
        className={`${
          closeSideNav ? "block" : "hidden"
        } dashboard-navigation-darkmode w-[250px] h-screen max-md:border-r-[1px] max-md:border-[rgb(26,26,26)] max-md:fixed z-50 p-2 flex flex-col justify-between`}
      >
        <div>
          <div className="">
            <Link
              to="/home"
              className="flex justify-between items-center cursor-pointer select-none w-full mb-4 hover:bg-[rgb(33,33,33)] hover:border-[1px] rounded-[5px] hover:px-2 border-zinc-600 px-2 py-1"
              onClick={() => {
                clearDesigns();
              }}
            >
              <WebLogo />
              <FaRegEdit className="text-[rgb(236,236,236)] text-xl" />
            </Link>
            <button
              className="absolute top-[15px] right-[-40px] hidden max-md:block border-[2px] cursor-pointer"
              onClick={() => {
                setCloseSideNav(false);
              }}
            >
              <IoCloseSharp className="text-[1.6rem]" />
            </button>
          </div>

          {/* <button className="flex w-full mb-4 border-zinc-600 border-[1px] px-2 py-2 rounded-[5px] bg-[rgba(9,9,9,0.5)] capitalize">
            Manually create site
          </button> */}

          <Link
            to="/site"
            className="font-semibold text-xl flex justify-between items-center text-[rgb(201,209,217)] hover:bg-[rgb(33,33,33)] hover:border-[1px] rounded-[5px] hover:px-2 border-zinc-600 px-2 py-1"
            onClick={() => {
              clearDesigns();
            }}
          >
            Site <FaChevronRight className="text-lg" />
          </Link>
        </div>

        <div className="h-full overflow-y-hidden hover:overflow-y-scroll">
          {userData === undefined ? (
            <div className="flex justify-center items-center h-full">
              <ImSpinner6 className="animate-spin text-2xl text-white" />
            </div>
          ) : history.length === 0 ? (
            <div className="flex justify-center items-center h-full">
              <p>No History</p>
            </div>
          ) : (
            <div className="history my-4">
              {sortedHistory.some(
                (item) => new Date(item.createdAt) >= todayBoundary
              ) && (
                <div className="mb-5">
                  <p className="text-sm font-semibold text-[rgb(201,209,217)] mb-2">
                    Today
                  </p>
                  <div>
                    {sortedHistory
                      .filter(
                        (item) => new Date(item.createdAt) >= todayBoundary
                      )
                      .map((item) => (
                        <Link
                          to={`/site/preview/${item._id}`}
                          key={item._id}
                          className="my-2 w-[90%] overflow-hidden text-sm text-left text-ellipsis text-nowrap hover:bg-[rgb(33,33,33)] hover:border-[1px] rounded-[5px] border-zinc-600 px-2 py-2 cursor-pointer block"
                          onClick={() => {
                            clearDesigns();
                          }}
                        >
                          {item.prompt}
                        </Link>
                      ))}
                  </div>
                </div>
              )}

              {sortedHistory.some(
                (item) =>
                  new Date(item.createdAt) < todayBoundary &&
                  new Date(item.createdAt) >= yesterdayBoundary
              ) && (
                <div className="mb-5">
                  <p className="text-sm font-semibold text-[rgb(201,209,217)] mb-2">
                    Yesterday
                  </p>
                  <div>
                    {sortedHistory
                      .filter(
                        (item) =>
                          new Date(item.createdAt) < todayBoundary &&
                          new Date(item.createdAt) >= yesterdayBoundary
                      )
                      .map((item) => (
                        <Link
                          to={`/site/preview/${item._id}`}
                          key={item._id}
                          className="my-2 w-[90%] overflow-hidden text-sm text-left text-ellipsis text-nowrap hover:bg-[rgb(33,33,33)] hover:border-[1px] rounded-[5px] border-zinc-600 px-2 py-2 cursor-pointer block"
                          onClick={() => {
                            clearDesigns();
                          }}
                        >
                          {item.prompt}
                        </Link>
                      ))}
                  </div>
                </div>
              )}

              {sortedHistory.some(
                (item) =>
                  new Date(item.createdAt) < yesterdayBoundary &&
                  new Date(item.createdAt) >= pastSevenDaysBoundary
              ) && (
                <div className="mb-5">
                  <p className="text-sm font-semibold text-[rgb(201,209,217)]">
                    Past 7 days
                  </p>
                  <div>
                    {sortedHistory
                      .filter(
                        (item) =>
                          new Date(item.createdAt) < yesterdayBoundary &&
                          new Date(item.createdAt) >= pastSevenDaysBoundary
                      )
                      .map((item) => (
                        <Link
                          to={`/site/preview/${item._id}`}
                          key={item._id}
                          className="my-2 w-[90%] overflow-hidden text-sm text-left text-ellipsis text-nowrap hover:bg-[rgb(33,33,33)] hover:border-[1px] rounded-[5px] border-zinc-600 px-2 py-2 cursor-pointer block"
                          onClick={() => {
                            clearDesigns();
                          }}
                        >
                          {item.prompt}
                        </Link>
                      ))}
                  </div>
                </div>
              )}

              {sortedHistory.some(
                (item) => new Date(item.createdAt) <= pastSevenDaysBoundary
              ) && (
                <div className="mb-5">
                  <p className="text-sm font-semibold text-[rgb(201,209,217)]">
                    Past 30 days
                  </p>
                  <div>
                    {sortedHistory
                      .filter(
                        (item) =>
                          new Date(item.createdAt) <= pastSevenDaysBoundary
                      )
                      .map((item) => (
                        <Link
                          to={`/site/preview/${item._id}`}
                          key={item._id}
                          className="my-2 w-[90%] overflow-hidden text-sm text-left text-ellipsis text-nowrap hover:bg-[rgb(33,33,33)] hover:border-[1px] rounded-[5px] border-zinc-600 px-2 py-2 cursor-pointer block"
                          onClick={() => {
                            clearDesigns();
                          }}
                        >
                          {item.prompt}
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div
          className={`${
            userModal ? "flex" : "hidden"
          } bg-[rgb(36,37,40)] w-full max-w-[190px] max-lg:max-w-[175px] mx-auto flex-col items-start gap-2 border-zinc-600 border-[1px] px-2 py-1 rounded-[5px] max-md:hidden font-semibold fixed left-[0.7%] max-lg:left-[0.8%] bottom-20`}
        >
          <button className="flex items-center gap-1 w-full hover:px-1 border-zinc-600 hover:border-[1px] rounded-[5px] px-1 py-1 hover:bg-[rgb(33,33,33)]">
            <MdOutlineManageAccounts />
            Account
          </button>
          <button className="flex items-center gap-1 w-full hover:px-1 border-zinc-600 hover:border-[1px] rounded-[5px] px-1 py-1 hover:bg-[rgb(33,33,33)]">
            <IoSettingsOutline />
            Settings
          </button>
          <button className="flex items-center gap-1 w-full hover:px-1 border-zinc-600 hover:border-[1px] rounded-[5px] px-1 py-1 hover:bg-[rgb(33,33,33)]">
            Themes
          </button>
          <hr className="w-full" />
          <button
            className="flex items-center gap-1 w-full hover:px-1 border-zinc-600 hover:border-[1px] rounded-[5px] px-1 py-1 hover:bg-[rgb(33,33,33)]"
            onClick={() => {
              unAuthenticate();
              setUserModal(false);
              clearDesigns();
            }}
          >
            <CiLogout />
            Logout
          </button>
        </div>

        <button
          className="flex items-center gap-2 my-1 px-2 py-1 hover:bg-[rgb(33,33,33)] hover:px-2 border-zinc-600 hover:border-[1px] rounded-[5px]"
          onClick={() => {
            setUserModal(!userModal);
          }}
        >
          <span className="bg-[rgb(9,23,56)] flex justify-center items-center py-[0.4rem] px-[0.5rem] rounded-full uppercase">
            {userData && userData.fullname.slice(0, 2)}
          </span>
          <p className="w-[90%] md:w-full overflow-hidden text-ellipsis text-nowrap text-white">
            {userData && userData.fullname}
          </p>
        </button>
      </aside>
    </>
  );
};

export default SideBar;
