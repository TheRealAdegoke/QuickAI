import React, { useEffect, useRef, useState } from "react";
import { MdChatBubble } from "react-icons/md";
import { IoMdArrowRoundUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import { axiosInstance } from "../../../../Pages/AuthPages/AuthChecker/axiosInstance";
import Markdown from "react-markdown";
import ServiceAI from "../../../../assets/QuickAI-Service.webp"

const LoadingDots = () => (
  <div className="flex justify-center items-center gap-1 p-2">
    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></span>
    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-200"></span>
    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-400"></span>
  </div>
);

const Chat = () => {
  const [toggleChat, setToggleChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null); // State to track the copied message index
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  useEffect(() => {
    const savedMessages = localStorage.getItem("chatHistory");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const userMessage = { role: "user", content: userInput };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setUserInput("");
    setIsLoading(true);

    try {
      const { data } = await axiosInstance.post("/quick-ai", {
        prompt: userInput,
        history: messages,
      });

      const botMessage = { role: "bot", content: data.response };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = {
        role: "bot",
        content: "Sorry, I encountered an error. Please try again.",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem("chatHistory");
  };

  // Function to copy text to clipboard
  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index); // Set the copied index
      setTimeout(() => {
        setCopiedIndex(null); // Reset after 1500ms
      }, 1500);
    });
  };

  const components = {
    h1: ({ children }) => (
      <h1 className="text-6xl font-extrabold text-purple-200 mb-6 mt-8 max-md:text-lg ">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-[#ffffff8c] mb-5 mt-6 text-center max-md:text-lg ">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-medium text-white mb-4 mt-5 max-md:text-lg ">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-medium text-white mb-4 mt-5 max-md:text-lg">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <span className="text-gray-300 text-lg my-4 leading-relaxed max-md:text-sm mb-9">
        {children}
      </span>
    ),
    strong: ({ children }) => (
      <strong className="font-medium text-white">{children}</strong>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside my-4 pl-4">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside my-4 pl-4 max-md:text-sm">
        {children}
      </ol>
    ),
    a: ({ children, href }) => (
      <a href={href} className="text-blue-500 hover:underline">
        {children}
      </a>
    ),
    li: ({ children }) => (
      <li className="text-gray-300 my-3 text-sm">{children}</li>
    ),
  };

  return (
    <div className="relative h-full">
      <button
        className="text-white text-3xl bg-[rgb(18,20,45)] size-[60px] rounded-full flex justify-center items-center absolute bottom-2 right-0"
        onClick={() => setToggleChat(!toggleChat)}
      >
        {toggleChat ? <IoClose /> : <MdChatBubble />}
      </button>

      <div
        className={`${
          toggleChat ? "block" : "hidden"
        } h-[500px] w-[400px] absolute bottom-[80px] right-0 bg-[rgb(18,20,45)] rounded-md flex flex-col justify-between`}
      >
        <div ref={contentRef} className="content h-[87%] overflow-y-scroll">
          <div className="flex justify-end items-center p-2 border-b border-gray-700 sticky top-0 bg-[rgb(18,20,45)] z-50">
            <button
              onClick={clearChat}
              className="text-gray-400 hover:text-white text-sm"
            >
              Clear Chat
            </button>
          </div>
          <div>
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full pt-14 pl-10">
                <img
                  src={ServiceAI}
                  alt="Service AI"
                  className=""
                />
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className="mb-2 p-2 rounded-md text-white relative"
                >
                  <div
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    } relative`}
                  >
                    {message.role === "bot" && (
                      <div className="absolute right-[20%] flex items-center">
                        {copiedIndex !== index && ( // Only show if not copied
                          <FaClipboardList
                            className="cursor-pointer text-white mr-2"
                            onClick={() =>
                              copyToClipboard(message.content, index)
                            }
                          />
                        )}
                        {copiedIndex === index && ( // Show the check icon for the copied message
                          <FaClipboardCheck className="text-green-400 mr-2" />
                        )}
                      </div>
                    )}
                    <div
                      className={`${
                        message.role === "user"
                          ? "bg-[rgb(30,30,30)]"
                          : "bg-[rgb(40,40,40)] min-w-[80%]"
                      } max-w-[80%] px-2 py-1 rounded-md`}
                    >
                      <Markdown components={components}>
                        {message.content}
                      </Markdown>
                    </div>
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex justify-start mb-2 p-2">
                <div className="max-w-[80%] rounded">
                  <LoadingDots />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="relative">
          <form
            className="absolute left-1/2 transform -translate-x-1/2 bottom-5 w-[90%] mx-auto flex justify-between gap-1 border-[1px] py-1 pr-2 rounded-md"
            onSubmit={handleSendMessage}
          >
            <input
              type="text"
              className="w-full bg-transparent pl-3 text-white text-xl border-none outline-none"
              placeholder="Ask QuickAI Anything"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button
              type="submit"
              className="rounded-full"
              disabled={!userInput.trim()}
            >
              <span
                className={`${
                  userInput.trim() ? "bg-[rgb(201,209,217)]" : "bg-gray-600"
                } block rounded-full p-2 text-[rgb(9,11,14)]`}
              >
                <IoMdArrowRoundUp />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
