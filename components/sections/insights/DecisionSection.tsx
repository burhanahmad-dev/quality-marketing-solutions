export function DecisionSection() {
  return (
    <section className="decision-section" aria-labelledby="decision-title">
      <div className="decision-copy">
        <p className="mini-label">Built for better decisions</p>
        <h2 id="decision-title">See the signal.<br />Know the next move.</h2>
        <p>
          Reporting should make action easier. We translate performance into a
          useful view of what is working, what is not and where to go next.
        </p>
        <a className="small-link light-link" href="#contact">
          Plan your next move <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="signal-card" aria-label="QMS measurement principles">
        <div className="signal-header">
          <span>QMS growth signal</span>
          <span><i /> Active view</span>
        </div>
        <div className="signal-chart" aria-hidden="true">
          {[28, 42, 36, 57, 69, 82, 100].map((height) => (
            <span key={height} style={{ height: `${height}%` }} />
          ))}
        </div>
        <div className="signal-questions">
          <p><span>Demand</span> Are the right people finding you?</p>
          <p><span>Conversion</span> Does attention become action?</p>
          <p><span>Efficiency</span> Is every channel earning its place?</p>
        </div>
      </div>
    </section>
  );
}
