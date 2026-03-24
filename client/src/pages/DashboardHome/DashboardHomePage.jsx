import "./DashboardHomePage.css";

function DashboardHomePage() {
  return (
    <section className="card dashboard-home">
      <p className="eyebrow">Overview</p>
      <h2 className="section-title">Protected dashboard route is working.</h2>
      <p className="text-body dashboard-home-copy">
        This page only renders when the backend confirms your cookie-based session is valid.
        You can now add nested protected pages here the same way as your sample structure.
      </p>
    </section>
  );
}

export default DashboardHomePage;
