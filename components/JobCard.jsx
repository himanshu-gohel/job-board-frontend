import { Card, Button } from "./ui";

export default function JobCard({ job, onApply }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <p className="text-gray-600">{job.company} • {job.location}</p>
          <p className="mt-2 text-sm text-gray-700">{job.type}</p>
        </div>
        {onApply && (
          <Button onClick={() => onApply(job._id)} className="shrink-0">Apply</Button>
        )}
      </div>
    </Card>
  );
}