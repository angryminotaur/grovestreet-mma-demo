/**
 * Central content config for the GroveStreet MMA demo.
 *
 * Schedule, address and grand opening details come from the gym's own
 * Facebook announcement. Anything still marked PLACEHOLDER is unconfirmed:
 * pricing and coach bios are deliberately left unstated rather than invented.
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

  /* PLACEHOLDER: swap for the real Facebook page / m.me link. */
  messengerUrl: "https://m.me/grovestreetmma",
  facebookUrl: "https://www.facebook.com/grovestreetmma",

  street: "430 N Chapman",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=430+N+Chapman+Mountain+Grove+MO",

  followers: "1.2K",
} as const;

export const grandOpening = {
  note: "No classes on grand opening day. Just come hang out, check out the gym, and see what we are building in Mountain Grove.",
  items: [
    "Tour the gym",
    "Learn about our Jiu-Jitsu and MMA programs",
    "Membership sign-ups available",
    "Meet the GroveStreet crew",
  ],
};

export type ClassSlot = {
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
  time: string;
  name: string;
  program: ProgramId;
};

export type ProgramId = "adult-bjj" | "adult-mma" | "kids-bjj" | "open-mat";

/** Regular weekly schedule, verbatim from the gym's announcement. */
export const schedule: ClassSlot[] = [
  { day: "Monday", time: "6:00 PM", name: "Kids BJJ", program: "kids-bjj" },
  { day: "Monday", time: "7:15 PM", name: "Adult BJJ", program: "adult-bjj" },
  { day: "Tuesday", time: "6:00 PM", name: "Kids BJJ", program: "kids-bjj" },
  { day: "Tuesday", time: "7:15 PM", name: "Adult MMA", program: "adult-mma" },
  { day: "Wednesday", time: "6:00 PM", name: "Adult Open Mat", program: "open-mat" },
  { day: "Thursday", time: "6:00 PM", name: "Kids BJJ", program: "kids-bjj" },
  { day: "Thursday", time: "7:15 PM", name: "Adult BJJ", program: "adult-bjj" },
  { day: "Friday", time: "10:00 AM", name: "Kids + Adults BJJ", program: "adult-bjj" },
];

export const scheduleDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
] as const;

export type Program = {
  id: ProgramId;
  eyebrow: string;
  title: string;
  body: string;
  /** When this program runs, from the schedule above. */
  when: string[];
};

export const programs: Program[] = [
  {
    id: "adult-mma",
    eyebrow: "Stand up. Clinch. Ground.",
    title: "Adult MMA",
    body: "Striking, wrestling and submissions drilled as one system, for people who want the whole fight and not one slice of it.",
    when: ["Tuesday 7:15 PM"],
  },
  {
    id: "adult-bjj",
    eyebrow: "The gentle art.",
    title: "Adult Jiu-Jitsu",
    body: "Brazilian Jiu-Jitsu for adults. Position before submission, built up round by round on the mat.",
    when: ["Monday 7:15 PM", "Thursday 7:15 PM", "Friday 10:00 AM (with kids)"],
  },
  {
    id: "kids-bjj",
    eyebrow: "Start them young.",
    title: "Kids Jiu-Jitsu",
    body: "Jiu-Jitsu fundamentals for kids, with respect and showing up taught right alongside the technique.",
    when: ["Monday 6:00 PM", "Tuesday 6:00 PM", "Thursday 6:00 PM", "Friday 10:00 AM (with adults)"],
  },
  {
    id: "open-mat",
    eyebrow: "Doors open.",
    title: "Adult Open Mat",
    body: "Unstructured mat time for adults to roll, drill and work on whatever needs work.",
    when: ["Wednesday 6:00 PM"],
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
    note: "Grip fighting in front of a crowd.",
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
