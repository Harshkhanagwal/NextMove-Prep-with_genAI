import { Link } from "react-router-dom";
import "./DashboardLayout.css";
import { useDispatch } from "react-redux";
import Footer from "../../components/Footer/Footer";
import { logoutUser } from "../../features/auth/authSlice";

function DashboardLayout({ children }) {
  const dispatch = useDispatch();

  return (
    <div className="page page-dashboard">
      <div className="dashboard-shell">
        <aside className="card dashboard-sidebar">
          <div className="dashboard-brand">
            <p className="eyebrow">NextMove Prep</p>
            <h1 className="section-title">From Resume to Results, Powered by AI</h1>
          </div>

          <nav className="dashboard-nav" aria-label="Dashboard navigation">
            <Link className="dashboard-link" to="/dashboard">
              Overview
            </Link>
            <Link className="dashboard-link" to="/generate-report">
              Generate Report
            </Link>
            <button className="dashboard-link dashboard-link-button" type="button" onClick={() => dispatch(logoutUser())}>
              Logout
            </button>
          </nav>
        </aside>

        <div className="dashboard-main">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
