import React, { useContext, useState, useEffect } from "react";
import { DashContext } from "../../DashboardChecker/DashboardContext";

const PromptUpdater = () => {
  const { geminiResponses } = useContext(DashContext);
  const [text, setText] = useState({
    prompt: "",
    description: "",
    images: [],
    webLogo: ""
  });


  useEffect(() => {
    const timeout = setTimeout(() => {
      setText((prevText) => ({
        ...prevText,
        prompt: geminiResponses.heroHeader.slice(0, prevText.prompt.length + 1),
        description: geminiResponses.heroDescription.slice(
          0,
          prevText.description.length + 1
        ),
        images: geminiResponses.imageUrls,
        webLogo: geminiResponses.logo.slice(0, prevText.webLogo.length + 1),
      }));
    }, 100);

    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, [geminiResponses, text]);

  return {
    prompt: text.prompt,
    description: text.description,
    images: text.images,
    webLogo: text.webLogo
  };
};

export default PromptUpdater;
