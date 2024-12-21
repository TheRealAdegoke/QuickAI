import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeSectionThree = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <section data-aos="fade-up" className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="mb-12 space-y-5 md:mb-16 md:text-center">
              <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                Words from Others
              </div>
              <h2 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
                It's not just us.
              </h2>
              <p className="text-xl text-gray-100 md:text-center md:text-2xl">
                Here's what others have to say about us.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <ul className="space-y-8">
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <div className="cursor-pointer">
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Profile picture of a user"
                          title="Profile picture"
                          loading="lazy"
                          width="48"
                          height="48"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            Sarah M
                          </h3>
                          <p className="text-gray-500 text-md">
                            Startup Founder
                          </p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        QuickUI made it so easy for me to build and launch my
                        product landing page.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <div className="cursor-pointer">
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Profile picture of a user"
                          title="Profile picture"
                          loading="lazy"
                          width="48"
                          height="48"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            John K
                          </h3>
                          <p className="text-gray-500 text-md">
                            Marketing Director
                          </p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        We needed a quick, professional solution for our
                        marketing pages. QuickUI delivered exactly that, without
                        any technical hassle.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <div className="cursor-pointer">
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Profile picture of a user"
                          title="Profile picture"
                          loading="lazy"
                          width="48"
                          height="48"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            Andrew L
                          </h3>
                          <p className="text-gray-500 text-md">
                            Growth Marketer
                          </p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        QuickUI is truly revolutionary for marketers.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <div className="cursor-pointer">
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Profile picture of a user"
                          title="Profile picture"
                          loading="lazy"
                          width="48"
                          height="48"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            Olivia W
                          </h3>
                          <p className="text-gray-500 text-md">
                            Content Creator
                          </p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        The customizable templates gave me a solid starting
                        point. I was able to quickly adjust the design to fit my
                        brand perfectly.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="hidden space-y-8 sm:block">
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <div className="cursor-pointer">
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Profile picture of a user"
                          title="Profile picture"
                          loading="lazy"
                          width="48"
                          height="48"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            Steven G
                          </h3>
                          <p className="text-gray-500 text-md">Startup CEO</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        I’ve tried other page builders, but none of them match
                        the flexibility of QuickUI. It's become my go-to tool
                        for landing pages.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <div className="cursor-pointer">
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Profile picture of a user"
                          title="Profile picture"
                          loading="lazy"
                          width="48"
                          height="48"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            Tom H
                          </h3>
                          <p className="text-gray-500 text-md">
                            Frontend Developer
                          </p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        The ability to export clean, well-structured code is a
                        game-changer for my workflow. It saves me so much time!
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <div className="cursor-pointer">
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Profile picture of a user"
                          title="Profile picture"
                          loading="lazy"
                          width="48"
                          height="48"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            Rachel F
                          </h3>
                          <p className="text-gray-500 text-md">
                            Business Owner
                          </p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        The mobile responsiveness is fantastic. I don’t have to
                        worry about how my page looks on different devices
                        anymore.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <div className="cursor-pointer">
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Profile picture of a user"
                          title="Profile picture"
                          loading="lazy"
                          width="48"
                          height="48"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            Michael B
                          </h3>
                          <p className="text-gray-500 text-md">
                            Product Manager
                          </p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        I used QuickUI to launch a product demo page, and it was
                        an absolute breeze. The entire process, from selecting a
                        template to customizing the design, was smooth and
                        straightforward. The intuitive interface made it easy to
                        build exactly what I needed without any coding hassle.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="hidden space-y-8 lg:block">
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <div className="cursor-pointer">
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Profile picture of a user"
                          title="Profile picture"
                          loading="lazy"
                          width="48"
                          height="48"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            Henry D
                          </h3>
                          <p className="text-gray-500 text-md">
                            Online Educator
                          </p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        I was blown away by how fast I could create a functional
                        landing page. I was able to customize them to fit my
                        brand
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <div className="cursor-pointer">
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Profile picture of a user"
                          title="Profile picture"
                          loading="lazy"
                          width="48"
                          height="48"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            Grace S
                          </h3>
                          <p className="text-gray-500 text-md">
                            Nonprofit Director
                          </p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        As a nonprofit, we needed an affordable way to promote
                        our cause.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <div className="cursor-pointer">
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Profile picture of a user"
                          title="Profile picture"
                          loading="lazy"
                          width="48"
                          height="48"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            Alex C
                          </h3>
                          <p className="text-gray-500 text-md">
                            Tech Startup Founder
                          </p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        QuickUI gave my startup the online presence we
                        desperately needed, without the high costs of hiring a
                        developer. Truly a lifesaver!
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <div className="cursor-pointer">
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Profile picture of a user"
                          title="Profile picture"
                          loading="lazy"
                          width="48"
                          height="48"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            Chris V
                          </h3>
                          <p className="text-gray-500 text-md">
                            Digital Agency Owner
                          </p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        What I like most about QuickUI is the ability to
                        generate code instantly.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSectionThree;
