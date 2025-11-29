// src/pages/Gallerypage.jsx - LUXURY WHITE & GOLD MASTERPIECE
import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Utensils, Sparkles, Instagram, Camera } from 'lucide-react';

const galleryImages = [
  { category: "The Royal Thali", img: "https://images.unsplash.com/photo-1628296550654-1c9a14e9c1ce?w=1200&q=90" },
  { category: "Tandoor Symphony", img: "https://images.unsplash.com/photo-1599481238640-4c128875a7f8?w=1200&q=90" },
  { category: "Spice Alchemy", img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=1200&q=90" },
  { category: "Gulab & Gold", img: "https://images.unsplash.com/photo-1563805042-7684c7f057f3?w=1200&q=90" },
  { category: "Heritage Kitchen", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=90" },
  { category: "Diya & Devotion", img: "https://images.unsplash.com/photo-1606890658317-8c8d874c9b76?w=1200&q=90" },
  { category: "Street to Star", img: "https://images.unsplash.com/photo-1567335991483-0d2e7546bd02?w=1200&q=90" },
  { category: "Mandap Majesty", img: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1200&q=90" },
  { category: "Saffron Dreams", img: "https://images.unsplash.com/photo-1631518736734-93e77c8e3e8c?w=1200&q=90" },
  { category: "Royal Service", img: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=1200&q=90" },
  { category: "Live Chaats", img: "https://images.unsplash.com/photo-1604382354936-07adb2acfa27?w=1200&q=90" },
  { category: "Midnight Masala", img: "https://images.unsplash.com/photo-1625225230517-2f2c2df2db2d?w=1200&q=90" }
];

export default function Gallerypage() {
  return (
    <>
      {/* Hero – Monumental & Sacred */}
      <section 
        className="relative h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=90&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-white/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/60 via-transparent to-amber-50/40" />

        <div className="relative text-center px-8 max-w-7xl mx-auto">
          <h1 className="text-7xl md:text-9xl lg:text-10xl font-light tracking-widest text-slate-900 mb-8 leading-none">
            Gallery
          </h1>
          <p className="text-4xl md:text-6xl font-medium text-amber-700 tracking-wider mb-6">
            A Visual Feast of Indian Soul
          </p>
          <p className="text-2xl md:text-3xl text-slate-700 font-extralight italic max-w-5xl mx-auto leading-relaxed">
            Where every frame captures the poetry of flavor, fire, and five thousand years of tradition
          </p>

          <div className="flex justify-center gap-16 mt-20">
            <Camera className="w-14 h-14 text-amber-600 animate-pulse" />
            <Flame className="w-16 h-16 text-amber-600 animate-pulse delay-300" />
            <Sparkles className="w-14 h-14 text-amber-600 animate-pulse delay-700" />
          </div>
        </div>
      </section>

      {/* Gallery Grid – Royal Exhibition */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 auto-rows-[320px]">
            {galleryImages.map((item, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl 
                           transition-all duration-700 cursor-pointer
                           ${i === 0 || i === 7 ? 'row-span-2' : ''}
                           ${i === 4 || i === 9 ? 'col-span-2 row-span-2' : ''}`}
              >
                <img
                  src={item.img}
                  alt={item.category}
                  className="w-full h-full object-cover transition-transform duration-1000 
                             group-hover:scale-110 grayscale group-hover:grayscale-0"
                  loading="lazy"
                />

                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-700 
                                flex items-end justify-center pb-10">
                  <div className="text-center transform translate-y-8 group-hover:translate-y-0 
                                  transition-transform duration-700">
                    <h3 className="text-3xl md:text-4xl font-medium text-amber-100 tracking-widest 
                                   drop-shadow-2xl">
                      {item.category}
                    </h3>
                    <p className="text-sm text-amber-200 mt-3 tracking-wider font-light">
                      LPI Food • 2025
                    </p>
                  </div>
                </div>

                {/* Golden Frame on Hover */}
                <div className="absolute inset-0 rounded-3xl ring-8 ring-transparent 
                                group-hover:ring-amber-200/30 transition-all duration-700 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram & Final Invitation */}
      <section className="py-32 px-6 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-5xl mx-auto text-center">
          <Instagram className="w-24 h-24 text-amber-600 mx-auto mb-10" />

          <h2 className="text-6xl md:text-8xl font-light tracking-widestTXT text-slate-900 mb-10">
            Share Your Story
          </h2>
          <p className="text-2xl md:text-3xl text-slate-700 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Tag <span className="text-amber-600 font-medium">@LPIFood</span> on Instagram<br/>
            and become part of our living legacy
          </p>

          <Link
            to="/reservation"
            className="group inline-flex items-center gap-6 bg-amber-600 hover:bg-amber-500 
                       text-white px-24 py-8 text-2xl md:text-3xl font-medium tracking-widest uppercase 
                       shadow-2xl hover:shadow-amber-500/40 transform hover:-translate-y-1 
                       transition-all duration-500"
          >
            <Flame className="w-10 h-10" />
            Reserve Your Moment
            <Flame className="w-10 h-10" />
          </Link>

          <p className="text-xl md:text-2xl text-amber-700 mt-20 italic font-light">
            ~ Captured with love and devotion,<br/>
            <span className="text-slate-800 font-medium">The LPI Food Family</span>
          </p>
        </div>
      </section>
    </>
  );
}