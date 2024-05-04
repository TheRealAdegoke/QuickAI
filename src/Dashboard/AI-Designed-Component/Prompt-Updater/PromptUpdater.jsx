import React, { useContext, useState, useEffect } from "react";
import { DashContext } from "../../DashboardChecker/DashboardContext";

const PromptUpdater = () => {
  const { geminiResponses } = useContext(DashContext);
  const [text, setText] = useState({
    prompt: "",
    description: "",
    images: [],
    webLogo: "",
    buttonTexts: [],
  });

  const [shuffled, setShuffled] = useState(false);

  useEffect(() => {
    if (!shuffled) {
      // Shuffle the buttonTexts array when component mounts
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
  }, [geminiResponses, text, shuffled]);

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
    }, 30);

    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, [geminiResponses, text]);

  return {
    prompt: text.prompt,
    description: text.description,
    images: text.images,
    webLogo: text.webLogo,
    buttonTexts: text.buttonTexts,
  };
};

export default PromptUpdater;
