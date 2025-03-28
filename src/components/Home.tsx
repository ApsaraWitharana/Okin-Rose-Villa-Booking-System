import  { useState } from "react";
import { DatePicker } from "./DatePicker";
import { RoomCard } from "./RoomCard.tsx";
import { rooms } from "../data/rooms";
import { BookingDates } from "../types";
import {Gallery} from "./Gallery.tsx";
import {Reviews} from "./Reviews.tsx";
import {Blog} from "./Blog.tsx";
import {Pricing} from "./Pricing.tsx";
import {Contact} from "lucide-react";

export function Home() {
    const [dates, setDates] = useState<BookingDates>({
        checkIn: null,
        checkOut: null,
    });

    const handleBookNow = (roomId: number) => {
        if (!dates.checkIn || !dates.checkOut) {
            alert("Please select check-in and check-out dates");
            return;
        }
        alert(`Booking room ${roomId} from ${dates.checkIn} to ${dates.checkOut}`);
    };

    return (
        <main className="dark:bg-gray-900">
            <div className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                    <div className="text-white max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience Luxury Like Never Before</h1>
                        <p className="text-lg md:text-xl mb-8">
                            Discover our handpicked collection of luxury accommodations designed for the discerning traveler.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-8">
                    <DatePicker dates={dates} onDatesChange={setDates} />
                </div>
            </div>

            <div id="rooms" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Rooms</h2>
                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                        Choose from our selection of luxurious rooms
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rooms.map((room) => (
                        <RoomCard key={room.id} room={room} onBookNow={handleBookNow} />
                    ))}
                </div>
            </div>
            <Gallery />
            <Reviews />
            <Blog />
            <Pricing />
            <Contact />
        </main>
    );
}
