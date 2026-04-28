"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    title: "GroupMemo",
    description:
      "iOS app for groups of friends to collaboratively save and relive memories together. Built with SwiftUI and Supabase for real-time sync.",
    tags: ["SwiftUI", "Supabase", "iOS"],
    color: "#6366f1",
    icon: "📸",
    repo: "https://github.com/SoldergG/GroupMemo",
    featured: true,
  },
  {
    title: "KebabLocator",
    description:
      "Native iOS app to find the best kebab restaurants nearby. Features MapKit integration, reviews, and real-time location.",
    tags: ["Swift", "MapKit", "iOS"],
    color: "#f59e0b",
    icon: "🌯",
    repo: "https://github.com/SoldergG/KebabLocator-iOS",
    featured: true,
  },
  {
    title: "KebabLocator Android",
    description:
      "Native Android version of KebabLocator built with Kotlin and Jetpack Compose. Seamless Material 3 design.",
    tags: ["Kotlin", "Jetpack Compose", "Android"],
    color: "#10b981",
    icon: "🤖",
    repo: "https://github.com/SoldergG/KebabLocator-Android",
    featured: false,
  },
  {
    title: "SolarCalc",
    description:
      "Solar energy estimator for Portugal with interactive 3D visualisation built in Three.js. Calculates ROI and energy production.",
    tags: ["Three.js", "HTML", "CSS"],
    color: "#f97316",
    icon: "☀️",
    repo: "https://github.com/SoldergG/solarcalc",
    featured: true,
  },
  {
    title: "TeeUp",
    description:
      "iOS golf tracking app to log scores, track handicap, and analyse performance across courses.",
    tags: ["SwiftUI", "CoreData", "iOS"],
    color: "#22c55e",
    icon: "⛳",
    repo: "https://github.com/SoldergG/TeeUp",
    featured: false,
  },
  {
    title: "Sushi Tracker",
    description:
      "React Native + Expo app to track sushi consumption sessions with stats and history. Cross-platform iOS and Android.",
    tags: ["React Native", "Expo", "Supabase"],
    color: "#ec4899",
    icon: "🍣",
    repo: "https://github.com/SoldergG/sushi-tracker",
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <div
      className="group relative rounded-2xl p-6 border border-white/8 hover:border-white/20 transition-all duration-300 cursor-pointer"
      style={{
        background: "rgba(19, 19, 26, 0.6)",
        animationDelay: `${index * 100}ms`,
      }}
    >
      {project.featured && (
        <span className="absolute top-4 right-4 text-xs px-2 py-0.5 rounded-full border border-indigo-500/30 text-indigo-400 bg-indigo-500/10">
          Featured
        </span>
      )}

      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
        style={{ background: `${project.color}18` }}
      >
        {project.icon}
      </div>

      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
        {project.title}
      </h3>

      <p className="text-white/50 text-sm leading-relaxed mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-md border border-white/8 text-white/50"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white/80 transition-colors"
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
        View on GitHub
      </a>

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${project.color}08 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}

export default function Projects() {
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
    <section id="projects" className="py-28 px-6">
      <div ref={ref} className="section-fade max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Projects
          </p>
          <h2 className="text-4xl font-bold text-white">
            Things I&apos;ve{" "}
            <span className="gradient-text">built</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/SoldergG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors border border-white/10 hover:border-white/20 px-6 py-3 rounded-xl"
          >
            View all repositories on GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
