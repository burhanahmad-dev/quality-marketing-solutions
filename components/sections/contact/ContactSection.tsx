import { BrandMark } from "../../ui/BrandMark";

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-mark" aria-hidden="true"><BrandMark /></div>
      <p className="mini-label">Ready when you are</p>
      <h2 id="contact-title">Let&apos;s build your<br />next growth chapter.</h2>
      <p>
        Tell us what you are trying to grow and where progress feels stuck. We
        will bring a clear point of view on what to do next.
      </p>
      <a
        className="button button-accent contact-button"
        href="mailto:hello@qualitymarketingsolutions.com?subject=Let%27s%20build%20a%20growth%20plan"
      >
        hello@qualitymarketingsolutions.com <span aria-hidden="true">↗</span>
      </a>
      <small>Discovery call · Clear priorities · No hard sell</small>
    </section>
  );
}
