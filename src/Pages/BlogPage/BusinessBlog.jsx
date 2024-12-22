import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import countryCityData from "./CoutriesStates.json";
import { Helmet } from "react-helmet";
import Nav from "../LandingPages/Nav/Nav";
import Footer from "../LandingPages/MainComponents/Footer";
import Markdown from "react-markdown";

const BusinessBlog = () => {
  const { location, city } = useParams();
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    validateLocationAndCity();
  }, [location, city]);

  const validateLocationAndCity = () => {
    // Check if location exists in our data
    if (!countryCityData[location]) {
      navigate("*");
      return;
    }

    // Check if city exists in the location's array
    const cityExists = countryCityData[location].some(
      (c) => c.toLowerCase() === city.toLowerCase()
    );

    if (!cityExists) {
      navigate("/404");
      return;
    }

    setIsValid(true);
  };

  if (!isValid) {
    return null;
  }

  const components = {
    h1: ({ children }) => (
      <h1 className="text-2xl font-extrabold text-purple-200 mb-6 mt-8 max-md:text-lg uppercase">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-white mb-5 mt-6 max-md:text-lg capitalize">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-medium text-white mb-4 mt-5 max-md:text-lg capitalize ">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-medium text-white mb-4 mt-5 max-md:text-lg capitalize">
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
      <li className="text-gray-300 text-lg my-5 max-md:text-sm">{children}</li>
    ),
    img: ({ src, alt }) => (
      <img
        src={src}
        alt={alt}
        className="w-full h-auto my-5 block rounded-lg shadow-md"
        title="Blog image"
        loading="lazy"
        width="40"
        height="40"
      />
    ),
    // Add blog content here
    blogContent: `# Design landing page with ai: How to Make a Good Landing Page for Businesses in ${city}\nA well-crafted landing page is essential for any business, especially in competitive markets like ${city}. With millions of businesses vying for attention, a landing page needs to not only grab the user's attention but also convert them into customers. In this article, we explore how businesses in ${city} can create an effective landing page that drives conversions and increases ROI.\n\n![${city} Business Landing Page](https://img.freepik.com/free-psd/business-company-landing-page-template_23-2148924994.jpg)\n\n## 1. Clear and Compelling Headline\nThe headline is the first thing users see when they land on your page. It should clearly communicate what your business offers and grab their attention.\n- **Benefit-driven**: Focus on how your business solves a problem or adds value.\n- **Concise and clear**: Avoid long, complicated phrases. Your headline should be quick to understand.\n\n**Tip**: Make sure your headline speaks directly to the target audience in ${city}. For example, if you’re a local coffee shop, something like “The Best Coffee in ${city}” could grab attention.\n\n## 2. Localize Your Content\nIn a city like ${city}, where people expect personalized experiences, localizing your landing page content can make a significant impact.\n- **Use local references**: Mention ${city} landmarks, neighborhoods, or events that resonate with your audience.\n- **Tailor your language**: Speak to the culture of ${city} – fast-paced, diverse, and sophisticated.\n\n**Example**: If you're a restaurant, mention your location in NYC or talk about popular local dishes.\n\n## 3. Include Social Proof and Testimonials\n${city}ers tend to trust recommendations from others. Adding social proof, such as customer testimonials, reviews, or media coverage, can build trust and credibility.\n- **Customer reviews**: Feature positive reviews from local clients or customers.\n- **Social media mentions**: If your business has been featured on ${city}-centric websites or blogs, showcase those mentions.\n\n**Tip**: Including a testimonial from a well-known ${city} local or influencer can boost credibility.\n\n## 4. Focus on Call-to-Action (CTA)\nYour landing page should guide visitors toward a specific action. Whether it's making a purchase, signing up for a service, or contacting you, a clear and compelling CTA is essential.\n- **Visible and direct**: Your CTA should stand out on the page, encouraging immediate action.\n- **Use urgency**: Phrases like “Limited Offer” or “Get Started Today” can increase conversions.\n\n**Example**: A ${city}-based real estate business might use a CTA like “Find Your Dream Apartment in ${city} Today!”\n\n## 5. Optimize for Mobile Devices\nMany ${city}ers browse the internet on their mobile devices while on the go. Therefore, it’s crucial to optimize your landing page for mobile users.\n- **Responsive design**: Ensure your landing page is mobile-friendly and loads quickly.\n- **Minimal design**: Avoid clutter, as mobile screens have limited space.\n\n**Tip**: Test your landing page on multiple devices to ensure it looks great and functions smoothly on any screen size.\n\n## 6. Speed and Performance\nIn the fast-paced environment of ${city}, users won’t wait long for your page to load. Slow load times can increase bounce rates and reduce conversions.\n- **Optimize images and content**: Use compressed images and clean code to ensure fast load times.\n- **Test regularly**: Use tools like Google PageSpeed Insights to test the performance of your landing page.\n\n**Tip**: Aim for a load time of 3 seconds or less for a smooth user experience.\n\n### Conclusion\nA successful landing page for a business in ${city} needs to be clear, localized, and optimized for mobile users. By focusing on strong headlines, social proof, and a compelling CTA, businesses can increase their chances of converting visitors into customers. Don't forget to test your page regularly and optimize for speed to ensure a seamless user experience.\n\nFor more tips on creating effective landing pages, check out [QuickUI](https://quickui.co), the best platform for creating landing page designs that help you get more customers.`,
  };


  return (
    <>
      <Helmet>
        <title>{`Design landing page with ai: How to Make a Good Landing Page for Businesses in ${city}`}</title>
        <meta
          name="description"
          content={`Learn how to design a landing page that helps businesses in ${city} attract local customers and boost conversions. Discover simple tips to create impactful pages.`}
        />
        <meta
          name="keywords"
          content={`Design landing page with ai: How to Make a Good Landing Page for Businesses in ${city}`}
        />
        <meta
          property="og:title"
          content={`Design landing page with ai: How to Make a Good Landing Page for Businesses in ${city}`}
        />
        <meta
          property="og:description"
          content={`Learn how to design a landing page that helps businesses in ${city} attract local customers and boost conversions. Discover simple tips to create impactful pages.`}
        />
        <meta property="og:image" content="https://i.imgur.com/HSA0Pbh.png" />
        <meta
          property="og:url"
          content={`https://quickui.co/blog/article/${location}/${city}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Design landing page with ai: How to Make a Good Landing Page for Businesses in ${city}`}
        />
        <meta
          name="twitter:description"
          content={`Learn how to design a landing page that helps businesses in ${city} attract local customers and boost conversions. Discover simple tips to create impactful pages.`}
        />
        <meta name="twitter:image" content="https://i.imgur.com/HSA0Pbh.png" />
        <link
          rel="canonical"
          href={`https://quickui.co/blog/article/${location}/${city}`}
        />
      </Helmet>
      <Nav />
      <main className="radial min-h-screen overflow-y-hidden pt-[100px]">
        <div className="mb-20">
          <div className="w-[90%] max-w-[800px] mx-auto">
            <div className="mb-20">
              <Markdown components={components}>
                {components.blogContent}
              </Markdown>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default BusinessBlog;
