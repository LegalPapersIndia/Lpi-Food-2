// src/components/Testimonials.jsx - LUXURY WHITE PROFESSIONAL THEME
import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Priya Malhotra",
      location: "Delhi",
      rating: 5,
      text: "An unforgettable evening. Every dish felt like a love letter to Indian cuisine. The Dal Makhani will haunt my dreams — in the best way.",
    },
    {
      name: "Arjun & Neha Kapoor",
      location: "Mumbai",
      rating: 5,
      text: "We celebrated our 10th anniversary here. The team arranged a private corner with rose petals and live sitar. Pure magic. Thank you for making it perfect.",
    },
    {
      name: "Vikram Singh Rathore",
      location: "Jaipur",
      rating: 5,
      text: "As a Rajasthani, I’m hard to impress with Laal Maas. Yours brought tears to my eyes. This is not just food — this is heritage, served with soul.",
    },
    {
      name: "Ayesha Khan",
      location: "Hyderabad",
      rating: 5,
      text: "The Hyderabadi Biryani transported me back to my grandmother’s kitchen, but elevated to royal heights. Service was flawless, warm, and deeply respectful.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Elegant Header */}
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-widest text-slate-900 mb-6">
            Guest Love
          </h2>
          <p className="text-3xl md:text-4xl font-medium tracking-wider text-amber-600">
            4.9 ★★★★★ from 680+ cherished diners
          </p>
          <p className="text-xl md:text-2xl text-slate-600 mt-8 font-light max-w-3xl mx-auto leading-relaxed">
            Words from those who’ve experienced the LPI Food journey
          </p>
        </div>

        {/* Luxury Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl 
                         border border-gray-100 hover:border-amber-200 
                         transition-all duration-700 transform hover:-translate-y-3"
            >
              {/* Elegant Quote Icon */}
              <Quote className="absolute top-8 left-8 w-16 h-16 text-amber-100 group-hover:text-amber-200 transition-colors duration-700" />

              {/* Stars */}
              <div className="flex justify-center mb-8">
                {[...Array(r.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-8 h-8 fill-amber-500 text-amber-500 drop-shadow-sm"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-xl md:text-2xl text-slate-700 italic leading-relaxed text-center mb-10 font-light">
                “{r.text}”
              </p>

              {/* Guest Name & Location */}
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-medium text-slate-900 tracking-wide">
                  {r.name}
                </p>
                <p className="text-lg text-amber-600 font-light tracking-wider mt-2">
                  {r.location}
                </p>
              </div>

              {/* Subtle Golden Accent Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>

        {/* Trust Badges / Final Touch */}
        <div className="text-center mt-20">
          <p className="text-lg text-slate-600 font-light italic">
            Proudly featured in{" "}
            <span className="text-amber-600 font-medium">
              Condé Nast Traveller • Vogue India • Michelin Guide 2025 (Recommended)
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}