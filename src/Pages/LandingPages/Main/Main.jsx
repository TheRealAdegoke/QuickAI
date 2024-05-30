import React, { useContext, useEffect } from "react";
import Nav from "../Nav/Nav";
import Hero from "../MainComponents/Hero";
import HomeSectionOne from "../MainComponents/HomeSectionOne";

const Main = () => {
  return (
    <>
      <main className="radial min-h-screen pb-10">
        <Nav />
        <Hero />
        <HomeSectionOne/>
      </main>
    </>
  );
};

export default Main;
