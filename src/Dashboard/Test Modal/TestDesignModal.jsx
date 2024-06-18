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

const TestDesignModal = () => {
  const { text } = useContext(DashContext);
  const [editableContent, setEditableContent] = useState("");

  const handleContentChange = (event) => {
    setEditableContent(event.target.innerText);
  };

  return (
    <main className="bg-white w-full mt-5 max-md:mt-0 mx-10 h-[93vh] max-md:h-[89vh] max-[499px]:mx-4 overflow-scroll overflow-x-hidden pt-14">
      <div className="h-[60%] w-[95%] mx-auto my-10 overflow-y-scroll">
        <div
          className="text-black w-full h-full rounded-xl border-[1px] outline-none"
          contentEditable={true}
          onInput={handleContentChange}
        >
          {/* Set initial content */}
          {editableContent || (
            <>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
              magnam, similique cupiditate animi, ullam velit sed sint quas
              delectus, ex ipsa quam? Delectus aspernatur cumque dolores
              deserunt asperiores praesentium at.
            </>
          )}

          <p className="display-edit text-black">{editableContent}</p>
        </div>
      </div>
    </main>
  );
};

export default TestDesignModal;


// {
//   randomOrder === "featuresFirst" ? (
//     <>
//       {featuresIndex !== undefined && featuresElement}
//       {testimonialIndex !== undefined && testimonialElement}
//     </>
//   ) : (
//     <>
//       {testimonialIndex !== undefined && testimonialElement}
//       {featuresIndex !== undefined && featuresElement}
//     </>
//   );
// }
