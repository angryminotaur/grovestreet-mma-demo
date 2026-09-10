"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "#story", label: "Story" },
  { href: "#programs", label: "Programs" },
  { href: "#inside", label: "Inside" },
  { href: "#visit", label: "Visit" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        solid || open
          ? "border-bone/20 bg-ink/95 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#top"
          className="font-display text-lg uppercase leading-none tracking-tight text-bone"
        >
          GroveStreet
          <span className="ml-2 font-gothic text-sm normal-case tracking-normal text-bone-dim">
            MMA
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-xs uppercase tracking-[0.28em] text-bone-dim transition-colors hover:text-bone"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.messengerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-bone px-4 py-2 font-display text-xs uppercase tracking-[0.28em] text-bone transition-colors hover:bg-bone hover:text-ink"
          >
            Message Us
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border-2 border-bone/60 md:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span
            className={`h-[2px] w-5 bg-bone transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span className={`h-[2px] w-5 bg-bone ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-[2px] w-5 bg-bone transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Primary mobile"
        hidden={!open}
        className="border-t border-bone/15 bg-ink px-5 pb-6 pt-2 md:hidden"
      >
        <ul>
          {links.map((link) => (
            <li key={link.href} className="border-b border-bone/10">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-4 font-display text-xl uppercase tracking-wide text-bone"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={site.messengerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 block bg-bone px-4 py-4 text-center font-display text-sm uppercase tracking-[0.28em] text-ink"
        >
          Message Us
        </a>
      </nav>
    </header>
  );
}
