"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Header() {
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const ids = NAV_LINKS.map((link) => link.href.slice(1));

    const onScroll = () => {
      const offset = 120;
      let current = "#home";

      for (const id of ids) {
        const section = document.getElementById(id);
        if (!section) continue;
        if (section.getBoundingClientRect().top - offset <= 0) {
          current = `#${id}`;
        }
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <header className="header-in sticky top-0 z-50 border-b border-[var(--header-border)] bg-[var(--header-bg)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 right-[18%] h-24 w-[420px] -translate-y-1/2 rounded-full blur-3xl bg-[var(--glow)]" />
      </div>

      <div className="relative z-10 mx-auto flex h-[72px] max-w-[1400px] items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#home"
          onClick={() => setActive("#home")}
          className="shrink-0 text-[22px] font-semibold tracking-tight text-[#6ec8ff] dark:text-[#6ec8ff]"
        >
          SS.dev
        </a>

        <nav className="hidden items-center gap-7 xl:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`relative text-[15px] font-medium transition-colors ${
                  isActive
                    ? "text-[var(--accent)]"
                    : "text-[var(--muted)] hover:text-[var(--text)]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-[var(--accent)]" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="relative z-50 flex items-center gap-2">
          <label
            htmlFor="theme-toggle"
            aria-label="Switch color theme"
            className="relative z-50 inline-flex cursor-pointer items-center rounded-full bg-[var(--toggle-bg)] px-3.5 py-1.5 text-[13px] font-medium text-[var(--text)] ring-1 ring-[var(--toggle-ring)] transition hover:opacity-80"
          >
            <span className="theme-dark-label">
              <SunIcon />
              Light
            </span>
            <span className="theme-light-label">
              <MoonIcon />
              Dark
            </span>
          </label>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--toggle-bg)] text-[var(--text)] ring-1 ring-[var(--toggle-ring)] xl:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>

      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 xl:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      <aside
        className={`fixed top-0 left-0 z-[70] flex h-dvh w-[82%] max-w-[320px] flex-col bg-[var(--header-bg)] shadow-[8px_0_40px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out xl:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-[72px] items-center justify-between border-b border-[var(--header-border)] px-5">
          <a
            href="#home"
            onClick={() => {
              setActive("#home");
              setMenuOpen(false);
            }}
            className="text-[22px] font-semibold tracking-tight text-[#6ec8ff]"
          >
            SS.dev
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--toggle-bg)] text-[var(--text)] ring-1 ring-[var(--toggle-ring)]"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation"
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-5">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActive(link.href);
                  setMenuOpen(false);
                }}
                className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                  isActive
                    ? "bg-sky-400/10 text-[var(--accent)]"
                    : "text-[var(--text)] hover:bg-[var(--menu-hover)]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-amber-400" fill="currentColor" aria-hidden>
      <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
      <path d="M12 2.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 12 2.25Zm0 16.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V19.5a.75.75 0 0 1 .75-.75ZM19.5 12a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H20.25A.75.75 0 0 1 19.5 12ZM2.25 12a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 12Zm14.99-6.72a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 0-1.06ZM4.64 17.66a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 0-1.06ZM19.36 17.66a.75.75 0 0 1 0 1.06l-1.06 1.06a.75.75 0 1 1-1.06-1.06l1.06-1.06a.75.75 0 0 1 1.06 0ZM6.76 4.64a.75.75 0 0 1 0 1.06L5.7 6.76A.75.75 0 0 1 4.64 5.7l1.06-1.06a.75.75 0 0 1 1.06 0Z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-sky-500" fill="currentColor" aria-hidden>
      <path d="M21 14.3A8.5 8.5 0 0 1 9.7 3 7.5 7.5 0 1 0 21 14.3Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
