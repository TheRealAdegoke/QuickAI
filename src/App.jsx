import Main from "./Pages/LandingPages/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
