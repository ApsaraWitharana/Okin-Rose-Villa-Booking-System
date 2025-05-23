
import { Users, Check } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { Room } from '../types';
import { RootState } from '../store/store';
import { setSelectedRoom } from '../store/slices/bookingSlice';
import {Footer} from "./Footer.tsx";

interface RoomBookingCard {
    roomsBooking: Room;
    onBookNow: (roomId: number) => void;
}

export function RoomBookingCard({ roomsBooking, onBookNow }: RoomBookingCard) {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    const handleBookNow = () => {
        if (!isAuthenticated) {
            alert('Please login to book a room');
            return;
        }
        dispatch(setSelectedRoom(roomsBooking));
        onBookNow(roomsBooking.id);
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
                src={roomsBooking.image}
                alt={roomsBooking.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-gray-900">{roomsBooking.name}</h3>
                    <p className="text-2xl font-bold text-blue-600">${roomsBooking.price}</p>
                </div>
                <p className="mt-2 text-gray-600">{roomsBooking.description}</p>

                <div className="mt-4 flex items-center text-gray-600">
                    <Users className="h-5 w-5" />
                    <span className="ml-2">Up to {roomsBooking.capacity} guests</span>
                </div>

                <div className="mt-4">
                    <h4 className="font-medium text-gray-900">Amenities</h4>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                        {roomsBooking.amenities.map((amenity) => (
                            <div key={amenity} className="flex items-center text-gray-600">
                                <Check className="h-4 w-4 text-green-500" />
                                <span className="ml-2 text-sm">{amenity}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={handleBookNow}
                    className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                    Book Now
                </button>
            </div>
            <Footer/>
        </div>
    );
}