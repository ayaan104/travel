"use client";
import { Train } from "@prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { trainSchema } from "@/lib/validations/train";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface TrainFormProps {
  train: Train | null;
}

type Inputes = z.infer<typeof trainSchema>;

export function TrainForm({ train }: TrainFormProps) {
  const form = useForm<Inputes>({
    resolver: zodResolver(trainSchema),
    defaultValues: {
      arrivalTime: train?.arrivalTime || "",
      departureTime: train?.departureTime || "",
      destination: train?.destination || "",
      price: String(train?.price ?? "0") || "0",
      source: train?.source || "",
      trainNumber: train?.trainNumber || "",
    },
  });

  function onSubmit(values: Inputes) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <FormField
            control={form.control}
            name="trainNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Train Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter train number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="source"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Source</FormLabel>
                <FormControl>
                  <Input placeholder="Enter source station" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="destination"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Destination</FormLabel>
                <FormControl>
                  <Input placeholder="Enter destination station" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="departureTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Departure Time</FormLabel>
                <FormControl>
                  <Input placeholder="dd/mm/yyyy" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="arrivalTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Arrival Time</FormLabel>
                <FormControl>
                  <Input placeholder="dd/mm/yyyy" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input placeholder="Enter train price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
