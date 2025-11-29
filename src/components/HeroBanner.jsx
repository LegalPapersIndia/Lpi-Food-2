// src/components/HeroBanner.jsx - LUXURY WHITE PROFESSIONAL THEME (2025 Fine Dining Standard)
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    title: "LPI Food",
    subtitle: "An Ode to Indian Culinary Heritage",
    highlight: "Fine Dining • Reimagined",
    image: "https://www.oberoihotels.com/-/media/oberoi-hotel/the-oberoi-new-delhi/TONDelhi_25July24/dining/360/desktop820x646/360degree3.jpg",
  },
  {
    id: 2,
    title: "Where Tradition Meets Art",
    subtitle: "Curated Flavors • Timeless Elegance",
    highlight: "Crafted with Passion Since 2025",
    image: "https://images.getbento.com/accounts/e395f21ff143e91a6e9215f73c3db02d/media/images/36119bazaar_meat_chi_shane_boyer_photography8_1.png?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5",
  },
  {
    id: 3,
    title: "A Journey Through India",
    subtitle: "Every Plate Tells a Story",
    highlight: "Seasonal • Sustainable • Sublime",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function HeroBanner() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-amber-600/60 !w-3 !h-3',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-amber-600 !opacity-100 !scale-125',
        }}
        speed={2000}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-screen w-full">
              {/* Full Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Light & Elegant Overlay (Bright Luxury) */}
              <div className="absolute inset-0 bg-white/50" /> {/* Core white overlay */}
              <div className="absolute inset-0 from-white via-white/40 to-transparent" />
              <div className="absolute inset-0 from-amber-50/30 via-transparent to-amber-50/20" />

              {/* Content - Centered & Regal */}
              <div className="relative h-full flex flex-col items-center justify-center text-center px-8">
                <div className="max-w-7xl mx-auto space-y-10">

                  {/* Brand Name - Monumental & Refined */}
                  <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-10xl font-light tracking-widest text-slate-900">
                    {slide.title}
                  </h1>

                  {/* Gold Highlight Line */}
                  <p className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-wider text-amber-600">
                    {slide.highlight}
                  </p>

                  {/* Elegant Subtitle */}
                  <p className="text-3xl sm:text-4xl md:text-5xl font-extralight text-slate-700 max-w-5xl mx-auto leading-relaxed">
                    {slide.subtitle}
                  </p>

                  {/* Premium CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-16 mb-10">
                    <Link
                      to="/reservation"
                      className="group inline-flex items-center gap-4 bg-amber-600 hover:bg-amber-500 text-white px-14 py-6 text-lg font-medium tracking-widest uppercase shadow-2xl hover:shadow-amber-500/40 transform hover:-translate-y-1 transition-all duration-500"
                    >
                      Reserve a Table
                      <span className="ml-4 group-hover:translate-x-3 transition-transform duration-300">→</span>
                    </Link>

                    <Link
                      to="/menu"
                      className="inline-flex items-center gap-4 bg-transparent hover:bg-white/80 text-slate-800 border-2 border-slate-800 hover:border-slate-900 px-14 py-6 text-lg font-medium tracking-widest uppercase backdrop-blur-sm transition-all duration-500"
                    >
                      Discover Menu
                    </Link>
                  </div>
                </div>
              </div>

              {/* Subtle Scroll Indicator */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination & Animations */}
      <style jsx>{`
        .swiper-pagination {
          bottom: 60px !important;
        }
        .swiper-pagination-bullet {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          margin: 0 8px !important;
          box-shadow: 0 0 15px rgba(180, 83, 9, 0.3);
        }
        .swiper-pagination-bullet-active {
          box-shadow: 0 0 25px rgba(180, 83, 9, 0.6);
        }
      `}</style>
    </section>
  );
}