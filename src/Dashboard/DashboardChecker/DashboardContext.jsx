import React, {
  createContext,
  useEffect,
  useState,
} from "react";
import { axiosInstance } from "../../Pages/AuthPages/AuthChecker/axiosInstance";
import { message } from "antd";
import { FaBars } from "react-icons/fa";
import modalLogo from "../../assets/quickModalLogo.png";

export const DashContext = createContext();
export const DashboardProvider = ({ children }) => {
  const [closeSideNav, setCloseSideNav] = useState(false);
  const [closeAINav, setCloseAINav] = useState(false);
  const [showDesignModal, setShowDesignModal] = useState(false);
  const [testDesignModal, setTestDesignModal] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const [userData, setUserData] = useState(undefined);
  const [userInput, setUserInput] = useState("");
  const [selectedIdea, setSelectedIdea] = useState("");
  const [geminiResponses, setGeminiResponses] = useState({});
  const [loading, setLoading] = useState(false);
  const [buttonIndex, setButtonIndex] = useState(undefined);
  const [navIndex, setNavIndex] = useState(undefined);
  const [heroIndex, setHeroIndex] = useState(undefined);
  const [shuffled, setShuffled] = useState(false);
  const [text, setText] = useState({
    prompt: "",
    description: "",
    images: [],
    webLogo: "",
    buttonTexts: [],
  });

  useEffect(() => {
    if (!shuffled && geminiResponses.randomButtonText) {
      const shuffuleButtonTextArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };

      const shuffledButtonTexts = shuffuleButtonTextArray(
        geminiResponses.randomButtonText
      );

      setText((text) => ({
        ...text,
        buttonTexts: shuffledButtonTexts,
      }));

      setShuffled(true);
    }
  }, [geminiResponses, shuffled]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText((prevText) => ({
        ...prevText,
        prompt: geminiResponses.heroHeader
          ? geminiResponses.heroHeader.slice(0, prevText.prompt.length + 1)
          : "",
        description: geminiResponses.heroDescription
          ? geminiResponses.heroDescription.slice(
              0,
              prevText.description.length + 1
            )
          : "",
        images: geminiResponses.imageUrls || [],
        webLogo: geminiResponses.logo
          ? geminiResponses.logo.slice(0, prevText.webLogo.length + 1)
          : "",
      }));
    }, 30);

    return () => clearTimeout(timeout);
  }, [geminiResponses, text]);

  const navComponents = [
    <nav className={`bg-white w-full shadow-xl relative z-40`}>
      <div className={`flex justify-between items-center px-5`}>
        <div className="w-1/5 max-md:w-[30%] flex items-center gap-1 py-3">
          <img src={modalLogo} alt={modalLogo} className="w-[40px]" />
          <h1 className="font-semibold text-black">{text.webLogo}</h1>
        </div>

        <button
          className="text-[rgba(0,0,0,0.8)] hidden max-lg:block  text-xl cursor-pointer"
          onClick={() => {
            setCloseAINav(!closeAINav);
          }}
        >
          <FaBars />
        </button>

        <div
          className={`${
            closeAINav ? "max-lg:block" : "max-lg:hidden"
          } max-lg:absolute max-lg:left-0 top-14 max-lg:w-full max-lg:h-[400px] bg-white max-lg:px-0`}
        >
          <ul className="flex justify-evenly max-lg:flex-col w-full gap-5 max-lg:gap-0 text-[rgba(0,0,0,0.8)] text-lg text-center font-semibold">
            <li className="max-lg:border-t-[1px] py-3 cursor-pointer hover:underline">
              <a href="">Home</a>
            </li>
            <li className="max-lg:border-t-[1px] py-3 cursor-pointer hover:underline">
              <a href="">About</a>
            </li>
            <li className="max-lg:border-t-[1px] py-3 cursor-pointer hover:underline">
              <a href="">Work</a>
            </li>
            <li className="max-lg:border-t-[1px] py-3 cursor-pointer hover:underline">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>,
    <nav className={`bg-white w-full shadow-xl relative z-40`}>
      <div className={`flex justify-between items-center px-5`}>
        <div className="w-[20%] flex items-center gap-1 py-3">
          <img src={modalLogo} alt={modalLogo} className="w-[40px]" />
          <h1 className="font-semibold text-black">{text.webLogo}</h1>
        </div>

        <button
          className="text-[rgba(0,0,0,0.8)] hidden max-lg:block  text-xl cursor-pointer"
          onClick={() => {
            setCloseAINav(!closeAINav);
          }}
        >
          <FaBars />
        </button>

        <div
          className={`${
            closeAINav ? "max-lg:block" : "max-lg:hidden"
          } text-black bg-white font-medium flex max-lg:flex-col items-center justify-between w-[60%] max-lg:absolute max-lg:left-0 top-14 max-lg:w-full max-lg:h-[89vh] max-lg:block`}
        >
          <ul className="flex max-lg:flex-col max-lg:items-center max-lg:gap-0 gap-4">
            <li className="hover:text-[rgba(255,0,0)] max-lg:mt-8">
              <a href="">Home</a>
            </li>
            <li className="hover:text-[rgba(255,0,0)] max-lg:my-3">
              <a href="">Pricing</a>
            </li>
            <li className="hover:text-[rgba(255,0,0)] max-lg:my-3">
              <a href="">Features</a>
            </li>
          </ul>

          <ul className="flex max-lg:flex-col max-lg:items-center max-lg:gap-0 gap-4  lg:items-center">
            <li className="hover:text-[rgba(255,0,0)] max-lg:my-3">
              <a href="">Login</a>
            </li>
            <li className="bg-[rgba(0,0,0,0.1)] py-2 px-5 max-lg:px-10 rounded hover:text-[rgba(255,0,0)] max-lg:my-3">
              <a href="">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>,
    <nav
      className={`bg-white w-[90%] border-[1px] max-w-[800px] my-[20px] rounded-xl mx-auto shadow-xl relative left-0 z-40`}
    >
      <div className={`flex justify-between items-center px-5`}>
        <div className="w-[20%] flex items-center gap-1 py-3">
          <img src={modalLogo} alt={modalLogo} className="w-[40px]" />
          <h1 className="font-semibold text-black">{text.webLogo}</h1>
        </div>

        <button
          className="text-[rgba(0,0,0,0.8)] hidden max-lg:block  text-xl cursor-pointer"
          onClick={() => {
            setCloseAINav(!closeAINav);
          }}
        >
          <FaBars />
        </button>

        <div
          className={`${
            closeAINav ? "max-lg:block" : "max-lg:hidden"
          } text-black bg-white font-medium flex max-lg:flex-col items-center justify-between w-[65%] max-lg:absolute max-lg:left-0 top-20 max-lg:w-[250px] max-lg:h-[300px] max-lg:block max-lg:rounded-xl max-lg:shadow-xl`}
        >
          <ul className="flex max-lg:flex-col max-lg:items-center max-lg:gap-0 gap-4">
            <li className="hover:text-[rgba(255,0,0)] max-lg:mt-8">
              <a href="">Home</a>
            </li>
            <li className="hover:text-[rgba(255,0,0)] max-lg:my-3">
              <a href="">Pricing</a>
            </li>
            <li className="hover:text-[rgba(255,0,0)] max-lg:my-3">
              <a href="">Features</a>
            </li>
          </ul>

          <ul className="flex max-lg:flex-col max-lg:items-center max-lg:gap-0 gap-4  lg:items-center">
            <li className="hover:text-[rgba(255,0,0)] max-lg:my-3">
              <a href="">Login</a>
            </li>
            <li className="bg-[rgba(0,0,0,0.1)] py-2 px-5 max-lg:px-10 rounded hover:text-[rgba(255,0,0)] max-lg:my-3">
              <a href="">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>,
  ];

  const WebButtonsArray = [
    <div className="my-3 flex gap-3">
      <button className="py-3 px-4 bg-[rgba(0,0,0,0.9)] text-white shadow-lg hover:bg-[rgba(0,0,0,0.7)] rounded-full font-semibold min-w-[120px]">
        {text.buttonTexts[0]}
      </button>
      <button className="py-3 px-4 bg-[rgba(0,0,0,0.9)] text-white shadow-lg hover:bg-[rgba(0,0,0,0.7)] rounded-full font-semibold min-w-[120px]">
        {text.buttonTexts[1]}
      </button>
    </div>,
    <div className="my-3 flex gap-3">
      <button className="py-3 px-4 bg-[rgb(63,87,255)] shadow-lg hover:bg-white hover:text-[rgb(63,87,255)] hover:border-[1px] hover:border-[rgb(63,87,255)] rounded-xl font-semibold min-w-[200px]">
        {text.buttonTexts[0]}
      </button>
    </div>,
    <div className="my-3 flex gap-3">
      <button className="py-3 px-4 bg-white text-black shadow-lg border-[1px] rounded-xl font-semibold min-w-[200px]">
        {text.buttonTexts[0]}
      </button>
    </div>,
    <div className="my-3 flex gap-3 flex-wrap max-lg:justify-center">
      <button className="py-3 px-4 bg-[rgb(172,180,75)] shadow-lg hover:bg-white hover:text-[rgb(172,180,75)] hover:border-[1px] hover:border-[rgb(172,180,75)] rounded-xl font-semibold min-w-[150px] max-w-[200px]">
        {text.buttonTexts[0]}
      </button>
      <button className="py-3 px-4 border-[1px] text-[rgb(172,180,75)] border-[rgb(172,180,75)] shadow-lg hover:text-white hover:bg-[rgb(172,180,75)] rounded-xl font-semibold min-w-[150px] max-w-[200px]">
        {text.buttonTexts[1]}
      </button>
    </div>,
    <div className="my-3 flex gap-3">
      <button className="py-3 px-4 bg-white border-[1px] text-black shadow-lg hover:bg-white hover:text-[rgb(63,87,255)] hover:border-[1px] hover:border-[rgb(63,87,255)] font-semibold min-w-[250px]">
        {text.buttonTexts[0]}
      </button>
    </div>,
  ];

  const heroComponents = [
    <section
      className="text-black py-8 max-lg:block flex justify-evenly rounded-[8px] w-[95%] mx-auto my-[20px]"
      style={{
        background:
          "radial-gradient(circle at 100% 100%, rgba(241,209,160,1) 21%, rgba(186,170,233,1) 50%, #e2dcf6 75%, rgba(183,178,238,1) 100%)",
      }}
    >
      <div className="max-lg:w-[95%] w-[40%] max-lg:pb-10 max-lg:mx-auto rounded-[8px] lg:px-4">
        <h1 className="text-5xl md:text-[2.5rem] max-lg:text-center max-lg:max-w-[500px] mx-auto font-bold">
          {text.prompt}
        </h1>
        <p className="max-lg:text-center my-6 max-lg: max-lg:max-w-[400px] lg:max-w-[500px] max-lg:mx-auto max-lg:px-3">
          {text.description}
        </p>
        <div className="max-lg:flex justify-center">
          {buttonIndex !== undefined && WebButtonsArray[buttonIndex]}
        </div>
      </div>

      <div className="max-lg:hidden w-[55%] m-auto grid grid-cols-3 gap-4">
        <div className="bg-white shadow-md h-[200px]  p-3 rounded-[8px] col-span-2">
          <img
            src={text.images[0]}
            alt={text.images[0]}
            className="rounded-[8px] w-full h-full object-cover"
          />
        </div>
        <div className="bg-white shadow-md h-[200px]  p-3 rounded-[8px]">
          <img
            src={text.images[1]}
            alt={text.images[1]}
            className="rounded-[8px] w-full h-full object-cover"
          />
        </div>
        <div className="bg-white shadow-md h-[200px]  p-3 rounded-[8px]">
          <img
            src={text.images[2]}
            alt={text.images[2]}
            className="rounded-[8px] w-full h-full object-cover"
          />
        </div>
        <div className="bg-white shadow-md h-[200px]  p-3 rounded-[8px] col-span-2">
          <img
            src={geminiResponses.imageUrls && geminiResponses.imageUrls[3]}
            alt={geminiResponses.imageUrls && geminiResponses.imageUrls[3]}
            className="rounded-[8px] w-full h-full object-cover"
          />
        </div>
      </div>
    </section>,
    <section className="mb-[20px] py-10 px-5 bg-[rgb(26,26,26)]">
      <div className="flex justify-center gap-10 max-lg:flex-col lg:max-w-[]">
        <div className="max-lg:hidden w-[50%]">
          <h1 className="text-6xl text-white font-bold max-w-[500px]">
            {text.prompt}
          </h1>

          <div className="w-[85%] grid grid-cols-3 gap-4 my-10">
            <div className="bg-[rgba(0,0,0,0.5)] shadow-md h-[250px]  p-3 rounded-[8px] col-span-3">
              <img
                src={text.images[0]}
                alt={text.images[0]}
                className="rounded-[8px] w-full h-full object-cover"
              />
            </div>
            <div className="bg-[rgba(0,0,0,0.5)] shadow-md h-[200px]  p-3 rounded-[8px]">
              <img
                src={text.images[1]}
                alt={text.images[1]}
                className="rounded-[8px] w-full h-full object-cover"
              />
            </div>
            <div className="bg-[rgba(0,0,0,0.5)] shadow-md h-[200px]  p-3 rounded-[8px]">
              <img
                src={text.images[2]}
                alt={text.images[2]}
                className="rounded-[8px] w-full h-full object-cover"
              />
            </div>
            <div className="bg-[rgba(0,0,0,0.5)] shadow-md h-[200px]  p-3 rounded-[8px]">
              <img
                src={text.images[3]}
                alt={text.images[3]}
                className="rounded-[8px] w-full h-full object-cover"
              />
            </div>
            <div className="bg-[rgba(0,0,0,0.5)] shadow-md h-[250px]  p-3 rounded-[8px] col-span-3">
              <img
                src={text.images[4]}
                alt={text.images[4]}
                className="rounded-[8px] w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:max-w-[800px] max-lg:w-[95%] max-lg:mx-auto w-[50%]">
          <img
            src={text.images[5]}
            alt={text.images[5]}
            className="block max-lg:w-[95%] w-full h-[600px] max-lg:h-[400px] max-lg:max-w-[800px]"
          />
          <p className="my-5 max-lg:max-w-[400px]">{text.description}</p>
          {buttonIndex !== undefined && WebButtonsArray[buttonIndex]}
        </div>
      </div>
    </section>,
    <section
      className="max-md:h-[600px] bg-cover bg-no-repeat lg:mb-40 mb-5"
      style={{ backgroundImage: `url(${text.images[0]})` }}
    >
      <div className="bg-[rgba(0,0,0,0.5)] h-full relative pb-[10%]">
        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start">
          <div className="bg-[rgba(30,72,111,0.8)] w-[80%] max-w-[500px] max-md:h-[450px] lg:min-h-[350px] lg:ml-20 px-6 py-12 my-8">
            <h1 className="text-5xl max-md:text-3xl text-white font-bold">
              {text.prompt}
            </h1>
            <p className="py-4 max-w-[400px] font-medium">{text.description}</p>
            {buttonIndex !== undefined && WebButtonsArray[buttonIndex]}
          </div>
        </div>

        <div className="max-lg:hidden flex gap-5 justify-center absolute bottom-[-25%] w-full">
          <div className="bg-white shadow-lg text-black w-[20%] p-2 rounded-md  min-h-[150px] max-h-[200px]">
            <img
              src={text.images[1]}
              alt={text.images[1]}
              className="w-full rounded-md h-full"
            />
          </div>

          <div className="bg-white shadow-lg text-black w-[20%] p-2 rounded-md  min-h-[150px] max-h-[200px]">
            <img
              src={text.images[2]}
              alt={text.images[2]}
              className="w-full rounded-md h-full"
            />
          </div>

          <div className="bg-white shadow-lg text-black w-[20%] p-2 rounded-md  min-h-[150px] max-h-[200px]">
            <img
              src={text.images[3]}
              alt={text.images[3]}
              className="w-full rounded-md h-full"
            />
          </div>

          <div className="bg-white shadow-lg text-black w-[20%] p-2 rounded-md  min-h-[150px] max-h-[200px]">
            <img
              src={text.images[4]}
              alt={text.images[4]}
              className="w-full rounded-md h-full"
            />
          </div>
        </div>
      </div>
    </section>,
    <section className="h-[600px] max-lg:h-[750px] my-5 flex lg:gap-8 lg:justify-evenly max-lg:flex-col max-w-[1200px] mx-auto lg:pl-5">
      <div className="text-[rgb(33,37,41)] w-[40%] max-lg:w-[90%] max-w-[500px] mx-auto lg:pt-16">
        <h1 className="font-bold xl:text-5xl text-3xl mb-4">{text.prompt}</h1>
        <p className="font-medium">{text.description}</p>
        {buttonIndex !== undefined && WebButtonsArray[buttonIndex]}
      </div>
      <div className="relative w-[55%] h-full max-lg:w-full max-lg:max-w-[500px] max-lg:mx-auto">
        <div className="w-[250px] h-[400px] bg-[rgb(33,37,41)] rounded-[35px] px-3 pt-3 mb-4 absolute top-2 max-lg:left-[35%] max-lg:transform max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 max-lg:top-1/2 max-xl:top-2 max-xl:right-32 z-20">
          <img
            src={text.images[0]}
            alt={text.images[0]}
            className="h-[350px] rounded-[35px] object-cover"
          />
        </div>
        <div className="w-[260px] h-[480px] bg-[rgb(33,37,41)] rounded-[35px] px-3 pt-3 absolute max-lg:left-[60%] max-lg:transform max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 max-lg:top-1/2 top-[7%] right-0 xl:right-[28%] z-10">
          <img
            src={text.images[1]}
            alt={text.images[1]}
            className="h-[420px] rounded-[35px] object-cover"
          />
        </div>
        <div className="w-[260px] h-[450px] bg-[rgb(33,37,41)] rounded-[35px] px-3 py-3 absolute top-14 right-5 max-xl:hidden">
          <img
            src={text.images[2]}
            alt={text.images[2]}
            className="h-full rounded-[35px] object-cover"
          />
        </div>
      </div>
    </section>,
    <section className="my-5 max-w-[1000px] mx-auto flex justify-center max-lg:flex-col">
      <div className="text-[rgb(33,37,41)] w-[45%] max-lg:w-[90%] max-w-[500px] mx-auto lg:pt-16">
        <h1 className="font-bold xl:text-5xl text-3xl mb-4">{text.prompt}</h1>
        <p className="font-medium">{text.description}</p>
        {buttonIndex !== undefined && WebButtonsArray[buttonIndex]}
      </div>

      <div className="w-[45%] max-lg:w-full mt-10">
        <div className="w-[260px] mx-auto h-[480px] bg-[rgb(33,37,41)] rounded-[35px] px-3 pt-3">
          <img
            src={text.images[0]}
            alt={text.images[0]}
            className="h-[420px] rounded-[35px] object-cover"
          />
        </div>
      </div>
    </section>,
    <section className="my-5 max-w-[1000px] mx-auto flex flex-row-reverse justify-center max-lg:flex-col">
      <div className="text-[rgb(33,37,41)] w-[45%] max-lg:w-[90%] max-w-[500px] mx-auto lg:pt-16">
        <h1 className="font-bold xl:text-5xl text-3xl mb-4">{text.prompt}</h1>
        <p className="font-medium">{text.description}</p>
        {buttonIndex !== undefined && WebButtonsArray[buttonIndex]}
      </div>

      <div className="w-[45%] max-lg:w-full mt-10">
        <div className="w-[260px] mx-auto h-[480px] bg-[rgb(33,37,41)] rounded-[35px] px-3 pt-3">
          <img
            src={text.images[0]}
            alt={text.images[0]}
            className="h-[420px] w-full rounded-[35px] object-cover"
          />
        </div>
      </div>
    </section>,
    <section className="my-5 max-w-[1200px] mx-auto flex justify-center max-lg:flex-col-reverse">
      <div className="text-[rgb(33,37,41)] w-[45%] max-lg:w-[90%] max-w-[500px] mx-auto lg:pt-16">
        <h1 className="font-bold xl:text-5xl text-3xl mb-4">{text.prompt}</h1>
        <p className="font-medium">{text.description}</p>
        {buttonIndex !== undefined && WebButtonsArray[buttonIndex]}
      </div>

      <div className="w-[45%] max-lg:w-full mb-10">
        <div className="mx-auto w-[90%] max-w-[500px] h-[500px] bg-[rgb(33,37,41)] px-3 py-3">
          <img
            src={text.images[0]}
            alt={text.images[0]}
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </section>,
    <section className="my-5 max-w-[1200px] mx-auto flex flex-row-reverse justify-center max-lg:flex-col-reverse">
      <div className="text-[rgb(33,37,41)] w-[45%] max-lg:w-[90%] max-w-[500px] mx-auto lg:pt-16">
        <h1 className="font-bold xl:text-5xl text-3xl mb-4">{text.prompt}</h1>
        <p className="font-medium">{text.description}</p>
        {buttonIndex !== undefined && WebButtonsArray[buttonIndex]}
      </div>

      <div className="w-[45%] max-lg:w-full mb-10">
        <div className="mx-auto w-[90%] max-w-[500px] h-[500px] bg-[rgb(33,37,41)] px-3 py-3">
          <img
            src={text.images[0]}
            alt={text.images[0]}
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </section>,
    <section className="my-5 max-w-[1200px] mx-auto flex justify-center gap-5 max-lg:flex-col">
      <div className="w-[45%] max-lg:w-full">
        <div className="mx-auto w-[90%] max-w-[500px] h-[500px] bg-[rgb(33,37,41)] px-3 py-3">
          <img
            src={text.images[0]}
            alt={text.images[0]}
            className="object-cover h-full w-full"
          />
        </div>
      </div>

      <div className="text-[rgb(33,37,41)] w-[45%] max-lg:w-[90%] max-w-[500px] mx-auto lg:pt-16 max-lg:my-10">
        <h1 className="font-bold xl:text-4xl xl:text-center text-3xl mb-4">
          {text.prompt}
        </h1>
        <p className="font-medium">{text.description}</p>
        <div className="max-lg:mt-10 mt-5">
          {buttonIndex !== undefined && WebButtonsArray[buttonIndex]}
        </div>
      </div>

      <div className="w-[45%] max-lg:w-full mb-10">
        <div className="mx-auto w-[90%] max-w-[500px] h-[500px] bg-[rgb(33,37,41)] px-3 py-3">
          <img
            src={text.images[1]}
            alt={text.images[1]}
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </section>,
  ];

  const handleGenerateNav = () => {
    const randomNavIndex = Math.floor(Math.random() * navComponents.length);
    const randomHeroIndex = Math.floor(Math.random() * heroComponents.length);
    const randomButtonsIndex = Math.floor(
      Math.random() * WebButtonsArray.length
    );

    setNavIndex(randomNavIndex);
    setHeroIndex(randomHeroIndex);
    setButtonIndex(randomButtonsIndex);
  };

  const handleUserData = async () => {
    try {
      const response = await axiosInstance.get("/auth/user-data");
      setUserData(response.data);
    } catch (error) {
      console.error(error.response.data.error);
    }
  };

  const handleGeminiResponses = async () => {
    message.config({
      duration: 2,
      maxCount: 1,
    });
    setLoading(true);
    try {
      const response = await axiosInstance.post("/quick-ai", {
        prompt: userInput || selectedIdea,
      });
      setGeminiResponses({
        randomButtonText: response.data.randomButtonText,
        logo: response.data.logo,
        heroHeader: response.data.heroHeader,
        heroDescription: response.data.heroDescription,
        imageUrls: response.data.imageUrls,
      });
      if (response.data === 400) {
        setShowDesignModal(false);
      } else {
        setShowDesignModal(true);
      }
      handleGenerateNav();
    } catch (error) {
      console.error(error.response.data.error);
      message.error(error.response.data.error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const clearDesigns = () => {
    setShowDesignModal(false);
    setUserInput("");
    setSelectedIdea("");
    setGeminiResponses("");
    setShuffled(false);
    setNavIndex(undefined);
    setHeroIndex(undefined);
    setButtonIndex(undefined);
  };

  return (
    <DashContext.Provider
      value={{
        closeSideNav,
        setCloseSideNav,
        userModal,
        setUserModal,
        showDesignModal,
        setShowDesignModal,
        closeAINav,
        setCloseAINav,
        userData,
        handleUserData,
        geminiResponses,
        setGeminiResponses,
        handleGeminiResponses,
        userInput,
        setUserInput,
        selectedIdea,
        setSelectedIdea,
        loading,
        setLoading,
        WebButtonsArray,
        navComponents,
        heroComponents,
        clearDesigns,
        testDesignModal,
        setTestDesignModal,
        buttonIndex,
        navIndex,
        heroIndex,
      }}
    >
      {children}
    </DashContext.Provider>
  );
};
