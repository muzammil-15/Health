
import DNavbar from "@/components/Navbar-dashboard";
import { Sidebar } from "@/components/Sidebar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "admin-dashboard",
  description: "admin dashboard",
};

export default function AdmindashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="h-full relative">
          <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
            <Sidebar />
          </div>
          <div className="md:pl-72 pb-10">
            <DNavbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}