// src/components/home/Hero1.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import hero1 from "../../assets/images/industries/hero1.png";
import hero2 from "../../assets/images/industries/hero2.png";
import hero3 from "../../assets/images/industries/hero3.png";
import hero4 from "../../assets/images/industries/hero4.png";
import hero5 from "../../assets/images/industries/hero5.png";

// ✅ FIXED: All slides now have unique images
const slides = [
  {
    image: hero2,
    title: "Built on Strength",
    subtitle: "Premium Quality Stainless Steel Products for Global Industries",
  },
  {
    image: hero1,
    title: "Quality Metals for Critical Industries",
    subtitle:
      "Trusted by Oil & Gas, Petrochemical, Marine & Power Generation Sectors",
  },
  {
    image: hero3,
    title: "Global Reach, Local Expertise",
    subtitle: "Serving 50+ Countries with Premium Metal Products",
  },
  {
    image: hero4,
    title: "Engineered for Performance",
    subtitle: "ISO Certified Quality Assurance Across All Product Lines",
  },

  {
    image: hero5,
    title: "Innovation in Metallurgy",
    subtitle: "Advanced Alloy Solutions for Tomorrow's Challenges",
  },
];

const Hero1 = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto slide - changes every 4 seconds
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused, slides.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div
      className="relative w-full h-[100vh] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`
            absolute inset-0 transition-all duration-1000 ease-in-out
            ${index === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"}
          `}
        >
          {/* IMAGE */}
          <img
            src={slide.image}
            alt={slide.title || "Slide"}
            className="w-full h-full object-cover"
            loading="lazy"
          />

          {/* GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a52]/80 via-[#0a1a52]/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a52]/40 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/src/assets/images/pattern-dots.svg')] opacity-10"></div>

          {/* TEXT CONTENT */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-0.5 bg-[#d79b20]"></span>
                <span className="text-[#d79b20] text-sm font-semibold uppercase tracking-widest">
                  Jindutt Metal & Alloy
                </span>
              </div>

              <h1 className="text-white font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
                {slide.title}
              </h1>

              <p className="text-slate-200 text-base sm:text-lg md:text-xl mt-4 max-w-2xl leading-relaxed">
                {slide.subtitle}
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/products"
                  className="group bg-[#d79b20] hover:bg-[#c08a1a] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#d79b20]/25 flex items-center gap-2"
                >
                  Explore Products
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:bg-white/10"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>

          {/* SLIDE INDICATOR */}
          <div className="absolute bottom-8 right-8 text-white/50 text-sm font-medium hidden md:block z-20">
            <span className="text-white">
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="mx-1">/</span>
            <span>{String(slides.length).padStart(2, "0")}</span>
          </div>
        </div>
      ))}

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 z-20"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="w-5 h-5" />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 z-20"
        aria-label="Next slide"
      >
        <FaChevronRight className="w-5 h-5" />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              i === current
                ? "w-10 h-2.5 bg-[#d79b20] shadow-lg shadow-[#d79b20]/30"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero1;
