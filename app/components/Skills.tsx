const SKILLS = [
  { name: "Html 5", percent: 99, icon: HtmlIcon, color: "#E34F26" },
  { name: "Css 3", percent: 95, icon: CssIcon, color: "#1572B6" },
  { name: "Bootstrap 5", percent: 90, icon: BootstrapIcon, color: "#7952B3" },
  { name: "JavaScript", percent: 60, icon: JavaScriptIcon, color: "#F7DF1E" },
  { name: "React JS", percent: 92, icon: ReactIcon, color: "#61DAFB" },
  { name: "Tailwind CSS", percent: 90, icon: TailwindIcon, color: "#38BDF8" },
  { name: "Material UI", percent: 80, icon: MaterialUiIcon, color: "#007FFF" },
  { name: "WordPress", percent: 55, icon: WordPressIcon, color: "#21759B" },
  { name: "Shopify", percent: 50, icon: ShopifyIcon, color: "#96BF48" },
  { name: "SEO Optimize", percent: 75, icon: SeoIcon, color: "#7DD3FC" },
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
          <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[var(--accent)] text-[var(--accent)]">
            <SkillMark />
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-[42px]">
            My Skills
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and your customers.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
          {SKILLS.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <li
                key={skill.name}
                data-reveal
                className="reveal group text-center"
                style={{
                  ["--icon-color" as string]: skill.color,
                  ["--icon-cut" as string]: "var(--skill-card)",
                  ["--delay" as string]: `${index * 0.06}s`,
                }}
              >
                <div className="flex aspect-[3/4] w-full flex-col items-center justify-center rounded-[22px] border border-transparent bg-[var(--skill-card)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.03] group-hover:border-[var(--icon-color)] group-hover:bg-[color-mix(in_srgb,var(--icon-color)_22%,var(--skill-card))] group-hover:shadow-[0_0_28px_color-mix(in_srgb,var(--icon-color)_28%,transparent)] group-hover:[--icon-cut:color-mix(in_srgb,var(--icon-color)_22%,var(--skill-card))]">
                  <span className="flex h-[72px] w-[72px] items-center justify-center text-[#8b93a7] transition-transform duration-300 group-hover:scale-110 group-hover:text-[var(--icon-color)]">
                    <Icon />
                  </span>
                  <span className="mt-5 text-lg font-semibold text-[var(--text)]">
                    {skill.percent}%
                  </span>
                </div>
                <p className="mt-4 text-sm font-medium text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--icon-color)]">
                  {skill.name}
                </p>
              </li>
            );
          })}
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

function HtmlIcon() {
  return (
    <svg viewBox="0 0 48 54" className="h-14 w-14" fill="currentColor" aria-hidden>
      <path d="M4 2h40L40 48 24 52 8 48 4 2Z" />
      <path
        d="M24 45.6 36 42.4 39.2 8.8H8.8L12 42.4 24 45.6Zm0-7.2-7.6-2.1L15.6 16h16.8l-.6 6.8H21.2l.3 3.4h9.7l-.8 8.6L24 36.4Z"
        className="fill-[var(--icon-cut)]"
      />
    </svg>
  );
}

function CssIcon() {
  return (
    <svg viewBox="0 0 48 54" className="h-14 w-14" fill="currentColor" aria-hidden>
      <path d="M4 2h40L40 48 24 52 8 48 4 2Z" />
      <path
        d="M24 45.6 36 42.4 39.2 8.8H8.8L12 42.4 24 45.6Zm0-7.3-7.5-2 .8-8.4h7.2v-3.4H16.8l.6-6.7h13.8l-.4 4.4H24v3.4h7.7l-1.2 12.8L24 38.3Z"
        className="fill-[var(--icon-cut)]"
      />
    </svg>
  );
}

function BootstrapIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-14 w-14" fill="currentColor" aria-hidden>
      <rect x="4" y="4" width="40" height="40" rx="10" />
      <path
        d="M16 14h11.2c5.1 0 8.3 2.6 8.3 6.6 0 2.8-1.7 4.9-4.4 5.6 3.4.6 5.6 2.9 5.6 6.2 0 4.4-3.6 7.6-9.2 7.6H16V14Zm6.2 10.4h4.4c2.2 0 3.4-1.1 3.4-2.8s-1.2-2.7-3.4-2.7h-4.4v5.5Zm0 9.7h5.1c2.5 0 3.9-1.2 3.9-3.1s-1.4-3-3.9-3h-5.1v6.1Z"
        className="fill-[var(--icon-cut)]"
      />
    </svg>
  );
}

function JavaScriptIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-14 w-14" fill="currentColor" aria-hidden>
      <rect x="4" y="4" width="40" height="40" rx="8" />
      <path
        d="M20.2 34.6c0 3.3-1.9 4.8-5.2 4.8-2.5 0-4.4-1.1-5.4-2.6l2.7-1.7c.5.9 1.3 1.5 2.4 1.5 1.2 0 2-.5 2-2.2V22h3.5v12.6Zm7.2 4.7c-3.2 0-5.3-1.5-6.3-3.6l2.7-1.6c.7 1.3 1.7 2.2 3.5 2.2 1.5 0 2.5-.7 2.5-1.8 0-1.3-1-1.7-2.8-2.5l-1-.4c-2.8-1.2-4.6-2.7-4.6-5.9 0-2.9 2.2-5.1 5.7-5.1 2.5 0 4.3 1 5.6 3.2l-2.6 1.7c-.6-1-1.4-1.5-3-1.5s-2.5.8-2.5 1.8c0 1.2 1 1.7 2.9 2.5l1 .4c3.2 1.4 5 2.9 5 6.1 0 3.5-2.7 5.5-6.3 5.5Z"
        className="fill-[var(--icon-cut)]"
      />
    </svg>
  );
}

function WordPressIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-14 w-14" fill="currentColor" aria-hidden>
      <circle cx="24" cy="24" r="20" />
      <path
        d="M12.4 24c0 4.3 2.4 8.1 5.9 10.1L12.8 20.2A11.5 11.5 0 0 0 12.4 24Zm18.7-.7c0-1.3-.5-2.3-1.4-2.7-.6-.3-1.4-.5-2.4-.5-2.2 0-3.3 1.4-3.9 2.4l-.2.3-1.6 4.4 1.9 5.6 4.6-13.7c.2.1.4.1.6.1 1.3 0 1.3 1.1 1.3 2.4v.2c0 1.8-.5 4.1-.5 4.1l-2 6.1 3.6-10.7Zm-6.3 18.2c.4.1.8.1 1.2.1 2.8 0 5.4-1 7.4-2.6l-.3-.8-4.8-13.1-3.5 10.2v.1l-.1.2-.1.2-.2.6Zm9.8-2.8A11.5 11.5 0 0 0 35.6 24c0-2.2-.6-4.3-1.7-6.1L27 36.6l7.6 2.1ZM24 8.5A15.5 15.5 0 1 1 8.5 24 15.5 15.5 0 0 1 24 8.5Z"
        className="fill-[var(--icon-cut)]"
      />
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-14 w-14" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="4.2" fill="currentColor" />
      <ellipse cx="24" cy="24" rx="20" ry="7.8" stroke="currentColor" strokeWidth="2.4" />
      <ellipse
        cx="24"
        cy="24"
        rx="20"
        ry="7.8"
        stroke="currentColor"
        strokeWidth="2.4"
        transform="rotate(60 24 24)"
      />
      <ellipse
        cx="24"
        cy="24"
        rx="20"
        ry="7.8"
        stroke="currentColor"
        strokeWidth="2.4"
        transform="rotate(120 24 24)"
      />
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-14 w-14" fill="currentColor" aria-hidden>
      <path d="M12.8 18.2c2.4-5 6-7.5 10.7-7.5 7.1 0 10.3 4.8 12.4 9.5-2.1-2.7-4.5-3.8-7.2-3.1-1.9.5-3.4 1.9-5 3.6-2.5 2.7-5.4 5.8-12.4 5.8-2.2 0-4.2-.6-5.8-1.7 2.1-2.8 4-4.8 7.3-6.6Zm11.8 12.1c2.4-5 6-7.5 10.7-7.5 7.1 0 10.3 4.8 12.4 9.5-2.1-2.7-4.5-3.8-7.2-3.1-1.9.5-3.4 1.9-5 3.6-2.5 2.7-5.4 5.8-12.4 5.8-2.2 0-4.2-.6-5.8-1.7 2.1-2.8 4-4.8 7.3-6.6Z" />
    </svg>
  );
}

function MaterialUiIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-14 w-14" fill="currentColor" aria-hidden>
      <path d="M8 10.5 24 6l16 4.5v9.2c0 9.8-6.8 18.8-16 21.3-9.2-2.5-16-11.5-16-21.3V10.5Z" />
      <path
        d="M24 11.2 14 14v8.2c0 6.2 4.2 11.9 10 13.6 5.8-1.7 10-7.4 10-13.6V14l-10-2.8Zm0 4.3 5.8 1.6v6.1c0 3.6-2.3 7-5.8 8.2-3.5-1.2-5.8-4.6-5.8-8.2v-6.1L24 15.5Z"
        className="fill-[var(--icon-cut)]"
      />
    </svg>
  );
}

function SeoIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-14 w-14" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M21 7a14 14 0 1 0 8.7 24.9L37.2 39.4 40 36.6l-7.5-7.5A14 14 0 0 0 21 7Zm0 4.5a9.5 9.5 0 1 1 0 19 9.5 9.5 0 0 1 0-19Z"
      />
    </svg>
  );
}

function ShopifyIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-14 w-14" fill="currentColor" aria-hidden>
      <path d="M36.8 12.4s-1.2-.3-2.6-.5l-.2-1.1c-.2-1.2-.5-2.6-1.6-3.3-1.1-.7-2.4-.3-3.1-.1-.1 0-1.7.5-1.7.5s-1.3-1.4-2.9-1.2c-1.6.2-3 1.3-3.8 3.7-.5 1.6-.7 3.4-.8 4.7-1.5.5-2.6.8-2.6.8l-1.7 27.1 16.8 2.9 8.1-1.8-3.9-31.7Z" />
      <path
        d="M29.4 9.3c-.2 0-.5.1-.8.1.1.8.2 1.7.4 2.9 1.2.3 2.2.6 2.2.6s-1.1-3.2-1.8-3.6Zm-3.2-1.2c-.4.1-.8.4-1.1.9.3 1.6.6 3.6.8 5.1 1.4.4 2.6.7 2.6.7-.3-1.8-.8-4.3-1.4-5.8-.3-.4-.6-.8-.9-.9Zm-3.4 5.4c-.6 3.4-.9 6.2-.9 6.2l9.4 1.8s-1.8-6.5-2.4-7.5c-.4-.7-1.5-1-2.7-1.3-.5 0-2.1-.2-3.4.8Z"
        className="fill-[var(--icon-cut)]"
      />
    </svg>
  );
}
