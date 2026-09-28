// src/components/common/Navbar.jsx
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiBars3, HiXMark, HiChevronDown } from "react-icons/hi2";

import Header from "./Header";

import products, { productMenuSections } from "../../data/products";
import materials from "../../data/materials";
import dimensions from "../../data/dimensions";
import certificates from "../../data/certificates";
import { CATALOG_PDF } from "../../data/catalog";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState("");
  const [dropdown, setDropdown] = useState("");

  const linkStyle = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
      isActive
        ? "bg-gradient-to-r from-[#0a1a52] to-[#1a3a7a] text-white shadow-md shadow-[#0a1a52]/20"
        : "text-slate-600 hover:bg-slate-50 hover:text-[#0a1a52]"
    }`;

  // Standard dropdown for Materials, Dimensions, Certificates
  const renderDropdown = (title, path, data) => (
    <div
      className="relative group"
      onMouseEnter={() => setDropdown(title)}
      onMouseLeave={() => setDropdown("")}
    >
      {/* TRIGGER BUTTON */}
      <button
        className={`flex items-center gap-1.5 px-4 py-2.5 font-semibold text-sm tracking-wide transition-all duration-200 relative
        ${dropdown === title ? "text-[#0a1a52]" : "text-slate-600 hover:text-[#0a1a52]"}`}
      >
        {title}
        <HiChevronDown
          className={`text-base transition-transform duration-300 ${dropdown === title ? "rotate-180" : ""}`}
        />
        {/* Dynamic underline indicator track */}
        <span
          className={`absolute bottom-0 left-4 right-4 h-[2.5px] bg-gradient-to-r from-[#d79b20] to-[#e8a830] rounded-full transition-all duration-300 transform origin-center
          ${dropdown === title ? "scale-x-100" : "scale-x-0"}`}
        />
      </button>

      {/* DROPDOWN CONTAINER PANEL */}
      {dropdown === title && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 z-50">
          <div className="w-max min-w-[680px] rounded-2xl bg-white shadow-[0_20px_60px_-15px_rgba(10,26,82,0.25)] border border-slate-100/80 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Premium top accent color strip */}
            <div className="h-1 w-full bg-gradient-to-r from-[#0a1a52] via-[#d79b20] to-[#0a1a52]" />

            {/* Inner list wrapper */}
            <div className="p-6">
              <div className="grid grid-cols-3 gap-x-4 gap-y-1">
                {data.map((item) => (
                  <NavLink
                    key={
                      item.slug || item.name.toLowerCase().replace(/\s+/g, "-")
                    }
                    to={`/${path}/${item.slug || item.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className={({ isActive }) => `
                    group/item flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-[#0a1a52]/5 text-[#0a1a52]"
                        : "text-slate-600 hover:bg-[#0a1a52]/5 hover:text-[#0a1a52]"
                    }
                  `}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon ? (
                        <item.icon className="w-4 h-4 text-[#d79b20]" />
                      ) : (
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                      )}

                      <span className="tracking-wide whitespace-nowrap">
                        {item.name}
                      </span>
                    </div>

                    {/* Micro-interaction Chevron */}
                    <svg
                      className="w-3.5 h-3.5 opacity-0 -translate-x-2 text-[#d79b20] transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0"
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
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Dedicated 2-Section Product Mega-Menu (Clean, Minimal & Perfectly Centered)
  const renderProductMegaMenu = () => {
    const isProductOpen = dropdown === "Products";

    return (
      <div
        className="relative"
        onMouseEnter={() => setDropdown("Products")}
        onMouseLeave={() => setDropdown("")}
      >
        {/* TRIGGER BUTTON */}
        <button
          className={`flex items-center gap-1.5 px-4 py-2.5 font-semibold text-sm tracking-wide transition-all duration-200 relative
          ${isProductOpen ? "text-[#0a1a52]" : "text-slate-600 hover:text-[#0a1a52]"}`}
        >
          Products
          <HiChevronDown
            className={`text-base transition-transform duration-300 ${
              isProductOpen ? "rotate-180" : ""
            }`}
          />
          <span
            className={`absolute bottom-0 left-4 right-4 h-[2.5px] bg-gradient-to-r from-[#d79b20] to-[#e8a830] rounded-full transition-all duration-300 transform origin-center
            ${isProductOpen ? "scale-x-100" : "scale-x-0"}`}
          />
        </button>

        {/* 2-SECTION MEGA MENU PANEL - COMPACT, MINIMAL & CLEAN */}
        {isProductOpen && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
            <div className="w-[720px] rounded-2xl bg-white shadow-[0_15px_45px_-10px_rgba(10,26,82,0.18)] border border-slate-200/80 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
              {/* Subtle top accent line */}
              <div className="h-[3px] w-full bg-gradient-to-r from-[#0a1a52] via-[#d79b20] to-[#0a1a52]" />

              {/* TWO SECTIONS GRID */}
              <div className="grid grid-cols-2 divide-x divide-slate-100 p-5">
                {/* SECTION 1: Core Priority Products (12 entries) */}
                <div className="pr-4">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 px-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0a1a52]">
                      Primary Piping & Flow
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400">
                      12 Items
                    </span>
                  </div>

                  <div className="flex flex-col gap-0.5">
                    {productMenuSections.section1.map((item, idx) => (
                      <NavLink
                        key={`${item.slug}-${idx}`}
                        to={`/products/${item.slug}`}
                        className={({ isActive }) => `
                          group/pitem flex items-center justify-between rounded-lg px-2.5 py-1.5 text-[13px] font-medium transition-all duration-150
                          ${
                            isActive
                              ? "bg-[#0a1a52] text-white"
                              : "text-slate-600 hover:bg-slate-50 hover:text-[#0a1a52]"
                          }
                        `}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          {item.icon && (
                            <item.icon className="w-3.5 h-3.5 text-[#0a1a52] group-hover/pitem:text-[#d79b20] flex-shrink-0 transition-colors" />
                          )}
                          <span className="truncate">{item.name}</span>
                        </div>

                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          {item.badge && (
                            <span className="text-[9px] font-semibold px-1.5 py-0.2 rounded bg-amber-50 text-[#b07d15] border border-amber-200/60">
                              {item.badge}
                            </span>
                          )}
                          <svg
                            className="w-3 h-3 opacity-0 -translate-x-1 text-[#d79b20] transition-all duration-150 group-hover/pitem:opacity-100 group-hover/pitem:translate-x-0"
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
                        </div>
                      </NavLink>
                    ))}
                  </div>
                </div>

                {/* SECTION 2: Sanitary & Specialized (12 entries) */}
                <div className="pl-4">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 px-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0a1a52]">
                      Sanitary & Specialized
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400">
                      12 Items
                    </span>
                  </div>

                  <div className="flex flex-col gap-0.5">
                    {productMenuSections.section2.map((item, idx) => (
                      <NavLink
                        key={`${item.slug}-${idx}`}
                        to={`/products/${item.slug}`}
                        className={({ isActive }) => `
                          group/pitem flex items-center justify-between rounded-lg px-2.5 py-1.5 text-[13px] font-medium transition-all duration-150
                          ${
                            isActive
                              ? "bg-[#0a1a52] text-white"
                              : "text-slate-600 hover:bg-slate-50 hover:text-[#0a1a52]"
                          }
                        `}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          {item.icon && (
                            <item.icon className="w-3.5 h-3.5 text-[#0a1a52] group-hover/pitem:text-[#d79b20] flex-shrink-0 transition-colors" />
                          )}
                          <span className="truncate">{item.name}</span>
                        </div>

                        <div className="flex items-center flex-shrink-0">
                          <svg
                            className="w-3 h-3 opacity-0 -translate-x-1 text-[#d79b20] transition-all duration-150 group-hover/pitem:opacity-100 group-hover/pitem:translate-x-0"
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
                        </div>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              {/* Minimal Bottom Bar */}
              <div className="px-5 py-2.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">
                  24 Standard & Exotic Alloy Classifications
                </span>
                <Link
                  to="/products"
                  className="text-[11px] font-bold text-[#0a1a52] hover:text-[#d79b20] transition-colors flex items-center gap-1 group/link"
                >
                  <span>All Products</span>
                  <svg
                    className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5"
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
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Dedicated Mobile Products Section with the 2 clear sections
  const renderMobileProductSection = () => {
    const isOpen = mobileDropdown === "Products";

    return (
      <div className="border-b border-slate-100 last:border-b-0">
        <button
          onClick={() => setMobileDropdown(isOpen ? "" : "Products")}
          className="w-full flex items-center justify-between px-4 py-3.5 text-left font-medium text-slate-700 hover:text-[#0a1a52] transition-colors"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d79b20]"></span>
            Products
          </span>
          <HiChevronDown
            className={`transition-transform duration-300 text-slate-400 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[1400px] pb-4" : "max-h-0"
          }`}
        >
          <div className="ml-4 pl-3 flex flex-col gap-4">
            {/* Section 1 */}
            <div>
              <div className="flex items-center gap-2 mb-2 px-2">
                <span className="w-1 h-3 bg-[#0a1a52] rounded-full" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0a1a52]">
                  Primary Piping & Flow (12)
                </span>
              </div>
              <div className="flex flex-col gap-0.5 border-l-2 border-[#d79b20]/30 pl-3">
                {productMenuSections.section1.map((item, idx) => (
                  <NavLink
                    key={`m1-${item.slug}-${idx}`}
                    to={`/products/${item.slug}`}
                    onClick={() => setMobileMenu(false)}
                    className="flex items-center justify-between py-2 text-sm text-slate-600 hover:text-[#0a1a52] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      {item.icon && (
                        <item.icon className="w-4 h-4 text-[#d79b20]" />
                      )}
                      <span>{item.name}</span>
                    </div>
                    {item.badge && (
                      <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-[#d79b20]/15 text-[#b07d15]">
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <div className="flex items-center gap-2 mb-2 px-2">
                <span className="w-1 h-3 bg-[#d79b20] rounded-full" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0a1a52]">
                  Sanitary & Specialized (12)
                </span>
              </div>
              <div className="flex flex-col gap-0.5 border-l-2 border-[#d79b20]/30 pl-3">
                {productMenuSections.section2.map((item, idx) => (
                  <NavLink
                    key={`m2-${item.slug}-${idx}`}
                    to={`/products/${item.slug}`}
                    onClick={() => setMobileMenu(false)}
                    className="flex items-center gap-2.5 py-2 text-sm text-slate-600 hover:text-[#0a1a52] transition-colors"
                  >
                    {item.icon && (
                      <item.icon className="w-4 h-4 text-[#d79b20]" />
                    )}
                    <span>{item.name}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderMobileSection = (title, path, data) => {
    const isOpen = mobileDropdown === title;

    return (
      <div className="border-b border-slate-100 last:border-b-0">
        {/* Parent */}
        <button
          onClick={() => setMobileDropdown(isOpen ? "" : title)}
          className="w-full flex items-center justify-between px-4 py-3.5 text-left font-medium text-slate-700 hover:text-[#0a1a52] transition-colors"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d79b20]"></span>
            {title}
          </span>

          <HiChevronDown
            className={`transition-transform duration-300 text-slate-400 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Children */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[800px] pb-3" : "max-h-0"
          }`}
        >
          <div className="ml-6 border-l-2 border-[#d79b20]/30 pl-4 flex flex-col gap-1">
            {data.map((item) => (
              <NavLink
                key={item.slug || item.name.toLowerCase().replace(/\s+/g, "-")}
                to={`/${path}/${item.slug || item.name.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-3 py-2.5 text-sm text-slate-500 hover:text-[#0a1a52] transition-colors"
              >
                {item.icon && <item.icon className="w-4 h-4 text-[#d79b20]" />}

                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Create materials data for dropdown - map from your materials.js structure
  const materialDropdownData = materials.map((material) => ({
    name: material.name,
    slug: material.slug,
    icon: material.icon,
  }));

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200/60 shadow-sm px-6 lg:px-10">
      <div className="w-full h-20 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex-shrink-0">
          <Header />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-0.5">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkStyle}>
            About Us
          </NavLink>
          {renderProductMegaMenu()}
          {renderDropdown("Materials", "materials", materialDropdownData)}
          {renderDropdown("Dimensions", "dimensions", dimensions)}
          {renderDropdown("Certificates", "certificates", certificates)}
          <NavLink to="/gallery" className={linkStyle}>
            Gallery
          </NavLink>
          <a
            href={CATALOG_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg font-medium text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0a1a52] transition-all duration-300"
          >
            Catalog
          </a>
          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>
        </div>

        {/* CTA BUTTON */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="rounded-xl bg-gradient-to-r from-[#0a1a52] to-[#1a3a7a] px-6 py-2.5 text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#0a1a52]/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Talk To Us
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden p-2 text-slate-600 hover:text-[#0a1a52] transition-colors rounded-lg hover:bg-slate-50"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <HiXMark size={28} /> : <HiBars3 size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col px-6 py-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-[#0a1a52] text-white"
                    : "text-slate-600 hover:bg-slate-50 hover:text-[#0a1a52]"
                }`
              }
              onClick={() => setMobileMenu(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-[#0a1a52] text-white"
                    : "text-slate-600 hover:bg-slate-50 hover:text-[#0a1a52]"
                }`
              }
              onClick={() => setMobileMenu(false)}
            >
              About
            </NavLink>

            {renderMobileProductSection()}

            {renderMobileSection(
              "Materials",
              "materials",
              materialDropdownData,
            )}

            {renderMobileSection("Dimensions", "dimensions", dimensions)}

            {renderMobileSection("Certificates", "certificates", certificates)}

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-[#0a1a52] text-white"
                    : "text-slate-600 hover:bg-slate-50 hover:text-[#0a1a52]"
                }`
              }
              onClick={() => setMobileMenu(false)}
            >
              Gallery
            </NavLink>

            <a
              href={CATALOG_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl font-medium text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0a1a52] transition-all duration-300"
              onClick={() => setMobileMenu(false)}
            >
              Catalog
            </a>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-[#0a1a52] text-white"
                    : "text-slate-600 hover:bg-slate-50 hover:text-[#0a1a52]"
                }`
              }
              onClick={() => setMobileMenu(false)}
            >
              Contact
            </NavLink>

            <div className="pt-4 mt-2 border-t border-slate-100">
              <Link
                to="/contact"
                onClick={() => setMobileMenu(false)}
                className="w-full flex items-center justify-center rounded-xl bg-gradient-to-r from-[#0a1a52] to-[#1a3a7a] px-6 py-3 text-white font-semibold text-sm shadow-md"
              >
                Talk To Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
