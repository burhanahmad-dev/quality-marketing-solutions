import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import { PointOfViewSection } from "../components/sections/about/PointOfViewSection";
import { ApproachSection } from "../components/sections/approach/ApproachSection";
import { ContactSection } from "../components/sections/contact/ContactSection";
import { FaqSection } from "../components/sections/faq/FaqSection";
import { HeroSection } from "../components/sections/hero/HeroSection";
import { DecisionSection } from "../components/sections/insights/DecisionSection";
import { OverviewSection } from "../components/sections/overview/OverviewSection";
import { ReviewSection } from "../components/sections/reviews/ReviewSection";
import { CaseStudiesSection } from "../components/sections/case-studies/CaseStudiesSection";

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <div className="site-shell">
        <SiteHeader />
        <HeroSection />
        <OverviewSection />

        <div className="paper-content">
          <ReviewSection />
          <CaseStudiesSection />
          <PointOfViewSection />
          <ApproachSection />
          <DecisionSection />
          <FaqSection />
        </div>

        <ContactSection />
        <SiteFooter />
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
