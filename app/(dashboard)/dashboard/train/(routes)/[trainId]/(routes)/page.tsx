import { DashboardHeader } from "@/components/header";
import { TrainForm } from "../_components/form";
import { db } from "@/lib/db";

interface TrainPageProps {
  params: {
    trainId: string;
  };
}

export default async function TrainPage({ params }: TrainPageProps) {
  const train = await db.train.findFirst({
    where: {
      id: params.trainId,
    },
  });

  return (
    <>
      <DashboardHeader heading="Create Train"></DashboardHeader>
      <TrainForm train={train} />
    </>
  );
}
