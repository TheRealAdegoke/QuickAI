export const teamComponent = ({ text }) => {
  return [
    <section className="text-black my-40 w-[90%] max-w-[1000px] mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-[#212529] mb-2">
          {text.teamHeader[0]}
        </h1>
        <p>{text.teamParagraphTexts[0]}</p>
      </div>

      <div className="flex flex-wrap max-md:flex-col gap-4">
        <div className="bg-gradient-to-t from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-white rounded-2xl w-[90%] lg:w-[30%] max-w-[350px] mx-auto py-5">
          <div className="w-[90%] mx-auto">
            <img
              src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
              alt=""
              className="block w-full h-[250px] mx-auto object-cover rounded-lg"
            />
          </div>

          <div className="text-center mt-4 px-8">
            <h1 className="font-semibold">Gabriel</h1>
            <p>Founder</p>
            <div className="flex gap-3 justify-center my-3">
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
            </div>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-t from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-white rounded-2xl w-[90%] lg:w-[30%] max-w-[350px] mx-auto py-5">
          <div className="w-[90%] mx-auto">
            <img
              src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
              alt=""
              className="block w-full h-[250px] mx-auto object-cover rounded-lg"
            />
          </div>

          <div className="text-center mt-4 px-8">
            <h1 className="font-semibold">Gabriel</h1>
            <p>Founder</p>
            <div className="flex gap-3 justify-center my-3">
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
            </div>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-t from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-white rounded-2xl w-[90%] lg:w-[30%] max-w-[350px] mx-auto py-5">
          <div className="w-[90%] mx-auto">
            <img
              src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
              alt=""
              className="block w-full h-[250px] mx-auto object-cover rounded-lg"
            />
          </div>

          <div className="text-center mt-4 px-8">
            <h1 className="font-semibold">Gabriel</h1>
            <p>Founder</p>
            <div className="flex gap-3 justify-center my-3">
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
            </div>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
      </div>
    </section>,
    <section className="text-black my-40 w-[90%] max-w-[1000px] mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-[#212529] mb-2">
          {text.teamHeader[0]}
        </h1>
        <p>{text.teamParagraphTexts[0]}</p>
      </div>

      <div className="flex flex-wrap max-md:flex-col gap-4">
        <div className="bg-white border-solid shadow-2xl text-black rounded-2xl w-[90%] lg:w-[30%] max-w-[350px] mx-auto py-5">
          <div className="w-[90%] mx-auto">
            <img
              src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
              alt=""
              className="block w-full h-[250px] mx-auto object-cover rounded-lg"
            />
          </div>

          <div className="text-center mt-4 px-8">
            <h1 className="font-semibold">Gabriel</h1>
            <p>Founder</p>
            <div className="flex gap-3 justify-center my-3">
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
            </div>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>

        <div className="bg-white border-solid shadow-2xl text-black rounded-2xl w-[90%] lg:w-[30%] max-w-[350px] mx-auto py-5">
          <div className="w-[90%] mx-auto">
            <img
              src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
              alt=""
              className="block w-full h-[250px] mx-auto object-cover rounded-lg"
            />
          </div>

          <div className="text-center mt-4 px-8">
            <h1 className="font-semibold">Gabriel</h1>
            <p>Founder</p>
            <div className="flex gap-3 justify-center my-3">
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
            </div>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>

        <div className="bg-white border-solid shadow-2xl text-black rounded-2xl w-[90%] lg:w-[30%] max-w-[350px] mx-auto py-5">
          <div className="w-[90%] mx-auto">
            <img
              src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
              alt=""
              className="block w-full h-[250px] mx-auto object-cover rounded-lg"
            />
          </div>

          <div className="text-center mt-4 px-8">
            <h1 className="font-semibold">Gabriel</h1>
            <p>Founder</p>
            <div className="flex gap-3 justify-center my-3">
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
            </div>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
      </div>
    </section>,
    <section className="text-black my-40 w-[90%] max-w-[1000px] mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-[#212529] mb-2">
          {text.teamHeader[0]}
        </h1>
        <p>{text.teamParagraphTexts[0]}</p>
      </div>

      <div className="flex flex-wrap max-md:flex-col gap-4">
        <div className="bg-gradient-to-t from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-white rounded-2xl w-[90%] lg:w-[30%] max-w-[350px] mx-auto py-5">
          <div className="w-[90%] mx-auto">
            <img
              src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
              alt=""
              className="block w-[150px] h-[150px] mx-auto object-cover rounded-full"
            />
          </div>

          <div className="text-center mt-4 px-8">
            <h1 className="font-semibold">Gabriel</h1>
            <p>Founder</p>
            <div className="flex gap-3 justify-center my-3">
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
            </div>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-t from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-white rounded-2xl w-[90%] lg:w-[30%] max-w-[350px] mx-auto py-5">
          <div className="w-[90%] mx-auto">
            <img
              src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
              alt=""
              className="block w-[150px] h-[150px] mx-auto object-cover rounded-full"
            />
          </div>

          <div className="text-center mt-4 px-8">
            <h1 className="font-semibold">Gabriel</h1>
            <p>Founder</p>
            <div className="flex gap-3 justify-center my-3">
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
            </div>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-t from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-white rounded-2xl w-[90%] lg:w-[30%] max-w-[350px] mx-auto py-5">
          <div className="w-[90%] mx-auto">
            <img
              src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
              alt=""
              className="block w-[150px] h-[150px] mx-auto object-cover rounded-full"
            />
          </div>

          <div className="text-center mt-4 px-8">
            <h1 className="font-semibold">Gabriel</h1>
            <p>Founder</p>
            <div className="flex gap-3 justify-center my-3">
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
            </div>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
      </div>
    </section>,
    <section className="text-black my-40 w-[90%] max-w-[1000px] mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-[#212529] mb-2">
          {text.teamHeader[0]}
        </h1>
        <p>{text.teamParagraphTexts[0]}</p>
      </div>

      <div className="flex flex-wrap max-md:flex-col gap-4">
        <div className="bg-white border-solid shadow-2xl text-black rounded-2xl w-[90%] lg:w-[30%] max-w-[350px] mx-auto py-5">
          <div className="w-[90%] mx-auto">
            <img
              src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
              alt=""
              className="block w-[150px] h-[150px] mx-auto object-cover rounded-full"
            />
          </div>

          <div className="text-center mt-4 px-8">
            <h1 className="font-semibold">Gabriel</h1>
            <p>Founder</p>
            <div className="flex gap-3 justify-center my-3">
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
            </div>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>

        <div className="bg-white border-solid shadow-2xl text-black rounded-2xl w-[90%] lg:w-[30%] max-w-[350px] mx-auto py-5">
          <div className="w-[90%] mx-auto">
            <img
              src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
              alt=""
              className="block w-[150px] h-[150px] mx-auto object-cover rounded-full"
            />
          </div>

          <div className="text-center mt-4 px-8">
            <h1 className="font-semibold">Gabriel</h1>
            <p>Founder</p>
            <div className="flex gap-3 justify-center my-3">
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
            </div>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>

        <div className="bg-white border-solid shadow-2xl text-black rounded-2xl w-[90%] lg:w-[30%] max-w-[350px] mx-auto py-5">
          <div className="w-[90%] mx-auto">
            <img
              src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
              alt=""
              className="block w-[150px] h-[150px] mx-auto object-cover rounded-full"
            />
          </div>

          <div className="text-center mt-4 px-8">
            <h1 className="font-semibold">Gabriel</h1>
            <p>Founder</p>
            <div className="flex gap-3 justify-center my-3">
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
            </div>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
      </div>
    </section>,
    <section className="text-black my-40 w-[90%] max-w-[1000px] mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-[#212529] mb-2">
          {text.teamHeader[0]}
        </h1>
        <p>{text.teamParagraphTexts[0]}</p>
      </div>

      <div className="flex flex-wrap max-md:flex-col gap-4">
        <div className="bg-gradient-to-t from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-white rounded-2xl w-[90%] lg:w-[30%] max-w-[350px] mx-auto py-5">
          <div className="w-[90%] mx-auto">
            <img
              src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
              alt=""
              className="block w-full h-[250px] mx-auto object-cover rounded-lg"
            />
          </div>

          <div className="text-left mt-4 px-8">
            <h1 className="font-semibold">Gabriel</h1>
            <p>Founder</p>
            <div className="flex gap-3 justify-start my-3">
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
            </div>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-t from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-white rounded-2xl w-[90%] lg:w-[30%] max-w-[350px] mx-auto py-5">
          <div className="w-[90%] mx-auto">
            <img
              src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
              alt=""
              className="block w-full h-[250px] mx-auto object-cover rounded-lg"
            />
          </div>

          <div className="text-left mt-4 px-8">
            <h1 className="font-semibold">Gabriel</h1>
            <p>Founder</p>
            <div className="flex gap-3 justify-start my-3">
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
            </div>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-t from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] text-white rounded-2xl w-[90%] lg:w-[30%] max-w-[350px] mx-auto py-5">
          <div className="w-[90%] mx-auto">
            <img
              src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
              alt=""
              className="block w-full h-[250px] mx-auto object-cover rounded-lg"
            />
          </div>

          <div className="text-left mt-4 px-8">
            <h1 className="font-semibold">Gabriel</h1>
            <p>Founder</p>
            <div className="flex gap-3 justify-start my-3">
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
            </div>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
      </div>
    </section>,
    <section className="text-black my-40 w-[90%] max-w-[1000px] mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-[#212529] mb-2">
          {text.teamHeader[0]}
        </h1>
        <p>{text.teamParagraphTexts[0]}</p>
      </div>

      <div className="flex flex-wrap max-md:flex-col gap-4">
        <div className="bg-white border-solid shadow-2xl text-black rounded-2xl w-[90%] lg:w-[30%] max-w-[350px] mx-auto py-5">
          <div className="w-[90%] mx-auto">
            <img
              src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
              alt=""
              className="block w-full h-[250px] mx-auto object-cover rounded-lg"
            />
          </div>

          <div className="text-left mt-4 px-8">
            <h1 className="font-semibold">Gabriel</h1>
            <p>Founder</p>
            <div className="flex gap-3 justify-start my-3">
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
            </div>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>

        <div className="bg-white border-solid shadow-2xl text-black rounded-2xl w-[90%] lg:w-[30%] max-w-[350px] mx-auto py-5">
          <div className="w-[90%] mx-auto">
            <img
              src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
              alt=""
              className="block w-full h-[250px] mx-auto object-cover rounded-lg"
            />
          </div>

          <div className="text-left mt-4 px-8">
            <h1 className="font-semibold">Gabriel</h1>
            <p>Founder</p>
            <div className="flex gap-3 justify-start my-3">
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
            </div>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>

        <div className="bg-white border-solid shadow-2xl text-black rounded-2xl w-[90%] lg:w-[30%] max-w-[350px] mx-auto py-5">
          <div className="w-[90%] mx-auto">
            <img
              src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
              alt=""
              className="block w-full h-[250px] mx-auto object-cover rounded-lg"
            />
          </div>

          <div className="text-left mt-4 px-8">
            <h1 className="font-semibold">Gabriel</h1>
            <p>Founder</p>
            <div className="flex gap-3 justify-start my-3">
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
            </div>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
      </div>
    </section>,
  ];
};
