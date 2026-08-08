import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  CalendarDays,
  Code2,
  Database,
  Download,
  ExternalLink,
  GitBranch,
  GraduationCap,
  Layers3,
  Mail,
  Medal,
  Network,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react";
import { PortfolioNav } from "./components/PortfolioNav";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const aliases = [
  "Software Engineer",
  "Backend Developer",
  "AI Enthusiast",
  "Systems Builder",
];

const heroLinks = [
  {
    label: "GitHub",
    href: "https://github.com/NFahmid",
    icon: GitBranch,
  },
  {
    label: "Email",
    href: "mailto:nurenfahmid@iut-dhaka.edu",
    icon: Mail,
  },
];

const heroMetrics = [
  {
    value: "6",
    label: "Highlighted projects",
  },
  {
    value: "3",
    label: "Hackathon results",
  },
  {
    value: "2027",
    label: "Expected graduation",
  },
];

const heroSignals = [
  {
    label: "Academic track",
    value: "Software Engineering undergraduate at IUT",
    icon: GraduationCap,
  },
  {
    label: "Project evidence",
    value: "EduVision, IUTverse, FlowGuard, SkillSync, MediX, BackfireOS",
    icon: Layers3,
  },
  {
    label: "Build direction",
    value: "Backend APIs, AI workflows, real-time systems, and product UI",
    icon: TerminalSquare,
  },
];

const heroFocusTags = [
  "REST APIs",
  "Django",
  "FastAPI",
  "Spring Boot",
  "Next.js",
  "PostgreSQL",
];

const hackathons = [
  {
    event: "IUT CS CodeSprint",
    result: "Champion",
    note: "Campus-focused competitive build experience.",
  },
  {
    event: "IIUC CSE Fest 2025",
    result: "15th place",
    note: "Built and presented under hackathon constraints.",
  },
  {
    event: "Infinity AI BuildFest",
    result: "Finalist",
    note: "AI product sprint with multi-agent system work.",
  },
];

const academicFocus = [
  "Data structures",
  "Algorithms",
  "Object-oriented programming",
  "Software quality assurance",
  "Design patterns",
  "Software requirements specification",
  "Networking",
  "Software design",
];

const featuredProjects = [
  {
    name: "EduVision",
    repo: "https://github.com/FaiyazAwsaf/EduVision",
    label: "AI education platform",
    status: "Full-stack academic project",
    summary:
      "A role-based learning platform for script evaluation, rubric management, real-time tutoring, study planning, and AI-assisted content generation.",
    problem:
      "School workflows often split assessment, tutoring, content support, and student analytics across disconnected tools.",
    contribution:
      "Led frontend development with Next.js, React, and TypeScript; built responsive dashboards and analytics views; worked on LiveKit/Django Channels tutoring and Gemini-backed content generation with Celery processing.",
    features: [
      "Rubric-driven answer script evaluation",
      "Live tutoring sessions with session lifecycle management",
      "AI-generated summaries, worked examples, and worksheets",
      "Admin, teacher, and student workflows",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Django",
      "DRF",
      "Channels",
      "Celery",
      "Redis",
      "LiveKit",
      "Gemini",
    ],
    visual: ["Rubrics", "Tutoring", "Study content", "Analytics"],
  },
  {
    name: "IUTverse",
    repo: "https://github.com/A-Piyas-04/IUTverse",
    label: "Campus social platform",
    status: "Team full-stack project",
    summary:
      "A campus-centric platform for IUT students with authenticated access, posts, direct messaging, jobs, lost-and-found, and academic resources.",
    problem:
      "University communities need trusted, student-only spaces for announcements, resource sharing, discussion, and peer collaboration.",
    contribution:
      "Designed social posting flows with threaded comments, reactions, anonymous posting, and personalized feeds; built WebSocket-based messaging and job-board workflows with application states and discussion support.",
    features: [
      "IUT email-based authentication",
      "Social posts, comments, reactions, and anonymous posts",
      "Real-time messaging and conversation history",
      "Job board, academic resources, and lost-and-found",
    ],
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "JWT",
    ],
    visual: ["Posts", "Chat", "Jobs", "Resources"],
  },
  {
    name: "BackfireOS",
    repo: "https://github.com/adibqt/BackfireOS",
    label: "Adversarial AI product",
    status: "Infinity AI BuildFest finalist",
    summary:
      "A brand-campaign red-team engine that uses AI personas, cultural stress mapping, counterfactual branches, and streamed verdicts to predict campaign failure modes.",
    problem:
      "Creative teams often test whether campaigns might work, but not how they could backfire across culture, regulation, and social media.",
    contribution:
      "Contributed to a hackathon product centered on AI orchestration, SSE streaming, Supabase persistence, and explainable multi-agent verdict surfaces.",
    features: [
      "Six adversarial AI personas",
      "SSE verdict streaming",
      "Banglish RAG with pgvector",
      "Boardroom debate and regulatory pre-mortem flows",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "pgvector",
      "Gemini",
      "Groq",
      "SSE",
    ],
    visual: ["Agents", "RAG", "SSE", "Risk scores"],
  },
];

