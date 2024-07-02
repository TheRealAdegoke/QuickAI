import { Link, useParams } from "react-router-dom";
import { axiosInstance } from "../../../Pages/AuthPages/AuthChecker/axiosInstance";
import { FaChevronLeft } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { ImSpinner6 } from "react-icons/im";
import parse from "html-react-parser";
import WebLogo from "../../../assets/WebLogo";
import { FaCode } from "react-icons/fa6";
import Editor from "@monaco-editor/react";
import { RiBox2Fill } from "react-icons/ri";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { Switch } from "@headlessui/react";

const JustForKeep = () => {
  const { id } = useParams();
  const [historyData, setHistoryData] = useState("");
  const [loading, setLoading] = useState(true);
  const [itemsDropdown, setItemsDropdown] = useState(false);
  const modalRef = useRef(null);
  const resizableRef = useRef(null);
  const [isResizingRight, setIsResizingRight] = useState(false);
  const [isResizingLeft, setIsResizingLeft] = useState(false);
  const [initialWidth, setInitialWidth] = useState(0);
  const [initialX, setInitialX] = useState(0);
  const [devMode, setDevMode] = useState(false);
  const [activeSection, setActiveSection] = useState("navDiv");
  const [navDiv, setNavDiv] = useState("");
  const [heroDiv, setHeroDiv] = useState("");
  const [sectionOneDiv, setSectionOneDiv] = useState("");
  const [sectionTwoDiv, setSectionTwoDiv] = useState("");
  const [sectionThreeDiv, setSectionThreeDiv] = useState("");
  const [sectionFourDiv, setSectionFourDiv] = useState("");
  const [sectionFiveDiv, setSectionFiveDiv] = useState("");
  const [footerDiv, setFooterDiv] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    navDiv: true,
    heroDiv: true,
    sectionOneDiv: true,
    sectionTwoDiv: true,
    sectionThreeDiv: true,
    sectionFourDiv: true,
    sectionFiveDiv: true,
    footerDiv: true,
  });

  const isLargeScreen = () => window.innerWidth >= 1024;

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

  useEffect(() => {
    const fetchHistoryItem = async () => {
      try {
        const response = await axiosInstance.get(`/auth/user-data/${id}`);
        setHistoryData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
    fetchHistoryItem();
  }, [id]);

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
    } else if (isResizingLeft) {
      const deltaX = initialX - e.clientX;
      const newWidth = initialWidth + deltaX;
      if (newWidth >= 270) {
        resizableRef.current.style.width = `${newWidth}px`;
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

  useEffect(() => {
    if (historyData) {
      setNavDiv(historyData.navStyle.style);
      setHeroDiv(historyData.heroStyle.style);
      setSectionOneDiv(historyData.sectionOneStyle.style);
      setSectionTwoDiv(historyData.sectionTwoStyle.style);
      setSectionThreeDiv(historyData.sectionThreeStyle.style);
      setSectionFourDiv(historyData.sectionFourStyle.style);
      setSectionFiveDiv(historyData.sectionFiveStyle.style);
      setFooterDiv(historyData.footerStyle.style);
    }
  }, [id, historyData]);

  const handleEditorChange = (value, sectionName) => {
    switch (sectionName) {
      case "navDiv":
        setNavDiv(value);
        break;
      case "heroDiv":
        setHeroDiv(value);
        break;
      case "sectionOneDiv":
        setSectionOneDiv(value);
        break;
      case "sectionTwoDiv":
        setSectionTwoDiv(value);
        break;
      case "sectionThreeDiv":
        setSectionThreeDiv(value);
        break;
      case "sectionFourDiv":
        setSectionFourDiv(value);
        break;
      case "sectionFiveDiv":
        setSectionFiveDiv(value);
        break;
      case "footerDiv":
        setFooterDiv(value);
        break;
      default:
        break;
    }
  };

  const getActiveContent = (sectionName) => {
    if (!visibleSections[sectionName]) {
      return "";
    }
    switch (sectionName) {
      case "navDiv":
        return navDiv;
      case "heroDiv":
        return heroDiv;
      case "sectionOneDiv":
        return sectionOneDiv;
      case "sectionTwoDiv":
        return sectionTwoDiv;
      case "sectionThreeDiv":
        return sectionThreeDiv;
      case "sectionFourDiv":
        return sectionFourDiv;
      case "sectionFiveDiv":
        return sectionFiveDiv;
      case "footerDiv":
        return footerDiv;
      default:
        return "";
    }
  };

  const toggleSectionVisibility = (sectionName) => {
    setVisibleSections((prevState) => ({
      ...prevState,
      [sectionName]: !prevState[sectionName],
    }));
  };

  const handleCopy = () => {
    const activeContent = getActiveContent(activeSection);
    navigator.clipboard
      .writeText(activeContent)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        setIsCopied(false);
      });
  };
  return (
    <>
      {loading ? (
        <div className="h-screen flex justify-center items-center mx-auto">
          <ImSpinner6 className="animate-spin text-4xl text-black block" />
        </div>
      ) : (
        <main>
          <div
            ref={modalRef}
            className="dashboard-navigation-darkmode py-2 flex justify-between items-center px-3 fixed w-full top-0 z-50 my"
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

          <section className="mt-[100px]">
            <div className="flex">
              <div className="max-lg:hidden w-[15%] mx-auto">
                <div
                  className="bg-[#f2f2f3] flex items-center justify-between py-2 px-5 shadow-lg rounded-[8px] mb-4 cursor-pointer"
                  onClick={() => {
                    setActiveSection("navDiv");
                    setDevMode(true);
                    setEnabled(true);
                  }}
                >
                  <p className="font-semibold text-[#212529] flex items-center gap-1">
                    {" "}
                    <span className="text-[#c3a3ff]">
                      <RiBox2Fill />
                    </span>{" "}
                    Header
                  </p>
                  <span onClick={() => toggleSectionVisibility("navDiv")}>
                    {visibleSections["navDiv"] ? <IoMdEyeOff /> : <FaEye />}
                  </span>
                </div>

                <div
                  className="bg-[#f2f2f3] flex items-center justify-between py-2 px-5 shadow-lg rounded-[8px] mb-4 cursor-pointer"
                  onClick={() => {
                    setActiveSection("heroDiv");
                    setDevMode(true);
                    setEnabled(true);
                  }}
                >
                  <p className="font-semibold text-[#212529] flex items-center gap-1">
                    {" "}
                    <span className="text-[#c3a3ff]">
                      <RiBox2Fill />
                    </span>{" "}
                    Hero Section
                  </p>
                  <span onClick={() => toggleSectionVisibility("heroDiv")}>
                    {visibleSections["heroDiv"] ? <IoMdEyeOff /> : <FaEye />}
                  </span>
                </div>

                <div
                  className="bg-[#f2f2f3] flex items-center justify-between py-2 px-5 shadow-lg rounded-[8px] mb-4 cursor-pointer"
                  onClick={() => {
                    setActiveSection("sectionOneDiv");
                    setDevMode(true);
                    setEnabled(true);
                  }}
                >
                  <p className="font-semibold text-[#212529] flex items-center gap-1">
                    {" "}
                    <span className="text-[#c3a3ff]">
                      <RiBox2Fill />
                    </span>{" "}
                    Section One
                  </p>
                  <span
                    onClick={() => toggleSectionVisibility("sectionOneDiv")}
                  >
                    {visibleSections["sectionOneDiv"] ? (
                      <IoMdEyeOff />
                    ) : (
                      <FaEye />
                    )}
                  </span>
                </div>

                <div
                  className="bg-[#f2f2f3] flex items-center justify-between py-2 px-5 shadow-lg rounded-[8px] mb-4 cursor-pointer"
                  onClick={() => {
                    setActiveSection("sectionTwoDiv");
                    setDevMode(true);
                    setEnabled(true);
                  }}
                >
                  <p className="font-semibold text-[#212529] flex items-center gap-1">
                    {" "}
                    <span className="text-[#c3a3ff]">
                      <RiBox2Fill />
                    </span>{" "}
                    section Two
                  </p>
                  <span
                    onClick={() => toggleSectionVisibility("sectionTwoDiv")}
                  >
                    {visibleSections["sectionTwoDiv"] ? (
                      <IoMdEyeOff />
                    ) : (
                      <FaEye />
                    )}
                  </span>
                </div>

                <div
                  className="bg-[#f2f2f3] flex items-center justify-between py-2 px-5 shadow-lg rounded-[8px] mb-4 cursor-pointer"
                  onClick={() => {
                    setActiveSection("sectionThreeDiv");
                    setDevMode(true);
                    setEnabled(true);
                  }}
                >
                  <p className="font-semibold text-[#212529] flex items-center gap-1">
                    {" "}
                    <span className="text-[#c3a3ff]">
                      <RiBox2Fill />
                    </span>{" "}
                    Section Three
                  </p>
                  <span
                    onClick={() => toggleSectionVisibility("sectionThreeDiv")}
                  >
                    {visibleSections["sectionThreeDiv"] ? (
                      <IoMdEyeOff />
                    ) : (
                      <FaEye />
                    )}
                  </span>
                </div>

                <div
                  className="bg-[#f2f2f3] flex items-center justify-between py-2 px-5 shadow-lg rounded-[8px] mb-4 cursor-pointer"
                  onClick={() => {
                    setActiveSection("sectionFourDiv");
                    setDevMode(true);
                    setEnabled(true);
                  }}
                >
                  <p className="font-semibold text-[#212529] flex items-center gap-1">
                    {" "}
                    <span className="text-[#c3a3ff]">
                      <RiBox2Fill />
                    </span>{" "}
                    Section Four
                  </p>
                  <span
                    onClick={() => toggleSectionVisibility("sectionFourDiv")}
                  >
                    {visibleSections["sectionFourDiv"] ? (
                      <IoMdEyeOff />
                    ) : (
                      <FaEye />
                    )}
                  </span>
                </div>

                <div
                  className="bg-[#f2f2f3] flex items-center justify-between py-2 px-5 shadow-lg rounded-[8px] mb-4 cursor-pointer"
                  onClick={() => {
                    setActiveSection("sectionFiveDiv");
                    setDevMode(true);
                    setEnabled(true);
                  }}
                >
                  <p className="font-semibold text-[#212529] flex items-center gap-1">
                    {" "}
                    <span className="text-[#c3a3ff]">
                      <RiBox2Fill />
                    </span>{" "}
                    Section Five
                  </p>
                  <span
                    onClick={() => toggleSectionVisibility("sectionFiveDiv")}
                  >
                    {visibleSections["sectionFiveDiv"] ? (
                      <IoMdEyeOff />
                    ) : (
                      <FaEye />
                    )}
                  </span>
                </div>

                <div
                  className="bg-[#f2f2f3] flex items-center justify-between py-2 px-5 shadow-lg rounded-[8px] mb-4 cursor-pointer"
                  onClick={() => {
                    setActiveSection("footerDiv");
                    setDevMode(true);
                    setEnabled(true);
                  }}
                >
                  <p className="font-semibold text-[#212529] flex items-center gap-1">
                    {" "}
                    <span className="text-[#c3a3ff]">
                      <RiBox2Fill />
                    </span>{" "}
                    Footer
                  </p>
                  <span onClick={() => toggleSectionVisibility("footerDiv")}>
                    {visibleSections["footerDiv"] ? <IoMdEyeOff /> : <FaEye />}
                  </span>
                </div>
              </div>

              <div
                ref={resizableRef}
                className="bg-white rounded-xl border-[1px] w-[90%] h-[80vh] mx-auto relative lg:w-[80%] lg:mr-10"
              >
                <div className="overflow-y-scroll h-full">
                  {visibleSections.navDiv && (
                    <div className="">{parse(navDiv)}</div>
                  )}
                  {visibleSections.heroDiv && (
                    <div className="">{parse(heroDiv)}</div>
                  )}
                  {visibleSections.sectionOneDiv && (
                    <div className="">{parse(sectionOneDiv)}</div>
                  )}
                  {visibleSections.sectionTwoDiv && (
                    <div className="">{parse(sectionTwoDiv)}</div>
                  )}
                  {visibleSections.sectionThreeDiv && (
                    <div className="">{parse(sectionThreeDiv)}</div>
                  )}
                  {visibleSections.sectionFourDiv && (
                    <div className="">{parse(sectionFourDiv)}</div>
                  )}
                  {visibleSections.sectionFiveDiv && (
                    <div className="">{parse(sectionFiveDiv)}</div>
                  )}
                  {visibleSections.footerDiv && (
                    <div className="">{parse(footerDiv)}</div>
                  )}
                </div>
              </div>
            </div>

            <div
              className={`${
                !devMode ? "right-[-100%]" : "right-0 max-md:right-0"
              } w-[650px] max-md:w-full fixed top-[56px] z-50 h-screen bg-white border-[1px] shadow-2xl transition-all duration-200 ease-in-out`}
            >
              <div className="flex justify-end w-[95%] my-2">
                <button
                  className="text-white bg-[rgba(0,0,0,0.9)] px-3 py-2 w-[150px] text-center rounded-[8px] cursor-pointer font-semibold"
                  onClick={handleCopy}
                >
                  <span>{isCopied ? "copied" : "copy"}</span>
                </button>
              </div>
              <div className="h-[60%] max-md:h-[90%] max-md:mt-4 w-[95%] mx-auto md:my-3 overflow-y-scroll">
                <Editor
                  height="100%"
                  defaultLanguage="javascript"
                  theme="vs-dark"
                  value={getActiveContent(activeSection)}
                  onChange={(value) => handleEditorChange(value, activeSection)}
                  options={{
                    minimap: { enabled: false },
                    wordWrap: "on",
                  }}
                />
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default JustForKeep;