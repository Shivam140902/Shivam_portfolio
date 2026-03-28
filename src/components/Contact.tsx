import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">
          {/* Connect */}
          <div className="contact-box">
            <h4>Connect</h4>

            <p>
              <a
                href="https://www.linkedin.com/in/shivam-swami-3a643a258/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — Shivam Swami
              </a>
            </p>

            <p>
              <a
                href="https://github.com/Shivam140902"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                GitHub — Shivam140902
              </a>
            </p>

            <p>
              <a
                href="https://www.instagram.com/codeby.shivam/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Instagram — codeby.shivam
              </a>
            </p>

            <h4>Education</h4>
            <p>B.Tech Information Technology</p>
            <p>MIT ADT University — 2022–2026</p>
          </div>

          {/* Social */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/Shivam140902"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/shivam-swami-3a643a258/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>

            <a
              href="https://www.instagram.com/codeby.shivam/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>

          {/* Footer */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Shivam Swami</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;