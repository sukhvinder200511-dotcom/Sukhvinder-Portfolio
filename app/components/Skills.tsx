const SKILLS = [
  { name: "Html 5", percent: 99, src: "/icons/html5.svg", color: "#E34F26" },
  { name: "Css 3", percent: 95, src: "/icons/css3.svg", color: "#1572B6" },
  { name: "Bootstrap 5", percent: 90, src: "/icons/bootstrap.svg", color: "#7952B3" },
  { name: "JavaScript", percent: 60, src: "/icons/javascript.svg", color: "#F7DF1E" },
  { name: "React JS", percent: 92, src: "/icons/react.svg", color: "#61DAFB" },
  { name: "Tailwind CSS", percent: 90, src: "/icons/tailwindcss.svg", color: "#38BDF8" },
  { name: "Material UI", percent: 80, src: "/icons/materialui.svg", color: "#007FFF" },
  { name: "WordPress", percent: 55, src: "/icons/wordpress.svg", color: "#21759B" },
  { name: "Shopify", percent: 50, src: "/icons/shopify.svg", color: "#95BF47" },
  { name: "SEO Optimize", percent: 75, src: "/icons/seo.svg", color: "#38BDF8" },
] as const;

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[var(--skill-section)] px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
      <div className="pointer-events-none absolute -top-8 right-0 h-40 w-64 opacity-40">
        <WaveDecor />
      </div>
      <div className="pointer-events-none absolute bottom-4 left-0 h-32 w-52 rotate-180 opacity-30">
        <WaveDecor />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        <div data-reveal className="reveal mx-auto max-w-2xl text-center">
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-[42px]">
            My Skills
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and your customers.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
          {SKILLS.map((skill, index) => (
            <li
              key={skill.name}
              data-reveal
              className="reveal group text-center"
              style={{
                ["--icon-color" as string]: skill.color,
                ["--delay" as string]: `${index * 0.06}s`,
              }}
            >
              <div className="flex aspect-[3/4] w-full flex-col items-center justify-center rounded-[22px] border border-transparent bg-[var(--skill-card)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.03] group-hover:border-[var(--icon-color)] group-hover:bg-[color-mix(in_srgb,var(--icon-color)_22%,var(--skill-card))] group-hover:shadow-[0_0_28px_color-mix(in_srgb,var(--icon-color)_28%,transparent)]">
                <span className="flex h-[72px] w-[72px] items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={skill.src}
                    alt=""
                    width={56}
                    height={56}
                    className="h-14 w-14 object-contain"
                  />
                </span>
                <span className="mt-5 text-lg font-semibold text-[var(--text)]">
                  {skill.percent}%
                </span>
              </div>
              <p className="mt-4 text-sm font-medium text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--icon-color)]">
                {skill.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SkillMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M8.2 6.4 3.5 12l4.7 5.6 1.5-1.3L6.2 12l3.5-4.3-1.5-1.3Zm7.6 0-1.5 1.3L17.8 12l-3.5 4.3 1.5 1.3L20.5 12l-4.7-5.6Z" />
    </svg>
  );
}

function WaveDecor() {
  return (
    <svg viewBox="0 0 220 120" className="h-full w-full text-[var(--accent)]" fill="none" aria-hidden>
      <path
        d="M10 90c30-40 50-40 80 0s50 40 80 0 50-40 80 0"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.35"
      />
      <path
        d="M10 70c30-40 50-40 80 0s50 40 80 0 50-40 80 0"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.22"
      />
      <path
        d="M10 50c30-40 50-40 80 0s50 40 80 0 50-40 80 0"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.12"
      />
    </svg>
  );
}
