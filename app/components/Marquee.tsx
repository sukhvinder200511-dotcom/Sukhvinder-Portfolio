const ITEMS = [
  "Web Development",
  "Responsive Web Design",
  "Custom Web Designs",
  "Email Templates",
  "Website Speed Optimization",
  "SEO",
];

function MarqueeRow() {
  return (
    <div className="marquee-row">
      {ITEMS.map((item) => (
        <span key={item} className="marquee-item">
          {item}
          <span className="marquee-star" aria-hidden>
            *
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section data-reveal className="reveal reveal-scale marquee" aria-label="Services">
      <div className="marquee-band">
        <div className="marquee-track">
          <MarqueeRow />
          <MarqueeRow />
        </div>
      </div>
    </section>
  );
}
