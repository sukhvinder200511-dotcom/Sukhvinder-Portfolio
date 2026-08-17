import Image from "next/image";
import aboutPhoto from "../images/about.jpeg";

const TAGS = [
  "React.js",
  "Next.js",
  "WordPress",
  "Shopify",
  "Responsive UI",
  "Email Templates",
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-20 sm:px-8 lg:px-16 lg:py-28">
      <div className="pointer-events-none absolute top-20 left-[8%] h-56 w-56 rounded-full bg-[var(--glow)] blur-3xl" />

      <div className="relative mx-auto max-w-[1400px]">
        <div
          data-reveal
          className="reveal overflow-hidden rounded-[32px] border border-[var(--header-border)] bg-[var(--skill-card)] p-5 sm:p-8 lg:p-10"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="relative mx-auto w-full max-w-[420px] lg:mx-0">
              <div className="img-zoom relative overflow-hidden rounded-[24px]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={aboutPhoto}
                    alt="Sukhvinder Singh"
                    fill
                    className="object-cover object-[center_18%]"
                    sizes="(max-width: 1024px) 420px, 400px"
                  />
                </div>
              </div>
            </div>

            <div>
              <span className="inline-flex rounded-full border border-[var(--accent)] px-4 py-1 text-xs font-semibold tracking-[0.18em] text-[var(--accent)]">
                ABOUT ME
              </span>

              <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-[40px] lg:leading-[1.15]">
                Turning designs into clean, working interfaces
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[var(--muted)] sm:text-[17px]">
                Frontend Developer in Saharanpur, currently at Terioat Infotech.
                I build responsive sites with HTML, CSS, JavaScript, React.js, and
                Next.js — converting designs into pixel-focused pages, customizing
                WordPress with Elementor, and tailoring Shopify storefronts.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-[17px]">
                I use Bootstrap and Tailwind CSS for reusable layouts, then fix UI,
                cross-browser, and spacing issues so the interface holds up on
                desktop, tablet, and mobile.
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {TAGS.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-[var(--header-border)] bg-[var(--bg)] px-3.5 py-1.5 text-xs font-semibold text-[var(--text)] sm:text-sm"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <blockquote className="mt-6 border-l-2 border-[var(--accent)] pl-4 text-sm leading-relaxed text-[var(--text)] sm:text-base">
                A great frontend combines creativity with technical understanding
                — and always puts the user first.
              </blockquote>

              <a
                href="#contact"
                className="btn-pop mt-8 inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-bold tracking-wide text-[#070b14] hover:brightness-110"
              >
                Let&apos;s Talk
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12 12 4m0 0H6.5M12 4v5.5" />
    </svg>
  );
}
