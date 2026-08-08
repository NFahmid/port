import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Download,
  GitBranch,
  GraduationCap,
  Mail,
  Medal,
} from "lucide-react";
import { PortfolioNav } from "./components/PortfolioNav";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const featuredProjects = [
  {
    index: "01",
    name: "EduVision",
    category: "AI education platform",
    role: "Frontend lead · Full-stack contributor",
    repo: "https://github.com/FaiyazAwsaf/EduVision",
    summary:
      "A role-based learning platform that brings script evaluation, live tutoring, study planning, and AI-assisted content into one connected workflow.",
    contribution:
      "Led the Next.js frontend and responsive dashboard system, then worked across LiveKit tutoring, Django Channels, and Gemini-backed content generation with Celery.",
    highlights: [
      "Rubric-driven script evaluation",
      "Real-time tutoring lifecycle",
      "Role-specific analytics and workflows",
    ],
    stack: "Next.js · TypeScript · Django · Channels · Celery · Redis · LiveKit · Gemini",
    visual: "eduvision",
    tone: "cobalt",
  },
  {
    index: "02",
    name: "FlowGuard",
    category: "API anomaly detection",
    role: "Backend & systems project",
    repo: null,
    summary:
      "An API-abuse detection system that turns request traffic into explainable risk signals without slowing down the application path.",
    contribution:
      "Designed async request logging, Redis-backed feature windows, Isolation Forest scoring, and a read-only Next.js surface for investigating anomalies.",
    highlights: [
      "Asynchronous request telemetry",
      "IP-based rolling feature windows",
      "Explainable anomaly review",
    ],
    stack: "FastAPI · PostgreSQL · Redis · scikit-learn · Next.js · Docker",
    visual: "flowguard",
    tone: "acid",
  },
  {
    index: "03",
    name: "IUTverse",
    category: "Campus social platform",
    role: "Team full-stack project",
    repo: "https://github.com/A-Piyas-04/IUTverse",
    summary:
      "A trusted digital commons for IUT students, combining social posts, real-time messaging, jobs, academic resources, and lost-and-found.",
    contribution:
      "Built threaded social interactions, personalized feeds, WebSocket messaging, and job-board workflows with application states and discussions.",
    highlights: [
      "Student-only authenticated access",
      "WebSocket conversations",
      "Posts, jobs, and shared resources",
    ],
    stack: "React · Node.js · Express · Prisma · PostgreSQL · WebSockets · JWT",
    visual: "iutverse",
    tone: "coral",
  },
] as const;

const projectArchive = [
  {
    index: "04",
    name: "BackfireOS",
    category: "Adversarial AI product",
    note: "Multi-agent campaign red-teaming with streamed verdicts and Banglish RAG.",
    stack: "Next.js · Supabase · pgvector · Gemini · SSE",
    repo: "https://github.com/adibqt/BackfireOS",
  },
  {
    index: "05",
    name: "SkillSync",
    category: "Career guidance platform",
    note: "CV building, skill extraction, job matching, and AI-assisted recommendations.",
    stack: "React · FastAPI · PostgreSQL · Gemini",
    repo: "https://github.com/adibqt/IiucProject",
  },
  {
    index: "06",
    name: "MediX",
    category: "Medical management system",
    note: "Role-based healthcare operations across appointments, records, and pharmacy.",
    stack: "Next.js · Spring Boot · Java · MySQL",
    repo: "https://github.com/RidwanRK/MediX",
  },
] as const;

const achievements = [
  {
    event: "IUT CS CodeSprint",
    result: "Champion",
    note: "Campus competitive build",
  },
  {
    event: "Infinity AI BuildFest",
    result: "Finalist",
    note: "Adversarial AI product sprint",
  },
  {
    event: "IIUC CSE Fest 2025",
    result: "15th place",
    note: "Hackathon build and pitch",
  },
] as const;

