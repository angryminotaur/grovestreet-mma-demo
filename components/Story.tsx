import Image from "next/image";
import { site } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

const stats = [
  { value: site.followers, label: "Following before day one" },
  { value: "2", label: "Disciplines under one roof" },
  { value: "2026", label: "Established. Doors open this fall" },
];

export function Story() {
  return (
    <section
      id="story"
      aria-labelledby="story-title"
      className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28"
    >
      <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-start md:gap-16">
        <div>
          <SectionHeading
            id="story-title"
            eyebrow="The story"
            title={
              "Bringing MMA back\nto Mountain Grove"
            }
          />

          <div className="space-y-5 font-body text-lg leading-relaxed text-bone/80">
            <p>
              Mountain Grove has produced fighters for years. What it has not
              had is a room of its own to build them in. Drive to Springfield,
              drive to West Plains, drive an hour each way for one hour on the
              mat.
            </p>
            <p>
              GroveStreet is the end of that drive. One gym, two disciplines,
              and mats right here in town for the people who actually walk
              through the door.
            </p>
            <p className="border-l-4 border-blood pl-5 font-display text-xl uppercase leading-snug tracking-wide text-bone">
              Show up. Do the work. That is the whole program.
            </p>
            <p>
              The mats are down, the walls are padded, and the competition team
              is already out repping the patch. On{" "}
              <strong className="text-bone">{site.openingDate}</strong> the
              doors open at {site.street} to everyone else.
            </p>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-px border-2 border-bone/20 bg-bone/20 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col bg-ink px-5 py-6"
              >
                <dt className="order-2 mt-3 font-body text-xs uppercase leading-snug tracking-[0.14em] text-bone-dim">
                  {stat.label}
                </dt>
                <dd className="order-1 whitespace-nowrap font-display text-4xl uppercase leading-none text-bone">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <figure>
          <div className="grain relative isolate aspect-[4/5] overflow-hidden border-2 border-bone/20">
            <Image
              src="/media/competition-team.jpg"
              alt="The GroveStreet competition team in club shirts holding medals after a tournament"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover grayscale contrast-[1.1] brightness-90"
            />
          </div>
          <figcaption className="mt-4 border-l-4 border-blood pl-4 font-body text-sm uppercase tracking-[0.12em] text-bone-dim">
            The competition team, out repping the patch before the doors open.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
