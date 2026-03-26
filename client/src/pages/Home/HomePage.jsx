import LandingCta from "../../components/LandingCta/LandingCta";
import LandingFeatures from "../../components/LandingFeatures/LandingFeatures";
import Footer from "../../components/Footer/Footer";
import LandingHero from "../../components/LandingHero/LandingHero";
import LandingShowcase from "../../components/LandingShowcase/LandingShowcase";
import LandingWorkflow from "../../components/LandingWorkflow/LandingWorkflow";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="page page-home">
      <main className="page-main home-main">
        <div className="container home-container">
          <LandingHero />
          <LandingFeatures />
          <LandingWorkflow />
          <LandingShowcase />
          <LandingCta />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
