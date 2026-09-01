"use client";

import { useEffect, useRef, useState } from "react";

const phrases = [
  "Rank higher.",
  "Convert faster.",
  "Scale smarter.",
  "Grow with clarity.",
];

const services = [
  {
    number: "01",
    title: "SEO & Search",
    eyebrow: "Earn demand",
    description:
      "Technical SEO, search strategy and content systems that turn high-intent queries into sustainable visibility.",
    tags: ["Technical SEO", "Local SEO", "Content strategy"],
  },
  {
    number: "02",
    title: "Paid Media",
    eyebrow: "Capture demand",
    description:
      "High-accountability Google and social campaigns built around qualified leads, not surface-level clicks.",
    tags: ["Google Ads", "Meta Ads", "Retargeting"],
  },
  {
    number: "03",
    title: "Social Growth",
    eyebrow: "Create demand",
    description:
      "Channel-native strategy, content and creative systems that build relevance before the buying moment.",
    tags: ["Strategy", "Content", "Community"],
  },
  {
    number: "04",
    title: "Web & CRO",
    eyebrow: "Convert demand",
    description:
      "Fast, persuasive web experiences shaped around user intent, clear journeys and measurable conversion events.",
    tags: ["UX design", "Landing pages", "CRO"],
  },
  {
    number: "05",
    title: "Brand Systems",
    eyebrow: "Be remembered",
    description:
      "Positioning, visual direction and campaign-ready creative that makes every touchpoint feel unmistakably yours.",
    tags: ["Positioning", "Identity", "Creative"],
  },
  {
    number: "06",
    title: "Analytics",
    eyebrow: "Know what works",
    description:
      "Clean measurement, practical dashboards and a decision rhythm that keeps spend connected to business outcomes.",
    tags: ["Tracking", "Dashboards", "Insights"],
  },
];

const process = [
  {
    step: "01",
    title: "Find the signal",
    body: "We audit your market, funnel and current data to find the few opportunities with the clearest commercial upside.",
  },
  {
    step: "02",
    title: "Build the system",
    body: "We connect message, channel, creative and landing experience into one focused growth plan—not a pile of tactics.",
  },
  {
    step: "03",
    title: "Launch & learn",
    body: "Campaigns ship in measured cycles. Every test has a reason, a success signal and a next decision attached to it.",
  },
  {
    step: "04",
    title: "Compound what works",
    body: "Winning patterns become repeatable systems across search, paid, social and your website.",
  },
];

