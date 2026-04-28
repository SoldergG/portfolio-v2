"use client";

import { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "Mobile",
    color: "#6366f1",
    skills: [
      { name: "Swift", level: 90 },
      { name: "SwiftUI", level: 88 },
      { name: "React Native", level: 75 },
      { name: "Kotlin", level: 70 },
      { name: "Jetpack Compose", level: 68 },
    ],
  },
  {
    category: "Web",
    color: "#a855f7",
    skills: [
      { name: "Next.js", level: 82 },
      { name: "TypeScript", level: 80 },
      { name: "React", level: 85 },
      { name: "Three.js", level: 70 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend & Tools",
    color: "#ec4899",
    skills: [
      { name: "Supabase", level: 80 },
      { name: "Node.js", level: 72 },
      { name: "Git", level: 88 },
      { name: "PostgreSQL", level: 70 },
      { name: "REST APIs", level: 85 },
    ],
  },
];

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-white/70">{name}</span>
        <span className="text-white/30">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${level}%`,
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-28 px-6" style={{ background: "rgba(19,19,26,0.4)" }}>
      <div ref={ref} className="section-fade max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Skills
          </p>
          <h2 className="text-4xl font-bold text-white">
            Tech I work with <span className="gradient-text">daily</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.category} className="glow-border rounded-2xl p-6">
              <h3
                className="text-sm font-semibold uppercase tracking-widest mb-6"
                style={{ color: group.color }}
              >
                {group.category}
              </h3>
              {group.skills.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} color={group.color} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
