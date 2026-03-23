import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <div className="page page-not-found">
      <main className="page-main">
        <div className="container">
          <section className="section not-found-content">
            <p className="eyebrow">404</p>
            <h1 className="display-title">Page not found</h1>
            <p className="text-body not-found-copy">
              The page you are looking for does not exist right now.
            </p>
            <Link className="button button-primary" to="/">
              Go Home
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
