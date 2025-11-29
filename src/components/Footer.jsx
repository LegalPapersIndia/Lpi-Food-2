// src/components/Footer.jsx - LUXURY WHITE & GOLD PROFESSIONAL THEME
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Youtube,
  ChefHat
} from 'lucide-react';

export default function Footer() {
  const navLinks = [
    "Home", "About", "Menu", "Chefs", "Gallery", "Events", "Testimonials", "Contact"
  ];

  return (
    <footer className="bg-white border-t border-amber-100 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

        {/* Brand & Philosophy */}
        <div className="space-y-10">
          <div>
            <h2 className="text-6xl font-light tracking-widest text-slate-900 flex items-baseline gap-1">
              LPI<span className="text-amber-600">Food</span>
            </h2>
            <p className="text-lg text-amber-600 font-medium tracking-wider mt-2">
              Royal Indian Fine Dining
            </p>
          </div>

          <p className="text-slate-600 text-lg leading-relaxed font-light max-w-xs">
            Where ancient culinary wisdom meets modern artistry. 
            Every dish is a tribute to India’s 5000-year heritage — served with grace, precision, and soul.
          </p>

          {/* Social Icons - Minimal Gold */}
          <div className="flex gap-5">
            <a href="#" className="w-14 h-14 rounded-full border-2 border-slate-300 hover:border-amber-500 hover:bg-amber-50 transition-all duration-500 flex items-center justify-center group">
              <Instagram className="w-6 h-6 text-slate-600 group-hover:text-amber-600 transition" />
            </a>
            <a href="#" className="w-14 h-14 rounded-full border-2 border-slate-300 hover:border-amber-500 hover:bg-amber-50 transition-all duration-500 flex items-center justify-center group">
              <Facebook className="w-6 h-6 text-slate-600 group-hover:text-amber-600 transition" />
            </a>
            <a href="#" className="w-14 h-14 rounded-full border-2 border-slate-300 hover:border-amber-500 hover:bg-amber-50 transition-all duration-500 flex items-center justify-center group">
              <Youtube className="w-6 h-6 text-slate-600 group-hover:text-amber-600 transition" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-3xl font-medium text-slate-900 mb-10 tracking-wide">Explore</h3>
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link}>
                <Link
                  to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "")}`}
                  className="text-lg text-slate-600 hover:text-amber-600 font-light transition-all duration-300 flex items-center gap-4 group"
                >
                  <span className="w-8 h-px bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Visit Us */}
        <div>
          <h3 className="text-3xl font-medium text-slate-900 mb-10 tracking-wide">Visit Us</h3>
          <div className="space-y-8 text-slate-600 text-lg font-light">
            <div className="flex items-start gap-5">
              <MapPin className="w-7 h-7 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <p>F-2, Sector 8</p>
                <p>Noida, Uttar Pradesh</p>
                <p className="text-amber-600 font-medium">India 201301</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <Phone className="w-7 h-7 text-amber-600" />
              <a href="tel:+917505266931" className="hover:text-amber-600 transition">+91 750 526 6931</a>
            </div>

            <div className="flex items-center gap-5">
              <Mail className="w-7 h-7 text-amber-600" />
              <a href="mailto:reservations@lpifood.com" className="hover:text-amber-600 transition">
                reservations@lpifood.com
              </a>
            </div>

            <div className="flex items-start gap-5">
              <Clock className="w-7 h-7 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <p>Lunch ⋅ 12:00 PM – 3:00 PM</p>
                <p>Dinner ⋅ 7:00 PM – 11:30 PM</p>
                <p className="text-amber-600 font-medium mt-2">Open Daily</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA - Regal */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-medium text-slate-900 mb-8 tracking-wide">
              Your Table Awaits
            </h3>
            <p className="text-lg text-slate-600 font-light mb-10 leading-relaxed">
              Step into a world where every moment is crafted for eternity.
            </p>
          </div>

          <Link
            to="/reservation"
            className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-amber-600 to-amber-500 
                       hover:from-amber-500 hover:to-amber-400 text-white px-16 py-7 
                       text-xl font-medium tracking-widest uppercase shadow-xl hover:shadow-amber-500/30 
                       transform hover:-translate-y-1 transition-all duration-500"
          >
            <ChefHat className="w-8 h-8" />
            Reserve Your Experience
            <ChefHat className="w-8 h-8" />
          </Link>
        </div>

      </div>

      {/* Elegant Bottom Bar */}
      <div className="mt-20 pt-10 border-t border-amber-100 text-center">
        <p className="text-slate-500 text-sm md:text-base font-light">
          © 2025 <span className="text-amber-600 font-medium">LPI Food</span> • Royal Indian Fine Dining
          <span className="mx-3 text-slate-400">•</span>
          <span className="text-amber-600">Crafted with devotion in India</span>
        </p>
      </div>
    </footer>
  );
}