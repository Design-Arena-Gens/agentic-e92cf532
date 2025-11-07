import Link from "next/link";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Méthodologie", href: "#process" },
  { label: "Cas clients", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="section" style={{ paddingBottom: "2rem" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <Link href="#" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span
            style={{
              display: "grid",
              placeItems: "center",
              width: "2.75rem",
              height: "2.75rem",
              borderRadius: "0.85rem",
              background: "linear-gradient(135deg, rgba(108, 93, 211, 0.6), rgba(34, 211, 238, 0.45))",
              border: "1px solid rgba(108, 93, 211, 0.45)",
              boxShadow: "0 10px 30px rgba(76, 51, 195, 0.35)",
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            IW
          </span>
          <div>
            <strong style={{ fontSize: "1.15rem" }}>Intelliwave</strong>
            <p style={{ marginTop: "0.15rem", fontSize: "0.9rem" }}>Agence d&apos;automatisation IA</p>
          </div>
        </Link>
        <nav
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.25rem",
          }}
        >
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} style={{ color: "var(--muted)" }}>
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="cta-button"
            style={{ padding: "0.65rem 1.3rem", fontSize: "0.95rem" }}
          >
            Parler à un expert
          </Link>
        </nav>
      </div>
    </header>
  );
}
