import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '@/components/Footer';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaWifi, FaCar, FaChild, FaMugHot, FaSun } from 'react-icons/fa';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from 'react-share';

const Property = () => {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  // URL to be shared (current page)
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className={`bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300 min-h-screen`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="container mx-auto p-6">
        {/* Property Title and Location */}
        <h2 className="text-3xl font-semibold mb-4">Property Name</h2>
        <p className="text-lg mb-6">Location: City, Country</p>

        {/* Featured Image and Property Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Featured Image */}
          <div className="w-full">
            <img
              src="/images/featured-image.jpg"
              alt="Featured"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Property Description */}
          <div className="w-full">
            <h3 className="text-2xl font-semibold mb-2">Property Description</h3>
            <p className="text-lg">
              Placeholder description for the property. This section will be populated with data from an API, providing detailed information about the property, including amenities, size, and other relevant information.
            </p>
          </div>
        </div>

        {/* Photo Grid and Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Photo Gallery</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Placeholder images, replace with dynamic images later */}
              <img src="/images/image1.jpg" alt="Gallery 1" className="w-full h-auto rounded-lg" />
              <img src="/images/image2.jpg" alt="Gallery 2" className="w-full h-auto rounded-lg" />
              <img src="/images/image3.jpg" alt="Gallery 3" className="w-full h-auto rounded-lg" />
              <img src="/images/image4.jpg" alt="Gallery 4" className="w-full h-auto rounded-lg" />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Map</h3>
            {/* Placeholder for map */}
            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
          </div>
        </div>

        {/* Most Popular Facilities */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Most Popular Facilities</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaWifi className="mr-2" /> Fast free WiFi (612 Mbps)
            </li>
            <li className="flex items-center">
              <FaCar className="mr-2" /> Free parking
            </li>
            <li className="flex items-center">
              <FaChild className="mr-2" /> Family rooms
            </li>
            <li className="flex items-center">
              <FaMugHot className="mr-2" /> Tea/coffee maker in all rooms
            </li>
            <li className="flex items-center">
              <FaSun className="mr-2" /> Terrace
            </li>
          </ul>
        </div>

        {/* Availability and Room Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Availability</h3>
            <p className="text-lg">Placeholder for availability information. Data will be fetched from an API.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Room Type</h3>
            <p className="text-lg">Placeholder for room type information. Data will be fetched from an API.</p>
            <p className="text-lg">Number of guests: Placeholder</p>
          </div>
        </div>

        {/* Property Surroundings */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Property Surroundings</h3>
          <p className="text-lg">Placeholder for property surroundings. Data will be fetched from an API.</p>
        </div>

        {/* Social Media Share Icons */}
        <div className="flex space-x-4">
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <WhatsappShareButton url={shareUrl}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Property;
