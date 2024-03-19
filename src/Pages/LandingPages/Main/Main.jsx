import React, { useContext, useEffect } from "react";
import Nav from "../Nav/Nav";
import Hero from "../Hero/Hero";
import { Helmet } from "react-helmet";

const Main = () => {
  return (
    <>
      <Helmet>
        <title>QuickUI - Generate Websites designs Fast with AI</title>
        <meta
          name="description"
          content="QuickUI helps you create awesome websites super quickly! No more spending hours designing – QuickUI uses AI to do it for you. Start now!"
        />
        <meta
          name="keywords"
          content="QuickUI, website design, AI, fast, quick, easy, automated, web development, create websites, AI-powered design, design tool, time-saving, efficient"
        />
      </Helmet>

      <main className="radial h-screen">
        <Nav />
        <Hero />
      </main>
    </>
  );
};

export default Main;
