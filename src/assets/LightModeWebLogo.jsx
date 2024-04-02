import React from 'react'
import NavLogo from "../assets/Quick-logo-black.png";

const LightModeWebLogo = () => {
  return (
    <>
      <div className="flex items-center select-none">
        <img
          src={NavLogo}
          alt="Quick UI Image."
          className="w-[2.5rem] block select-none"
        />
        <p className="mt-[10px] ml-[-5px] font-bold text-[rgba(0,0,0,0.7)]">uickUI</p>
      </div>
    </>
  );
}

export default LightModeWebLogo