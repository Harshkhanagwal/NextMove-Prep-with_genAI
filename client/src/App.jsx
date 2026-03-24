import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMe } from "./features/auth/authSlice";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return <AppRoutes />;
}

export default App;
