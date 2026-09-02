"use client";

import { useState } from "react";
import { BrandMark } from "../ui/BrandMark";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Quality Marketing Solutions home">
        <BrandMark />
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
  );
}
