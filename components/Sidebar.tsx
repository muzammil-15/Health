"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

import { usePathname } from "next/navigation";
import {
  CalendarClock,
  MapPin,
  CalendarDays,
  FolderArchive,
  Headphones,
  LayoutGrid,
  ListChecks,
  Microscope,
  ChevronDown,
  ChevronUp,
  LogOut,
} from "lucide-react";

// import { cn } from "@/lib/utils";
// import { FreeCounter } from "@/components/free-counter";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutGrid,
    href: "",
    color: "text-sky-500",
  },
  {
    label: "Add Health Care",
    icon: CalendarClock,
    href: "",
    color: "text-violet-500",
  },
  {
    label: "Services",
    icon: Headphones,
    color: "text-pink-700",
    href: "",
    subRoutes: [
      {
        label: "Add Main Service",
        href: "/admin-dashboard/main-services",
        color: "text-pink-700",
      },
      {
        label: "Add Sub Service",
        href: "/admin-dashboard/sub-service",
        color: "text-pink-700",
      },
    ],
  },
  {
    label: "Add Packeges",
    icon: FolderArchive,
    color: "text-orange-700",
    href: "",
  },
  {
    label: "Add Tests",
    icon: Microscope,
    color: "text-emerald-500",
    href: "",
  },
  {
    label: "Join Requests",
    icon: CalendarDays,
    color: "text-green-700",
    href: "",
    subRoutes: [
      {
        label: "Healthcare Request",
        href: "/add-main-service",
        color: "text-pink-700",
      },
      {
        label: "Doctor's Request's",
        href: "/add-sub-service",
        color: "text-pink-700",
      },
    ],
  },
  {
    label: "List of Bookings",
    icon: ListChecks,
    color: "text-green-700",
    href: "",
    subRoutes: [
      {
        label: "V. Cnnsultation",
        href: "/add-main-service",
        color: "text-pink-700",
      },
      {
        label: "Home Visit Doctor",
        href: "/add-sub-service",
        color: "text-pink-700",
      },
      {
        label: "Home Visit Nurse",
        href: "/add-sub-service",
        color: "text-pink-700",
      },
    ],
  },

  {
    label: "Zone",
    icon: MapPin,
    color: "text-green-700",
    href: "",
  },
];
// ... (other imports)
// ... (other imports)

const DownIcon: React.FC<{ color?: string; size?: number }> = ({ color = '#AF2245', size = 20 }) => (
  <ChevronDown color={color} size={size} />
);

const UpIcon: React.FC<{ color?: string; size?: number }> = ({ color = '#AF2245', size = 20 }) => (
  <ChevronUp color={color} size={size} />
);

interface SubRoute {
  label: string;
  href: string;
  color: string;
}

interface Route {
  label: string;
  icon: React.ComponentType<{ className?: string; color?: string }>;
  color: string;
  href: string;
  subRoutes?: SubRoute[];
}

const renderSubRoutes = (subRoutes: SubRoute[], setShowSubRoutes: React.Dispatch<React.SetStateAction<boolean>>) => {
  return (
    <div className="ml-4 space-y-1 mt-2">
      {subRoutes.map((subRoute) => (
        <Link
          key={subRoute.href}
          href={subRoute.href}
          className="flex p-[14px] w-full text-[16px] font-[400] justify-start bg-[#F1F2F4] text-[#505F65] cursor-pointer rounded-lg transition hover:text-[#AF2245]"
        >
          <div className="flex items-center flex-1">
            {subRoute.label}
          </div>
        </Link>
      ))}
    </div>
  );
};

