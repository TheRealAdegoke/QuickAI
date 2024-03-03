import React from 'react'
import { Link } from "react-router-dom";
import Dashboard from './Dashboard';

const Edit = () => {
  return (
    <>
      <Dashboard>
        <main className="">
          <div className="flex justify-center mt-[200px]">
            <h1 className=" text-5xl font-medium">Edit</h1>
          </div>
        </main>
      </Dashboard>
    </>
  );
}

export default Edit