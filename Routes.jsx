import { useContext, useEffect, useRef } from "react";
import Page404 from "./src/Page404";
import {
  AuthContext,
} from "./src/Pages/AuthPages/AuthChecker/AuthContext";
import ForgotPassword from "./src/Pages/AuthPages/ForgotPassword";
import Login from "./src/Pages/AuthPages/Login";
import Register from "./src/Pages/AuthPages/Register";
import ResetPassword from "./src/Pages/AuthPages/ResetPassword";
import Main from "./src/Pages/LandingPages/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./src/Dashboard/Dashboard";
import Generate from "./src/Dashboard/DashBoardChildren/Generate/Generate";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/generate" element={<Generate/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
