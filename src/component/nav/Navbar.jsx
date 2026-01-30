import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../../public/logo22.png';

function Navbar({ lang, setLang, t, isRtl }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItem = ({ to, label }) => {
    const isActive = location.pathname === to;
    
    return (
      <Link
        to={to}
        className={`transition-colors duration-200 font-medium ${
          isActive
            ? 'text-indigo-400'
            : 'text-gray-400 hover:text-white'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        {label}
      </Link>
    );
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'glass py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 bg-amber-50 rounded-md flex items-center justify-center">
              <img className="w-10 h-10 text-9xl" src={logo} alt="WebShift Logo" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight">
              WebShift<span className="text-indigo-500">.</span>
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavItem to="/" label={t.navHome} />
            <NavItem to="/about" label={t.navAbout} />
            <NavItem to="/services" label={t.navServices} />
            <NavItem to="/contact" label={t.navContact} />
            <NavItem to="/AIAdvisor" label={t.AiAdvisor} />

            {/* Language switch */}
            <div className="flex items-center gap-2 ml-4 p-1 rounded-full bg-gray-900 border border-gray-800">
              {['fr', 'en', 'ar'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase transition-all ${
                    lang === l
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 md:hidden">
          <NavItem to="/" label={t.navHome} />
          <NavItem to="/about" label={t.navAbout} />
          <NavItem to="/services" label={t.navServices} />
          <NavItem to="/portfolio" label={t.navPortfolio} />
          <NavItem to="/contact" label={t.navContact} />

          <div className="flex gap-4">
            {['fr', 'en', 'ar'].map((l) => (
              <button
                key={l}
                onClick={() => {
                  setLang(l);
                  setIsMenuOpen(false);
                }}
                className={`px-4 py-2 rounded ${
                  lang === l ? 'bg-indigo-600' : 'bg-gray-800'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;