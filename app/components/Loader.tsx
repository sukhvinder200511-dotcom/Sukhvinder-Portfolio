"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let finished = false;

    const hide = () => {
      if (finished) return;
      finished = true;
      setLeaving(true);
      window.setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = previousOverflow;
      }, 450);
    };

    const onReady = () => {
      window.setTimeout(hide, 800);
    };

    if (document.readyState === "complete") {
      onReady();
    } else {
      window.addEventListener("load", onReady, { once: true });
    }

    const maxWait = window.setTimeout(hide, 2200);

    return () => {
      finished = true;
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
      <div className="site-loader-mark">
        <span className="site-loader-glow" />
        <span className="site-loader-ring" />
        <span className="site-loader-ring site-loader-ring-inner" />
        <span className="site-loader-core" />
      </div>
    </div>
  );
}
