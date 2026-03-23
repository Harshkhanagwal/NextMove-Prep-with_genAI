import { Navigate } from "react-router-dom";
import { getAuthToken } from "./auth";

function PublicRoute({ children }) {
  const token = getAuthToken();

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default PublicRoute;
