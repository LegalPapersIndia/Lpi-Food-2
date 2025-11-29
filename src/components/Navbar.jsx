// src/components/Navbar.jsx - LUXURY PROFESSIONAL RESTAURANT (Pure White Elegant Theme)
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll effect for subtle shadow + border when scrolled
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Chefs', path: '/chefs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Luxury Fixed Navbar - Pure White Theme */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out
          ${isScrolled
            ? 'bg-white/98 backdrop-blur-2xl shadow-lg border-b border-gray-100'
            : 'bg-white/90 backdrop-blur-md'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20 lg:h-24">

          {/* Elegant Text Logo - LPI Food */}
          <NavLink 
            to="/" 
            className="text-4xl lg:text-5xl font-light tracking-widest text-slate-900 flex items-baseline gap-1"
          >
            LPI<span className="text-amber-600">Food</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm lg:text-base font-medium tracking-wide text-gray-700 
                   transition-all duration-500
                   ${isActive 
                     ? 'text-amber-600' 
                     : 'hover:text-amber-600'
                   } after:content-[''] after:absolute after:bottom-0 after:left-0 
                      after:w-0 after:h-0.5 after:bg-amber-600 
                      after:transition-all after:duration-500 hover:after:w-full
                      ${isActive ? 'after:w-full' : ''}`
                }
              >
                {link.name.toUpperCase()}
              </NavLink>
            ))}

            {/* Premium Gold Reservation Button */}
            <NavLink
              to="/reservation"
              className="relative overflow-hidden bg-gradient-to-r from-amber-600 to-amber-500 
                         hover:from-amber-500 hover:to-amber-400 text-white px-8 py-3.5 
                         rounded-none font-medium tracking-wider shadow-lg 
                         hover:shadow-amber-500/30 transform hover:-translate-y-0.5 
                         transition-all duration-500 group"
            >
              <span className="relative z-10">RESERVE A TABLE</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] 
                              group-hover:translate-x-full transition-transform duration-700" />
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 text-slate-900"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu - Elegant White Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white/98 backdrop-blur-3xl 
          flex items-center justify-center transition-all duration-700 
          ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="text-center space-y-12">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `block text-5xl lg:text-6xl font-light tracking-widest transition-all duration-700
                ${isActive 
                  ? 'text-amber-600' 
                  : 'text-gray-600 hover:text-amber-600'
                }`
              }
              style={{
                animation: isMobileMenuOpen 
                  ? `fadeInUp 0.8s ease-out ${index * 0.15}s both` 
                  : 'none'
              }}
            >
              {link.name.toUpperCase()}
            </NavLink>
          ))}

          <NavLink
            to="/reservation"
            className="inline-block mt-16 px-20 py-6 bg-amber-600 hover:bg-amber-500 
                       text-white text-2xl font-light tracking-widest shadow-2xl 
                       hover:shadow-amber-500/50 transition-all duration-700"
          >
            RESERVE A TABLE
          </NavLink>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-20 lg:h-24" />

      {/* Fade-in animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}