# Akademix — Frontend Prototype

"Find Your Professor. Find Your Path." — a student education, coaching and academic
guidance platform, built as a frontend-only React prototype.

## Stack

- React 18 + Vite
- Redux Toolkit (countries, professors, subjects, universities, search, student journey)
- React Router
- Tailwind CSS
- lucide-react icons

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## What's included

- Animated, clickable country ticker (10 countries) in the header
- Student journey stepper (Class 10 → Research)
- The core **Find Your Professor** flow: level → department → subject → country → recommended
  experts → confirmation
- Professor directory with filters, professor profile pages, and a "Select for Guidance" action
  wired into Redux
- Subject & department ecosystem, university directory, country landing pages
- Courses, Workshops, Mentoring, Career Guidance (interactive subject → career-path explorer)
- Global search across professors / subjects / universities / countries
- Responsive layout, mobile nav, footer with the full sitemap

## Scope notes

This is a **frontend prototype with mock data only** — no backend, no auth, no real
professor/university data. All 21 demo professor profiles and 18 demo universities are marked
"Demo Expert" / clearly fictional per the brief, and are structured (`src/data/`) so a real
API can replace them without touching the UI.

To keep this a working, reviewable first build, a few of the brief's smaller sections (e.g. a
separate "Beyond Academics" grooming page, per-subject sub-pages beyond the subject grid, and a
few of the listed CTAs) were folded into existing pages rather than built as standalone routes.
The architecture (Redux slices, `src/data/`, routing) is set up so any of these can be extended
without restructuring.
