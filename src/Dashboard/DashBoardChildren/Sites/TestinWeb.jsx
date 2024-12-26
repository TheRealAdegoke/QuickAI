// StateContext.js
import { createContext } from "react";

export const StateContext = createContext();

// TestingWeb.jsx
import React, { useState, useContext, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import JsxParser from "react-jsx-parser";
import { IoClose } from "react-icons/io5";
import { HiMiniBars2 } from "react-icons/hi2";
import { TiArrowRightOutline } from "react-icons/ti";

export const StateProvider = ({ children }) => {
  const [toggleNav, setToggleNav] = useState(false);
  const [active, setActive] = useState(1);
  const homeSidebarRef = useRef(null);
  const location = useLocation();

  const handleToggleNav = () => {
    setToggleNav((prev) => !prev);
  };

  const value = {
    toggleNav,
    handleToggleNav,
    active,
    setActive,
    homeSidebarRef,
    location,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

const CustomJsxParser = ({ jsx }) => {
  const state = useContext(StateContext);

  const bindings = {
    toggleNav: state.toggleNav,
    setToggleNav: state.handleToggleNav,
    active: state.active,
    setActive: state.setActive,
    homeSidebarRef: state.homeSidebarRef,
    location: state.location,
  };

  const components = {
    Link,
    IoClose,
    HiMiniBars2,
    TiArrowRightOutline,
  };

  return (
    <JsxParser
      jsx={jsx}
      bindings={bindings}
      components={components}
      renderInWrapper={false}
      blacklistedAttrs={[]}
      showWarnings={true}
    />
  );
};

// Main component that uses the parser
const TestingWeb = ({ historyData }) => {
  return (
    <StateProvider>
      <main>
        <div className="">
          {historyData?.style?.map((styles, index) => (
            <CustomJsxParser key={index} jsx={styles} />
          ))}
        </div>
      </main>
    </StateProvider>
  );
};

export default TestingWeb;
