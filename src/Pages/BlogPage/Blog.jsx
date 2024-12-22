import React, { useEffect, useState } from "react";
import Nav from "../LandingPages/Nav/Nav";
import Footer from "../LandingPages/MainComponents/Footer";
import blogData from "./blog.json";
import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Helmet } from "react-helmet";
import axios from "axios";

const Blog = () => {
  const latestArticle = blogData.articles[blogData.articles.length - 1];
  const articlesPerPage = 8; // Number of articles to display per page
  const totalArticles = blogData.articles.length; // Total number of articles
  const [page, setPage] = useState(1); // Current page state


  // Calculate the starting and ending index for articles on the current page
  const startIndex = (page - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;

  // Reverse the articles and slice for pagination
  const paginatedArticles = blogData.articles
    .slice()
    .reverse()
    .slice(startIndex, endIndex); // Slice the reversed articles for the current page

  // Handle next page click
  const handleNextPage = () => {
    if (page * articlesPerPage < totalArticles) {
      setPage(page + 1);
    }
  };

  // Handle previous page click
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <>
      <Helmet>
        <title>{latestArticle.title}</title>
        <meta name="description" content={latestArticle.description} />
        <meta name="keywords" content={latestArticle.keyword} />
        <meta property="og:title" content={latestArticle.title} />
        <meta property="og:description" content={latestArticle.description} />
        <meta property="og:image" content={latestArticle.imageUrl} />
        <meta
          property="og:url"
          content={`https://quickui.co/blog/article/${latestArticle.slug}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://quickui.co/blog`} />
      </Helmet>
      <Nav />
      <main className="radial min-h-screen overflow-y-hidden pt-[100px]">
        <div className="mb-20">
          <div className="flex gap-3 text-sm mb-7 max-sm:mb-0 capitalize font-semibold w-[84%] 2xl:w-[70%] mx-auto">
            <Link to="/" className="flex gap-2 items-center">
              Home <IoChevronForward />
            </Link>
            <Link
              to="/blog"
              className="flex gap-2 items-center text-[rgb(76,76,227)]"
            >
              Article
            </Link>
          </div>

          {/* Latest Article */}
          {(() => {
            const article = latestArticle; // You can keep this unchanged as it already gets the latest article
            return (
              <article
                key={article.slug}
                className="w-[90%] 2xl:max-w-[1400px] max-lg:max-w-[600px] mx-auto"
              >
                <div className="flex justify-center max-lg:flex-col max-lg:items-center">
                  <div className="w-[50%] max-lg:w-full pt-10 lg:pl-10">
                    <h1 className="text-4xl max-sm:text-xl font-bold mb-2 max-w-[600px]">
                      {article.title}
                    </h1>
                    <p className="text-base text-[rgba(255,255,255,0.8)] mb-2 max-w-[600px]">
                      {article.description}
                    </p>
                    <div className="flex gap-4 mb-3">
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
                    <Link
                      to={`/blog/article/${article.slug}`}
                      className="text-[rgb(76,76,227)]"
                    >
                      Read Article
                    </Link>
                  </div>

                  <div className="w-[50%] max-lg:w-full">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-auto my-5 block rounded-lg shadow-md"
                      title="Blog image"
                      loading="lazy"
                      width="40"
                      height="40"
                    />
                  </div>
                </div>
              </article>
            );
          })()}

          {/* Articles List */}
          <div className="">
            <h2 className="text-center text-3xl font-semibold mt-20 mb-10">
              Articles
            </h2>

            {/* Pagination Controls */}
            <div className="flex justify-end gap-3 items-center w-[95%] max-lg:w-[85%] max-lg:max-w-[500px] lg:max-w-[900px] xl:max-w-[1200px] mx-auto mb-5">
              <span>{totalArticles} results</span>
              <span className="w-[70px] h-[20px] flex justify-between text-xl border-[1px] border-slate-600">
                <button
                  className={`w-1/2 pl-1 ${
                    page === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={handlePreviousPage}
                  disabled={page === 1}
                >
                  <FaLongArrowAltLeft />
                </button>
                <button
                  className={`w-1/2 pl-2 ${
                    page * articlesPerPage >= totalArticles
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={handleNextPage}
                  disabled={page * articlesPerPage >= totalArticles}
                >
                  <FaLongArrowAltRight />
                </button>
              </span>
              <span className="flex">
                {startIndex + 1} - {Math.min(endIndex, totalArticles)}
              </span>
            </div>

            {/* Display Articles for the Current Page */}
            <div className="flex flex-wrap justify-center max-lg:flex-col max-lg:items-center gap-5 max-lg:gap-10 xl:max-w-[1320px] mx-auto">
              {paginatedArticles.map((article) => (
                <Link
                  to={`/blog/article/${article.slug}`}
                  key={article.id}
                  className="w-[30%] max-lg:w-[85%] max-w-[300px] max-lg:max-w-[500px] h-full"
                >
                  <div className="min-h-[400px] max-lg:min-h-[400px] border-[1px] border-[rgba(255,255,255,0.5)] hover:border-[rgb(9,105,221)] border-t-0 rounded-xl lg:mb-10 pb-5">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full rounded-t-xl mb-5 block shadow-md"
                      title="Blog image"
                      loading="lazy"
                      width="40"
                      height="40"
                    />
                    <div className="px-3">
                      <h3 className="text-lg max-sm:text-xl font-bold mb-2">
                        {article.title}
                      </h3>
                      <p className="text-base text-[rgba(255,255,255,0.8)] mb-2 max-w-[600px]">
                        {article.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Blog;
