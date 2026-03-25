import { Link } from "react-router-dom";
import "./SignupPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../features/auth/authSlice";
import Loader from "../../components/Loader/Loader";

function SignupPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, loading, error } = useSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signupUser({ username, email, password }));
  };

  return (
    <>
      {loading ? <Loader /> : null}
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

                  <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="field-list">
                      <label className="field" htmlFor="signup-name">
                        <span className="field-label">Full Name</span>
                        <input
                          className="input"
                          id="signup-name"
                          type="text"
                          placeholder="Your full name"
                          value={username}
                          onChange={(event) => setUsername(event.target.value)}
                        />
                      </label>

                      <label className="field" htmlFor="signup-email">
                        <span className="field-label">Email</span>
                        <input
                          className="input"
                          id="signup-email"
                          type="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </label>

                      <label className="field" htmlFor="signup-password">
                        <span className="field-label">Password</span>
                        <input
                          className="input"
                          id="signup-password"
                          type="password"
                          placeholder="Create a strong password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                        />
                      </label>
                    </div>

                    <p className="text-muted auth-meta">
                      By signing up, you agree to the Terms of Service and Privacy Policy.
                    </p>

                    <button className="button button-primary" type="submit">
                      {loading ? "Creating..." : "Create Account"}
                    </button>

                    {error ? <p className="form-error">{error}</p> : null}
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
    </>
  );
}

export default SignupPage;
