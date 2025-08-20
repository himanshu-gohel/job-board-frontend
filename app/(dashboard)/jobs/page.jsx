"use client";
import { useEffect, useState } from "react";
import API from "../../../lib/api";
import JobCard from "../../../components/JobCard";
import { toast } from "sonner";
import { useAuth } from "../../../lib/useAuth";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ add loading state
  const { authed } = useAuth();

  useEffect(() => {
    API.get("/jobs")
      .then((r) => setJobs(r.data))
      .catch(() => toast.error("Failed to fetch jobs"))
      .finally(() => setLoading(false)); // ✅ stop loading after fetch
  }, []);

  async function apply(jobId) {
    if (!authed) return toast.error("Login and upload your resume first");
    try {
      await API.post(`/jobs/apply/${jobId}`);
      toast.success("Applied successfully!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to apply");
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        <span className="ml-4 text-gray-500">Loading jobs...</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Open Roles</h1>
      {jobs.length === 0 ? (
        <p className="text-gray-500">No jobs available right now.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} onApply={apply} />
          ))}
        </div>
      )}
    </div>
  );
}
