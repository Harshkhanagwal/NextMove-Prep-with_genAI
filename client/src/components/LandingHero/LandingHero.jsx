import { Link } from "react-router-dom";
import "./LandingHero.css";

const heroStats = [
  { label: "Inputs", value: "Resume + role context" },
  { label: "Output", value: "Questions, score, roadmap" },
  { label: "Built for", value: "Results-focused interview prep" },
];

function LandingHero() {
  return (
    <section className="landing-hero">
      <header className="landing-topbar">
        <Link className="landing-brand" to="/">
          NextMove Prep
        </Link>

        <nav className="landing-nav">
          <Link className="button button-secondary landing-nav-link" to="/login">
            Login
          </Link>
          <Link className="button button-primary landing-nav-link" to="/signup">
            Get Started
          </Link>
        </nav>
      </header>

      <div className="landing-hero-grid">
        <div className="landing-hero-copy">
          <p className="eyebrow">From Resume to Results, Powered by AI</p>
          <h1 className="display-title landing-hero-title">
            Turn your resume and target role into your next move.
          </h1>
          <p className="text-body landing-hero-text">
            NextMove Prep helps you upload your resume, map it against the job description, and
            generate an AI-powered report with match score, likely interview questions, skill gaps,
            and a practical path to better results.
          </p>

          <div className="landing-hero-actions">
            <Link className="button button-primary" to="/signup">
              Create Account
            </Link>
            <Link className="button button-secondary" to="/login">
              View Dashboard
            </Link>
          </div>

          <div className="landing-hero-stats">
            {heroStats.map((item) => (
              <article className="landing-hero-stat" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </div>

        <div className="card landing-hero-panel">
          <div className="landing-panel-header">
            <div>
              <p className="eyebrow landing-panel-eyebrow">Report Preview</p>
              <h2 className="section-title landing-panel-title">One workspace for the whole prep journey</h2>
            </div>
            <span className="landing-panel-badge">Live concept</span>
          </div>

          <div className="landing-panel-flow">
            <div className="landing-panel-step">
              <span>01</span>
              <div>
                <strong>Upload resume</strong>
                <p className="text-muted">Parse your profile and extract role-relevant experience.</p>
              </div>
            </div>
            <div className="landing-panel-step">
              <span>02</span>
              <div>
                <strong>Add target role context</strong>
                <p className="text-muted">Use self summary and job description to set direction.</p>
              </div>
            </div>
            <div className="landing-panel-step">
              <span>03</span>
              <div>
                <strong>Generate interview report</strong>
                <p className="text-muted">Get fit score, interview signals, skill gaps, and your next best moves.</p>
              </div>
            </div>
          </div>

          <div className="landing-panel-preview">
            <div className="landing-preview-score">
              <span className="landing-preview-score-label">Match Score</span>
              <strong>92%</strong>
            </div>
            <div className="landing-preview-metrics">
              <div>
                <span>Questions</span>
                <strong>8 curated prompts</strong>
              </div>
              <div>
                <span>Roadmap</span>
                <strong>5-day prep plan</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingHero;
