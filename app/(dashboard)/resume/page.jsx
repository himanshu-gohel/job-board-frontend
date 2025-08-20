"use client";
import { useState } from "react";
import ResumeUploader from "../../../components/ResumeUploader";

export default function ResumePage() {
  const [uploading, setUploading] = useState(false);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Upload Resume</h1>
      <p className="text-gray-600">Accepted: PDF, DOC, DOCX. Max 2MB.</p>

      <ResumeUploader
        onUploadStart={() => setUploading(true)}
        onUploadEnd={() => setUploading(false)}
      />

      {uploading && (
        <div className="flex items-center gap-2 text-gray-500">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
          Uploading resume...
        </div>
      )}
    </div>
  );
}
