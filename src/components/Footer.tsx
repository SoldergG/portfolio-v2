export default function Footer() {
  return (
    <footer style={{
      padding: "2rem 3rem",
      borderTop: "1px solid var(--border)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "var(--font-dm-mono), monospace",
      fontSize: "0.7rem",
      color: "var(--muted)",
      flexWrap: "wrap",
      gap: "1rem",
      position: "relative",
      zIndex: 1,
    }}>
      <div>© 2025 Lucas Salvador. Built with Next.js, Three.js &amp; Tailwind.</div>
      <div>Lisbon, Portugal 🇵🇹</div>
      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
        <a
          href="mailto:Lucs2.8@icloud.com"
          style={{ color: "var(--muted)", textDecoration: "none", transition: "color 0.3s" }}
        >
          Lucs2.8@icloud.com
        </a>
        <a
          href="https://github.com/SoldergG/portfolio-v2"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--muted)", textDecoration: "none", transition: "color 0.3s" }}
        >
          Source ↗
        </a>
        <a
          href="https://www.instagram.com/Lucs2.8"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--muted)", textDecoration: "none", transition: "color 0.3s" }}
        >
          Instagram ↗
        </a>
      </div>
    </footer>
  );
}
