const services = [
  {
    title: "Chatbots de support client",
    description:
      "Déploiement d&apos;assistants conversationnels capables de résoudre 80% des demandes de premier niveau avec une satisfaction maximale.",
    bullets: [
      "Base de connaissances connectée",
      "Escalade vers vos équipes",
      "Monitoring qualité continu",
    ],
  },
  {
    title: "Assistants commerciaux",
    description:
      "Automatisation des prises de rendez-vous, qualification, scoring des leads et nurturing personnalisé selon vos personas.",
    bullets: [
      "Qualification intelligente",
      "Intégration CRM",
      "Scripts de vente adaptatifs",
    ],
  },
  {
    title: "Automatisation interne",
    description:
      "Agents IA pour fluidifier vos opérations internes : onboarding RH, contrôle qualité, support technique ou finance.",
    bullets: [
      "Workflows interconnectés",
      "Connecteurs API sur mesure",
      "Tableau de pilotage unifié",
    ],
  },
];

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
        <div style={{ textAlign: "left", maxWidth: "48rem", display: "grid", gap: "1rem" }}>
          <span className="badge">Expertise sectorielle</span>
          <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 3.1rem)" }}>
            Des agents conversationnels calibrés pour vos opérations critiques
          </h2>
          <p>
            Nous réunissons la stratégie, la conception UX et l&apos;ingénierie IA pour livrer des chatbots
            fiables, entraînés sur vos données, parfaitement alignés à vos processus.
          </p>
        </div>
        <div className="grid service-grid">
          {services.map((service) => (
            <article key={service.title} className="card service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul
                style={{
                  margin: "1.5rem 0 0",
                  padding: 0,
                  listStyle: "none",
                  display: "grid",
                  gap: "0.75rem",
                  color: "rgba(246, 246, 249, 0.78)",
                }}
              >
                {service.bullets.map((bullet) => (
                  <li key={bullet} style={{ display: "flex", gap: "0.65rem", alignItems: "center" }}>
                    <span
                      style={{
                        width: "0.5rem",
                        height: "0.5rem",
                        borderRadius: "999px",
                        background: "rgba(108, 93, 211, 0.8)",
                        boxShadow: "0 0 10px rgba(108, 93, 211, 0.6)",
                      }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
