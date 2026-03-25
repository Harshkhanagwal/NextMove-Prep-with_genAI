import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import InterviewReportHero from "../../components/InterviewReportHero/InterviewReportHero";
import InterviewReportSections from "../../components/InterviewReportSections/InterviewReportSections";
import {
  clearCurrentReport,
  fetchDemoInterviewReport,
  fetchInterviewReportById,
} from "../../features/interviewReports/interviewReportsSlice";
import "./InterviewReportPage.css";
import Loader from "../../components/Loader/Loader";

function InterviewReportPage() {
  const dispatch = useDispatch();
  const { reportId } = useParams();
  const { currentReport: report, currentReportLoading: loading, currentReportError: error } =
    useSelector((state) => state.interviewReports);

  useEffect(() => {
    if (reportId) {
      dispatch(fetchInterviewReportById(reportId));
    } else {
      dispatch(fetchDemoInterviewReport());
    }

    return () => {
      dispatch(clearCurrentReport());
    };
  }, [dispatch, reportId]);

  if (loading) {
    return (
      <section className="interview-report-page">
        <Loader />
      </section>
    );
  }

  if (error) {
    return (
      <section className="interview-report-page">
        <div className="card report-page-status-card">
          <p className="eyebrow">Report Unavailable</p>
          <h1 className="section-title">We could not load the demo report.</h1>
          <p className="text-muted">{error}</p>
          <div className="report-page-status-actions">
            <Link className="button button-secondary" to="/dashboard">
              Back to Dashboard
            </Link>
            <button className="button button-primary" type="button" onClick={() => window.location.reload()}>
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (!report) {
    return (
      <section className="interview-report-page">
        <Loader />
      </section>
    );
  }

  return (
    <section className="interview-report-page">
      <InterviewReportHero report={report} />
      <InterviewReportSections report={report} />
     </section>
  );
}

export default InterviewReportPage;
