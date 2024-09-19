import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { MdSaveAlt } from "react-icons/md";
import { FaCode } from 'react-icons/fa6';
import { FaCloudUploadAlt } from "react-icons/fa";
import QuickUIGallery from "../../../assets/QuickUI-Gallery.webp";

const HomeSectionTwo = () => {
    useEffect(() => {
      AOS.init({
        duration: 1500,
      });
    }, []);

  return (
    <>
      <section data-aos="fade-up" className="mb-44">
        <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl tracking-tight font-bold text-primary-800">
              Why Choose <span className="gradient-text">QuickUI</span>?
            </h2>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="mr-0 md:mr-8 mb-6 md:mb-0">
              <img
                className="w-full max-md:w-[90%] max-md:max-w-[500px] mx-auto"
                src={QuickUIGallery}
                alt="QuickUIGallery-Image"
              />
            </div>

            <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
              <div className="w-full sm:w-1/2 mb-4 px-2">
                <div className="h-full py-4 px-6 border border-[#33a9ff] border-t-0 border-l-0 rounded-br-xl">
                  <h3 className="text-2xl font-bold text-md mb-6">
                    Instant Code Generation
                  </h3>
                  <p className="text-sm">
                    Generate clean, exportable code for every landing page you
                    create. No more hours spent tweaking code – QuickUI delivers
                    ready-to-use, responsive designs that you can deploy
                    instantly.
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 mb-4 px-2">
                <div className="h-full py-4 px-6 border border-[#33a9ff] border-t-0 border-l-0 rounded-br-xl">
                  <h3 className="text-2xl font-bold text-md mb-6">
                    Customizable Templates
                  </h3>
                  <p className="text-sm">
                    Choose from a library of professional templates designed for
                    high conversions. Customize every element to fit your brand
                    and unique message without any technical hassle.
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-1/2 mb-4 px-2">
                <div className="h-full py-4 px-6 border border-[#33a9ff] border-t-0 border-l-0 rounded-br-xl">
                  <h3 className="text-2xl font-bold text-md mb-6">
                    Real-time Preview
                  </h3>
                  <p className="text-sm">
                    See your changes live as you edit. Our real-time preview
                    feature ensures you never miss a detail, giving you complete
                    control over every pixel before you hit save.
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-1/2 mb-4 px-2">
                <div className="h-full py-4 px-6 border border-[#33a9ff] border-t-0 border-l-0 rounded-br-xl">
                  <h3 className="text-2xl font-bold text-md mb-6">
                    No Coding Required
                  </h3>
                  <p className="text-sm">
                    Focus on creativity, not code. QuickUI makes it simple for anyone to design
                    like a pro, even without technical skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeSectionTwo