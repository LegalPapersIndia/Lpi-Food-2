// src/components/Gallery.jsx - LUXURY WHITE PROFESSIONAL GALLERY
import React from 'react';

const images = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=85&auto=format&fit=crop",
  "https://images.unsplash.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=1200&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606890737304-1a63c1ed2f57?w=1200&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1592861956122-eb0511c61394?w=1200&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515003197210-e0cd4f706c02?w=1200&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1563379926899-1a66d5a4e3b6?w=1200&q=85&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section className="py-32 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Elegant Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-widest text-slate-900 mb-6">
            Gallery
          </h2>
          <p className="text-3xl md:text-4xl font-medium tracking-wider text-amber-600">
            Moments of Timeless Elegance
          </p>
          <p className="text-xl md:text-2xl text-slate-600 mt-8 font-light max-w-3xl mx-auto leading-relaxed">
            Where every frame tells a story of flavor, craft, and celebration
          </p>
        </div>

        {/* Luxury Masonry-Style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl 
                         transition-all duration-700 cursor-pointer
                         ${i === 0 || i === 5 ? 'row-span-2' : ''} 
                         ${i === 2 || i === 6 ? 'col-span-2 row-span-2' : ''}`}
            >
              <img
                src={img}
                alt={`LPI Food Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 
                           group-hover:scale-110"
                loading="lazy"
              />

              {/* Subtle Overlay + Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Elegant Hover Label */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white 
                              translate-y-8 group-hover:translate-y-0 
                              opacity-0 group-hover:opacity-100 
                              transition-all duration-700">
                <p className="text-sm font-light tracking-widest uppercase">
                  {i === 0 && "Grand Dining Hall"}
                  {i === 1 && "Signature Plating"}
                  {i === 2 && "Royal Thali Experience"}
                  {i === 3 && "Chef at Work"}
                  {i === 4 && "Festive Celebration"}
                  {i === 5 && "Heritage Cuisine"}
                  {i === 6 && "Private Dining"}
                  {i === 7 && "Culinary Craft"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-24">
          <p className="text-lg text-slate-600 font-light italic max-w-2xl mx-auto">
            Follow us on Instagram <span className="text-amber-600">@LPIFood</span> for daily glimpses of luxury and flavor
          </p>
        </div>

      </div>
    </section>
  );
}