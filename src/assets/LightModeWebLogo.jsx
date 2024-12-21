import React from "react";

const LightModeWebLogo = () => {
  return (
    <>
      <div className="flex items-center select-none">
        <img
          src="https://res.cloudinary.com/dpyp7innp/image/upload/v1716557024/Quick-logo-black_txzcrv.png"
          alt="QuickUI Logo"
          title="QuickUI Logo"
          className="w-[2.5rem] block select-none"
          loading="lazy"
          width="40"
          height="40"
        />
        <p className="mt-[10px] ml-[-5px] font-bold text-[rgba(0,0,0,0.7)]">
          uickUI
        </p>
      </div>
    </>
  );
};

export default LightModeWebLogo;
