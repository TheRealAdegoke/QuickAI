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

      <section className="text-black w-[90%] mx-auto my-24 flex max-lg:flex-col justify-between max-w-[1000px]">
        <div className="w-[45%] flex flex-col items-start gap-3 max-lg:w-full">
          <div className="">
            <h1 className="text-[#231e41] text-3xl font-bold mb-1">
              Your Amazing Feature Goes Here
            </h1>
            <p className="text-[#231e41]">
              Here's some more information about this amazing feature. You can
              use basic formatting and also multiple paragraphs.
            </p>
          </div>

          <div>
            <div className="flex gap-3 max-w-[400px] mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#231e41"
                width="50"
                height="50"
                viewBox="0 0 24 24"
              >
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
              </svg>

              <div className="mt-2">
                <h2 className="capitalize text-xl font-semibold text-[#231e41]">
                  Item One
                </h2>
                <p className="text-[#231e41]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum labore iure hic nemo ipsam totam veritatis provident
                  et aut quae?
                </p>
              </div>
            </div>

            <div className="flex gap-3 max-w-[400px] mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#231e41"
                width="50"
                height="50"
                viewBox="0 0 512 512"
              >
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg>

              <div className="mt-2">
                <h2 className="capitalize text-xl font-semibold text-[#231e41]">
                  Item two
                </h2>
                <p className="text-[#231e41]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum labore iure hic nemo ipsam totam veritatis provident
                  et aut quae?
                </p>
              </div>
            </div>

            <div className="flex gap-3 max-w-[400px] mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#231e41"
                width="50"
                height="50"
                viewBox="0 0 24 24"
              >
                <path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
              </svg>

              <div className="mt-2">
                <h2 className="capitalize text-xl font-semibold text-[#231e41]">
                  Features One
                </h2>
                <p className="text-[#231e41]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum labore iure hic nemo ipsam totam veritatis provident
                  et aut quae?
                </p>
              </div>
            </div>
          </div>

          <button className="capitalize flex text-white bg-[rgba(0,0,0,0.9)] px-8 py-2 rounded-full font-semibold text-sm my-3">
            Learn
          </button>
        </div>

        <div className="w-[50%] max-lg:w-full max-lg:mt-5">
          <div className="mx-auto relative my-10">
            <div className="bg-[linear-gradient(314deg,#212529_70%,#484e53_100%)] w-[80%] max-w-[400px] max-md:w-[80%] lg:w-[85%] max-md:max-w-[400px] h-[250px] mx-auto rounded-t-2xl flex justify-center items-center">
              <img
                src={testCard}
                alt=""
                className="h-[230px] w-[95%] rounded-t-2xl block object-cover"
              />
            </div>
            <div>
              <div className="bg-[linear-gradient(0deg,#212529_0%,#484e53_100%)] w-[95%] lg:w-full max-w-[500px] max-md:w-[100%] max-md:max-w-[500px] h-[20px] mx-auto rounded-b-xl">
                <div className="bg-[#868e96] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] w-[100px] h-[10px] mx-auto rounded-b-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TestDesignModal;