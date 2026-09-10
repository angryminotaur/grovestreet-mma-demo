import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Inside } from "@/components/Inside";
import { Marquee } from "@/components/Marquee";
import { Nav } from "@/components/Nav";
import { Programs } from "@/components/Programs";
import { Story } from "@/components/Story";
import { Visit } from "@/components/Visit";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: site.fullName,
  description: `${site.tagline}. MMA and Brazilian Jiu-Jitsu. Grand opening ${site.openingDate}.`,
  foundingDate: site.established,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.state,
    addressCountry: "US",
  },
  sameAs: [site.facebookUrl],
  image: `/media/logo.jpg`,
};

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
        <Inside />
        <Visit />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
