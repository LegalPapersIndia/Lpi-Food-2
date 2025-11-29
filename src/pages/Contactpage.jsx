// src/pages/ContactUs.jsx - LUXURY WHITE & GOLD PROFESSIONAL THEME
import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube,
  Flame, Send, CheckCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', guests: '', message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', date: '', guests: '', message: '' });
    }, 4000);
  };

  return (
    <>
      {/* Hero – Pure Elegance */}
      <section 
        className="relative h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=2400&q=90&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-white/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 via-transparent to-amber-50/30" />

        <div className="relative text-center px-8 max-w-7xl mx-auto">
          <h1 className="text-7xl md:text-9xl lg:text-10xl font-light tracking-widest text-slate-900 mb-8 leading-none">
            Get in Touch
          </h1>
          <p className="text-4xl md:text-6xl font-medium text-amber-700 tracking-wider mb-6">
            We’d Love to Welcome You
          </p>
          <p className="text-2xl md:text-3xl text-slate-700 font-extralight italic max-w-5xl mx-auto leading-relaxed">
            Reservations • Private events • Special requests • Or simply to say namaste
          </p>

          <div className="flex justify-center gap-14 mt-20">
            <Flame className="w-14 h-14 text-amber-600 animate-pulse" />
            <Send className="w-12 h-12 text-amber-600 animate-pulse delay-300" />
            <Flame className="w-14 h-14 text-amber-600 animate-pulse delay-700" />
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left: Visit Us */}
          <div className="space-y-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-light tracking-widest text-slate-900 mb-12">
                Visit Us
              </h2>

              <div className="space-y-12 text-lg">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-9 h-9 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-medium text-slate-900">LPI Food</p>
                    <p className="text-xl text-slate-600 mt-2 leading-relaxed font-light">
                      F-2, Sector 8<br/>
                      Noida, Uttar Pradesh<br/>
                      India 201301
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                    <Phone className="w-9 h-9 text-amber-600" />
                  </div>
                  <div>
                    <a href="tel:+917505266931" className="text-2xl font-medium text-slate-900 hover:text-amber-600 transition">
                      +91 750 526 6931
                    </a>
                    <p className="text-slate-600 font-light">Reservations & inquiries</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                    <Mail className="w-9 h-9 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xl font-medium text-slate-900">reservations@lpifood.com</p>
                    <p className="text-slate-600 font-light">We reply within 12 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-9 h-9 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xl font-medium text-slate-900">Opening Hours</p>
                    <p className="text-slate-600 font-light leading-relaxed">
                      Lunch ⋅ 12:00 PM – 3:00 PM<br/>
                      Dinner ⋅ 7:00 PM – 11:30 PM<br/>
                      <span className="text-amber-600 font-medium">Open Daily</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div>
              <h3 className="text-3xl md:text-4xl font-medium text-slate-900 mb-8">Find Your Way</h3>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-amber-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3366.3033497832166!2d77.31967657533406!3d28.595428075685028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2290a24adc2aa39f%3A0x6393f050e681d51e!2sLegal%20Papers%20India!5e1!3m2!1sen!2sin!4v1763811705013!5m2!1sen!2sin"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LPI Food Location"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-3xl font-medium text-slate-900 mb-8">Follow the Journey</h3>
              <div className="flex gap-6">
                {[
                  { icon: <Instagram className="w-7 h-7" />, url: "#" },
                  { icon: <Facebook className="w-7 h-7" />, url: "#" },
                  { icon: <Youtube className="w-7 h-7" />, url: "#" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    className="w-16 h-16 rounded-full border-2 border-slate-300 hover:border-amber-500 hover:bg-amber-50 
                               transition-all duration-500 flex items-center justify-center group"
                  >
                    <div className="text-slate-600 group-hover:text-amber-600 transition">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <h2 className="text-5xl md:text-6xl font-light tracking-widest text-slate-900 mb-12">
              Send Us a Message
            </h2>

            {isSubmitted ? (
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-20 text-center border border-amber-200">
                <CheckCircle className="w-28 h-28 text-amber-600 mx-auto mb-8" />
                <h3 className="text-4xl md:text-5xl font-medium text-slate-900 mb-6">Thank You</h3>
                <p className="text-xl text-slate-700 font-light leading-relaxed max-w-md mx-auto">
                  Your message has been received.<br/>
                  We’ll respond within 12 hours with warmth and care.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange}
                    placeholder="Your Name" required
                    className="w-full px-8 py-6 rounded-xl bg-white border border-gray-200 text-slate-900 placeholder-slate-500 
                               text-lg focus:outline-none focus:border-amber-500 focus:shadow-xl focus:shadow-amber-100 
                               transition-all duration-300"
                  />
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange}
                    placeholder="Email Address" required
                    className="w-full px-8 py-6 rounded-xl bg-white border border-gray-200 text-slate-900 placeholder-slate-500 
                               text-lg focus:outline-none focus:border-amber-500 focus:shadow-xl focus:shadow-amber-100 
                               transition-all duration-300"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input
                    type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    placeholder="Phone Number" required
                    className="w-full px-8 py-6 rounded-xl bg-white border border-gray-200 text-slate-900 placeholder-slate-500 
                               text-lg focus:outline-none focus:border-amber-500 focus:shadow-xl focus:shadow-amber-100 
                               transition-all duration-300"
                  />
                  <input
                    type="date" name="date" value={formData.date} onChange={handleChange}
                    className="w-full px-8 py-6 rounded-xl bg-white border border-gray-200 text-slate-900 
                               text-lg focus:outline-none focus:border-amber-500 focus:shadow-xl focus:shadow-amber-100 
                               transition-all duration-300"
                  />
                </div>

                <input
                  type="number" name="guests" value={formData.guests} onChange={handleChange}
                  placeholder="Number of Guests" min="1"
                  className="w-full px-8 py-6 rounded-xl bg-white border border-gray-200 text-slate-900 placeholder-slate-500 
                             text-lg focus:outline-none focus:border-amber-500 focus:shadow-xl focus:shadow-amber-100 
                             transition-all duration-300"
                />

                <textarea
                  name="message" value={formData.message} onChange={handleChange}
                  rows="6" placeholder="Your Message (Optional)"
                  className="w-full px-8 py-6 rounded-xl bg-white border border-gray-200 text-slate-900 placeholder-slate-500 
                             text-lg focus:outline-none focus:border-amber-500 focus:shadow-xl focus:shadow-amber-100 
                             transition-all duration-300 resize-none"
                />

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-4 bg-amber-600 hover:bg-amber-500 
                             text-white px-20 py-8 rounded-full text-2xl font-medium tracking-widest uppercase 
                             shadow-xl hover:shadow-amber-500/30 transform hover:-translate-y-1 
                             transition-all duration-500"
                >
                  <Send className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                  Send Message
                  <Send className="w-8 h-8 group-hover:-translate-x-2 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Final Invitation */}
        <div className="mt-32 text-center bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-20 border border-amber-200">
          <h2 className="text-5xl md:text-7xl font-light tracking-widest text-slate-900 mb-8">
            Your Table Awaits
          </h2>
          <p className="text-2xl md:text-3xl text-slate-700 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Prefer to speak with us? Call <span className="text-amber-600 font-medium">+91 750 526 6931</span><br/>
            or reserve instantly below
          </p>
          <Link
            to="/reservation"
            className="group inline-flex items-center gap-6 bg-amber-600 hover:bg-amber-500 text-white 
                       px-24 py-8 text-2xl md:text-3xl font-medium tracking-widest uppercase 
                       shadow-2xl hover:shadow-amber-500/40 transform hover:-translate-y-1 
                       transition-all duration-500"
          >
            <Flame className="w-10 h-10" />
            Reserve Your Experience
            <Flame className="w-10 h-10" />
          </Link>
        </div>
      </section>
    </>
  );
}