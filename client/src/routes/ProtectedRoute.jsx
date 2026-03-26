import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";

function ProtectedRoute({ children }) {
  const { isAuthenticated, checkingAuth } = useSelector((state) => state.auth);

  if (checkingAuth) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
