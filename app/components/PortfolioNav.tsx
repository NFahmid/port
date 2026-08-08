"use client";

import { useEffect, useState, type MouseEvent } from "react";
import {
  Download,
  GitBranch,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

type Theme = "light" | "dark";

const navItems = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#education", label: "Education", id: "education" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#contact", label: "Contact", id: "contact" },
];

function getHeaderOffset() {
  return (
    (document.querySelector(".site-header")?.getBoundingClientRect().height ??
      0) + 20
  );
}

function getScrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
}

function getHashId() {
  return decodeURIComponent(window.location.hash.replace("#", ""));
}

function scrollToSectionId(
  id: string,
  options: { behavior?: ScrollBehavior; updateHash?: boolean } = {},
) {
  const target = document.getElementById(id);
  if (!target) {
    return;
  }

  const top =
    target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();

  window.scrollTo({
    top: Math.max(0, top),
    behavior: options.behavior ?? getScrollBehavior(),
  });

  if (options.updateHash !== false && window.location.hash !== `#${id}`) {
    window.history.pushState(null, "", `#${id}`);
  }
}

function readActiveSection() {
  const sections = navItems
    .map((item) => document.getElementById(item.id))
    .filter(Boolean) as HTMLElement[];
  const marker = getHeaderOffset() + Math.min(window.innerHeight * 0.24, 180);
  let active = "home";

  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= marker) {
      active = section.id;
    }
  });

  return active;
}

export function PortfolioNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const syncSystemTheme = () => {
      const stored = localStorage.getItem("theme");
      const hasSavedTheme = stored === "dark" || stored === "light";
      const next: Theme = hasSavedTheme
        ? stored
        : media.matches
          ? "dark"
          : "light";

      if (!hasSavedTheme) {
        root.dataset.theme = next;
      }

      setTheme(next);
    };

    syncSystemTheme();
    media.addEventListener("change", syncSystemTheme);
    return () => media.removeEventListener("change", syncSystemTheme);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const finishLoading = () => {
      window.setTimeout(() => {
        root.dataset.loading = "false";
      }, 120);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => window.removeEventListener("load", finishLoading);
  }, []);

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll(".reveal"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    revealItems.forEach((item) => revealObserver.observe(item));
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      setActiveSection(readActiveSection());
    };

    const requestActiveUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    };

    const restoreHashPosition = () => {
      const id = getHashId();
      if (id) {
        scrollToSectionId(id, { behavior: "auto", updateHash: false });
      }
      requestActiveUpdate();
    };

    window.addEventListener("scroll", requestActiveUpdate, { passive: true });
    window.addEventListener("hashchange", restoreHashPosition);
    requestAnimationFrame(restoreHashPosition);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestActiveUpdate);
      window.removeEventListener("hashchange", restoreHashPosition);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  const handleSectionClick = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();
    setMenuOpen(false);
    setActiveSection(id);
    scrollToSectionId(id);
  };

  return (
    <>
      <div className="loader" aria-hidden="true">
        <div className="loader-mark">
          <span>NF</span>
          <i />
        </div>
      </div>

      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <a
            className="brand-mark"
            href="#home"
            onClick={(event) => handleSectionClick(event, "home")}
          >
            <span aria-hidden="true">NF</span>
            <span>Nuren Fahmid</span>
          </a>

          <button
            className="nav-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className="nav-links" id="site-menu" data-open={menuOpen}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === item.id ? "is-active" : ""}
                aria-current={activeSection === item.id ? "page" : undefined}
                onClick={(event) => handleSectionClick(event, item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <a
              className="icon-link"
              href="https://github.com/NFahmid"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Nuren Fahmid on GitHub"
            >
              <GitBranch size={18} />
            </a>
            <a
              className="icon-link"
              href="mailto:nurenfahmid@iut-dhaka.edu"
              aria-label="Email Nuren Fahmid"
            >
              <Mail size={18} />
            </a>
            <a
              className="icon-link"
              href="/resume/Nuren-Fahmid-Resume.pdf"
              download="Nuren-Fahmid-Resume.pdf"
              aria-label="Download Nuren Fahmid resume"
            >
              <Download size={18} />
            </a>
            <button
              className="icon-link"
              type="button"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              aria-pressed={theme === "dark"}
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
