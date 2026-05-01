"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Animate stat counters
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".stat-counter");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        const el = e.target as HTMLElement;
        if (e.isIntersecting && !el.dataset.animated) {
          el.dataset.animated = "true";
          const target = parseInt(el.dataset.target || "0");
          const suffix = el.dataset.suffix || "";
          const start = performance.now();
          const dur = 1200;
          function update(now: number) {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (p < 1) requestAnimationFrame(update);
          }
          requestAnimationFrame(update);
        }
      });
    }, { threshold: 0.5 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "6rem 3rem 4rem",
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(200,255,110,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,110,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
      }} />

      {/* Scanlines */}
      <div style={{
        position: "absolute", inset: 0,
        background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.008) 3px, rgba(255,255,255,0.008) 4px)",
        pointerEvents: "none",
      }} />

      {/* Floating depth labels */}
      <div className="depth-label d1">// swift 6.0</div>
      <div className="depth-label d2">{"{ \"status\": \"available\" }"}</div>
      <div className="depth-label d3">npm run dev</div>

      {/* Label */}
      <div style={{
        fontFamily: "var(--font-dm-mono), monospace",
        fontSize: "0.75rem",
        color: "var(--accent)",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        marginBottom: "1.5rem",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        animation: "fadeInLeft 0.9s 0.2s both",
      }}>
        <span style={{ width: "24px", height: "1px", background: "var(--accent)", display: "inline-block" }} />
        Available for projects &amp; collaborations
        <span style={{ animation: "blink 1s step-end infinite", marginLeft: "0.3rem" }}>|</span>
      </div>

      {/* Title */}
      <h1
        ref={titleRef}
        style={{
          fontSize: "clamp(3.5rem, 9vw, 9rem)",
          fontWeight: 800,
          lineHeight: 0.9,
          letterSpacing: "-0.03em",
          marginBottom: "2rem",
          animation: "fadeInUp 1s 0.4s both",
          color: "var(--text)",
        }}
      >
        Lucas<br />
        <span style={{ color: "var(--muted)" }}>Salvador</span>
        <span style={{
          background: "linear-gradient(90deg, var(--accent), var(--accent2), var(--accent))",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: "shimmer 3s linear infinite",
        }}>.</span>
      </h1>

      {/* Bottom row */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginTop: "3rem",
        flexWrap: "wrap",
        gap: "2rem",
        animation: "fadeInUp 1s 0.7s both",
      }}>
        <div style={{ maxWidth: "440px" }}>
          <p style={{
            fontSize: "0.95rem",
            color: "var(--muted)",
            lineHeight: 1.8,
            marginBottom: "1.5rem",
          }}>
            <strong style={{ color: "var(--text)", fontWeight: 600 }}>iOS &amp; Full-Stack Developer</strong> based in{" "}
            <strong style={{ color: "var(--text)" }}>Lisbon, Portugal</strong>. I build beautiful native apps with{" "}
            Swift/SwiftUI and full-stack web products with Next.js and Supabase. Turning ideas into real products — from concept to App Store.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="#projects" style={{
              display: "inline-flex", alignItems: "center", gap: "0.75rem",
              background: "var(--accent)", color: "var(--bg)",
              padding: "0.9rem 2rem", fontWeight: 700, fontSize: "0.85rem",
              letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none",
              transition: "opacity 0.2s, transform 0.2s",
              position: "relative", overflow: "hidden",
            }}>
              View Projects →
            </a>
            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: "0.75rem",
              border: "1px solid var(--border2)", color: "var(--text)",
              padding: "0.9rem 2rem", fontWeight: 500, fontSize: "0.85rem",
              letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none",
              transition: "background 0.2s, border-color 0.2s",
            }}>
              Get in touch
            </a>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "3rem" }}>
          <div>
            <div className="stat-counter" data-target="5" data-suffix="+" style={{
              fontSize: "2rem", fontWeight: 800, color: "var(--text)", lineHeight: 1,
              animation: "scaleIn 0.6s 0.9s both",
              fontFamily: "var(--font-syne), sans-serif",
            }}>5+</div>
            <div style={{ fontSize: "0.72rem", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.25rem", fontFamily: "var(--font-dm-mono), monospace" }}>iOS Apps</div>
          </div>
          <div>
            <div className="stat-counter" data-target="13" data-suffix="+" style={{
              fontSize: "2rem", fontWeight: 800, color: "var(--text)", lineHeight: 1,
              animation: "scaleIn 0.6s 1s both",
              fontFamily: "var(--font-syne), sans-serif",
            }}>13+</div>
            <div style={{ fontSize: "0.72rem", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.25rem", fontFamily: "var(--font-dm-mono), monospace" }}>Projects</div>
          </div>
          <div>
            <div style={{
              fontSize: "2rem", fontWeight: 800, color: "var(--text)", lineHeight: 1,
              animation: "scaleIn 0.6s 1.1s both",
              fontFamily: "var(--font-syne), sans-serif",
            }}>PT</div>
            <div style={{ fontSize: "0.72rem", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.25rem", fontFamily: "var(--font-dm-mono), monospace" }}>Lisbon</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
        color: "var(--muted)",
        fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.65rem",
        letterSpacing: "0.15em", textTransform: "uppercase",
        animation: "fadeInUp 1s 1.5s both",
      }}>
        <div style={{
          width: "1px", height: "40px",
          background: "linear-gradient(to bottom, var(--muted), transparent)",
          animation: "scrollPulse 2s ease-in-out infinite",
        }} />
        scroll
      </div>
    </section>
  );
}
