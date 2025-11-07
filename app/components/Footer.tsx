import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ display: "grid", gap: "2rem" }}>
        <div className="footer-top">
          <div style={{ display: "grid", gap: "0.75rem" }}>
            <strong style={{ fontSize: "1.4rem" }}>Intelliwave</strong>
            <p style={{ maxWidth: "24rem" }}>
              Agence d&apos;automatisation IA spécialisée dans la conception de chatbots sur mesure pour les
              entreprises ambitieuses.
            </p>
          </div>
          <nav className="footer-nav">
            <Link href="#services">Services</Link>
            <Link href="#process">Méthodologie</Link>
            <Link href="#testimonials">Cas clients</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Intelliwave. Tous droits réservés.</span>
          <div style={{ display: "flex", gap: "1.25rem" }}>
            <Link href="mailto:hello@intelliwave.ai">hello@intelliwave.ai</Link>
            <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
