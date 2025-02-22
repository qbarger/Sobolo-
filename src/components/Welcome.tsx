import { useEffect } from "react";
import "../styling/Page.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Welcome() {
  useEffect(() => {
    const carouselElement = document.querySelector("#carouselExampleCaptions");
    if (carouselElement) {
      const carousel = new window.bootstrap.Carousel(carouselElement, {
        interval: 4000, // 4 seconds
        ride: "carousel",
      });
    }
  }, []);

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="4000"
    >
      <div className="carousel-indicators">
        {[...Array(9)].map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {[
          "Sun.webp",
          "Mercury.webp",
          "Venus.webp",
          "Earth.webp",
          "Mars.webp",
          "Jupiter.webp",
          "Saturn.webp",
          "Uranus.webp",
          "Neptune.webp",
        ].map((image, index) => (
          <div
            key={image}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={`/PlanetImages/${image}`}
              className="d-block w-100"
              alt={`Image of ${image.split(".")[0]}.`}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Welcome;

/*
import "../styling/Page.css";

function Welcome() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        <div className="carousel-indicators">
          {[...Array(9)].map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {[
            "Sun.webp",
            "Mercury.webp",
            "Venus.webp",
            "Earth.webp",
            "Mars.webp",
            "Jupiter.webp",
            "Saturn.avif",
            "Uranus.webp",
            "Neptune.webp",
          ].map((image, index) => (
            <div
              key={image}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={`/PlanetImages/${image}`}
                className="d-block w-100"
                alt={`Image of ${image.split(".")[0]}.`}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Welcome;
*/
