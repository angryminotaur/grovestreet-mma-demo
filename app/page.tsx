import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Inside } from "@/components/Inside";
import { Marquee } from "@/components/Marquee";
import { Nav } from "@/components/Nav";
import { Programs } from "@/components/Programs";
import { RevealObserver } from "@/components/RevealObserver";
import { Schedule } from "@/components/Schedule";
import { Story } from "@/components/Story";
import { Visit } from "@/components/Visit";
import { site } from "@/lib/site";

const address = {
  "@type": "PostalAddress",
  streetAddress: site.street,
  addressLocality: site.city,
  addressRegion: site.state,
  addressCountry: "US",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: site.fullName,
    description: `${site.tagline}. MMA and Brazilian Jiu-Jitsu for adults and kids. Grand opening ${site.openingDate}.`,
    foundingDate: site.established,
    address,
    sameAs: [site.facebookUrl],
    image: "/media/logo.jpg",
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${site.fullName} Grand Opening`,
    startDate: "2026-10-03",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    description:
      "Tour the gym, learn about the Jiu-Jitsu and MMA programs, sign up for a membership and meet the GroveStreet crew. No classes on grand opening day.",
    location: { "@type": "Place", name: site.fullName, address },
    organizer: { "@type": "Organization", name: site.fullName, url: site.facebookUrl },
    image: "/media/team-gym.jpg",
  },
];

export default function Home() {
  return (
    <>
      <a
        href="#story"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-bone focus:px-4 focus:py-3 focus:font-display focus:text-xs focus:uppercase focus:tracking-[0.28em] focus:text-ink"
      >
        Skip to content
      </a>

      <Nav />

      <main>
        <Hero />
        <Marquee />
        <Story />
        <Programs />
        <Schedule />
        <Inside />
        <Visit />
      </main>

      <Footer />
      <RevealObserver />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
