// 🔹 Основні enum типи
export type CamperForm =
  | "alcove"
  | "panel_van"
  | "integrated"
  | "semi_integrated";

export type Transmission = "automatic" | "manual";

export type Engine = "diesel" | "petrol" | "hybrid" | "electric";

export type Amenity =
  | "ac"
  | "bathroom"
  | "kitchen"
  | "tv"
  | "radio"
  | "refrigerator"
  | "microwave"
  | "gas"
  | "water";

// 🔹 Camper (для списку)
export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  form: CamperForm;
  description: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: Transmission;
  engine: Engine;
  amenities: Amenity[];
  coverImage: string;
  totalReviews: number;
}

// 🔹 Відповідь з пагінацією
export interface CampersResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
}

// 🔹 Фільтри
export interface FilterParams {
 location?: string;
  form?: CamperForm;         
  transmission?: Transmission; 
  engine?: Engine;          
}

// 🔹 Галерея
export interface GalleryItem {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}

// 🔹 Детальна інформація про camper
export interface CamperDetails {
  id: string;
  name: string;
  price: number;
  rating: number;
  totalReviews: number;
  location: string;
  description: string;
  form: CamperForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: Transmission;
  engine: Engine;
  amenities: Amenity | Amenity[]; 
  gallery: GalleryItem[];
  createdAt: string;
  updatedAt: string;
}

// 🔹 Відгуки
export interface Review {
  id: string;
  camperId: string;
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
  createdAt: string;
}

export interface CreateBookingPayload {
  name: string;
  email: string;
}