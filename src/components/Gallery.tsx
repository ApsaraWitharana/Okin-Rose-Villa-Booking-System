import { useState } from 'react';
import { galleryImages } from '../data/content';

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = ['all', ...new Set(galleryImages.map(img => img.category))];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="py-12  ml-20 mr-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Our Gallery</h2>
        <p className="mt-2 text-lg text-gray-600">Experience luxury through our lens</p>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${selectedCategory === category 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map(image => (
          <div 
            key={image.id}
            className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <h3 className="text-xl font-semibold">{image.title}</h3>
                <p className="mt-2">{image.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}