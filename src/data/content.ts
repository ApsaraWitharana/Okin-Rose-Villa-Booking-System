import { Review, GalleryImage, BlogPost, PricingPlan } from '../types';

export const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    comment: "Absolutely stunning hotel with impeccable service. The ocean view room exceeded all expectations!",
    date: "2024-02-15"
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    comment: "The Executive Suite was perfect for our business trip. Great amenities and workspace.",
    date: "2024-02-10"
  },
  {
    id: 3,
    name: "Emma Davis",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    comment: "Family room was spacious and kid-friendly. We'll definitely be coming back!",
    date: "2024-02-05"
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200",
    title: "Luxury Lobby",
    category: "Interior"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=1200",
    title: "Infinity Pool",
    category: "Amenities"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200",
    title: "Ocean View",
    category: "Views"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1200",
    title: "Gourmet Restaurant",
    category: "Dining"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?auto=format&fit=crop&q=80&w=1200",
    title: "Spa Retreat",
    category: "Wellness"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200",
    title: "Beachfront",
    category: "Exterior"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 10 Luxury Travel Trends for 2024",
    excerpt: "Discover the latest trends shaping luxury hospitality and travel experiences in 2024.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
    date: "2024-02-20",
    author: "Emma Thompson",
    category: "Travel Trends"
  },
  {
    id: 2,
    title: "The Art of Sustainable Luxury",
    excerpt: "How luxury hotels are embracing sustainability without compromising on comfort.",
    image: "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?auto=format&fit=crop&q=80&w=1200",
    date: "2024-02-15",
    author: "James Wilson",
    category: "Sustainability"
  },
  {
    id: 3,
    title: "Culinary Journey: Farm to Table",
    excerpt: "Experience our chef's commitment to local ingredients and exceptional dining.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200",
    date: "2024-02-10",
    author: "Sophie Chen",
    category: "Dining"
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Standard Package",
    price: 299,
    features: [
      "Deluxe Room",
      "Breakfast Included",
      "Free Wi-Fi",
      "Access to Fitness Center",
      "Welcome Drink"
    ],
    isPopular: false
  },
  {
    id: 2,
    name: "Premium Package",
    price: 459,
    features: [
      "Executive Suite",
      "All Meals Included",
      "Free Wi-Fi",
      "Access to All Facilities",
      "Spa Treatment",
      "Airport Transfer"
    ],
    isPopular: true
  },
  {
    id: 3,
    name: "Family Package",
    price: 599,
    features: [
      "Family Suite",
      "All Meals Included",
      "Kids Activities",
      "All Facilities Access",
      "2 Spa Treatments",
      "Airport Transfer",
      "Late Checkout"
    ],
    isPopular: false
  }
];