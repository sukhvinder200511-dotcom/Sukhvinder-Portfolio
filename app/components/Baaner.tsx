import Image from "next/image";
import bannerPhoto from "../images/banner.jpeg";
import WhatsAppIcon from "./WhatsAppIcon";
import Typewriter from "./Typewriter";

const SOCIALS = [
  { label: "WhatsApp", href: "https://wa.me/6395382105", icon: WhatsAppIcon },
  { label: "Instagram", href: "https://www.instagram.com/honey_ahluwalia_?igsh=MWd5aWwzandncXozcQ==", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sukhvinder-singh-03510b291?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: LinkedInIcon },
] as const;

export default function Baaner() {
  return (
    <section
      id="home"
      className="relative isolate overflow-x-hidden px-4 py-16 sm:px-8 lg:px-16 lg:py-24"
    >
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div data-reveal className="reveal">
          <span className="inline-flex rounded-full border border-[var(--accent)] px-4 py-1 text-xs font-semibold tracking-[0.18em] text-[var(--accent)]">
            FRONTEND DEVELOPER
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-[var(--text)] sm:text-5xl lg:text-[56px] lg:leading-[1.08]">
            Hi, I&apos;m
            <span className="mt-1 block">Sukhvinder Singh</span>
          </h1>

          <p className="mt-4 flex max-w-full flex-wrap items-baseline gap-x-2 text-xl font-semibold sm:text-2xl">
            <span className="text-[var(--muted)]">I build with</span>
            <Typewriter />
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            I build responsive, user-friendly websites and modern web interfaces
            — turning designs into clean, performant frontends with React.js,
            Next.js, and modern CSS.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="btn-pop inline-flex items-center rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-bold tracking-wide text-[#070b14] hover:brightness-110"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn-pop inline-flex items-center rounded-xl border border-[var(--header-border)] px-5 py-3 text-sm font-semibold text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="btn-pop inline-flex items-center rounded-xl border border-[var(--header-border)] px-5 py-3 text-sm font-semibold text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-7 flex items-center gap-3">
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
        </div>

        <div
          data-reveal
          className="reveal reveal-right relative mx-auto w-full max-w-[440px] pb-6 lg:justify-self-end"
          style={{ ["--delay" as string]: "0.18s" }}
        >
          <div className="absolute -bottom-2 left-8 right-8 h-24 rounded-full bg-sky-400/25 blur-3xl" />
          <div className="img-zoom relative overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={bannerPhoto}
                alt="Sukhvinder Singh"
                fill
                priority
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 420px, 440px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
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
