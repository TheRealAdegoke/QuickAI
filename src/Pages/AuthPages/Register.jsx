import React, { useState, useEffect, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { ImSpinner6 } from "react-icons/im";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import { AuthContext } from "./AuthChecker/AuthContext";
import WebLogo from "../../assets/WebLogo";

const Register = () => {
  const { getLoggedIn, isAuthenticated } = useContext(AuthContext);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

  const login = () => {
    setGoogleLoading(true);
    window.open(`${baseUrl}/auth/google/signup`, "_self");
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const error = params.get("error");

    if (error === "userExists") {
      setErrorMessage("User already exists.");

      // Clear the error message after 4 seconds
      const timeoutId = setTimeout(() => {
        setErrorMessage("");
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [location]);

  const handleRegistration = async (e) => {
    e.preventDefault();
    message.config({
      duration: 2,
      maxCount: 1,
    });

    setLoading(true);
    const trimmedFullName = fullName.trim();
    const postData = {
      fullName: trimmedFullName,
      email,
      password,
    };
    try {
      const response = await axios.post(
        `${baseUrl}/auth/register`,
        postData,
        { withCredentials: true }
      );
        await getLoggedIn()
      navigate("/home");
      message.success(response.data.message);
    } catch (error) {
      console.error(error.response.data.error);
      message.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLoggedIn()
    if (
      isAuthenticated === true &&
      (location.pathname === "/login" || location.pathname === "/register")
    ) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <main className="bg-[rgb(3,11,21)] min-h-screen text-white py-5">
        <div className="flex justify-center items-center pb-5">
          <WebLogo/>
        </div>

        <div className="bg-[rgb(2,8,16)] w-4/5 max-w-[400px] h-auto mx-auto border border-[rgb(64,65,67)] rounded-[8px]">
          <form className="px-6" onSubmit={handleRegistration}>
            <div className="mt-4 mb-6">
              <h1 className="text-[rgb(201,209,217)] text-2xl font-bold">
                Create Account
              </h1>
              <p className="text-[rgb(161,167,171)] font-semibold">
                Get started for free
              </p>
            </div>

            <div>
              <div className="flex flex-col my-4">
                <label
                  htmlFor="name"
                  className="text-[rgb(161,167,171)] font-semibold"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  className="bg-[rgb(42,42,47)] border border-[rgb(64,65,67)] rounded-[5px] h-[40px] px-3 focus:border-[rgb(54,116,220)] outline-none"
                  placeholder="John Doe"
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                />
              </div>

              <div className="flex flex-col my-4">
                <label
                  htmlFor="email"
                  className="text-[rgb(161,167,171)] font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="bg-[rgb(42,42,47)] border border-[rgb(64,65,67)] rounded-[5px] h-[40px] px-3 focus:border-[rgb(54,116,220)] outline-none"
                  placeholder="johndoe@example.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="flex flex-col my-4">
                <label
                  htmlFor="password"
                  className="text-[rgb(161,167,171)] font-semibold"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="bg-[rgb(42,42,47)] border border-[rgb(64,65,67)] rounded-[5px] h-[40px] px-3 focus:border-[rgb(54,116,220)] outline-none"
                  placeholder="123456789"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="text-black bg-white hover:bg-[rgba(255,255,255,0.9)] block mx-auto p-3 rounded-[5px] font-medium w-[200px]"
            >
              {loading ? (
                <div>
                  <ImSpinner6 className="animate-spin text-2xl text-black block mx-auto" />
                </div>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="relative text-[rgb(201,209,217)]">
            <hr className="my-5 border-[rgb(64,65,67)]" />
            <span className="absolute-center bg-[rgb(2,8,16)] flex items-center justify-center rounded-full  w-[40px] text-center h-[40px] text-[1.2rem]">
              or
            </span>
          </div>

          <div
            className="w-4/5 PC:w-[350px] mx-auto text-center my-4 hover:bg-[rgb(42,42,47)] py-2 rounded-[5px] cursor-pointer border border-[rgb(64,65,67)]"
            onClick={login}
          >
            {googleLoading ? (
              <div className="flex justify-center items-center">
                <ImSpinner6 className="animate-spin text-2xl text-white" />
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 ">
                <FcGoogle className="text-[1.4rem]" />
                <span className="font-medium text-[rgb(201,209,217)]">
                  Sign up with Google
                </span>
              </div>
            )}
          </div>
          {errorMessage && (
            <div className="w-[350px] mx-auto text-center my-4 bg-[rgb(253,236,234)] py-2 rounded-[5px] text-[rgb(97,62,55)]">
              {errorMessage}
            </div>
          )}
        </div>

        <div className="w-[250px] mx-auto text-center my-4 bg-[rgb(42,42,47)] py-2 rounded-[5px] text-[rgb(201,209,217)]">
          <Link to="/login" className=" hover:underline">
            I already have an account
          </Link>
        </div>
      </main>
    </>
  );
};

export default Register;
