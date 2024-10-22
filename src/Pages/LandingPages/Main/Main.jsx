import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";
import Hero from "../MainComponents/Hero";
import HomeSectionOne from "../MainComponents/HomeSectionOne";
import HomeSectionTwo from "../MainComponents/HomeSectionTwo";
import Footer from "../MainComponents/Footer";
import HomeSectionThree from "../MainComponents/HomeSectionThree";
import HomeSectionFour from "../MainComponents/HomeSectionFour";

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "q" || event.key === "Q") {
        navigate("/register");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  return (
    <>
      <main className="radial min-h-screen overflow-y-hidden">
        <Nav />
        <div className="pt-[100px] flex justify-center mb-10">
          <div className="dLSFRA px-10 py-2 max-lg:hidden">
            <p>Press Q to register</p>
          </div>
        </div>
        <Hero />
        <HomeSectionOne />
        <HomeSectionTwo />
        <HomeSectionThree />
        <HomeSectionFour />
        <Footer />
      </main>
    </>
  );
};

export default Main;