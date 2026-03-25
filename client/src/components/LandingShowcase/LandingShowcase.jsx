import "./LandingShowcase.css";

function LandingShowcase() {
  return (
    <section className="landing-showcase">
      <div className="card landing-showcase-report">
        <p className="eyebrow">Inside The Report</p>
        <h2 className="section-title landing-showcase-title">See the outcome before you sign up.</h2>

        <div className="landing-showcase-grid">
          <article className="landing-showcase-card landing-showcase-score">
            <span className="landing-showcase-kicker">Match score</span>
            <strong>92%</strong>
            <p className="text-muted">
              A directional fit signal that helps you understand how closely your profile aligns.
            </p>
          </article>

          <article className="landing-showcase-card">
            <span className="landing-showcase-kicker">Questions</span>
            <ul className="landing-showcase-list">
              <li>Technical prompts based on your stack and resume.</li>
              <li>Behavioral questions tied to experience and collaboration.</li>
              <li>Answer guidance with intent so practice stays focused.</li>
            </ul>
          </article>

          <article className="landing-showcase-card">
            <span className="landing-showcase-kicker">Roadmap</span>
            <ul className="landing-showcase-list">
              <li>Priority skill gaps to revise first.</li>
              <li>A compact day-by-day preparation plan.</li>
              <li>Saved reports you can revisit later from the dashboard.</li>
            </ul>
          </article>
        </div>
      </div>

      <div className="card landing-showcase-history">
        <p className="eyebrow">Saved Reports</p>
        <h3 className="section-title landing-history-title">Keep previous reports for comparison.</h3>

        <div className="landing-history-list">
          <article className="landing-history-item">
            <div>
              <strong>MERN Stack Developer</strong>
              <p className="text-muted">Acme Labs</p>
            </div>
            <span>84%</span>
          </article>

          <article className="landing-history-item">
            <div>
              <strong>Frontend Engineer</strong>
              <p className="text-muted">Bright UI</p>
            </div>
            <span>76%</span>
          </article>

          <article className="landing-history-item">
            <div>
              <strong>Full Stack Developer</strong>
              <p className="text-muted">Nova Tech</p>
            </div>
            <span>81%</span>
          </article>
        </div>
      </div>
    </section>
  );
}

export default LandingShowcase;
