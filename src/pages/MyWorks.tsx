import { Link } from "react-router-dom";
import { config } from "../config";
import { MdArrowOutward } from "react-icons/md";
import "./MyWorks.css";

const MyWorks = () => {
  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          Featured <span>Works</span>
        </h1>
        <p>A collection of software, IoT concepts, and interactive environments built by Ashish Kumar</p>
      </div>

      <div className="myworks-grid">
        {config.projects.map((project, index) => {
          const hasLiveLink = Boolean(project.link && project.link.trim() !== "");

          return (
            <div className="myworks-card" key={project.id}>
              <div className="myworks-card-number">0{index + 1}</div>
              <div className="myworks-card-image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="myworks-card-info">
                <h3>{project.title}</h3>
                <p className="myworks-card-category">{project.category}</p>
                <p className="myworks-card-description">{project.description}</p>
                <p className="myworks-card-tech">
                  <strong style={{ color: "#fff" }}>Stack:</strong> {project.technologies}
                </p>

                <div style={{ marginTop: "20px" }}>
                  {hasLiveLink ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="back-button"
                      style={{
                        margin: 0,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "13px",
                        padding: "8px 18px",
                      }}
                      data-cursor="disable"
                    >
                      VIEW LIVE PROJECT <MdArrowOutward />
                    </a>
                  ) : (
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "12px",
                        padding: "6px 14px",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "15px",
                        color: "rgba(255, 255, 255, 0.6)",
                      }}
                    >
                      Project In Development / Hackathon
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyWorks;
