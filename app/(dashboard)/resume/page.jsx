"use client";
import ResumeUploader from "../../../components/ResumeUploader";

export default function ResumePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Upload Resume</h1>
      <p className="text-gray-600">Accepted: PDF, DOC, DOCX. Max 2MB.</p>
      <ResumeUploader />
    </div>
  );
}