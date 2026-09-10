import { programs, site } from "@/lib/site";
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

        <p className="-mt-4 mb-12 max-w-2xl font-body text-lg leading-relaxed text-bone/70">
          Everything below runs out of one room. The full class schedule lands
          closer to opening day.
        </p>

        <ul className="grid gap-px border-2 border-bone/20 bg-bone/20 sm:grid-cols-2">
          {programs.map((program, index) => (
            <li key={program.id} className="bg-ink p-6 md:p-8">
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

              <ul className="mt-6 space-y-2">
                {program.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 font-body text-sm uppercase tracking-[0.1em] text-bone-dim"
                  >
                    <span aria-hidden="true" className="text-blood">
                      /
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Schedule, pricing and coach bios are intentionally unstated —
            the gym has not opened and none of it is confirmed. */}
        <div className="mt-10 border-2 border-dashed border-bone/30 p-6 md:p-8">
          <p className="font-display text-[0.65rem] uppercase tracking-[0.32em] text-blood">
            Coming before opening day
          </p>
          <h3 className="mt-3 font-display text-2xl uppercase leading-tight text-bone md:text-3xl">
            Class schedule, membership rates and coach bios
          </h3>
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-bone/70">
            Times and pricing are still being locked in. Rather than guess, we
            are posting them once they are final. Message the page and we will
            send them to you the day they go up.
          </p>
          <a
            href={site.messengerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block border-2 border-bone px-6 py-3 font-display text-xs uppercase tracking-[0.28em] text-bone transition-colors hover:bg-bone hover:text-ink"
          >
            Get the schedule first
          </a>
        </div>
      </div>
    </section>
  );
}
