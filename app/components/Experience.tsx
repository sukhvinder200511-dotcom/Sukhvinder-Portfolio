const JOBS = [
  {
    title: "Frontend Developer",
    company: "Terioat Infotech",
    badge: "Current",
    period: "Present",
    techs: ["React.js", "Next.js", "Tailwind", "Bootstrap", "WordPress", "Shopify"],
    points: [
      "Develop responsive and user-friendly websites and web interfaces.",
      "Build frontend interfaces using HTML, CSS, JavaScript, React.js, and Next.js.",
      "Use Bootstrap and Tailwind CSS to create responsive layouts and reusable UI components.",
      "Develop and customize WordPress websites using Elementor and related tools.",
      "Customize Shopify storefronts and implement frontend design changes.",
      "Convert design concepts into responsive, pixel-focused web pages.",
      "Fix UI, responsive, cross-browser, and frontend functionality issues.",
      "Optimize website layouts and interactions for desktop, tablet, and mobile.",
    ],
  },
  {
    title: "Junior Developer",
    company: "Stellen Infotech",
    badge: "1 Year",
    period: "1 Year",
    techs: ["React.js", "JavaScript", "Bootstrap", "WordPress", "HTML", "CSS"],
    points: [
      "Developed and maintained responsive websites and frontend interfaces.",
      "Worked with HTML, CSS, JavaScript, React.js, Bootstrap, and WordPress.",
      "Created responsive layouts and implemented website designs across screen sizes.",
      "Customized WordPress websites and implemented UI improvements.",
      "Worked on frontend functionality, debugging, and browser compatibility.",
      "Collaborated with team members on web development tasks and client requirements.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "DOJ App",
    badge: "3 Months",
    period: "3 Months",
    techs: ["HTML", "CSS", "JavaScript"],
    points: [
      "Gained practical experience in frontend web development in a professional environment.",
      "Worked with HTML, CSS, and JavaScript to build responsive web interfaces.",
      "Assisted in developing and improving website layouts and frontend components.",
      "Implemented responsive designs for different screen sizes and devices.",
      "Fixed frontend UI issues and supported website testing and debugging.",
    ],
  },
] as const;

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden px-4 py-20 sm:px-8 lg:px-16 lg:py-28">
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-[min(80%,720px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[var(--glow)] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div data-reveal className="reveal max-w-2xl">
          <span className="inline-flex rounded-full border border-[var(--accent)] px-4 py-1 text-xs font-semibold tracking-[0.18em] text-[var(--accent)]">
            EXPERIENCE
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-[42px]">
            Where I&apos;ve worked
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            A focused frontend path — from internship to building production
            interfaces with React, Next.js, WordPress, and Shopify.
          </p>
        </div>

        <div data-reveal className="reveal mt-12 grid items-start gap-8 lg:grid-cols-[320px_1fr] lg:gap-12" style={{ ["--delay" as string]: "0.12s" }}>
          <div className="relative z-20 flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {JOBS.map((item, index) => (
              <div key={item.company} className="min-w-[220px] lg:min-w-0">
                <input
                  id={`exp-${index}`}
                  type="radio"
                  name="experience-job"
                  defaultChecked={index === 0}
                  className="peer sr-only"
                />
                <label
                  htmlFor={`exp-${index}`}
                  className="block cursor-pointer rounded-2xl border border-[var(--header-border)] bg-[var(--skill-card)] px-5 py-4 transition duration-300 peer-checked:border-[var(--accent)] peer-checked:bg-[color-mix(in_srgb,var(--accent)_12%,var(--skill-card))] peer-checked:shadow-[0_12px_32px_color-mix(in_srgb,var(--accent)_18%,transparent)] peer-checked:[&_.exp-badge]:bg-[var(--accent)] peer-checked:[&_.exp-badge]:text-[#070b14] peer-checked:[&_.exp-badge]:ring-0 hover:border-[var(--accent)]/35"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold tracking-[0.16em] text-[var(--accent)]">
                      0{index + 1}
                    </span>
                    <span className="exp-badge rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-[var(--accent)] ring-1 ring-[var(--accent)]/30">
                      {item.badge}
                    </span>
                  </div>
                  <p className="mt-3 text-base font-semibold text-[var(--text)]">
                    {item.company}
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.title}</p>
                </label>
              </div>
            ))}
          </div>

          <div className="relative z-0 min-h-[420px]">
            {JOBS.map((job, index) => (
              <article
                key={job.company}
                data-exp-panel={index}
                className="experience-panel relative overflow-hidden rounded-[28px] border border-[var(--header-border)] bg-[var(--skill-card)] p-6 sm:p-8 lg:p-10"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--glow)] blur-3xl" />
                <p className="font-mono text-6xl font-bold leading-none text-[var(--accent)]/10 sm:text-8xl">
                  0{index + 1}
                </p>

                <div className="relative -mt-8 sm:-mt-10">
                  <h3 className="text-2xl font-bold tracking-tight text-[var(--text)] sm:text-3xl">
                    {job.title}
                  </h3>
                  <p className="mt-2 text-base text-[var(--muted)]">
                    {job.company}
                    <span className="mx-2 text-[var(--accent)]">/</span>
                    {job.period}
                  </p>
                </div>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {job.techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[var(--bg)] px-3 py-1 text-xs font-medium text-[var(--accent)] ring-1 ring-[var(--accent)]/25"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="relative mt-8 grid gap-3 sm:grid-cols-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 rounded-2xl bg-[var(--bg)]/60 px-4 py-3.5 text-sm leading-relaxed text-[var(--muted)]"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/15 text-[var(--accent)]">
                        <CheckIcon />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.2 6.2 4.8 8.8 9.8 3.4" />
    </svg>
  );
}
