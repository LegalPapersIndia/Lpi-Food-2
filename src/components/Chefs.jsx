// src/components/Chefs.jsx - LUXURY WHITE PROFESSIONAL THEME
import React from 'react';

const chefs = [
  {
    name: "Sanjeev Kapoor",
    role: "Celebrity Chef & Brand Ambassador",
    desc: "Padma Shri • Author of 150+ cookbooks • Host of Khana Khazana (10,000+ episodes) • Pioneer of Modern Indian Cuisine",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sanjeev_Kapoor_in_2023.jpg"
  },
  {
    name: "Vikas Khanna",
    role: "Michelin-Starred Chef",
    desc: "Michelin Star (Junoon, NYC) • Author • Filmmaker • Returned the 'Holy Sands' to India • Forbes 'Most Influential Chef'",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Vikas_Khanna_in_2024.jpg"
  },
  {
    name: "Ranveer Brar",
    role: "Culinary Director & Storyteller",
    desc: "Host of 15+ TV shows • Youngest Executive Chef in India at 25 • Judge on MasterChef India • Passionate about Indian heritage recipes",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Ranveer_Brar_in_2024.jpg"
  }
];

export default function Chefs() {
  return (
    <section className="py-32 px-6 bg-gray-50 relative overflow-hidden" id="chefs">
      {/* Subtle Cultural Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 text-amber-400 text-9xl font-bold select-none">ॐ</div>
        <div className="absolute bottom-32 right-16 text-amber-500 text-8xl font-bold select-none">नमः</div>
      </div>

      <div className="max-w-7xl mx-auto relative">

        {/* Section Header - Monumental & Reverent */}
        <div className="text-center mb-28">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-widest text-slate-900 mb-6">
            हमारे महा-रसोइये
          </h2>
          <p className="text-5xl md:text-6xl font-medium tracking-wider text-amber-600">
            Masters of Indian Cuisine
          </p>
          <p className="text-xl md:text-2xl text-slate-600 mt-10 font-light max-w-4xl mx-auto leading-relaxed">
            Guardians of flavor, heritage, and the sacred art of Indian cooking
          </p>
        </div>

        {/* Chefs Grid - Pure Elegance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {chefs.map((chef, i) => (
            <div
              key={i}
              className="group text-center transform transition-all duration-700 hover:scale-[1.03]"
            >
              {/* Refined Portrait with Gold Frame */}
              <div className="relative mx-auto mb-12">
                <div className="overflow-hidden rounded-full w-80 h-80 mx-auto shadow-2xl 
                                ring-8 ring-amber-100 ring-offset-8 ring-offset-transparent 
                                group-hover:ring-amber-200 transition-all duration-700">
                  <img
                    src={chef.img}
                    alt={chef.name}
                    className="w-full h-full object-cover transition-transform duration-1000 
                               group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>

                {/* Elegant Namaste Seal */}
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 
                                bg-white border-4 border-amber-200 text-amber-700 
                                px-6 py-3 rounded-full shadow-2xl text-2xl font-medium tracking-wider">
                  नमस्ते
                </div>
              </div>

              {/* Chef Info - Regal Typography */}
              <h3 className="text-4xl md:text-5xl font-medium text-slate-900 mb-3 tracking-wide">
                {chef.name}
              </h3>
              <p className="text-2xl md:text-3xl text-amber-600 font-medium mb-6 tracking-wider">
                {chef.role}
              </p>
              <p className="text-lg md:text-xl text-slate-600 italic max-w-md mx-auto leading-relaxed px-6 font-light">
                {chef.desc}
              </p>

              {/* Subtle Golden Divider */}
              <div className="flex justify-center items-center gap-6 mt-10">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                <span className="text-4xl text-amber-500">ॐ</span>
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Quote - Sacred & Beautiful */}
        <div className="mt-32 text-center bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-20 border border-amber-200">
          <p className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-800 italic leading-relaxed">
            “अन्नं ब्रह्म”
          </p>
          <p className="text-3xl md:text-4xl text-amber-700 font-medium mt-6 tracking-wider">
            Food is Divine
          </p>
          <p className="text-xl md:text-2xl text-slate-600 mt-8 max-w-3xl mx-auto font-light leading-relaxed">
            Every dish is a prayer. Every flavor, a blessing from the masters who came before us.
          </p>
        </div>
      </div>
    </section>
  );
}