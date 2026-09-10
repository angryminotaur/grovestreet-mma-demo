import type { Metadata } from "next";
import { Anton, Barlow_Condensed, UnifrakturCook } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const unifraktur = UnifrakturCook({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-unifraktur",
  display: "swap",
});

const barlow = Barlow_Condensed({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const SITE_URL = "https://grovestreet-mma-demo.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GroveStreet MMA & Jiu-Jitsu | Mountain Grove, MO",
    template: "%s | GroveStreet MMA & Jiu-Jitsu",
  },
  description:
    "Bringing mixed martial arts back to Mountain Grove, MO. MMA and Brazilian Jiu-Jitsu training for all levels. Grand opening October 3, 2026.",
  keywords: [
    "MMA Mountain Grove MO",
    "Jiu-Jitsu Mountain Grove",
    "Brazilian Jiu-Jitsu Missouri",
    "martial arts school Wright County",
    "GroveStreet MMA",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "GroveStreet MMA & Jiu-Jitsu",
    title: "GroveStreet MMA & Jiu-Jitsu | Mountain Grove, MO",
    description:
      "Bringing mixed martial arts back to Mountain Grove, MO. Grand opening October 3, 2026.",
    images: [{ url: "/media/team-gym.jpg", width: 1080, height: 1150 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GroveStreet MMA & Jiu-Jitsu | Mountain Grove, MO",
    description:
      "Bringing mixed martial arts back to Mountain Grove, MO. Grand opening October 3, 2026.",
    images: ["/media/team-gym.jpg"],
  },
  icons: { icon: "/media/logo.jpg", apple: "/media/logo.jpg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${unifraktur.variable} ${barlow.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
