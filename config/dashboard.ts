import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "dashboard",
    },
    {
      title: "Bookings",
      href: "/dashboard/bookings",
      icon: "bookings",
    },
    {
      title: "Packages",
      href: "/dashboard/packages",
      icon: "package",
    },
  ],
};
