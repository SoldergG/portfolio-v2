"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  tag: string;
  github?: string;
  appStore?: string;
  testFlight?: string;
  live?: string;
  num: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    title: "TeeUp",
    description:
      "Premium iOS golf companion app for Portuguese golfers. Real-time score tracking, course discovery via Google Places, World Handicap System calculations, and a full social layer. 100% SwiftUI, offline-first with Supabase backend.",
    tags: ["SwiftUI", "SwiftData", "Supabase", "MapKit", "WeatherKit"],
    tag: "iOS App · Swift · Featured",
    github: "https://github.com/SoldergG/TeeUp",
    num: "01",
    featured: true,
  },
  {
    title: "KebabLocator",
    description:
      "Native iOS app to find the best kebab restaurants nearby. MapKit integration, reviews, real-time location, and a clean SwiftUI interface. Published on the App Store.",
    tags: ["Swift", "SwiftUI", "MapKit", "CoreLocation"],
    tag: "iOS App · App Store",
    github: "https://github.com/SoldergG/KebabLocator-iOS",
    appStore: "https://apps.apple.com/us/app/kebablocator/id6761265002",
    num: "02",
    featured: true,
  },
  {
    title: "GroupMemo",
    description:
      "iOS app for groups of friends to collaboratively save and relive memories together. Real-time photo and note sync with SwiftUI and Supabase.",
    tags: ["SwiftUI", "Supabase", "iOS", "Swift Concurrency"],
    tag: "iOS App · Swift",
    github: "https://github.com/SoldergG/GroupMemo",
    num: "03",
    featured: true,
  },
  {
    title: "SGO SalvaMais",
    description:
      "Native iOS application to streamline emergency and safety workflows. Production-quality codebase with Xcode Cloud CI/CD. Available on TestFlight.",
    tags: ["Swift", "SwiftUI", "Xcode Cloud", "GitHub Actions"],
    tag: "iOS App · TestFlight",
    github: "https://github.com/SoldergG/SGO-SalvaMais-iOS",
    testFlight: "https://testflight.apple.com/join/G4tn2J4P",
    num: "04",
    featured: true,
  },
  {
    title: "ProcuraEscola",
    description:
      "Portuguese university course comparator — search and compare courses by cutoff grades, employment rates, fees, and entrance exams across 16 institutions.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    tag: "Web App · Next.js",
    github: "https://github.com/SoldergG/procura-escola",
    num: "05",
    featured: true,
  },
  {
    title: "Schema Visualizer",
    description:
      "Paste SQL schema and instantly generate an interactive ER diagram. Supports PostgreSQL and Supabase with drag-and-drop table nodes.",
    tags: ["Next.js", "React Flow", "TypeScript"],
    tag: "Web App · Next.js",
    github: "https://github.com/SoldergG/schema-visualizer",
    num: "06",
    featured: true,
  },
  {
    title: "SwiftUI Gallery",
    description:
      "35+ production-ready SwiftUI components with search, category filters, and one-click copy. Built with Next.js and Prism.js for syntax highlighting.",
    tags: ["Next.js", "Prism.js", "SwiftUI"],
    tag: "Web App · Reference",
    github: "https://github.com/SoldergG/swiftui-gallery",
    num: "07",
    featured: true,
  },
  {
    title: "AI Chat Swift",
    description:
      "Native iOS chat client for Claude AI with real-time streaming responses, Markdown rendering, and conversation management. SwiftUI + Swift Concurrency.",
    tags: ["SwiftUI", "Claude API", "Swift Concurrency"],
    tag: "iOS App · AI",
    github: "https://github.com/SoldergG/ai-chat-swift",
    num: "08",
    featured: true,
  },
  {
    title: "Solar Calc v2",
    description:
      "Interactive solar energy calculator for Portugal with a 3D house visualisation. Estimates savings, ROI, and CO2 offset using real irradiance data.",
    tags: ["Next.js", "Three.js", "TypeScript"],
    tag: "Web App · 3D",
    github: "https://github.com/SoldergG/solar-calc-v2",
    num: "09",
    featured: false,
  },
  {
    title: "Lisbon Dashboard",
    description:
      "Real-time city data dashboard for Lisbon with live weather, air quality, metro status, tourism charts, and neighbourhood stats.",
    tags: ["Next.js", "Recharts", "TypeScript"],
    tag: "Web App · Dashboard",
    github: "https://github.com/SoldergG/lisbon-dashboard",
    num: "10",
    featured: false,
  },
  {
    title: "Expense Tracker",
    description:
      "Full-featured expense tracking dashboard with interactive charts, category breakdowns, CRUD operations, and Supabase backend.",
    tags: ["Next.js", "Recharts", "Supabase"],
    tag: "Web App · Full-Stack",
    github: "https://github.com/SoldergG/expense-tracker",
    num: "11",
    featured: false,
  },
  {
    title: "Kebab API",
    description:
      "RESTful API for kebab restaurant discovery with PostGIS geospatial queries, reviews, ratings, and nearby search.",
    tags: ["Express", "Supabase", "PostGIS"],
    tag: "API · Backend",
    github: "https://github.com/SoldergG/kebab-api",
    num: "12",
    featured: false,
  },
  {
    title: "SolderUI Kit",
    description:
      "Open-source SwiftUI component library — toasts, skeleton loaders, ratings, badges, shimmer effects, and glass cards. SPM ready.",
    tags: ["SwiftUI", "SPM", "iOS"],
    tag: "iOS Library",
    github: "https://github.com/SoldergG/swift-ui-components",
    num: "13",
    featured: false,
  },
  {
    title: "DevTools CLI",
    description:
      "Developer productivity CLI with colour conversion, conventional commit helper, and project scaffolding for Next.js, Vite, Express, and Expo.",
    tags: ["Node.js", "Commander", "TypeScript"],
    tag: "CLI · Tools",
    github: "https://github.com/SoldergG/devtools-cli",
    num: "14",
    featured: false,
  },
  {
    title: "QR Menu",
    description:
      "Digital restaurant menu system — customers scan a QR code and see the full menu instantly. Mobile-first with search, categories, and allergen info.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    tag: "Web App · Next.js",
    github: "https://github.com/SoldergG/qr-menu",
    num: "15",
    featured: false,
  },
];

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    const rotX = dy * -8;
    const rotY = dx * 10;
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    card.style.boxShadow = `${-rotY * 2}px ${rotX * 2}px 40px rgba(0,0,0,0.35), 0 0 30px rgba(200,255,110,0.06)`;
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mouse-x", px + "%");
    card.style.setProperty("--mouse-y", py + "%");
  }, []);

  const onMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "";
    card.style.boxShadow = "";
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={project.featured ? "project-card-featured" : ""}
      style={{
        background: "var(--surface)",
        padding: "2.5rem",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s",
        transformStyle: "preserve-3d",
        willChange: "transform",
        cursor: "default",
      }}
    >
      {/* Top accent bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "2px",
        background: "var(--accent)",
        transform: "scaleX(0)", transformOrigin: "left",
        transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1)",
      }} className="card-accent-bar" />

      {/* Mouse spotlight */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(200,255,110,0.06), transparent 40%)",
        opacity: 0, transition: "opacity 0.3s", pointerEvents: "none",
      }} className="card-spotlight" />

      <div style={{
        fontFamily: "var(--font-dm-mono), monospace",
        fontSize: "0.65rem", color: "var(--accent)",
        letterSpacing: "0.2em", textTransform: "uppercase",
        marginBottom: "1.25rem",
        display: "flex", alignItems: "center", gap: "0.5rem",
      }}>
        <span style={{ width: "6px", height: "6px", background: "var(--accent)", borderRadius: "50%", animation: "pulse 2s ease-in-out infinite", display: "inline-block" }} />
        {project.tag}
      </div>

      <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem", letterSpacing: "-0.02em", color: "var(--text)" }}>
        {project.title}
      </h3>

      <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "1.75rem", maxWidth: "500px" }}>
        {project.description}
      </p>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
        {project.tags.map(tag => (
          <span key={tag} className="tech-pill">{tag}</span>
        ))}
      </div>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
            fontSize: "0.78rem", fontWeight: 600, color: "var(--accent)",
            textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase",
            display: "flex", alignItems: "center", gap: "0.4rem",
            transition: "gap 0.2s",
          }}>GitHub →</a>
        )}
        {project.appStore && (
          <a href={project.appStore} target="_blank" rel="noopener noreferrer" style={{
            fontSize: "0.78rem", fontWeight: 600, color: "var(--accent2)",
            textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase",
            display: "flex", alignItems: "center", gap: "0.4rem",
            border: "1px solid var(--accent2)", padding: "0.3rem 0.75rem",
            transition: "opacity 0.2s",
          }}>App Store ↗</a>
        )}
        {project.testFlight && (
          <a href={project.testFlight} target="_blank" rel="noopener noreferrer" style={{
            fontSize: "0.78rem", fontWeight: 600, color: "var(--accent3)",
            textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase",
            display: "flex", alignItems: "center", gap: "0.4rem",
            border: "1px solid var(--accent3)", padding: "0.3rem 0.75rem",
            transition: "opacity 0.2s",
          }}>TestFlight ↗</a>
        )}
      </div>

      <div style={{
        position: "absolute", bottom: "2rem", right: "2rem",
        fontFamily: "var(--font-dm-mono), monospace",
        fontSize: "4rem", fontWeight: 300,
        color: "var(--border2)", lineHeight: 1,
        pointerEvents: "none", transition: "transform 0.4s, opacity 0.4s",
      }}>
        {project.num}
      </div>

      <style>{`
        .card-accent-bar { transform: scaleX(0) !important; }
        div:hover > .card-accent-bar { transform: scaleX(1) !important; }
        div:hover > .card-spotlight { opacity: 1 !important; }
        .project-card-featured { grid-column: 1 / -1; }
        @media (max-width: 768px) { .project-card-featured { grid-column: 1; } }
      `}</style>
    </div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const visible = showAll ? projects : projects.filter(p => p.featured);

  return (
    <section
      id="projects"
      style={{ padding: "6rem 3rem", position: "relative", zIndex: 1, background: "var(--surface)" }}
    >
      <div ref={ref} style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <div className="section-label reveal">Selected work</div>
        <h2 className="section-title reveal">Projects</h2>

        {/* Toggle */}
        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2rem" }}>
          <button
            onClick={() => setShowAll(false)}
            style={{
              fontSize: "0.8rem", padding: "0.5rem 1.25rem",
              border: `1px solid ${!showAll ? "var(--accent)" : "var(--border2)"}`,
              color: !showAll ? "var(--accent)" : "var(--muted)",
              background: !showAll ? "rgba(200,255,110,0.08)" : "transparent",
              cursor: "pointer", fontFamily: "var(--font-dm-mono), monospace",
              letterSpacing: "0.05em", transition: "all 0.2s",
            }}
          >
            Featured
          </button>
          <button
            onClick={() => setShowAll(true)}
            style={{
              fontSize: "0.8rem", padding: "0.5rem 1.25rem",
              border: `1px solid ${showAll ? "var(--accent)" : "var(--border2)"}`,
              color: showAll ? "var(--accent)" : "var(--muted)",
              background: showAll ? "rgba(200,255,110,0.08)" : "transparent",
              cursor: "pointer", fontFamily: "var(--font-dm-mono), monospace",
              letterSpacing: "0.05em", transition: "all 0.2s",
            }}
          >
            All ({projects.length})
          </button>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.5px",
          background: "var(--border)",
          border: "1.5px solid var(--border)",
          perspective: "1200px",
        }} className="projects-grid-resp">
          {visible.map(p => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        <div style={{ marginTop: "2.5rem" }}>
          <a
            href="https://github.com/SoldergG"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              fontSize: "0.85rem", color: "var(--muted)",
              textDecoration: "none", letterSpacing: "0.05em",
              border: "1px solid var(--border2)", padding: "0.75rem 1.5rem",
              transition: "color 0.2s, border-color 0.2s",
              fontFamily: "var(--font-dm-mono), monospace",
            }}
          >
            View all on GitHub ↗
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid-resp { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
