// src/pages/Chefpage.jsx - LUXURY WHITE & GOLD MASTERPIECE
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Flame, Star, Utensils, Sparkles, ChefHat } from 'lucide-react';

const chefs = [
  {
    name: "Sanjeev Kapoor",
    role: "Culinary Ambassador of India",
    expertise: "Modern Indian • Global Fusion • TV Icon",
    signatureDish: "Shaam Savera",
    dishDesc: "Spinach kofta with paneer heart in velvet tomato gravy — a timeless masterpiece",
    achievements: [
      "Padma Shri Award (2017)",
      "Host of Khana Khazana – Asia’s longest-running food show",
      "150+ bestselling cookbooks",
      "Founder – FoodFood Channel & Wonderchef"
    ],
    quote: "Indian food is not just about spice — it’s about soul.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHazUdNvBZfxuOz7_jGZ3n_PNu2iErbGyk6hpMQP5eEoaDoqVrClB8S-MpSRUiZq-nIzMaveChXOTZV9Nun6ozb95M-6-ThEVOBbTkE9bJ&s=10"
  },
  {
    name: "Vikas Khanna",
    role: "Michelin-Starred Poet • Humanitarian",
    expertise: "Progressive Indian • Royal Awadhi",
    signatureDish: "Saffron-Infused Lamb Shank",
    dishDesc: "24-hour slow-cooked lamb in saffron, rose & kewra — served at Junoon, NYC",
    achievements: [
      "Michelin Star – Junoon, New York",
      "Returned sacred soil from 108 countries",
      "Author of 37 books including 'Utsav'",
      "Forbes Top 10 Most Influential Chefs"
    ],
    quote: "Every dish tells a story of our motherland.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlHkZyn4RIGB6TNCs2aVbCImNAHFg4i07pWrq8rNlt1y0Q3gPLk441LuhqX7_t8V0-VOhplMBJDEfIkrtm3LjHPncLbX-2V-xf6K8zWvVWug&s=10"
  },
  {
    name: "Ranveer Brar",
    role: "Heritage Revivalist • Master Storyteller",
    expertise: "Lost Recipes • Kashmiri • Lucknowi",
    signatureDish: "Kashmiri Rogan Josh with Rista",
    dishDesc: "Hand-pounded lamb meatballs in royal saffron-fennel gravy",
    achievements: [
      "Youngest Executive Chef of India at 25",
      "Judge – MasterChef India (10+ seasons)",
      "Revived over 100 forgotten Indian recipes",
      "Host – Himalayan Heritage"
    ],
    quote: "I don’t cook food. I cook memories.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZoOBJdEU0lY2CK144MYvH9cvYHYim_CsTi12-EhmJSHxERqFiAEStkvuk6vfpcnglBw3zgOEk94pRAkRlS6GtOEhmExVgMcPaHVZaEhJ5A&s=10"
  },
  {
    name: "Garima Arora",
    role: "India’s First Female Michelin-Starred Chef",
    expertise: "Progressive Indian • Thai-Indian Fusion",
    signatureDish: "Marigold Curry",
    dishDesc: "Fermented marigold petals with coconut, chilli & heirloom rice — poetic & fearless",
    achievements: [
      "Michelin Star – Gaa, Bangkok (2019)",
      "Asia’s Best Female Chef 2019",
      "Trained under Gaggan Anand & René Redzepi (Noma)",
      "Only Indian woman with a Michelin star"
    ],
    quote: "Indian ingredients deserve the world’s stage.",
    img: "https://c.ndtvimg.com/2023-12/cb4jlhv_chef-garima-arora_650x300_14_December_23.jpg"
  }
];

export default function Chefpage() {
  return (
    <>
      {/* Hero – Monumental & Reverent */}
      <section 
        className="relative h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=90&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-white/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 via-transparent to-amber-50/30" />

        <div className="relative text-center px-8 max-w-7xl mx-auto">
          <h1 className="text-7xl md:text-9xl lg:text-10xl font-light tracking-widest text-slate-900 mb-8 leading-none">
            Our Master Chefs
          </h1>
          <p className="text-4xl md:text-6xl font-medium text-amber-700 tracking-wider mb-6">
            Living Legends of Indian Cuisine
          </p>
          <p className="text-2xl md:text-3xl text-slate-700 font-extralight italic max-w-5xl mx-auto leading-relaxed">
            Guardians of flavor • Poets of the plate • Keepers of our 5000-year legacy
          </p>
        </div>
      </section>

      {/* Chefs – Royal Portraits */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-40">

          {chefs.map((chef, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center 
                          ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Portrait */}
              <div className="relative group">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={chef.img}
                    alt={chef.name}
                    className="w-full h-[700px] object-cover transition-all duration-1000 
                               group-hover:scale-105 grayscale group-hover:grayscale-0"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                </div>
                <div className="absolute inset-0 rounded-3xl ring-8 ring-amber-100/50 pointer-events-none" />
              </div>

              {/* Details */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-6xl md:text-7xl font-light tracking-widest text-slate-900">
                    {chef.name}
                  </h2>
                  <p className="text-3xl md:text-4xl text-amber-600 font-medium tracking-wider mt-4">
                    {chef.role}
                  </p>
                  <p className="text-xl text-slate-600 mt-4 font-light italic">
                    {chef.expertise}
                  </p>
                </div>

                {/* Signature Dish */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-10 border border-amber-200">
                  <h3 className="text-3xl md:text-4xl font-medium text-slate-800 mb-6 flex items-center gap-4">
                    <Flame className="w-10 h-10 text-amber-600" />
                    Signature Creation
                  </h3>
                  <p className="text-4xl md:text-5xl font-medium text-slate-900 leading-tight">
                    {chef.signatureDish}
                  </p>
                  <p className="text-lg text-slate-700 mt-4 font-light italic leading-relaxed">
                    {chef.dishDesc}
                  </p>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-2xl md:text-3xl font-medium text-slate-800 mb-8 flex items-center gap-4">
                    <Award className="w-10 h-10 text-amber-600" />
                    Honors & Legacy
                  </h4>
                  <ul className="space-y-5">
                    {chef.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-5 text-lg text-slate-600 font-light">
                        <Star className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quote */}
                <blockquote className="text-3xl md:text-4xl font-light text-slate-800 italic 
                                       border-l-4 border-amber-600 pl-10 py-8 bg-white rounded-r-3xl shadow-xl">
                  “{chef.quote}”
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Invitation */}
      <section className="py-32 px-6 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-light tracking-widest text-slate-900 mb-10">
            Taste the Legacy
          </h2>
          <p className="text-2xl md:text-3xl text-slate-700 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Every dish at LPI Food is touched by the wisdom of these masters — 
            a bridge between centuries of tradition and the future of Indian fine dining.
          </p>

          <Link
            to="/reservation"
            className="group inline-flex items-center gap-6 bg-amber-600 hover:bg-amber-500 text-white 
                       px-20 py-8 text-2xl md:text-3xl font-medium tracking-widest uppercase 
                       shadow-2xl hover:shadow-amber-500/40 transform hover:-translate-y-1 
                       transition-all duration-500"
          >
            <Flame className="w-10 h-10" />
            Reserve Your Table
            <Flame className="w-10 h-10" />
          </Link>

          <p className="text-xl md:text-2xl text-amber-700 mt-16 italic font-light">
            ~ With eternal gratitude,<br/>
            <span className="text-slate-800 font-medium">The LPI Food Family</span>
          </p>
        </div>
      </section>
    </>
  );
}