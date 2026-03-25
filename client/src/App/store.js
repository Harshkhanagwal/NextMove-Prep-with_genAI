import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import interviewReportsReducer from "../features/interviewReports/interviewReportsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    interviewReports: interviewReportsReducer,
  },
});
