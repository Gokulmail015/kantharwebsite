import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-teal-500 after:rounded"></h3>
              <h4 className="text-sm text-teal-400 uppercase tracking-wider mb-3">INDUSTRIAL SOLUTIONS</h4>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                Specializing in delivering advanced data analysis solutions tailored to
                the unique machinery and processes of various manufacturing industries.
              </p>
              <div className="flex gap-2">
                <a href="#" className="flex items-center justify-center w-9 h-9 bg-white/10 text-white rounded-full hover:bg-blue-600 transition">
                  <Facebook size={18} />
                </a>
                <a href="#" className="flex items-center justify-center w-9 h-9 bg-white/10 text-white rounded-full hover:bg-blue-600 transition">
                  <Twitter size={18} />
                </a>
                <a href="#" className="flex items-center justify-center w-9 h-9 bg-white/10 text-white rounded-full hover:bg-blue-600 transition">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="flex items-center justify-center w-9 h-9 bg-white/10 text-white rounded-full hover:bg-blue-600 transition">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-teal-500 after:rounded">Quick Links</h3>
              <ul className="list-none p-0 m-0">
                <li className="mb-3 flex items-center">
                  <ChevronRight size={16} className="text-teal-500 mr-1" />
                  <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
                </li>
                <li className="mb-3 flex items-center">
                  <ChevronRight size={16} className="text-teal-500 mr-1" />
                  <Link to="/" className="text-gray-300 hover:text-white transition">About Us</Link>
                </li>
                <li className="mb-3 flex items-center">
                  <ChevronRight size={16} className="text-teal-500 mr-1" />
                  <Link to="/" className="text-gray-300 hover:text-white transition">Services</Link>
                </li>
                <li className="mb-3 flex items-center">
                  <ChevronRight size={16} className="text-teal-500 mr-1" />
                  <Link to="/" className="text-gray-300 hover:text-white transition">Products</Link>
                </li>
                <li className="mb-3 flex items-center">
                  <ChevronRight size={16} className="text-teal-500 mr-1" />
                  <Link to="/" className="text-gray-300 hover:text-white transition">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-teal-500 after:rounded">Solutions</h3>
              <ul className="list-none p-0 m-0">
                <li className="mb-3 flex items-center">
                  <ChevronRight size={16} className="text-teal-500 mr-1" />
                  <Link to="/" className="text-gray-300 hover:text-white transition">Predictive Maintenance</Link>
                </li>
                <li className="mb-3 flex items-center">
                  <ChevronRight size={16} className="text-teal-500 mr-1" />
                  <Link to="/" className="text-gray-300 hover:text-white transition">OEE Solutions</Link>
                </li>
                <li className="mb-3 flex items-center">
                  <ChevronRight size={16} className="text-teal-500 mr-1" />
                  <Link to="/" className="text-gray-300 hover:text-white transition">Data Analytics</Link>
                </li>
                <li className="mb-3 flex items-center">
                  <ChevronRight size={16} className="text-teal-500 mr-1" />
                  <Link to="/" className="text-gray-300 hover:text-white transition">Industrial IoT</Link>
                </li>
                <li className="mb-3 flex items-center">
                  <ChevronRight size={16} className="text-teal-500 mr-1" />
                  <Link to="/" className="text-gray-300 hover:text-white transition">Process Optimization</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-teal-500 after:rounded">Contact Us</h3>
              <div className="flex items-start mb-3">
                <Phone size={16} className="text-teal-500 mr-2 mt-1" />
                <div>
                  <p className="mb-1 text-gray-300 text-sm">TEXT: +91 9444042142</p>
                </div>
              </div>
              <div className="flex items-start mb-3">
                <Mail size={16} className="text-teal-500 mr-2 mt-1" />
                <p className="mb-1 text-gray-300 text-sm">ed@kantharindustrialsolutions.in</p>
              </div>
              <div className="mt-4">
                <h4 className="text-base mb-2 text-gray-200">Subscribe to our newsletter</h4>
                <div className="flex">
                  <input type="email" placeholder="Your email" className="flex-grow px-3 py-2 border border-gray-700 bg-gray-800 text-white rounded-l text-sm focus:outline-none focus:border-teal-500" />
                  <button type="submit" className="bg-teal-600 text-white border-none px-3 py-2 rounded-r font-semibold hover:bg-teal-700 transition">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 border-t border-gray-800 text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 m-0">© 2025 KANTHAR INDUSTRIAL SOLUTIONS. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="text-gray-400 hover:text-white transition">Privacy Policy</Link>
            <Link to="/" className="text-gray-400 hover:text-white transition">Terms of Service</Link>
            <Link to="/" className="text-gray-400 hover:text-white transition">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;