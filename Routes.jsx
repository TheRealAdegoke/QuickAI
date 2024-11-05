import Page404 from "./src/Page404";
import ForgotPassword from "./src/Pages/AuthPages/ForgotPassword";
import Login from "./src/Pages/AuthPages/Login";
import Register from "./src/Pages/AuthPages/Register";
import ResetPassword from "./src/Pages/AuthPages/ResetPassword";
import Main from "./src/Pages/LandingPages/Main/Main";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./src/Dashboard/Dashboard";
import Generate from "./src/Dashboard/DashBoardChildren/Generate/Generate";
import Sites from "./src/Dashboard/DashBoardChildren/Sites/Sites";
import WebPreview from "./src/Dashboard/DashBoardChildren/Sites/WebPreview";
import Pricing from "./src/Pages/LandingPages/Main/Pricing";
import { useEffect } from "react";
import EditAndSave from "./src/Dashboard/DashBoardChildren/Sites/EditAndSave";
import ProfileSettings from "./src/Dashboard/DashBoardChildren/AccountSettings/ProfileSettings";
import AccountSettings from "./src/Dashboard/DashBoardChildren/AccountSettings/AccountSettings";
import Blog from "./src/Pages/BlogPage/Blog";
import Article from "./src/Pages/BlogPage/Article";
import BusinessBlog from "./src/Pages/BlogPage/BusinessBlog";

function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTopOnMount />
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/site" element={<Sites />} />
          <Route path="/site/preview/:id" element={<WebPreview />} />
          <Route path="/site/manage" element={<EditAndSave />} />
          <Route path="/settings" element={<ProfileSettings />} />
          <Route path="/account" element={<AccountSettings />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/article/:slug" element={<Article />} />
          <Route
            path="/blog/article/:location/:city"
            element={<BusinessBlog />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
