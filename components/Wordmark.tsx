type WordmarkProps = {
  /** Tailwind font-size classes for the top "GroveStreet" line. */
  size?: string;
  className?: string;
};

/**
 * Type-set version of the club logo: heavy condensed block over blackletter,
 * capped with the EST. 2026 rule. Set in type rather than as an image so it
 * stays crisp and readable at every breakpoint.
 */
export function Wordmark({
  size = "text-6xl sm:text-7xl md:text-8xl",
  className = "",
}: WordmarkProps) {
  return (
    <div className={className}>
      <span className="sr-only">GroveStreet MMA and Jiu-Jitsu, established 2026</span>

      <div aria-hidden="true">
        <div
          className={`font-display leading-[0.82] tracking-[-0.015em] text-bone ${size}`}
          style={{ transform: "scaleY(1.12)", transformOrigin: "bottom" }}
        >
          GroveStreet
        </div>

        <div className="mt-5 font-gothic text-2xl leading-none text-bone sm:text-3xl md:text-4xl">
          MMA <span className="px-1 align-middle text-blood">&bull;</span> Jiu-Jitsu
        </div>

        <div className="mt-5 flex items-center gap-3">
          <span className="h-px flex-1 bg-bone/45" />
          <span className="font-display text-[0.7rem] uppercase tracking-[0.42em] text-bone-dim">
            Est. 2026
          </span>
          <span className="h-px flex-1 bg-bone/45" />
        </div>
      </div>
    </div>
  );
}
