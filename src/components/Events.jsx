// src/components/Events.jsx - LUXURY WHITE PROFESSIONAL THEME (2025 Fine-Dining Standard)
import React from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Events() {
  const events = [
    {
      title: "Diwali Royal Thali Night",
      date: "November 14 • 7:30 PM onwards",
      desc: "Celebrate the festival of lights with our grand 21-dish Royal Indian Thali, live ghazals, diya lighting & fireworks",
      price: "₹2,800 per person",
      badge: "DIWALI SPECIAL"
    },
    {
      title: "Holi Hungama Brunch",
      date: "March 8, 2025 • 12:00 PM - 4:00 PM",
      desc: "Unlimited thandai, gujiya, dahi bhalle, live dhol, organic colors & 5-course festive menu",
      price: "₹2,200 per person (incl. thandai)",
      badge: "LIMITED SEATS"
    },
    {
      title: "Navratri Garba Nights",
      date: "Every Night • Oct 2–10 • 8:00 PM onwards",
      desc: "9 nights of garba, fafda-jalebi, undhiyu-puri, live Gujarati folk music & dandiya",
      price: "₹1,800 per person",
      badge: "9 NIGHTS ONLY"
    },
    {
      title: "Eid-ul-Fitr Dawat-e-Iftar",
      date: "March 30, 2025 • Sunset onwards",
      desc: "Royal Awadhi iftar with sheer khurma, haleem, kebabs, biryani & phirni",
      price: "₹2,500 per person",
      badge: "EID SPECIAL"
    },
    {
      title: "Onam Sadhya Feast",
      date: "September 8, 2025 • 1:00 PM & 7:30 PM",
      desc: "Traditional 26-course Kerala Sadhya served on banana leaf with payasam & live music",
      price: "₹2,400 per person",
      badge: "ONAM 2025"
    },
    {
      title: "Royal Rajasthani Food Festival",
      date: "Every Weekend in January • 7:30 PM",
      desc: "Dal Baati Churma, Laal Maas, Gatte ki Sabzi, live Rajasthani folk dance & puppet show",
      price: "₹2,600 per person",
      badge: "JANUARY ONLY"
    }
  ];

  return (
    <section className="py-32 px-6 bg-gray-50 relative overflow-hidden" id="events">
      {/* Subtle Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <Sparkles className="absolute top-20 left-10 w-24 h-24 text-amber-400" />
        <Sparkles className="absolute bottom-32 right-16 w-32 h-32 text-amber-500" />
        <Sparkles className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-40 h-40 text-amber-300" />
      </div>

      <div className="max-w-7xl mx-auto relative">

        {/* Section Header - Regal & Festive */}
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-widest text-slate-900 mb-6">
            त्योहारों का स्वाद
          </h2>
          <p className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-wider text-amber-600">
            Festive Feasts
          </p>
          <p className="text-xl md:text-2xl text-slate-600 mt-8 font-light max-w-3xl mx-auto leading-relaxed">
            Celebrate India’s richest traditions with exclusive culinary journeys curated just for you
          </p>
          <p className="text-lg text-slate-500 mt-4">Limited seats • Advance booking mandatory</p>
        </div>

        {/* Events Grid - Luxurious Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {events.map((event, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl 
                         border border-gray-100 hover:border-amber-200 
                         transition-all duration-700 transform hover:-translate-y-4"
            >
              {/* Festive Badge */}
              <div className="absolute top-6 right-6 z-10">
                <span className="bg-gradient-to-r from-amber-600 to-amber-500 text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg tracking-wider">
                  {event.badge}
                </span>
              </div>

              {/* Hero Image Area - Elegant Placeholder */}
              <div className="h-72 bg-gradient-to-br from-amber-50 via-amber-100 to-orange-50 flex items-center justify-center relative overflow-hidden">
                <div className="text-amber-600/20 group-hover:text-amber-600/30 transition-all duration-700">
                  <Calendar className="w-40 h-40" />
                </div>
                <div className="absolute inset-0 bg-white/40 group-hover:bg-white/20 transition-all duration-700"></div>
              </div>

              {/* Event Details */}
              <div className="p-10 space-y-6">
                <h3 className="text-3xl md:text-4xl font-medium text-slate-800 group-hover:text-amber-600 transition-colors duration-500 leading-tight">
                  {event.title}
                </h3>

                <div className="space-y-5 text-slate-600">
                  <p className="flex items-center gap-4 text-lg">
                    <Clock className="w-7 h-7 text-amber-600 flex-shrink-0" />
                    <span className="font-medium">{event.date}</span>
                  </p>
                  <p className="text-base leading-relaxed italic font-light">
                    {event.desc}
                  </p>
                  <div className="pt-4">
                    <p className="text-3xl font-medium text-amber-600">
                      {event.price}
                    </p>
                  </div>
                </div>

                {/* Premium Reserve Button */}
                <Link
                  to="/reservation"
                  className="inline-block w-full text-center bg-amber-600 hover:bg-amber-500 text-white 
                             px-8 py-5 rounded-none font-medium text-lg uppercase tracking-widest 
                             shadow-lg hover:shadow-amber-500/30 transform hover:-translate-y-1 
                             transition-all duration-500 group"
                >
                  Book Your Seat
                  <span className="inline-block ml-3 group-hover:translate-x-2 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA - Warm & Inviting */}
        <div className="mt-32 text-center bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-16 border border-amber-200">
          <p className="text-3xl md:text-4xl font-medium text-slate-800 mb-6 leading-relaxed">
            हर त्योहार को बनाएं खास
          </p>
          <p className="text-2xl text-amber-700 font-medium mb-4">
            Make Every Festival Special
          </p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
            For private celebrations, wedding functions, corporate events, or bespoke festive dinners — 
            let us craft your perfect memory.
          </p>
        </div>
      </div>
    </section>
  );
}