import React from "react";
import NavLogo from "../assets/Quick-logo-black.png";

const ModalWebLogo = () => {
  return (
    <>
      <div className="select-none">
        <img
          src={NavLogo}
          alt="Quick UI Image."
          className="w-[2.5rem] block select-none"
        />
      </div>
    </>
  );
};

export default ModalWebLogo;
