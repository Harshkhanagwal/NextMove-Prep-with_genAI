import { Link } from "react-router-dom";
import "./InterviewReportHero.css";

function InterviewReportHero({ report }) {
  const headline = report?.jobDescription?.split("\n")[0] || "Interview Report";
  const matchScore = report?.matchScore || 0;
  const radius = 84;
  const circumference = Math.PI * radius;
  const progressOffset = circumference - (circumference * Math.max(0, Math.min(matchScore, 100))) / 100;

  return (
    <header className="card interview-report-hero">
      <div className="interview-report-hero-top">
        <div className="interview-report-hero-copy">
          <p className="eyebrow">Interview Report</p>
          <h1 className="display-title interview-report-title">{headline}</h1>
          <p className="text-body interview-report-subtitle">
            A focused prep brief built from your resume, role context, and job description so you
            can see what to revise before the real interview.
          </p>

          <div className="interview-report-hero-actions">
            <Link className="button button-secondary" to="/dashboard">
              Back to Dashboard
            </Link>
            <Link className="button button-primary" to="/generate-report">
              Generate Another
            </Link>
          </div>
        </div>

        <div className="interview-report-score-card">
          <span className="interview-report-score-label">Match Score</span>
          <div className="interview-report-score-meter">
            <svg
              aria-hidden="true"
              className="interview-report-score-svg"
              viewBox="0 0 220 140"
            >
              <path
                className="interview-report-score-track"
                d="M 26 114 A 84 84 0 0 1 194 114"
                pathLength={circumference}
              />
              <path
                className="interview-report-score-progress"
                d="M 26 114 A 84 84 0 0 1 194 114"
                pathLength={circumference}
                strokeDasharray={circumference}
                strokeDashoffset={progressOffset}
              />
            </svg>
            <div className="interview-report-score-scale" aria-hidden="true">
              <span>0</span>
              <span>100</span>
            </div>
            <div className="interview-report-score-center">
              <strong className="interview-report-score-value">{matchScore}%</strong>
              <span className="interview-report-score-caption">Role fit</span>
            </div>
          </div>
          <p className="text-muted interview-report-score-copy">
            This is a quick directional fit signal based on role alignment and prep readiness.
          </p>
        </div>
      </div>
    </header>
  );
}

export default InterviewReportHero;
