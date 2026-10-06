// ============================================================
//  ADITI BISHT — PORTFOLIO CONFIG
//  Edit this file to update your entire portfolio!
// ============================================================

export const greeting = {
  title: "Hi, I'm Aditi",
  subTitle:
    "Computer Science Engineering graduate and Software Engineer focused on building responsive web applications using JavaScript, React.js, Node.js, Express.js, MongoDB, SQL, HTML, and CSS. I build REST APIs, CRUD applications, database-driven systems, and responsive user interfaces.",
    resumeLink: `${process.env.PUBLIC_URL}/Aditi-Bisht-Resume.pdf`,
  displayGreeting: true,
};

export const socialMediaLinks = {
  github: "https://github.com/AditiiBisht",
  linkedin: "https://www.linkedin.com/in/aditi-bisht-b34b7b256",
  gmail: "bishtaditi516@gmail.com",
};


// ============================================================
// SKILLS
// ============================================================

export const skillsSection = {
  title: "What I Do",
  subTitle:
    "Software Engineer and Full-Stack Developer focused on building responsive web applications, REST APIs, and database-driven systems.",

  skills: [
    "⚡ Build responsive web applications using React.js, HTML5, and CSS3",
    "⚡ Develop REST APIs and backend services using Node.js and Express.js",
    "⚡ Build CRUD applications and database-driven systems",
    "⚡ Work with MongoDB and SQL databases",
    "⚡ Write and debug applications using Java, JavaScript, and Python",
  ],

  softwareSkills: [
    { skillName: "Java", icon: "FaJava", color: "#f89820" },
    { skillName: "JavaScript", icon: "IoLogoJavascript", color: "#F7DF1E" },
    { skillName: "Python", icon: "FaPython", color: "#3776AB" },
    { skillName: "SQL", icon: "SiMysql", color: "#4479A1" },

    { skillName: "HTML5", icon: "FaHtml5", color: "#E34F26" },
    { skillName: "CSS3", icon: "FaCss3Alt", color: "#1572B6" },
    { skillName: "React.js", icon: "FaReact", color: "#61DAFB" },
    { skillName: "Next.js", icon: "SiNextdotjs", color: "#ffffff" },

    { skillName: "Node.js", icon: "FaNodeJs", color: "#339933" },
    { skillName: "Express.js", icon: "SiExpress", color: "#ffffff" },

    { skillName: "MongoDB", icon: "SiMongodb", color: "#47A248" },

    { skillName: "Git", icon: "FaGitAlt", color: "#F05032" },
    { skillName: "GitHub", icon: "FaGithub", color: "#ffffff" },
  ],
};


// ============================================================
// EDUCATION
// ============================================================

export const educationInfo = [
  {
  universityName:
    "Veer Madho Singh Bhandari Uttarakhand Technical University",
  subHeader:
    "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
  duration: "2022 – 2026",
},

];


// ============================================================
// WORK EXPERIENCE
// ============================================================

export const workExperiences = {
  display: true,

  experience: [
    {
      role: "Full Stack Intern",
      company: "The Developers Arena",
      companylogo: "",
      date: "July 2026 – August 2026",

      desc:
        "Developed full-stack web applications using JavaScript, React.js, Node.js, and MongoDB, with a focus on responsive interfaces and backend services.",

      descBullets: [
        "Developed 4+ full-stack web applications using JavaScript, React.js, Node.js, and MongoDB.",
        "Built and integrated 10+ REST API endpoints with Node.js implementing CRUD operations and connecting applications with MongoDB.",
        "Managed 5+ development projects using Git and GitHub, maintaining version control and structured commits.",
        "Completed weekly technical assignments focused on full-stack development, Java programming, and problem-solving.",
        "Strengthened debugging, modular programming, and clean coding skills.",
      ],
    },
  ],
};


// ============================================================
// GITHUB / OPEN SOURCE
// ============================================================

export const openSource = {
  showGithubProfile: true,
  display: true,
};


// ============================================================
// PROJECTS
// ============================================================

export const bigProjects = [
  {
    projectName: "Real-Time Chat Application",

    projectDesc:
      "A full-stack real-time chat application using React, Node.js, Socket.IO, and MongoDB Atlas. Features real-time messaging, online user presence, typing indicators, automatic reconnection, REST APIs, and persistent chat history.",

    footerLink: [
      {
        name: "View on GitHub",
        url: "https://github.com/AditiiBisht",
      },
    ],

    emoji: "💬",

    tags: [
      "React",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "MongoDB",
    ],
  },


  {
    projectName: "Matrimonial Matchmaking Platform",

    projectDesc:
      "A full-stack matrimonial matchmaking platform with user profile management and matchmaking functionality. Includes CRUD operations, backend services, REST APIs, persistent database storage, and responsive web interfaces.",

    footerLink: [
      {
        name: "View on GitHub",
        url: "https://github.com/AditiiBisht",
      },
    ],

    emoji: "💒",

    tags: [
      "Full-Stack",
      "REST APIs",
      "CRUD",
      "Database",
      "Responsive UI",
    ],
  },


  {
    projectName: "AI Document Summarizer",

    projectDesc:
      "An AI-powered document summarization application for processing PDF, DOCX, and PPTX files. Includes document upload, text extraction, AI-based summarization, and a web interface for displaying generated summaries.",

    footerLink: [
      {
        name: "View on GitHub",
        url: "https://github.com/AditiiBisht",
      },
    ],

    emoji: "🤖",

    tags: [
      "Python",
      "AI",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },


  {
    projectName: "Library Management System",

    projectDesc:
      "A console-based Library Management System developed using Java. Implements CRUD operations, Java Collections, object-oriented programming, file handling, input validation, and exception handling.",

    footerLink: [
      {
        name: "View on GitHub",
        url: "https://github.com/AditiiBisht",
      },
    ],

    emoji: "📚",

    tags: [
      "Java",
      "OOP",
      "Collections",
      "File Handling",
    ],
  },
];


// ============================================================
// CERTIFICATIONS
// ============================================================

export const achievementSection = {
  display: true,

  title: "Licenses & Certifications",

  subtitle:
    "Professional certifications and virtual experience programs.",

  achievementsCards: [
    {
      title: "Deloitte Australia – Data Analytics Job Simulation",
      subtitle: "Forage • Data Analytics",
      image: "Deloitte.png",
      imageAlt: "Deloitte",

      footerLink: [
        {
          name: "View Credential",
          url: "https://www.theforage.com/",
        },
      ],
    },

    {
      title: "Datacom Software Development Virtual Experience Program",
      subtitle: "Forage • Software Development",
      image: "datacom.png",
      imageAlt: "Datacom",

      footerLink: [
        {
          name: "View Credential",
          url: "https://www.theforage.com/",
        },
      ],
    },
  ],
};


// ============================================================
// CONTACT
// ============================================================

export const contactInfo = {
  title: "Let's Connect",

  subtitle:
    "I'm currently seeking entry-level opportunities as a Software Engineer, Full-Stack Developer, Frontend Developer, or JavaScript Developer.",

  number: "7505821069",

  email_address: "bishtaditi516@gmail.com",
};