const secondaryProjects = [
  {
    name: "FlowGuard",
    repo: "https://github.com/NFahmid/FlowGuard",
    label: "API anomaly detection",
    summary:
      "An IP-based API abuse detection system with async request logging, feature windows, Isolation Forest scoring, and a read-only admin dashboard.",
    contribution:
      "Built around FastAPI, PostgreSQL, Redis, scikit-learn, and a Next.js admin surface focused on explainable observability.",
    stack: [
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "scikit-learn",
      "Next.js",
      "Docker",
    ],
  },
  {
    name: "SkillSync",
    repo: "https://github.com/adibqt/IiucProject",
    label: "Career guidance platform",
    summary:
      "A career platform for CV/profile building, skill extraction, job matching, admin-managed skills, and AI-assisted recommendations.",
    contribution:
      "Developed CV/profile builder flows and an intelligent skills pipeline that validates submitted skills against a curated database for skill-gap analysis.",
    stack: ["React", "FastAPI", "PostgreSQL", "SQLAlchemy", "Gemini", "Docker"],
  },
  {
    name: "MediX",
    repo: "https://github.com/RidwanRK/MediX",
    label: "Medical management system",
    summary:
      "A team academic system with role-based dashboards for doctors, pharmacists, receptionists, and patients.",
    contribution:
      "Worked as a named team member on a Next.js and Spring Boot application covering appointments, prescriptions, pharmacy inventory, and patient records.",
    stack: ["Next.js", "TypeScript", "Spring Boot", "Java", "MySQL", "JPA"],
  },
];

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["C", "C++", "Python", "Java", "JavaScript", "AL"],
  },
  {
    title: "Frontend",
    icon: Layers3,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Backend",
    icon: TerminalSquare,
    skills: [
      "Node.js",
      "Express",
      "Django",
      "FastAPI",
      "Spring Boot",
      "REST APIs",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "Oracle", "PL/SQL", "MongoDB", "Neo4j"],
  },
  {
    title: "AI And Systems",
    icon: BrainCircuit,
    skills: [
      "LLM integrations",
      "OCR-assisted workflows",
      "Anomaly detection",
      "Celery",
      "WebSockets",
      "Networking",
      "Vector databases"
    ],
  },
  {
    title: "Engineering Practice",
    icon: ShieldCheck,
    skills: [
      "Data structures",
      "Algorithms",
      "SQA",
      "SRS",
      "OOP",
      "Design patterns",
      "Docker",
      "Git",
      "Postman",
    ],
  },
];

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/NFahmid",
    detail: "Repositories and project history",
    icon: GitBranch,
  },
  {
    label: "Email",
    href: "mailto:nurenfahmid@iut-dhaka.edu",
    detail: "nurenfahmid@iut-dhaka.edu",
    icon: Mail,
  },
  {
    label: "Resume",
    href: "/resume/CV.pdf",
    detail: "Download PDF",
    icon: Download,
    download: true,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nuren Fahmid",
  email: "mailto:nurenfahmid@iut-dhaka.edu",
  url: siteUrl,
  sameAs: ["https://github.com/NFahmid"],
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Islamic University of Technology",
  },
  knowsAbout: [
    "Software Engineering",
    "Full-stack development",
    "AI-assisted applications",
    "Data structures",
    "Algorithms",
  ],
};

