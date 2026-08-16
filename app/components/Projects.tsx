const PROJECTS = [
  {
    title: "Ecommerce Dashboard",
    description: "Built a responsive ecommerce dashboard interface with reusable frontend components.",
    tech: "React.js",
    accent: "#38bdf8",
    live: "#",
  },
  {
    title: "Ecommerce Demo Website",
    description: "Created a responsive ecommerce website interface with product-focused layouts.",
    tech: "HTML, CSS, JavaScript",
    accent: "#fb923c",
    live: "#",
  },
  {
    title: "YouTube Homepage Demo",
    description: "Developed a responsive video-platform-inspired homepage and interactive UI.",
    tech: "HTML, CSS, React.js",
    accent: "#f87171",
    live: "#",
  },
  {
    title: "Static Website",
    description: "Built responsive website pages with clean layouts and interactive elements.",
    tech: "HTML, CSS, JavaScript",
    accent: "#4ade80",
    live: "#",
  },
] as const;

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-[var(--skill-section)] px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
      <div className="relative mx-auto max-w-[1400px]">
        <div data-reveal className="reveal">
          <p className="inline-flex rounded-full border border-[var(--accent)] px-4 py-1 text-xs font-semibold tracking-[0.18em] text-[var(--accent)]">
            PROJECTS
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-[42px]">
            Selected work
          </h2>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {PROJECTS.map((project, index) => (
            <li
              key={project.title}
              data-reveal
              className="reveal"
              style={{ ["--delay" as string]: `${index * 0.08}s` }}
            >
              <article
                className="group flex h-full flex-col rounded-[22px] border border-[var(--header-border)] bg-[var(--skill-card)] p-6 transition duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_color-mix(in_srgb,var(--card-accent)_18%,transparent)]"
                style={{ ["--card-accent" as string]: project.accent }}
              >
                <span
                  className="h-1.5 w-10 rounded-full"
                  style={{ backgroundColor: project.accent }}
                />

                <h3 className="mt-5 text-lg font-semibold tracking-tight text-[var(--text)] sm:text-xl">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                  {project.description}
                </p>
                <p className="mt-5 font-mono text-xs text-[var(--accent)]">
                  {project.tech}
                </p>

                <a
                  href={project.live}
                  target={project.live.startsWith("http") ? "_blank" : undefined}
                  rel={project.live.startsWith("http") ? "noreferrer" : undefined}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl border border-[var(--header-border)] px-4 py-2 text-sm font-medium text-[var(--text)] transition hover:border-[var(--card-accent)] hover:text-[var(--card-accent)]"
                >
                  Live Demo
                  <ArrowIcon />
                </a>
              </article>
            </li>
          ))}
        </ul>
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
