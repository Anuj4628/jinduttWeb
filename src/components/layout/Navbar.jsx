// src/components/common/Navbar.jsx
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiBars3, HiXMark, HiChevronDown } from "react-icons/hi2";

import Header from "./Header";

import products from "../../data/products";
import materials from "../../data/materials";
import dimensions from "../../data/dimensions";
import certificates from "../../data/certificates";

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
        {/* LOGO - FIXED: Removed Link wrapper around Header */}
        <div className="flex-shrink-0">
          <Header /> {/* Header now handles the Link internally */}
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-0.5">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkStyle}>
            About Us
          </NavLink>
          {renderDropdown("Products", "products", products)}
          {renderDropdown("Materials", "materials", materialDropdownData)}
          {renderDropdown("Dimensions", "dimensions", dimensions)}
          {renderDropdown("Certificates", "certificates", certificates)}
          <NavLink to="/gallery" className={linkStyle}>
            Gallery
          </NavLink>
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

            {renderMobileSection("Products", "products", products)}

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

            <Link
              to="/contact"
              onClick={() => setMobileMenu(false)}
              className="mt-4 rounded-xl bg-gradient-to-r from-[#0a1a52] to-[#1a3a7a] py-3.5 text-center font-semibold text-white hover:shadow-lg hover:shadow-[#0a1a52]/25 transition-all duration-300"
            >
              Talk To Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
