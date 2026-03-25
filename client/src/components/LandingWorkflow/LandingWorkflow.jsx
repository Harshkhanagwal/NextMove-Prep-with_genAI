import "./LandingWorkflow.css";

const steps = [
  {
    id: "01",
    title: "Upload your resume",
    description: "Start with a clean PDF so the app can extract your projects, stack, and experience.",
  },
  {
    id: "02",
    title: "Add your target context",
    description:
      "Paste the job description and include a short self-summary so the report reflects your actual goal.",
  },
  {
    id: "03",
    title: "Generate a report",
    description:
      "The app creates a match score, likely questions, skill gaps, and a preparation roadmap in one view.",
  },
];

function LandingWorkflow() {
  return (
    <section className="card landing-workflow-section">
      <div className="landing-workflow-header">
        <div>
          <p className="eyebrow">Workflow</p>
          <h2 className="section-title landing-workflow-title">A simple flow from upload to interview prep.</h2>
        </div>
        <p className="text-muted landing-workflow-copy">
          The experience is intentionally short so you can get insight fast and spend your time
          practicing, not filling forms forever.
        </p>
      </div>

      <div className="landing-workflow-rail">
        {steps.map((step) => (
          <article className="landing-workflow-step" key={step.id}>
            <span className="landing-workflow-id">{step.id}</span>
            <h3>{step.title}</h3>
            <p className="text-body">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default LandingWorkflow;
