import "./DashboardFeaturesGrid.css";

const features = [
  {
    id: "01",
    title: "Resume analysis",
    description:
      "Extract role-relevant details from your resume and compare them against the job requirements.",
  },
  {
    id: "02",
    title: "Interview questions",
    description:
      "Get technical and behavioral prompts with intent and structured answering guidance.",
  },
  {
    id: "03",
    title: "Results roadmap",
    description:
      "Build a practical action plan that highlights skill gaps and the next moves to focus on.",
  },
];

function DashboardFeaturesGrid() {
  return (
    <div className="dashboard-home-features">
      {features.map((feature) => (
        <article className="card dashboard-feature-card" key={feature.id}>
          <span className="dashboard-feature-badge">{feature.id}</span>
          <h3 className="section-title dashboard-feature-title">{feature.title}</h3>
          <p className="text-muted">{feature.description}</p>
        </article>
      ))}
    </div>
  );
}

export default DashboardFeaturesGrid;
