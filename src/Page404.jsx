import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <main className="bg-[rgb(3,11,21)] min-h-screen text-white flex justify-center items-center flex-col gap-4">
        <h1 className="text-5xl font-bold">Page Not Found</h1>
        <Link to="/" className="underline text-blue-700">
          Back to home
        </Link>
      </main>
    </>
  );
};

export default Page404;
