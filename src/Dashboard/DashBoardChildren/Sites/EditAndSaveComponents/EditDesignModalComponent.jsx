import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import testImage from "../../../../assets/Default-Card.jpg";
import { HeroImages } from "./HeroEditComponent";

const EditDesignModalComponent = ({
  displayEditModal,
  setDisplayEditModal,
  changeSection,
}) => {
  return (
    <>
      <div
        className={`${
          displayEditModal ? "block" : "hidden"
        } bg-[rgb(9,11,14)] w-[400px] h-[90vh] border-[1px] rounded-[8px] border-[rgba(255,255,255,0.3)] px-2 py-4 fixed top-[64px] left-[23%] z-50 overflow-scroll`}
      >
        <div className="flex justify-end fixed w-[370px]">
          <button
            onClick={() => {
              setDisplayEditModal(false);
            }}
            className="text-white font-semibold text-2xl"
          >
            <IoMdClose />
          </button>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 justify-evenly mx-auto">
          {changeSection}
        </div>
      </div>
    </>
  );
};

export default EditDesignModalComponent;
