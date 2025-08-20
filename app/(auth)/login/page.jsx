"use client";
import { useState } from "react";
import AuthCard from "../../../components/AuthCard";
import API from "../../../lib/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuth } from "../../../lib/useAuth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  async function onSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await API.post("/auth/login", { email, password });
      login(data.token);
      toast.success("Welcome back!");
      router.push("/jobs");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthCard
      title="Login"
      loading={loading}
      onSubmit={onSubmit}
      fields={
        <>
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
              Not registered?{" "}
              <span
                className="text-brand-600 cursor-pointer"
                onClick={() => router.push("/register")}
              >
                Register
              </span>
            </p>
          </div>
        </>
      }
    />
  );
}
