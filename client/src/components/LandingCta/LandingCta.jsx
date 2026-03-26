import { Link } from "react-router-dom";
import "./LandingCta.css";

function LandingCta() {
  return (
    <section className="card landing-cta">
      <div>
        <p className="eyebrow">Start Here</p>
        <h2 className="section-title landing-cta-title">Start with NextMove Prep and turn your resume into a smarter next step.</h2>
        <p className="text-body landing-cta-text">
          Create an account, upload your resume, and let NextMove Prep convert role requirements
          into a practical AI-powered interview plan.
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
