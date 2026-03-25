import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GenerateReportFormSection from "../../components/GenerateReportFormSection/GenerateReportFormSection";
import GenerateReportHero from "../../components/GenerateReportHero/GenerateReportHero";
import {
  clearGenerateError,
  generateInterviewReport,
} from "../../features/interviewReports/interviewReportsSlice";
import Loader from "../../components/Loader/Loader";
import "./GenerateReportPage.css";

function GenerateReportPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [selfDescription, setSelfDescription] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const { generating, generateError } = useSelector((state) => state.interviewReports);

  useEffect(() => {
    return () => {
      dispatch(clearGenerateError());
    };
  }, [dispatch]);

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
    setSelectedFileName(file ? file.name : "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append("resume", selectedFile);
    formData.append("selfDescription", selfDescription);
    formData.append("jobDescription", jobDescription);

    try {
      const report = await dispatch(generateInterviewReport(formData)).unwrap();
      navigate(`/reports/${report._id}`);
    } catch (_error) {
      // error state is handled in Redux and shown in the form
    }
  };

  return (
    <section className="generate-report-page">
      {generating ? <Loader /> : null}
      <GenerateReportHero />
      <GenerateReportFormSection
        fileInputRef={fileInputRef}
        selectedFileName={selectedFileName}
        onBrowseClick={handleBrowseClick}
        onFileChange={handleFileChange}
        selfDescription={selfDescription}
        jobDescription={jobDescription}
        onSelfDescriptionChange={setSelfDescription}
        onJobDescriptionChange={setJobDescription}
        onSubmit={handleSubmit}
        generating={generating}
        generateError={generateError}
      />
    </section>
  );
}

export default GenerateReportPage;
