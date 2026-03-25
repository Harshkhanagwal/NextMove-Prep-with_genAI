import "./GenerateReportHero.css";

function GenerateReportHero() {
  return (
    <header className="card report-hero">
      <div className="report-hero-copy">
        <p className="eyebrow">Interview Intelligence</p>
        <h2 className="display-title report-hero-title">Generate your interview report in one focused view.</h2>
        <p className="text-body report-hero-text">
          A compact workspace for uploading your resume, adding role context, and preparing a
          high-signal interview report without bouncing around a dashboard.
        </p>
      </div>

      <div className="report-flow" aria-label="Interview report flow">
        <div className="report-flow-step">
          <span className="report-flow-number">01</span>
          <div>
            <strong>Upload Resume</strong>
            <p className="text-muted">PDF text gets extracted.</p>
          </div>
        </div>

        <span className="report-flow-arrow" aria-hidden="true">
          →
        </span>

        <div className="report-flow-step">
          <span className="report-flow-number">02</span>
          <div>
            <strong>Add Self Summary</strong>
            <p className="text-muted">Your background adds context.</p>
          </div>
        </div>

        <span className="report-flow-arrow" aria-hidden="true">
          →
        </span>

        <div className="report-flow-step">
          <span className="report-flow-number">03</span>
          <div>
            <strong>Paste Job Description</strong>
            <p className="text-muted">Role expectations become the benchmark.</p>
          </div>
        </div>

        <span className="report-flow-arrow" aria-hidden="true">
          →
        </span>

        <div className="report-flow-step report-flow-step-accent">
          <span className="report-flow-number">AI</span>
          <div>
            <strong>AI Analyzes Fit</strong>
            <p className="text-muted">Signals, gaps, and likely interview focus.</p>
          </div>
        </div>

        <span className="report-flow-arrow" aria-hidden="true">
          →
        </span>

        <div className="report-flow-step">
          <span className="report-flow-number">04</span>
          <div>
            <strong>Report Generated</strong>
            <p className="text-muted">Match score, questions, and prep plan.</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default GenerateReportHero;
