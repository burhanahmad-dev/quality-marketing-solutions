import { BrandMark } from "../../ui/BrandMark";

export function PointOfViewSection() {
  return (
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
        <BrandMark compact />
        <p>
          We bring strategy, creative and performance into the same room, so
          your brand feels consistent from first impression to final action.
        </p>
      </div>
    </section>
  );
}
