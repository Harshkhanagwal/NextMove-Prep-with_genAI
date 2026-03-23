import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="page page-home">
      <main className="page-main">
        <div className="container">
          <section className="section home-hero">
            <div className="home-content">
              <p className="eyebrow">ResumeFlow</p>
              <h1 className="display-title">Home Page</h1>
              <p className="text-body home-copy">
                This is the starter home page. We can design it properly in the next step.
              </p>
              <div className="home-actions">
                <Link className="button button-primary" to="/login">
                  Login
                </Link>
                <Link className="button button-secondary" to="/signup">
                  Sign Up
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
