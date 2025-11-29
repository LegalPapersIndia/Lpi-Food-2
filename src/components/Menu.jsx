// src/components/ServicesAndMenu.jsx - LUXURY WHITE PROFESSIONAL THEME
import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Clock, Utensils, Wine, CakeSlice, Leaf } from 'lucide-react';

export default function ServicesAndMenu() {

  const menuCategories = [
    {
      category: "Starters",
      icon: <Utensils className="w-8 h-8" />,
      items: [
        { name: "Amritsari Paneer Tikka", desc: "Cottage cheese marinated in hung curd, kasuri methi & ajwain, tandoor charred", price: "₹650", veg: true },
        { name: "Galouti Kebab (Lamb)", desc: "Lucknow’s legendary melt-in-mouth kebabs with 32 secret spices", price: "₹950", signature: true },
        { name: "Tandoori Prawns", desc: "Jumbo prawns in ajwain-tomato marinade, clay oven roasted", price: "₹1,200" },
        { name: "Dahi Ke Kebab", desc: "Hung curd & cheese patties, crisp fried with mint chutney", price: "₹580", veg: true },
        { name: "Murgh Malai Tikka", desc: "Cream & cheese marinated chicken, mild spices, charcoal smoked", price: "₹780" },
      ]
    },
    {
      category: "Main Course",
      icon: <ChefHat className="w-8 h-8" />,
      items: [
        { name: "Butter Chicken (Old Delhi Style)", desc: "Tandoori chicken tikka in silky tomato-cashew-butter gravy", price: "₹850", popular: true },
        { name: "Dal Makhani (24-Hour)", desc: "Black lentils slow-cooked overnight with butter & fresh cream", price: "₹680", veg: true },
        { name: "Rogan Josh Kashmiri", desc: "Tender lamb in aromatic fennel, dry ginger & ratan jot curry", price: "₹1,100" },
        { name: "Paneer Lababdar", desc: "Paneer cubes in rich onion-tomato-cashew gravy, finished with kasuri methi", price: "₹750", veg: true },
        { name: "Hyderabadi Chicken Dum Biryani", desc: "Fragrant basmati layered with chicken, saffron & mint, served with raita", price: "₹950" },
      ]
    },
    {
      category: "Indian Breads",
      icon: <Utensils className="w-8 h-8" />,
      items: [
        { name: "Butter Naan / Garlic Naan", price: "₹120 – ₹180" },
        { name: "Laccha Paratha", desc: "Multi-layered whole wheat with ghee", price: "₹150" },
        { name: "Missi Roti", desc: "Gram flour bread with spices & herbs", price: "₹130" },
        { name: "Tandoori Roti", desc: "Whole wheat, plain or butter", price: "₹90" },
        { name: "Roomali Roti", desc: "Hand-tossed paper-thin bread", price: "₹140" },
      ]
    },
    {
      category: "Desserts",
      icon: <CakeSlice className="w-8 h-8" />,
      items: [
        { name: "Gulab Jamun (Hot)", desc: "Milk dumplings in cardamom-rose syrup", price: "₹380" },
        { name: "Rasmalai", desc: "Soft paneer patties in saffron-flavored milk", price: "₹420", popular: true },
        { name: "Kulfi Falooda", desc: "Pistachio kulfi with vermicelli & rose", price: "₹450" },
        { name: "Gajar Ka Halwa (Winter)", desc: "Slow-cooked carrot pudding with khoya", price: "₹480" },
      ]
    },
    {
      category: "Beverages",
      icon: <Wine className="w-8 h-8" />,
      items: [
        { name: "Masala Chai", desc: "Traditional spiced tea with ginger & cardamom", price: "₹180" },
        { name: "Mango Lassi", desc: "Churned yogurt with Alphonso mango", price: "₹280" },
        { name: "Thandai (Seasonal)", desc: "Chilled almond milk with saffron & rose", price: "₹350" },
        { name: "Jaljeera", desc: "Cumin, mint & tamarind digestive cooler", price: "₹200" },
      ]
    }
  ];

  return (
    <section className="py-28 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Section Header - Pure Elegance */}
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-widest text-slate-900 mb-6">
            The LPI Food Menu
          </h2>
          <p className="text-3xl md:text-4xl font-medium tracking-wider text-amber-600">
            A Celebration of Indian Culinary Art
          </p>
          <p className="text-lg md:text-xl text-slate-600 mt-6 max-w-4xl mx-auto leading-relaxed font-light">
            Every dish is crafted with seasonal ingredients, ancient techniques, and unwavering respect for flavor.
          </p>
        </div>

        {/* Luxury Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {menuCategories.map((cat) => (
            <div
              key={cat.category}
              className="group bg-white border border-gray-200 rounded-3xl overflow-hidden
                         shadow-lg hover:shadow-2xl hover:border-amber-200 
                         transition-all duration-700"
            >
              {/* Category Header - Gold Accent */}
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 px-10 py-8 flex items-center gap-6">
                <div className="text-amber-600">{cat.icon}</div>
                <h3 className="text-3xl md:text-4xl font-medium tracking-wide text-slate-800">
                  {cat.category}
                </h3>
              </div>

              {/* Menu Items */}
              <div className="p-10 lg:p-12 space-y-10 bg-white">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start group/item pb-8 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="flex-1 pr-10">
                      <div className="flex items-center gap-4 mb-2">
                        <h4 className="text-xl md:text-2xl font-medium text-slate-800 group-hover/item:text-amber-600 transition-colors duration-300">
                          {item.name}
                        </h4>
                        {item.popular && (
                          <span className="text-xs font-semibold bg-amber-600 text-white px-4 py-1.5 rounded-full tracking-wider">
                            MOST LOVED
                          </span>
                        )}
                        {item.signature && (
                          <span className="text-xs font-semibold bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-1.5 rounded-full tracking-wider">
                            CHEF’S SIGNATURE
                          </span>
                        )}
                        {item.veg && (
                          <Leaf className="w-6 h-6 text-green-600" />
                        )}
                      </div>
                      {item.desc && (
                        <p className="text-gray-600 text-base leading-relaxed italic font-light">
                          {item.desc}
                        </p>
                      )}
                    </div>
                    <span className="text-2xl font-medium text-amber-600 whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA - Refined & Inviting */}
        <div className="mt-32 text-center">
          <p className="text-lg text-slate-600 mb-12 font-light">
            Jain options available • Seasonal specials • Full allergen information on request
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link
              to="/reservation"
              className="group inline-flex items-center gap-5 bg-amber-600 hover:bg-amber-500 text-white px-16 py-6 
                         text-lg font-medium tracking-widest uppercase shadow-xl hover:shadow-amber-500/30 
                         transform hover:-translate-y-1 transition-all duration-500"
            >
              Reserve Your Table
              <span className="group-hover:translate-x-3 transition-transform duration-300">→</span>
            </Link>

            <a
              href="/lpi-food-menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-16 py-6 text-slate-800 border-2 border-slate-800 hover:border-amber-600 
                         hover:bg-amber-50 text-lg font-medium tracking-widest uppercase 
                         transition-all duration-500"
            >
              Download Menu (PDF)
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}