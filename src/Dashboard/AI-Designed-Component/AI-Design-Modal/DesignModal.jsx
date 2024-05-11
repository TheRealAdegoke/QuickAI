import React, { useContext, useRef, useState } from "react";
import { DashContext } from "../../DashboardChecker/DashboardContext";
import reactElementToJSXString from "react-element-to-jsx-string";
import { axiosInstance } from "../../../Pages/AuthPages/AuthChecker/axiosInstance";
import html2canvas from "html2canvas";
import { ImSpinner6 } from "react-icons/im";
import axios from "axios";

const DesignModal = () => {
  const {
    showDesignModal,
    heroIndex,
    navIndex,
    navComponents,
    heroComponents,
    userInput,
    selectedIdea,
    handleUserData,
    clearDesigns,
  } = useContext(DashContext);
  const ref = useRef(null);
  const [loading, setLoading] = useState(false);


   const saveDesign = async () => {
    setLoading(true);
     try {
       const canvas = await html2canvas(ref.current, { useCORS: true });
       const dataURL = canvas.toDataURL();
       const formData = new FormData();
       formData.append("file", dataURL);
       formData.append("upload_preset", "bgoegsr5");

       const cloudinaryResponse = await axios.post(
         "https://api.cloudinary.com/v1_1/dpyp7innp/image/upload",
         formData
       );
       const cloudinaryURL = cloudinaryResponse.data.secure_url;

       const postData = {
         prompt: userInput || selectedIdea,
         navStyle: {
           index: navIndex,
           style: reactElementToJSXString(navComponents[navIndex]),
         },
         heroStyle: {
           index: heroIndex,
           style: reactElementToJSXString(heroComponents[heroIndex]),
         },
         webDesignImagePreview: cloudinaryURL,
       };

       await axiosInstance.post(
         "save-landing-styles",
         postData
       );

       clearDesigns()
       handleUserData();
     } catch (error) {
       console.error(error);
     } finally {
       setLoading(false);
     }
   };


  return (
    <>
      <div
        className={`${
          showDesignModal ? "block" : "hidden"
        } w-full mt-5 max-md:mt-0 mx-10 h-[93vh] max-md:h-[89vh] max-[499px]:mx-4 overflow-hidden`}
      >
        <div className="mb-5 flex justify-end items-end">
          <button
            type="submit"
            className="text-black bg-white w-[200px] hover:bg-[rgba(255,255,255,0.9)] block p-3 rounded-[5px] font-medium"
            onClick={saveDesign}
            disabled={loading}
          >
            {loading ? (
              <div>
                <ImSpinner6 className="animate-spin text-2xl text-black block mx-auto" />
              </div>
            ) : (
              "Save"
            )}
          </button>
        </div>
        <main ref={ref} className="bg-white h-[90%] overflow-y-scroll">
          {navIndex !== undefined && navComponents[navIndex]}
          {heroIndex !== undefined && heroComponents[heroIndex]}
        </main>
      </div>
    </>
  );
};

export default DesignModal;
