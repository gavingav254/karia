import { useState } from "react";

import TopNavigation from "../components/common/TopNavigation";
import UploadZone from "../components/assignment/UploadZone";
import AnalyzeButton from "../components/assignment/AnalyzeButton";
import AnalysisResults from "../components/assignment/AnalysisResults";

import { extractPdfText } from "../services/pdfExtractor";
import { analyzeAssignment } from "../services/assignmentService";

export default function AssignmentAnalyzer() {
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);

  async function handleAnalyze() {
    if (!selectedFile) {
      alert("Please upload a PDF first.");
      return;
    }

    try {
      setLoading(true);

      console.log("📄 Extracting PDF...");

      const assignmentText = await extractPdfText(selectedFile);

      console.log("PDF TEXT:");
      console.log(assignmentText);

      const result = await analyzeAssignment(assignmentText);

      console.log("Gemma Response:", result);

      setAnalysis(result);

    } catch (error) {
      console.error(error);
      alert("Analysis failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <TopNavigation title="Assignment Intelligence" />

      <section className="max-w-7xl mx-auto px-8 py-10">

        <h1 className="text-5xl font-black">
          Assignment Intelligence
        </h1>

        <p className="mt-4 text-gray-400">
          Upload your assignment PDF and let KARIA analyze it.
        </p>

        <UploadZone
          onFileSelected={setSelectedFile}
        />

        <AnalyzeButton
          loading={loading}
          onAnalyze={handleAnalyze}
        />

        {loading && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold">
              KARIA is reading your assignment...
            </h2>
          </div>
        )}

        <AnalysisResults
          result={analysis}
        />

      </section>
    </main>
  );
}