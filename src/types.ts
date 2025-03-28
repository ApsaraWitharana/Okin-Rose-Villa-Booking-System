export interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  capacity: number;
  amenities: string[];
}

export interface BookingDates {
  checkIn: Date | null;
  checkOut: Date | null;
}

export interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  features: string[];
  isPopular: boolean;
}