import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Moon,
  Sun,
} from 'lucide-react';
import logo from '../assets/download.png';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );
  const location = useLocation();
  const servicesRef = useRef();

  // Toggle dark mode
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Close submenu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="WebCore AI Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700 dark:text-gray-200 relative">
          <li>
            <Link
              to="/"
              className={`hover:text-blue-600 ${isActive('/') ? 'text-blue-600 font-semibold' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`hover:text-blue-600 ${isActive('/about') ? 'text-blue-600 font-semibold' : ''}`}
            >
              About
            </Link>
          </li>
         
          <li className="relative group" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} >
            <span className="hover:text-blue-500 cursor-pointer">Services</span>
              {isServicesOpen && (
                <ul className="absolute left-0 mt-0 w-64 bg-blue-700 shadow z-50">
                  <li><Link to="/services/web-development" className="block px-4 py-2 text-white font-semibold hover:bg-gray-600">Web Development</Link></li>
                  <li><Link to="/services/android-development" className="block px-4 py-2 text-white font-semibold hover:bg-gray-600">Android Development</Link></li>
                  <li><Link to="/services/ai-automation" className="block px-4 py-2 text-white font-semibold hover:bg-gray-600">AI Automation</Link></li>
                </ul>
              )}
          </li>

          
          <li>
            <Link
              to="/contact"
              className={`hover:text-blue-600 ${isActive('/contact') ? 'text-blue-600 font-semibold' : ''}`}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/career"
              className={`hover:text-blue-600 ${isActive('/career') ? 'text-blue-600 font-semibold' : ''}`}
            >
              Career
            </Link>
          </li>
        </ul>

        {/* Theme toggle */}
        <button onClick={() => setDarkMode(!darkMode)} className="ml-4 text-gray-600 dark:text-gray-300">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden ml-4 text-gray-800 dark:text-gray-200"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 shadow-lg transform transition-transform duration-300 z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b dark:border-gray-700">
          <img src={logo} alt="Logo" className="h-8" />
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 dark:text-gray-200">
            <X size={24} />
          </button>
        </div>
        <div className="px-4 py-4 space-y-3">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-2">Home</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2">About</Link>
          <details className="group">
            <summary className="flex items-center justify-between py-2 cursor-pointer">
              <span>Services</span>
              <ChevronDown className="transform group-open:rotate-180 transition" size={16} />
            </summary>
            <ul className="pl-4 space-y-1">
              <li><Link to="/services/web-development" onClick={() => setIsMobileMenuOpen(false)} className="block py-1">Web Development</Link></li>
              <li><Link to="/services/android-development" onClick={() => setIsMobileMenuOpen(false)} className="block py-1">Android Development</Link></li>
              <li><Link to="/services/ai-automation" onClick={() => setIsMobileMenuOpen(false)} className="block py-1">AI Automation</Link></li>
            </ul>
          </details>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-2">Contact Us</Link>
          <Link to="/career" onClick={() => setIsMobileMenuOpen(false)} className="block py-2">Career</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
