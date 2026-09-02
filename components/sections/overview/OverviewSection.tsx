"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const serviceSlides = [
  {
    name: "Search Engine Optimization",
    centerTitle: "Win the searches that drive revenue.",
    centerDescription:
      "We connect technical SEO, search-led content and authority building to grow qualified organic demand.",
    outcome: "Be found when buyers are ready.",
    description:
      "Technical SEO, search-led content and authority building designed to grow qualified organic demand.",
    image: "/service-seo.jpg",
    imageAlt: "Marketing team reviewing search and performance analytics",
    tags: ["Technical SEO", "Content strategy", "Reporting"],
  },
  {
    name: "Paid Media Advertising",
    centerTitle: "Make every campaign work harder.",
    centerDescription:
      "We align targeting, creative and landing pages so your ad spend creates more qualified opportunities.",
    outcome: "Turn ad spend into real pipeline.",
    description:
      "Focused Google and social campaigns built around better targeting, stronger creative and profitable conversion.",
    image: "/service-paid-media.jpg",
    imageAlt: "Digital marketing team planning a performance campaign",
    tags: ["Google Ads", "Paid social", "CRO"],
  },
  {
    name: "Social Media Marketing",
    centerTitle: "Stay relevant where customers scroll.",
    centerDescription:
      "We combine platform-native content, campaign direction and community growth into one consistent presence.",
    outcome: "Build attention people remember.",
    description:
      "Platform-native content, campaign direction and community growth that keep your brand relevant and active.",
    image: "/service-social-media.jpg",
    imageAlt: "Content creator producing a social media video with a ring light",
    tags: ["Content creation", "Campaigns", "Community"],
  },
];

export function OverviewSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slide = serviceSlides[activeSlide];

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % serviceSlides.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const showPrevious = () => {
    setActiveSlide((current) =>
      current === 0 ? serviceSlides.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % serviceSlides.length);
  };

  return (
    <div className="intro-panel-wrap" id="main-content">
      <section
        className="intro-panel"
        aria-label="Quality Marketing Solutions overview"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
        }}
      >
        <div className="service-menu">
          <p className="mini-label">Discover</p>
          <ul>
            <li>Growth strategy</li>
            {serviceSlides.map((item, index) => (
              <li key={item.name} className={index === activeSlide ? "is-active" : ""}>
                <button type="button" onClick={() => setActiveSlide(index)}>
                  {item.name}
                </button>
              </li>
            ))}
            <li>Web & conversion</li>
            <li>Analytics</li>
          </ul>
        </div>

        <div className="intro-copy">
          <div className="intro-copy-slide" key={slide.name}>
            <p className="mini-label">{slide.name}</p>
            <h2>{slide.centerTitle}</h2>
            <p>{slide.centerDescription}</p>
            <a className="small-link" href="#services">
              Explore this service <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div
          className="feature-card"
          role="region"
          aria-roledescription="carousel"
          aria-label="Digital marketing services"
        >
          <Image
            key={slide.image}
            className="feature-card-image"
            src={slide.image}
            alt={slide.imageAlt}
            fill
            sizes="(max-width: 720px) 100vw, 48vw"
          />
          <div className="feature-card-shade" aria-hidden="true" />

          <div className="feature-card-slide" key={slide.name}>
            <p className="mini-label">Core service {String(activeSlide + 1).padStart(2, "0")}</p>
            <h2>{slide.name}</h2>
            <p className="feature-outcome">{slide.outcome}</p>
            <p>{slide.description}</p>
            <ul className="feature-tags" aria-label={`${slide.name} capabilities`}>
              {slide.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            <a className="feature-link" href="#contact">
              Discuss your growth <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="feature-card-controls" aria-label="Choose a service slide">
            <button type="button" onClick={showPrevious} aria-label="Previous service">
              <span aria-hidden="true">←</span>
            </button>
            <div className="feature-dots">
              {serviceSlides.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  className={index === activeSlide ? "is-active" : ""}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show ${item.name}`}
                  aria-current={index === activeSlide ? "true" : undefined}
                />
              ))}
            </div>
            <button type="button" onClick={showNext} aria-label="Next service">
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
