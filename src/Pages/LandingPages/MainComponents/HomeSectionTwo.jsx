import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import QuickUIGallery from "../../../assets/QuickUI-Gallery.webp";
import WhyHero from "../../../assets/Why QuickUI/Why-Hero.webp";
import WhyProblem from "../../../assets/Why QuickUI/Why-Problem.webp";
import WhySolution from "../../../assets/Why QuickUI/Why-Solution.webp";
import WhyTestimonial from "../../../assets/Why QuickUI/Why-Testimonial.webp";

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
            <h2 className="text-4xl tracking-tight font-bold text-primary-800 mb-4">
              Why Choose <span className="gradient-text">QuickUI</span>?
            </h2>
            <p className="text-lg tracking-tight text-primary-800 max-w-[800px] mx-auto">
              Designed to simplify the process ensuring your landing page is
              visually compelling, optimized for conversion, and ready to
              launch.
            </p>
          </div>

          <div className="max-lg:max-w-[600px] mx-auto flex flex-col gap-24 max-lg:gap-10">
            <div className="flex justify-evenly max-lg:flex-col max-lg:gap-5">
              <div className="w-[45%] max-lg:w-full mx-auto">
                <img
                  className="w-full mx-auto"
                  src={WhyHero}
                  alt="QuickUIGallery-Image"
                />
              </div>

              <div className="w-[45%] max-lg:w-full mx-auto lg:pt-10 border border-[#33a9ff] border-t-0 border-l-0 rounded-br-xl max-lg:border-none">
                <h3 className="text-3xl max-sm:text-xl font-semibold text-white mb-4 max-sm:mb-2">
                  Engaging Hero Image
                </h3>
                <p className="lg:max-w-[500px] max-sm:text-sm">
                  Your landing page's hero section is the first thing visitors
                  see—it sets the tone and grabs attention. A strong,
                  captivating hero image can communicate your brand's value in
                  seconds. QuickUI makes it easy to select or upload a hero
                  image that reflects your brand, ensuring visitors are hooked
                  from the very first glance.
                </p>
              </div>
            </div>

            <div className="flex flex-row-reverse justify-evenly max-lg:flex-col max-lg:gap-5">
              <div className="w-[45%] max-lg:w-full mx-auto">
                <img
                  className="w-full mx-auto"
                  src={WhyProblem}
                  alt="QuickUIGallery-Image"
                />
              </div>

              <div className="w-[45%] max-lg:w-full mx-auto lg:pt-10 border border-[#33a9ff] border-t-0 border-r-0 rounded-br-xl lg:pl-5 max-lg:border-none">
                <h3 className="text-3xl max-sm:text-xl font-semibold text-white mb-4 max-sm:mb-2">
                  Visualizing the Problem
                </h3>
                <p className="lg:max-w-[500px] max-sm:text-sm">
                  People connect with solutions when they clearly understand the
                  problem. A well-chosen image that visualizes the customer's
                  pain point creates a deeper connection. With QuickUI, you can
                  effortlessly design and customize this section, ensuring your
                  message resonates with your audience and highlights why your
                  product is the answer.
                </p>
              </div>
            </div>

            <div className="flex justify-evenly max-lg:flex-col max-lg:gap-5">
              <div className="w-[45%] max-lg:w-full mx-auto">
                <img
                  className="w-full mx-auto"
                  src={WhySolution}
                  alt="QuickUIGallery-Image"
                />
              </div>

              <div className="w-[45%] max-lg:w-full mx-auto lg:pt-10 border border-[#33a9ff] border-t-0 border-l-0 rounded-br-xl max-lg:border-none">
                <h3 className="text-3xl max-sm:text-xl font-semibold text-white mb-4 max-sm:mb-2">
                  Showcasing the Solution
                </h3>
                <p className="lg:max-w-[500px] max-sm:text-sm">
                  Next comes the solution image. It shows your product or
                  service in action, solving the exact problem your audience
                  faces. QuickUI provides a streamlined process to add these
                  impactful visuals, ensuring your landing page effectively
                  presents your offering as the ultimate solution.
                </p>
              </div>
            </div>

            <div className="flex flex-row-reverse justify-evenly max-lg:flex-col max-lg:gap-5">
              <div className="w-[45%] max-lg:w-full mx-auto">
                <img
                  className="w-full mx-auto"
                  src={WhyTestimonial}
                  alt="QuickUIGallery-Image"
                />
              </div>

              <div className="w-[45%] max-lg:w-full mx-auto lg:pt-10 border border-[#33a9ff] border-t-0 border-r-0 rounded-br-xl lg:pl-5 max-lg:border-none">
                <h3 className="text-3xl max-sm:text-xl font-semibold text-white mb-4 max-sm:mb-2">
                  Building Trust with Testimonials
                </h3>
                <p className="lg:max-w-[500px] max-sm:text-sm">
                  Trust is key to conversions. A testimonial image featuring
                  real users or their success stories helps build credibility
                  and assurance. QuickUI helps you seamlessly integrate
                  testimonial sections with images and quotes, making your
                  landing page not only visually appealing but also convincing
                  to potential customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeSectionTwo