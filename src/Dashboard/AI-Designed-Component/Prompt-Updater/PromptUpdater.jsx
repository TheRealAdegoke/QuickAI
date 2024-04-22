import React, { useContext, useState, useEffect } from "react";
import { DashContext } from "../../DashboardChecker/DashboardContext";

const PromptUpdater = () => {
  const { geminiResponses } = useContext(DashContext);
  const [text, setText] = useState({
    prompt: "",
    description: "",
    images: [],
  });
  const [randomImageIndex, setRandomImageIndex] = useState(0);

  useEffect(() => {
    // Select a random image index once when the component mounts
    const randomIndex = Math.floor(
      Math.random() * geminiResponses.imageUrls.length
    );
    setRandomImageIndex(randomIndex);
  }, [geminiResponses]);

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
      }));
    }, 100);

    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, [geminiResponses, text]);

  return {
    prompt: text.prompt,
    description: text.description,
    images: text.images[randomImageIndex],
  };
};

export default PromptUpdater;
