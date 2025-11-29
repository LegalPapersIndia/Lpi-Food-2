// src/pages/Menupage.jsx - LUXURY WHITE & GOLD ROYAL MASTERPIECE
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Coffee, CakeSlice, Wine, Flame, Leaf, Sparkles, ChefHat } from 'lucide-react';

export default function Menupage() {
  const [activeCategory, setActiveCategory] = useState('starters');

  const menuData = {
    starters: {
      title: "Starters",
      subtitle: "From the Sacred Tandoor",
      icon: <Flame className="w-10 h-10" />,
      items: [
        { name: "Amritsari Paneer Tikka", desc: "Cottage cheese in ajwain-kasuri methi marinade, kissed by fire", price: "₹650", popular: true, veg: true },
        { name: "Galouti Kebab", desc: "32-spice Awadhi lamb, melted on the tawa, served with warqi paratha", price: "₹950", signature: true },
        { name: "Tandoori Prawns", desc: "King prawns in tomato-ajwain armor, forged in clay", price: "₹1,200" },
        { name: "Dahi Ke Kebab", desc: "Hung curd & khoya clouds, golden-crusted, mint-kissed", price: "₹580", veg: true },
        { name: "Murgh Malai Tikka", desc: "Cream & cheese bathed chicken, smoked over charcoal", price: "₹780" },
      ]
    },
    mains: {
      title: "Main Courses",
      subtitle: "Royal Curries & Dum-Pukht Legacy",
      icon: <Utensils className="w-10 h-10" />,
      items: [
        { name: "Butter Chicken", desc: "Old Delhi’s tandoori chicken bathed in velvet tomato-cashew silk", price: "₹850", popular: true },
        { name: "Kashmiri Rogan Josh", desc: "Lamb slow-danced with fennel, dry ginger & ratan jot", price: "₹1,100" },
        { name: "Dal Makhani", desc: "24-hour whispered black lentils, finished with white butter", price: "₹680", veg: true },
        { name: "Hyderabadi Chicken Dum Biryani", desc: "Saffron-layered basmati, sealed with love and slow fire", price: "₹950", signature: true },
        { name: "Awadhi Mutton Biryani", desc: "Lucknow’s royal dum, perfumed with kewra & rose", price: "₹1,200" },
        { name: "Paneer Lababdar", desc: "Paneer in rich onion-tomato embrace with kasuri methi tears", price: "₹750", veg: true },
      ]
    },
    indianbreads: {
      title: "Tandoori Breads",
      subtitle: "Hand-Stretched from the Clay Oven",
      icon: <Sparkles className="w-10 h-10" />,
      items: [
        { name: "Butter • Garlic • Cheese Naan", price: "₹120 – ₹180" },
        { name: "Laccha Paratha", desc: "Thousand layers, finished with desi ghee", price: "₹150" },
        { name: "Missi Roti", desc: "Gram flour & spice poetry", price: "₹130" },
        { name: "Roomali Roti", desc: "Handkerchief-thin, tossed like silk", price: "₹140" },
        { name: "Tandoori Roti", desc: "Plain or brushed with love", price: "₹90" },
      ]
    },
    desserts: {
      title: "Sweet Endings",
      subtitle: "Heritage Mithai Reimagined",
      icon: <CakeSlice className="w-10 h-10" />,
      items: [
        { name: "Gulab Jamun", desc: "Warm khoya orbs in cardamom-rose nectar", price: "₹380" },
        { name: "Rasmalai", desc: "Cloud-soft paneer in saffron milk, rose tears", price: "₹420", popular: true, veg: true },
        { name: "Kulfi Falooda", desc: "Pistachio & malai kulfi with falooda & roohafza", price: "₹450" },
        { name: "Gajar Ka Halwa", desc: "Winter carrots slow-cooked with khoya & faith", price: "₹480" },
        { name: "Moong Dal Halwa", desc: "Golden lentil love, roasted in pure ghee", price: "₹520" },
      ]
    },
    beverages: {
      title: "Beverages",
      subtitle: "Traditional Elixirs",
      icon: <Coffee className="w-10 h-10" />,
      items: [
        { name: "Masala Chai", desc: "Ginger-cardamom-clove brewed with devotion", price: "₹180" },
        { name: "Lassi – Sweet • Salted • Mango", price: "₹220 – ₹280" },
        { name: "Thandai (Seasonal)", desc: "Almond milk with saffron, rose & bhaang traces", price: "₹350" },
        { name: "Jaljeera", desc: "Cumin-mint digestive nectar", price: "₹200" },
        { name: "Fresh Lime Soda", desc: "Sweet or salted, with love", price: "₹180" },
      ]
    }
  };

  return (
    <>
      {/* Hero – Monumental & Reverent */}
      <section 
        className="relative h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606491956689-2ea612773dd2?w=2400&q=90&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-white/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/60 via-transparent to-amber-50/40" />

        <div className="relative text-center px-8 max-w-7xl mx-auto">
          <h1 className="text-7xl md:text-9xl lg:text-10xl font-light tracking-widest text-slate-900 mb-8 leading-none">
            The Menu
          </h1>
          <p className="text-4xl md:text-6xl font-medium text-amber-700 tracking-wider mb-6">
            Royal Indian Fine Dining
          </p>
          <p className="text-2xl md:text-3xl text-slate-700 font-extralight italic max-w-5xl mx-auto leading-relaxed">
            A living tribute to India’s 5000-year culinary soul — crafted with devotion, served with grace
          </p>

          <div className="flex justify-center gap-16 mt-20">
            <Flame className="w-14 h-14 text-amber-600 animate-pulse" />
            <ChefHat className="w-16 h-16 text-amber-600 animate-pulse delay-300" />
            <Sparkles className="w-14 h-14 text-amber-600 animate-pulse delay-700" />
          </div>
        </div>
      </section>

      {/* Category Tabs – Royal Seals */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-10 mb-24">
            {Object.entries(menuData).map(([key, cat]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`group relative p-10 rounded-3xl transition-all duration-700 
                           ${activeCategory === key 
                             ? 'bg-amber-600 text-white shadow-2xl shadow-amber-500/30 scale-110' 
                             : 'bg-white text-slate-700 border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl'}`}
              >
                <div className={`p-6 rounded-full mb-6 mx-auto w-fit transition-all duration-500
                                ${activeCategory === key ? 'bg-white/20' : 'bg-amber-100 group-hover:bg-amber-200'}`}>
                  <div className={activeCategory === key ? 'text-white' : 'text-amber-600 group-hover:text-amber-700'}>
                    {cat.icon}
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-wide">{cat.title}</h3>
                <p className={`text-sm md:text-base mt-2 ${activeCategory === key ? 'text-amber-100' : 'text-slate-600'}`}>
                  {cat.subtitle}
                </p>
              </button>
            ))}
          </div>

          {/* Menu Items – Museum Pieces */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {menuData[activeCategory].items.map((item, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-3xl p-12 shadow-lg hover:shadow-2xl 
                           border border-gray-100 hover:border-amber-200 
                           transition-all duration-700 transform hover:-translate-y-3"
              >
                {/* Subtle Golden Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-100 to-transparent rounded-bl-3xl opacity-50" />

                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-4xl md:text-5xl font-medium text-slate-900 leading-tight pr-8">
                    {item.name}
                  </h3>
                  <span className="text-4xl font-light text-amber-600 tracking-wider">{item.price}</span>
                </div>

                <p className="text-xl text-slate-600 font-light leading-relaxed italic">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-4 mt-8">
                  {item.popular && (
                    <span className="px-6 py-3 bg-amber-600 text-white text-sm font-medium rounded-full shadow-md">
                      GUEST FAVORITE
                    </span>
                  )}
                  {item.signature && (
                    <span className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white text-sm font-medium rounded-full shadow-md flex items-center gap-2">
                      <ChefHat className="w-5 h-5" /> CHEF’S CREATION
                    </span>
                  )}
                  {item.veg && (
                    <span className="px-6 py-3 bg-emerald-600 text-white text-sm font-medium rounded-full flex items-center gap-2">
                      <Leaf className="w-5 h-5" /> PURE VEGETARIAN
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Final Royal Invitation */}
          <div className="mt-32 text-center bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-20 border border-amber-200">
            <h2 className="text-6xl md:text-8xl font-light tracking-widest text-slate-900 mb-10">
              Join Us for a Royal Feast
            </h2>
            <p className="text-2xl md:text-3xl text-slate-700 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
              Every dish made fresh • Jain options available • Kindly share dietary preferences
            </p>

            <Link
              to="/reservation"
              className="group inline-flex items-center gap-6 bg-amber-600 hover:bg-amber-500 
                         text-white px-24 py-8 text-2xl md:text-3xl font-medium tracking-widest uppercase 
                         shadow-2xl hover:shadow-amber-500/40 transform hover:-translate-y-1 
                         transition-all duration-500"
            >
              <Flame className="w-10 h-10" />
              Reserve Your Table
              <Flame className="w-10 h-10" />
            </Link>

            <p className="text-xl md:text-2xl text-amber-700 mt-16 italic font-light">
              ~ Crafted with devotion,<br/>
              <span className="text-slate-800 font-medium">The LPI Food Family</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}