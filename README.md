# Lucas Salvador — Developer Portfolio v2

A modern, interactive developer portfolio built with **Next.js 15**, **Three.js** (via React Three Fiber), **Tailwind CSS v4**, and smooth CSS animations. Features a live 3D particle star field and floating geometry in the hero, scroll-triggered section animations, and a fully responsive dark-mode design.

## Preview

| Section | Description |
|---------|-------------|
| **Hero** | Interactive 3D star field + floating octahedron (Three.js / R3F) |
| **About** | Personal bio + animated stat cards |
| **Projects** | Card grid of all GitHub projects with tags and links |
| **Skills** | Animated progress bars grouped by category |
| **Contact** | CTA section with email and GitHub links |

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 15](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| 3D Graphics | [Three.js](https://threejs.org) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [Drei](https://github.com/pmndrs/drei) |
| Fonts | Geist Sans + Geist Mono (via `next/font`) |

## Project Structure

```
portfolio-v2/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with metadata + SEO
│   │   ├── page.tsx          # Main page — composes all sections
│   │   └── globals.css       # CSS variables, global styles, animations
│   └── components/
│       ├── Navbar.tsx        # Fixed nav with scroll-aware glass blur effect
│       ├── Hero.tsx          # Hero section with dynamic 3D canvas
│       ├── HeroScene.tsx     # Three.js scene (star field + floating gem)
│       ├── About.tsx         # Bio and animated stats
│       ├── Projects.tsx      # Project card grid with GitHub links
│       ├── Skills.tsx        # Skill progress bars by category
│       ├── Contact.tsx       # Contact CTA
│       └── Footer.tsx        # Footer
└── public/                   # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm / pnpm / yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/SoldergG/portfolio-v2.git
cd portfolio-v2

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customisation

### Update Your Projects

Edit `src/components/Projects.tsx` — each project is an object in the `projects` array:

```ts
{
  title: "My App",
  description: "What it does",
  tags: ["SwiftUI", "Supabase"],
  color: "#6366f1",     // accent colour for the card hover glow
  icon: "📱",
  repo: "https://github.com/...",
  featured: true,
}
```

### Update Skills

Edit `src/components/Skills.tsx` — modify the `skillGroups` array with your own skills and proficiency levels (0–100).

### Update Contact Info

Edit `src/components/Contact.tsx` — replace the `mailto:` address and any social links.

### Change Colour Scheme

The entire colour palette lives in `src/app/globals.css` under `:root`:

```css
:root {
  --background: #0a0a0f;
  --accent: #6366f1;
  --accent-glow: rgba(99, 102, 241, 0.3);
  --surface: #13131a;
}
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Click **Deploy** — zero configuration required

### Other Platforms

Any Node.js platform works (Netlify, Railway, Render, Fly.io). Run `npm run build` and serve the output.

## Architecture Notes

- Three.js canvas is imported with `dynamic(() => import(...), { ssr: false })` to prevent SSR hydration issues and reduce initial JS bundle
- Scroll animations use native `IntersectionObserver` — no extra animation library required
- Tailwind v4 is used with the new `@import "tailwindcss"` syntax (no `tailwind.config.js` needed)

## License

MIT — free to use as a base for your own portfolio.

---

Made with care in Portugal by [Lucas Salvador](https://github.com/SoldergG)
