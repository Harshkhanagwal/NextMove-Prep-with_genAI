import { useState } from "react";
import "./InterviewReportSections.css";

function InterviewReportSections({ report }) {
  const technicalQuestions = report?.technicalQuestions || [];
  const behavioralQuestions = report?.behavioralQuestions || [];
  const preparationPlan = report?.preparationPlan || [];
  const skillGaps = report?.skillGaps || [];
  const selfDescription = report?.selfDescription || "No self description available.";
  const jobDescription = report?.jobDescription || "No job description available.";
  const topTechnicalQuestions = technicalQuestions.slice(0, 3);
  const topBehavioralQuestions = behavioralQuestions.slice(0, 3);
  const [activeTab, setActiveTab] = useState("technical");

  const tabs = [
    {
      id: "technical",
      label: "Technical Questions",
      count: technicalQuestions.length,
    },
    {
      id: "behavioral",
      label: "Behavioral Questions",
      count: behavioralQuestions.length,
    },
    {
      id: "prep",
      label: "Preparation Plan",
      count: preparationPlan.length,
    },
  ];

  return (
    <div className="interview-report-layout">
      <div className="interview-report-grid">
        <div className="interview-report-main">
          <section className="card interview-report-section">
            <div className="interview-report-tabs-head">
              <div>
                <p className="eyebrow">Practice Workspace</p>
                <h2 className="section-title interview-report-section-title">
                  Switch between questions and prep
                </h2>
              </div>
              <div className="interview-report-tabs">
                {tabs.map((tab) => (
                  <button
                    className={`interview-report-tab ${activeTab === tab.id ? "is-active" : ""}`}
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span>{tab.label}</span>
                    <strong>{tab.count}</strong>
                  </button>
                ))}
              </div>
            </div>

            {activeTab === "technical" && (
              <div className="interview-report-tab-panel">
                <div className="interview-report-section-head">
                  <div>
                    <p className="eyebrow">Technical</p>
                    <h3 className="interview-report-panel-title">Questions to practice first</h3>
                  </div>
                  <span className="interview-report-section-count">
                    {technicalQuestions.length} prompts
                  </span>
                </div>

                <div className="interview-report-stack">
                  {topTechnicalQuestions.map((item, index) => (
                    <article className="interview-report-item" key={item._id}>
                      <span className="interview-report-item-index">T{index + 1}</span>
                      <h3 className="interview-report-item-title">{item.question}</h3>
                      <p className="text-muted">
                        <strong>Why it matters:</strong> {item.intention}
                      </p>
                      <p className="text-body">
                        <strong>How to answer:</strong> {item.answer}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "behavioral" && (
              <div className="interview-report-tab-panel">
                <div className="interview-report-section-head">
                  <div>
                    <p className="eyebrow">Behavioral</p>
                    <h3 className="interview-report-panel-title">Stories worth preparing</h3>
                  </div>
                  <span className="interview-report-section-count">
                    {behavioralQuestions.length} prompts
                  </span>
                </div>

                <div className="interview-report-stack">
                  {topBehavioralQuestions.map((item, index) => (
                    <article className="interview-report-item" key={item._id}>
                      <span className="interview-report-item-index">B{index + 1}</span>
                      <h3 className="interview-report-item-title">{item.question}</h3>
                      <p className="text-muted">
                        <strong>Why it matters:</strong> {item.intention}
                      </p>
                      <p className="text-body">
                        <strong>How to answer:</strong> {item.answer}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "prep" && (
              <div className="interview-report-tab-panel">
                <div className="interview-report-section-head">
                  <div>
                    <p className="eyebrow">Preparation</p>
                    <h3 className="interview-report-panel-title">Five-day prep roadmap</h3>
                  </div>
                  <span className="interview-report-section-count">
                    {preparationPlan.length} days
                  </span>
                </div>

                <div className="prep-plan-list">
                  {preparationPlan.map((day) => (
                    <article className="prep-plan-card" key={day._id}>
                      <div className="prep-plan-head">
                        <span className="prep-plan-day">Day {day.day}</span>
                        <strong>{day.focus}</strong>
                      </div>
                      <ul className="prep-plan-tasks">
                        {day.tasks.map((task) => (
                          <li key={task}>{task}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>

        <aside className="interview-report-side">
          <section className="card interview-report-section">
            <p className="eyebrow">Skill Gaps</p>
            <h2 className="section-title interview-report-section-title">Priority review list</h2>
            <div className="skill-gap-list">
              {skillGaps.map((gap) => (
                <div className="skill-gap-item" key={gap._id}>
                  <div>
                    <strong>{gap.skill}</strong>
                  </div>
                  <span className={`skill-gap-severity severity-${gap.severity}`}>{gap.severity}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="card interview-report-section">
            <p className="eyebrow">Source</p>
            <h2 className="section-title interview-report-section-title">Input snapshot</h2>
            <div className="interview-input-block">
              <strong>Self Description</strong>
              <p className="text-muted">{selfDescription}</p>
            </div>
            <div className="interview-input-block">
              <strong>Job Description</strong>
              <p className="text-muted interview-clamp">{jobDescription}</p>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

export default InterviewReportSections;
