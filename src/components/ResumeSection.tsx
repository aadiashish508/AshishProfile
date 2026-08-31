import { useEffect } from "react";
import { config } from "../config";
import { ResumePreview } from "./ResumePreview";
import {
  MdArrowOutward,
  MdDownload,
  MdLocationOn,
  MdSchool,
  MdEmail,
} from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/ResumeSection.css";

gsap.registerPlugin(ScrollTrigger);

const ResumeSection = () => {
  const { resume, contact } = config;
  const pdfPath = resume.file || "/cv/ashish-kumar-cv.pdf";
  const photoPath = resume.photo || "/images/mypicbg-v2.png";

  useEffect(() => {
    const cvTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".cv-section",
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    // Animate header
    cvTimeline.fromTo(
      ".cv-header",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    // Animate left column (CV Preview) from bottom
    cvTimeline.fromTo(
      ".cv-left-col",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );

    // Animate right column (Photo) from right
    cvTimeline.fromTo(
      ".cv-right-col",
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    );

    // Animate buttons
    cvTimeline.fromTo(
      ".cv-btn",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
      "-=0.3"
    );

    return () => {
      cvTimeline.kill();
    };
  }, []);

  return (
    <section className="cv-section section-container" id="cv">
      <div className="cv-container">
        {/* Section Header */}
        <div className="cv-header">
          <h2>
            MY <span>CV</span>
          </h2>
          <p>{resume.subtitle || "A quick look at my journey, skills, projects, and experience."}</p>
        </div>

        {/* Two-column layout (CV Left ~68%, Photo Right ~32%) */}
        <div className="cv-layout">
          {/* Left Column: Interactive Sharp PDF Preview + Actions */}
          <div className="cv-left-col">
            <ResumePreview pdfUrl={pdfPath} />

            <div className="cv-actions">
              <a
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="cv-btn cv-btn-secondary"
                data-cursor="disable"
                aria-label="View Full CV in new tab"
              >
                VIEW FULL CV <MdArrowOutward />
              </a>

              <a
                href={pdfPath}
                download="ashish-kumar-cv.pdf"
                className="cv-btn cv-btn-primary"
                data-cursor="disable"
                aria-label="Download CV PDF"
              >
                DOWNLOAD CV <MdDownload />
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Photo Card */}
          <div className="cv-right-col">
            <div className="cv-photo-card">
              <div className="cv-photo-frame">
                <img
                  src={photoPath}
                  alt={resume.name || "Ashish Kumar"}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <h3 className="cv-person-name">{resume.name}</h3>
              <div className="cv-person-role">{resume.role}</div>

              <div className="cv-meta-list">
                <div className="cv-meta-item">
                  <MdSchool />
                  <span>{resume.institution} (CGPA: {resume.cgpa})</span>
                </div>
                <div className="cv-meta-item">
                  <FaGamepad />
                  <span>{resume.degree}</span>
                </div>
                <div className="cv-meta-item">
                  <MdLocationOn />
                  <span>{resume.location}</span>
                </div>
                <div className="cv-meta-item">
                  <MdEmail />
                  <a
                    href={`mailto:${contact.email}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Skills Summary */}
            <div className="cv-quick-skills">
              <h4>Core Stack Highlights</h4>
              <div className="cv-quick-pills">
                {resume.skills?.languages?.map((lang, idx) => (
                  <span className="cv-pill" key={idx}>
                    {lang}
                  </span>
                ))}
                {resume.skills?.technologies?.map((tech, idx) => (
                  <span className="cv-pill" key={idx}>
                    {tech}
                  </span>
                ))}
                {resume.skills?.tools?.map((tool, idx) => (
                  <span className="cv-pill" key={idx}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
