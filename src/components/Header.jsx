import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // icon library
import logo from '../assets/logo33.jpg';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="flex items-center justify-between px-4 max-w-7xl mx-auto h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center h-16">
          <img
            src={logo}
            alt="WebCore AI Solutions Logo"
            className="h-full w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700 relative">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li className="relative group" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} >
            <span className="hover:text-blue-500 cursor-pointer">Services</span>
              {isServicesOpen && (
                <ul className="absolute left-0 mt-0 w-64 bg-gray-700 shadow z-50">
                  <li><Link to="/services/web-development" className="block px-4 py-2 text-white font-semibold hover:bg-gray-600">Web Development</Link></li>
                  <li><Link to="/services/android-development" className="block px-4 py-2 text-white font-semibold hover:bg-gray-600">Android Development</Link></li>
                  <li><Link to="/services/ai-automation" className="block px-4 py-2 text-white font-semibold hover:bg-gray-600">AI Automation</Link></li>
                </ul>
              )}
          </li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/career">Career</Link></li>
        </ul>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col space-y-4 p-4 font-medium text-gray-700">
            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>

            {/* Mobile Services Dropdown */}
            <li>
              <button
                className="flex justify-between items-center w-full"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <span>Services</span>
                <span>{mobileServicesOpen ? '▴' : '▾'}</span>
              </button>
              {mobileServicesOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li><Link to="/services/web-development" onClick={() => setMobileMenuOpen(false)}>Web Development</Link></li>
                  <li><Link to="/services/android-development" onClick={() => setMobileMenuOpen(false)}>Android Development</Link></li>
                  <li><Link to="/services/ai-automation" onClick={() => setMobileMenuOpen(false)}>AI Automation</Link></li>
                </ul>
              )}
            </li>

            <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link></li>
            <li><Link to="/career" onClick={() => setMobileMenuOpen(false)}>Career</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
