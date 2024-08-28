import React, { useContext, useEffect, useMemo, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { DashContext } from "../../../DashboardChecker/DashboardContext";
import { ColorPickerComponent } from "./ColorPicker";
import EditContentComponent from "./EditContentComponent";

const EditDesignModalComponent = () => {
  const {
    setDisplayEditModal,
    setBackGroundStyle,
    setSelectedDiv,
    isContent,
    setIsContent,
  } = useContext(DashContext);

  useEffect(() => {
    if (setIsContent) {
      setSelectedDiv(null);
    }
  }, [setIsContent]);

  return (
    <>
      <div className={`flex flex-col justify-between gap-3 pt-4`}>
        <div className="flex items-center gap-5 px-2">
          <button
            onClick={() => {
              setDisplayEditModal(false);
              setSelectedDiv(null);
              setIsContent(true);
            }}
            className="text-white font-semibold text-2xl w-[50px] border-[rgba(255,255,255,0.5)] border-[1px] px-2 py-1 rounded-[5px] flex justify-center"
          >
            <IoIosArrowRoundBack />
          </button>
        </div>

        <div className="h-[69vh]">
          <div className="overflow-y-scroll ">
              <div className="w-full py-3 pl-3 overflow-hidden">
                <div className="flex justify-between mb-2 max-w-[200px] mx-auto text-[rgb(145,151,155)] font-medium px-3 py-1 rounded-[5px] text-sm">
                  <button
                    className={`${
                      isContent ? "bg-[rgb(36,37,40)] rounded-[5px]" : ""
                    } px-2 py-1`}
                    onClick={() => {
                      setIsContent(true);
                      setSelectedDiv(null);
                    }}
                  >
                    Content
                  </button>
                  <button
                    className={`${
                      isContent ? "" : "bg-[rgb(36,37,40)] rounded-[5px]"
                    } px-2 py-1`}
                    onClick={() => {
                      setIsContent(false);
                    }}
                  >
                    Background
                  </button>
                </div>

                {isContent ? (
                  <div>
                    <EditContentComponent />
                  </div>
                ) : (
                  <div className="mb-4">
                    <ColorPickerComponent
                      setBackGroundStyle={setBackGroundStyle}
                    />
                  </div>
                )}
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditDesignModalComponent;
