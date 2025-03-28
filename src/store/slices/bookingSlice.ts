import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Room, BookingDates } from '../../types';

interface Booking {
  id: string;
  roomId: number;
  userId: string;
  dates: BookingDates;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}

interface BookingState {
  bookings: Booking[];
  selectedRoom: Room | null;
  loading: boolean;
  error: string | null;
}

const initialState: BookingState = {
  bookings: [],
  selectedRoom: null,
  loading: false,
  error: null,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setSelectedRoom: (state, action: PayloadAction<Room>) => {
      state.selectedRoom = action.payload;
    },
    addBooking: (state, action: PayloadAction<Booking>) => {
      state.bookings.push(action.payload);
    },
    updateBookingStatus: (state, action: PayloadAction<{ id: string; status: Booking['status'] }>) => {
      const booking = state.bookings.find(b => b.id === action.payload.id);
      if (booking) {
        booking.status = action.payload.status;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setSelectedRoom,
  addBooking,
  updateBookingStatus,
  setLoading,
  setError,
} = bookingSlice.actions;

export default bookingSlice.reducer;