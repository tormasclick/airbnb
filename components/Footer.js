import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 md:px-8 flex flex-wrap justify-between">
        {/* Social Media Links */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Contact Details */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>Email: <a href="mailto:contact@example.com" className="hover:text-white">contact@example.com</a></p>
          <p>Phone: <a href="tel:+15551234567" className="hover:text-white">+1 (555) 123-4567</a></p>
          <p>Address: 123 Example Street, City, Country</p>
        </div>

        {/* Terms & Conditions */}
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Terms & Conditions</h3>
          <p>
            <a href="/terms" className="hover:text-white">Terms of Service</a>
          </p>
          <p>
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p>© {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
