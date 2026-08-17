const SKILLS = [
  { name: "HTML 5", src: "/icons/html5.svg", color: "#E34F26" },
  { name: "CSS 3", src: "/icons/css3.svg", color: "#1572B6" },
  { name: "Bootstrap 5", src: "/icons/bootstrap.svg", color: "#7952B3" },
  { name: "JavaScript", src: "/icons/javascript.svg", color: "#F7DF1E" },
  { name: "React JS", src: "/icons/react.svg", color: "#61DAFB" },
  { name: "Tailwind CSS", src: "/icons/tailwindcss.svg", color: "#38BDF8" },
  { name: "Material UI", src: "/icons/materialui.svg", color: "#007FFF" },
  { name: "WordPress", src: "/icons/wordpress.svg", color: "#21759B" },
  { name: "Shopify", src: "/icons/shopify.svg", color: "#95BF47" },
  { name: "SEO Optimize", src: "/icons/seo.svg", color: "#38BDF8" },
  { name: "Email Template", src: "/icons/email.svg", color: "#38BDF8" },
] as const;

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[var(--skill-section)] px-4 py-20 sm:px-8 lg:px-16 lg:py-28"
    >
      <div className="pointer-events-none absolute top-16 right-[8%] h-56 w-56 rounded-full bg-[var(--glow)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-[6%] h-44 w-44 rounded-full bg-[var(--glow)] blur-3xl" />

      <div className="relative mx-auto max-w-[1400px]">
        <div data-reveal className="reveal">
          <p className="inline-flex rounded-full border border-[var(--accent)] px-4 py-1 text-xs font-semibold tracking-[0.18em] text-[var(--accent)]">
            SKILLS
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-[42px]">
            Tools I work with
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Frontend tools I use to turn designs into clean, responsive interfaces.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {SKILLS.map((skill, index) => (
            <li
              key={skill.name}
              data-reveal
              className="reveal"
              style={{
                ["--icon-color" as string]: skill.color,
                ["--delay" as string]: `${index * 0.05}s`,
              }}
            >
              <article className="group flex h-full flex-col items-center rounded-[22px] border border-[var(--header-border)] bg-[var(--skill-card)] px-4 py-6 text-center transition duration-300 hover:-translate-y-1.5 hover:border-[var(--icon-color)] hover:shadow-[0_16px_36px_color-mix(in_srgb,var(--icon-color)_22%,transparent)]">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--icon-color)_12%,transparent)] transition duration-300 group-hover:scale-110">
                  <img
                    src={skill.src}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                </span>

                <h3 className="mt-4 text-sm font-semibold text-[var(--text)] sm:text-base">
                  {skill.name}
                </h3>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
