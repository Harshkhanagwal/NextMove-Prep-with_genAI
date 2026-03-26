const mongoose = require("mongoose");

// sub Schema
const technicalQuestionSchema = new mongoose.Schema({
    question : {
        type: String
    },
    answer : {
        type: String
    },
    intention : {
        type : String
    }
})
const BehavioralQuestionSchema = new mongoose.Schema({
    question : {
        type: String
    },
    answer : {
        type: String
    },
    intention : {
        type : String
    }
})
const skillGapSchema = new mongoose.Schema({
    skill : {
        type: String
    },
    severity : {
        type: String,
        enum : ["low", "medium", "high"]
    }
})

const preparationPlanSchema = new mongoose.Schema({
    day : {
        type: Number
    },
    focus : {
        type : String
    },
    tasks : [{
        type : String
    }]
})


const interviewReportSchema = new mongoose.Schema({
    jobDescription : {
        required :true,
        type : String
    },
    resumeTxt : {
        type: String,
        required: true
    },
    selfDescription : {
        type: String,
    },
    matchScore : {
        type: Number
    },
    technicalQuestions : [technicalQuestionSchema],
    behavioralQuestions : [BehavioralQuestionSchema],
    skillGaps : [skillGapSchema],
    preparationPlan : [preparationPlanSchema],
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
})


const InterviewReport = mongoose.models.InterviewReport || mongoose.model("InterviewReport", interviewReportSchema)

module.exports = InterviewReport;
