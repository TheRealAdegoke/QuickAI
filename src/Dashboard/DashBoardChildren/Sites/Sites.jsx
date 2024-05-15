import React, { createElement, useContext } from "react";
import { DashContext } from "../../DashboardChecker/DashboardContext";
import Dashboard from "../../Dashboard";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ImSpinner6 } from "react-icons/im";
import { Link } from "react-router-dom";

const Sites = () => {
  const { userData } = useContext(DashContext);

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
    <Dashboard>
      <main className="p-10 overflow-y-scroll h-[95%] max-sm:h-[90%]">
        {userData === undefined ? (
          <div className="flex justify-center items-center h-full">
            <ImSpinner6 className="animate-spin text-2xl text-white" />
          </div>
        ) : history.length === 0 ? (
          <div className="flex justify-center items-center h-full">
            <p>No History</p>
          </div>
        ) : (
          <div>
            <div className="mb-10">
              {sortedHistory.some(
                (item) => new Date(item.createdAt) >= todayBoundary
              ) && (
                <div className="mb-5">
                  <h1 className="text-lg font-semibold text-[rgb(201,209,217)] text-center">
                    Today
                  </h1>
                  <div className="flex flex-wrap max-lg:flex-col justify-center items-center gap-3">
                    {sortedHistory
                      .filter(
                        (item) => new Date(item.createdAt) >= todayBoundary
                      )
                      .map((item) => (
                        <div className="my-2 bg-white w-[30%] max-w-[350px] max-lg:w-[98%] max-lg:max-w-[400px] lg:h-[300px] h-[300px] rounded-[5px] border-[1px] border-[rgb(42,42,47)] relative overflow-hidden">
                          <Link
                            to={`/site/preview/${item._id}`}
                            key={item._id}
                            className="cursor-pointer"
                          >
                            <img
                              src={item.webDesignImagePreview}
                              alt=""
                              className="w-full block"
                            />
                          </Link>

                          <div className="bg-[rgb(9,11,14)] px-5 rounded-b-[3px] absolute bottom-0 w-full py-5 flex justify-between gap-5 items-center">
                            <span className="w-[80%] overflow-hidden text-ellipsis text-nowrap">
                              {item.prompt}
                            </span>
                            <span className="bg-[rgb(29,29,29)] flex items-center justify-center py-3 px-5 rounded-md cursor-pointer">
                              <BsThreeDotsVertical />
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mb-10">
              {sortedHistory.some(
                (item) =>
                  new Date(item.createdAt) < todayBoundary &&
                  new Date(item.createdAt) >= yesterdayBoundary
              ) && (
                <div className="mb-5">
                  <h1 className="text-lg font-semibold text-[rgb(201,209,217)] text-center">
                    Yesterday
                  </h1>

                  <div className="flex flex-wrap max-lg:flex-col justify-center items-center gap-3">
                    {sortedHistory
                      .filter(
                        (item) =>
                          new Date(item.createdAt) < todayBoundary &&
                          new Date(item.createdAt) >= yesterdayBoundary
                      )
                      .map((item) => (
                        <div className="my-2 bg-white w-[30%] max-w-[350px] max-lg:w-[98%] max-lg:max-w-[400px] lg:h-[300px] h-[300px] rounded-[5px] border-[1px] border-[rgb(42,42,47)] relative overflow-hidden">
                          <Link
                            to={`/site/preview/${item._id}`}
                            key={item._id}
                            className="cursor-pointer"
                          >
                            <img
                              src={item.webDesignImagePreview}
                              alt=""
                              className="w-full block"
                            />
                          </Link>

                          <div className="bg-[rgb(9,11,14)] px-5 rounded-b-[3px] absolute bottom-0 w-full py-5 flex justify-between gap-5 items-center">
                            <span className="w-[80%] overflow-hidden text-ellipsis text-nowrap">
                              {item.prompt}
                            </span>
                            <span className="bg-[rgb(29,29,29)] flex items-center justify-center py-3 px-5 rounded-md cursor-pointer">
                              <BsThreeDotsVertical />
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mb-10">
              {sortedHistory.some(
                (item) =>
                  new Date(item.createdAt) < yesterdayBoundary &&
                  new Date(item.createdAt) >= pastSevenDaysBoundary
              ) && (
                <div className="mb-5">
                  <h1 className="text-lg font-semibold text-[rgb(201,209,217)] text-center">
                    Past 7 Days
                  </h1>

                  <div className="flex flex-wrap max-lg:flex-col justify-center items-center gap-3">
                    {sortedHistory
                      .filter(
                        (item) =>
                          new Date(item.createdAt) < yesterdayBoundary &&
                          new Date(item.createdAt) >= pastSevenDaysBoundary
                      )
                      .map((item) => (
                        <div className="my-2 bg-white w-[30%] max-w-[350px] max-lg:w-[98%] max-lg:max-w-[400px] lg:h-[300px] h-[300px] rounded-[5px] border-[1px] border-[rgb(42,42,47)] relative overflow-hidden">
                          <Link
                            to={`/site/preview/${item._id}`}
                            key={item._id}
                            className="cursor-pointer"
                          >
                            <img
                              src={item.webDesignImagePreview}
                              alt=""
                              className="w-full block"
                            />
                          </Link>

                          <div className="bg-[rgb(9,11,14)] px-5 rounded-b-[3px] absolute bottom-0 w-full py-5 flex justify-between gap-5 items-center">
                            <span className="w-[80%] overflow-hidden text-ellipsis text-nowrap">
                              {item.prompt}
                            </span>
                            <span className="bg-[rgb(29,29,29)] flex items-center justify-center py-3 px-5 rounded-md cursor-pointer">
                              <BsThreeDotsVertical />
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mb-10">
              {sortedHistory.some(
                (item) => new Date(item.createdAt) <= pastSevenDaysBoundary
              ) && (
                <div className="mb-5">
                  <h1 className="text-lg font-semibold text-[rgb(201,209,217)] text-center">
                    Past 30 days
                  </h1>

                  <div className="flex flex-wrap max-lg:flex-col justify-center items-center gap-3">
                    {sortedHistory
                      .filter(
                        (item) =>
                          new Date(item.createdAt) <= pastSevenDaysBoundary
                      )
                      .map((item) => (
                        <div className="my-2 bg-white w-[30%] max-w-[350px] max-lg:w-[98%] max-lg:max-w-[400px] lg:h-[300px] h-[300px] rounded-[5px] border-[1px] border-[rgb(42,42,47)] relative overflow-hidden">
                          <Link
                            to={`/site/preview/${item._id}`}
                            key={item._id}
                            className="cursor-pointer"
                          >
                            <img
                              src={item.webDesignImagePreview}
                              alt=""
                              className="w-full block"
                            />
                          </Link>

                          <div className="bg-[rgb(9,11,14)] px-5 rounded-b-[3px] absolute bottom-0 w-full py-5 flex justify-between gap-5 items-center">
                            <span className="w-[80%] overflow-hidden text-ellipsis text-nowrap">
                              {item.prompt}
                            </span>
                            <span className="bg-[rgb(29,29,29)] flex items-center justify-center py-3 px-5 rounded-md cursor-pointer">
                              <BsThreeDotsVertical />
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </Dashboard>
  );
};

export default Sites;
