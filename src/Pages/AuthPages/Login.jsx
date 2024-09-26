import React, { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ImSpinner6 } from "react-icons/im";
import { message } from "antd";
import { AuthContext } from "./AuthChecker/AuthContext";
import WebLogo from "../../assets/WebLogo";
import { axiosInstance } from "./AuthChecker/axiosInstance";
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {
  const { isAuthenticated, handleAuthentication } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    message.config({
      duration: 2,
      maxCount: 1,
    });
    setLoading(true);
    const postData = {
      email,
      password,
    };
    try {
      const response = await axiosInstance.post("/auth/login", postData);
      message.success(response.data.message);
      await handleAuthentication();
      navigate("/home");
    } catch (error) {
      console.error(error.response?.data?.error || error.message);
      if (error.response?.status === 429) {
        message.error("Too many attempts, please try again after 5 minutes");
      } else {
        message.error(error.response?.data?.error || "An error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = async () => {
    setGoogleLoading(true);
    try {
      window.open(`${baseUrl}/auth/google/login`, "_self");
    } catch (error) {
      console.error(error);
    } finally {
      setGoogleLoading(false);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const error = params.get("error");

    if (error === "invalidUser") {
      setErrorMessage("Invalid User");

      // Clear the error message after 4 seconds
      const timeoutId = setTimeout(() => {
        setErrorMessage("");
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [location]);

  useEffect(() => {
    if (
      isAuthenticated === true &&
      (location.pathname === "/login" || location.pathname === "/register")
    ) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <main className="bg-[rgb(3,11,21)] min-h-screen text-white">
        <div
          data-aos="zoom-in"
          className="flex justify-center items-center py-5"
        >
          <WebLogo />
        </div>

        <div
          data-aos="zoom-in"
          className="bg-[rgb(2,8,16)] w-4/5 max-w-[400px] h-auto mx-auto border border-[rgb(64,65,67)] rounded-[8px]"
        >
          <form className="px-6" onSubmit={handleLogin}>
            <div className="mt-4 mb-6">
              <h1 className="text-[rgb(201,209,217)] text-2xl font-bold">
                Welcome Back!
              </h1>
              <p className="text-[rgb(161,167,171)] font-semibold">
                Login to continue editing
              </p>
            </div>

            <div>
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
              className="text-black bg-white hover:bg-[rgba(255,255,255,0.9)] block mx-auto p-3 rounded-[5px] font-medium w-full"
              disabled={loading}
            >
              {loading ? (
                <div>
                  <ImSpinner6 className="animate-spin text-2xl text-black block mx-auto" />
                </div>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <div className="my-5 text-center text-[1rem] font-medium">
            <Link to="/forgotpassword">I forgot my password</Link>
          </div>

          {/* <div className="relative text-[rgb(201,209,217)]">
            <hr className="my-5 border-[rgb(64,65,67)]" />
            <span className="absolute-center bg-[rgb(2,8,16)] flex items-center justify-center rounded-full  w-[35px] text-center h-[30px] text-[1.2rem]">
              or
            </span>
          </div> */}

          {/* <button
            className="w-4/5 lg:w-[350px] mx-auto text-center my-4 hover:bg-[rgb(42,42,47)] py-2 rounded-[5px] flex items-center justify-center gap-2 cursor-pointer border border-[rgb(64,65,67)]"
            onClick={googleLogin}
            disabled={googleLoading}
          >
            {googleLoading ? (
              <div className="flex justify-center items-center">
                <ImSpinner6 className="animate-spin text-2xl text-white" />
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 ">
                <FcGoogle className="text-[1.4rem]" />
                <span className="font-medium text-[rgb(201,209,217)]">
                  Sign in with Google
                </span>
              </div>
            )}
          </button> */}

          {errorMessage && (
            <div className="w-4/5 lg:w-[350px] mx-auto text-center my-4 bg-[rgb(253,236,234)] py-2 rounded-[5px] text-[rgb(97,62,55)]">
              {errorMessage}
            </div>
          )}
        </div>

        <div className="">
          <Link
            to="/register"
            className="block w-[250px] mx-auto text-center my-4 bg-[rgb(42,42,47)] py-2 rounded-[5px] text-[rgb(201,209,217)] hover:underline"
          >
            I don't have an account
          </Link>
        </div>
      </main>
    </>
  );
};

export default Login;
