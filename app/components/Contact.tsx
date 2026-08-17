import WhatsAppIcon from "./WhatsAppIcon";

const EMAIL = "sukhvinder200511@gmail.com";

const CHANNELS = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    note: "Best for project briefs",
    icon: MailIcon,
  },
  {
    label: "WhatsApp",
    value: "+91 63953 82105",
    href: "https://wa.me/6395382105",
    note: "Quick questions & chats",
    icon: WhatsAppIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Sukhvinder Singh",
    href: "https://www.linkedin.com/in/sukhvinder-singh-03510b291?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    note: "Roles & collaborations",
    icon: LinkedInIcon,
    external: true,
  },
] as const;

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--skill-section)] px-4 py-20 sm:px-8 lg:px-16 lg:py-28"
    >
      <div className="pointer-events-none absolute top-16 left-[8%] h-56 w-56 rounded-full bg-[var(--glow)] blur-3xl" />
      <div className="pointer-events-none absolute right-[6%] bottom-10 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px]">
        <div
          data-reveal
          className="reveal rounded-[32px] border border-[var(--header-border)] bg-[var(--skill-card)] p-7 sm:p-10 lg:p-14"
        >
          <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <span className="inline-flex rounded-full border border-[var(--accent)] px-4 py-1 text-xs font-semibold tracking-[0.18em] text-[var(--accent)]">
                CONTACT
              </span>

              <h2 className="mt-5 max-w-lg text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
                Have a project in mind? Let&apos;s build it.
              </h2>

              <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--muted)] sm:text-[17px]">
                I&apos;m available for freelance work, frontend roles, and
                collaborations — React, Next.js, WordPress, and Shopify
                included. Send a note and I&apos;ll get back to you.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--bg)] px-3.5 py-1.5 text-sm text-[var(--accent)] ring-1 ring-[var(--accent)]/20">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
                </span>
                Open to new work
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="btn-pop inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-bold tracking-wide text-[#070b14] hover:brightness-110"
                >
                  Send an email
                  <ArrowIcon />
                </a>
                <a
                  href="https://wa.me/6395382105"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-pop inline-flex items-center rounded-xl border border-[var(--header-border)] px-5 py-3 text-sm font-semibold text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <ul className="grid gap-4">
              {CHANNELS.map((channel, index) => {
                const Icon = channel.icon;

                return (
                  <li
                    key={channel.label}
                    data-reveal
                    className="reveal"
                    style={{ ["--delay" as string]: `${0.08 + index * 0.08}s` }}
                  >
                    <a
                      href={channel.href}
                      target={"external" in channel ? "_blank" : undefined}
                      rel={"external" in channel ? "noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-[var(--header-border)] bg-[var(--bg)] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:shadow-[0_14px_32px_color-mix(in_srgb,var(--accent)_12%,transparent)] sm:p-5"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent)]/12 text-[var(--accent)] transition group-hover:bg-[var(--accent)] group-hover:text-[#070b14]">
                        <Icon />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs font-semibold tracking-[0.14em] text-[var(--accent)]">
                          {channel.label}
                        </span>
                        <span className="mt-1 block truncate text-sm font-semibold text-[var(--text)] sm:text-base">
                          {channel.value}
                        </span>
                        <span className="mt-0.5 block text-xs text-[var(--muted)]">
                          {channel.note}
                        </span>
                      </span>
                      <span className="hidden text-[var(--muted)] transition group-hover:text-[var(--accent)] sm:inline-flex">
                        <ArrowIcon />
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
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

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7.5 12 13l8-5.5M5.5 18h13A1.5 1.5 0 0 0 20 16.5v-9A1.5 1.5 0 0 0 18.5 6h-13A1.5 1.5 0 0 0 4 7.5v9A1.5 1.5 0 0 0 5.5 18Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return <span className="text-[15px] font-bold leading-none">in</span>;
}
