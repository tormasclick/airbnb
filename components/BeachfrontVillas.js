import React from 'react';

const BeachfrontVillas = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="border rounded-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700">
            <div className="h-40 bg-gray-300 dark:bg-gray-700"></div>
            <div className="p-4">
              <h3 className="text-xl font-semibold dark:text-white text-gray-800">Villa {index + 1}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                A luxurious beachfront villa with stunning ocean views.
              </p>
              <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline">Read More</a>
              <div className="mt-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded dark:bg-blue-600 hover:bg-blue-600">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeachfrontVillas;
