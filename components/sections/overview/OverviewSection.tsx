export function OverviewSection() {
  return (
    <div className="intro-panel-wrap" id="main-content">
      <section className="intro-panel" aria-label="Quality Marketing Solutions overview">
        <div className="service-menu">
          <p className="mini-label">Discover</p>
          <ul>
            <li>Growth strategy</li>
            <li>Search engine optimization</li>
            <li>Paid media</li>
            <li>Social media</li>
            <li>Web & conversion</li>
            <li>Analytics</li>
          </ul>
        </div>

        <div className="intro-copy">
          <p className="mini-label">One connected team</p>
          <h2>Marketing that works together.</h2>
          <p>
            Strong growth rarely comes from one isolated channel. We connect
            the full customer journey so every activity supports the next.
          </p>
          <a className="small-link" href="#approach">
            See our approach <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="feature-card">
          <span className="feature-orbit" aria-hidden="true" />
          <p className="mini-label">Your growth partner</p>
          <h2>Let&apos;s grow your brand together.</h2>
          <p>
            Clear thinking, focused execution and honest reporting from a team
            that treats your goals like business goals.
          </p>
          <a className="button button-light" href="#contact">
            Start the conversation <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </div>
  );
}
