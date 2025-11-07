import Link from "next/link";

export function Hero() {
  return (
    <section className="section" id="hero">
      <div className="container">
        <div className="hero-grid">
          <div style={{ display: "grid", gap: "1.75rem" }}>
            <span className="badge">
              <span
                style={{
                  width: "0.5rem",
                  height: "0.5rem",
                  borderRadius: "999px",
                  background: "rgba(34, 211, 238, 0.8)",
                  boxShadow: "0 0 10px rgba(34, 211, 238, 0.8)",
                }}
              />
              Chatbots IA sur mesure
            </span>
            <h1 style={{ fontSize: "clamp(2.9rem, 6vw, 4.1rem)", lineHeight: 1.1 }}>
              Donnez une voix intelligente à votre marque avec Intelliwave
            </h1>
            <p style={{ fontSize: "1.1rem", maxWidth: "36rem" }}>
              Nous concevons des solutions conversationnelles qui automatisent vos interactions
              client, qualifient vos prospects et déploient votre expertise 24/7 sans compromis
              sur l&apos;expérience humaine.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="#contact" className="cta-button">
                Lancer mon projet
              </Link>
              <Link href="#services" className="cta-button cta-alt">
                Explorer nos services
              </Link>
            </div>
            <div className="hero-kpi">
              {[
                { label: "Interactions automatisées / mois", value: "+120K" },
                { label: "Satisfaction client moyenne", value: "97%" },
                { label: "Temps de réponse réduit", value: "-82%" },
              ].map((item) => (
                <div key={item.label} className="hero-kpi-item">
                  <strong>{item.value}</strong>
                  <span style={{ color: "var(--muted)", fontSize: "0.95rem" }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div
              style={{
                position: "absolute",
                inset: "12%",
                borderRadius: "22px",
                border: "1px solid rgba(246, 246, 249, 0.12)",
                padding: "2.25rem",
                display: "grid",
                gap: "1.35rem",
                background: "rgba(8, 11, 24, 0.55)",
                backdropFilter: "blur(16px)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span
                  style={{
                    width: "0.65rem",
                    height: "0.65rem",
                    borderRadius: "999px",
                    background: "rgba(34, 211, 238, 0.85)",
                    boxShadow: "0 0 12px rgba(34, 211, 238, 0.8)",
                  }}
                />
                <p style={{ color: "rgba(246, 246, 249, 0.75)", fontSize: "0.95rem" }}>
                  IA en direct • Scénarios personnalisés
                </p>
              </div>
              <div style={{ display: "grid", gap: "0.75rem" }}>
                <p style={{ fontSize: "1.05rem", color: "rgba(246, 246, 249, 0.92)" }}>
                  <strong>Bot Confluence</strong> • Qualifie les demandes entrantes en 12 secondes
                </p>
                <div
                  style={{
                    display: "grid",
                    gap: "0.75rem",
                    background: "rgba(5, 7, 14, 0.6)",
                    borderRadius: "18px",
                    padding: "1.25rem",
                  }}
                >
                  {[
                    "Bonjour, comment puis-je vous aider aujourd&apos;hui ?",
                    "Je souhaite automatiser la génération de leads.",
                    "Excellent choix. Quel canal souhaitez-vous prioriser ?",
                  ].map((message, index) => (
                    <div
                      key={message}
                      style={{
                        alignSelf: index % 2 === 0 ? "flex-start" : "flex-end",
                        justifySelf: index % 2 === 0 ? "flex-start" : "flex-end",
                        maxWidth: "80%",
                        padding: "0.85rem 1rem",
                        borderRadius: "16px",
                        background:
                          index % 2 === 0
                            ? "rgba(108, 93, 211, 0.35)"
                            : "rgba(34, 211, 238, 0.25)",
                        border: "1px solid rgba(246, 246, 249, 0.18)",
                        fontSize: "0.95rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {message}
                    </div>
                  ))}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1rem",
                  color: "rgba(246, 246, 249, 0.75)",
                  fontSize: "0.9rem",
                }}
              >
                <span>
                  <strong style={{ color: "var(--foreground)" }}>Automatisation en cours</strong>
                  <br />80% du support de premier niveau
                </span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.6rem 0.9rem",
                    borderRadius: "999px",
                    background: "rgba(34, 211, 238, 0.18)",
                    color: "rgba(34, 211, 238, 0.85)",
                    fontWeight: 600,
                  }}
                >
                  ↻ Temps réel
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
