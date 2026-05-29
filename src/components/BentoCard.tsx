import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function BentoCard({ className = "", children }: Props) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-slate-200/10 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-200/20 hover:bg-slate-900/70 ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-teal-500/0 via-transparent to-indigo-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px at var(--mx, 50%) var(--my, 50%), rgba(45, 212, 191, 0.12), transparent 70%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
