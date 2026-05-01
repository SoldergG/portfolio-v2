"use client";

import { useEffect } from "react";

const facts = [
  { label: "Location", value: "Lisbon, Portugal" },
  { label: "Status", value: "Open to opportunities" },
  { label: "Focus", value: "iOS & Full-Stack Web" },
  { label: "Languages", value: "PT · EN · ES" },
];

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" style={{ padding: "6rem 3rem", position: "relative", zIndex: 1, background: "var(--surface)" }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <div className="section-label reveal">Background</div>
        <h2 className="section-title reveal">About me</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "6rem",
          alignItems: "center",
        }} className="about-layout-resp">
          {/* Photo */}
          <div className="reveal" style={{ position: "relative", paddingBottom: "1.5rem", paddingRight: "1.5rem" }}>
            <div className="about-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://raw.githubusercontent.com/SoldergG/SoldergG.github.io/main/lucas_photo.jpg"
                alt="Lucas Salvador"
              />
              <div className="about-frame-corner corner-tl" />
              <div className="about-frame-corner corner-tr" />
              <div className="about-frame-corner corner-bl" />
              <div className="about-frame-corner corner-br" />
            </div>
            <div className="about-badge">
              <strong>Lisbon</strong>
              iOS Dev<br />
              Open to work
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="reveal" style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
              I&apos;m a <em style={{ color: "var(--accent)", fontStyle: "normal", fontWeight: 600 }}>developer</em> from{" "}
              <strong style={{ color: "var(--text)" }}>Lisbon, Portugal</strong>, passionate about building software that actually gets used.
              I started with iOS development using Swift and SwiftUI, and quickly expanded into full-stack web with Next.js, React, and Supabase.
            </p>
            <p className="reveal reveal-delay-1" style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
              I believe in <strong style={{ color: "var(--text)" }}>learning by building</strong> — every project I take on solves a real problem.
              Whether it&apos;s a native Swift app on the App Store or a full-stack web product, I ship things that work and that people love to use.
            </p>
            <p className="reveal reveal-delay-2" style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: 1.9, marginBottom: "2rem" }}>
              Outside of tech, I play <strong style={{ color: "var(--text)" }}>golf</strong> and go to the gym regularly.
              I also enjoy cooking — which might explain why KebabLocator exists.
            </p>

            {/* Facts grid */}
            <div className="reveal reveal-delay-3" style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0,
              border: "1px solid var(--border)", marginTop: "0.5rem",
            }}>
              {facts.map((f, i) => (
                <div key={f.label} style={{
                  padding: "1.25rem 1.5rem",
                  borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
                  borderBottom: i < 2 ? "1px solid var(--border)" : "none",
                  transition: "background 0.3s",
                }}>
                  <div style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "0.6rem", color: "var(--muted)",
                    letterSpacing: "0.15em", textTransform: "uppercase",
                    marginBottom: "0.35rem",
                  }}>
                    {f.label}
                  </div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text)" }}>
                    {f.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="reveal" style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
              <a
                href="https://github.com/SoldergG"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.8rem", fontWeight: 600, color: "var(--muted)",
                  textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase",
                  fontFamily: "var(--font-dm-mono), monospace",
                  transition: "color 0.2s",
                  display: "flex", alignItems: "center", gap: "0.4rem",
                }}
              >
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                github.com/SoldergG →
              </a>
              <a
                href="https://www.instagram.com/Lucs2.8"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.8rem", fontWeight: 600, color: "var(--muted)",
                  textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase",
                  fontFamily: "var(--font-dm-mono), monospace",
                  transition: "color 0.2s",
                }}
              >
                @Lucs2.8 →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-layout-resp { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
