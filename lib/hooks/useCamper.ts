'use client';

import { useQuery } from '@tanstack/react-query';
import { getCamperById } from '@/lib/api';

export const useCamper = (id: string) => {
  return useQuery({
    queryKey: ['camper', id],
    queryFn: () => getCamperById(id),
    enabled: !!id,
  });
};