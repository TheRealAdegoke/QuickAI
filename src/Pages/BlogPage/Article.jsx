import React from "react";
import { Link, useParams } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import blogData from "./blog.json";
import Nav from "../LandingPages/Nav/Nav";
import Footer from "../LandingPages/MainComponents/Footer";
import { IoChevronForward } from "react-icons/io5";
import { FaRegCalendar, FaClock } from "react-icons/fa6";
import { Helmet } from "react-helmet";

const Article = () => {
  const { slug } = useParams();
  const article = blogData.articles.find((article) => article.slug === slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  const components = {
    h1: ({ children }) => (
      <h1 className="text-6xl font-extrabold text-purple-200 mb-6 mt-8 max-md:text-lg ">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-[#ffffff8c] mb-5 mt-6 text-center max-md:text-lg ">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-medium text-white mb-4 mt-5 max-md:text-lg ">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-medium text-white mb-4 mt-5 max-md:text-lg">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <span className="text-gray-300 text-lg my-4 leading-relaxed max-md:text-sm mb-9">
        {children}
      </span>
    ),
    strong: ({ children }) => (
      <strong className=" font-medium text-white">{children}</strong>
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
      <img src={src} alt={alt} className="w-full h-auto my-5 block rounded-lg shadow-md" />
    ),
  };

  return (
    <>
      <Helmet>
        <title>{article.title} | Your Blog Name</title>
        <meta name="description" content={article.description} />
        <meta name="keywords" content={article.keyword} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:image" content={article.imageUrl} />
        <meta
          property="og:url"
          content={`https://quickui.co/blog/article/${article.slug}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.description} />
        <meta name="twitter:image" content={article.imageUrl} />
        <link
          rel="canonical"
          href={`https://quickui.co/blog/article/${article.slug}`}
        />
      </Helmet>
      <Nav />
      <main className="radial min-h-screen overflow-y-hidden pt-[100px]">
        <div className="flex gap-3 text-sm mb-7 capitalize font-semibold w-[90%] max-w-[800px] mx-auto">
          <Link to="/" className="flex gap-2 items-center">
            Home <IoChevronForward />
          </Link>
          <Link to="/blog" className="flex gap-2 items-center">
            Article <IoChevronForward />
          </Link>
          <Link
            to={`/blog/article/${article.slug}`}
            className="flex gap-2 items-center text-[rgb(76,76,227)]"
          >
            {article.slug}
          </Link>
        </div>
        <div className="w-[90%] max-w-[800px] mx-auto">
          <h1 className="text-2xl font-bold mb-2">{article.title}</h1>
          <div className="flex gap-4">
            <p className="text-sm font-bold flex items-center gap-2">
              <span className="font-bold">
                <FaRegCalendar />
              </span>
              {article.date}
            </p>
            <p className="text-sm font-bold flex items-center gap-2">
              <span className="font-bold">
                <FaClock />
              </span>
              {article.estimatedReadingTime}
            </p>
          </div>
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-auto my-5"
            loading="lazy"
          />
          <div className="mb-20">
            <Markdown components={components}>{article.content}</Markdown>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Article;
