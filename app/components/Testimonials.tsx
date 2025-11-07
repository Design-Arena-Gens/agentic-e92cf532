const testimonials = [
  {
    quote:
      "Intelliwave a transformé notre support client : 78% des tickets sont résolus automatiquement et nos équipes peuvent se concentrer sur les cas vraiment complexes.",
    author: "Claire Dupont",
    role: "Directrice Expérience Client • NeoBank",
  },
  {
    quote:
      "En trois semaines nous avons déployé un compagnon IA pour qualifier nos leads. Résultat : +62% de conversions tout en réduisant notre coût d&apos;acquisition.",
    author: "Julien Lefèvre",
    role: "VP Growth • SaaS B2B",
  },
  {
    quote:
      "La qualité rédactionnelle et le suivi d&apos;Intelliwave font la différence. Le chatbot reflète notre voix de marque et fournit des analyses exploitables chaque semaine.",
    author: "Sofia Martin",
    role: "Head of Digital • Retail Luxe",
  },
];

export function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
        <div style={{ display: "grid", gap: "1rem", maxWidth: "44rem" }}>
          <span className="badge">Cas clients</span>
          <h2 style={{ fontSize: "clamp(2.1rem, 4.8vw, 2.9rem)" }}>
            Des entreprises ambitieuses nous confient leurs conversations
          </h2>
          <p>
            Nous accompagnons des scale-ups, ETI et grands comptes dans leur transformation conversationnelle,
            avec des résultats mesurables dès le premier mois.
          </p>
        </div>
        <div className="testimonials">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.author} className="card testimonial-card">
              <p style={{ fontSize: "1.2rem", color: "rgba(246, 246, 249, 0.9)" }}>
                “{testimonial.quote}”
              </p>
              <footer>
                <strong style={{ display: "block", marginBottom: "0.2rem" }}>
                  {testimonial.author}
                </strong>
                <span style={{ color: "rgba(246, 246, 249, 0.6)", fontSize: "0.95rem" }}>
                  {testimonial.role}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
