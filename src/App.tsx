import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BlackBackgroundWrapper from "./BlackBackgroundWrapper";
import WhiteBackgroundWrapper from "./WhiteBackgroundWrapper";
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
            <Route
              path="/solarsystem"
              element={
                <BlackBackgroundWrapper>
                  <SolarSystem />
                </BlackBackgroundWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <WhiteBackgroundWrapper>
                  <About />
                </WhiteBackgroundWrapper>
              }
            />
            <Route
              path="/social"
              element={
                <WhiteBackgroundWrapper>
                  <Social />
                </WhiteBackgroundWrapper>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
