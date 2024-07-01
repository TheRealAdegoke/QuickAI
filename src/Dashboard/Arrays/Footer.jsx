export const footerComponent = ({ text, isMobile }) => {
  return [
    <footer
      className={`${
        isMobile ? "flex-col items-start gap-10" : ""
      } border-t-[1px] py-14 flex max-md:flex-col max-md:items-start max-md:gap-10 justify-center items-center bg-white max-md:pl-5`}
    >
      <div className="flex flex-col justify-start items-start w-[20%]">
        <div className="text-black">© 2024 Your Company</div>
        <p className="font-bold text-[rgb(42,42,47)] text-3xl">
          {text.webLogo}
        </p>
        <div className="text-black flex gap-2 mt-3">
          <a href="https://www.linkedin.com/in/gabriel-adewale-adegoke/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="24"
              height="24"
              className=""
            >
              <path
                d="M416 32H31.9A32.1 32.1 0 0 0 0 64.3v383.4A32.1 32.1 0 0 0 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3A32.2 32.2 0 0 0 416 32zM135.4 416H69V202.2h66.5V416zm-33.2-243a38.5 38.5 0 1 1 0-77 38.5 38.5 0 0 1 0 77zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                fill="currentColor"
              ></path>
            </svg>
          </a>

          <a href="https://twitter.com/TheReal_Adegoke">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="24"
              height="24"
              className=""
            >
              <path
                d="M459.4 151.7c.3 4.6.3 9.1.3 13.7 0 138.7-105.6 298.5-298.6 298.5A296.5 296.5 0 0 1 0 417a217 217 0 0 0 25.3 1.2c49 0 94.3-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8a111 111 0 0 0 47.4-2 105 105 0 0 1-84.1-103v-1.2c14 7.8 30.2 12.6 47.4 13.3A104.9 104.9 0 0 1 35.7 67.2a298.3 298.3 0 0 0 216.4 109.9 104.9 104.9 0 0 1 179-95.8 206.6 206.6 0 0 0 66.6-25.4 104.7 104.7 0 0 1-46.1 57.8c21-2.3 41.6-8.1 60.4-16.2a225.6 225.6 0 0 1-52.6 54.2z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <div
        className={`${
          isMobile ? "flex-col gap-10" : ""
        } text-[rgb(42,42,47)] flex max-md:flex-col max-md:gap-10 justify-evenly w-[70%]`}
      >
        <div>
          <h2 className="font-semibold">Features</h2>
          <div>
            <p className="cursor-pointer hover:underline text-sm">
              Something Great
            </p>
            <p className="cursor-pointer hover:underline text-sm">
              Another Thing
            </p>
            <p className="cursor-pointer hover:underline text-sm">
              So many Features
            </p>
            <p className="cursor-pointer hover:underline text-sm">
              It's Amazing
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-semibold">Company</h2>
          <div>
            <p className="cursor-pointer hover:underline text-sm">Blog</p>
            <p className="cursor-pointer hover:underline text-sm">About Us</p>
            <p className="cursor-pointer hover:underline text-sm">Contact</p>
            <p className="cursor-pointer hover:underline text-sm">Jobs</p>
          </div>
        </div>

        <div>
          <h2 className="font-semibold">Legal</h2>
          <div>
            <p className="cursor-pointer hover:underline text-sm">
              Privacy Policy
            </p>
            <p className="cursor-pointer hover:underline text-sm">
              Terms of Use
            </p>
            <p className="cursor-pointer hover:underline text-sm">
              Cookie Policy
            </p>
          </div>
        </div>
      </div>
    </footer>,
  ];
};
