"use client";

import { useEffect, useState } from "react";

const ITEMS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const sections = ITEMS.map((i) =>
      document.querySelector(i.href)
    ).filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed left-1/2 top-4 z-40 -translate-x-1/2"
    >
      <ul className="flex items-center gap-1 rounded-full border border-slate-200/10 bg-slate-900/60 px-1.5 py-1.5 shadow-lg shadow-black/30 backdrop-blur-xl">
        {ITEMS.map((item) => {
          const isActive = active === item.href;
          return (
            <li key={item.href}>
              <a
                href={item.href}
                className={`relative inline-flex items-center rounded-full px-3 py-1.5 text-[12px] font-medium transition-colors ${
                  isActive
                    ? "text-slate-50"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500/30 to-indigo-500/20 ring-1 ring-inset ring-teal-300/30"
                  />
                )}
                <span className="relative">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
