import axios from 'axios';
import { CampersResponse, CamperDetails, FilterParams, Review, CreateBookingPayload } from '@/types/camper';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://campers-api.goit.study';

const api = axios.create({
  baseURL: BASE_URL,
});


export const getCampers = async (
  filters: FilterParams,
  page: number
): Promise<CampersResponse> => {
  const { data } = await api.get<CampersResponse>('/campers', {
    params: { ...filters, page, limit: 4 },
  });
    data.campers.sort((a, b) => b.rating - a.rating);
  return data;
};

export const getCamperFilters = async () => {
  const { data } = await api.get('/campers/filters');
  return data;
};

export const getCamperById = async (id: string): Promise<CamperDetails> => {
  const { data } = await api.get<CamperDetails>(`/campers/${id}`);
  return data;
};

export const getReviews = async (id: string): Promise<Review[]> => {
  const { data } = await api.get<Review[]>(`/campers/${id}/reviews`);
  return data;
};

export const createBooking = async (
  camperId: string,
  payload: CreateBookingPayload
): Promise<void> => {
  await api.post(`/campers/${camperId}/booking-requests`, payload);
};