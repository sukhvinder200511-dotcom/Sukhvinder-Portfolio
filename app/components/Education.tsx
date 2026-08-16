const SCHOOLS = [
  {
    level: "01",
    title: "Secondary Education",
    place: "CIN School",
    years: "2021 — 2022",
    tag: "Foundation",
    note: "Completed secondary studies and built the base for a computer applications path.",
  },
  {
    level: "02",
    title: "Bachelor of Computer Applications (BCA)",
    place: "Quantum University, Roorkee, Uttarakhand",
    years: "2022 — 2025",
    tag: "Latest",
    note: "Focused on computer applications, programming, and building real-world web interfaces.",
  },
] as const;

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
      <div className="pointer-events-none absolute top-24 left-[10%] h-64 w-64 rounded-full bg-[var(--glow)] blur-3xl" />

      <div className="relative mx-auto max-w-[1400px]">
        <div data-reveal className="reveal">
          <span className="inline-flex rounded-full border border-[var(--accent)] px-4 py-1 text-xs font-semibold tracking-[0.18em] text-[var(--accent)]">
            EDUCATION
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-[42px]">
            Academic background
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            From secondary school to a BCA at Quantum University — a clear path
            into frontend development.
          </p>
        </div>

        <div className="relative mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="pointer-events-none absolute top-[72px] right-[calc(50%-1px)] left-[calc(50%-1px)] hidden h-px bg-gradient-to-r from-[var(--accent)]/10 via-[var(--accent)] to-[var(--accent)]/10 lg:block" />
          <span className="pointer-events-none absolute top-[64px] left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] shadow-[0_0_16px_var(--accent)] lg:block" />

          {SCHOOLS.map((school, index) => (
            <article
              key={school.title}
              data-reveal
              className="reveal group relative overflow-hidden rounded-[28px] border border-[var(--header-border)] bg-[var(--skill-card)] p-7 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-[0_20px_50px_color-mix(in_srgb,var(--accent)_14%,transparent)] sm:p-9"
              style={{ ["--delay" as string]: `${index * 0.12}s` }}
            >
              <p className="font-mono text-6xl font-bold leading-none text-[var(--accent)]/10 sm:text-7xl">
                {school.level}
              </p>

              <div className="relative -mt-6 flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/12 text-[var(--accent)]">
                  {index === 0 ? <SchoolIcon /> : <GradIcon />}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    index === 1
                      ? "bg-[var(--accent)] text-[#070b14]"
                      : "text-[var(--accent)] ring-1 ring-[var(--accent)]/30"
                  }`}
                >
                  {school.tag}
                </span>
              </div>

              <h3 className="relative mt-6 text-xl font-semibold tracking-tight text-[var(--text)] sm:text-[22px]">
                {school.title}
              </h3>
              <p className="relative mt-2 flex items-start gap-2 text-sm text-[var(--muted)] sm:text-[15px]">
                <PinIcon />
                {school.place}
              </p>
              <p className="relative mt-4 text-sm leading-relaxed text-[var(--muted)]">
                {school.note}
              </p>

              <div className="relative mt-6 inline-flex rounded-full bg-[var(--bg)] px-4 py-2 font-mono text-sm text-[var(--accent)] ring-1 ring-[var(--accent)]/20">
                {school.years}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SchoolIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20V9.5L12 5l8 4.5V20M8 20v-6h8v6M4 20h16" />
    </svg>
  );
}

function GradIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 10 9-5 9 5-9 5-9-5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 12.2v4.3c0 .4 2.2 2.5 5 2.5s5-2.1 5-2.5v-4.3M21 10v6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14s5-3.6 5-7.2A5 5 0 1 0 3 6.8C3 10.4 8 14 8 14Z" />
    </svg>
  );
}
