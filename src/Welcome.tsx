import "./Page.css";

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
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="8"
            aria-label="Slide 9"
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
          <div className="carousel-item">
            <img
              src="/PlanetImages/Earth.jpg"
              className="d-block w-100"
              alt="Image of Earth."
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>Earth</h5>
              <p>Info about Earth.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/PlanetImages/Mars.jpg"
              className="d-block w-100"
              alt="Image of Mars."
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>Mars</h5>
              <p>Info about Mars.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/PlanetImages/Jupiter.jpg"
              className="d-block w-100"
              alt="Image of Jupiter."
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>Jupiter</h5>
              <p>Info about Jupiter.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/PlanetImages/Saturn.avif"
              className="d-block w-100"
              alt="Image of Saturn."
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>Saturn</h5>
              <p>Info about Saturn.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/PlanetImages/Uranus.jpg"
              className="d-block w-100"
              alt="Image of Uranus."
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>Uranus</h5>
              <p>Info about Uranus.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/PlanetImages/Neptune.jpg"
              className="d-block w-100"
              alt="Image of Neptune."
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>Neptune</h5>
              <p>Info about Neptune.</p>
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
