import React from "react";

export default function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-teal-300/15 bg-teal-400/10 px-2.5 py-1 text-[11px] font-medium leading-5 text-teal-300 transition-colors hover:border-teal-300/30 hover:bg-teal-400/15">
      {children}
    </span>
  );
}
