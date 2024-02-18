import Register from "./Pages/AuthPages/Register";
import Main from "./Pages/LandingPages/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
