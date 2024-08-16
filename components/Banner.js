import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Banner({ featuredProperties }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic sliding every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval); // Clear the interval on unmount
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProperties.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredProperties.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
      {/* Caption */}
      <div className="w-full md:w-1/4 mb-4 md:mb-0">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white"> {/* Increased font size */}
          Experience the World, Your Way.
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-lg"> {/* Slightly increased font size */}
          Enjoy flexibility, comfort, and authentic travel experiences with Airbnb.
        </p>
        <a 
          href="https://www.airbnb.com" 
          className="mt-4 inline-block bg-[#FF8300] text-white font-bold py-2 px-4 rounded">
          Reserve AirBnB
        </a>
      </div>

      {/* Image Slider */}
      <div className="w-full md:w-3/4 relative h-60"> {/* Adjusted width and height */}
        <div className="relative h-full">
          <Image
            src={featuredProperties[currentIndex].imageUrl}
            alt={featuredProperties[currentIndex].name}
            className="rounded-lg object-cover"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
            Featured
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full opacity-75 hover:opacity-100"
          >
            &#8249;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full opacity-75 hover:opacity-100"
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
}
