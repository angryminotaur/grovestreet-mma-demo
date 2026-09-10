const words = [
  "MMA",
  "Jiu-Jitsu",
  "No-Gi",
  "Wrestling",
  "Striking",
  "Open Mat",
  "Mountain Grove",
];

/** Static stamped ribbon between sections. Repeats to fill wide screens. */
export function Marquee() {
  return (
    <div className="overflow-hidden border-y-2 border-bone/20 bg-bone/[0.04] py-3">
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4">
        {words.map((word) => (
          <span
            key={word}
            className="font-display text-xs uppercase tracking-[0.32em] text-bone-dim"
          >
            {word}
            <span className="ml-6 text-blood" aria-hidden="true">
              &bull;
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
