import React, { useContext, useEffect } from "react";
import Nav from "../Nav/Nav";
import Hero from "../Hero/Hero";

const Main = () => {
  return (
    <>
      <main className="radial h-screen">
        <Nav />
        <Hero />
      </main>
    </>
  );
};

export default Main;
