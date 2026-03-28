import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* College */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech - Information Technology</h4>
                <h5>MIT ADT University</h5>
              </div>
              <h3>2022 – 2026</h3>
            </div>
            <p>
              Currently pursuing my degree with a strong focus on software
              development, data structures, and real-world project building.
            </p>
          </div>

          {/* Projects / Learning */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Learning & Project Development</h4>
                <h5>Self Growth</h5>
              </div>
              <h3>2023 – Present</h3>
            </div>
            <p>
              Built projects like UPI Fraud Detection System, Smart Hospital
              Management System, and Travel & Tourism System while improving
              problem-solving and development skills.
            </p>
          </div>

          {/* ACM-W Role */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Master Head</h4>
                <h5>ACM-W Student Chapter, MIT ADT University</h5>
              </div>
              <h3> Dec 2025 – Present</h3>
            </div>
            <p>
              Led web development activities for the chapter, managed and maintained the
              website, and ensured a smooth digital presence. Collaborated with the team
              to build responsive and user-friendly platforms.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;