/**
 * Central content config for the GroveStreet MMA demo.
 *
 * Anything marked PLACEHOLDER is unconfirmed and must be replaced with real
 * client-supplied copy before this goes live. The gym has not opened yet, so
 * pricing, class times and coach bios are deliberately left unstated rather
 * than invented.
 */

export const site = {
  name: "GroveStreet",
  fullName: "GroveStreet MMA & Jiu-Jitsu",
  tagline: "Bringing mixed martial arts back to Mountain Grove, MO",
  established: "2026",
  city: "Mountain Grove",
  state: "MO",

  openingDate: "October 3, 2026",
  openingDateISO: "2026-10-03T00:00:00-05:00",

  /* PLACEHOLDER — swap for the real Facebook page / m.me link. */
  messengerUrl: "https://m.me/grovestreetmma",
  facebookUrl: "https://www.facebook.com/grovestreetmma",

  /* PLACEHOLDER — street address not yet confirmed. */
  addressLine: "Address announced soon",

  followers: "1.2K",
} as const;

export type Program = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
};

export const programs: Program[] = [
  {
    id: "mma",
    eyebrow: "Stand up. Clinch. Ground.",
    title: "Mixed Martial Arts",
    body: "Striking, wrestling and submissions drilled as one system. Built for people who want the whole fight, not one slice of it.",
    points: [
      "Boxing, kickboxing and clinch work",
      "Takedowns, scrambles and cage control",
      "Live rounds at a pace you can actually handle",
    ],
  },
  {
    id: "jiu-jitsu",
    eyebrow: "The gentle art, taught honestly.",
    title: "Brazilian Jiu-Jitsu",
    body: "Gi and no-gi grappling from day one. Position before submission, drilled until it holds up against a resisting partner.",
    points: [
      "Fundamentals track for total beginners",
      "No-gi and gi rounds",
      "Competition prep for anyone who wants it",
    ],
  },
  {
    id: "youth",
    eyebrow: "Discipline first.",
    title: "Youth Classes",
    body: "Grappling and striking fundamentals for kids and teens, with the emphasis on respect, conditioning and showing up.",
    points: [
      "Age groups split by size and experience",
      "No sparring until the coach says so",
      "Parents welcome on the mat wall",
    ],
  },
  {
    id: "open-mat",
    eyebrow: "Doors open.",
    title: "Open Mat & Drop-Ins",
    body: "Space to roll, work rounds or bring a training partner in. Visitors from other gyms are welcome.",
    points: [
      "Open to members and visiting grapplers",
      "Bring a gi and a no-gi kit",
      "Message us before your first visit",
    ],
  },
];

export const gallery = [
  {
    src: "/media/team-gym.jpg",
    alt: "The GroveStreet team lined up on the red and black mats inside the gym",
    caption: "The mats are down",
    note: "Room built out, wall pads up, first crew on the floor.",
    span: "wide" as const,
  },
  {
    src: "/media/action-jiujitsu.jpg",
    alt: "Two GroveStreet grapplers squaring off in a jiu-jitsu match in front of a crowd",
    caption: "Live rounds",
    note: "Grip fighting in front of a home crowd.",
    span: "tall" as const,
  },
  {
    src: "/media/competition-team.jpg",
    alt: "GroveStreet competition team wearing club shirts and holding medals after a tournament",
    caption: "Medals already",
    note: "The competition team out repping the patch before the doors even open.",
    span: "tall" as const,
  },
];
