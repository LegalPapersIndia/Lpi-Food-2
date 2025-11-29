// src/pages/Eventspage.jsx - LUXURY WHITE & GOLD ROYAL THEME
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Music, Heart, Flame, Sparkles, Phone, Mail, MapPin } from 'lucide-react';

export default function Eventspage() {
  return (
    <>
      {/* Hero – Regal & Eternal */}
      <section 
        className="relative h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=2400&q=90&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-white/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 via-transparent to-amber-50/30" />

        <div className="relative text-center px-8 max-w-7xl mx-auto">
          <h1 className="text-7xl md:text-9xl lg:text-10xl font-light tracking-widest text-slate-900 mb-8 leading-none">
            Events & Celebrations
          </h1>
          <p className="text-4xl md:text-6xl font-medium text-amber-700 tracking-wider mb-6">
            Where Moments Become Eternal
          </p>
          <p className="text-2xl md:text-3xl text-slate-700 font-extralight italic max-w-5xl mx-auto leading-relaxed">
            Royal Indian hospitality for the milestones that matter most
          </p>

          <div className="flex justify-center gap-14 mt-20">
            <Sparkles className="w-14 h-14 text-amber-600 animate-pulse" />
            <Heart className="w-16 h-16 text-amber-600 animate-pulse delay-300" />
            <Flame className="w-14 h-14 text-amber-600 animate-pulse delay-700" />
          </div>
        </div>
      </section>

      {/* Event Types – Royal Offerings */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-widest text-center text-slate-900 mb-24">
            Celebrate With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Royal Indian Wedding",
                icon: <Heart className="w-20 h-20" />,
                capacity: "Up to 800 Guests",
                features: ["Grand Mandap & Floral Canopy", "Royal Bride & Groom Entry", "Live Sitar & Tabla", "Cinematic Videography", "7-Course Royal Thali"]
              },
              {
                title: "Engagement & Roka",
                icon: <Calendar className="w-20 h-20" />,
                capacity: "30 – 300 Guests",
                features: ["Golden Ring Ceremony Stage", "Candlelight Ambiance", "Live Ghazal Singer", "Heritage Theme Decor", "Personalized Mithai Counter"]
              },
              {
                title: "Milestone Birthday",
                icon: <Sparkles className="w-20 h-20" />,
                capacity: "20 – 500 Guests",
                features: ["Custom Theme Decor", "Live Dance Performance", "Magic & Fire Show", "Dessert Wonderland", "Memory Photo Wall"]
              },
              {
                title: "Anniversary Soirée",
                icon: <Heart className="w-18 h-18" />,
                capacity: "Intimate to 200 Guests",
                features: ["Candlelight Private Dining", "Live Violin or Santoor", "Memory Video Tribute", "Rose Petal Shower", "Heritage Dessert Platter"]
              },
              {
                title: "Corporate Gala",
                icon: <Users className="w-20 h-20" />,
                capacity: "50 – 1000 Guests",
                features: ["LED Wall & Professional AV", "Custom Stage & Lighting", "Award Ceremony Setup", "Royal Gala Dinner", "Valet & Security"]
              },
              {
                title: "Sacred Ceremonies",
                icon: <Flame className="w-20 h-20" />,
                capacity: "50 – 600 Guests",
                features: ["Traditional Havan Kund", "Pandit Ji & Mantra Chanting", "Prasad & Langar Service", "Sattvik Vegetarian Menu", "Peaceful Sanctum"]
              }
            ].map((event, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-3xl p-12 text-center shadow-lg hover:shadow-2xl 
                           border border-gray-100 hover:border-amber-200 
                           transition-all duration-700 transform hover:-translate-y-4"
              >
                <div className="text-amber-600 mb-8 group-hover:scale-110 transition-transform duration-500">
                  {event.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4 tracking-wide">
                  {event.title}
                </h3>
                <p className="text-xl text-amber-600 font-medium mb-10">
                  {event.capacity}
                </p>

                <ul className="space-y-5 text-left">
                  {event.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-lg text-slate-600 font-light">
                      <Sparkles className="w-6 h-6 text-amber-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Subtle Golden Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px 
                                bg-gradient-to-r from-transparent via-amber-400 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Highlights */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-widest text-slate-900 mb-20">
            Our Royal Venues
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-16 border border-amber-200">
              <h3 className="text-4xl md:text-5xl font-medium text-slate-900 mb-6">The Grand Durbar Hall</h3>
              <p className="text-xl text-slate-700 font-light">800+ Guests • Crystal Chandeliers • Royal Acoustics</p>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-16 border border-rose-200">
              <h3 className="text-4xl md:text-5xl font-medium text-slate-900 mb-6">Starlit Garden Pavilion</h3>
              <p className="text-xl text-slate-700 font-light">Open-Air • Fairy Lights • Under the Stars</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-16 border border-emerald-200">
              <h3 className="text-4xl md:text-5xl font-medium text-slate-900 mb-6">Heritage Courtyard</h3>
              <p className="text-xl text-slate-700 font-light">Intimate • Ancient Tree • Sacred Fire Circle</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Royal Invitation */}
      <section className="py-32 px-6 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-light tracking-widest text-slate-900 mb-12">
            Let’s Create Magic Together
          </h2>
          <p className="text-2xl md:text-3xl text-slate-700 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Your dream celebration deserves a palace, a legacy kitchen, and a family that treats you like royalty.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-6 bg-amber-600 hover:bg-amber-500 
                         text-white px-24 py-8 text-2xl md:text-3xl font-medium tracking-widest uppercase 
                         shadow-2xl hover:shadow-amber-500/40 transform hover:-translate-y-1 
                         transition-all duration-500"
            >
              <Calendar className="w-10 h-10" />
              Plan Your Event
              <Calendar className="w-10 h-10" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <Phone className="w-12 h-12 text-amber-600 mx-auto" />
              <p className="text-xl font-medium text-slate-900">Call Our Events Team</p>
              <a href="tel:+917505266931" className="text-2xl text-amber-600">+91 750 526 6931</a>
            </div>
            <div className="space-y-4">
              <Mail className="w-12 h-12 text-amber-600 mx-auto" />
              <p className="text-xl font-medium text-slate-900">Write to Us</p>
              <p className="text-2xl text-amber-600">events@lpifood.com</p>
            </div>
            <div className="space-y-4">
              <MapPin className="w-12 h-12 text-amber-600 mx-auto" />
              <p className="text-xl font-medium text-slate-900">Visit Us</p>
              <p className="text-2xl text-slate-800">Noida, India</p>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-amber-700 mt-20 italic font-light">
            ~ With eternal warmth and devotion,<br/>
            <span className="text-slate-800 font-medium">The LPI Food Family</span>
          </p>
        </div>
      </section>
    </>
  );
}