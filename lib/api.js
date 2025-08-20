"use client";
import axios from "axios";
import { getToken } from "./auth";

const API = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000" });

API.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;