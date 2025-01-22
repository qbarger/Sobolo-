import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SolarSystem from "./SolarSystem";
import Welcome from "./Welcome";
import NavigationBar from "./NavigationBar";
import About from "./About";
import Social from "./Social";

function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/solarsystem" element={<SolarSystem />} />
            <Route path="/about" element={<About />} />
            <Route path="/social" element={<Social />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
