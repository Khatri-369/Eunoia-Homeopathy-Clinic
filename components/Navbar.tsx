import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Calendar, Phone, Instagram, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import '../styles/SocialIcons.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Student Portal', path: '/student' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar - Professional Medical Style */}
      <div className="bg-primary text-white text-sm py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <a href={CONTACT_INFO.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 opacity-90 hover:opacity-100 transition-opacity cursor-pointer">
              <MapPin size={14} /> Gotri, Vadodara
            </a>
            <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-1 opacity-90 hover:opacity-100 transition-opacity">
              <Phone size={14} /> {CONTACT_INFO.phone}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <ul className="social-wrapper">
              <li className="social-icon facebook">
                <span className="social-tooltip">Facebook</span>
                <a href={CONTACT_INFO.facebookLink} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg
                    viewBox="0 0 320 512"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="social-icon instagram">
                <span className="social-tooltip">Instagram</span>
                <a href={CONTACT_INFO.instagramLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">

          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 flex items-center justify-center bg-rose-50 rounded-full border-2 border-primary/20 overflow-hidden group-hover:shadow-md transition-all p-1">
              <img src="/eunoia_logo.jpg" alt="Eunoia Homoeopathy Logo" className="object-contain w-full h-full" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-gray-800 leading-tight group-hover:text-primary transition-colors whitespace-nowrap">
                Eunoia Homoeopathy
              </h1>
              <p className="text-[9px] sm:text-[10px] md:text-xs text-secondary font-bold tracking-wider uppercase">
                Dr. Hetal Pandav
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex space-x-1">
              {navLinks.map((link, idx) => (
                <NavLink
                  key={idx}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${isActive && link.path !== '/'
                      ? 'text-primary bg-rose-50'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
            <Link
              to="/book-appointment"
              className="flex items-center gap-2 bg-secondary hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-md transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Calendar size={16} />
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-primary p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4 absolute w-full shadow-xl">
          <nav className="flex flex-col space-y-2 px-4">
            {navLinks.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-rose-50 text-primary' : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-2">
              <Link
                to="/book-appointment"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-secondary text-white w-full py-3 rounded-lg font-bold text-sm shadow-sm active:scale-95 transition-transform"
              >
                <Calendar size={16} />
                Book Appointment
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;