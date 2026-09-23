// src/components/home/Hero2.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaGlobe,
} from "react-icons/fa";

import pipeline from "../../assets/images/industries/pipeline.png";

const Hero2 = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* LEFT SIDE - CONTENT */}
          <div className="w-full lg:w-1/2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#b22222]/10 px-4 py-1.5 rounded-full border border-[#b22222]/20 mb-6">
              <span className="w-2 h-2 bg-[#b22222] rounded-full"></span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b22222]">
                Premium Quality
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl uppercase sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0a1a52] leading-[1.1]">
              Engineered for <br />
              <span className="text-[#b22222] uppercase">Extremes</span>
            </h2>

            <p className="text-lg md:text-xl text-slate-600 mt-4 leading-relaxed">
              Our heavy-duty steel pipes and industrial tubing anchor critical
              energy, processing, and infrastructure frameworks globally.
            </p>

            {/* Features */}
            <div className="flex flex-col gap-3 mt-6">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-[#b22222] flex-shrink-0" />
                <span className="text-slate-600 text-sm">
                  Manufactured under rigorous metallurgical standards
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaShieldAlt className="w-5 h-5 text-[#b22222] flex-shrink-0" />
                <span className="text-slate-600 text-sm">
                  Unmatched structural integrity for heavy engineering
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaGlobe className="w-5 h-5 text-[#b22222] flex-shrink-0" />
                <span className="text-slate-600 text-sm">
                  Trusted by global contractors worldwide
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/products"
                className="group bg-[#0a1a52] hover:bg-[#1a3a7a] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0a1a52]/25 flex items-center gap-2"
              >
                Explore Products
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-[#0a1a52]/20 hover:border-[#0a1a52] text-[#0a1a52] font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:bg-[#0a1a52]/5"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE WITH OVERLAY */}
          <div className="w-full lg:w-1/2 relative">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#d79b20]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#0a1a52]/10 rounded-full blur-2xl"></div>

            {/* Image Container */}
            <div className="relative bg-gradient-to-br from-[#d79b20]/5 to-[#0a1a52]/5 rounded-3xl p-4 border border-slate-100 shadow-xl">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={pipeline}
                  alt="Industrial Pipeline"
                  className="w-full h-auto max-h-[450px] object-contain"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-xl px-5 py-3 border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#d79b20]/10 flex items-center justify-center">
                    <FaShieldAlt className="w-5 h-5 text-[#d79b20]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Quality Certified</p>
                    <p className="text-sm font-bold text-[#0a1a52]">
                      ISO 9001:2015
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
