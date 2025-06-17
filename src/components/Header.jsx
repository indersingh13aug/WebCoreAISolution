import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo33.jpg'; // Make sure logo is in src/assets

const Header = () => {
  const [openServices, setOpenServices] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto h-16">
        <Link to="/" className="flex items-center h-16">
  <img
    src={logo}
    alt="WebCore AI Solutions Logo"
    className="h-full w-auto object-contain"
  />
</Link>


        <ul className="flex space-x-6 font-medium text-gray-700 relative">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li
            onMouseEnter={() => setOpenServices(true)}
            onMouseLeave={() => setOpenServices(false)}
            className="relative cursor-pointer"
          >
            <span>Services ▾</span>
            {openServices && (
              <ul className="absolute top-full left-0 bg-white border mt-2 shadow-md space-y-2 px-4 py-2 w-52 z-50">
                <li><Link to="/services/web-development">Web Development</Link></li>
                <li><Link to="/services/android-development">Android Development</Link></li>
                <li><Link to="/services/ai-automation">AI Automation</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/career">Career</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
