'use client';

import { useMutation } from '@tanstack/react-query';
import { createBooking } from '@/lib/api';
import { CreateBookingPayload } from '@/types/camper';

export const useBooking = (camperId: string) => {
  return useMutation({
    mutationFn: (payload: CreateBookingPayload) =>
      createBooking(camperId, payload),
  });
};