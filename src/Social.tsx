import "./Page.css";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Social() {
  return (
    <div className="social-container">
      <h1>Connect with Me</h1>
      <div className="social-links">
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={50} />
          <span>GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={50} />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://twitter.com/yourtwitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={50} />
          <span>Instagram</span>
        </a>
      </div>
    </div>
  );
}

export default Social;
