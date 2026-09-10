import Image from "next/image";
import { gallery } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Inside() {
  return (
    <section
      id="inside"
      aria-labelledby="inside-title"
      className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28"
    >
      <SectionHeading
        id="inside-title"
        eyebrow="Sneak peek"
        title="Inside the room"
      />

      <p className="-mt-4 mb-12 max-w-2xl font-body text-lg leading-relaxed text-bone/70">
        Build-out shots, first sessions and the crew already putting the name
        on the board. More goes up as the room comes together.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {gallery.map((item, index) => (
          <figure
            key={item.src}
            className={`grain relative isolate border-2 border-bone/20 ${
              item.span === "wide" ? "sm:col-span-2" : ""
            }`}
          >
            <div
              className={`relative ${
                item.span === "wide"
                  ? "aspect-[16/10] sm:aspect-[2/1]"
                  : "aspect-[4/5]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading={index === 0 ? "eager" : "lazy"}
                sizes={
                  item.span === "wide"
                    ? "(max-width: 640px) 100vw, 100vw"
                    : "(max-width: 640px) 100vw, 50vw"
                }
                className="object-cover grayscale contrast-[1.12] brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />
            </div>

            <figcaption className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-display text-xl uppercase leading-none tracking-tight text-bone sm:text-2xl">
                {item.caption}
              </p>
              <p className="mt-2 max-w-md font-body text-sm leading-snug text-bone/70">
                {item.note}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
