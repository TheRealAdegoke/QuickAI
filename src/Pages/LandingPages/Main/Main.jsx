import React, { useContext, useEffect } from "react";
import Nav from "../Nav/Nav";
import Hero from "../MainComponents/Hero";

const Main = () => {
  return (
    <>
      <main className="radial min-h-screen">
        <Nav />
        <Hero />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minus voluptatum quo vero odio magni corrupti est rerum veniam qui, culpa repellendus? Architecto, incidunt odit recusandae pariatur error quaerat autem.</p>
      </main>
    </>
  );
};

export default Main;
