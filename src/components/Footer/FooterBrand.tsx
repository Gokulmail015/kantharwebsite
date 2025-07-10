import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const FooterBrand: React.FC = () => (
  <div>
    <h3 className="text-lg font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-teal-500 after:rounded">
      KANTHAR
    </h3>
    <h4 className="text-sm text-teal-400 uppercase tracking-wider mb-3">
      INDUSTRIAL SOLUTIONS
    </h4>
    <p className="text-sm text-gray-400 mb-4 leading-relaxed">
      Specializing in delivering advanced data analysis solutions tailored to
      the unique machinery and processes of various manufacturing industries.
    </p>
    <div className="flex gap-2">
      <a
        href="#"
        className="flex items-center justify-center w-9 h-9 bg-white/10 text-white rounded-full hover:bg-blue-600 transition"
      >
        <Facebook size={18} />
      </a>
      <a
        href="#"
        className="flex items-center justify-center w-9 h-9 bg-white/10 text-white rounded-full hover:bg-blue-600 transition"
      >
        <Twitter size={18} />
      </a>
      <a
        href="https://www.linkedin.com/company/kanthar-industrial-solutions/"
        className="flex items-center justify-center w-9 h-9 bg-white/10 text-white rounded-full hover:bg-blue-600 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin size={18} />
      </a>
      <a
        href="#"
        className="flex items-center justify-center w-9 h-9 bg-white/10 text-white rounded-full hover:bg-blue-600 transition"
      >
        <Instagram size={18} />
      </a>
    </div>
  </div>
);

export default FooterBrand;