export default function Home() {
  return (
    <>
      <PortfolioNav />
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <main id="main">
        <section
          className="hero-section section-band"
          id="home"
          aria-labelledby="hero-title"
        >
          <div className="section-inner hero-grid">
            <div className="hero-copy reveal">
              <p className="section-kicker">
                <span>Portfolio</span>
                <span>Software Engineering</span>
              </p>
              <h1 id="hero-title">Nuren Fahmid</h1>
              <div
                className="alias-line"
                aria-label={`Roles: ${aliases.join(", ")}`}
              >
                <span>I work as a</span>
                <strong>
                  {aliases.map((alias) => (
                    <span key={alias}>{alias}</span>
                  ))}
                </strong>
              </div>
              <p className="hero-intro">
                Third-year Software Engineering undergraduate at Islamic
                University of Technology, building full-stack, AI-assisted, and
                systems projects through academic work, hackathons, and personal
                exploration.
              </p>

              <div className="hero-actions" aria-label="Primary actions">
                <a className="button button-primary" href="#projects">
                  <ArrowDown size={18} aria-hidden="true" />
                  View Projects
                </a>
                <a
                  className="button button-secondary"
                  href="/resume/CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Nuren Fahmid resume in a new tab"
                >
                  <ExternalLink size={18} aria-hidden="true" />
                  View Resume
                </a>
              </div>

              <div
                className="hero-links"
                aria-label="Social and contact shortcuts"
              >
                {heroLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <Icon size={17} aria-hidden="true" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>

            <aside
              className="hero-evidence reveal"
              aria-labelledby="hero-evidence-title"
            >
              <div className="evidence-topline" aria-hidden="true">
                <span>03 / 27</span>
                <span>Project-led profile</span>
              </div>

              <div className="evidence-board">
                <div className="evidence-heading">
                  <p>Current signal</p>
                  <h2 id="hero-evidence-title">
                    Student profile built from systems, coursework, and public
                    repository work.
                  </h2>
                </div>

                <dl className="evidence-metrics" aria-label="Portfolio summary">
                  {heroMetrics.map((metric) => (
                    <div key={metric.label}>
                      <dt>{metric.value}</dt>
                      <dd>
                        <strong>{metric.label}</strong>
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="evidence-rail">
                  {heroSignals.map((signal) => {
                    const Icon = signal.icon;
                    return (
                      <article key={signal.label}>
                        <Icon size={19} aria-hidden="true" />
                        <div>
                          <span>{signal.label}</span>
                          <p>{signal.value}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>

                <div className="evidence-tags" aria-label="Technical focus">
                  {heroFocusTags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <p className="evidence-note">
                First-screen proof: academic work, hackathons, and selected
                projects.
              </p>
            </aside>
          </div>
        </section>

        <section
          className="section-band academics-section"
          id="academics"
          aria-labelledby="academics-title"
        >
          <div className="section-inner two-column">
            <div className="section-heading reveal">
              <p className="section-kicker">
                <span>01</span>
                <span>Academics</span>
              </p>
              <h2 id="academics-title">
                A software engineering foundation, still in active build.
              </h2>
              <p>
                The portfolio is intentionally project-led: coursework,
                hackathons, and shipped prototypes are the evidence, not
                inflated job titles.
              </p>
            </div>

            <div className="academic-panel reveal">
              <div className="degree-block">
                <GraduationCap size={24} aria-hidden="true" />
                <div>
                  <h3>Bachelor of Science in Software Engineering</h3>
                  <p>Islamic University of Technology</p>
                  <span>
                    <CalendarDays size={15} aria-hidden="true" />
                    2023 - 2027
                  </span>
                </div>
              </div>

              <div
                className="focus-grid"
                aria-label="Academic and technical focus areas"
              >
                {academicFocus.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="hackathon-list" aria-label="Hackathon experience">
                {hackathons.map((hackathon, index) => (
                  <article key={hackathon.event}>
                    <span className="index-mark">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4>{hackathon.event}</h4>
                      <strong>{hackathon.result}</strong>
                      <p>{hackathon.note}</p>
                    </div>
                    <Medal size={19} aria-hidden="true" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="section-band projects-section"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="section-inner">
            <div className="section-heading project-heading reveal">
              <p className="section-kicker">
                <span>02</span>
                <span>Projects</span>
              </p>
              <h2 id="projects-title">Project works.</h2>
            </div>

            <div className="featured-projects">
              {featuredProjects.map((project, index) => (
                <article className="project-showcase reveal" key={project.name}>
                  <div className="project-meta">
                    <span className="index-mark">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{project.label}</span>
                    <span>{project.status}</span>
                  </div>

                  <div className="project-content">
                    <div>
                      <h3>{project.name}</h3>
                      <p className="project-summary">{project.summary}</p>

                      <dl className="project-details">
                        <div>
                          <dt>Problem</dt>
                          <dd>{project.problem}</dd>
                        </div>
                        <div>
                          <dt>Contribution</dt>
                          <dd>{project.contribution}</dd>
                        </div>
                      </dl>

                      <ul
                        className="feature-list"
                        aria-label={`${project.name} main features`}
                      >
                        {project.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>

                      <div
                        className="stack-list"
                        aria-label={`${project.name} technology stack`}
                      >
                        {project.stack.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>

                      <a
                        className="text-link"
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open repository
                        <ArrowUpRight size={17} aria-hidden="true" />
                      </a>
                    </div>

                    <ProjectVisual
                      name={project.name}
                      items={project.visual}
                      index={index}
                    />
                  </div>
                </article>
              ))}
            </div>

            <div
              className="secondary-projects"
              aria-label="Additional highlighted projects"
            >
              {secondaryProjects.map((project, index) => (
                <article className="compact-project reveal" key={project.name}>
                  <div className="compact-project-top">
                    <span className="index-mark">
                      {String(index + 4).padStart(2, "0")}
                    </span>
                    <span>{project.label}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <p className="compact-contribution">{project.contribution}</p>
                  <div className="stack-list">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <a
                    className="text-link"
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repository
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section-band skills-section"
          id="skills"
          aria-labelledby="skills-title"
        >
          <div className="section-inner">
            <div className="section-heading reveal">
              <p className="section-kicker">
                <span>03</span>
                <span>Skills</span>
              </p>
              <h2 id="skills-title">A practical toolkit.</h2>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <article className="skill-group reveal" key={group.title}>
                    <div className="skill-group-title">
                      <Icon size={20} aria-hidden="true" />
                      <h3>{group.title}</h3>
                    </div>
                    <ul>
                      {group.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="section-band contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="section-inner contact-grid">
            <div className="section-heading reveal">
              <p className="section-kicker">
                <span>04</span>
                <span>Contact</span>
              </p>
              <h2 id="contact-title">
                Open to internship, junior developer, research, and academic
                opportunities.
              </h2>
              <p>
                The fastest way to understand my work is through the projects
                above. The fastest way to reach me is email.
              </p>
            </div>

            <div className="contact-panel reveal">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    download={
                      link.download ? "Nuren-Fahmid-Resume.pdf" : undefined
                    }
                  >
                    <Icon size={21} aria-hidden="true" />
                    <span>
                      <strong>{link.label}</strong>
                      <small>{link.detail}</small>
                    </span>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-inner footer-inner">
          <span>Nuren Fahmid</span>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

function ProjectVisual({
  name,
  items,
  index,
}: {
  name: string;
  items: string[];
  index: number;
}) {
  return (
    <div
      className="project-visual"
      data-variant={index % 3}
      aria-label={`${name} visual preview`}
    >
      <div className="visual-header">
        <span />
        <span />
        <span />
      </div>
      <div className="visual-grid">
        {items.map((item, itemIndex) => (
          <div
            key={item}
            className={
              itemIndex === 0 ? "visual-cell is-primary" : "visual-cell"
            }
          >
            <span>{item}</span>
            <i aria-hidden="true" />
          </div>
        ))}
      </div>
      <div className="visual-footer">
        <Network size={17} aria-hidden="true" />
        <span>{name} system map</span>
      </div>
    </div>
  );
}
