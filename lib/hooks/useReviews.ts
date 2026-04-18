'use client';

import { useQuery } from '@tanstack/react-query';
import { getReviews } from '@/lib/api';

export const useReviews = (id: string) => {
  return useQuery({
    queryKey: ['reviews', id],
    queryFn: () => getReviews(id),
    enabled: !!id,
  });
};