import generateInterviewReport from "../services/AI.service.js";
import {
  tempJobDescription,
  tempResume,
  tempSelfDescription,
} from "../../temp/testdata.js";

const createInterviewReport = async (req, res) => {
  try {
    const { resume, selfDescription = "", jobDescription } = req.body;

    if (!resume?.trim()) {
      return res.status(400).json({
        message: "Resume is required",
      });
    }

    if (!jobDescription?.trim()) {
      return res.status(400).json({
        message: "Job description is required",
      });
    }

    const report = await generateInterviewReport({
      resume,
      selfDescription,
      jobDescription,
    });

    return res.status(200).json({
      success: true,
      report,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Failed to generate interview report",
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

export { createInterviewReport, getDemoInterviewReport };
