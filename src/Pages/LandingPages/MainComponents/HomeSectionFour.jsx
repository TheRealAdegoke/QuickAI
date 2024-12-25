import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeSectionFour = () => {
    useEffect(() => {
      AOS.init({
        duration: 1500,
      });
    }, []);


  return (
    <>
      <section data-aos="fade-up" className="mb-44">
        <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
          <h2 className="mb-1 text-3xl font-semibold leading-tight ">
            Frequently Asked Questions
          </h2>
          <p className="mb-12 text-lg">
            Here are some of the most common questions we get asked.
          </p>
          <div className="w-full">
            <div className="flex flex-col w-full mb-10 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-[rgb(222,222,222)] border-2 border-indigo-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Do I need to know how to code to use QuickUI?
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-800">
                      Not at all! QuickUI is designed for both beginners and
                      professionals. You can
                      create fully responsive pages, and if you need the code,
                      QuickUI generates clean, exportable code for you
                      automatically.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-[rgb(222,222,222)] border-2 border-purple-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Can I export and use the designs on my website?
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-800">
                      Yes! QuickUI allows you to export the code for any design
                      you create. You can use this code in any project, whether
                      it's hosted on your platform or another service.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full mb-5 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-[rgb(222,222,222)] border-2 border-blue-400 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Is there a free version of QuickUI?
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-800">
                      Yes, we offer a free plan that includes all essential
                      features for creating and customizing landing pages. For
                      more advanced features like premium templates and
                      exporting code, you can upgrade to one of our paid plans.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-[rgb(222,222,222)] border-2 border-yellow-400 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        How does the real-time preview work?
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-800">
                      As you edit your landing page, QuickUI shows you the
                      changes in real-time. This ensures that what you see is
                      exactly what your users will get when you publish or
                      export the page, helping you avoid any surprises during
                      deployment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-[rgb(222,222,222)] border-2 border-green-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        What kind of templates are available in QuickUI?
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-800">
                      QuickUI offers a wide variety of templates designed for
                      different industries and purposes, including SaaS,
                      personal portfolios, and more. All templates are optimized
                      for conversions and fully customizable to match your
                      brand.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSectionFour;