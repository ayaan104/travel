"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Badge,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Sheet,
  ShoppingCart,
  Users,
} from "lucide-react";
import { SheetContent, SheetTrigger } from "../ui/sheet";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Icons } from "../icons";
import { SidebarNavItem } from "@/types";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface DashboardMobileNavProps {
  items: SidebarNavItem[];
}

const DashboardMobileNav: React.FC<DashboardMobileNavProps> = ({ items }) => {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <>
      <nav className="grid gap-2 text-lg font-medium">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold mb-4"
        >
          <Icons.logo className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>

        {items.map((item, index) => {
          const Icon = Icons[item.icon || "dashboard"];
          return (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 transition-all hover:text-primary",
                path === item.href
                  ? "bg-muted text-primary"
                  : "text-muted-foreground",
              )}
            >
              <Icon className="h-4 w-4" />
              {item.title}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto">
        <Card>
          <CardHeader>
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Unlock all features and get unlimited access to our support team.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="sm" className="w-full">
              Upgrade
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default DashboardMobileNav;
