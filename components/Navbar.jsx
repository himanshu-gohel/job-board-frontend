"use client";
import Link from "next/link";
import { useAuth } from "../lib/useAuth";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // lightweight icons

export default function Navbar() {
  const { authed, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/jobs"
          className="flex items-center gap-2 font-semibold text-brand-700"
        >
          <span className="inline-block h-3 w-3 rounded-full bg-brand-600" />
          JobBoard
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link className="navlink" href="/jobs">
            Jobs
          </Link>
          {authed && (
            <>
              <Link className="navlink" href="/resume">
                Upload Resume
              </Link>
              <Link className="navlink" href="/applications">
                Applications
              </Link>
            </>
          )}
          {!authed ? (
            <>
              <Link className="navlink" href="/register">
                Register
              </Link>
              <Link className="navlink" href="/login">
                Login
              </Link>
            </>
          ) : (
            <button onClick={logout} className="btn-outline text-sm">
              Logout
            </button>
          )}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white px-4 py-3 space-y-3">
          <Link
            className="block navlink"
            href="/jobs"
            onClick={() => setOpen(false)}
          >
            Jobs
          </Link>
          {authed && (
            <>
              <Link
                className="block navlink"
                href="/resume"
                onClick={() => setOpen(false)}
              >
                Upload Resume
              </Link>
              <Link
                className="block navlink"
                href="/applications"
                onClick={() => setOpen(false)}
              >
                Applications
              </Link>
            </>
          )}
          {!authed ? (
            <>
              <Link
                className="block navlink"
                href="/register"
                onClick={() => setOpen(false)}
              >
                Register
              </Link>
              <Link
                className="block navlink"
                href="/login"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                logout();
                setOpen(false);
              }}
              className="btn-outline w-full text-left text-sm"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}
