"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [progress, setProgress] = useState(8);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let current = 8;
    let finished = false;

    const tick = window.setInterval(() => {
      current = Math.min(current + 6 + Math.random() * 10, 92);
      setProgress(Math.round(current));
    }, 140);

    const hide = () => {
      if (finished) return;
      finished = true;
      window.clearInterval(tick);
      setProgress(100);

      window.setTimeout(() => {
        setLeaving(true);
        window.setTimeout(() => {
          setVisible(false);
          document.body.style.overflow = previousOverflow;
        }, 550);
      }, 220);
    };

    const onReady = () => {
      window.setTimeout(hide, 700);
    };

    if (document.readyState === "complete") {
      onReady();
    } else {
      window.addEventListener("load", onReady, { once: true });
    }

    const maxWait = window.setTimeout(hide, 2600);

    return () => {
      finished = true;
      window.clearInterval(tick);
      window.clearTimeout(maxWait);
      window.removeEventListener("load", onReady);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`site-loader ${leaving ? "is-leaving" : ""}`}
      aria-live="polite"
      aria-busy="true"
      role="status"
    >
      <div className="site-loader-orb" />

      <div className="site-loader-mark-wrap">
        <span className="site-loader-ring" />
        <span className="site-loader-ring site-loader-ring-slow" />
        <span className="site-loader-mark">SS</span>
      </div>

      <p className="site-loader-brand">SS.dev</p>

      <div className="site-loader-track" aria-hidden="true">
        <span className="site-loader-bar" style={{ width: `${progress}%` }} />
      </div>

      <p className="site-loader-percent">{progress}%</p>
    </div>
  );
}
