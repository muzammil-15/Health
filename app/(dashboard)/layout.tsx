
import DNavbar from "@/components/Navbar-dashboard";
import Sidebar  from "@/components/Sidebar";

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

        <main className="h-full relative bg-[#F6F7F9]">
          <div className="hidden h-full lg:flex  lg:flex-col lg:fixed lg:inset-y-0 z-80">
            <Sidebar />
          </div>
          <div className="lg:pl-72 pb-10">
            <DNavbar />
            {children}
            {/* Footer component is not included here */}
           
          </div>
        </main>
  
  );
}