import axios from 'axios';
import React, { useContext } from "react";
import { Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../Pages/AuthPages/AuthChecker/AuthContext";

const DashNav = () => {
  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      const response = axios.post("http://localhost:3000/logout",{}, {withCredentials: true});
      console.log(response.data);
      await getLoggedIn()
      navigate("/login")
    } catch (error) {
      console.error(error.response.data.error);
    }
  }
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
        <Link
          to=""
          className="block text-blue-900 font-medium underline ml-5 mt-4"
          onClick={handleLogout}
        >
          logout
        </Link>
      </main>
    </>
  );
}

export default DashNav