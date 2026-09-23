// src/components/home/Cards.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaIndustry,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

import pipe from "../../assets/images/productImage/steel-pipes.webp";
import plates from "../../assets/images/productImage/plates.webp";
import rod from "../../assets/images/productImage/rod.webp";
import flanges from "../../assets/images/productImage/Flanges.webp";
import fastener from "../../assets/images/productImage/fastener.webp";
import buttweld from "../../assets/images/productImage/buttweld.webp";
import coil from "../../assets/images/productImage/coil.webp";
import valves from "../../assets/images/productImage/valves.webp";

const cardData = [
  {
    id: 1,
    title: "PIPES & TUBES",
    subtitle: "COMPONENT RANGE",
    image: pipe,
    link: "/products/pipes",
    icon: FaIndustry,
    description: "Premium quality pipes and tubes for industrial applications",
  },
  {
    id: 2,
    title: "SHEETS & PLATES",
    subtitle: "COMPONENT RANGE",
    image: plates,
    link: "/products/sheets",
    icon: FaIndustry,
    description: "High-grade sheets and plates for heavy engineering",
  },
  {
    id: 3,
    title: "ROD & BAR",
    subtitle: "COMPONENT RANGE",
    image: rod,
    link: "/products/round-bars",
    icon: FaIndustry,
    description: "Precision rods and bars for critical applications",
  },
  {
    id: 4,
    title: "FLANGES",
    subtitle: "COMPONENT RANGE",
    image: flanges,
    link: "/products/flanges",
    icon: FaIndustry,
    description: "High-strength flanges for secure connections",
  },
  {
    id: 5,
    title: "FASTENERS",
    subtitle: "COMPONENT RANGE",
    image: fastener,
    link: "/products/fasteners",
    icon: FaIndustry,
    description: "Reliable fasteners for demanding environments",
  },
  {
    id: 6,
    title: "BUTTWELD FITTINGS",
    subtitle: "COMPONENT RANGE",
    image: buttweld,
    link: "/products/buttweld-fittings",
    icon: FaIndustry,
    description: "Precision buttweld fittings for piping systems",
  },
  {
    id: 7,
    title: "COILS",
    subtitle: "COMPONENT RANGE",
    image: coil,
    link: "/products/coils",
    icon: FaIndustry,
    description: "High-quality coils for continuous processing",
  },
  {
    id: 8,
    title: "INDUSTRIAL VALVES",
    subtitle: "COMPONENT RANGE",
    image: valves,
    link: "/products/valves",
    icon: FaIndustry,
    description: "Industrial valves for flow control applications",
  },
];

const Cards = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 font-sans overflow-hidden">
      {/* HEADER SECTION */}
      <div className="w-full flex flex-col items-center text-center mb-12 md:mb-16">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-10 h-0.5 bg-[#d79b20]"></span>
          <span className="text-xs font-bold tracking-[0.25em] text-[#d79b20] uppercase">
            Production Manifest
          </span>
          <span className="w-10 h-0.5 bg-[#d79b20]"></span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#0a1a52] leading-tight">
          Industrial Product{" "}
          <span className="text-[#d79b20]">Classifications</span>
        </h2>

        <p className="text-slate-500 text-sm mt-3 max-w-2xl">
          Premium quality industrial components engineered for critical
          applications across global industries
        </p>

        <div className="w-16 h-1 bg-[#d79b20] mt-4 rounded-full"></div>
      </div>

      {/* CARDS GRID - WITH ELEVATE & GLOW ANIMATION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-7xl mx-auto">
        {cardData.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.id}
              to={card.link}
              className="group relative block w-full h-[320px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              {/* Glow Effect - Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d79b20]/0 via-[#d79b20]/0 to-[#d79b20]/0 group-hover:from-[#d79b20]/5 group-hover:via-[#d79b20]/10 group-hover:to-[#d79b20]/20 transition-all duration-700 z-0"></div>

              {/* Card Inner */}
              <div className="relative w-full h-full bg-slate-100 z-10">
                {/* Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Gradient Overlay - Static */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a52]/80 via-[#0a1a52]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute -inset-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Front Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  {/* Top Decorative Line */}
                  <div className="w-12 h-0.5 bg-[#d79b20] mb-3 transition-all duration-500 group-hover:w-20"></div>

                  <span className="inline-block text-[8px] font-extrabold tracking-[0.2em] text-white/80 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full uppercase mb-2">
                    {card.subtitle}
                  </span>

                  <h3 className="text-xl font-black text-white uppercase leading-tight transition-all duration-500 group-hover:text-[#d79b20]">
                    {card.title}
                  </h3>

                  {/* Description - Reveal on Hover */}
                  <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-20">
                    <p className="text-white/80 text-xs mt-2 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Hover Indicator */}
                  <div className="flex items-center gap-2 mt-3 text-white/60 text-xs transition-all duration-500 group-hover:text-[#d79b20]">
                    <span className="font-medium uppercase tracking-wider">
                      Explore
                    </span>
                    <FaArrowRight className="w-3 h-3 transition-transform duration-500 group-hover:translate-x-2" />
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/20 transition-all duration-500 group-hover:border-[#d79b20]/50"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/20 transition-all duration-500 group-hover:border-[#d79b20]/50"></div>

                {/* Icon Badge - Top Right */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#d79b20]/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:bg-[#d79b20] group-hover:scale-110 group-hover:rotate-12 z-20">
                  <Icon className="w-5 h-5 text-white transition-all duration-500 group-hover:text-white" />
                </div>

                {/* Rating Badge - Bottom Right (hidden, appears on hover) */}
                <div className="absolute bottom-20 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 z-20">
                  <div className="flex items-center gap-1 bg-[#0a1a52]/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#d79b20]/30">
                    <FaStar className="w-3 h-3 text-[#d79b20]" />
                    <span className="text-[10px] font-bold text-white">
                      4.9
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 bg-[#0a1a52] hover:bg-[#1a3a7a] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0a1a52]/25"
        >
          View All Products
          <FaArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default Cards;
