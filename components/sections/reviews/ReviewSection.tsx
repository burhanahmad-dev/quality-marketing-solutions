import { reviewPlatforms } from "./review-data";

export function ReviewSection() {
  return (
    <section className="reviews-section" id="reviews" aria-labelledby="reviews-title">
      <div className="reviews-heading">
        <div>
          <p className="mini-label">Independent reviews</p>
          <h2 id="reviews-title">Proof you can check.</h2>
        </div>
        <p>
          Verified ratings and review counts will be published only after each
          QMS profile has been confirmed.
        </p>
      </div>

      <div className="review-platform-shell">
        <div className="review-platforms" aria-label="Quality Marketing Solutions review profiles">
          {reviewPlatforms.map((platform) => (
            <article className={`review-platform review-${platform.tone}`} key={platform.name}>
              <div className="review-wordmark">
                <span className="review-mark" aria-hidden="true" />
                <strong>{platform.name}</strong>
              </div>
              <div className="review-stars" aria-hidden="true">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p>{platform.detail}</p>
              <span className="review-verification">Score shown after verification</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
