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

import { TestNavOne } from "./TestNav";


const TestDesignModal = () => {
  return (
    <main
      className={`bg-white w-full mt-5 max-md:mt-0 mx-10 h-[93vh] max-md:h-[89vh] max-[499px]:mx-4 overflow-scroll overflow-x-hidden`}
    >
      <TestNavOne/>
      <div className=" bg-emerald-500">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad accusamus
          sequi voluptate minus earum voluptatem autem obcaecati inventore
          nostrum tenetur, cumque laborum, atque facilis cum laudantium velit
          pariatur in quis.
        </p>
      </div>
    </main>
  );
};

export default TestDesignModal;
