"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: scrolled ? "0.75rem 3rem" : "1.5rem 3rem",
    borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
    transition: "all 0.3s",
  };

  return (
    <nav style={navStyle} className={scrolled ? "glass" : ""}>
      <a
        href="#home"
        style={{
          fontSize: "1rem", fontWeight: 700, letterSpacing: "0.15em",
          color: "var(--accent)", textTransform: "uppercase",
          fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none",
          transition: "color 0.3s, letter-spacing 0.3s",
        }}
      >
        LS_DEV
      </a>

      {/* Desktop */}
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="ls-desktop-nav">
        {links.map(l => (
          <a key={l.href} href={l.href} style={{
            color: "var(--muted)", textDecoration: "none", fontSize: "0.8rem",
            fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase",
            transition: "color 0.2s", fontFamily: "var(--font-dm-mono), monospace",
          }}>
            {l.label}
          </a>
        ))}
        <a href="#contact" style={{
          background: "var(--accent)", color: "var(--bg)", padding: "0.5rem 1.25rem",
          fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.8rem",
          fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
          textDecoration: "none", transition: "opacity 0.2s",
        }}>
          Hire me
        </a>
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: "none", border: "none", color: "var(--muted)", cursor: "pointer" }}
        className="ls-mobile-toggle"
        aria-label="Toggle menu"
      >
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          {menuOpen
            ? <><line x1="4" y1="4" x2="18" y2="18"/><line x1="18" y1="4" x2="4" y2="18"/></>
            : <><line x1="3" y1="6" x2="19" y2="6"/><line x1="3" y1="12" x2="19" y2="12"/><line x1="3" y1="18" x2="19" y2="18"/></>
          }
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="glass" style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          borderTop: "1px solid var(--border)", padding: "1rem 3rem",
          display: "flex", flexDirection: "column", gap: "1rem",
        }}>
          {[...links, { href: "#contact", label: "Contact" }].map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              color: "var(--muted)", textDecoration: "none", fontSize: "0.9rem",
              fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}>{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        .ls-desktop-nav { display: flex !important; }
        .ls-mobile-toggle { display: none !important; }
        @media (max-width: 768px) {
          .ls-desktop-nav { display: none !important; }
          .ls-mobile-toggle { display: block !important; }
          nav { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
        }
      `}</style>
    </nav>
  );
}
