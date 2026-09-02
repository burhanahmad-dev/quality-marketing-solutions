import { BrandMark } from "../ui/BrandMark";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <BrandMark />
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
      <p className="copyright">
        © {new Date().getFullYear()} Quality Marketing Solutions. All rights reserved.
      </p>
    </footer>
  );
}
