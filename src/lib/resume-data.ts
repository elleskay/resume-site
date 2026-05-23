export const profile = {
  name: "Lum Soon Keong",
  headline:
    "Full-Stack Engineer, Singapore Government Systems (IRAS · MOM · DOS)",
  location: "Singapore",
  email: "LSKpes10@gmail.com",
  linkedin: "https://linkedin.com/in/lum-soon-keong",
  summary:
    "Full-stack engineer who has shipped public-facing citizen services across three Singapore government agencies. Six years at NCS Group with end-to-end ownership: greenfield eServices from empty repo to UAT, TypeScript/Angular microfrontends, .NET Core and Java/Spring Boot backends, event-driven Kafka pipelines, and cross-agency RESTful API platforms. MTech in Software Engineering, NUS.",
};

export const competencies = [
  "End-to-End Ownership",
  "Full-Stack Engineering",
  "TypeScript / Angular",
  ".NET Core / Java",
  "API-First System Design",
  "Event-Driven (Kafka)",
  "CI/CD Pipelines",
  "Secure SDLC",
  "Module Lead / Mentoring",
  "Singapore Gov-Tech",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  context: string;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "NCS Group, Singapore",
    role: "Full Stack Engineer (.NET Core / Angular), IRIN3 at IRAS",
    period: "Jan 2025 – Present",
    context:
      "Refunds module for IRIN3, IRAS's next-generation tax administration platform.",
    bullets: [
      "Built a public-facing eService from an empty repository to UAT. Sole engineer end-to-end across the .NET Core backend and the Angular microfrontend.",
      "Built an end-to-end event-driven batch pipeline from scratch: consumed Kafka events, applied business logic, generated outbound files, published completion events, handled recovery.",
      "Enhanced backend processing logic across multiple business workflows using .NET Core and Entity Framework Core.",
      "Contributed to periodic code syncs between the live production codebase and the in-development codebase.",
    ],
    stack: [
      ".NET Core",
      "C#",
      "Entity Framework Core",
      "Angular",
      "Apache Kafka",
      "xUnit",
      "MSSQL",
      "SonarQube",
      "Fortify",
    ],
  },
  {
    company: "NCS Group, Singapore",
    role: "Java Backend Engineer (Spring Boot), CAM at DOS / MTI",
    period: "Jan 2024 – Dec 2024",
    context:
      "Central API Management platform: cross-agency API layer between MTI and the Department of Statistics.",
    bullets: [
      "Built an API-first platform using Spring Boot and Hibernate, publishing MTI account services to authorised consumers.",
      "Deployed API services on WebLogic on Linux, leveraging JNDI for secure connection management.",
      "Improved system reliability through comprehensive test suites using JUnit and REST Assured.",
      "Led vulnerability remediation and dependency upgrades, resolving issues from Fortify and Dependency Check reports.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "Oracle SQL",
      "WebLogic",
      "JUnit",
      "REST Assured",
      "Fortify",
    ],
  },
  {
    company: "NCS Group, Singapore",
    role: "Module Lead / Java Backend Engineer, IWPS / WPOL at MOM",
    period: "Jan 2022 – Dec 2023",
    context:
      "IWPS and WPOL at the Ministry of Manpower. Singapore's platform managing the full work pass lifecycle.",
    bullets: [
      "Owned service requests end-to-end: analysed feasibility, modified backend logic, ran SIT/UAT, coordinated with business stakeholders.",
      "Mentored and guided junior developers on backend best practices.",
      "Documented system modifications for audit and future maintenance.",
    ],
    stack: ["Java", "Oracle SQL", "WebLogic", "Jenkins", "Linux"],
  },
  {
    company: "NCS Group, Singapore",
    role: "Java Backend Developer, IWPS / WPOL at MOM",
    period: "Jan 2020 – Dec 2021",
    context: "Service request enhancements on Singapore's work pass platform.",
    bullets: [
      "Implemented service request changes by modifying and enhancing backend business logic.",
      "Debugged production issues and maintained system stability.",
    ],
    stack: ["Java", "Oracle SQL", "WebLogic", "Jenkins"],
  },
];

export const education = [
  {
    degree: "Master of Technology, Software Engineering",
    school: "National University of Singapore",
    year: "2026",
  },
];

export const skills: { category: string; items: string[] }[] = [
  { category: "Languages", items: ["Java", "C#", "TypeScript", "SQL"] },
  {
    category: "Backend",
    items: [".NET Core", "Spring Boot", "Hibernate", "Entity Framework Core"],
  },
  { category: "Frontend", items: ["Angular", "HTML", "CSS"] },
  { category: "Messaging", items: ["Apache Kafka"] },
  { category: "Databases", items: ["Oracle SQL", "Microsoft SQL Server"] },
  { category: "Testing", items: ["xUnit", "JUnit", "REST Assured"] },
  {
    category: "Security",
    items: ["Fortify", "SonarQube", "Dependency Check"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Linux", "WebLogic", "Jenkins"],
  },
  {
    category: "Cloud / DevOps",
    items: ["Microsoft Azure", "Azure DevOps", "CI/CD"],
  },
];
