import React, { useContext, useEffect } from "react";
import Nav from "../Nav/Nav";
import Hero from "../MainComponents/Hero";
import HomeSectionOne from "../MainComponents/HomeSectionOne";
import HomeSectionTwo from "../MainComponents/HomeSectionTwo";

const Main = () => {
  return (
    <>
      <main className="radial min-h-screen pb-10 overflow-y-hidden">
        <Nav />
        <Hero />
        <HomeSectionOne/>
        <HomeSectionTwo/>
      </main>
    </>
  );
};

export default Main;
