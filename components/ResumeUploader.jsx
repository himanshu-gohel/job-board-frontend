"use client";
import { useState } from "react";
import API from "../lib/api";
import { Card, Button } from "./ui";
import { toast } from "sonner";

export default function ResumeUploader() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const upload = async (e) => {
    e.preventDefault();
    if (!file) return toast.error("Select a file first");
    const form = new FormData();
    form.append("resume", file);
    try {
      setLoading(true);
      await API.post("/resume/upload", form, { headers: { "Content-Type": "multipart/form-data" } });
      toast.success("Resume uploaded!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <form onSubmit={upload} className="flex items-center gap-3">
        <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setFile(e.target.files?.[0] || null)} />
        <Button disabled={loading}>{loading ? "Uploading..." : "Upload"}</Button>
      </form>
    </Card>
  );
}