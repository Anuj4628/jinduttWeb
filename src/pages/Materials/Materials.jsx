// src/pages/Materials/Materials.jsx
import React from "react";
import { Link } from "react-router-dom";
import materials from "../../data/materials";
import bannerIndustrial from "../../assets/images/productImage/banner-industrial.webp";
import { CATALOG_PDF } from "../../data/catalog";

const Materials = () => {
  return (
    <section className="bg-slate-50 min-h-screen">
      {/* Hero Banner - Premium */}
      <div className="relative bg-gradient-to-r from-blue-50/90 via-white to-blue-50/90 border-b border-blue-200/70 py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-multiply pointer-events-none"
          style={{ backgroundImage: `url(${bannerIndustrial})` }}
        />
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#0a1a52 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative max-w-7xl mx-auto flex items-center px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-0.5 bg-[#d79b20]"></span>
              <span className="text-[#0a1a52] text-sm font-bold uppercase tracking-widest">
                Our Range
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#0a1a52] leading-tight">
              Materials
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mt-4 max-w-2xl leading-relaxed font-normal">
              Explore our comprehensive range of high-performance materials for
              industrial applications
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <span className="inline-flex items-center gap-2 text-slate-700 font-semibold text-sm bg-white/80 border border-blue-200/80 px-3.5 py-1.5 rounded-full shadow-sm">
                <span className="w-2 h-2 bg-[#d79b20] rounded-full"></span>
                {materials.length}+ Materials Available
              </span>
              <span className="inline-flex items-center gap-2 text-slate-700 font-semibold text-sm bg-white/80 border border-blue-200/80 px-3.5 py-1.5 rounded-full shadow-sm">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Premium Quality
              </span>
              <a
                href={CATALOG_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-semibold text-sm bg-[#0a1a52] hover:bg-[#d79b20] px-4 py-1.5 rounded-full shadow-sm transition-all duration-300"
              >
                Explore Catalog
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Materials Grid - Premium */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a1a52]">
              Explore Our <span className="text-[#d79b20]">Materials</span>
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              High-performance alloys for every industrial need
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-400">
            <span className="w-16 h-0.5 bg-gray-200"></span>
            <span>{materials.length} Categories</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {materials.map((material, index) => (
            <Link
              key={material.slug}
              to={`/materials/${material.slug}`}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#d79b20] transform hover:-translate-y-1"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Image with Overlay */}
              <div className="relative w-full h-52 bg-gray-100 overflow-hidden">
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon Badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  {material.icon && (
                    <material.icon className="w-4 h-4 text-[#0a1a52]" />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 relative">
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-lg font-bold text-[#0a1a52] group-hover:text-[#d79b20] transition-colors duration-300 line-clamp-1">
                    {material.name}
                  </h2>
                </div>

                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                  {material.description}
                </p>

                {/* Highlight Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {material.highlight?.slice(0, 2).map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-medium bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-100"
                    >
                      {item}
                    </span>
                  ))}
                  {material.highlight?.length > 2 && (
                    <span className="text-[10px] font-medium text-gray-400">
                      +{material.highlight.length - 2}
                    </span>
                  )}
                </div>

                {/* Explore Link */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between group-hover:border-[#d79b20]/20 transition-colors">
                  <span className="text-sm font-semibold text-[#0a1a52] group-hover:text-[#d79b20] transition-colors flex items-center gap-2">
                    Explore
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                  <span className="text-xs text-gray-400 group-hover:text-[#d79b20] transition-colors">
                    {material.items?.length || 0} Products
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100">
            <span className="text-sm text-gray-600">
              Can't find what you're looking for?
            </span>
            <a
              href={CATALOG_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#d79b20] hover:bg-[#d79b20] text-[#0a1a52] hover:text-white text-sm font-semibold px-5 py-2 rounded-full transition duration-200"
            >
              Explore Catalog
            </a>
            <Link
              to="/contact"
              className="bg-[#0a1a52] hover:bg-[#122a6e] text-white text-sm font-semibold px-6 py-2 rounded-full transition duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;
