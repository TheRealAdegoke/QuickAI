import React from "react";
import designExample from "../../../assets/QuickUIDesign.png";

const HomeSectionOne = () => {
  return (
    <>
      <section className="my-44 max-lg:my-32 w-[90%] max-w-[1500px] mx-auto">
        <div className="mb-14">
          <h2 className="text-center text-2xl sm:text-4xl font-semibold mb-4">
            Generate your website with AI
          </h2>
          <p className="text-[rgb(189,189,189)] text-center font-semibold max-lg:text-center max-lg:max-w-[500px] max-lg:mx-auto">
            Use AI to generate content for your website, including text and
            images
          </p>
        </div>

        <div className="flex max-lg:flex-col gap-10 max-w-[1300px] mx-auto">
          <div className="w-[50%] max-2xl:w-[55%] max-lg:w-full">
            <img src={designExample} alt="" className="block h-[100p]" />
          </div>

          <div className="w-[50%] max-2xl:w-[40%] max-lg:w-full">
            <div className="mb-8 max-w-[500px]">
              <h3 className="text-xl text-[rgb(238,238,238)] font-semibold mb-2">
                Simple Design
              </h3>
              <p className="text-[rgb(189,189,189)]">
                We use AI to create your content and select design elements, but
                we handle the design to ensure beautiful outcomes consistently.
              </p>
            </div>
            <div className="mb-8 max-w-[500px]">
              <h3 className="text-xl text-[rgb(238,238,238)] font-semibold mb-2">
                Great Content
              </h3>
              <p className="text-[rgb(189,189,189)]">
                You'll be amazed at the quality of the AI-generated results.
                Whether it's Header or Hero sections, you'll receive a strong
                foundation for your project.
              </p>
            </div>
            <div className="mb-8 max-w-[500px]">
              <h3 className="text-xl text-[rgb(238,238,238)] font-semibold mb-2">
                Responsive on every device
              </h3>
              <p className="text-[rgb(189,189,189)]">
                Your content will look fantastic on any screen size without
                extra work. We've already sorted out responsive design for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSectionOne;
