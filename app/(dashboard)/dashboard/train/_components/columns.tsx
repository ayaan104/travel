"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Train = {
  id: string;
  trainNumber: string;
  source: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
};

export const columns: ColumnDef<Train>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
