import "./index.css";

function Welcome() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/PlanetImages/Sun.jpg"
              className="d-block w-100"
              alt="Image of the Sun."
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>THE SUN</h5>
              <p>Info about the Sun.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/PlanetImages/Mercury.jpg"
              className="d-block w-100"
              alt="Image of Mercury."
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>Mercury</h5>
              <p>Info about Mercury.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/PlanetImages/Venus.jpg"
              className="d-block w-100"
              alt="Image of Venus."
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>Venus</h5>
              <p>Info about Venus.</p>
            </div>
          </div>
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
