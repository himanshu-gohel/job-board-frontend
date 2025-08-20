import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "JobBoard",
  description: "Apply to jobs with a polished UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <main className="container-max py-8">{children}</main>
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}
