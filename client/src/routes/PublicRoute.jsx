import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";

function PublicRoute({ children }) {
  const { isAuthenticated, checkingAuth } = useSelector((state) => state.auth);

  if (checkingAuth) {
    return <Loader />;
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default PublicRoute;
