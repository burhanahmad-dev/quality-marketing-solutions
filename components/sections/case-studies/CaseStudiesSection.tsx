"use client";

import Image from "next/image";
import { useState } from "react";
import { caseStudies } from "./case-study-data";

export function CaseStudiesSection() {
  const [activeStudy, setActiveStudy] = useState(0);
  const study = caseStudies[activeStudy];
  const hasMultipleStudies = caseStudies.length > 1;

  const showPrevious = () => {
    setActiveStudy((current) =>
      current === 0 ? caseStudies.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveStudy((current) => (current + 1) % caseStudies.length);
  };

  return (
    <section className="case-studies-section" id="work" aria-labelledby="work-title">
      <div className="case-studies-heading">
        <div>
          <p className="mini-label">Selected client work</p>
          <h2 id="work-title">Work designed to be remembered.</h2>
        </div>
        <p>
          Real projects, presented without invented numbers. Each story focuses
          on the thinking, experience and commercial journey we created.
        </p>
      </div>

      <div
        className="case-study-stage"
        role="region"
        aria-roledescription="carousel"
        aria-label="Selected client projects"
      >
        <div className="case-study-copy" key={study.name}>
          <div className="case-study-meta">
            <span>{String(activeStudy + 1).padStart(2, "0")} / {String(caseStudies.length).padStart(2, "0")}</span>
            <span>{study.industry}</span>
          </div>
          <h3>{study.name}</h3>
          <h4>{study.headline}</h4>
          <p>{study.description}</p>

          <ul className="case-study-services" aria-label={`${study.name} project services`}>
            {study.services.map((service) => <li key={service}>{service}</li>)}
          </ul>

          <div className="case-study-highlights">
            {study.highlights.map((highlight) => (
              <div key={highlight.value}>
                <strong>{highlight.value}</strong>
                <span>{highlight.label}</span>
              </div>
            ))}
          </div>

          <div className="case-study-actions">
            <a href={study.url} target="_blank" rel="noreferrer">
              View live project <span aria-hidden="true">↗</span>
            </a>
            <div className="case-study-controls" aria-label="Choose a project">
              <button type="button" onClick={showPrevious} disabled={!hasMultipleStudies} aria-label="Previous project">←</button>
              <button type="button" onClick={showNext} disabled={!hasMultipleStudies} aria-label="Next project">→</button>
            </div>
          </div>
        </div>

        <a className="case-study-visual" href={study.url} target="_blank" rel="noreferrer" aria-label={`Open ${study.name} live project`}>
          <Image
            key={study.image}
            src={study.image}
            alt={study.imageAlt}
            fill
            sizes="(max-width: 900px) 100vw, 58vw"
          />
          <span className="case-browser-bar" aria-hidden="true">
            <i /><i /><i />
            <b>alooverse.workers.dev</b>
          </span>
        </a>
      </div>
    </section>
  );
}
