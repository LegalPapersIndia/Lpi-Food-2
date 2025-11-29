// src/components/WhyChooseUs.jsx - LUXURY WHITE PROFESSIONAL THEME
import React from 'react';
import { ChefHat, Clock, Users, Award, MapPin, Leaf } from 'lucide-react';

const WhyChooseUs = () => {

  const reasons = [
    {
      icon: <ChefHat className="w-12 h-12" />,
      title: "Master Chefs",
      desc: "Curated by Michelin-recognized maestros and guardians of India’s culinary legacy.",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Celebrated Excellence",
      desc: "Michelin Guide Recommended 2025 • Condé Nast Traveller’s Best Indian Restaurant • 4.9★ from 700+ guests",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Timeless Hospitality",
      desc: "Lunch: 12:00 PM – 3:00 PM • Dinner: 7:00 PM – 11:30 PM • Weekend Royal Brunch: 11:00 AM – 4:00 PM",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Private Celebrations",
      desc: "Intimate anniversaries, grand weddings, and exclusive corporate dinners — crafted to perfection.",
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Seasonal & Sustainable",
      desc: "Farm-fresh, heirloom ingredients. Zero waste kitchen. Rooted in tradition, kind to the earth.",
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Prime Location",
      desc: "Nestled in the heart of the city with valet parking and breathtaking heritage-inspired interiors.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Regal Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-widest text-slate-900 mb-6">
            Why LPI Food
          </h2>
          <p className="text-3xl md:text-4xl font-medium tracking-wider text-amber-600">
            A Legacy of Extraordinary Dining
          </p>
          <p className="text-xl md:text-2xl text-slate-600 mt-8 font-light max-w-4xl mx-auto leading-relaxed">
            Where every detail is crafted with intention, and every visit becomes a cherished memory
          </p>
        </div>

        {/* Luxury Reason Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl p-10 text-center shadow-lg hover:shadow-2xl 
                         border border-gray-100 hover:border-amber-200 
                         transition-all duration-700 transform hover:-translate-y-4"
            >
              {/* Icon with Golden Ring */}
              <div className="inline-flex items-center justify-center w-28 h-28 rounded-full 
                              bg-gradient-to-br from-amber-50 to-orange-50 mb,100 mb-8 
                              ring-8 ring-amber-100 group-hover:ring-amber-200 
                              transition-all duration-500">
                <div className="text-amber-600 group-hover:scale-110 transition-transform duration-500">
                  {reason.icon}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl md:text-3xl font-medium text-slate-900 mb-5 tracking-wide">
                {reason.title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                {reason.desc}
              </p>

              {/* Subtle Golden Line on Hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px 
                              bg-gradient-to-r from-transparent via-amber-400 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;