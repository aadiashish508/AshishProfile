import { Link } from "react-router-dom";
import { config } from "../config";
import ResumePreview from "../components/ResumePreview";
import {
  MdArrowOutward,
  MdDownload,
  MdLocationOn,
  MdSchool,
  MdEmail,
} from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import "./Resume.css";

const Resume = () => {
  const pdfUrl = config.resume.file || "/cv/ashish-kumar-cv.pdf";
  const photoPath = config.resume.photo || "/images/mypicbg-v2.png";

  return (
    <div className="resume-page">
      <div className="resume-container">
        {/* Header navigation and titles */}
        <div className="resume-header">
          <Link to="/" className="resume-back-btn" data-cursor="disable">
            ← Back to Home
          </Link>

          <div className="resume-title-wrap">
            <div>
              <h1>
                MY <span>CV</span>
              </h1>
              <p>
                {config.resume.subtitle || "A quick look at my journey, skills, projects, and experience."}
              </p>
            </div>

            <div className="resume-actions">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn resume-btn-secondary"
                data-cursor="disable"
              >
                VIEW FULL CV <MdArrowOutward />
              </a>

              <a
                href={pdfUrl}
                download="ashish-kumar-cv.pdf"
                className="resume-btn resume-btn-primary"
                data-cursor="disable"
              >
                DOWNLOAD CV <MdDownload />
              </a>
            </div>
          </div>
        </div>

        {/* Dual pane layout */}
        <div className="resume-layout">
          {/* Left: Interactive Sharp Canvas PDF Preview (approx 68%) */}
          <div className="resume-viewer-col">
            <ResumePreview pdfUrl={pdfUrl} />
          </div>

          {/* Right: Personal Photo & Profile Card (approx 32%) */}
          <div className="resume-photo-col">
            <div className="resume-photo-card">
              <div className="resume-photo-frame">
                <img
                  src={photoPath}
                  alt={config.resume.name}
                  loading="eager"
                />
              </div>

              <h2 className="resume-person-name">{config.resume.name}</h2>
              <div className="resume-person-role">
                {config.resume.role}
              </div>

              <div className="resume-meta-list">
                <div className="resume-meta-item">
                  <MdSchool />
                  <span>{config.resume.institution} (CGPA: {config.resume.cgpa})</span>
                </div>
                <div className="resume-meta-item">
                  <FaGamepad />
                  <span>{config.resume.degree}</span>
                </div>
                <div className="resume-meta-item">
                  <MdLocationOn />
                  <span>{config.resume.location}</span>
                </div>
                <div className="resume-meta-item">
                  <MdEmail />
                  <a
                    href={`mailto:${config.contact.email}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {config.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Skills & Highlights from CV */}
            <div className="resume-skills-pill-box">
              <h4>Technical Skills Summary</h4>
              <div className="resume-pills-wrap">
                {config.resume.skills.languages.map((skill, idx) => (
                  <span className="resume-pill" key={idx}>
                    {skill}
                  </span>
                ))}
                {config.resume.skills.technologies.map((skill, idx) => (
                  <span className="resume-pill" key={idx}>
                    {skill}
                  </span>
                ))}
                {config.resume.skills.tools.map((skill, idx) => (
                  <span className="resume-pill" key={idx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
