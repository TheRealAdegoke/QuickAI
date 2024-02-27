import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => {
    useEffect(() => {
      // Function to retrieve the token from cookies
      const getCookie = (name) => {
        const cookies = document.cookie.split("; ");

        for (const cookie of cookies) {
          const [cookieName, cookieValue] = cookie.split("=");

          if (cookieName === name) {
            return cookieValue;
          }
        }

        return null;
      };

      // Retrieve the token from cookies
      const myCookieValue = getCookie("token");

      // Save the token to sessionStorage
      if (myCookieValue) {
        sessionStorage.setItem("token", myCookieValue);
      }
    }, []);
  return (
    <>
      <main className="">
        <Link to="/register" className='block text-blue-900 font-medium underline ml-5 mt-4'>Back</Link>
        <div className="flex justify-center mt-[200px]">
          <h1 className=" text-5xl font-medium">Dashboard</h1>
        </div>
      </main>
    </>
  );
}

export default Dashboard