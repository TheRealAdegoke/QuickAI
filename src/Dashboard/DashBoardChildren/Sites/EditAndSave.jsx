import React, { useState, useEffect, useRef, useContext } from "react";
import { DashContext } from "../../DashboardChecker/DashboardContext";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import WebLogo from "../../../assets/WebLogo";
import { FaCode } from "react-icons/fa6";
import { Switch } from "@headlessui/react";
import EditAndSaveDesignModal from "./EditAndSaveDesignModal";
import MainEditComponent from "./EditAndSaveComponents/MainEditComponent";
import EditDesignModalComponent from "./EditAndSaveComponents/EditDesignModalComponent";
import { HeroImages } from "./EditAndSaveComponents/HeroEditComponent";
import { HeaderImages } from "./EditAndSaveComponents/HeaderEditComponent";
import { CardFeaturesImages } from "./EditAndSaveComponents/CardFeatureEditComponent";
import { ClassicalFeaturesImages } from "./EditAndSaveComponents/ClassicalFeatureEditComponent";
import { TestimonialImages } from "./EditAndSaveComponents/TestimonialEditComponent";
import { FAQImages } from "./EditAndSaveComponents/FAQEditComponent";
import { TeamImages } from "./EditAndSaveComponents/TeamEditComponent";
import { IoClose } from "react-icons/io5";

