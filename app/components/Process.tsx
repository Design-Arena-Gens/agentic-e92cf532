const steps = [
  {
    title: "Immersion & cadrage",
    description:
      "Ateliers de co-conception pour définir vos parcours, sources de données, KPIs et le ton conversationnel attendu.",
  },
  {
    title: "Design conversationnel",
    description:
      "Cartographie des intentions, scénarios de fallback, et scripting des dialogues en cohérence avec votre marque.",
  },
  {
    title: "Ingénierie & intégrations",
    description:
      "Configuration des modèles IA, connexion à vos APIs, tests de robustesse et conformité RGPD.",
  },
  {
    title: "Déploiement & optimisation",
    description:
      "Pilotage continu, A/B testing et amélioration basée sur vos métriques d&apos;engagement et de satisfaction.",
  },
];

export function Process() {
  return (
    <section className="section" id="process">
      <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
        <div style={{ display: "grid", gap: "1rem", maxWidth: "46rem" }}>
          <span className="badge">Méthodologie</span>
          <h2 style={{ fontSize: "clamp(2.1rem, 5vw, 3rem)" }}>
            Un cycle complet orienté impact business
          </h2>
          <p>
            Notre approche modulaire accélère le passage de l&apos;idée à la mise en production tout en assurant la
            qualité, la sécurité et la gouvernance des usages de l&apos;IA.
          </p>
        </div>
        <div className="grid process-grid">
          {steps.map((step, index) => (
            <article key={step.title} className="card process-step">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.65rem" }}>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
