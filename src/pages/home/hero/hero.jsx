
import "./hero.css";

function Hero() {
  return (
    <section className="agora-hero" id="home">
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="eyebrow-line"></span>
          A SPACE FOR GREAT IDEAS
        </div>

        <h1>
          Question
          <br />
          Everything.
          <br />
          <span>Understand More.</span>
        </h1>

        <p className="hero-description">
          Explore the ideas that shaped humanity.
          Discover different philosophies, challenge
          your beliefs, and find your own perspective
          on life.
        </p>

        <div className="hero-actions">
          <a href="#philosophy" className="hero-btn-primary">
            Explore Philosophy <span>↗</span>
          </a>

          <a href="#discussion" className="hero-btn-secondary">
            Join the Discussion
          </a>
        </div>

        <div className="hero-footer">
          <span className="footer-dot"></span>
          THINK DEEPLY. LIVE MEANINGFULLY.
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="visual-glow"></div>
        <div className="visual-orbit orbit-one"></div>
        <div className="visual-orbit orbit-two"></div>
        <div className="visual-orbit orbit-three"></div>

        <div className="visual-center">
          <span className="center-symbol">φ</span>
          <span className="center-caption">THE PURSUIT OF WISDOM</span>
        </div>

        <div className="floating-word word-one">EXISTENCE</div>
        <div className="floating-word word-two">TRUTH</div>
        <div className="floating-word word-three">MEANING</div>

        {/* <div className="visual-coordinate">38° 32' N — 22° 37' E</div> */}
      </div>
    </section>
  );
}

export default Hero;
