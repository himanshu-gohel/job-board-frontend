"use client";
import { useEffect, useState } from "react";
import API from "../../../lib/api";
import JobCard from "../../../components/JobCard";
import { toast } from "sonner";
import { useAuth } from "../../../lib/useAuth";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const { authed } = useAuth();

  useEffect(() => { API.get("/jobs").then((r) => setJobs(r.data)); }, []);

  async function apply(jobId) {
    if (!authed) return toast.error("Login and upload your resume first");
    try {
      await API.post(`/jobs/apply/${jobId}`);
      toast.success("Applied successfully!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to apply");
    }
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Open Roles</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} onApply={apply} />
        ))}
      </div>
    </div>
  );
}