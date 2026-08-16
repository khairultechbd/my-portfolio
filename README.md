# Md. Khairul Islam — Portfolio Website

Personal portfolio site for **Md. Khairul Islam**, Network & System Engineer — built with Next.js (App Router), React 19, Tailwind CSS 4, and Framer Motion.

Live sections: Hero, Training (police IT training photo slideshow), About, Education & Professional Qualification, Technical Skills, Projects, and Contact.

---

## Tech stack

| | |
|---|---|
| Framework | [Next.js](https://nextjs.org) 16 (App Router, Turbopack) |
| UI library | React 19 |
| Styling | Tailwind CSS 4 + CSS custom properties for light/dark theming |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Theme switching | [next-themes](https://github.com/pacocoursey/next-themes) (light / dark / system) |
| Photo slideshow | [Swiper](https://swiperjs.com) |
| Icons | [lucide-react](https://lucide.dev), [react-icons](https://react-icons.github.io/react-icons/) |
| Language | TypeScript |

---

## Prerequisites

- **Node.js 20+** (developed/tested on Node 22)
- **npm** (comes with Node) — `yarn`/`pnpm`/`bun` also work if you prefer, just swap the commands below

> ⚠️ This project pins `next@16.2.10`, a version newer than most AI tools and older docs expect. If something behaves unexpectedly, check `node_modules/next/dist/docs/` for the version-matched documentation before assuming it's a bug — see `AGENTS.md`.

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (Turbopack, hot reload)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the page auto-updates as you edit files under `app/`.

No environment variables or API keys are required; this is a fully static content site.

---

## Available scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the local dev server at `localhost:3000` |
| `npm run build` | Production build (also runs the TypeScript check) |
| `npm run start` | Serve the production build (run `npm run build` first) |
| `npm run lint` | Run ESLint over the project |

---

## Project structure

```
app/
├── components/          # One component per page section
│   ├── Navbar.tsx        # Fixed nav + mobile drawer + theme toggle
│   ├── HeroSection.tsx    # Name, rotating title, photo, CTA
│   ├── TrainingSlideshow.tsx  # Police IT training photo slideshow
│   ├── AboutSection.tsx   # Bio, stats, Education & Professional Qualification
│   ├── SkillsSection.tsx  # Technical skills grid
│   ├── ProjectsSection.tsx
│   ├── BlogSection.tsx    # Currently disabled — no real posts yet, see app/page.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   └── ThemeToggle.tsx
├── globals.css           # Design tokens (CSS custom properties) for both themes
├── layout.tsx            # Root layout, metadata, JSON-LD structured data
├── page.tsx               # Assembles the sections above into the homepage
├── sitemap.ts             # Generates /sitemap.xml
└── robots.ts               # Generates /robots.txt

public/
├── all-photo/             # Photos used across the site
└── cv/                     # CV download folder (currently empty — see below)
```

## Notes

- **CV download**: the Hero's old "Download CV" button was removed since no PDF was ever wired up. To bring it back, drop a PDF at `public/cv/` and re-add the link in `HeroSection.tsx`.
- **Contact form**: currently opens the visitor's email client via a `mailto:` link (see `ContactSection.tsx`). For guaranteed delivery, wire it up to a form backend (e.g. [Formspree](https://formspree.io), [Web3Forms](https://web3forms.com)) or a Next.js API route with an email service.
- **Private files**: the `CV/` folder (CV documents, planning notes) is intentionally excluded via `.gitignore` and never committed.

---

## Deployment

The site is a standard Next.js app and deploys cleanly to [Vercel](https://vercel.com/new) (recommended — zero config) or any Node host that supports Next.js. Connect this repository and Vercel will build with `npm run build` and serve automatically on every push to `main`.

---

## Links

- Live site: [mdkhairulislam.com](https://mdkhairulislam.com)
- LinkedIn: [linkedin.com/in/khairultechbd](https://www.linkedin.com/in/khairultechbd)
- GitHub: [github.com/khairultechbd](https://github.com/khairultechbd)
