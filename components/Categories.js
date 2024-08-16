import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faTree,
  faSun,
  faHome,
  faMountain,
  faCity,
  faLeaf,
  faFarm,
  faGlobeAmericas,
} from '@fortawesome/free-solid-svg-icons';

// Import category components
import SafariLodges from './SafariLodges';
import BeachfrontVillas from './BeachfrontVillas';
import Treehouses from './Treehouses';
import Cottages from './Cottages';
import LuxuryVillas from './LuxuryVillas';
import EcoFriendlyHomes from './EcoFriendlyHomes';
import CityApartments from './CityApartments';
import FarmStays from './FarmStays';
import MountainCabins from './MountainCabins';
import UniqueStays from './UniqueStays';

// Updated categories array with descriptions
const categories = [
  { name: 'Safari Lodges', icon: faTree, component: <SafariLodges />, description: 'Explore unique safari lodges with stunning wildlife views and immersive nature experiences.' },
  { name: 'Beachfront Villas', icon: faSun, component: <BeachfrontVillas />, description: 'Discover luxurious beachfront villas offering breathtaking ocean views and exclusive amenities.' },
  { name: 'Treehouses', icon: faGlobeAmericas, component: <Treehouses />, description: 'Stay in charming treehouses nestled in nature, offering a cozy and adventurous experience.' },
  { name: 'Cottages', icon: faHome, component: <Cottages />, description: 'Enjoy a peaceful retreat in charming cottages with homey comforts and picturesque settings.' },
  { name: 'Luxury Villas', icon: faMountain, component: <LuxuryVillas />, description: 'Experience opulence in luxury villas featuring high-end amenities and exceptional service.' },
  { name: 'Eco-friendly Homes', icon: faLeaf, component: <EcoFriendlyHomes />, description: 'Stay in eco-friendly homes designed to be sustainable and minimize environmental impact.' },
  { name: 'City Apartments', icon: faCity, component: <CityApartments />, description: 'Find convenience and style in city apartments that offer easy access to urban attractions.' },
  { name: 'Farm Stays', icon: faTree, component: <FarmStays />, description: 'Immerse yourself in rural life with farm stays that offer authentic agricultural experiences.' },
  { name: 'Mountain Cabins', icon: faMountain, component: <MountainCabins />, description: 'Relax in mountain cabins with stunning views and tranquil surroundings for a perfect escape.' },
  { name: 'Unique Stays', icon: faGlobeAmericas, component: <UniqueStays />, description: 'Discover unique and unconventional stays that offer memorable and distinctive experiences.' },
];

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(0); // Set first category as active by default
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    setSelectedCategory(0); // Ensure the first tab is active on component mount
  }, []);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -200,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 200,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative">
      {/* Scroll Left Button */}
      <button
        className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg z-10"
        onClick={scrollLeft}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="text-gray-800 dark:text-white"
        />
      </button>

      {/* Scroll Right Button */}
      <button
        className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg z-10"
        onClick={scrollRight}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-gray-800 dark:text-white"
        />
      </button>

      <div
        className="flex overflow-x-auto scrollbar-hide space-x-4 p-4"
        ref={scrollContainerRef}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className={`min-w-max text-center px-2 py-1 flex flex-col items-center cursor-pointer ${
              selectedCategory === index ? 'bg-gray-200 dark:bg-gray-700' : ''
            }`}
            onClick={() => setSelectedCategory(index)}
          >
            <FontAwesomeIcon
              icon={category.icon}
              className="text-3xl text-gray-800 dark:text-white"
            />
            <span className="mt-2 text-gray-800 dark:text-white text-sm">
              {category.name}
            </span>
          </div>
        ))}
      </div>

      {/* Content Description and Category Component */}
      <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
        {selectedCategory !== null ? (
          <>
            <div className="text-gray-800 dark:text-white">
              <h3
                className="text-xl font-semibold mb-2"
                style={{
                  borderLeft: '10px solid #FF8300',
                  paddingLeft: '15px',
                }}
              >
                {categories[selectedCategory].name}
              </h3>
              <p>{categories[selectedCategory].description}</p>
            </div>
            {/* Display the relevant category component */}
            {categories[selectedCategory].component}
          </>
        ) : (
          <p className="text-gray-800 dark:text-white">
            Select a category to see the description and listings.
          </p>
        )}
      </div>
    </div>
  );
}