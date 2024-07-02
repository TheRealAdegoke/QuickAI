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

const EditAndSave = () => {
  const { setIsMobile, isMobile } = useContext(DashContext);
  const modalRef = useRef(null);
  const resizableRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [devMode, setDevMode] = useState(false);
  const [itemsDropdown, setItemsDropdown] = useState(false);
  const [isResizingRight, setIsResizingRight] = useState(false);
  const [isResizingLeft, setIsResizingLeft] = useState(false);
  const [initialWidth, setInitialWidth] = useState(0);
  const [initialX, setInitialX] = useState(0);
  const [textAreaContent, setTextAreaContent] = useState("");
  const [selectedElement, setSelectedElement] = useState(null);
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

        <section
          className={`${
            enabled ? "" : "pr-10"
          } pt-16 flex gap-10 overflow-hidden select-none relative`}
        >
          <div
            className={`bg-[rgb(9,11,14)] w-[23%] min-w-[23%] max-w-[23%] min-[1350px]:w-[20%] min-[1350px]:min-w-[20%] min-[1350px]:max-w-[20%] h-[90vh] border-[1px] rounded-[8px] border-[rgba(255,255,255,0.3)]`}
          >
            <div className="w-full p-3">
              <textarea
                name=""
                id=""
                value={textAreaContent}
                onChange={handleTextareaChange}
                className="border-[rgba(255,255,255,0.5)] border-[1px] w-full h-[50px] bg-[rgb(37,39,45)] rounded-[5px] text-white"
              ></textarea>
            </div>
          </div>

          <div
            className={`${
              enabled
                ? "w-[48%] max-w-[48%] min-[1350px]:max-w-[55%] min-[1350px]:w-[55%]"
                : "w-[75%] mx-auto"
            }`}
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
                } absolute top-1/2 right-[-9px] transform -translate-x-1/2 -translate-y-1/2  w-2 h-[50px] cursor-ew-resize bg-[rgba(0,0,0,0.8)] rounded-t-[8px] rounded-b-[8px] max-lg:hidden z-50`}
                onMouseDown={handleMouseDownRight}
              ></div>
              <div
                className={`${
                  enabled ? "hidden" : "block"
                } absolute top-1/2 left-[0px] transform -translate-x-1/2 -translate-y-1/2 w-2 h-[50px] cursor-ew-resize bg-[rgba(0,0,0,0.8)] rounded-t-[8px] rounded-b-[8px] max-lg:hidden z-50`}
                onMouseDown={handleMouseDownLeft}
              ></div>
              <div className="overflow-y-scroll h-full">
                <EditAndSaveDesignModal handleTextClick={handleTextClick} />
              </div>
              <div className="overflow-y-scroll h-full"></div>
            </div>
          </div>

          <div
            className={`${
              enabled ? "right-0" : "right-[-999px]"
            } w-[23%] min-w-[23%] max-w-[23%] min-[1350px]:w-[20%] min-[1350px]:min-w-[20%] min-[1350px]:max-w-[20%] absolute  h-[90vh] bg-[rgb(9,11,14)] border-[1px] rounded-[8px] border-[rgba(255,255,255,0.3)] transition-all ease-in-out duration-150`}
          ></div>
        </section>
      </main>
    </>
  );
};

export default EditAndSave;
