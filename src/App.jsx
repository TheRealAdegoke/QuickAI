import Dashboard from "./Dashboard/Dashboard";
import Page404 from "./Page404";
import { AuthProvider } from "./Pages/AuthPages/AuthChecker/AuthContext";
import ForgotPassword from "./Pages/AuthPages/ForgotPassword";
import Login from "./Pages/AuthPages/Login";
import Register from "./Pages/AuthPages/Register";
import ResetPassword from "./Pages/AuthPages/ResetPassword";
import Main from "./Pages/LandingPages/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom"


function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Page404 />} />
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/dashboard" element={<Dashboard /> } />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App
