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

import { useContext, useEffect, useRef, useState } from "react";
import { DashContext } from "../DashboardChecker/DashboardContext";
import testImage from "../../assets/Default-Card.jpg";
import reactElementToJSXString from "react-element-to-jsx-string";

const TestDesignModal = () => {
  const {
    showDesignModal,
    heroIndex,
    navIndex,
    featuresWithCardIndex,
    featuresIndex,
    testimonialIndex,
    faqIndex,
    teamIndex,
    contactIndex,
    footerIndex,
    navComponents,
    heroComponents,
    featuresWithCardsComponent,
    featuresComponents,
    testimonialComponent,
    faqComponent,
    teamComponent,
    contactComponent,
    footerComponent,
    userInput,
    selectedIdea,
    handleUserData,
    clearDesigns,
    text,
    buttonIndex,
    isMobile,
    setIsMobile,
  } = useContext(DashContext);
  const [textAreaContent, setTextAreaContent] = useState("");
  const [selectedElement, setSelectedElement] = useState(null);
  const resizableRef = useRef(null);
  const [isResizingRight, setIsResizingRight] = useState(false);
  const [isResizingLeft, setIsResizingLeft] = useState(false);
  const [initialWidth, setInitialWidth] = useState(0);
  const [initialX, setInitialX] = useState(0);
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  // const handleMobileToggle = () => {
  //   setIsMobile(!isMobile);
  // };

  const handleTextClick = (element) => {
    setSelectedElement(element);
    setTextAreaContent(element.innerText);
  };

  const handleTextareaChange = (e) => {
    setTextAreaContent(e.target.value);
    if (selectedElement) {
      selectedElement.innerText = e.target.value;
    }
  };

  const isLargeScreen = () => window.innerWidth >= 1024;

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseDownRight = (e) => {
    if (isLargeScreen()) {
      setIsResizingRight(true);
      setInitialWidth(resizableRef.current.clientWidth);
      setInitialX(e.clientX);
    }
  };

  const handleMouseDownLeft = (e) => {
    if (isLargeScreen()) {
      setIsResizingLeft(true);
      setInitialWidth(resizableRef.current.clientWidth);
      setInitialX(e.clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isResizingRight) {
      const deltaX = e.clientX - initialX;
      const newWidth = initialWidth + deltaX;
      if (newWidth >= 270) {
        resizableRef.current.style.width = `${newWidth}px`;
      } if (newWidth < 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    } else if (isResizingLeft) {
      const deltaX = initialX - e.clientX;
      const newWidth = initialWidth + deltaX;
      if (newWidth >= 270) {
        resizableRef.current.style.width = `${newWidth}px`;
      } if (newWidth < 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
  };

  const handleMouseUp = () => {
    setIsResizingRight(false);
    setIsResizingLeft(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizingRight, isResizingLeft]);

  const navElement = navComponents({
    text,
    buttonIndex,
    isMobile,
    handleTextClick,
  })[0];
  const element = testimonialComponent({
    text,
    buttonIndex,
    isMobile,
    handleTextClick,
  })[8];

  return (
    <main className="bg-white w-full mt-5 max-md:mt-0 mx-10 h-[93vh] max-md:h-[89vh] max-[499px]:mx-4 overflow-scroll overflow-x-hidden pt-14 select-none">
      <div>
        <textarea
          name=""
          id=""
          value={textAreaContent}
          onChange={handleTextareaChange}
          className="border-red-950 border-2 text-black w-[300px] h-[50px] fixed"
        ></textarea>
      </div>


      <div className="min-h-screen flex flex-col items-center gap-6 px-10 mt-16">
        <div
          ref={resizableRef}
          className="bg-white rounded-xl border-[1px] w-[90%] h-[500px] mx-auto relative"
        >
          <div
            className="absolute top-1/2 right-[-9px] transform -translate-x-1/2 -translate-y-1/2  w-2 h-[50px] cursor-ew-resize bg-[rgba(0,0,0,0.8)] rounded-t-[8px] rounded-b-[8px] max-lg:hidden z-50"
            onMouseDown={handleMouseDownRight}
          ></div>
          <div
            className="absolute top-1/2 left-[0px]  transform -translate-x-1/2 -translate-y-1/2 w-2 h-[50px] cursor-ew-resize bg-[rgba(0,0,0,0.8)] rounded-t-[8px] rounded-b-[8px] max-lg:hidden z-50"
            onMouseDown={handleMouseDownLeft}
          ></div>
          <div className="overflow-y-scroll h-full">
            {navElement}
            {element}
          </div>
        </div>
      </div>
      {/* {element} */}
    </main>
  );
};

export default TestDesignModal;


{
  /* <div>
        <textarea
          name=""
          id=""
          value={textAreaContent}
          onChange={handleTextareaChange}
          className="border-red-950 border-2 text-black w-[300px] h-[50px] fixed"
        ></textarea>
      </div>

      <section className="h-[600px] max-lg:h-[750px] my-5 flex lg:gap-8 lg:justify-evenly max-lg:flex-col max-w-[1200px] mx-auto lg:pl-5">
        <div className="text-[rgb(33,37,41)] w-[40%] max-lg:w-[90%] max-w-[500px] mx-auto lg:pt-16">
          <h1
            className="font-bold xl:text-5xl text-3xl mb-4 cursor-pointer"
            onClick={(e) => handleTextClick(e.target)}
          >
            QUICKUI
          </h1>
          <p
            className="font-medium cursor-pointer"
            onClick={(e) => handleTextClick(e.target)}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis animi ipsa ipsam amet sit! Doloremque labore tempora
            nihil quam consequatur atque nostrum! Distinctio sapiente, laborum
            et dignissimos ratione obcaecati velit!
          </p>
          <div className="my-3 flex max-lg:justify-center gap-3">
            <button className="py-3 px-4 bg-[rgba(0,0,0,0.9)] text-white shadow-lg hover:bg-[rgba(0,0,0,0.7)] rounded-full font-semibold min-w-[120px]">
              Test
            </button>
            <button className="py-3 px-4 bg-[rgba(0,0,0,0.9)] text-white shadow-lg hover:bg-[rgba(0,0,0,0.7)] rounded-full font-semibold min-w-[120px]">
              Test
            </button>
          </div>
        </div>
        <div className="relative w-[55%] h-full max-lg:w-full max-lg:max-w-[500px] max-lg:mx-auto">
          <div className="w-[250px] h-[400px] bg-[rgb(33,37,41)] rounded-[35px] px-3 pt-3 mb-4 absolute top-2 max-lg:left-[35%] max-lg:transform max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 max-lg:top-1/2 max-xl:top-2 max-xl:right-32 z-20">
            <img
              src={testImage}
              alt={testImage}
              className="h-[350px] rounded-[35px] object-cover"
            />
          </div>
          <div className="w-[260px] h-[480px] bg-[rgb(33,37,41)] rounded-[35px] px-3 pt-3 absolute max-lg:left-[60%] max-lg:transform max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 max-lg:top-1/2 top-[7%] right-0 xl:right-[28%] z-10">
            <img
              src={testImage}
              alt={testImage}
              className="h-[420px] rounded-[35px] object-cover"
            />
          </div>
          <div className="w-[260px] h-[450px] bg-[rgb(33,37,41)] rounded-[35px] px-3 py-3 absolute top-14 right-5 max-xl:hidden">
            <img
              src={testImage}
              alt={testImage}
              className="h-full rounded-[35px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="text-black w-[90%] mx-auto my-24 flex max-lg:flex-col justify-between max-w-[1000px]">
        <div className="w-[50%] flex flex-col items-start gap-3 max-lg:w-full">
          <div className="">
            <h1
              className="text-[#231e41] text-3xl font-bold mb-1"
              onClick={(e) => handleTextClick(e.target)}
            >
              Feature header
            </h1>
            <p
              className="text-[#231e41]"
              onClick={(e) => handleTextClick(e.target)}
            >
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
                <h2
                  className="capitalize text-xl font-semibold text-[#231e41]"
                  onClick={(e) => handleTextClick(e.target)}
                >
                  Item One
                </h2>
                <p
                  className="text-[#231e41]"
                  onClick={(e) => handleTextClick(e.target)}
                >
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
                <h2
                  className="capitalize text-xl font-semibold text-[#231e41]"
                  onClick={(e) => handleTextClick(e.target)}
                >
                  Item two
                </h2>
                <p
                  className="text-[#231e41]"
                  onClick={(e) => handleTextClick(e.target)}
                >
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
                <h2
                  className="capitalize text-xl font-semibold text-[#231e41]"
                  onClick={(e) => handleTextClick(e.target)}
                >
                  Features One
                </h2>
                <p
                  className="text-[#231e41]"
                  onClick={(e) => handleTextClick(e.target)}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum labore iure hic nemo ipsam totam veritatis provident
                  et aut quae?
                </p>
              </div>
            </div>
          </div>

          <button
            className="capitalize flex text-white bg-[rgba(0,0,0,0.9)] px-8 py-2 rounded-full font-semibold text-sm my-3"
            onClick={(e) => handleTextClick(e.target)}
          >
            test
          </button>
        </div>

        <div className="w-[40%] max-lg:w-full max-lg:mt-5">
          <img
            src={testImage}
            alt={testImage}
            className="block h-[550px] mx-auto object-cover rounded-xl"
          />
        </div>
      </section> */
}
