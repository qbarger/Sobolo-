import "../styling/Page.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div>
      <div className="about-container">
        <h1>WELCOME TO SOBOLO</h1>
        <br></br>
        <br></br>
        <img
          src="./OtherImages/QuentonPlant.jpg"
          alt="Quenton Barger"
          className="rounded-circle"
        ></img>
        <br></br>
        <br></br>
        <br></br>
        <p>
          Hi, I'm Quenton Barger, a student at Brigham Young University studying
          software engineering. I am from Mesa, Arizona and I love space and
          astronomy. I created Sobolo in order to share that love to people all
          over the world. Sobolo teaches about the Sun and each of the planets,
          as well as providing a simple model of our solar system. If you're
          wondering about the name, Sobolo is the name of my favorite Ghanaian
          drink. It consists of hybiscus, ginger, and pineapple. It's a
          delicious drink that I highly recommend.
        </p>
        <p>
          In addition to programming and astronomy, I also enjoy physics, math,
          and music. I sing and play the piano, and have recorded multiple songs
          in studios in Arizona. I also love sports, and love playing any game
          with a ball. That's a little bit about me... I hope you enjoy Sobolo!
        </p>
      </div>
      <div className="social-container">
        <div className="social-links">
          <a
            href="https://github.com/qbarger"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={50} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/quentonbarger/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={50} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/quentonbarger/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={50} />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
