"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -10% 0px" },
    );

    const watch = (el: Element) => {
      if (el.classList.contains("is-visible")) return;
      io.observe(el);
    };

    const scan = () => {
      document.querySelectorAll(".reveal").forEach(watch);
    };

    scan();
    requestAnimationFrame(() => {
      document.documentElement.classList.add("scroll-ready");
    });

    const failSafe = window.setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
          el.classList.add("is-visible");
          io.unobserve(el);
        }
      });
    }, 120);

    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.clearTimeout(failSafe);
      io.disconnect();
      mo.disconnect();
      document.documentElement.classList.remove("scroll-ready");
    };
  }, []);

  return null;
}
