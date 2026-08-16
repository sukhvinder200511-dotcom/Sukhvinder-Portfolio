const EMAIL = "hello@ss.dev";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden px-5 py-28 sm:px-8 sm:py-36 lg:px-16 lg:py-44"
    >
      <div className="pointer-events-none absolute -top-10 left-[8%] h-40 w-40 rounded-full bg-sky-400/20 blur-3xl orb-float" />
      <div className="pointer-events-none absolute top-[18%] left-[28%] h-16 w-16 rounded-full bg-sky-300/25 blur-2xl orb-float-slow" />
      <div className="pointer-events-none absolute top-1/2 right-[12%] h-56 w-56 -translate-y-1/2 rounded-full bg-[var(--glow)] blur-3xl orb-float" />
      <div className="pointer-events-none absolute bottom-[18%] left-[18%] h-24 w-24 rounded-full bg-cyan-400/15 blur-3xl orb-float-slow" />
      <div className="pointer-events-none absolute right-[30%] bottom-[22%] h-10 w-10 rounded-full bg-sky-200/20 blur-xl orb-float" />

      <div data-reveal className="reveal relative mx-auto flex min-h-[52vh] max-w-[1400px] flex-col justify-center">
        <p className="text-sm font-medium text-[var(--text)] sm:text-base">
          Want to start a project?
        </p>

        <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="water-heading max-w-[16ch] text-[clamp(2.8rem,9vw,7.5rem)] font-bold leading-[0.95] tracking-tight">
            {["Let's", "have", "a", "chat"].map((word, index) => (
              <span
                key={word}
                className="water-word"
                style={{ ["--wave-delay" as string]: `${index * 0.18}s` }}
              >
                <span className="water-heading-outline">
                  {word === "Let's" ? "Let\u2019s" : word}
                </span>
                <span className="water-heading-fill" aria-hidden="true">
                  {word === "Let's" ? "Let\u2019s" : word}
                </span>
              </span>
            ))}
          </h2>

          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex shrink-0 items-center gap-3 text-sm text-[var(--text)] sm:text-base"
          >
            {EMAIL}
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--text)] text-[var(--bg)] transition group-hover:bg-[var(--accent)] group-hover:text-[#070b14]">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 14 14" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 11 11 3m0 0H5.5M11 3v5.5" />
    </svg>
  );
}
