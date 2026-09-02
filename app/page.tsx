"use client";

import { useEffect, useRef, useState } from "react";

const rotatingServices = ["SEO", "Paid media", "Social", "Web & CRO"];

const capabilities = [
  {
    number: "01",
    title: "Search that compounds",
    label: "SEO",
    description:
      "Technical foundations, search-led content and local visibility built around how your customers actually look for help.",
    visual: "visual-seo",
  },
  {
    number: "02",
    title: "Campaigns with intent",
    label: "Paid media",
    description:
      "Google and social campaigns engineered to create qualified demand, sharpen acquisition and waste less budget.",
    visual: "visual-paid",
  },
  {
    number: "03",
    title: "Content people notice",
    label: "Social growth",
    description:
      "A clear channel strategy, distinctive creative and a repeatable publishing system that keeps your brand relevant.",
    visual: "visual-social",
  },
  {
    number: "04",
    title: "Websites that persuade",
    label: "Web & CRO",
    description:
      "Fast, focused digital experiences that make the next step obvious and turn more attention into action.",
    visual: "visual-web",
  },
  {
    number: "05",
    title: "Decisions backed by data",
    label: "Analytics",
    description:
      "Useful measurement and reporting that connects channel performance to the outcomes your business cares about.",
    visual: "visual-data",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We map your audience, category, competitors and current funnel to find the clearest growth opportunity.",
  },
  {
    number: "02",
    title: "Focus",
    description:
      "We shape one practical roadmap: the right message, the right channels and the right conversion journey.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "Strategy becomes campaigns, content and digital experiences designed to earn attention and move people forward.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "We read the signal, remove friction and compound what works through consistent testing and optimization.",
  },
];

const faqs = [
  {
    question: "Can QMS manage our complete digital marketing?",
    answer:
      "Yes. We can connect SEO, paid media, social, content, web and measurement into one joined-up growth program, or start with the area creating the biggest bottleneck.",
  },
  {
    question: "Do you also offer SEO as a focused service?",
    answer:
      "Yes. A focused SEO engagement can cover technical SEO, keyword and competitor research, content planning, local SEO and ongoing performance improvement.",
  },
  {
    question: "How do projects usually begin?",
    answer:
      "We begin with a discovery call and a focused review of your market, current activity and goals. You then receive a prioritized direction before execution starts.",
  },
  {
    question: "How will we know what is working?",
    answer:
      "We agree on useful success signals at the start and report in plain language: what changed, why it matters and what we recommend doing next.",
  },
];

