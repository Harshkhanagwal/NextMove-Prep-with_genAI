import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../API/axios";

export const fetchInterviewReports = createAsyncThunk(
  "interviewReports/fetchInterviewReports",
  async (_, thunkAPI) => {
    try {
      const response = await API.get("interview-report");
      return response.data.reports;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch interview reports"
      );
    }
  }
);

export const fetchInterviewReportById = createAsyncThunk(
  "interviewReports/fetchInterviewReportById",
  async (reportId, thunkAPI) => {
    try {
      const response = await API.get(`interview-report/${reportId}`);
      return response.data.report;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch interview report"
      );
    }
  }
);

export const fetchDemoInterviewReport = createAsyncThunk(
  "interviewReports/fetchDemoInterviewReport",
  async (_, thunkAPI) => {
    try {
      const response = await API.get("interview-report/demo-json");
      return response.data.interviewReport;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to load demo interview report"
      );
    }
  }
);

export const generateInterviewReport = createAsyncThunk(
  "interviewReports/generateInterviewReport",
  async (formData, thunkAPI) => {
    try {
      const response = await API.post("interview-report/generate", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.interviewReport;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to generate interview report"
      );
    }
  }
);

const interviewReportsSlice = createSlice({
  name: "interviewReports",
  initialState: {
    reports: [],
    reportsLoading: false,
    reportsError: null,
    currentReport: null,
    currentReportLoading: false,
    currentReportError: null,
    generating: false,
    generateError: null,
  },
  reducers: {
    clearCurrentReport(state) {
      state.currentReport = null;
      state.currentReportError = null;
    },
    clearGenerateError(state) {
      state.generateError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInterviewReports.pending, (state) => {
        state.reportsLoading = true;
        state.reportsError = null;
      })
      .addCase(fetchInterviewReports.fulfilled, (state, action) => {
        state.reportsLoading = false;
        state.reports = action.payload;
      })
      .addCase(fetchInterviewReports.rejected, (state, action) => {
        state.reportsLoading = false;
        state.reportsError = action.payload;
      })
      .addCase(fetchInterviewReportById.pending, (state) => {
        state.currentReportLoading = true;
        state.currentReportError = null;
      })
      .addCase(fetchInterviewReportById.fulfilled, (state, action) => {
        state.currentReportLoading = false;
        state.currentReport = action.payload;
      })
      .addCase(fetchInterviewReportById.rejected, (state, action) => {
        state.currentReportLoading = false;
        state.currentReportError = action.payload;
      })
      .addCase(fetchDemoInterviewReport.pending, (state) => {
        state.currentReportLoading = true;
        state.currentReportError = null;
      })
      .addCase(fetchDemoInterviewReport.fulfilled, (state, action) => {
        state.currentReportLoading = false;
        state.currentReport = action.payload;
      })
      .addCase(fetchDemoInterviewReport.rejected, (state, action) => {
        state.currentReportLoading = false;
        state.currentReportError = action.payload;
      })
      .addCase(generateInterviewReport.pending, (state) => {
        state.generating = true;
        state.generateError = null;
      })
      .addCase(generateInterviewReport.fulfilled, (state, action) => {
        state.generating = false;
        state.currentReport = action.payload;
        state.reports = [action.payload, ...state.reports.filter((report) => report._id !== action.payload._id)];
      })
      .addCase(generateInterviewReport.rejected, (state, action) => {
        state.generating = false;
        state.generateError = action.payload;
      });
  },
});

export const { clearCurrentReport, clearGenerateError } = interviewReportsSlice.actions;
export default interviewReportsSlice.reducer;
