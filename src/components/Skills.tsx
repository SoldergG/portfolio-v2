"use client";

import { useEffect } from "react";

const skillGroups = [
  {
    title: "iOS & Mobile",
    color: "var(--accent)",
    skills: ["Swift", "SwiftUI", "UIKit", "Xcode", "Xcode Cloud", "MapKit", "CoreLocation", "CoreData", "SwiftData", "TestFlight", "React Native", "Kotlin", "Jetpack Compose"],
    coreCount: 3,
  },
  {
    title: "Web & Frontend",
    color: "var(--accent2)",
    skills: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Three.js", "React Three Fiber", "Framer Motion", "Recharts", "React Flow"],
    coreCount: 2,
  },
  {
    title: "Backend & Tools",
    color: "var(--accent3)",
    skills: ["Supabase", "PostgreSQL", "PostGIS", "Node.js", "Express", "REST APIs", "Git / GitHub", "Docker", "Vercel", "Netlify"],
    coreCount: 2,
  },
  {
    title: "AI & Workflow",
    color: "var(--accent)",
    skills: ["Claude API", "Claude Code", "Cursor", "Prompt Engineering", "OpenAI Whisper", "ElevenLabs API", "Vercel AI SDK"],
    coreCount: 2,
  },
];

export default function Skills() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" style={{ padding: "6rem 3rem", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <div className="section-label reveal">Technical profile</div>
        <h2 className="section-title reveal">Skills</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "4rem",
          alignItems: "start",
        }} className="skills-grid-resp">
          {/* Intro text */}
          <div className="reveal">
            <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.85, marginBottom: "1.5rem" }}>
              Self-taught developer with a strong focus on <strong style={{ color: "var(--text)" }}>iOS development</strong> and
              a growing expertise in <strong style={{ color: "var(--text)" }}>full-stack web</strong> and{" "}
              <strong style={{ color: "var(--text)" }}>AI-powered products</strong>.
            </p>
            <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.85, marginBottom: "1.5rem" }}>
              I build real things — apps that run on real devices and services people actually use. Whether it&apos;s a native Swift app
              or a Next.js web app, I focus on performance, polish, and shipping.
            </p>
            <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.85 }}>
              Expert in using <em style={{ color: "var(--accent)", fontStyle: "normal", fontWeight: 600 }}>Claude AI</em> for development workflows, code generation,
              and building AI-powered features into real products.
            </p>
          </div>

          {/* Skill chip groups */}
          <div>
            {skillGroups.map((group, gi) => (
              <div key={group.title} className="reveal" style={{ marginBottom: "2.5rem", transitionDelay: `${gi * 0.1}s` }}>
                <div style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "0.65rem", color: group.color,
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  marginBottom: "1rem", paddingBottom: "0.5rem",
                  borderBottom: "1px solid var(--border)",
                }}>
                  {group.title}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {group.skills.map((skill, si) => (
                    <span
                      key={skill}
                      className={`skill-item${si < group.coreCount ? " core" : ""}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid-resp { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
