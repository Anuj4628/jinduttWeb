// src/pages/Products/ProductMaterials.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductSlugs } from "../../components/productDetails";
import productMaterials from "../../data/productMaterials";
import bannerIndustrial from "../../assets/images/productImage/banner-industrial.webp";

// Existing images for the two combined category cards
import pipesImg from "../../assets/images/productImage/steel-pipes.webp";
import tubesImg from "../../assets/images/productImage/tubes.webp";
import sheetsImg from "../../assets/images/productImage/sheets.webp";
import platesImg from "../../assets/images/productImage/plates.webp";

const COMBINED_CATEGORIES = {
  "pipes-tubes": {
    title: "Pipes & Tubes",
    description:
      "Comprehensive range of seamless and welded pipes and precision tubes in stainless steel, nickel alloys, duplex, and special metals.",
    subProducts: [
      {
        id: "pipes",
        title: "Pipes",
        slug: "pipes",
        image: pipesImg,
        badge: "Industrial Piping",
        description:
          "Seamless and welded industrial pipes engineered for high pressure, cryogenic, chemical, and extreme temperature applications.",
        count: (productMaterials["pipes"] || []).length,
      },
      {
        id: "tubes",
        title: "Tubes",
        slug: "tubes",
        image: tubesImg,
        badge: "Precision Tubing",
        description:
          "High-precision seamless, welded, heat exchanger, and instrumentation tubes manufactured to rigorous international standards.",
        count: (productMaterials["tubes"] || []).length,
      },
    ],
  },
  "sheets-plates": {
    title: "Sheets & Plates",
    description:
      "Complete inventory of cold rolled stainless steel sheets and heavy industrial structural plates in all standard and exotic grades.",
    subProducts: [
      {
        id: "sheets",
        title: "Sheets",
        slug: "sheets",
        image: sheetsImg,
        badge: "Cold & Hot Rolled",
        description:
          "Precision-sheared stainless steel sheets in 2B, BA, No.4, and custom finishes for architectural, fabrication, and chemical use.",
        count: (productMaterials["sheets"] || []).length,
      },
      {
        id: "plates",
        title: "Plates",
        slug: "plates",
        image: platesImg,
        badge: "Heavy Industrial",
        description:
          "Heavy-gauge industrial plates, chequered plates, and pressure vessel quality plates cut to custom specifications.",
        count: (productMaterials["plates"] || []).length,
      },
    ],
  },
};

