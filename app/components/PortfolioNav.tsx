"use client";

import { useEffect, useRef, useState } from "react";
import { Download, GitBranch, Mail, Menu, Moon, Sun, X } from "lucide-react";

type Theme = "light" | "dark";

const navItems = [
  { href: "#projects", label: "Work", id: "projects" },
  { href: "#profile", label: "Profile", id: "profile" },
  { href: "#toolkit", label: "Toolkit", id: "toolkit" },
  { href: "#contact", label: "Contact", id: "contact" },
] as const;

export function PortfolioNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const syncTheme = () => {
      const stored = localStorage.getItem("theme");
      const next: Theme =
        stored === "light" || stored === "dark"
          ? stored
          : media.matches
            ? "dark"
            : "light";
      root.dataset.theme = next;
      setTheme(next);
    };

    syncTheme();
    media.addEventListener("change", syncTheme);
    return () => media.removeEventListener("change", syncTheme);
  }, []);

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll(".reveal"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = ["home", ...navItems.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-18% 0px -64% 0px", threshold: [0, 0.15, 0.4] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("nav-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          <span aria-hidden="true">NF</span>
          <strong>Nuren Fahmid</strong>
        </a>

        <button
          ref={menuButtonRef}
          className="nav-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>

        <div className="nav-links" id="site-menu" data-open={menuOpen}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.id ? "is-active" : ""}
              aria-current={activeSection === item.id ? "location" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mobile-nav-extras">
            <a href="https://github.com/NFahmid" target="_blank" rel="noopener noreferrer">
              <GitBranch size={18} aria-hidden="true" /> GitHub
            </a>
            <a href="mailto:nurenfahmid@iut-dhaka.edu">
              <Mail size={18} aria-hidden="true" /> Email
            </a>
          </div>
        </div>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            aria-pressed={theme === "dark"}
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <a
            className="resume-link"
            href="/resume/Nuren-Fahmid-Resume.pdf"
            download="Nuren-Fahmid-Resume.pdf"
          >
            <Download size={17} aria-hidden="true" />
            Résumé
          </a>
        </div>
      </nav>
    </header>
  );
}
