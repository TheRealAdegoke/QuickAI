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
        <meta charSet="utf-8" />
        <title>QuickUI - Effortless Landing Page Creation</title>

        {/* Canonical URL */}
        <link rel="canonical" href="http://quickui.co" />

        {/* Meta Description */}
        <meta
          name="description"
          content="QuickUI helps you create and customize landing pages effortlessly. No coding skills required. Get started today and build your next project with ease."
        />

        {/* Keywords for SEO */}
        <meta
          name="keywords"
          content="QuickUI, landing pages, web design, create landing page, no code, easy web design, landing page builder"
        />

        {/* Open Graph for Social Sharing */}
        <meta
          property="og:title"
          content="QuickUI - Effortless Landing Page Creation"
        />
        <meta
          property="og:description"
          content="Create and customize landing pages effortlessly with QuickUI. Get started today!"
        />
        <meta property="og:url" content="http://quickui.co" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://quickui.co/assets/preview-image-DktLHLuD.png"
        />

        {/* Twitter Card for Social Sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="QuickUI - Effortless Landing Page Creation"
        />
        <meta
          name="twitter:description"
          content="QuickUI makes creating landing pages easy. Try it out today!"
        />
        <meta
          name="twitter:image"
          content="https://quickui.co/assets/preview-image-DktLHLuD.png"
        />
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