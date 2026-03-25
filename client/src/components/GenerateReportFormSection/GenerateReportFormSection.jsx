import "./GenerateReportFormSection.css";

function GenerateReportFormSection({
  fileInputRef,
  selectedFileName,
  onBrowseClick,
  onFileChange,
  selfDescription,
  jobDescription,
  onSelfDescriptionChange,
  onJobDescriptionChange,
  onSubmit,
  generating,
  generateError,
}) {
  return (
    <section className="card report-workspace">
      <div className="report-topbar">
        <div>
          <h3 className="section-title report-section-title">Generate Report</h3>
        </div>
      </div>

      <div className="report-upload-panel">
        <input
          ref={fileInputRef}
          accept=".pdf,application/pdf"
          className="report-file-input"
          type="file"
          onChange={onFileChange}
        />

        <div className="report-upload-icon" aria-hidden="true">
          PDF
        </div>

        <div className="report-upload-content">
          <h4 className="report-upload-heading">Upload resume</h4>
          <p className="text-muted report-upload-copy">
            Pick a clean PDF with selectable text for better extraction quality.
          </p>
        </div>

        <div className="report-upload-actions">
          <button className="button button-primary" type="button" onClick={onBrowseClick}>
            Choose File
          </button>
          <span className="report-file-pill">
            {selectedFileName ? selectedFileName : "No file selected"}
          </span>
        </div>
      </div>

      <form className="report-form" onSubmit={onSubmit}>
        <label className="field" htmlFor="self-description">
          <span className="field-label">Self Description</span>
          <textarea
            className="input report-textarea"
            id="self-description"
            value={selfDescription}
            onChange={(event) => onSelfDescriptionChange(event.target.value)}
            placeholder="Summarize your background, strongest skills, target role, and what kind of interview prep you want."
            rows="8"
          />
        </label>

        <label className="field" htmlFor="job-description">
          <span className="field-label">Job Description</span>
          <textarea
            className="input report-textarea report-textarea-large"
            id="job-description"
            value={jobDescription}
            onChange={(event) => onJobDescriptionChange(event.target.value)}
            placeholder="Paste the complete job description here, including responsibilities, stack, expectations, and preferred qualifications."
            rows="8"
          />
        </label>

        <div className="report-form-footer">
          <div className="report-mini-notes">
            <span className="report-note">Match score</span>
            <span className="report-note">Questions</span>
            <span className="report-note">Prep plan</span>
          </div>
          <button className="button button-primary report-submit" type="submit" disabled={generating}>
            {generating ? "Generating..." : "Generate Report"}
          </button>
        </div>

        {generateError ? <p className="report-form-error">{generateError}</p> : null}
      </form>
    </section>
  );
}

export default GenerateReportFormSection;
