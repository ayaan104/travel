import { Train } from "@prisma/client";

interface TrainClientProps {
  trains: Train[];
}

export function TrainClient({ trains }: TrainClientProps) {
  return <h1>Train Client</h1>;
}
