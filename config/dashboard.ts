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
      href: "/dashboard/trains",
      icon: "train",
    },
    {
      title: "Buses",
      href: "/dashboard/buses",
      icon: "bus",
    },
    {
      title: "Rooms",
      href: "/dashboard/rooms",
      icon: "room",
    },
    {
      title: "Hotels",
      href: "/dashboard/hotels",
      icon: "hotel",
    },
    {
      title: "Packages",
      href: "/dashboard/packages",
      icon: "package",
    },
    {
      title: "Bookings",
      href: "/dashboard/bookings",
      icon: "bookings",
    },
  ],
};
