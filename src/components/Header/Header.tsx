import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when menu is open on mobile
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`w-full fixed top-0 left-0 z-[1000] transition-all ${isScrolled ? 'shadow-lg bg-white/95' : ''}`}>
      {/* Only show top bar on desktop */}
      <div className="hidden md:block">
        <div className="h-8 flex items-center bg-white shadow-sm">
          <div className="container mx-auto flex justify-end items-center h-full">
            <div className="flex gap-6 items-center flex-wrap bg-gradient-to-r from-blue-700 to-blue-400 px-6 py-1.5 rounded-full shadow font-semibold text-white text-base min-w-0">
              <div className="flex items-center gap-2 text-base h-auto whitespace-nowrap bg-blue-700/20 px-3 py-0.5 rounded-full font-semibold shadow">
                <Phone size={16} className="bg-blue-700 text-white rounded-full shadow p-0.5" />
                <span>TEXT: 99999999 | TOLL FREE: 00000000 | E: consultancy@kantharindustrialsolutions.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`bg-white/95 transition-all ${isScrolled ? 'py-2' : 'py-3'}`}>
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center no-underline text-inherit">
              <div className="w-20 h-20 md:w-28 md:h-28 mr-0 md:mr-3 flex-shrink-0">
                <img src={logo} alt="Industrial Solutions Logo" className="w-full h-full object-contain" />
              </div>
              {/* Hide name and subtitle on mobile, show on md+ */}
              <div className="hidden md:flex flex-col">
                <h1 className="text-4xl mb-0 text-gray-800 font-bold"><span className="font-bold text-gray-700">KANTHAR</span></h1>
                <h2 className="text-2xl mb-0 text-teal-800 font-medium uppercase tracking-wider">&emsp;&emsp;&emsp;INDUSTRIAL SOLUTIONS</h2>
              </div>
            </Link>
          </div>
          {/* Desktop Nav */}
          <nav className={`hidden md:flex flex-row transition-all`}>
            <ul className="flex flex-row items-center gap-8 list-none">
              <li><Link to="/" className="no-underline text-gray-800 font-medium text-base relative py-1 hover:text-blue-600">Services</Link></li>
              <li><Link to="/" className="no-underline text-gray-800 font-medium text-base relative py-1 hover:text-blue-600">Partners</Link></li>
              <li><Link to="/" className="no-underline text-gray-800 font-medium text-base relative py-1 hover:text-blue-600">Our Company</Link></li>
              <li><Link to="/" className="no-underline text-gray-800 font-medium text-base relative py-1 hover:text-blue-600">Socials</Link></li>
              <li><Link to="/" className="no-underline text-gray-800 font-medium text-base relative py-1 hover:text-blue-600">Contact</Link></li>
              <li><Link to="/" className="no-underline text-gray-800 font-medium text-base relative py-1 hover:text-blue-600">Shop</Link></li>
              <li>
                <Link to="/" className="bg-pink-700 text-white px-4 py-2 rounded hover:bg-blue-800 font-semibold transition-colors">Quote</Link>
              </li>
            </ul>
          </nav>
          {/* Mobile Menu Toggle */}
          <button className="block md:hidden bg-none border-none text-gray-800 cursor-pointer ml-4 z-[1100]" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {/* Mobile Nav Overlay */}
        <div
          className={`fixed inset-0 bg-black/40 z-[1099] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={toggleMenu}
        />
        {/* Mobile Nav Drawer */}
        <nav
          className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-lg z-[1100] flex flex-col transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <div className="w-14 h-14 flex-shrink-0">
              <img src={logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <button className="bg-none border-none text-gray-800 cursor-pointer" onClick={toggleMenu}>
              <X size={28} />
            </button>
          </div>
          <ul className="flex flex-col items-stretch p-8 gap-8 list-none">
            {/* Show contact info in menu on mobile */}
            <li className="block md:hidden mb-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-base h-auto whitespace-nowrap">
                  <Phone size={16} className="bg-blue-700 text-white rounded-full shadow p-0.5" />
                  <span className="text-gray-800 font-semibold">TEXT: 99999999</span>
                </div>
                <div className="flex items-center gap-2 text-base h-auto whitespace-nowrap">
                  <span className="text-gray-800 font-semibold">TOLL FREE: 00000000</span>
                </div>
                <div className="flex items-center gap-2 text-base h-auto whitespace-normal break-all">
                  <span className="text-gray-800 font-semibold">E: consultancy@kantharindustrialsolutions.in</span>
                </div>
              </div>
            </li>
            <li><Link to="/" className="no-underline text-gray-800 font-medium text-base py-2 hover:text-blue-600" onClick={toggleMenu}>Services</Link></li>
            <li><Link to="/" className="no-underline text-gray-800 font-medium text-base py-2 hover:text-blue-600" onClick={toggleMenu}>Partners</Link></li>
            <li><Link to="/" className="no-underline text-gray-800 font-medium text-base py-2 hover:text-blue-600" onClick={toggleMenu}>Our Company</Link></li>
            <li><Link to="/" className="no-underline text-gray-800 font-medium text-base py-2 hover:text-blue-600" onClick={toggleMenu}>Socials</Link></li>
            <li><Link to="/" className="no-underline text-gray-800 font-medium text-base py-2 hover:text-blue-600" onClick={toggleMenu}>Contact</Link></li>
            <li><Link to="/" className="no-underline text-gray-800 font-medium text-base py-2 hover:text-blue-600" onClick={toggleMenu}>Shop</Link></li>
            <li>
              <Link to="/" className="bg-pink-700 text-white px-4 py-2 rounded hover:bg-blue-800 font-semibold transition-colors" onClick={toggleMenu}>Quote</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;