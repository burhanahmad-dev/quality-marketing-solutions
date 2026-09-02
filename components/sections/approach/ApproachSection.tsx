import { processSteps } from "../../../lib/site-data";

export function ApproachSection() {
  return (
    <section className="approach-section" id="approach" aria-labelledby="approach-title">
      <div className="approach-heading">
        <p className="mini-label">How we work</p>
        <h2 id="approach-title">Clarity before activity.</h2>
        <p>
          A simple operating rhythm keeps every project focused, measurable and
          easy to understand.
        </p>
      </div>

      <ol className="process-grid">
        {processSteps.map((item) => (
          <li key={item.number}>
            <span>{item.number}</span>
            <div className="process-line" aria-hidden="true"><i /></div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
