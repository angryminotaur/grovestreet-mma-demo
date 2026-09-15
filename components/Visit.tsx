import { site } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Visit() {
  return (
    <section
      id="visit"
      aria-labelledby="visit-title"
      className="border-t-2 border-bone/15 bg-ink-soft"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHeading
              id="visit-title"
              eyebrow="Find us"
              title={"Mountain Grove,\nMissouri"}
            />

            <div className="space-y-6 font-body text-lg leading-relaxed text-bone/80">
              <p>
                Right in town on North Chapman, built for Mountain Grove and
                everyone within an easy drive of it.
              </p>

              <dl className="space-y-6 border-t-2 border-bone/20 pt-6">
                <div>
                  <dt className="font-display text-[0.65rem] uppercase tracking-[0.32em] text-blood">
                    Address
                  </dt>
                  <dd className="mt-2 font-display text-2xl uppercase leading-tight text-bone">
                    <address className="not-italic">
                      {site.street}
                      <span className="mt-1 block font-body text-sm tracking-[0.14em] text-bone-dim">
                        {site.city}, {site.state}
                      </span>
                    </address>
                  </dd>
                  <dd className="mt-4">
                    <a
                      href={site.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border-2 border-bone/50 px-5 py-2.5 font-display text-xs uppercase tracking-[0.28em] text-bone transition-colors hover:border-bone hover:bg-bone/10"
                    >
                      Get directions
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="font-display text-[0.65rem] uppercase tracking-[0.32em] text-blood">
                    Grand opening
                  </dt>
                  <dd className="mt-2 font-display text-2xl uppercase leading-tight text-bone">
                    {site.openingDate}
                  </dd>
                  <dd className="mt-1 font-body text-sm uppercase tracking-[0.14em] text-bone-dim">
                    Tours, sign-ups, no classes
                  </dd>
                </div>

                <div>
                  <dt className="font-display text-[0.65rem] uppercase tracking-[0.32em] text-blood">
                    Best way to reach us
                  </dt>
                  <dd className="mt-2 font-body text-base leading-relaxed text-bone/75">
                    Facebook Messenger.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="grain relative isolate flex flex-col justify-between border-2 border-bone/25 p-7 md:p-10">
            <div>
              <p className="font-display text-[0.65rem] uppercase tracking-[0.32em] text-blood">
                Start here
              </p>
              <h3 className="mt-4 font-display text-4xl uppercase leading-[0.9] tracking-tight text-bone md:text-5xl">
                Message the page
              </h3>
              <p className="mt-5 font-body text-lg leading-relaxed text-bone/75">
                Ask about a discipline, a class, or getting your kid on the
                mat. Messages get answered by the people who run the gym, not a
                form robot.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "Questions about MMA or Jiu-Jitsu",
                  "Kids Jiu-Jitsu",
                  "Membership sign-ups",
                  "Grand opening day",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 font-body text-sm uppercase tracking-[0.1em] text-bone-dim"
                  >
                    <span aria-hidden="true" className="text-blood">
                      /
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 space-y-3">
              <a
                href={site.messengerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-bone px-6 py-4 text-center font-display text-sm uppercase tracking-[0.28em] text-ink transition-colors hover:bg-blood hover:text-bone"
              >
                Open Messenger
              </a>
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-2 border-bone/50 px-6 py-4 text-center font-display text-sm uppercase tracking-[0.28em] text-bone transition-colors hover:border-bone hover:bg-bone/10"
              >
                Follow on Facebook
              </a>
              <p className="pt-2 text-center font-body text-xs uppercase tracking-[0.2em] text-bone-dim">
                {site.followers} following already
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
