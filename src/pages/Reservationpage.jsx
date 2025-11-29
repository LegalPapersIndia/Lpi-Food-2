// src/pages/Reservation.jsx - LUXURY WHITE & GOLD ROYAL MASTERPIECE
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Calendar, Clock, Users, Phone, Mail, MapPin, Sparkles, Utensils, ChevronDown, Crown } from 'lucide-react';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '2', specialRequest: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your royal table has been reserved, ${formData.name.split(' ')[0]}.\nWe await your arrival with devotion.`);
    console.log('Royal Reservation:', formData);
  };

  return (
    <>
      {/* Hero – A Royal Summons */}
      <section 
        className="relative h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=90&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-white/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/60 via-transparent to-amber-50/40" />

        <div className="relative text-center px-8 max-w-7xl mx-auto mt-10">
          <h1 className="text-7xl md:text-9xl lg:text-10xl font-light tracking-widest text-slate-900 mb-8 leading-none">
            Reserve Your Throne
          </h1>
          <p className="text-4xl md:text-6xl font-medium text-amber-700 tracking-wider mb-6">
            A Royal Evening Awaits
          </p>
          <p className="text-2xl md:text-3xl text-slate-700 font-extralight italic max-w-5xl mx-auto leading-relaxed">
            At LPI Food, every reservation is a coronation — and every guest, royalty
          </p>

          <div className="flex justify-center gap-16 mt-20">
            <Crown className="w-16 h-16 text-amber-600 animate-pulse" />
            <Flame className="w-14 h-14 text-amber-600 animate-pulse delay-300" />
            <Sparkles className="w-16 h-16 text-amber-600 animate-pulse delay-700" />
          </div>

          <ChevronDown className="w-12 h-12 text-amber-600 mx-auto mt-24 animate-bounce" />
        </div>
      </section>

      {/* Reservation Form – The Royal Decree */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-light tracking-widest text-slate-900 mb-8">
              Secure Your Royal Table
            </h2>
            <p className="text-2xl md:text-3xl text-slate-700 font-light max-w-4xl mx-auto leading-relaxed">
              Your presence honors us. Allow us to prepare accordingly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-3xl p-16 shadow-2xl border border-amber-100">
            {/* Left Column */}
            <div className="space-y-10">
              <div>
                <label className="flex items-center gap-4 text-slate-800 text-xl mb-4 font-medium">
                  <Users className="w-7 h-7 text-amber-600" />
                  Your Esteemed Name
                </label>
                <input
                  type="text" name="name" required value={formData.name} onChange={handleChange}
                  placeholder="As you wish to be addressed"
                  className="w-full px-8 py-6 rounded-xl bg-gray-50 border border-gray-200 text-slate-900 text-lg 
                             focus:outline-none focus:border-amber-500 focus:shadow-xl focus:shadow-amber-100 
                             transition-all duration-300"
                />
              </div>

              <div>
                <label className="flex items-center gap-4 text-slate-800 text-xl mb-4 font-medium">
                  <Mail className="w-7 h-7 text-amber-600" />
                  Royal Correspondence
                </label>
                <input
                  type="email" name="email" required value={formData.email} onChange={handleChange}
                  placeholder="yourname@palace.com"
                  className="w-full px-8 py-6 rounded-xl bg-gray-50 border border-gray-200 text-slate-900 text-lg 
                             focus:outline-none focus:border-amber-500 focus:shadow-xl focus:shadow-amber-100 
                             transition-all duration-300"
                />
              </div>

              <div>
                <label className="flex items-center gap-4 text-slate-800 text-xl mb-4 font-medium">
                  <Phone className="w-7 h-7 text-amber-600" />
                  Royal Line
                </label>
                <input
                  type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-8 py-6 rounded-xl bg-gray-50 border border-gray-200 text-slate-900 text-lg 
                             focus:outline-none focus:border-amber-500 focus:shadow-xl focus:shadow-amber-100 
                             transition-all duration-300"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-10">
              <div>
                <label className="flex items-center gap-4 text-slate-800 text-xl mb-4 font-medium">
                  <Calendar className="w-7 h-7 text-amber-600" />
                  Chosen Date
                </label>
                <input
                  type="date" name="date" required value={formData.date} onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-8 py-6 rounded-xl bg-gray-50 border border-gray-200 text-slate-900 text-lg 
                             focus:outline-none focus:border-amber-500 focus:shadow-xl focus:shadow-amber-100 
                             transition-all duration-300"
                />
              </div>

              <div>
                <label className="flex items-center gap-4 text-slate-800 text-xl mb-4 font-medium">
                  <Clock className="w-7 h-7 text-amber-600" />
                  Preferred Hour
                </label>
                <select
                  name="time" required value={formData.time} onChange={handleChange}
                  className="w-full px-8 py-6 rounded-xl bg-gray-50 border border-gray-200 text-slate-900 text-lg 
                             focus:outline-none focus:border-amber-500 focus:shadow-xl focus:shadow-amber-100 
                             transition-all duration-300"
                >
                  <option value="">Select your royal hour</option>
                  <option value="18:30">6:30 PM – Sunset Seating</option>
                  <option value="19:30">7:30 PM – Prime Hour</option>
                  <option value="20:30">8:30 PM – Golden Hour</option>
                  <option value="21:30">9:30 PM – Late Royal</option>
                </select>
              </div>

              <div>
                <label className="flex items-center gap-4 text-slate-800 text-xl mb-4 font-medium">
                  <Users className="w-7 h-7 text-amber-600" />
                  Your Royal Party
                </label>
                <select
                  name="guests" value={formData.guests} onChange={handleChange}
                  className="w-full px-8 py-6 rounded-xl bg-gray-50 border border-gray-200 text-slate-900 text-lg 
                             focus:outline-none focus:border-amber-500 focus:shadow-xl focus:shadow-amber-100 
                             transition-all duration-300"
                >
                  {[1,2,3,4,5,6,7,8].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Distinguished Guest' : 'Royal Guests'}</option>
                  ))}
                  <option value="9+">9+ Guests (Private dining available)</option>
                </select>
              </div>
            </div>

            {/* Special Requests */}
            <div className="md:col-span-2">
              <label className="flex items-center gap-4 text-slate-800 text-xl mb-4 font-medium">
                <Sparkles className="w-7 h-7 text-amber-600" />
                Special Wishes (Optional)
              </label>
              <textarea
                name="specialRequest" rows="5" value={formData.specialRequest} onChange={handleChange}
                placeholder="Anniversary celebration • Window by the diyas • Jain/No onion-garlic • Surprise dessert • Anything to make your evening eternal..."
                className="w-full px-8 py-6 rounded-xl bg-gray-50 border border-gray-200 text-slate-900 text-lg 
                           focus:outline-none focus:border-amber-500 focus:shadow-xl focus:shadow-amber-100 
                           transition-all duration-300 resize-none"
              />
            </div>

            {/* Royal Confirmation */}
            <div className="md:col-span-2 text-center mt-12">
              <button
                type="submit"
                className="group inline-flex items-center gap-6 bg-amber-600 hover:bg-amber-500 
                           text-white px-32 py-9 text-2xl md:text-3xl font-medium tracking-widest uppercase 
                           rounded-full shadow-2xl hover:shadow-amber-500/40 transform hover:-translate-y-1 
                           transition-all duration-500"
              >
                <Crown className="w-10 h-10" />
                Confirm My Royal Reservation
                <Crown className="w-10 h-10" />
              </button>
            </div>
          </form>

          <p className="text-center mt-16 text-2xl text-slate-700 italic font-light">
            “A seat at LPI Food is not booked — it is bestowed.”
          </p>
        </div>
      </section>

      {/* Royal Details */}
      <section className="py-32 px-6 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div className="space-y-6">
            <MapPin className="w-16 h-16 text-amber-600 mx-auto" />
            <h3 className="text-3xl md:text-4xl font-medium text-slate-900">Our Palace</h3>
            <p className="text-lg text-slate-700 font-light leading-relaxed">
              F-2, Sector 8<br/>
              Noida, Uttar Pradesh<br/>
              India 201301
            </p>
          </div>

          <div className="space-y-6">
            <Clock className="w-16 h-16 text-amber-600 mx-auto" />
            <h3 className="text-3xl md:text-4xl font-medium text-slate-900">Royal Hours</h3>
            <p className="text-lg text-slate-700 font-light leading-relaxed">
              Lunch ⋅ 12:00 PM – 3:00 PM<br/>
              Dinner ⋅ 7:00 PM – 11:30 PM<br/>
              <span className="text-amber-600 font-medium">Open Daily</span>
            </p>
          </div>

          <div className="space-y-6">
            <Phone className="w-16 h-16 text-amber-600 mx-auto" />
            <h3 className="text-3xl md:text-4xl font-medium text-slate-900">Reach the Court</h3>
            <p className="text-lg font-light leading-relaxed">
              <a href="tel:+917505266931" className="text-2xl text-amber-600 hover:text-amber-700">+91 750 526 6931</a><br/>
              <a href="mailto:reservations@lpifood.com" className="text-amber-600 hover:text-amber-700">reservations@lpifood.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Final Benediction */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-light tracking-widest text-slate-900 mb-12">
            We Await Your Arrival
          </h2>
          <p className="text-2xl md:text-3xl text-slate-700 mb-16 leading-relaxed font-light">
            The diyas are lit. The spices have been praying.<br/>
            Your throne at LPI Food stands ready.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-6 text-amber-600 hover:text-amber-700 text-2xl uppercase tracking-widest font-medium transition"
          >
            <Sparkles className="w-8 h-8" />
            Return to the Palace
            <Sparkles className="w-8 h-8" />
          </Link>
        </div>
      </section>
    </>
  );
}