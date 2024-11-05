import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import countryCityData from './CoutriesStates.json';
import { Helmet } from "react-helmet";

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
    return null; // or a loading state
  }

  return (
    <>
      <Helmet>
        <title>{`How to Make a Good Landing Page for Businesses in ${city}`}</title>
        <meta name="description" content={`In today's digital age, a compelling landing page is crucial for businesses in ${city} looking to capture the attention of local customers and drive conversions. Here’s how to create an impactful landing page that resonates with your target audience:`} />
        <meta
          name="keywords"
          content={`How to Make a Good Landing Page for Businesses in ${city}`}
        />
        <meta property="og:title" content={`How to Make a Good Landing Page for Businesses in ${city}`} />
        <meta property="og:description" content={`In today's digital age, a compelling landing page is crucial for businesses in ${city} looking to capture the attention of local customers and drive conversions. Here’s how to create an impactful landing page that resonates with your target audience:`} />
        <meta property="og:image" content="https://i.imgur.com/HSA0Pbh.png" />
        <meta
          property="og:url"
          content={`https://quickui.co/blog/article/${location}/${city}}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`How to Make a Good Landing Page for Businesses in ${city}`} />
        <meta name="twitter:description" content={`In today's digital age, a compelling landing page is crucial for businesses in ${city} looking to capture the attention of local customers and drive conversions. Here’s how to create an impactful landing page that resonates with your target audience:`} />
        <meta name="twitter:image" content="https://i.imgur.com/HSA0Pbh.png" />
        <link
          rel="canonical"
          href={`https://quickui.co/blog/article/${location}/${city}}`}
        />
      </Helmet>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          BusinessBlog for {city}, {location}
        </h1>

        {/* Additional blog content can be added here */}
        <div className="mt-4">
          <h2 className="text-xl mb-2">Local Business Information</h2>
          <p>
            Discover the latest business trends and opportunities in {city}.
          </p>
        </div>

        {/* You might want to add related cities section */}
        <div className="mt-8">
          <h3 className="text-lg mb-2">Other Cities in {location}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {countryCityData[location]
              .filter((relatedCity) => relatedCity !== city)
              .slice(0, 6)
              .map((relatedCity) => (
                <a
                  key={relatedCity}
                  href={`/blog/article/${location}/${relatedCity}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {relatedCity}
                </a>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessBlog;
