import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "dashboard",
    },
    {
      title: "Trains",
      href: "/dashboard/train",
      icon: "train",
    },
    {
      title: "Buses",
      href: "/dashboard/bus",
      icon: "bus",
    },
    {
      title: "Rooms",
      href: "/dashboard/room",
      icon: "room",
    },
    {
      title: "Hotels",
      href: "/dashboard/hotel",
      icon: "hotel",
    },
    {
      title: "Packages",
      href: "/dashboard/package",
      icon: "package",
    },
    {
      title: "Bookings",
      href: "/dashboard/booking",
      icon: "bookings",
    },
  ],
};
