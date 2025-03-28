import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { Header } from './components/Header';
import { DatePicker } from './components/DatePicker';
import { RoomCard } from './components/RoomCard';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Blog } from './components/Blog';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Login } from './components/Login';
import { rooms } from './data/rooms';
import { BookingDates } from './types';

function App() {
  const [dates, setDates] = React.useState<BookingDates>({
    checkIn: null,
    checkOut: null
  });

  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleBookNow = (roomId: number) => {
    if (!dates.checkIn || !dates.checkOut) {
      alert('Please select check-in and check-out dates');
      return;
    }
    alert(`Booking room ${roomId} from ${dates.checkIn.toLocaleDateString()} to ${dates.checkOut.toLocaleDateString()}`);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark:bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience Luxury Like Never Before</h1>
            <p className="text-lg md:text-xl mb-8">Discover our handpicked collection of luxury accommodations designed for the discerning traveler.</p>
            <a href="#rooms" className="bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors inline-block">
              Book Your Stay
            </a>
          </div>
        </div>
      </div>

      <main className="dark:bg-gray-900">
        {/* Date Picker Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-8">
            <DatePicker dates={dates} onDatesChange={setDates} />
          </div>
        </div>

        {/* Rooms Section */}
        <div id="rooms" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Rooms</h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Choose from our selection of luxurious rooms</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                onBookNow={handleBookNow}
              />
            ))}
          </div>
        </div>

        <Gallery />
        <Reviews />
        <Blog />
        <Pricing />
        <Contact />
      </main>

      <footer className="bg-gray-800 dark:bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Okin Villa</h3>
              <p className="text-gray-400">Experience luxury and comfort in our carefully curated selection of rooms and suites.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">Email: info@okinvilla.com</p>
              <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              <p className="text-gray-400">123 Luxury Avenue</p>
              <p className="text-gray-400">Paradise City, PC 12345</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;