
import React from 'react';
import { navLinks } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center text-center md:text-left">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h4 className="text-xl font-bold mb-2" style={{ fontFamily: "'Arima Madurai', cursive" }}>priaschool</h4>
            <p className="text-gray-400 text-sm">Copyright © 2025 All rights reserved</p>
          </div>
          <div className="w-full md:w-1/2">
            <ul className="flex justify-center md:justify-end space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
