import "./DashboardHomeHero.css";

function DashboardHomeHero({ displayName, displayEmail, onLogout }) {
  return (
    <header className="card dashboard-home-hero">
      <div className="dashboard-home-copy">
        <p className="eyebrow">NextMove Prep</p>
        <h2 className="display-title dashboard-home-title">Hi {displayName}, ready to prepare smarter?</h2>
        <p className="text-body dashboard-home-subtitle">
          From Resume to Results, Powered by AI. This workspace turns your resume and target role
          into a focused interview preparation flow.
        </p>
      </div>

      <div className="dashboard-home-user">
        <div className="dashboard-user-avatar" aria-hidden="true">
          {displayName.slice(0, 1).toUpperCase()}
        </div>
        <div className="dashboard-user-meta">
          <strong>{displayName}</strong>
          <span className="text-muted">{displayEmail}</span>
        </div>
        <button className="button button-secondary dashboard-logout" type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}

export default DashboardHomeHero;
