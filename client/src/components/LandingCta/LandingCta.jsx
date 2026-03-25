import { Link } from "react-router-dom";
import "./LandingCta.css";

function LandingCta() {
  return (
    <section className="card landing-cta">
      <div>
        <p className="eyebrow">Start Here</p>
        <h2 className="section-title landing-cta-title">Build your first report and see what to prepare next.</h2>
        <p className="text-body landing-cta-text">
          Create an account, upload your resume, and let the app turn role requirements into a
          practical interview prep plan.
        </p>
      </div>

      <div className="landing-cta-actions">
        <Link className="button button-primary" to="/signup">
          Create Free Account
        </Link>
        <Link className="button button-secondary" to="/login">
          I Already Have An Account
        </Link>
      </div>
    </section>
  );
}

export default LandingCta;