const EditAndSave = () => {
  const {
    setIsMobile,
    displayEditModal,
    sectionModal,
    setSectionModal,
    activeSection,
    setActiveSection,
    currentSection,
    setCurrentSection,
  } = useContext(DashContext);
  const modalRef = useRef(null);
  const resizableRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [devMode, setDevMode] = useState(false);
  const [itemsDropdown, setItemsDropdown] = useState(false);
  const [isResizingRight, setIsResizingRight] = useState(false);
  const [isResizingLeft, setIsResizingLeft] = useState(false);
  const [initialWidth, setInitialWidth] = useState(0);
  const [initialX, setInitialX] = useState(0);
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setItemsDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setItemsDropdown]);

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
      }
      if (newWidth < 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    } else if (isResizingLeft) {
      const deltaX = initialX - e.clientX;
      const newWidth = initialWidth + deltaX;
      if (newWidth >= 270) {
        resizableRef.current.style.width = `${newWidth}px`;
      }
      if (newWidth < 1024) {
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

  return (
    <>
      <main className="bg-[rgb(30,30,30)] min-h-[100vh]">
        <div
          ref={modalRef}
          className="py-2 flex justify-between items-center px-3 fixed w-full top-0 z-50 my"
        >
          <div>
            <Link to="/home">
              <FaChevronLeft className="text-white text-2xl" />
            </Link>
          </div>
          <WebLogo />
          <div className="text-white text-xl flex gap-5">
            <button
              className=""
              onClick={() => {
                setDevMode(!devMode);
                setEnabled(!enabled);
                setIsMobile(true);
              }}
            >
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className="group inline-flex items-center rounded-full bg-[rgba(255,255,255,0.3)] transition data-[checked]:bg-blue-600 w-[60px] h-[35px] px-1"
              >
                <span className="translate-x-0 rounded-full bg-white transition group-data-[checked]:translate-x-[90%] text-black w-[30px] h-[30px] flex items-center justify-center text-xl font-semibold py-1 text-[rgba(0,0,0,0.7)]">
                  <FaCode />
                </span>
              </Switch>
            </button>
          </div>
          <div
            className={`${
              itemsDropdown ? "block" : "hidden"
            } dashboard-navigation-darkmode w-full max-w-[190px] mx-auto flex-col items-start gap-2 border-zinc-600 border-[1px] px-2 py-1 rounded-[5px] font-semibold fixed top-16 right-[0.7%] z-50 text-white`}
          >
            <button className="flex items-center gap-1 w-full hover:px-1 border-zinc-600 hover:border-[1px] rounded-[5px] px-1 py-1 hover:bg-[rgb(33,33,33)]">
              <MdOutlineManageAccounts />
              Account
            </button>
            <button className="flex items-center gap-1 w-full hover:px-1 border-zinc-600 hover:border-[1px] rounded-[5px] px-1 py-1 hover:bg-[rgb(33,33,33)]">
              <IoSettingsOutline />
              Settings
            </button>
          </div>
        </div>

        <div
          className={`${
            enabled && window.innerWidth < 1000 ? "block" : "hidden"
          } fixed z-50 top-[80px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px]`}
        >
          <div className="bg-[rgb(9,11,14)] text-white text-center px-4 py-5 rounded-[5px] font-semibold">
            <p>View on a desktop computer to edit site</p>
          </div>
        </div>

        <section
          className={`${!enabled && window.innerWidth > 1000 ? "pr-10" : ""} ${
            window.innerWidth < 1000 ? "" : ""
          } pt-16 flex gap-10 overflow-hidden select-none relative edit-and-save-section`}
        >
          <div
            className={`${
              window.innerWidth < 1000 ? "hidden" : ""
            } bg-[rgb(9,11,14)] w-[23%] min-w-[23%] max-w-[23%] min-[1350px]:w-[20%] min-[1350px]:min-w-[20%] min-[1350px]:max-w-[20%] h-[87vh] border-[1px] rounded-[8px] border-[rgba(255,255,255,0.3)] overflow-y-scroll`}
          >
            {displayEditModal ? (
              <EditDesignModalComponent />
            ) : (
              <MainEditComponent />
            )}
          </div>

          <div
            className={`${
              enabled && window.innerWidth > 1000
                ? "w-[48%] max-w-[48%] min-[1350px]:max-w-[55%] min-[1350px]:w-[55%]"
                : "w-[75%] mx-auto"
            } max-md:w-[95%]`}
          >
            <div
              ref={resizableRef}
              className={`${
                enabled
                  ? "w-[100%] max-w-[100%] mx-auto"
                  : "w-[100%] max-w-[100%] mx-auto"
              } bg-white rounded-[5px] border-[1px] h-[87vh] relative`}
            >
              <div
                className={`${
                  enabled ? "hidden" : "block"
                } absolute top-1/2 right-[-9px] transform -translate-x-1/2 -translate-y-1/2  w-2 h-[50px] cursor-ew-resize bg-[rgba(0,0,0,0.8)] rounded-t-[8px] rounded-b-[8px] max-lg:hidden z-40`}
                onMouseDown={handleMouseDownRight}
              ></div>
              <div
                className={`${
                  enabled ? "hidden" : "block"
                } absolute top-1/2 left-[0px] transform -translate-x-1/2 -translate-y-1/2 w-2 h-[50px] cursor-ew-resize bg-[rgba(0,0,0,0.8)] rounded-t-[8px] rounded-b-[8px] max-lg:hidden z-40`}
                onMouseDown={handleMouseDownLeft}
              ></div>
              <div className="overflow-y-scroll h-full">
                <EditAndSaveDesignModal />
              </div>
              <div className="overflow-y-scroll h-full"></div>
            </div>
          </div>

          <div
            className={`${
              enabled && window.innerWidth > 1000 ? "right-0" : "right-[-999px]"
            } w-[23%] min-w-[23%] max-w-[23%] min-[1350px]:w-[20%] min-[1350px]:min-w-[20%] min-[1350px]:max-w-[20%] absolute  h-[90vh] bg-[rgb(9,11,14)] border-[1px] rounded-[8px] border-[rgba(255,255,255,0.3)] transition-all ease-in-out duration-150`}
          ></div>
        </section>

        <div
          className={`${
            sectionModal ? "block" : "hidden"
          } fixed top-0 z-50 bg-[rgba(0,0,0,0.7)] h-full w-full flex justify-center items-center`}
        >
          <div className="bg-[rgb(36,37,40)] w-[70%] h-[90%] rounded-[8px]">
            <div className="flex justify-end pr-5">
              <button
                className="bg-[rgb(20,21,24)] py-2 px-2 text-xl rounded-lg text-[rgba(255,255,255,0.8)] mt-5"
                onClick={() => {
                  setSectionModal(false);
                  setCurrentSection(false)
                }}
              >
                <IoClose />
              </button>
            </div>
            <div
              className={`${
                currentSection ? "h-full" : ""
              } h-[90%] rounded-[8px] flex`}
            >
              <div
                className={`${
                  currentSection ? "hidden" : "block"
                } w-[20%] h-full py-5 pl-4`}
              >
                <div className="text-[rgba(255,255,255,0.8)] flex flex-col gap-2 text-lg">
                  <button
                    className={`${
                      activeSection.Header ? "bg-[rgb(7,20,59)]" : ""
                    } text-left pl-2 py-1 rounded-md`}
                    onClick={() => setActiveSection({ Header: true })}
                  >
                    Header
                  </button>
                  <button
                    className={`${
                      activeSection.Hero ? "bg-[rgb(7,20,59)]" : ""
                    } text-left pl-2 py-1 rounded-md`}
                    onClick={() => setActiveSection({ Hero: true })}
                  >
                    Hero
                  </button>
                  <button
                    className={`${
                      activeSection.Card ? "bg-[rgb(7,20,59)]" : ""
                    } text-left pl-2 py-1 rounded-md`}
                    onClick={() => setActiveSection({ Card: true })}
                  >
                    Card
                  </button>
                  <button
                    className={`${
                      activeSection.Classic ? "bg-[rgb(7,20,59)]" : ""
                    } text-left pl-2 py-1 rounded-md`}
                    onClick={() => setActiveSection({ Classic: true })}
                  >
                    Classic
                  </button>
                  <button
                    className={`${
                      activeSection.Testimonial ? "bg-[rgb(7,20,59)]" : ""
                    } text-left pl-2 py-1 rounded-md`}
                    onClick={() => setActiveSection({ Testimonial: true })}
                  >
                    Testimonial
                  </button>
                  <button
                    className={`${
                      activeSection.FAQ ? "bg-[rgb(7,20,59)]" : ""
                    } text-left pl-2 py-1 rounded-md`}
                    onClick={() => setActiveSection({ FAQ: true })}
                  >
                    FAQ
                  </button>
                  <button
                    className={`${
                      activeSection.Team ? "bg-[rgb(7,20,59)]" : ""
                    } text-left pl-2 py-1 rounded-md`}
                    onClick={() => setActiveSection({ Team: true })}
                  >
                    Team
                  </button>
                </div>
              </div>
              <div
                className={`${
                  currentSection ? "w-full mt-10" : "w-[80%]"
                } h-full py-5 px-4`}
              >
                <div
                  className={`${
                    currentSection ? "hidden" : ""
                  } bg-[rgb(20,21,24)] py-[0.4rem] rounded-lg pl-2 text-[rgba(255,255,255,0.8)] mb-5`}
                >
                  {activeSection.Header && "Header"}
                  {activeSection.Hero && "Hero"}
                  {activeSection.Card && "Card Feature"}
                  {activeSection.Classic && "Classical Feature"}
                  {activeSection.Testimonial && "Testimonial"}
                  {activeSection.FAQ && "FAQ"}
                  {activeSection.Team && "Team"}
                </div>

                <div className="flex flex-wrap gap-3 justify-evenly px-2 h-[70%] overflow-y-scroll">
                  {activeSection.Header && <HeaderImages />}
                  {activeSection.Hero && <HeroImages />}
                  {activeSection.Card && <CardFeaturesImages />}
                  {activeSection.Classic && <ClassicalFeaturesImages />}
                  {activeSection.Testimonial && <TestimonialImages />}
                  {activeSection.FAQ && <FAQImages />}
                  {activeSection.Team && <TeamImages />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default EditAndSave;
