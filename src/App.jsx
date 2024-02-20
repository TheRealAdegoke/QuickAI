import ForgotPassword from "./Pages/AuthPages/ForgotPassword";
import Login from "./Pages/AuthPages/Login";
import Register from "./Pages/AuthPages/Register";
import Main from "./Pages/LandingPages/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
