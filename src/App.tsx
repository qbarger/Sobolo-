import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BlackBackgroundWrapper from "./wrappers/BlackBackgroundWrapper";
import WhiteBackgroundWrapper from "./wrappers/WhiteBackgroundWrapper";
import SolarSystem from "./components/SolarSystem";
import Welcome from "./components/Welcome";
import NavigationBar from "./components/NavigationBar";
import About from "./components/About";
import Sun from "./planets/Sun";
import Mercury from "./planets/Mercury";
import Venus from "./planets/Venus";
import Earth from "./planets/Earth";
import Mars from "./planets/Mars";
import Jupiter from "./planets/Jupiter";
import Saturn from "./planets/Saturn";
import Uranus from "./planets/Uranus";
import Neptune from "./planets/Neptune";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <BrowserRouter>
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
            path="/sun"
            element={
              <BlackBackgroundWrapper>
                <Sun />
              </BlackBackgroundWrapper>
            }
          />
          <Route
            path="/mercury"
            element={
              <BlackBackgroundWrapper>
                <Mercury />
              </BlackBackgroundWrapper>
            }
          />
          <Route
            path="/venus"
            element={
              <BlackBackgroundWrapper>
                <Venus />
              </BlackBackgroundWrapper>
            }
          />
          <Route
            path="/earth"
            element={
              <BlackBackgroundWrapper>
                <Earth />
              </BlackBackgroundWrapper>
            }
          />
          <Route
            path="/mars"
            element={
              <BlackBackgroundWrapper>
                <Mars />
              </BlackBackgroundWrapper>
            }
          />
          <Route
            path="/jupiter"
            element={
              <BlackBackgroundWrapper>
                <Jupiter />
              </BlackBackgroundWrapper>
            }
          />
          <Route
            path="/saturn"
            element={
              <BlackBackgroundWrapper>
                <Saturn />
              </BlackBackgroundWrapper>
            }
          />
          <Route
            path="/uranus"
            element={
              <BlackBackgroundWrapper>
                <Uranus />
              </BlackBackgroundWrapper>
            }
          />
          <Route
            path="/neptune"
            element={
              <BlackBackgroundWrapper>
                <Neptune />
              </BlackBackgroundWrapper>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
