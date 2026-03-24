import { Link } from "react-router-dom";
import "./LoginPage.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { loginUser } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPasswor ] = useState("")

  const dispatch = useDispatch();
  const { isAuthenticated, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard"); 
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({email, password}));
  };

  return (
    <div className="page page-login auth-page">
      <main className="page-main">
        <div className="container">
          <section className="auth-shell">
            <div className="card auth-hero login-hero">
              <div className="auth-hero-content">
                <p className="eyebrow">Welcome Back</p>
                <h1 className="display-title login-title">Sign in to continue building.</h1>
                <p className="text-body login-copy">
                  Access your resumes, update details quickly, and keep your applications
                  organized from one clean workspace.
                </p>
              </div>

              <div className="auth-hero-footer">
                <p className="text-muted auth-meta">
                  Keep your profile current and your best resume ready whenever a new role
                  appears.
                </p>
              </div>
            </div>

            <div className="card auth-panel">
              <div className="auth-panel-inner">
                <div>
                  <p className="eyebrow">Login</p>
                  <h2 className="section-title">Enter your account</h2>
                </div>

                <form  onSubmit={handleSubmit} className="auth-form">
                  <div className="field-list">
                    <label className="field" htmlFor="login-email">
                      <span className="field-label">Email</span>
                      <input className="input" id="login-email" onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="you@example.com" />
                    </label>

                    <label className="field" htmlFor="login-password">
                      <span className="field-label">Password</span>
                      <input
                        className="input"
                        id="login-password"
                        type="password"
                        onChange={(e)=>setPasswor(e.target.value)}
                        placeholder="Enter your password"
                      />
                    </label>
                  </div>

                  <div className="auth-row">
                    <label className="auth-checkbox" htmlFor="remember-me">
                      <input id="remember-me" type="checkbox" />
                      <span>Remember me</span>
                    </label>

                    <button className="link-button" type="button">
                      Forgot password?
                    </button>
                  </div>

                  <button className="button button-primary" type="submit">
                    {loading ? "Loading...." : "Login"}
                  </button>

                  {error ? <p className="form-error">{error}</p> : null}
                </form>

                <p className="text-body auth-switch">
                  Don&apos;t have an account?{" "}
                  <Link className="link-button" to="/signup">
                    Create one
                  </Link>
                </p>

                <Link className="link-button login-home-link" to="/">
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

export default LoginPage;
