"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function partsUntil(target: number): Parts | null {
  const diff = target - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  };
}

/**
 * Renders nothing until mounted so the server-rendered markup (which cannot
 * know "now") never mismatches the client.
 */
export function Countdown() {
  const target = new Date(site.openingDateISO).getTime();
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    setParts(partsUntil(target));
    const id = window.setInterval(() => setParts(partsUntil(target)), 1000);
    return () => window.clearInterval(id);
  }, [target]);

  if (!parts) return null;

  const cells: Array<[number, string]> = [
    [parts.days, "Days"],
    [parts.hours, "Hrs"],
    [parts.minutes, "Min"],
    [parts.seconds, "Sec"],
  ];

  return (
    <div className="flex gap-2 sm:gap-3" aria-hidden="true">
      {cells.map(([value, label]) => (
        <div
          key={label}
          className="min-w-[3.75rem] border-2 border-bone/25 bg-ink/70 px-2 py-2 text-center sm:min-w-[4.5rem] sm:px-3"
        >
          <div className="font-display text-2xl leading-none text-bone sm:text-3xl">
            {String(value).padStart(2, "0")}
          </div>
          <div className="mt-1 font-display text-[0.6rem] uppercase tracking-[0.25em] text-bone-dim">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
