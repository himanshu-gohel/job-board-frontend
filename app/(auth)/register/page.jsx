"use client";
import { useState } from "react";
import AuthCard from "../../../components/AuthCard";
import API from "../../../lib/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await API.post("/auth/register", { name, email, password });
      toast.success("Account created. Please login.");
      router.push("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthCard
      title="Register"
      loading={loading}
      onSubmit={onSubmit}
      fields={
        <>
          <div>
            <label className="label">Name</label>
            <input
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <p className="text-sm mt-4">
              Already have an account?{" "}
              <span
                className="text-brand-600 cursor-pointer"
                onClick={() => router.push("/login")}
              >
                Login
              </span>
            </p>
          </div>
        </>
      }
    />
  );
}
