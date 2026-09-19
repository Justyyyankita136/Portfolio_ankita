/**
 * ==============================================================================
 * ANKITA MEGHANATHI — PORTFOLIO DATA HUB
 * ==============================================================================
 * To update your portfolio, edit THIS file only!
 * No HTML editing required.
 */

const portfolioData = {
  // 1. Personal & Contact Information
  personal: {
    name: "Ankita Meghanathi",
    firstName: "ANKITA",
    lastName: "MEGHANATHI",
    title: "MERN Stack Developer",
    location: "Junagadh, Gujarat, India",
    email: "ankitameghanathi136@gmail.com",
    phone: "+91 93276 38637",
    profileImage: "assests/images/profile.png",
    resume: "assests/Ankita_Meghanathi_Resume_Mern_Stack.pdf",
    github: "https://github.com/Justyyyankita136",
    linkedin: "https://www.linkedin.com/in/ankita-meghanathi-2a7181395",
    tagline: "Building modern, responsive and user-focused web experiences with the MERN stack.",
    availability: "Available for MERN Stack Opportunities"
  },

  // 2. About Me Section
  about: {
    heading: "Passionate Developer Turning Ideas into Clean, Scalable Code",
    bioParagraphs: [
      "I am a detail-oriented BCA student and hands-on <strong>MERN Stack Developer Intern at Avadh Web</strong>. I specialize in crafting responsive, high-performance web applications with clean user interfaces and modular architectures.",
      "My core focus centers on <strong>React.js, Node.js, Express.js, and MongoDB</strong>. I enjoy building maintainable component libraries, designing robust REST APIs, and delivering reliable real-world solutions. I am continuously learning modern patterns to ship production-ready applications."
    ],
    highlights: [
      "BCA Student at M.M. Ghodasara College (2024 – 2027)",
      "Active MERN Stack Developer Intern at Avadh Web",
      "Specialized in reusable components & responsive layouts",
      "Continuous learner passionate about full-stack engineering"
    ],
    stats: [
      { label: "Academic Level", value: "BCA Student" },
      { label: "Current Role", value: "MERN Intern" },
      { label: "Projects Completed", value: "5+ Built" },
      { label: "Work Ethic", value: "Continuous Learner" }
    ]
  },

  // 3. Technical Skills (Grouped with Icons)
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "HTML5", icon: "fa-brands fa-html5" },
        { name: "CSS3", icon: "fa-brands fa-css3-alt" },
        { name: "JavaScript", icon: "fa-brands fa-js" },
        { name: "React.js", icon: "fa-brands fa-react" },
        { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
        { name: "Tailwind CSS", icon: "fa-solid fa-wind" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: "fa-brands fa-node-js" },
        { name: "Express.js", icon: "fa-solid fa-network-wired" }
      ]
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", icon: "fa-solid fa-database" }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: "fa-brands fa-git-alt" },
        { name: "GitHub", icon: "fa-brands fa-github" },
        { name: "VS Code", icon: "fa-solid fa-code" },
        { name: "Canva", icon: "fa-solid fa-palette" }
      ]
    },
    {
      category: "Other Concepts",
      items: [
        { name: "REST APIs", icon: "fa-solid fa-plug" },
        { name: "React Router", icon: "fa-solid fa-route" },
        { name: "JSON", icon: "fa-solid fa-file-code" },
        { name: "Material UI", icon: "fa-solid fa-layer-group" },
        { name: "Responsive Design", icon: "fa-solid fa-mobile-screen-button" },
        { name: "Reusable Components", icon: "fa-solid fa-puzzle-piece" },
        { name: "Client-side Validation", icon: "fa-solid fa-shield-halved" },
        { name: "Local Storage", icon: "fa-solid fa-hard-drive" }
      ]
    }
  ],

  // 4. Work Experience / Internship Timeline
  experience: [
    {
      id: 1,
      role: "MERN Stack Developer Intern",
      company: "Avadh Web",
      location: "Junagadh, Gujarat, India",
      duration: "May 2026 – Present",
      type: "Internship",
      description: "Contributing to full-stack web products, intuitive UI components, and reliable server-side services.",
      responsibilities: [
        "Developing responsive full-stack web applications using the MERN stack.",
        "Building modular, reusable React.js components for dynamic user interfaces.",
        "Designing and integrating clean REST APIs using Node.js and Express.js.",
        "Managing document-based collections and schemas with MongoDB.",
        "Using Git and GitHub for version control, code hygiene, and team collaboration.",
        "Debugging, optimizing responsiveness, and ensuring cross-browser consistency."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git"]
    }
  ],

  // 5. Education Background
  education: [
    {
      id: 1,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "M.M. Ghodasara College, Junagadh",
      duration: "2024 – 2027",
      description: "Focused on core computing fundamentals, database systems, object-oriented concepts, and modern software development practices."
    }
  ],

  // 6. Projects Catalog (Dynamic Filtering by Category)
  projects: [
    {
      id: 1,
      title: "WorkSphere – Freelance Marketplace",
      subtitle: "MERN Freelance Marketplace Platform",
      category: "MERN",
      statusBadge: "Currently Building",
      image: "assests/projects/Workphere.png",
      description: "A practical freelance marketplace concept connecting clients with skilled freelancers. Features service discovery, role-based workflows, and full-stack integration.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      features: [
        "Client and freelancer profile discovery",
        "Role-based marketplace workflows",
        "Full-stack MERN architecture",
        "REST API communication"
      ],
      github: "", // Empty: button will hide automatically
      liveDemo: "", // Empty: button will hide automatically
      featured: true // Highlights as primary banner
    },
    {
      id: 2,
      title: "CampusNest – PG Accommodation Site",
      subtitle: "Student Housing Explorer",
      category: "React",
      statusBadge: "Completed",
      image: "assets/projects/campusnest.png",
      description: "A responsive accommodation discovery website designed for students to explore PG rooms, amenities, pricing, and contact hosts seamlessly.",
      technologies: ["React.js", "JavaScript", "CSS3", "React Router"],
      features: [
        "Responsive multi-device layout",
        "Modular React component hierarchy",
        "Client routing with React Router",
        "Categorized PG amenity listings"
      ],
      github: "",
      liveDemo: "",
      featured: false
    },
    {
      id: 3,
      title: "IPL Teams & Players Website",
      subtitle: "Cricket Directory & Stats",
      category: "React",
      statusBadge: "Completed",
      image: "assests/projects/ipl.png",
      description: "An interactive sports application featuring IPL team rosters, detailed player profiles, and statistical score breakdowns powered by JSON data.",
      technologies: ["React.js", "Material UI", "JSON", "React Router"],
      features: [
        "Dynamic team and player profiles",
        "Batting and bowling statistics display",
        "JSON-based data handling",
        "Polished Material UI layout"
      ],
      github: "",
      liveDemo: "",
      featured: false
    },
    {
      id: 4,
      title: "Personal Portfolio Website",
      subtitle: "Developer Showcase",
      category: "HTML/CSS/JS",
      statusBadge: "Live",
      image: "assets/images/projects/portfolio.png",
      description: "A modern, highly performant developer portfolio built with pure HTML5, CSS3, and JavaScript featuring data-driven architecture and smooth interactions.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Completely data-driven with data.js",
        "Smooth scroll and active section spy",
        "Client-side form validation",
        "Zero external framework dependencies"
      ],
      github: "https://github.com/Justyyyankita136",
      liveDemo: "#home",
      featured: false
    },
    {
      id: 5,
      title: "Login Authentication System",
      subtitle: "Auth Flow & Local Storage",
      category: "HTML/CSS/JS",
      statusBadge: "Completed",
      image: "assets/images/projects/login-system.png",
      description: "A frontend security and authentication interface supporting user registration, secure login validation, and persistent sessions via Local Storage.",
      technologies: ["HTML5", "Bootstrap", "JavaScript", "Local Storage"],
      features: [
        "User registration and login flows",
        "Comprehensive client validation checks",
        "Local Storage persistent state",
        "Clean responsive forms"
      ],
      github: "",
      liveDemo: "",
      featured: false
    },
    {
      id: 6,
      title: "Property Management System",
      subtitle: "Real Estate & Tenant Tracker",
      category: "HTML/CSS/JS",
      statusBadge: "Completed",
      image: "assets/images/projects/property-management.png",
      description: "A responsive property management interface for cataloging real estate inventory, tracking tenant details, and recording monthly rent receipts.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Property inventory directory",
        "Tenant records management",
        "Rent status logging",
        "Interactive dashboard interface"
      ],
      github: "",
      liveDemo: "",
      featured: false
    }
  ],

  // 7. Core Strengths / Why Work With Me
  strengths: [
    {
      title: "Problem Solving",
      icon: "fa-solid fa-puzzle-piece",
      description: "Breaking complex application requirements into structured, clean, and bug-resistant logical solutions."
    },
    {
      title: "Fast Learner",
      icon: "fa-solid fa-bolt",
      description: "Quick to master modern toolings, APIs, and frameworks, applying them directly to real-world software tasks."
    },
    {
      title: "Team Collaboration",
      icon: "fa-solid fa-users",
      description: "Experienced in git workflows, code reviews, and communicative development inside engineering teams."
    },
    {
      title: "Communication",
      icon: "fa-solid fa-comments",
      description: "Articulating ideas clearly, documenting logic, and actively discussing technical workflows with peers."
    },
    {
      title: "Adaptability",
      icon: "fa-solid fa-arrows-split-up-and-left",
      description: "Embracing evolving project parameters and smoothly balancing frontend design with backend functionality."
    },
    {
      title: "Leadership",
      icon: "fa-solid fa-award",
      description: "Taking proactive ownership of tasks, unblocking fellow developers, and driving features to completion."
    }
  ],

  // 8. Certificates & Accreditations (Add as you earn more)
  certificates: [
    {
      id: 1,
      title: "Web Development & MERN Stack Training",
      organization: "Avadh Web / Technical Training",
      date: "2026",
      image: "assets/images/certificates/certificate1.png",
      link: "" // Leave empty if no external link yet; button will hide cleanly
    }
  ]
};