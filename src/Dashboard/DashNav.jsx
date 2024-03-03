import React from 'react'
import { Link} from "react-router-dom";

const DashNav = () => {
  return (
    <>
      <main className="flex">
        <Link
          to="/register"
          className="block text-blue-900 font-medium underline ml-5 mt-4"
        >
          Back
        </Link>
        <Link
          to="/generate"
          className="block text-blue-900 font-medium underline ml-5 mt-4"
        >
          generate
        </Link>
        <Link
          to="/edit"
          className="block text-blue-900 font-medium underline ml-5 mt-4"
        >
          edit
        </Link>
      </main>
    </>
  );
}

export default DashNav