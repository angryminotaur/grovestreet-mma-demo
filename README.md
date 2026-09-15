# GroveStreet MMA & Jiu-Jitsu — Demo Homepage

A single-page demo site for **GroveStreet MMA & Jiu-Jitsu** (Mountain Grove, MO),
built by [Fourthform](https://www.fourthformstudios.com) as a cold-outreach
concept piece. The gym has not opened yet — grand opening is **October 3, 2026**.

This is a demo, not a live client site. There is no backend, no form handling and
no analytics.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Fully static (`output: "export"`), no environment variables, no server code

## Local development

```bash
npm install
npm run dev      # http://localhost:3130
npm run build    # static export to ./out
```

## Deploying to Vercel

Import the repo and accept the defaults. Nothing else is required:

- Framework preset: **Next.js** (auto-detected)
- Build command: `npm run build`
- Environment variables: **none**

## Content and placeholders

All copy lives in [`lib/site.ts`](lib/site.ts). The class schedule, street address
and grand opening details come from the gym's own Facebook announcement.

| Item | Status |
| --- | --- |
| Class schedule | Real, from the gym's announcement |
| Street address | Real: 430 N Chapman, Mountain Grove, MO |
| Grand opening details | Real: tours, program info, sign-ups, no classes that day |
| Membership pricing | Not published. Page says sign-ups open at the grand opening |
| Coach bios | Not published |
| Messenger / Facebook URLs | `PLACEHOLDER`: guessed handle `grovestreetmma`, replace with the real page links |

## Media

Photos in `public/media/` are the client's own, supplied for this pitch:

- `team-gym.jpg` — the crew on the mats (hero + gallery)
- `competition-team.jpg` — competition team with medals
- `action-jiujitsu.jpg` — live match
- `logo.jpg` — club logo (footer, favicon)

No stock photography is used. There were no construction/build-out photos in the
supplied set, so the "Inside the room" section leans on the finished-mat and team
shots instead.

## Accessibility notes

- Skip link, labelled landmarks, and a keyboard-operable mobile menu
- Decorative imagery has empty `alt`; content imagery is described
- Motion and the opening countdown respect `prefers-reduced-motion`
- Off-white (`#f2f0ea`) on near-black (`#050505`) for high contrast
