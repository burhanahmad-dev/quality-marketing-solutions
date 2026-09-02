"use client";

import { useEffect, useRef } from "react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const honorMotionPreference = () => {
      if (reducedMotion.matches) videoRef.current?.pause();
    };
    const frame = window.requestAnimationFrame(honorMotionPreference);
    reducedMotion.addEventListener("change", honorMotionPreference);

    return () => {
      window.cancelAnimationFrame(frame);
      reducedMotion.removeEventListener("change", honorMotionPreference);
    };
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-marketing-process-poster.jpg"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/hero-marketing-process.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-kicker">Independent digital growth agency</p>
        <h1 id="hero-title">Turn clicks into customers.</h1>
        <ul className="hero-service-list" aria-label="Core services">
          <li>Digital Marketing</li>
          <li>SEO</li>
          <li>Social Media Marketing</li>
        </ul>
        <p className="hero-description">
          We build connected SEO, paid media and social campaigns that turn
          attention into qualified leads, stronger sales and measurable growth.
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
    </section>
  );
}
