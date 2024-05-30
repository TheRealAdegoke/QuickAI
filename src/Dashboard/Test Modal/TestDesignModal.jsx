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
import testCard from ".././../assets/Default-Card.jpg";
import { useContext } from "react";
import { DashContext } from "../DashboardChecker/DashboardContext";

const TestDesignModal = () => {
  const { text } = useContext(DashContext);
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

      <section className="my-32 text-black w-[90%] max-w-[800px] max-lg:max-w-[600px] mx-auto">
        <div className="w-full bg-white text-black p-5  rounded-xl shadow-2xl">
          <h1 className="text-3xl font-semibold mb-5">Contact</h1>

          <form action="" className="my-8 text-black">
            <input
              type="text"
              className="border-solid border-[1px] border-black block w-full h-[40px] pl-2 mb-3 bg-transparent border-t-0 border-l-0 border-r-0 outline-none"
              placeholder="Enter your name"
            />
            <input
              type="text"
              className="border-solid border-[1px] border-black block w-full h-[40px] pl-2 mb-3 bg-transparent border-t-0 border-l-0 border-r-0 outline-none"
              placeholder="Enter your email"
            />
            <textarea
              className="border-solid border-[1px] border-black block w-full pl-2 mb-3 pt-2 bg-transparent border-t-0 border-l-0 border-r-0 outline-none"
              placeholder="Enter your message"
              rows={5}
            ></textarea>
            <button
              type="submit"
              className="px-8 py-2 bg-black text-white font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default TestDesignModal;
