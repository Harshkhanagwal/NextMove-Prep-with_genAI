import { Route, Routes } from "react-router-dom";
import DashboardHomePage from "../pages/DashboardHome/DashboardHomePage";
import GenerateReportPage from "../pages/GenerateReport/GenerateReportPage";
import HomePage from "../pages/Home/HomePage";
import InterviewReportPage from "../pages/InterviewReport/InterviewReportPage";
import LoginPage from "../pages/Login/LoginPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import SignupPage from "../pages/Signup/SignupPage";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <HomePage />
          </PublicRoute>
        }
      />

      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />

      <Route
        path="/signup"
        element={
          <PublicRoute>
            <SignupPage />
          </PublicRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardHomePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/generate-report"
        element={
          <ProtectedRoute>
            <GenerateReportPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/reports/demo"
        element={
          <ProtectedRoute>
            <InterviewReportPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/reports/:reportId"
        element={
          <ProtectedRoute>
            <InterviewReportPage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
