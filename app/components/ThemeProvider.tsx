"use client";

import { useEffect } from "react";

function syncTheme(isLight: boolean) {
  const root = document.documentElement;
  root.classList.toggle("dark", !isLight);
  root.classList.toggle("light", isLight);
  try {
    window.localStorage.setItem("theme", isLight ? "light" : "dark");
  } catch {
    /* ignore */
  }
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const input = document.getElementById("theme-toggle") as HTMLInputElement | null;
    if (!input) return;

    try {
      input.checked = window.localStorage.getItem("theme") === "light";
    } catch {
      input.checked = false;
    }

    const onChange = () => syncTheme(input.checked);
    onChange();
    input.addEventListener("change", onChange);
    return () => input.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <input id="theme-toggle" type="checkbox" className="theme-toggle-input" />
      {children}
    </>
  );
}
