import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const FooterQuickLinks: React.FC = () => (
  <div>
    <h3 className="text-lg font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-teal-500 after:rounded">
      Quick Links
    </h3>
    <ul className="list-none p-0 m-0">
      <li className="mb-3 flex items-center">
        <ChevronRight size={16} className="text-teal-500 mr-1" />
        <Link to="/" className="text-gray-300 hover:text-white transition">
          Home
        </Link>
      </li>
      <li className="mb-3 flex items-center">
        <ChevronRight size={16} className="text-teal-500 mr-1" />
        <Link to="/" className="text-gray-300 hover:text-white transition">
          About Us
        </Link>
      </li>
      <li className="mb-3 flex items-center">
        <ChevronRight size={16} className="text-teal-500 mr-1" />
        <Link to="/" className="text-gray-300 hover:text-white transition">
          Services
        </Link>
      </li>
      <li className="mb-3 flex items-center">
        <ChevronRight size={16} className="text-teal-500 mr-1" />
        <Link to="/" className="text-gray-300 hover:text-white transition">
          Products
        </Link>
      </li>
      <li className="mb-3 flex items-center">
        <ChevronRight size={16} className="text-teal-500 mr-1" />
        <Link to="/" className="text-gray-300 hover:text-white transition">
          Contact
        </Link>
      </li>
    </ul>
  </div>
);

export default FooterQuickLinks;
