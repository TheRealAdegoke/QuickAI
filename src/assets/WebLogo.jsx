import React from 'react'
import NavLogo from "../assets/NavLogo.png";

const WebLogo = () => {
  return (
    <>
      <div className='flex items-center'>
        <img
          src={NavLogo}
          alt="Quick UI Image."
          className="w-[2.5rem] block select-none"
        />
        <p className='mt-[10px] ml-[-5px] font-bold'>uickUI</p>
      </div>
    </>
  );
}

export default WebLogo