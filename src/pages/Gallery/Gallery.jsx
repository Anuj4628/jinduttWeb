// src/pages/Gallery/Gallery.jsx
import React, { useState, useMemo } from "react";
import {
  X,
  Grid3X3,
  LayoutGrid,
  Image as ImageIcon,
  ZoomIn,
} from "lucide-react";
import products from "../../data/products";
import bannerIndustrial from "../../assets/images/productImage/banner-industrial.webp";

const Gallery = () => {
  const categories = useMemo(
    () => ["All", ...new Set(products.map((p) => p.category))],
    [],
  );
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"

  const filtered =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Hero Banner - Premium */}
      <div
        className="relative h-44 sm:h-56 md:h-72 lg:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerIndustrial})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a52]/90 to-[#0a1a52]/70"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/images/pattern-dots.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-0.5 bg-[#d79b20]"></span>
              <span className="text-[#d79b20] text-sm font-semibold uppercase tracking-widest">
                Our Work
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Gallery
            </h1>
            <p className="text-lg text-gray-200 mt-3 max-w-2xl">
              A look at our premium products and finished work
            </p>
            <div className="flex items-center gap-4 mt-4">
              <span className="inline-flex items-center gap-2 text-white/80 text-sm">
                <span className="w-2 h-2 bg-[#d79b20] rounded-full"></span>
                {products.length} Products
              </span>
              <span className="w-px h-6 bg-white/20"></span>
              <span className="inline-flex items-center gap-2 text-white/80 text-sm">
                <span className="w-2 h-2 bg-[#d79b20] rounded-full"></span>
                Premium Quality
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12">
        {/* Filter and View Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-[#0a1a52] text-white shadow-md shadow-[#0a1a52]/20"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-[#d79b20] hover:text-[#d79b20]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === "grid"
                  ? "bg-[#0a1a52] text-white shadow-sm"
                  : "text-gray-400 hover:text-[#0a1a52]"
              }`}
              aria-label="Grid view"
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === "list"
                  ? "bg-[#0a1a52] text-white shadow-sm"
                  : "text-gray-400 hover:text-[#0a1a52]"
              }`}
              aria-label="List view"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-sm text-gray-500 mb-6">
          Showing {filtered.length} of {products.length} products
          {activeFilter !== "All" && ` in "${activeFilter}"`}
        </div>

        {/* Grid */}
        <div
          className={`grid gap-5 ${
            viewMode === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1"
          }`}
        >
          {filtered.map((product) => (
            <div
              key={product.slug}
              onClick={() => setLightboxImage(product)}
              className={`group relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#d79b20]/40 cursor-pointer ${
                viewMode === "list" ? "flex gap-4 p-4" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden ${
                  viewMode === "grid"
                    ? "w-full h-64"
                    : "w-48 h-48 flex-shrink-0"
                }`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a52]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Zoom Icon */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <ZoomIn className="w-4 h-4 text-[#0a1a52]" />
                </div>
                {/* Category Badge */}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#0a1a52] shadow-sm border border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div
                className={`${
                  viewMode === "grid"
                    ? "p-4"
                    : "flex-1 p-4 flex flex-col justify-center"
                }`}
              >
                <h3
                  className={`font-bold text-[#0a1a52] group-hover:text-[#d79b20] transition-colors ${
                    viewMode === "grid" ? "text-sm" : "text-lg"
                  }`}
                >
                  {product.name}
                </h3>
                {viewMode === "list" && product.shortDescription && (
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {product.shortDescription}
                  </p>
                )}
                {viewMode === "list" && (
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-xs text-gray-400">
                      {product.category}
                    </span>
                    <span className="w-px h-4 bg-gray-200"></span>
                    <span className="text-xs text-[#d79b20]">
                      Click to view
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No Products Found
              </h3>
              <p className="text-gray-500 text-sm">
                No products found in "{activeFilter}" category.
              </p>
              <button
                onClick={() => setActiveFilter("All")}
                className="mt-4 text-[#d79b20] font-medium hover:underline"
              >
                Clear Filter
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox - Premium */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-white/60 hover:text-[#d79b20] transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-white/10"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {/* Image Info */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white max-w-2xl">
            <h3 className="text-xl font-bold">{lightboxImage.name}</h3>
            <p className="text-sm text-white/60 mt-1">
              {lightboxImage.category}
            </p>
            {lightboxImage.shortDescription && (
              <p className="text-sm text-white/40 mt-2 max-w-md mx-auto">
                {lightboxImage.shortDescription}
              </p>
            )}
          </div>

          {/* Image */}
          <img
            src={lightboxImage.image}
            alt={lightboxImage.name}
            className="max-h-[75vh] max-w-full rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Navigation Hint */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white/20 text-xs uppercase tracking-widest">
            Click anywhere to close
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
