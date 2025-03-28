
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';
import { BookingDates } from '../types';

interface DatePickerProps {
  dates: BookingDates;
  onDatesChange: (dates: BookingDates) => void;
}

export function DatePicker({ dates, onDatesChange }: DatePickerProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
        <div className="relative">
          <input
            type="date"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
            value={dates.checkIn ? format(dates.checkIn, 'yyyy-MM-dd') : ''}
            onChange={(e) => onDatesChange({ ...dates, checkIn: e.target.value ? new Date(e.target.value) : null })}
            min={format(new Date(), 'yyyy-MM-dd')}
          />
          <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
        <div className="relative">
          <input
            type="date"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
            value={dates.checkOut ? format(dates.checkOut, 'yyyy-MM-dd') : ''}
            onChange={(e) => onDatesChange({ ...dates, checkOut: e.target.value ? new Date(e.target.value) : null })}
            min={dates.checkIn ? format(dates.checkIn, 'yyyy-MM-dd') : format(new Date(), 'yyyy-MM-dd')}
          />
          <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}