const ProductMaterials = () => {
  const { category } = useParams();
  const [activeFilter, setActiveFilter] = useState("all");

  // Check if this category uses custom components
  const allSlugs = getProductSlugs();
  const isCustomCategory = allSlugs.some((slug) => slug === category);

  if (isCustomCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const materials = productMaterials[category] ?? [];
  const combinedConfig = COMBINED_CATEGORIES[category];

  const categoryName = combinedConfig
    ? combinedConfig.title
    : category
        ?.split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ") || "Products";

  if (!materials.length && !combinedConfig) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            Materials Not Found
          </h1>
          <p className="text-gray-600">No products found in this category.</p>
          <Link
            to="/products"
            className="inline-block mt-4 text-blue-600 hover:underline"
          >
            Back to Products
          </Link>
        </div>
      </section>
    );
  }

  // Filtered materials when a sub-tab is chosen on combined category pages
  const displayedMaterials =
    combinedConfig && activeFilter !== "all"
      ? productMaterials[activeFilter] || []
      : materials;

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
                Products Classification
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0a1a52] leading-tight">
              {categoryName}
            </h1>
            <p className="text-lg text-slate-600 mt-3 max-w-2xl font-normal leading-relaxed">
              {combinedConfig
                ? combinedConfig.description
                : "Premium quality materials for demanding industrial applications"}
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-5">
              <span className="inline-flex items-center gap-2 text-slate-700 font-semibold text-sm bg-white/80 border border-blue-200/80 px-3.5 py-1.5 rounded-full shadow-sm">
                <span className="w-2 h-2 bg-[#d79b20] rounded-full"></span>
                {materials.length} Specifications Available
              </span>
              {combinedConfig && (
                <span className="inline-flex items-center gap-2 text-[#0a1a52] font-semibold text-sm bg-blue-100/60 border border-blue-200/80 px-3.5 py-1.5 rounded-full shadow-sm">
                  {combinedConfig.subProducts.length} Product Categories Grouped
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        {/* COMBINED CATEGORY HERO CARDS (PIPES & TUBES or SHEETS & PLATES) */}
        {combinedConfig && (
          <div className="mb-16">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#d79b20]">
                Grouped Products
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a1a52] mt-1">
                Explore {combinedConfig.title}
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Select an individual product group to view dedicated specifications and catalog details.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {combinedConfig.subProducts.map((subProd) => (
                <div
                  key={subProd.id}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col"
                >
                  {/* Image container */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
                    <img
                      src={subProd.image}
                      alt={subProd.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a52]/85 via-[#0a1a52]/30 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0a1a52] shadow-md border border-white/50">
                        {subProd.badge}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="bg-[#0a1a52]/90 backdrop-blur-md text-[#d79b20] px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md border border-white/10">
                        {subProd.count} Specifications
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-5 right-5">
                      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-wide drop-shadow">
                        {subProd.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      {subProd.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        to={`/products/${subProd.slug}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0a1a52] to-[#122a6e] hover:from-[#122a6e] hover:to-[#0a1a52] text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <span>Explore {subProd.title}</span>
                        <svg
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </Link>

                      <button
                        type="button"
                        onClick={() =>
                          setActiveFilter(
                            activeFilter === subProd.slug ? "all" : subProd.slug
                          )
                        }
                        className={`inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-xl font-bold text-sm border transition-all duration-200 ${
                          activeFilter === subProd.slug
                            ? "bg-[#d79b20] text-white border-[#d79b20] shadow-md"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {activeFilter === subProd.slug
                          ? "Showing Below"
                          : `Filter Below`}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pt-4 border-t border-slate-200">
          <div>
            <h2 className="text-2xl font-bold text-[#0a1a52]">
              All <span className="text-[#d79b20]">{categoryName}</span> Specifications
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              High-performance materials & grades available for rapid global dispatch
            </p>
          </div>

          {combinedConfig && (
            <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-slate-200 shadow-sm self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  activeFilter === "all"
                    ? "bg-[#0a1a52] text-white shadow-sm"
                    : "text-slate-600 hover:text-[#0a1a52]"
                }`}
              >
                All ({materials.length})
              </button>
              {combinedConfig.subProducts.map((sp) => (
                <button
                  key={sp.id}
                  type="button"
                  onClick={() => setActiveFilter(sp.slug)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    activeFilter === sp.slug
                      ? "bg-[#0a1a52] text-white shadow-sm"
                      : "text-slate-600 hover:text-[#0a1a52]"
                  }`}
                >
                  {sp.title} ({sp.count})
                </button>
              ))}
            </div>
          )}

          {!combinedConfig && (
            <div className="hidden sm:flex items-center gap-2 text-sm text-gray-400">
              <span className="w-16 h-0.5 bg-gray-200"></span>
              <span>{displayedMaterials.length} Products</span>
            </div>
          )}
        </div>

        {/* Specifications Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {displayedMaterials.map((item, index) => {
            // Determine actual category route for this item so links work even on combined pages
            const itemCategory = combinedConfig
              ? item.slug.includes("pipe")
                ? "pipes"
                : item.slug.includes("tube")
                ? "tubes"
                : item.slug.includes("sheet")
                ? "sheets"
                : item.slug.includes("plate")
                ? "plates"
                : category
              : category;

            return (
              <div
                key={`${item.id}-${item.slug}-${index}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#d79b20] transform hover:-translate-y-1.5 flex flex-col"
              >
                {/* Image Section */}
                <div className="relative h-60 overflow-hidden flex-shrink-0 bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Badge */}
                  {item.materialGroup && (
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#0a1a52] shadow-lg border border-white/50">
                      {item.materialGroup}
                    </div>
                  )}

                  {/* Title on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white leading-tight drop-shadow-lg line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                      {item.shortDescription}
                    </p>

                    {/* Standards */}
                    {item.standards && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.standards
                          .split(",")
                          .slice(0, 3)
                          .map((std, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200"
                            >
                              {std.trim()}
                            </span>
                          ))}
                        {item.standards.split(",").length > 3 && (
                          <span className="text-[10px] font-medium text-gray-400">
                            +{item.standards.split(",").length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={`/products/${itemCategory}/${item.slug}`}
                    state={{ material: item }}
                    className="mt-4 flex items-center justify-center gap-2 bg-[#0a1a52] hover:bg-[#122a6e] text-white text-sm font-semibold py-3 px-5 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#0a1a52]/20"
                  >
                    <span>View Details</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {materials.length > 6 && (
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-md border border-gray-100">
              <span className="text-sm text-gray-600">
                Need assistance finding the right product?
              </span>
              <Link
                to="/contact"
                className="bg-[#0a1a52] hover:bg-[#122a6e] text-white text-sm font-semibold px-6 py-2 rounded-full transition duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductMaterials;
