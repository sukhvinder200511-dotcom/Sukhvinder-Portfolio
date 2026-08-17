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
      className="relative isolate overflow-hidden px-4 py-16 sm:px-8 lg:px-16 lg:py-24"
    >
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div data-reveal className="reveal">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text)] sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Hi, I&apos;m <br></br> Sukhvinder Singh
          </h1>


          <Typewriter />

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            I build responsive, user-friendly websites and modern web interfaces
            — turning designs into clean, performant frontends with React.js,
            Next.js, and modern CSS.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="btn-pop inline-flex items-center rounded-xl bg-gradient-to-r from-[#2563eb] to-[#6ec8ff] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(56,189,248,0.35)] hover:brightness-110"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn-pop inline-flex items-center rounded-xl border border-black/15 bg-transparent px-5 py-3 text-sm font-semibold text-[var(--text)] hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="btn-pop inline-flex items-center rounded-xl border border-black/15 bg-transparent px-5 py-3 text-sm font-semibold text-[var(--text)] hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>


          <div className="mt-6 flex items-center gap-4">
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

        <div data-reveal className="reveal reveal-right relative mx-auto w-full max-w-[420px]" style={{ ["--delay" as string]: "0.18s" }}>
          <div className="absolute -bottom-6 left-6 right-6 h-32 rounded-full bg-sky-400/30 blur-3xl dark:bg-sky-400/40" />

          <div className="img-zoom relative overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={bannerPhoto}
                alt="Sukhvinder Singh"
                fill
                priority
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 420px, 420px"
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
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.6s.8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1a3.6 3.6 0 0 1 .1 2.6 3.9 3.9 0 0 1 1 2.7c0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

