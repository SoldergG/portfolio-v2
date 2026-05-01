"use client";

import { useEffect } from "react";

const contactLinks = [
  { label: "Code", value: "github.com/SoldergG", href: "https://github.com/SoldergG", external: true },
  { label: "Email (preferred)", value: "Lucs2.8@icloud.com", href: "mailto:Lucs2.8@icloud.com", external: false },
  { label: "Email (alternative)", value: "lucascorreiasalvador28@gmail.com", href: "mailto:lucascorreiasalvador28@gmail.com", external: false },
  { label: "Instagram", value: "@Lucs2.8", href: "https://www.instagram.com/Lucs2.8", external: true },
];

export default function Contact() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" style={{ padding: "6rem 3rem", position: "relative", zIndex: 1 }}>
      <div style={{
        maxWidth: "1160px", margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start",
      }} className="contact-layout-resp">
        {/* Left */}
        <div>
          <div className="section-label reveal">Let&apos;s talk</div>
          <h2 className="reveal" style={{
            fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800,
            lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "2rem",
          }}>
            Got a project<br />
            in mind<span style={{ color: "var(--accent)" }}>?</span>
          </h2>
          <p className="reveal" style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            I&apos;m available for freelance projects, full-time roles, and interesting collaborations.
            Whether you need an iOS app, a web product, or AI-powered features — let&apos;s build something together.
          </p>
          <a
            href="mailto:Lucs2.8@icloud.com"
            className="reveal"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.75rem",
              background: "var(--accent)", color: "var(--bg)",
              padding: "1rem 2rem", fontWeight: 700, fontSize: "0.9rem",
              letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none",
              position: "relative", overflow: "hidden",
              transition: "opacity 0.2s, transform 0.2s",
            }}
          >
            Send a message →
          </a>

          {/* Availability badge */}
          <div className="reveal" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            marginTop: "1.5rem",
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.7rem", color: "var(--muted)",
            letterSpacing: "0.1em",
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#34c759", animation: "pulse 2s infinite", display: "inline-block" }} />
            Available for new projects · Lisbon, PT · Remote-friendly
          </div>
        </div>

        {/* Right - link list */}
        <div className="reveal">
          <ul style={{ listStyle: "none" }}>
            {contactLinks.map((link, i) => (
              <li key={link.label} style={{
                borderTop: i === 0 ? "1px solid var(--border)" : "none",
                borderBottom: "1px solid var(--border)",
                padding: "1rem 0",
              }}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="contact-link-item"
                >
                  <div>
                    <div style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: "0.65rem", color: "var(--muted)",
                      textTransform: "uppercase", letterSpacing: "0.1em",
                      marginBottom: "0.2rem",
                    }}>
                      {link.label}
                    </div>
                    <div>{link.value}</div>
                  </div>
                  <span className="link-arrow">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-layout-resp { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
