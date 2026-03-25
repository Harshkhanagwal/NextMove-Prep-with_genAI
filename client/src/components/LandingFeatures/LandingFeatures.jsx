import "./LandingFeatures.css";

const features = [
  {
    id: "01",
    title: "Resume-to-role analysis",
    description:
      "Break down your resume against the target role and see where your strongest fit signals come from.",
  },
  {
    id: "02",
    title: "Interview question generation",
    description:
      "Get technical and behavioral prompts with intent and answer guidance instead of generic practice lists.",
  },
  {
    id: "03",
    title: "Prep roadmap and report history",
    description:
      "Generate a focused plan for what to revise next and revisit past reports from your dashboard.",
  },
];

function LandingFeatures() {
  return (
    <section className="landing-features-section">
      <div className="landing-section-heading">
        <div>
          <p className="eyebrow">What You Get</p>
          <h2 className="section-title landing-section-title">Built for preparation, not just analysis.</h2>
        </div>
        <p className="text-muted landing-section-copy">
          The product is designed to help you move from resume upload to actual interview practice
          without guessing what matters most.
        </p>
      </div>

      <div className="landing-features-grid">
        {features.map((feature) => (
          <article className="card landing-feature-card" key={feature.id}>
            <span className="landing-feature-id">{feature.id}</span>
            <h3 className="section-title landing-feature-title">{feature.title}</h3>
            <p className="text-body">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default LandingFeatures;
