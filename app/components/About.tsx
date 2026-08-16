import Image from "next/image";
import aboutPhoto from "../images/about.jpeg";

const POINTS = [
  "Frontend Roles",
  "Responsive Design",
  "WordPress & Shopify",
  "UI Implementation",
];

export default function About() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div data-reveal className="reveal reveal-left relative mx-auto w-full lg:mx-0">
          <div className="img-zoom relative overflow-hidden rounded-[28px]">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={aboutPhoto}
                alt="Sukhvinder Singh"
                fill
                className="object-cover object-[center_18%]"
                sizes="(max-width: 1024px) 460px, 420px"
              />
            </div>
          </div>
        </div>

        <div data-reveal className="reveal" style={{ ["--delay" as string]: "0.12s" }}>
          <span className="inline-flex rounded-full border border-[var(--accent)] px-4 py-1 text-xs font-semibold tracking-[0.18em] text-[var(--accent)]">
            ABOUT ME
          </span>

          <h2 className="mt-5 max-w-xl text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-[40px] lg:leading-[1.2]">
            Turning designs into clean, working interfaces
          </h2>

          <p className="mt-5 text-base leading-relaxed text-[var(--muted)] sm:text-[17px]">
            I&apos;m a Frontend Developer based in Saharanpur, Uttar Pradesh,
            currently working at Terioat Infotech, where I build responsive,
            user-friendly websites using HTML, CSS, JavaScript, React.js, and
            Next.js. My work spans converting design concepts into pixel-focused,
            responsive web pages, developing and customizing WordPress sites with
            Elementor, and tailoring Shopify storefronts to client needs.
          </p>

          <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-[17px]">
            Alongside React.js and Next.js, I use Bootstrap and Tailwind CSS to
            build reusable, responsive UI components — and I spend a lot of time
            fixing UI, cross-browser, and functionality issues so interfaces feel
            solid on desktop, tablet, and mobile alike. I care about the details:
            layout, spacing, and interactions that make a site feel considered.
          </p>

          <p className="mt-5 text-sm italic text-[var(--accent)] sm:text-base">
            Note: &quot;I believe that a great frontend developer combines
            creativity with technical understanding and always puts the user&apos;s
            needs first.&quot;
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {POINTS.map((point) => (
              <li key={point} className="flex items-center gap-2.5 text-[var(--text)]">
                <span className="h-2 w-2 shrink-0 bg-[var(--accent)]" />
                {point}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="btn-pop mt-8 inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-bold tracking-wide text-[#070b14] hover:brightness-110"
          >
            LETS TALK
            <ArrowIcon />
          </a>
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
