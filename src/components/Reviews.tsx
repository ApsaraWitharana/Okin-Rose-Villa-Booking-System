import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { reviews } from '../data/content';

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Guest Reviews</h2>
          <p className="mt-2 text-lg text-gray-600">What our guests say about their stay</p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{review.comment}"</p>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors
                  ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}