import Image from "next/image";
import { site } from "@/lib/site";
import { FourthformCredit } from "./FourthformCredit";

const links = [
  { href: "#story", label: "Story" },
  { href: "#programs", label: "Programs" },
  { href: "#schedule", label: "Schedule" },
  { href: "#inside", label: "Inside" },
  { href: "#visit", label: "Visit" },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-bone/20 bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-14">
          <div className="w-40 border-2 border-bone/20 sm:w-48">
            <Image
              src="/media/logo.jpg"
              alt="GroveStreet MMA and Jiu-Jitsu logo"
              width={1254}
              height={1254}
              sizes="192px"
              className="h-auto w-full grayscale contrast-[1.15]"
            />
          </div>

          <div>
            <p className="font-display text-2xl uppercase leading-none tracking-tight text-bone">
              {site.fullName}
            </p>
            <p className="mt-3 max-w-sm font-body text-base leading-relaxed text-bone/70">
              {site.tagline}. Opening {site.openingDate}.
            </p>

            <nav aria-label="Footer" className="mt-6">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-display text-xs uppercase tracking-[0.28em] text-bone-dim transition-colors hover:text-bone"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={site.messengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-bone px-6 py-3 text-center font-display text-xs uppercase tracking-[0.28em] text-bone transition-colors hover:bg-bone hover:text-ink"
            >
              Message Us
            </a>
            <a
              href={site.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-bone/40 px-6 py-3 text-center font-display text-xs uppercase tracking-[0.28em] text-bone-dim transition-colors hover:border-bone hover:text-bone"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="rule-heavy mt-12 opacity-30" />

        <div className="mt-6 flex flex-col gap-3 font-body text-xs uppercase tracking-[0.18em] text-bone-dim sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {site.established} {site.fullName} &middot; {site.city},{" "}
            {site.state}
          </p>
          <FourthformCredit />
        </div>
      </div>
    </footer>
  );
}
