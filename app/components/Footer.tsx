const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Lets Talk" },
] as const;

const SOCIALS = [
  { label: "WhatsApp", href: "https://wa.me/", icon: WhatsAppIcon },
  { label: "Instagram", href: "https://instagram.com/", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: LinkedInIcon },
  { label: "GitHub", href: "https://github.com/", icon: GitHubIcon },
] as const;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--header-border)] px-5 py-16 sm:px-8 sm:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-[var(--glow)] blur-3xl" />

      <div data-reveal className="reveal relative mx-auto flex max-w-[1400px] flex-col items-center text-center">
        <a href="#home" className="group inline-flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--accent)] text-lg font-semibold text-[var(--accent)] shadow-[0_0_24px_color-mix(in_srgb,var(--accent)_35%,transparent)]">
            SS
          </span>
          <span className="text-3xl font-bold tracking-[0.18em] text-[var(--accent)] sm:text-4xl">
            SS.DEV
          </span>
        </a>

        <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--muted)] sm:gap-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-8 flex items-center gap-4">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="icon-pop flex h-11 w-11 items-center justify-center rounded-full border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[#070b14]"
            >
              <social.icon />
            </a>
          ))}
        </div>

        <p className="mt-10 text-xs text-[var(--muted)] sm:text-sm">
          © 2026 Crafted with ❤️ by Sukhvinder — All Rights Reserved
        </p>
      </div>

      <a
        href="#home"
        aria-label="Back to top"
        className="absolute right-5 bottom-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--accent)] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[#070b14] sm:right-8"
      >
        <TopIcon />
      </a>
    </footer>
  );
}

function TopIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12.5V3.5m0 0 4 4M8 3.5 4 7.5" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M20.5 3.5A11 11 0 0 0 2.1 17.4L1 23l5.8-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.4.6.7-3.3-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.3-.4c.1-.2 0-.3 0-.5l-.8-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3s-1 1-1 2.4 1 2.8 1.1 3 1.9 3 4.6 4.1a15.7 15.7 0 0 0 1.6.6 3.8 3.8 0 0 0 1.8.1c.5-.1 1.6-.7 1.8-1.3s.2-1.2.2-1.3-.2-.2-.5-.3Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return <span className="text-[15px] font-bold leading-none">in</span>;
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.6s.8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1a3.6 3.6 0 0 1 .1 2.6 3.9 3.9 0 0 1 1 2.7c0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
    </svg>
  );
}
