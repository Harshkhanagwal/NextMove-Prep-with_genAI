import { Link, Outlet } from "react-router-dom";
import "./DashboardLayout.css";

function DashboardLayout() {
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
          </nav>
        </aside>

        <main className="dashboard-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