function Mark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "brand-symbol compact" : "brand-symbol"} aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [motionPaused, setMotionPaused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const honorMotionPreference = () => {
      if (!reducedMotion.matches) return;
      setMotionPaused(true);
      videoRef.current?.pause();
    };
    const frame = window.requestAnimationFrame(honorMotionPreference);
    reducedMotion.addEventListener("change", honorMotionPreference);

    return () => {
      window.cancelAnimationFrame(frame);
      reducedMotion.removeEventListener("change", honorMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (motionPaused) return;
    const timer = window.setInterval(
      () => setServiceIndex((current) => (current + 1) % rotatingServices.length),
      2400,
    );
    return () => window.clearInterval(timer);
  }, [motionPaused]);

  function toggleMotion() {
    const shouldPause = !motionPaused;
    setMotionPaused(shouldPause);
    if (!videoRef.current) return;
    if (shouldPause) videoRef.current.pause();
    else void videoRef.current.play();
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="site-shell">
        <header className="site-header">
          <a className="brand" href="#top" aria-label="Quality Marketing Solutions home">
            <Mark />
            <span className="brand-text">
              <strong>Quality</strong>
              <span>Marketing Solutions</span>
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
            <i />
            <i />
          </button>

          <nav
            id="main-navigation"
            className={menuOpen ? "main-nav is-open" : "main-nav"}
            aria-label="Main navigation"
          >
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#approach" onClick={closeMenu}>Approach</a>
            <a href="#why-qms" onClick={closeMenu}>Why QMS</a>
            <a href="#contact" className="header-cta" onClick={closeMenu}>
              Start a project <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </header>

        <section className="hero" aria-labelledby="hero-title">
          <video
            ref={videoRef}
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/marketing-insights-poster.webp"
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src="/marketing-insights.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" aria-hidden="true" />

          <div className="hero-content">
            <p className="hero-kicker">Independent digital growth agency</p>
            <h1 id="hero-title">
              Digital marketing
              <span>built to perform.</span>
            </h1>
            <div className="hero-service" aria-live="polite">
              <span className="hero-service-label">Built across</span>
              <strong key={rotatingServices[serviceIndex]}>{rotatingServices[serviceIndex]}</strong>
            </div>
            <p className="hero-description">
              We connect strategy, search, media and conversion design to create
              growth your team can see, understand and scale.
            </p>
            <div className="hero-actions">
              <a className="button button-accent" href="#contact">
                Build your growth plan <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-glass" href="#services">
                Explore services <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <button
            className="motion-control"
            type="button"
            onClick={toggleMotion}
            aria-pressed={motionPaused}
            aria-label={motionPaused ? "Play background video" : "Pause background video"}
          >
            <span className={motionPaused ? "play-icon" : "pause-icon"} aria-hidden="true" />
            {motionPaused ? "Play" : "Pause"}
          </button>
        </section>

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
                Clear thinking, focused execution and honest reporting from a
                team that treats your goals like business goals.
              </p>
              <a className="button button-light" href="#contact">
                Start the conversation <span aria-hidden="true">↗</span>
              </a>
            </div>
          </section>
        </div>

        <div className="paper-content">
          <section className="capabilities-section" id="services" aria-labelledby="services-title">
            <div className="section-topline">
              <div>
                <p className="mini-label">Capabilities</p>
                <h2 id="services-title">Connected services.<br />One clear direction.</h2>
              </div>
              <p>
                Choose a focused service or bring the whole system together.
                Either way, every move starts with the same commercial goal.
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

          <section className="point-of-view" id="why-qms" aria-labelledby="pov-title">
            <div className="pov-index" aria-hidden="true">QMS / 01</div>
            <div className="pov-copy">
              <p className="mini-label">Our point of view</p>
              <h2 id="pov-title">
                Good marketing is not more noise.
                <span>It is a clearer reason to choose you.</span>
              </h2>
            </div>
            <div className="pov-note">
              <Mark compact />
              <p>
                We bring strategy, creative and performance into the same room,
                so your brand feels consistent from first impression to final action.
              </p>
            </div>
          </section>

          <section className="approach-section" id="approach" aria-labelledby="approach-title">
            <div className="approach-heading">
              <p className="mini-label">How we work</p>
              <h2 id="approach-title">Clarity before activity.</h2>
              <p>
                A simple operating rhythm keeps every project focused, measurable
                and easy to understand.
              </p>
            </div>

            <ol className="process-grid">
              {process.map((item) => (
                <li key={item.number}>
                  <span>{item.number}</span>
                  <div className="process-line" aria-hidden="true"><i /></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="decision-section" aria-labelledby="decision-title">
            <div className="decision-copy">
              <p className="mini-label">Built for better decisions</p>
              <h2 id="decision-title">See the signal.<br />Know the next move.</h2>
              <p>
                Reporting should make action easier. We translate performance
                into a useful view of what is working, what is not and where to go next.
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
                <span style={{ height: "28%" }} />
                <span style={{ height: "42%" }} />
                <span style={{ height: "36%" }} />
                <span style={{ height: "57%" }} />
                <span style={{ height: "69%" }} />
                <span style={{ height: "82%" }} />
                <span style={{ height: "100%" }} />
              </div>
              <div className="signal-questions">
                <p><span>Demand</span> Are the right people finding you?</p>
                <p><span>Conversion</span> Does attention become action?</p>
                <p><span>Efficiency</span> Is every channel earning its place?</p>
              </div>
            </div>
          </section>

          <section className="faq-section" aria-labelledby="faq-title">
            <div className="faq-heading">
              <p className="mini-label">Good questions</p>
              <h2 id="faq-title">Before we talk.</h2>
            </div>
            <div className="faq-list">
              {faqs.map((item, index) => (
                <details key={item.question} open={index === 0}>
                  <summary>
                    <span>{item.question}</span>
                    <i aria-hidden="true" />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-mark" aria-hidden="true"><Mark /></div>
          <p className="mini-label">Ready when you are</p>
          <h2 id="contact-title">Let&apos;s build your<br />next growth chapter.</h2>
          <p>
            Tell us what you are trying to grow and where progress feels stuck.
            We will bring a clear point of view on what to do next.
          </p>
          <a
            className="button button-accent contact-button"
            href="mailto:hello@qualitymarketingsolutions.com?subject=Let%27s%20build%20a%20growth%20plan"
          >
            hello@qualitymarketingsolutions.com <span aria-hidden="true">↗</span>
          </a>
          <small>Discovery call · Clear priorities · No hard sell</small>
        </section>

        <footer className="site-footer">
          <div className="footer-brand">
            <Mark />
            <p>
              <strong>Quality Marketing Solutions</strong>
              <span>Marketing built around what moves the business.</span>
            </p>
          </div>
          <div className="footer-nav">
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#why-qms">Why QMS</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="copyright">© {new Date().getFullYear()} Quality Marketing Solutions. All rights reserved.</p>
        </footer>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Quality Marketing Solutions",
            alternateName: "QMS",
            description:
              "Digital growth agency for SEO, paid media, social media, web design and conversion optimization.",
            email: "hello@qualitymarketingsolutions.com",
            serviceType: [
              "Search engine optimization",
              "Paid media",
              "Social media marketing",
              "Web design",
              "Conversion optimization",
            ],
          }),
        }}
      />
    </main>
  );
}
