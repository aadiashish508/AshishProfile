import { useEffect } from "react";
import { config, Achievement } from "../config";
import { MdArrowOutward, MdEmojiEvents, MdVerified } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Achievements.css";

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const achievements: Achievement[] = (config as unknown as { achievements: Achievement[] }).achievements || [];

  useEffect(() => {
    const achTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".achievements-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    achTimeline.fromTo(
      ".achievements-header",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    if (achievements.length > 0) {
      achTimeline.fromTo(
        ".achievement-card",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" },
        "-=0.4"
      );
    }
  }, [achievements.length]);

  return (
    <section className="achievements-section section-container" id="achievements">
      <div className="achievements-container">
        <div className="achievements-header">
          <h2>
            Competitive <span>Achievements</span>
          </h2>
          <p>
            Recognitions and rankings secured in nationwide competitive programming contests and coding hackathons.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item) => (
            <div className="achievement-card" key={item.id}>
              {item.image && (
                <div className="achievement-image-wrap">
                  <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                  {item.rank && (
                    <div className="achievement-rank-badge">
                      <MdEmojiEvents /> {item.rank}
                    </div>
                  )}
                </div>
              )}
              <div className="achievement-body">
                <h3 className="achievement-title">{item.title}</h3>
                <div className="achievement-event">{item.event}</div>
                <div className="achievement-issuer">{item.issuer}</div>
                {item.description && <p className="achievement-desc">{item.description}</p>}

                {item.credentialId && (
                  <div style={{ marginTop: "10px", marginBottom: "12px" }}>
                    <span
                      style={{
                        fontSize: "11px",
                        padding: "3px 8px",
                        borderRadius: "6px",
                        background: "rgba(196, 129, 255, 0.12)",
                        border: "1px solid rgba(196, 129, 255, 0.25)",
                        color: "var(--accentColor, #c481ff)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <MdVerified style={{ fontSize: "12px" }} /> {item.credentialId}
                    </span>
                  </div>
                )}

                <div className="achievement-meta">
                  <span>{item.date}</span>
                  {item.verificationUrl && (
                    <a
                      href={item.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievement-verify-btn"
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
      </div>
    </section>
  );
};

export default Achievements;
