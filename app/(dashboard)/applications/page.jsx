"use client";
import { useEffect, useState } from "react";
import API from "../../../lib/api";
import ApplicationsTable from "../../../components/ApplicationsTable";
import { toast } from "sonner";

export default function ApplicationsPage() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ loading state

  useEffect(() => {
    API.get("/applications")
      .then((r) => setApps(r.data))
      .catch(() => toast.error("Failed to fetch applications"))
      .finally(() => setLoading(false)); // ✅ stop loading after fetch
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        <span className="ml-4 text-gray-500">Loading applications...</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">My Applications</h1>
      {apps.length === 0 ? (
        <p className="text-gray-500">You have not applied to any jobs yet.</p>
      ) : (
        <ApplicationsTable apps={apps} />
      )}
    </div>
  );
}
