import { useEffect } from "react";
import "./styles/TechStackNew.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Inverted Pyramid: 10 -> 8 -> 6 -> 4 -> 2 items
interface TechItem {
  name: string;
  icon: string;
  url?: string;
}

const techStackRows: TechItem[][] = [
  // Row 1 - 10 items (Core Languages, Web & Infrastructure)
  [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://python.org" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", url: "https://en.cppreference.com/w/c" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", url: "https://linux.org" },
    { name: "Virtualization", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://mysql.com" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", url: "https://github.com" },
  ],
  // Row 2 - 8 items (Tools, Cloud & Core Computing)
  [
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", url: "https://figma.com" },
    { name: "Cisco Packet Tracer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg" },
    { name: "Cloud Computing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "IoT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
    { name: "Sensors", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
    { name: "Data Structures", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg" },
    { name: "Algorithms", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg" },
  ],
  // Row 3 - 6 items (Embedded & Emerging Tech)
  [
    { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", url: "https://arduino.cc" },
    { name: "Embedded Systems", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "Hardware Prototyping", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
    { name: "AR/VR Tech", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
    { name: "Problem Solving", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Data Monitoring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
  ],
  // Row 4 - 4 items (Soft Skills & Core Strengths)
  [
    { name: "Team Collaboration", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Time Management", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
    { name: "Adaptability", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Emerging Tech", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  ],
  // Row 5 - 2 items (Core Focus - tip of pyramid)
  [
    { name: "Cloud & DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Computer Science", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  ],
];

const TechStackNew = () => {
  useEffect(() => {
    const techTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".techstack-new",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    techTimeline.fromTo(
      ".techstack-content h2",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    techTimeline.fromTo(
      ".techstack-row",
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: "power3.out" },
      "-=0.4"
    );

    return () => {
      techTimeline.kill();
    };
  }, []);

  return (
    <section className="techstack-new" id="techstack">
      <div className="techstack-glow-bg"></div>
      <div className="techstack-content">
        <h2>
          Skills <span>&amp; Tools</span>
        </h2>

        <div className="techstack-pyramid">
          {techStackRows.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => {
                if (tech.url) {
                  return (
                    <a
                      key={techIndex}
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="techstack-item"
                      title={tech.name}
                      data-cursor="disable"
                    >
                      <img src={tech.icon} alt={tech.name} loading="lazy" decoding="async" />
                      <span>{tech.name}</span>
                    </a>
                  );
                }
                return (
                  <div
                    key={techIndex}
                    className="techstack-item"
                    title={tech.name}
                    data-cursor="disable"
                  >
                    <img src={tech.icon} alt={tech.name} loading="lazy" decoding="async" />
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackNew;
