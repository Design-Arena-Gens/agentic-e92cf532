export function ContactForm() {
  return (
    <section className="section" id="contact">
      <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
        <div style={{ display: "grid", gap: "1rem", maxWidth: "44rem" }}>
          <span className="badge">Contact</span>
          <h2 style={{ fontSize: "clamp(2.1rem, 4.8vw, 3rem)" }}>
            Prêts à donner vie à votre assistant intelligent ?
          </h2>
          <p>
            Décrivez-nous vos objectifs, vos outils actuels et les indicateurs clés que vous souhaitez améliorer.
            Notre équipe vous recontacte sous 24h pour un diagnostic personnalisé.
          </p>
        </div>
        <div className="card contact-card">
          <div style={{ display: "grid", gap: "1.2rem" }}>
            <h3>Ce que nous garantissons</h3>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gap: "0.85rem",
                color: "rgba(246, 246, 249, 0.78)",
              }}
            >
              {[
                "Atelier de cadrage offert",
                "Prototype fonctionnel en 3 semaines",
                "Gouvernance et conformité RGPD",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "0.65rem", alignItems: "center" }}>
                  <span
                    style={{
                      width: "0.5rem",
                      height: "0.5rem",
                      borderRadius: "999px",
                      background: "rgba(108, 93, 211, 0.8)",
                      boxShadow: "0 0 10px rgba(108, 93, 211, 0.6)",
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <form>
            <div className="input-group">
              <label htmlFor="name">Nom & prénom</label>
              <input id="name" name="name" placeholder="Votre nom" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email professionnel</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="vous@entreprise.com"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="company">Entreprise</label>
              <input id="company" name="company" placeholder="Nom de votre société" required />
            </div>
            <div className="input-group">
              <label htmlFor="project">Type de projet</label>
              <select id="project" name="project" defaultValue="" required>
                <option value="" disabled>
                  Sélectionnez une option
                </option>
                <option value="support">Automatisation du support client</option>
                <option value="sales">Assistant commercial</option>
                <option value="internal">Automatisation interne</option>
                <option value="custom">Projet sur mesure</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="message">Décrivez votre besoin</label>
              <textarea
                id="message"
                name="message"
                placeholder="Objectifs, contraintes, outils existants..."
                required
              />
            </div>
            <button type="submit" className="cta-button">
              Programmer un diagnostic
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
