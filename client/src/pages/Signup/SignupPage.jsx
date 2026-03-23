import { Link } from "react-router-dom";
import "./SignupPage.css";

function SignupPage() {
  return (
    <div className="page page-signup auth-page">
      <main className="page-main">
        <div className="container">
          <section className="auth-shell">
            <div className="card auth-hero signup-hero">
              <div className="auth-hero-content">
                <p className="eyebrow">Create Account</p>
                <h1 className="display-title signup-title">Start your resume workspace in minutes.</h1>
                <p className="text-body signup-copy">
                  Build a profile, save multiple resume versions, and keep your job search
                  materials in one place.
                </p>
              </div>

              <div className="auth-hero-footer">
                <p className="text-muted auth-meta">
                  A clean setup now makes future editing, exporting, and customizing much easier.
                </p>
              </div>
            </div>

            <div className="card auth-panel">
              <div className="auth-panel-inner">
                <div>
                  <p className="eyebrow">Sign Up</p>
                  <h2 className="section-title">Create your account</h2>
                </div>

                <form className="auth-form">
                  <div className="field-list">
                    <label className="field" htmlFor="signup-name">
                      <span className="field-label">Full Name</span>
                      <input className="input" id="signup-name" type="text" placeholder="Your full name" />
                    </label>

                    <label className="field" htmlFor="signup-email">
                      <span className="field-label">Email</span>
                      <input className="input" id="signup-email" type="email" placeholder="you@example.com" />
                    </label>

                    <label className="field" htmlFor="signup-password">
                      <span className="field-label">Password</span>
                      <input
                        className="input"
                        id="signup-password"
                        type="password"
                        placeholder="Create a strong password"
                      />
                    </label>
                  </div>

                  <p className="text-muted auth-meta">
                    By signing up, you agree to the Terms of Service and Privacy Policy.
                  </p>

                  <button className="button button-primary" type="submit">
                    Create Account
                  </button>
                </form>

                <p className="text-body auth-switch">
                  Already have an account?{" "}
                  <Link className="link-button" to="/login">
                    Login here
                  </Link>
                </p>

                <Link className="link-button signup-home-link" to="/">
                  Back to Home
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SignupPage;
