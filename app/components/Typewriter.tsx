"use client";

import { useEffect, useState } from "react";

const WORDS = [
  "React.js",
  "Next.js",
  "JavaScript",
  "Tailwind CSS",
  "WordPress",
  "Shopify",
];

export default function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setText(WORDS[0]);
      return;
    }

    const word = WORDS[index];
    let delay = deleting ? 50 : 120;

    if (!deleting && text === word) delay = 1400;
    if (deleting && text === "") delay = 280;

    const timer = window.setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
        return;
      }

      if (deleting && text === "") {
        setDeleting(false);
        setIndex((current) => (current + 1) % WORDS.length);
        return;
      }

      setText((current) =>
        deleting ? word.slice(0, current.length - 1) : word.slice(0, current.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <p className="typewriter" aria-live="polite">
      {text}
      <span className="typewriter-cursor" aria-hidden>
        |
      </span>
    </p>
  );
}
