import { programs } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Programs() {
  return (
    <section
      id="programs"
      aria-labelledby="programs-title"
      className="border-t-2 border-bone/15 bg-ink-soft"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          id="programs-title"
          eyebrow="What we train"
          title="Programs"
        />

        <ul data-reveal="wipe" className="grid gap-px border-2 border-bone/20 bg-bone/20 sm:grid-cols-2">
          {programs.map((program, index) => (
            <li key={program.id} className="bg-ink p-6 md:p-8">
              <div
                data-reveal="up"
                style={{ "--reveal-delay": `${200 + index * 110}ms` } as React.CSSProperties}
                className="flex h-full flex-col"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-display text-[0.65rem] uppercase tracking-[0.32em] text-blood">
                    {program.eyebrow}
                  </p>
                  <span
                    aria-hidden="true"
                    className="font-display text-sm text-bone/25"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
              </div>

              <h3 className="mt-3 font-display text-3xl uppercase leading-none tracking-tight text-bone md:text-4xl">
                {program.title}
              </h3>

              <p className="mt-4 font-body text-base leading-relaxed text-bone/75">
                {program.body}
              </p>

              <div className="mt-auto pt-6">
                <p className="font-display text-[0.6rem] uppercase tracking-[0.32em] text-bone-dim">
                  When
                </p>
                <ul className="mt-2 space-y-1.5">
                  {program.when.map((slot) => (
                    <li
                      key={slot}
                      className="flex gap-3 font-body text-sm uppercase tracking-[0.1em] text-bone"
                    >
                      <span aria-hidden="true" className="text-blood">
                        /
                      </span>
                      {slot}
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <a
          data-reveal="up"
          href="#schedule"
          className="mt-8 inline-block border-2 border-bone px-6 py-3 font-display text-xs uppercase tracking-[0.28em] text-bone transition-colors hover:bg-bone hover:text-ink"
        >
          Full weekly schedule
        </a>
      </div>
    </section>
  );
}
