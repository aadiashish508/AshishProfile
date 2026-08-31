import { useEffect } from "react";
import { config, Certificate } from "../config";
import { MdArrowOutward, MdWorkspacePremium, MdVerified } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Certificates.css";

gsap.registerPlugin(ScrollTrigger);

const Certificates = () => {
  const certificates: Certificate[] = config.certificates || [];

  useEffect(() => {
    const certTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".certificates-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    certTimeline.fromTo(
      ".certificates-header",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    if (certificates.length > 0) {
      certTimeline.fromTo(
        ".certificate-card",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" },
        "-=0.4"
      );
    } else {
      certTimeline.fromTo(
        ".certificates-empty",
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );
    }

    return () => {
      certTimeline.kill();
    };
  }, [certificates.length]);

  return (
    <section className="certificates-section section-container" id="certificates">
      <div className="certificates-container">
        <div className="certificates-header">
          <h2>
            Course <span>Certifications</span>
          </h2>
          <p>
            Official course completion certifications verified in Cloud Computing, Python Programming, and Generative AI.
          </p>
        </div>

        {certificates.length > 0 ? (
          <div className="certificates-grid">
            {certificates.map((cert) => (
              <div className="certificate-card" key={cert.id}>
                {cert.image && (
                  <div className="certificate-image-wrap">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
                <div className="certificate-body">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <div className="certificate-issuer">{cert.issuer}</div>

                  {cert.credentialId && (
                    <div style={{ marginTop: "6px", marginBottom: "12px" }}>
                      <span
                        style={{
                          fontSize: "11px",
                          padding: "3px 8px",
                          borderRadius: "6px",
                          background: "rgba(196, 129, 255, 0.1)",
                          border: "1px solid rgba(196, 129, 255, 0.2)",
                          color: "var(--accentColor, #c481ff)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <MdVerified style={{ fontSize: "12px" }} /> {cert.credentialId}
                      </span>
                    </div>
                  )}

                  <div className="certificate-meta">
                    <span>{cert.date || "Verified"}</span>
                    {cert.verificationUrl && (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificate-verify-btn"
                        data-cursor="disable"
                      >
                        View Certificate <MdArrowOutward />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="certificates-empty">
            <div className="certificates-empty-icon">
              <MdWorkspacePremium />
            </div>
            <h3>Certificates will be added here</h3>
            <p>
              Verified coursework and technical certifications in programming, software engineering, and game development are being compiled and will appear here.
            </p>
            <div className="certificates-empty-badge">
              <span>Ready for uploads in public/images/certificates/</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
