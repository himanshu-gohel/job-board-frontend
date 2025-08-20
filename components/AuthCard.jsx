"use client";
import { Card, Input, Label, Button } from "./ui";

export default function AuthCard({ title, onSubmit, loading = false, fields }) {
  return (
    <div className="max-w-md mx-auto">
      <Card>
        <h1 className="text-2xl font-semibold mb-6">{title}</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          {fields}
          <Button disabled={loading} className="w-full">{loading ? "Please wait..." : title}</Button>
        </form>
      </Card>
    </div>
  );
}