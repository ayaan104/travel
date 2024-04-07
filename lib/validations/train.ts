import { z } from "zod";

export const trainSchema = z.object({
  trainNumber: z.string(),
  source: z.string(),
  destination: z.string(),
  departureTime: z.string(),
  arrivalTime: z.string(),
  price: z.string(),
});
