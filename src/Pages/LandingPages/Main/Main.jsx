import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";
import Hero from "../MainComponents/Hero";
import HomeSectionOne from "../MainComponents/HomeSectionOne";
import HomeSectionTwo from "../MainComponents/HomeSectionTwo";
import Footer from "../MainComponents/Footer";
import HomeSectionThree from "../MainComponents/HomeSectionThree";
import HomeSectionFour from "../MainComponents/HomeSectionFour";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Create a landing page ai</title>
        <meta
          name="description"
          content="QuickUI lets you easily create landing pages without coding. Build your next project faster with our intuitive platform."
        />
        <meta name="keywords" content="Create a landing page ai" />
        <meta property="og:title" content="Create a landing page ai" />
        <meta
          property="og:description"
          content="QuickUI helps you build and customize landing pages easily. No coding skills needed!"
        />
        <meta property="og:image" content="https://i.imgur.com/HSA0Pbh.png" />
        <meta property="og:url" content="https://quickui.co" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Create a landing page ai" />
        <meta
          name="twitter:description"
          content="Create and customize landing pages easily with QuickUI!"
        />
        <meta name="twitter:image" content="https://i.imgur.com/HSA0Pbh.png" />
        <link rel="canonical" href="https://quickui.co" />
      </Helmet>
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
