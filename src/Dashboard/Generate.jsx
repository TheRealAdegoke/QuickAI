import React from 'react'
import { Link } from "react-router-dom";
import Dashboard from './Dashboard';
import { Helmet } from 'react-helmet';

const Generate = () => {
  return (
    <>
      <Helmet>
        <title>QuickUI - Generate Websites designs Fast with AI</title>
        <meta
          name="description"
          content="QuickUI helps you create awesome websites super quickly! No more spending hours designing – QuickUI uses AI to do it for you. Start now!"
        />
        <meta
          name="keywords"
          content="QuickUI, website design, AI, fast, quick, easy, automated, web development, create websites, AI-powered design, design tool, time-saving, efficient"
        />
      </Helmet>
      <Dashboard>
        <main className="">
          <div className="flex justify-center mt-[200px]">
            <h1 className=" text-5xl font-medium">Generate</h1>
          </div>
        </main>
      </Dashboard>
    </>
  );
}

export default Generate