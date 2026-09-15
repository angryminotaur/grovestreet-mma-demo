import { grandOpening, schedule, scheduleDays, site } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Schedule() {
  return (
    <section
      id="schedule"
      aria-labelledby="schedule-title"
      className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28"
    >
      <SectionHeading
        id="schedule-title"
        eyebrow="Regular class schedule"
        title="Hit the mats"
      />

      {/* Grand opening callout */}
      <div data-reveal="stamp" className="grain relative isolate mb-12 border-2 border-stamp/70 p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-start md:gap-10">
          <div>
            <p className="font-display text-[0.65rem] uppercase tracking-[0.32em] text-stamp">
              It&rsquo;s official
            </p>
            <p className="mt-2 font-display text-4xl uppercase leading-[0.9] text-bone md:text-5xl">
              Grand Opening
              <br />
              Oct 3
            </p>
          </div>

          <div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {grandOpening.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 font-body text-base uppercase tracking-[0.08em] text-bone"
                >
                  <span aria-hidden="true" className="text-stamp">
                    /
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-bone/70">
              {grandOpening.note} Regular classes start after opening day.
            </p>
          </div>
        </div>
      </div>

      {/* Weekly grid */}
      <ol data-reveal="wipe" className="grid gap-px border-2 border-bone/20 bg-bone/20 sm:grid-cols-2 lg:grid-cols-5">
        {scheduleDays.map((day, index) => {
          const slots = schedule.filter((slot) => slot.day === day);
          return (
            <li key={day} className="bg-ink p-5">
              <div
                data-reveal="up"
                style={{ "--reveal-delay": `${200 + index * 90}ms` } as React.CSSProperties}
              >
                <h3 className="font-display text-xl uppercase tracking-wide text-bone">
                  {day}
                </h3>
                <ul className="mt-4 space-y-4">
                  {slots.map((slot) => (
                    <li
                      key={`${slot.day}-${slot.time}`}
                      className="border-l-4 border-blood pl-3"
                    >
                      <p className="font-display text-2xl leading-none text-bone">
                        {slot.time}
                      </p>
                      <p className="mt-1.5 font-body text-sm uppercase tracking-[0.12em] text-bone-dim">
                        {slot.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>

      {/* Still unconfirmed: pricing and coach bios. */}
      <div data-reveal="up" className="mt-10 border-2 border-dashed border-bone/30 p-6 md:p-8">
        <h3 className="font-display text-2xl uppercase leading-tight text-bone md:text-3xl">
          Membership rates
        </h3>
        <p className="mt-3 max-w-2xl font-body text-base leading-relaxed text-bone/70">
          Sign-ups open at the grand opening. Want the details before then?
          Message the page and ask.
        </p>
        <a
          href={site.messengerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block border-2 border-bone px-6 py-3 font-display text-xs uppercase tracking-[0.28em] text-bone transition-colors hover:bg-bone hover:text-ink"
        >
          Ask about membership
        </a>
      </div>
    </section>
  );
}