const capabilities = [
  {
    title: "Backend systems",
    description: "APIs, service boundaries, async work, and real-time communication.",
    skills: "Django · FastAPI · Spring Boot · Node.js · REST · WebSockets",
  },
  {
    title: "Product frontend",
    description: "Responsive interfaces that make complex workflows feel straightforward.",
    skills: "React · Next.js · TypeScript · Tailwind CSS · Accessibility",
  },
  {
    title: "Data & applied AI",
    description: "Practical model integrations grounded in reliable product workflows.",
    skills: "PostgreSQL · Redis · Gemini · RAG · OCR · scikit-learn",
  },
  {
    title: "Engineering practice",
    description: "Foundations for making software maintainable beyond the demo.",
    skills: "OOP · Design patterns · SQA · Docker · Git · Algorithms",
  },
] as const;

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
    "Backend systems",
    "Full-stack development",
    "Applied artificial intelligence",
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
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="shell hero-layout">
            <div className="hero-copy reveal">
              <div className="hero-overline">
                <span>Software Engineering</span>
                <span>IUT · Dhaka</span>
              </div>

              <p className="hero-introduction">Hi, I&apos;m Nuren Fahmid.</p>
              <h1 id="hero-title">
                I build the systems behind <em>useful</em> digital products.
              </h1>
              <p className="hero-summary">
                A Software Engineering undergraduate focused on reliable
                backends, thoughtful full-stack products, and practical AI
                workflows.
              </p>

              <div className="hero-actions" aria-label="Primary actions">
                <a className="button button-solid" href="#projects">
                  Explore selected work
                  <ArrowDown size={18} aria-hidden="true" />
                </a>
                <a
                  className="button button-text"
                  href="/resume/Nuren-Fahmid-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View résumé
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>

              <div className="hero-availability">
                <span className="status-dot" aria-hidden="true" />
                Open to software engineering internships and collaborations.
              </div>
            </div>

            <div className="portrait-stage reveal">
              <div className="portrait-grid" aria-hidden="true" />
              <div className="portrait-media">
                <Image
                  src="/assets/nuren-fahmid-transparent.webp"
                  alt="Portrait of Nuren Fahmid"
                  fill
                  sizes="(max-width: 760px) 92vw, (max-width: 1100px) 46vw, 520px"
                  preload
                  className="portrait-image"
                />
              </div>
              <div className="portrait-caption">
                <span>Currently</span>
                <strong>BSc in Software Engineering</strong>
                <small>Expected graduation · 2027</small>
              </div>
              <span className="portrait-monogram" aria-hidden="true">NF</span>
            </div>
          </div>

          <div className="shell proof-strip" aria-label="Portfolio highlights">
            <div>
              <strong>Champion</strong>
              <span>IUT CS CodeSprint</span>
            </div>
            <div>
              <strong>Finalist</strong>
              <span>Infinity AI BuildFest</span>
            </div>
            <div>
              <strong>2027</strong>
              <span>Expected graduation</span>
            </div>
            <p>Backend systems · Product UI · Real-time software · Applied AI</p>
          </div>
        </section>

        <section className="work-section" id="projects" aria-labelledby="projects-title">
          <div className="shell">
            <header className="section-header reveal">
              <div>
                <p className="eyebrow">Selected work · 2024—2026</p>
                <h2 id="projects-title">Projects with real technical weight.</h2>
              </div>
              <p>
                A focused selection of systems I helped shape—from product
                interfaces to event-driven backends and intelligent workflows.
              </p>
            </header>

            <div className="case-study-list">
              {featuredProjects.map((project) => (
                <article
                  className="case-study reveal"
                  data-tone={project.tone}
                  key={project.name}
                >
                  <div className="case-index" aria-hidden="true">{project.index}</div>

                  <div className="case-copy">
                    <div className="case-meta">
                      <span>{project.category}</span>
                      <span>{project.role}</span>
                    </div>
                    <h3>{project.name}</h3>
                    <p className="case-summary">{project.summary}</p>

                    <div className="case-contribution">
                      <span>What I delivered</span>
                      <p>{project.contribution}</p>
                    </div>

                    <ul aria-label={`${project.name} highlights`}>
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>

                    <p className="case-stack">{project.stack}</p>
                    {project.repo ? (
                      <a
                        className="case-link"
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View repository
                        <ArrowUpRight size={18} aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="case-private">Private project · details available on request</span>
                    )}
                  </div>

                  <ProjectArtwork variant={project.visual} />
                </article>
              ))}
            </div>

            <div className="archive reveal" aria-labelledby="archive-title">
              <div className="archive-heading">
                <p className="eyebrow">More builds</p>
                <h3 id="archive-title">Project archive</h3>
              </div>
              <div className="archive-list">
                {projectArchive.map((project) => (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={project.name}
                  >
                    <span className="archive-index">{project.index}</span>
                    <span className="archive-title">
                      <strong>{project.name}</strong>
                      <small>{project.category}</small>
                    </span>
                    <span className="archive-note">{project.note}</span>
                    <span className="archive-stack">{project.stack}</span>
                    <ArrowUpRight size={19} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="profile-section" id="profile" aria-labelledby="profile-title">
          <div className="shell profile-layout">
            <div className="profile-intro reveal">
              <p className="eyebrow">Profile</p>
              <h2 id="profile-title">
                Engineering foundations. Product curiosity. A habit of shipping.
              </h2>
              <p>
                I like work that sits between systems and people: understanding
                the workflow, finding the technical pressure points, and making
                the final product easier to trust and use.
              </p>
              <a
                className="inline-link"
                href="/resume/Nuren-Fahmid-Resume.pdf"
                download="Nuren-Fahmid-Resume.pdf"
              >
                <Download size={18} aria-hidden="true" />
                Download my résumé
              </a>
            </div>

            <div className="profile-record reveal">
              <div className="education-record">
                <GraduationCap size={25} aria-hidden="true" />
                <div>
                  <span>Education</span>
                  <h3>BSc in Software Engineering</h3>
                  <p>Islamic University of Technology</p>
                  <small>
                    <CalendarDays size={15} aria-hidden="true" />
                    2023—2027
                  </small>
                </div>
              </div>

              <div className="achievement-records" aria-label="Hackathon results">
                {achievements.map((achievement, index) => (
                  <article key={achievement.event}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{achievement.event}</h3>
                      <p>{achievement.note}</p>
                    </div>
                    <strong>{achievement.result}</strong>
                    <Medal size={19} aria-hidden="true" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="capabilities-section" id="toolkit" aria-labelledby="toolkit-title">
          <div className="shell">
            <header className="section-header compact reveal">
              <div>
                <p className="eyebrow">Working set</p>
                <h2 id="toolkit-title">Tools follow the problem.</h2>
              </div>
              <p>
                I work across the stack, with the most depth in backend systems
                and the interfaces that make them useful.
              </p>
            </header>

            <div className="capability-grid">
              {capabilities.map((capability, index) => (
                <article className="capability reveal" key={capability.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                  <small>{capability.skills}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="shell contact-layout reveal">
            <div className="contact-copy">
              <p className="eyebrow">Let&apos;s talk</p>
              <h2 id="contact-title">Have a problem worth building around?</h2>
              <p>
                I&apos;m open to software engineering internships, junior roles,
                research work, and thoughtful project collaborations.
              </p>
            </div>

            <div className="contact-links">
              <a href="mailto:nurenfahmid@iut-dhaka.edu">
                <Mail size={21} aria-hidden="true" />
                <span>
                  <small>Email</small>
                  <strong>nurenfahmid@iut-dhaka.edu</strong>
                </span>
                <ArrowUpRight size={21} aria-hidden="true" />
              </a>
              <a
                href="https://github.com/NFahmid"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitBranch size={21} aria-hidden="true" />
                <span>
                  <small>GitHub</small>
                  <strong>@NFahmid</strong>
                </span>
                <ArrowUpRight size={21} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-layout">
          <span>Nuren Fahmid · Software Engineering</span>
          <span>Dhaka, Bangladesh · 2026</span>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

function ProjectArtwork({
  variant,
}: {
  variant: (typeof featuredProjects)[number]["visual"];
}) {
  if (variant === "flowguard") {
    return (
      <div className="project-art flowguard-art" aria-hidden="true">
        <div className="art-label"><span>Traffic monitor</span><strong>LIVE</strong></div>
        <div className="traffic-chart">
          {[34, 48, 39, 65, 51, 78, 44, 56, 89, 62, 47, 71, 53, 42, 68].map(
            (height, index) => (
              <i key={`${height}-${index}`} style={{ height: `${height}%` }} />
            ),
          )}
          <span className="threshold">anomaly threshold</span>
        </div>
        <div className="flow-metrics">
          <div><small>Risk score</small><strong>0.87</strong></div>
          <div><small>Window</small><strong>60s</strong></div>
          <div><small>Pipeline</small><strong>Async</strong></div>
        </div>
      </div>
    );
  }

  if (variant === "iutverse") {
    return (
      <div className="project-art iutverse-art" aria-hidden="true">
        <div className="verse-wordmark">IUTverse</div>
        <div className="conversation-card card-one">
          <span>Campus feed</span>
          <p>One trusted space for the whole community.</p>
          <i />
        </div>
        <div className="conversation-card card-two">
          <span>Messages</span>
          <div className="message-line"><i /><b /></div>
          <div className="message-line"><i /><b /></div>
          <div className="message-line"><i /><b /></div>
        </div>
        <div className="verse-orbit">
          <span>Posts</span><span>Jobs</span><span>Chat</span><span>Resources</span>
        </div>
      </div>
    );
  }

  return (
    <div className="project-art eduvision-art" aria-hidden="true">
      <div className="art-label"><span>Learning workflow</span><strong>EV / 01</strong></div>
      <div className="edu-diagram">
        <div className="edu-core"><span>EduVision</span><strong>Learn with context.</strong></div>
        <div className="edu-node node-one">Evaluate</div>
        <div className="edu-node node-two">Tutor</div>
        <div className="edu-node node-three">Plan</div>
        <div className="edu-node node-four">Create</div>
      </div>
      <div className="edu-footer"><span>Rubrics</span><span>LiveKit</span><span>Gemini</span></div>
    </div>
  );
}
