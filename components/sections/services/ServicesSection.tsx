import { capabilities } from "../../../lib/site-data";

export function ServicesSection() {
  return (
    <section className="capabilities-section" id="services" aria-labelledby="services-title">
      <div className="section-topline">
        <div>
          <p className="mini-label">Capabilities</p>
          <h2 id="services-title">Connected services.<br />One clear direction.</h2>
        </div>
        <p>
          Choose a focused service or bring the whole system together. Either
          way, every move starts with the same commercial goal.
        </p>
      </div>

      <div className="capability-grid">
        {capabilities.map((item) => (
          <article className="capability-card" key={item.number}>
            <div className={`capability-visual ${item.visual}`} aria-hidden="true">
              <span>{item.number}</span>
              <i />
            </div>
            <div className="capability-meta">
              <span>{item.label}</span>
              <span>{item.number} / 05</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href="#contact" aria-label={`Discuss ${item.label}`}>
              Discuss this service <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
