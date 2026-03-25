import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchInterviewReports } from "../../features/interviewReports/interviewReportsSlice";
import Loader from "../Loader/Loader";
import "./PreviousReportsSection.css";

const getReportTitle = (report) =>
  report?.jobDescription?.split("\n")[0]?.trim() || "Interview report";

const getReportSummary = (report) => {
  if (report?.skillGaps?.length) {
    return `Top gap: ${report.skillGaps[0].skill}`;
  }

  if (report?.technicalQuestions?.length || report?.behavioralQuestions?.length) {
    return `${report.technicalQuestions?.length || 0} technical and ${
      report.behavioralQuestions?.length || 0
    } behavioral prompts generated.`;
  }

  return "Saved interview prep report ready for review.";
};

function PreviousReportsSection() {
  const dispatch = useDispatch();
  const { reports, reportsLoading, reportsError } = useSelector((state) => state.interviewReports);

  useEffect(() => {
    dispatch(fetchInterviewReports());
  }, [dispatch]);

  return (
    <section className="previous-reports-section">
      {reportsLoading ? <Loader /> : null}
      <div className="previous-reports-header">
        <div>
          <p className="eyebrow">History</p>
          <h3 className="section-title previous-reports-title">Previous reports</h3>
        </div>
        <p className="text-muted previous-reports-copy">
          Your latest interview prep reports will appear here for quick review and comparison.
        </p>
      </div>

      {reportsError ? <div className="card previous-reports-status">{reportsError}</div> : null}

      {!reportsLoading && !reportsError && reports.length === 0 ? (
        <div className="card previous-reports-status">
          No reports yet. Generate your first interview report to start building history.
        </div>
      ) : null}

      {!reportsLoading && !reportsError && reports.length > 0 ? (
        <div className="previous-reports-grid">
          {reports.map((report) => (
            <article className="card previous-report-card" key={report._id}>
            <div className="previous-report-top">
              <div>
                <p className="previous-report-role">{getReportTitle(report)}</p>
                <p className="text-muted previous-report-company">Saved interview report</p>
              </div>
              <div className="previous-report-score">
                <span>{report.matchScore ?? "--"}%</span>
              </div>
            </div>

              <p className="text-muted previous-report-date">Ready to review</p>
              <p className="text-body previous-report-summary">{getReportSummary(report)}</p>

              <div className="previous-report-actions">
                <Link className="button button-secondary previous-report-button" to={`/reports/${report._id}`}>
                  View Report
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default PreviousReportsSection;
