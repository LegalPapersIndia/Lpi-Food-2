// src/pages/AboutUs.jsx - LUXURY WHITE & GOLD PROFESSIONAL THEME
import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Leaf, Heart, Award, Globe, Sparkles, Utensils, ChefHat } from 'lucide-react';

export default function AboutUs() {
  return (
    <>
      {/* Hero Section - Pure Elegance */}
      <section 
        className="relative h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=90&fit=crop')" 
        }}
      >
        {/* Light & Airy Luxury Overlay */}
        <div className="absolute inset-0 bg-white/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/40 via-transparent to-amber-50/30" />

        <div className="relative text-center px-8 max-w-7xl mx-auto">
          <h1 className="text-7xl md:text-9xl lg:text-10xl font-light tracking-widest text-slate-900 mb-8 leading-none">
            Our Legacy
          </h1>
          <p className="text-4xl md:text-6xl font-medium text-amber-700 tracking-wider mb-6">
            Where Tradition Meets Art
          </p>
          <p className="text-2xl md:text-3xl text-slate-700 font-extralight max-w-5xl mx-auto leading-relaxed italic">
            A timeless celebration of India’s 5000-year-old culinary soul — reimagined for the modern connoisseur
          </p>

          <div className="flex justify-center gap-12 mt-16">
            <Flame className="w-14 h-14 text-amber-600 animate-pulse" />
            <Sparkles className="w-12 h-12 text-amber-500 animate-pulse delay-300" />
            <Utensils className="w-14 h-14 text-amber-600 animate-pulse delay-700" />
          </div>
        </div>
      </section>

      {/* Founding Story - Regal & Warm */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-10">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-widest text-slate-900">
              Born from Devotion
            </h2>
            <p className="text-3xl md:text-4xl font-medium text-amber-600 tracking-wider">
              LPI Food — Established 2025
            </p>
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
              We are not merely a restaurant.<br/>
              We are the <span className="text-amber-700 font-medium">custodians of India’s sacred flavors</span>.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              From the golden mustard fields of Punjab to the ancient spice routes of Malabar — 
              every ingredient is chosen with reverence, every recipe carried forward from generations, 
              every guest welcomed as family.
            </p>

            <blockquote className="text-3xl md:text-4xl font-light text-slate-800 italic border-l-4 border-amber-600 pl-10 py-8 bg-white rounded-r-3xl shadow-xl">
              “We do not serve food.<br/>
              We serve <span className="text-amber-700 font-medium">tradition on a golden plate.</span>”
            </blockquote>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1606890658317-8c8d874c9b76?w=1200&q=90"
                alt="Traditional Indian kitchen with heritage elements"
                className="w-full h-[700px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy - Sacred Trinity */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-widest text-center text-slate-900 mb-24">
            Our Philosophy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center group">
              <div className="w-36 h-36 rounded-full bg-gradient-to-br from-amber-50 to-orange-50 mx-auto mb-10 
                              flex items-center justify-center ring-8 ring-amber-100 group-hover:ring-amber-200 
                              transition-all duration-700 shadow-xl">
                <Flame className="w-20 h-20 text-amber-600" />
              </div>
              <h3 className="text-3xl md:text-4xl font-medium text-slate-900 mb-6">Agni • The Sacred Fire</h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Every flame in our kitchen is lit with reverence — for fire is not just heat, it is transformation.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-36 h-36 rounded-full bg-gradient-to-br from-emerald-50 to-green-50 mx-auto mb-10 
                              flex items-center justify-center ring-8 ring-green-100 group-hover:ring-green-200 
                              transition-all duration-700 shadow-xl">
                <Leaf className="w-20 h-20 text-green-600" />
              </div>
              <h3 className="text-3xl md:text-4xl font-medium text-slate-900 mb-6">Prithvi • Mother Earth</h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                We source only what the earth gives willingly — heirloom grains, organic spices, and seasonal bounty.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-36 h-36 rounded-full bg-gradient-to-br from-rose-50 to-pink-50 mx-auto mb-10 
                              flex items-center justify-center ring-8 ring-rose-100 group-hover:ring-rose-200 
                              transition-all duration-700 shadow-xl">
                <Heart className="w-20 h-20 text-rose-600" />
              </div>
              <h3 className="text-3xl md:text-4xl font-medium text-slate-900 mb-6">Atithi Devo Bhava</h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                The guest is god. You do not dine with us — you allow us to serve divinity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Honors & Recognition */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-widest text-center text-slate-900 mb-20">
            Honors Bestowed
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { year: "2025", award: "Michelin Guide Recommended", icon: <Award className="w-16 h-16" /> },
              { year: "2025", award: "Condé Nast Traveller India", icon: <Globe className="w-16 h-16" /> },
              { year: "2025", award: "Best Heritage Cuisine", icon: <Sparkles className="w-16 h-16" /> },
              { year: "2025", award: "Chef’s Visionary Award", icon: <ChefHat className="w-16 h-16" /> },
            ].map((item, i) => (
              <div
                key={i}
                className="group text-center bg-white rounded-3xl p-12 shadow-lg hover:shadow-2xl 
                           border border-gray-100 hover:border-amber-200 transition-all duration-700"
              >
                <div className="text-amber-600 mb-8 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <p className="text-5xl font-light text-slate-900 tracking-wider">{item.year}</p>
                <p className="text-lg text-slate-700 mt-4 font-medium leading-tight">
                  {item.award}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Royal Invitation */}
      <section className="py-32 px-6 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-light tracking-widest text-slate-900 mb-10">
            We Await Your Presence
          </h2>
          <p className="text-2xl md:text-3xl text-slate-700 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Step into a world where every moment is sacred,<br/>
            every flavor a prayer, and every guest — royalty.
          </p>

          <Link
            to="/reservation"
            className="group inline-flex items-center gap-6 bg-amber-600 hover:bg-amber-500 text-white 
                       px-20 py-8 text-2xl md:text-3xl font-medium tracking-widest uppercase 
                       shadow-2xl hover:shadow-amber-500/40 transform hover:-translate-y-1 
                       transition-all duration-500"
          >
            <Flame className="w-10 h-10" />
            Reserve Your Royal Experience
            <Flame className="w-10 h-10" />
          </Link>

          <p className="text-xl md:text-2xl text-amber-700 mt-16 italic font-light">
            ~ With deepest respect and warmth,<br/>
            <span className="text-slate-800 font-medium">The LPI Food Family</span>
          </p>
        </div>
      </section>
    </>
  );
}