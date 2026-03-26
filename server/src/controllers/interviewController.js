const generateInterviewReport = require("../services/AI.service.js");
const {
  tempJobDescription,
  tempResume,
  tempSelfDescription,
} = require("../../temp/testdata.js");
const demoInterviewReportResponse = require("../../temp/demoInterviewReport.js");
const InterviewReport = require("../models/interviewReport.js");
const { PDFParse } = require("pdf-parse");

const createInterviewReport = async (req, res) => {
  try {
    const { selfDescription = "", jobDescription = "" } = req.body;

    if (!req.file?.buffer) {
      return res.status(400).json({
        message: "Resume PDF file is required",
      });
    }

    if (!jobDescription.trim()) {
      return res.status(400).json({
        message: "Job description is required",
      });
    }

    const parser = new PDFParse({ data: req.file.buffer });
    const pdfData = await parser.getText();
    await parser.destroy();
    const resumeContent = pdfData.text;

    if (!resumeContent.trim()) {
      return res.status(400).json({
        message: "Unable to extract text from resume PDF",
      });
    }

    const interviewReportByAI = await generateInterviewReport({
      resume: resumeContent,
      selfDescription,
      jobDescription,
    });

    if (!interviewReportByAI) {
      return res.status(500).json({
        message: "AI failed to generate report",
      });
    }

    const interviewReport = await InterviewReport.create({
      user: req.user.id,
      resumeTxt: resumeContent,
      selfDescription,
      jobDescription,
      ...interviewReportByAI,
    });

    return res.status(201).json({
      success: true,
      message: "Report generated successfully",
      interviewReport,
    });

  } catch (error) {
    console.error("error " + error); 

    return res.status(500).json({
      message: error.message || "Failed to generate interview report",
    });
  }
};

const getInterviewReports = async (req, res) => {
  try {
    const reports = await InterviewReport.find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .select("-resumeTxt -selfDescription");

    return res.status(200).json({
      success: true,
      count: reports.length,
      reports,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Failed to fetch interview reports",
    });
  }
};

const getInterviewReportById = async (req, res) => {
  try {
    const report = await InterviewReport.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!report) {
      return res.status(404).json({
        message: "Interview report not found",
      });
    }

    return res.status(200).json({
      success: true,
      report,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Failed to fetch interview report",
    });
  }
};

const deleteInterviewReport = async (req, res) => {
  try {
    const report = await InterviewReport.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!report) {
      return res.status(404).json({
        message: "Interview report not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Interview report deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Failed to delete interview report",
    });
  }
};

const getDemoInterviewReport = async (_req, res) => {
  try {
    const report = await generateInterviewReport({
      resume: tempResume,
      selfDescription: tempSelfDescription,
      jobDescription: tempJobDescription,
    });

    return res.status(200).json({
      success: true,
      report,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Failed to generate demo interview report",
    });
  }
};

const getDemoInterviewReportJson = async (_req, res) => {
  return res.status(200).json({
    success: true,
    interviewReport: demoInterviewReportResponse.interviewReport,
  });
};

module.exports = {
  createInterviewReport,
  deleteInterviewReport,
  getDemoInterviewReport,
  getDemoInterviewReportJson,
  getInterviewReportById,
  getInterviewReports,
};
