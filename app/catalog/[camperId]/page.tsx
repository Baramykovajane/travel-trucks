import CamperDetailsClient from '@/components/CamperDetailsClient/CamperDetailsClient';

type Props = {
  params: Promise<{ camperId: string }>;
};

export default async function CamperPage({ params }: Props) {
  const { camperId } = await params;
  return <CamperDetailsClient id={camperId} />;
}