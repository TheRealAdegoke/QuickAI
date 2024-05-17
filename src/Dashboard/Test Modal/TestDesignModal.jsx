/* This is modal is used for building designs, to use this modal follow the instructions below

1 Import the TestDesignModal component on the Dashboard.jsx component located on the Dashboard folder which is the parent folder of this component

2 This component should be called below this code 
<div className="flex justify-center">
    {showDesignModal ? <DesignModal /> : <AIGenerator />}
</div>
in the Dashboard.jsx component

3 Please always make sure this import TestDesignModal from "./Test Modal/TestDesignModal" and 
<div className="flex justify-center">
    {testDesignModal && <TestDesignModal />}
</div> on the Dashboard.jsx component is commented before pushing to production

4 This component should only be used on development

Steps on how to use this component

1 First import this component on the Dashboard.jsx component

2 Let's say you are designing a Hero section the Hero section component should be called in the <main></main> so you will be able to see your design

3 To display the modal go to the DashboardContext.jsx file and set the const [testDesignModal, setTestDesignModal] = useState(true). Do not forget to set it back to false once you are done working with the TestDesignModal component

NB: <TestDesignModal/> should be completely removed from the Dashboard.jsx component before pushing to production

*/

import { TestNavOne, TestNavTwo, TestNavThree } from "./TestNav";
import testCard from ".././../assets/Default-Card.jpg"


const TestDesignModal = () => {
  return (
    <main
      className={`bg-white w-full mt-5 max-md:mt-0 mx-10 h-[93vh] max-md:h-[89vh] max-[499px]:mx-4 overflow-scroll overflow-x-hidden`}
    >
      <section className="mt-10 flex max-lg:flex-col max-lg:w-[90%] items-center justify-between lg:px-5 max-w-[1000px] mx-auto max-lg:max-w-[600px]">
        <div className="mb-10 w-[50%] max-lg:w-full">
          <h1 className="text-[#231e41] max-lg:text-center text-6xl max-sm:text-5xl max-w-[650px] max-sm:max-w-[400px] font-semibold mb-6 max-lg:mx-auto">
            we create your emotions!
          </h1>
          <p className="text-[#231e41] text-sm max-lg:text-ce3ter max-w-[300px] max-md:w-[90%] max-lg:w-[45%] max-lg:mx-auto font-medium mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
            repudiandae aspernatur veritatis
          </p>
          <div className="flex gap-5 max-lg:justify-center">
            <button className="text-[#231e41] font-semibold bg-[#f5c332] px-7 py-2 flex items-center justify-center">
              Our menu
            </button>
            <button className="text-[#231e41] font-semibold bg-white px-7 py-2 flex items-center justify-center gap-3">
              <span className="bg-[#f8f9fa] rounded-full p-1">
                <img
                  src="https://starbelly-react.vercel.app/img/ui/icons/arrow.svg"
                  alt=""
                  className="w-[20px]"
                />
              </span>
              About us
            </button>
          </div>
        </div>

        <div className="w-[45%] max-lg:w-full relative">
          <img
            src={testCard}
            alt=""
            className="block rounded-full w-[350px] h-[350px] mx-auto object-cover"
          />
        </div>
      </section>
      <section className="text-black my-14 w-[90%] max-w-[1000px] mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-[#212529] mb-2">OUR Team</h1>
          <p>
            Get to know an amazing group of People on a mission to make a
            difference.
          </p>
        </div>

        <div className="flex flex-wrap max-md:flex-col gap-4">
          <div className="bg-white border-solid shadow-2xl text-black rounded-2xl w-[90%] lg:w-[30%] max-w-[350px] mx-auto py-5">
            <div className="w-[90%] mx-auto">
              <img
                src={testCard}
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
                  class="um-icon _ed8fbb90"
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
                  class="um-icon _ed8fbb90"
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
                src={testCard}
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
                  class="um-icon _ed8fbb90"
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
                  class="um-icon _ed8fbb90"
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
                src={testCard}
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
                  class="um-icon _ed8fbb90"
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
                  class="um-icon _ed8fbb90"
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
      </section>
      ,
    </main>
  );
};

export default TestDesignModal;