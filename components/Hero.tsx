import Image from "next/image";
import { site } from "@/lib/site";
import { Countdown } from "./Countdown";
import { Wordmark } from "./Wordmark";

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pb-14 pt-32 sm:pb-20"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/media/team-gym.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_35%] grayscale contrast-[1.2] brightness-[0.78]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/20 to-ink/55" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <p className="mb-6 inline-flex items-center gap-3 border-l-4 border-blood pl-3 font-display text-[0.68rem] uppercase tracking-[0.35em] text-bone-dim">
          {site.city}, {site.state}
        </p>

        <Wordmark size="text-[3.25rem] sm:text-7xl md:text-8xl lg:text-9xl" />

        <p className="mt-8 max-w-xl font-body text-xl leading-snug text-bone/85 sm:text-2xl">
          {site.tagline}.
        </p>

        <div className="mt-10 border-2 border-bone/25 bg-ink/60 p-5 backdrop-blur-sm sm:p-6">
          <p className="font-display text-[0.68rem] uppercase tracking-[0.35em] text-blood">
            Grand Opening
          </p>
          <p className="mt-2 font-display text-3xl uppercase leading-none text-bone sm:text-4xl md:text-5xl">
            {site.openingDate}
          </p>

          <div className="mt-5">
            <Countdown />
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={site.messengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bone px-7 py-4 text-center font-display text-sm uppercase tracking-[0.28em] text-ink transition-colors hover:bg-blood hover:text-bone"
            >
              Message Us on Facebook
            </a>
            <a
              href="#programs"
              className="border-2 border-bone/50 px-7 py-4 text-center font-display text-sm uppercase tracking-[0.28em] text-bone transition-colors hover:border-bone hover:bg-bone/10"
            >
              See the Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