export const Sidebar: React.FC = () => {
  const [showServicesSubRoutes, setShowServicesSubRoutes] = useState(false);
  const [showJoinRequestsSubRoutes, setShowJoinRequestsSubRoutes] = useState(false);
  const [showListBookingsSubRoutes, setShowListBookingsSubRoutes] = useState(false);

  const toggleSubRoutes = (setShowSubRoutes: React.Dispatch<React.SetStateAction<boolean>>) => {
    setShowSubRoutes((prev) => !prev);
  };

  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 px-4 flex gap-5 flex-col h-full bg-[#FFFFFF] border border-r-2 overflow-y-scroll">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="">
          <div className="relative h-[74px] w-[89px] mr-4">
            <Image fill alt="Logo" src="/images/logo.png" />
          </div>
        </Link>
        <hr className="mt-3 text-[5px]" />
        <div className="space-y-1 mt-5">
          {routes.map((route: Route) => (
            <div key={route.href} className="relative">
              {route.subRoutes ? (
                // Render dropdown with sub-routes
                <>
                  <div
                    onClick={() => {
                      if (route.label === "Services") {
                        toggleSubRoutes(setShowServicesSubRoutes);
                      } else if (route.label === "Join Requests") {
                        toggleSubRoutes(setShowJoinRequestsSubRoutes);
                      } else if (route.label === "List of Bookings") {
                        toggleSubRoutes(setShowListBookingsSubRoutes);
                      } else {
                        // Handle other route clicks
                        // You can add similar logic for other routes if needed
                      }
                    }}
                    className="flex p-[14px] w-full text-[16px] font-[400] justify-start bg-[#F1F2F4] text-[#505F65] cursor-pointer rounded-lg transition relative hover:text-[#AF2245]"
                  >
                    <div className="flex items-center flex-1">
                      <route.icon
                        className={"h-[30px] w-[30px] mr-3"}
                        color="#505F65"
                      />
                      {route.label}
                    </div>
                    {route.label === "Services" && (
                      <div className="absolute top-[50%] right-4 transform -translate-y-1/2">
                        {showServicesSubRoutes ? (
                          <UpIcon />
                        ) : (
                          <DownIcon />
                        )}
                      </div>
                    )}
                    {route.label === "Join Requests" && (
                      <div className="absolute top-[50%] right-4 transform -translate-y-1/2">
                        {showJoinRequestsSubRoutes ? (
                          <UpIcon />
                        ) : (
                          <DownIcon />
                        )}
                      </div>
                    )}
                    {route.label === "List of Bookings" && (
                      <div className="absolute top-[50%] right-4 transform -translate-y-1/2">
                        {showListBookingsSubRoutes ? (
                          <UpIcon />
                        ) : (
                          <DownIcon />
                        )}
                      </div>
                    )}
                  </div>
                  {route.label === "Services" && showServicesSubRoutes && renderSubRoutes(route.subRoutes, setShowServicesSubRoutes)}
                  {route.label === "Join Requests" && showJoinRequestsSubRoutes && renderSubRoutes(route.subRoutes, setShowJoinRequestsSubRoutes)}
                  {route.label === "List of Bookings" && showListBookingsSubRoutes && renderSubRoutes(route.subRoutes, setShowListBookingsSubRoutes)}
                </>
              ) : (
                // Render regular route
                <Link
                  href={route.href}
                  className="flex p-[14px] w-full text-[16px] font-[400] justify-start bg-[#F1F2F4] text-[#505F65] cursor-pointer rounded-lg transition hover:text-[#AF2245]"
                >
                  <div className="flex items-center flex-1">
                    <route.icon
                      className={"h-[30px] w-[30px] mr-3"}
                      color="#505F65"
                    />
                    {route.label}
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <Link
          href={""}
          className="flex p-[14px] w-full text-[16px] font-[400] justify-start bg-[#F1F2F4] text-[#505F65] cursor-pointer rounded-lg transition hover:text-[#AF2245]"
        >
          <div className="flex items-center flex-1">
            <LogOut color="#Af2245" className={"h-[30px] w-[30px] mr-3"} />
            LogOut
          </div>
        </Link>
      </div>
    </div>
  );
};