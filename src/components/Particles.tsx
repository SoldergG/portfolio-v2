"use client";

import { useEffect } from "react";

export default function Particles() {
  useEffect(() => {
    function createParticle() {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = Math.random() * 100 + "vw";
      p.style.top = Math.random() * 100 + "vh";
      p.style.setProperty("--dx", (Math.random() - 0.5) * 200 + "px");
      p.style.setProperty("--dy", (Math.random() - 0.5) * 200 + "px");
      p.style.animation = `particleDrift ${8 + Math.random() * 12}s linear forwards`;
      const size = (2 + Math.random() * 2) + "px";
      p.style.width = size;
      p.style.height = size;
      const colors = ["var(--accent)", "var(--accent2)", "var(--accent3)"];
      p.style.background = colors[Math.floor(Math.random() * 3)];
      document.body.appendChild(p);
      p.addEventListener("animationend", () => p.remove());
    }

    const interval = setInterval(createParticle, 2500);
    return () => clearInterval(interval);
  }, []);

  return null;
}
