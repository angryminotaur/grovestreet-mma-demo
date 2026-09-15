"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

/**
 * Quiet "18 days out" line for the opening stamp. Renders nothing on the
 * server (it cannot know today's date) and nothing once the doors are open.
 */
export function DaysOut({ className = "" }: { className?: string }) {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const diff = new Date(site.openingDateISO).getTime() - Date.now();
    setDays(diff > 0 ? Math.ceil(diff / 86_400_000) : null);
  }, []);

  if (days === null) return null;

  return (
    <span className={className}>
      {days} {days === 1 ? "day" : "days"} out
    </span>
  );
}