const faqs = [
  {
    q: "What kind of businesses do you work with?",
    a: "We are built for ambitious service brands, B2B teams and growing companies that want marketing tied to real pipeline—not isolated channel activity.",
  },
  {
    q: "Do you offer SEO as a standalone service?",
    a: "Yes. SEO engagements can stand alone or connect with content, conversion design and paid search when a broader growth system makes more sense.",
  },
  {
    q: "How do you measure success?",
    a: "We agree on meaningful outcomes before work begins. Depending on the engagement, that can include qualified leads, revenue contribution, acquisition cost, organic visibility and conversion rate.",
  },
  {
    q: "How quickly can we start?",
    a: "Most engagements begin with a focused discovery and measurement review. From there we move into a prioritized 90-day roadmap and the first launch cycle.",
  },
];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [motionPaused, setMotionPaused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setMotionPaused(true);
      videoRef.current?.pause();
    }
  }, []);

  useEffect(() => {
    if (motionPaused) return;
    const timer = window.setInterval(
      () => setPhraseIndex((current) => (current + 1) % phrases.length),
      2800,
    );
    return () => window.clearInterval(timer);
  }, [motionPaused]);

  function toggleMotion() {
    const next = !motionPaused;
    setMotionPaused(next);
    if (!videoRef.current) return;
    if (next) videoRef.current.pause();
    else void videoRef.current.play();
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main>
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Quality Marketing Solutions home">
          <span className="brand-mark" aria-hidden="true">
            Q
          </span>
          <span className="brand-name">
            Quality <strong>Marketing</strong> Solutions
          </span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#approach" onClick={closeMenu}>
            Approach
          </a>
          <a href="#insights" onClick={closeMenu}>
            Why QMS
          </a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Start a project <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.webp"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/hero-growth.mp4" type="video/mp4" />
        </video>
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-content" id="content">
          <p className="eyebrow hero-eyebrow">
            <span className="live-dot" aria-hidden="true" />
            Independent growth agency · built for outcomes
          </p>
          <h1 id="hero-title">
            Turn attention into
            <span>measurable growth.</span>
          </h1>
          <div className="rotating-line">
            <span className="rotating-label">Your next move:</span>
            <span className="rotating-phrase" aria-live="polite">
              {phrases[phraseIndex]}
            </span>
          </div>
          <p className="hero-copy">
            QMS connects SEO, paid media, social and conversion-led web design
            into one accountable growth system.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Book a growth call <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-ghost" href="#services">
              See how we grow brands <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-meta" aria-label="Core capabilities">
          <span>SEO</span>
          <span>Paid media</span>
          <span>Social</span>
          <span>Web & CRO</span>
        </div>

        <button
          className="motion-control"
          type="button"
          onClick={toggleMotion}
          aria-pressed={motionPaused}
          aria-label={motionPaused ? "Play background motion" : "Pause background motion"}
        >
          <span className={motionPaused ? "play-icon" : "pause-icon"} aria-hidden="true" />
          {motionPaused ? "Play motion" : "Pause motion"}
        </button>
      </section>

      <div className="signal-strip" aria-label="Services ticker">
        <div className="signal-track">
          {["Search visibility", "Qualified demand", "Sharper creative", "Faster websites", "Clearer measurement", "Search visibility", "Qualified demand", "Sharper creative", "Faster websites", "Clearer measurement"].map(
            (item, index) => (
              <span key={`${item}-${index}`}>
                {item} <i aria-hidden="true">↗</i>
              </span>
            ),
          )}
        </div>
      </div>

      <section className="section services-section" id="services" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">What we do</p>
          <h2 id="services-title">
            One growth team.
            <span>Every critical lever.</span>
          </h2>
          <p>
            Strategy stays connected to execution, so every channel learns from
            the same customer journey and the same commercial goal.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-topline">
                <span>{service.number}</span>
                <span>{service.eyebrow}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul aria-label={`${service.title} capabilities`}>
                {service.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <span className="card-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="statement-section" aria-label="Agency positioning">
        <div className="statement-orbit" aria-hidden="true">
          <span>QMS</span>
        </div>
        <p className="eyebrow">Our point of view</p>
        <p className="statement-copy">
          Marketing works better when the <em>message</em>, the <em>media</em>,
          and the <em>moment after the click</em> work as one.
        </p>
      </section>

      <section className="section approach-section" id="approach" aria-labelledby="approach-title">
        <div className="approach-intro">
          <p className="eyebrow">The QMS operating system</p>
          <h2 id="approach-title">Clarity before activity.</h2>
          <p>
            A practical cycle that turns insight into execution—and execution
            into a repeatable growth advantage.
          </p>
        </div>
        <ol className="process-list">
          {process.map((item) => (
            <li key={item.step}>
              <span className="process-number">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <span className="process-arrow" aria-hidden="true">
                ↗
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="insight-section" id="insights" aria-labelledby="insights-title">
        <div className="insight-copy">
          <p className="eyebrow">Built for accountability</p>
          <h2 id="insights-title">
            No vanity dashboards.
            <span>Only decisions.</span>
          </h2>
          <p>
            We make performance visible, explain what changed and turn every
            reporting cycle into a sharper next move.
          </p>
          <a href="#contact" className="text-link">
            Build your growth roadmap <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="measurement-card" aria-label="Measurement framework">
          <div className="measurement-header">
            <span>QMS / Growth signal</span>
            <span className="status-pill">
              <i aria-hidden="true" /> Live
            </span>
          </div>
          <div className="metric-row">
            <span>Demand</span>
            <strong>Are the right people finding you?</strong>
            <i className="metric-bar metric-bar-long" aria-hidden="true" />
          </div>
          <div className="metric-row">
            <span>Efficiency</span>
            <strong>Is each channel earning its place?</strong>
            <i className="metric-bar metric-bar-medium" aria-hidden="true" />
          </div>
          <div className="metric-row">
            <span>Conversion</span>
            <strong>Does attention become action?</strong>
            <i className="metric-bar metric-bar-short" aria-hidden="true" />
          </div>
          <div className="decision-line">
            <span>Signal</span>
            <div aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <strong>Next best move identified</strong>
          </div>
        </div>
      </section>

      <section className="section faq-section" aria-labelledby="faq-title">
        <div className="faq-heading">
          <p className="eyebrow">Good questions</p>
          <h2 id="faq-title">Before we talk.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.q} open={index === 0}>
              <summary>
                <span>{faq.q}</span>
                <i aria-hidden="true" />
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-glow" aria-hidden="true" />
        <div className="contact-content">
          <p className="eyebrow">Your next growth chapter</p>
          <h2 id="contact-title">
            Let’s make your marketing
            <span>harder to ignore.</span>
          </h2>
          <p>
            Tell us where growth is stuck. We’ll bring a clear point of view on
            what to fix, what to test and what to scale.
          </p>
          <a className="button button-dark" href="mailto:hello@qualitymarketingsolutions.com?subject=Growth%20consultation">
            Start the conversation <span aria-hidden="true">↗</span>
          </a>
          <small>Strategy call · No hard sell · Clear next steps</small>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">
            Q
          </span>
          <p>
            Quality Marketing Solutions
            <span>Marketing built around what moves the business.</span>
          </p>
        </div>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#insights">Why QMS</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="footer-meta">© {new Date().getFullYear()} QMS. All rights reserved.</p>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Quality Marketing Solutions",
            alternateName: "QMS",
            description:
              "A growth marketing agency connecting SEO, paid media, social media, web design and conversion optimization.",
            email: "hello@qualitymarketingsolutions.com",
          }),
        }}
      />
    </main>
  );
}
