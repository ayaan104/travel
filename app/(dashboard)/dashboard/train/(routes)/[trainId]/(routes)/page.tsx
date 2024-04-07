interface TrainPageProps {
  params: {
    trainId: string;
  };
}

export default async function TrainPage({ params }: TrainPageProps) {
  return <h1>Train Page : {params.trainId}</h1>;
}
