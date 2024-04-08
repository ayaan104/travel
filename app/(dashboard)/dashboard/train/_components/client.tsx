import { Train } from "@prisma/client";
import { Train as TrainColumn, columns } from "./columns";
import { DataTable } from "./data-table";

interface TrainClientProps {
  trains: Train[];
}

export function TrainClient({ trains }: TrainClientProps) {
  const formattedTrainArray: TrainColumn[] = trains.reduce<TrainColumn[]>(
    (acc, user) => {
      const {
        id,
        arrivalTime,
        departureTime,
        destination,
        price,
        source,
        trainNumber,
      } = user;
      acc.push({
        id,
        arrivalTime,
        departureTime,
        destination,
        price,
        source,
        trainNumber,
      });
      return acc;
    },
    [],
  );

  return (
    <div>
      <DataTable columns={columns} data={formattedTrainArray} />
    </div>
  );
}
