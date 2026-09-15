import Image from "next/image";
import { site } from "@/lib/site";
import { DaysOut } from "./DaysOut";
import { StickerWordmark } from "./StickerWordmark";

/**
 * Fight-poster collage: torn, halftoned action shot; taped comp-team print;
 * rubber-stamped opening date; sticker wordmark straight off the club logo.
 */
export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="grain relative isolate overflow-hidden bg-ink lg:min-h-[100svh]"
    >
      <h1 id="hero-title" className="sr-only">
        {site.fullName}, {site.city}, {site.state}
      </h1>

      {/* Side label, desktop only */}
      <p
        aria-hidden="true"
        className="hero-fade absolute bottom-28 left-8 z-20 hidden origin-bottom-left whitespace-nowrap font-display text-[0.65rem] uppercase tracking-[0.5em] text-bone-dim xl:block"
        style={{ transform: "rotate(-90deg) translateY(100%)", "--hero-delay": "1200ms" } as React.CSSProperties}
      >
        Mountain Grove, Missouri &bull; Est. {site.established}
      </p>

      {/* Main photo */}
      <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-[60%]">
        <div className="torn-bottom-mobile torn-left-desktop halftone relative aspect-[4/5] overflow-hidden sm:aspect-[4/3] lg:aspect-auto lg:h-full">
          <Image
            src="/media/action-jiujitsu.jpg"
            alt="A GroveStreet grappler squaring off with an opponent during a live jiu-jitsu match"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="hero-zoom object-cover object-[28%_center] grayscale contrast-[1.4] brightness-[0.82] lg:object-[38%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-ink/60 lg:bg-gradient-to-r lg:from-ink/50 lg:via-transparent lg:to-ink/30" />
        </div>

        {/* Opening stamp */}
        <div
          style={{ "--hero-delay": "1100ms" } as React.CSSProperties}
          className="hero-slam absolute right-4 top-24 z-10 -rotate-[9deg] scale-90 sm:right-8 sm:scale-100 lg:right-[9%] lg:top-[15%]">
          <div className="stamp-ink border-[3px] border-stamp p-1">
            <div className="border border-stamp px-3 py-2 text-center text-stamp sm:px-4">
              <p className="font-display text-[0.6rem] uppercase tracking-[0.3em]">
                Grand Opening
              </p>
              <p className="font-display text-3xl leading-none tracking-tight sm:text-4xl">
                10.03.26
              </p>
              <p className="mt-1 font-display text-[0.6rem] uppercase tracking-[0.3em]">
                <DaysOut /> <span className="sr-only">until {site.openingDate}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Taped comp-team print */}
        <figure
          style={{ "--hero-delay": "800ms" } as React.CSSProperties}
          className="hero-drop absolute bottom-[40%] right-[6%] z-10 hidden w-40 rotate-[5deg] lg:block xl:w-52">
          <div
            aria-hidden="true"
            className="tape absolute -top-3 left-1/2 z-10 h-6 w-24 -translate-x-1/2 -rotate-[4deg] bg-bone/75"
          />
          <div className="bg-bone p-2 pb-7 shadow-[0_18px_40px_rgb(0_0_0/0.6)]">
            <div className="halftone relative aspect-square overflow-hidden">
              <Image
                src="/media/competition-team.jpg"
                alt="The GroveStreet competition team in club shirts holding medals"
                fill
                sizes="208px"
                className="object-cover grayscale contrast-[1.2]"
              />
            </div>
          </div>
          <figcaption className="absolute bottom-1.5 left-0 right-0 text-center font-gothic text-sm leading-none text-ink">
            Comp Team
          </figcaption>
        </figure>
      </div>

      {/* Copy */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-5 pb-14 md:px-8 lg:min-h-[100svh] lg:justify-between lg:pb-10 lg:pt-32 xl:pl-16">
        <div className="order-2 lg:order-1 lg:max-w-[36%]">
          <p
            aria-hidden="true"
            style={{ "--hero-delay": "300ms" } as React.CSSProperties}
            className="hero-rise font-gothic text-5xl leading-[0.95] text-bone sm:text-6xl lg:text-7xl"
          >
            MMA <span className="text-blood">&bull;</span>
            <br />
            Jiu-Jitsu
          </p>

          <p
            style={{ "--hero-delay": "420ms" } as React.CSSProperties}
            className="hero-rise mt-6 max-w-sm font-body text-xl leading-snug text-bone/85">
            {site.tagline}.
          </p>

          <div
            style={{ "--hero-delay": "520ms" } as React.CSSProperties}
            className="hero-rise mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={site.messengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bone px-6 py-3.5 font-display text-xs uppercase tracking-[0.28em] text-ink transition-colors hover:bg-blood hover:text-bone"
            >
              Message Us
            </a>
            <a
              href="#programs"
              className="border-2 border-bone/50 px-6 py-3 font-display text-xs uppercase tracking-[0.28em] text-bone transition-colors hover:border-bone"
            >
              Programs
            </a>
          </div>

          <p
            style={{ "--hero-delay": "620ms" } as React.CSSProperties}
            className="hero-rise mt-6 font-display text-[0.65rem] uppercase tracking-[0.32em] text-bone-dim"
          >
            Doors open {site.openingDate}
          </p>
        </div>

        <div
          style={{ "--hero-delay": "150ms" } as React.CSSProperties}
          className="hero-rise order-1 -mt-14 mb-8 sm:-mt-20 lg:order-2 lg:mb-0 lg:mt-0 lg:max-w-[78%]">
          <StickerWordmark className="drop-shadow-[0_14px_30px_rgb(0_0_0/0.7)]" />
        </div>
      </div>
    </section>
  );
}
