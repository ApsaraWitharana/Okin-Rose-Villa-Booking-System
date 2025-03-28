import { Room } from '../types';

export const rooms: Room[] = [
  {
    id: 1,
    name: "Deluxe Ocean View",
    description: "Spacious room with stunning ocean views and private balcony",
    price: 299,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
    capacity: 2,
    amenities: ["King Bed", "Ocean View", "Private Balcony", "Mini Bar", "Wi-Fi"]
  },
  {
    id: 2,
    name: "Executive Suite",
    description: "Luxurious suite with separate living area and city views",
    price: 459,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1200",
    capacity: 3,
    amenities: ["King Bed", "Living Room", "Work Desk", "Jacuzzi", "Wi-Fi"]
  },
  {
    id: 3,
    name: "Family Room",
    description: "Perfect for families with connecting rooms and garden access",
    price: 379,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200",
    capacity: 4,
    amenities: ["Two Queen Beds", "Garden View", "Kids Area", "Mini Kitchen", "Wi-Fi"]
  }
];