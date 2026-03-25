import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/auth/authSlice";
import DashboardActionPanel from "../../components/DashboardActionPanel/DashboardActionPanel";
import DashboardFeaturesGrid from "../../components/DashboardFeaturesGrid/DashboardFeaturesGrid";
import DashboardHomeHero from "../../components/DashboardHomeHero/DashboardHomeHero";
import PreviousReportsSection from "../../components/PreviousReportsSection/PreviousReportsSection";
import "./DashboardHomePage.css";

function DashboardHomePage() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const displayName = user?.username || user?.name || "there";
  const displayEmail = user?.email || "Signed in user";

  return (
    <section className="dashboard-home-page">
      <DashboardHomeHero
        displayEmail={displayEmail}
        displayName={displayName}
        onLogout={() => dispatch(logoutUser())}
      />

      <section className="dashboard-home-grid">
        <DashboardActionPanel />
        <DashboardFeaturesGrid />
      </section>

      <PreviousReportsSection />
    </section>
  );
}

export default DashboardHomePage;
