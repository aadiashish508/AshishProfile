export interface Project {
  id: number;
  title: string;
  category: string;
  technologies: string;
  image: string;
  description: string;
  link?: string;
  github?: string;
}

export interface Certificate {
  id: string | number;
  title: string;
  issuer: string;
  date?: string;
  image?: string;
  credentialId?: string;
  verificationUrl?: string;
}

export interface Achievement {
  id: string | number;
  title: string;
  rank?: string;
  event: string;
  issuer: string;
  date: string;
  image: string;
  credentialId?: string;
  verificationUrl?: string;
  description?: string;
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies?: string[];
}

export const config = {
  developer: {
    name: "Ashish",
    fullName: "Ashish Kumar",
    primaryRole: "COMPUTER SCIENCE STUDENT",
    secondaryRole: "CLOUD & DEVOPS ENTHUSIAST",
    title: "Ashish Kumar | Computer Science Student & Tech Enthusiast",
    supportingText:
      "Computer Science Engineering student passionate about Cloud Computing, DevOps, Linux, and modern software technologies.",
    tagline:
      "Computer Science student passionate about Cloud Computing, DevOps, Linux, programming, and emerging technologies.",
    location: "Punjab, India",
    university: "Lovely Professional University (LPU)",
    degree: "Bachelor of Technology – Computer Science and Engineering",
    cgpa: "8.76",
  },
  social: {
    github: "https://github.com/aadiashish508",
    linkedin: "https://www.linkedin.com/in/ashish-kumar-76a95b367/",
    twitter: "https://x.com/aadiashish508",
    email: "aadiashish508@gmail.com",
    mobile: "+91-9044338905",
    location: "Punjab, India",
  },
  about: {
    title: "About Me",
    description:
      "Hey, I'm Ashish Kumar — a Computer Science Engineering student at Lovely Professional University with a strong interest in Cloud Computing, DevOps, Linux, Programming, Data Structures & Algorithms, and Emerging Technologies. I enjoy hands-on learning through building practical software concepts, exploring cloud architectures, IoT and hardware integrations, and solving algorithmic challenges.",
  },
  whatIDo: {
    cloudDevOps: {
      title: "CLOUD & DEVOPS",
      description:
        "Exploring cloud architectures, Linux administration, virtualization, and modern DevOps workflows.",
      details:
        "I'm interested in designing scalable cloud-based architectures, Linux system administration, virtualization, and automated notification systems for real-world monitoring.",
      tools: [
        "Linux",
        "Virtualization",
        "Cloud Computing",
        "AWS",
        "Git",
        "GitHub",
        "Cisco Packet Tracer",
      ],
    },
    softwareDev: {
      title: "PROGRAMMING & TECHNOLOGIES",
      description:
        "Building practical software, IoT systems, and strengthening core programming and algorithmic fundamentals.",
      details:
        "I enjoy turning ideas into functional projects, developing interactive sensor kits, exploring AR/VR digital environments, and continuously improving my problem-solving capabilities.",
      tools: [
        "Python",
        "C",
        "JavaScript",
        "HTML",
        "CSS",
        "MySQL",
        "Problem Solving",
        "Data Structures",
        "Figma",
      ],
    },
  },
  skills: {
    develop: {
      title: "CLOUD & DEVOPS",
      description: "Cloud architectures, Linux & DevOps systems",
      details:
        "Exploring scalable cloud-based architectures, Linux administration, virtualization, containerization concepts, and automated workflows for modern computing environments.",
      tools: [
        "Linux",
        "Virtualization",
        "Cloud Computing",
        "AWS",
        "Git",
        "GitHub",
        "Cisco Packet Tracer",
      ],
    },
    design: {
      title: "PROGRAMMING & TECHNOLOGIES",
      description: "Core languages, algorithm design & emerging tech",
      details:
        "Strengthening foundations in Python, C, and JavaScript while building interactive concepts, sensor-integrated hardware kits, and exploring AR/VR digital environments.",
      tools: [
        "Python",
        "C",
        "JavaScript",
        "HTML",
        "CSS",
        "MySQL",
        "Problem Solving",
        "Data Structures",
        "Figma",
      ],
    },
  },
  experiences: [
    {
      position: "Bachelor of Technology – Computer Science and Engineering",
      company: "Lovely Professional University",
      period: "Aug 2025 - Present",
      location: "Phagwara, Punjab",
      description:
        "Currently pursuing Computer Science Engineering (CGPA: 8.76) with focused interest in Cloud Computing, DevOps, Linux, Python, C, and Data Structures & Algorithms.",
      technologies: ["Python", "C", "Linux", "Cloud Computing", "DSA", "Problem Solving"],
    },
    {
      position: "Higher Secondary Education (72%)",
      company: "Umaraman Inter College",
      period: "April 2024 - Mar 2025",
      location: "Amethi, Uttar Pradesh",
      description:
        "Completed Higher Secondary Education with 72%, developing strong analytical and scientific foundations.",
      technologies: ["Mathematics", "Physics", "Computer Fundamentals"],
    },
    {
      position: "Higher Secondary Education (72%)",
      company: "St. Marry Sr Sec Convent School",
      period: "April 2021 - Mar 2022",
      location: "Amethi, Uttar Pradesh",
      description:
        "Completed secondary school education with 72%, building an early passion for technology and computer systems.",
      technologies: ["Science", "Computer Science", "Academics"],
    },
  ] as Experience[],
  projects: [
    {
      id: 1,
      title: "Smart Drainage Monitoring System",
      category: "IoT & Cloud Concept (Ongoing)",
      technologies: "Sensors, IoT, Cloud Computing, AWS, Data Monitoring, Alert System",
      image: "/images/FloodSpaces.png",
      description:
        "Designed a practical smart drainage monitoring concept to efficiently track drainage water flow and detect potentially harmful substances. Proposed a sensor-based monitoring approach to improve sanitation with scalable AWS cloud architecture and automated alerts.",
      link: "",
    },
    {
      id: 2,
      title: "Arduino Sensor Learning Kit",
      category: "Hardware & Embedded Systems",
      technologies: "Arduino, Sensors, Embedded Systems, Microcontroller Programming, Hardware Prototyping",
      image: "/images/arduino-sensor-kit.jpg",
      description:
        "Developed an interactive Arduino-based learning kit to help beginner Electrical Engineering students understand Arduino and sensor concepts through hands-on learning with a user-friendly hardware setup.",
      link: "",
    },
    {
      id: 3,
      title: "AR/VR Virtual Space Museum",
      category: "Interactive Digital Environment",
      technologies: "AR/VR Technologies, Interactive 3D, Virtual Environment, GitHub",
      image: "/images/arvr-museum.jpg",
      description:
        "Developed an interactive virtual space museum to introduce users to Augmented Reality and Virtual Reality through an immersive digital environment exploring space-related content and emerging technologies.",
      link: "https://github.com/aadiashish508",
    },
  ] as Project[],
  achievements: [
    {
      id: 1,
      title: "Top 9th Rank - Naukri Campus Young Turks 2025",
      rank: "Top 9",
      event: "Coding Data Science & AI Track",
      issuer: "Naukri Campus",
      date: "Oct 10, 2025",
      image: "/images/certificates/codextreme-top30.png",
      credentialId: "Cert ID: 68e8e9d5782243438972d6dd",
      verificationUrl: "/certificates/naukri-campus-top9.pdf",
      description: "Secured 9th rank in the Coding Data Science and AI Track of Naukri Campus Young Turks 2025, India's biggest skill contest.",
    },
    {
      id: 2,
      title: "Top 30 Position - CodeXtreme 4.0",
      rank: "Top 30",
      event: "C Programming Competition",
      issuer: "Lovely Professional University & iamneo",
      date: "Apr 02, 2026",
      image: "/images/certificates/naukri-campus-top9.png",
      credentialId: "Cert No: 16af4Bg1Ch2ci6C12B61",
      verificationUrl: "/certificates/codextreme-top30.pdf",
      description: "Secured Top 30 Position in CodeXtreme 4.0 – C Programming competition held at Lovely Professional University.",
    },
  ] as Achievement[],
  certificates: [
    {
      id: 1,
      title: "Generative AI for All",
      issuer: "PW / Microsoft (Physics Wallah & Microsoft)",
      date: "Apr 28, 2026",
      image: "/images/certificates/generative-ai-pw.png",
      credentialId: "Cert NO: 4133a2fa-14e3-4076-a1b6-4bfaabb3472b",
      verificationUrl: "/certificates/generative-ai-pw.pdf",
    },
    {
      id: 2,
      title: "Introduction to Cloud Computing",
      issuer: "Infosys Springboard",
      date: "Mar 05, 2026",
      image: "/images/certificates/cloud-computing.png",
      credentialId: "Infosys Certified",
      verificationUrl: "/certificates/cloud-computing.pdf",
    },
    {
      id: 3,
      title: "Programming Fundamentals using Python - Part 1",
      issuer: "Infosys Springboard",
      date: "June 03, 2026",
      image: "/images/certificates/python-fundamentals.png",
      credentialId: "Infosys Certified",
      verificationUrl: "/certificates/python-fundamentals.pdf",
    },
  ] as Certificate[],
  resume: {
    title: "MY CV",
    subtitle: "A quick look at my journey, skills, projects, and education.",
    file: "/cv/ashish-kumar-cv.pdf",
    photo: "/images/mypicbg-v2.png",
    name: "Ashish Kumar",
    role: "Computer Science Engineering Student",
    institution: "Lovely Professional University (LPU)",
    degree: "Bachelor of Technology – Computer Science and Engineering",
    cgpa: "8.76",
    location: "Punjab, India",
    skills: {
      languages: ["Python", "C", "JavaScript"],
      technologies: ["HTML", "CSS", "Linux", "Virtualization"],
      tools: ["MySQL", "Git", "GitHub", "Figma", "Cisco Packet Tracer"],
      interests: ["Cloud Computing", "DevOps", "Linux", "DSA", "Problem Solving", "Emerging Tech"],
    },
  },
  techStack: {
    programming: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: "Core Language" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", level: "Systems & DSA" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: "Web & Scripting" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", level: "OS & Admin" },
    ],
    web: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: "Markup" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: "Styling" },
      { name: "Virtualization", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: "Infrastructure" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: "Database" },
    ],
    tools: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: "Version Control" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", level: "Collaboration" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: "Design & Prototyping" },
      { name: "Cisco Packet Tracer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg", level: "Networking" },
    ],
    interests: [
      { name: "Cloud Computing", desc: "AWS, scalable architectures, cloud monitoring" },
      { name: "DevOps & Linux", desc: "System administration, environments & automation" },
      { name: "DSA & Problem Solving", desc: "Data structures, algorithms & competitive coding" },
      { name: "Emerging Technologies", desc: "IoT sensor kits, AR/VR virtual spaces" },
    ],
  },
  contact: {
    headline: "Let's build something impactful.",
    description:
      "I'm always eager to collaborate on Cloud Computing, DevOps, software development, and innovative engineering projects.",
    email: "aadiashish508@gmail.com",
    github: "https://github.com/aadiashish508",
    linkedin: "https://www.linkedin.com/in/ashish-kumar-76a95b367/",
    twitter: "https://x.com/aadiashish508",
    location: "Punjab, India",
  },
  seo: {
    title: "Ashish Kumar | Computer Science Student & Tech Enthusiast",
    description:
      "Portfolio of Ashish Kumar, a Computer Science Engineering student at Lovely Professional University with strong interest in Cloud Computing, DevOps, Linux, and modern software technologies.",
    keywords:
      "Ashish Kumar, Computer Science Student, Lovely Professional University, LPU, Portfolio, Cloud Computing, DevOps, Linux, Python, C, JavaScript",
    author: "Ashish Kumar",
    url: "https://github.com/aadiashish508",
  },
};
