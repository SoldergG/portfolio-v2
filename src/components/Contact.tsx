"use client";

import { useEffect, useRef } from "react";

export default function Contact() {
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
    <section id="contact" className="py-28 px-6">
      <div ref={ref} className="section-fade max-w-2xl mx-auto text-center">
        <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Contact
        </p>
        <h2 className="text-4xl font-bold text-white mb-6">
          Let&apos;s build something{" "}
          <span className="gradient-text">together</span>
        </h2>
        <p className="text-white/50 text-lg leading-relaxed mb-10">
          I&apos;m open to freelance projects, full-time roles, and interesting collaborations.
          Drop me a message and I&apos;ll get back to you quickly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:hello@lucas.dev"
            className="px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)" }}
          >
            Send an Email
          </a>
          <a
            href="https://github.com/SoldergG"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl font-semibold text-white/80 border border-white/10 hover:border-white/30 hover:text-white transition-all duration-200"
          >
            GitHub Profile
          </a>
        </div>

        <div className="flex justify-center gap-6 text-white/30">
          <span className="text-sm">Portugal, EU</span>
          <span>·</span>
          <span className="text-sm">Remote friendly</span>
          <span>·</span>
          <span className="text-sm">Full-time / Freelance</span>
        </div>
      </div>
    </section>
  );
}
