import { Link } from "react-router-dom";
import "./DashboardLayout.css";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../features/auth/authSlice";

function DashboardLayout({ children }) {
  const dispatch = useDispatch();

  return (
    <div className="page page-dashboard">
      <div className="dashboard-shell">
        <aside className="card dashboard-sidebar">
          <div className="dashboard-brand">
            <p className="eyebrow">Protected Area</p>
            <h1 className="section-title">Dashboard</h1>
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

        <main className="dashboard-main">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
