import { Link } from "react-router-dom";
import "./DashboardActionPanel.css";

function DashboardActionPanel() {
  return (
    <div className="card dashboard-home-primary">
      <p className="eyebrow">Main Action</p>
      <h3 className="section-title dashboard-home-section-title">Generate interview report</h3>
      <p className="text-body dashboard-home-copy-text">
        Upload your resume, add your self summary and job description, and let the app build a
        more structured prep report for your next interview.
      </p>
      <Link className="button button-primary dashboard-home-cta" to="/generate-report">
        Start Generating
      </Link>
    </div>
  );
}

export default DashboardActionPanel;
