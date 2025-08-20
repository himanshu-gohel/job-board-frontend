import { Card } from "./ui";

export default function ApplicationsTable({ apps }) {
  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="py-3 pr-4">Job</th>
              <th className="py-3 pr-4">Company</th>
              <th className="py-3 pr-4">Location</th>
              <th className="py-3 pr-4">Status</th>
              <th className="py-3 pr-4">Applied</th>
            </tr>
          </thead>
          <tbody>
            {apps.map((a) => (
              <tr key={a._id} className="border-b last:border-b-0">
                <td className="py-3 pr-4 font-medium">{a.job?.title}</td>
                <td className="py-3 pr-4">{a.job?.company}</td>
                <td className="py-3 pr-4">{a.job?.location}</td>
                <td className="py-3 pr-4">{a.status}</td>
                <td className="py-3 pr-4">{new Date(a.createdAt || a.appliedAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}