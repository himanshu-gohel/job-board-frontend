"use client";
import { useEffect, useState } from "react";
import API from "../../../lib/api";
import ApplicationsTable from "../../../components/ApplicationsTable";

export default function ApplicationsPage() {
  const [apps, setApps] = useState([]);
  useEffect(() => { API.get("/applications").then((r) => setApps(r.data)); }, []);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">My Applications</h1>
      <ApplicationsTable apps={apps} />
    </div>
  );
}