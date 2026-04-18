'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getCampers } from '@/lib/api';
import { FilterParams } from '@/types/camper';

export const useCampers = (filters: FilterParams) => {
  return useInfiniteQuery({
    queryKey: ['campers', filters],
    queryFn: ({ pageParam = 1 }) => getCampers(filters, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
  if (lastPage.page < lastPage.totalPages) {
    return lastPage.page + 1;
  }
  return undefined;
},
  });
};