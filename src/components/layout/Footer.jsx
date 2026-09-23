// src/components/common/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { MdCall } from "react-icons/md";
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import logo from "../../assets/images/logo/jindutt-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1a52] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <img
              src={logo}
              alt="Jindutt Metal & Alloy"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Jindutt Metal & Alloy Pvt. Ltd. is a trusted manufacturer,
              stockist, supplier and exporter of premium metal products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Materials", path: "/materials" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-slate-300 hover:text-[#d79b20] transition-colors text-base flex items-center gap-2"
                  >
                    <HiChevronRight className="w-4 h-4 text-[#d79b20]" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-4">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-5 h-5 text-[#d79b20] flex-shrink-0 mt-1" />
                <span className="text-slate-300 text-base leading-relaxed">
                  1st Floor, New No.22 Old No.44,
                  <br />
                  Post Office Street, Parrys,
                  <br />
                  Chennai - 600001, Tamil Nadu
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MdCall className="w-5 h-5 text-[#209dd7] flex-shrink-0" />
                <div>
                  <a
                    href="tel:+919167631676"
                    className="text-slate-300 hover:text-[#d79b20] transition-colors text-base block"
                  >
                    +91 9167631676
                  </a>
                  <a
                    href="tel:+919967078222"
                    className="text-slate-300 hover:text-[#d79b20] transition-colors text-base block mt-0.5"
                  >
                    +91 9967078222
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                <div>
                  <a
                    href="https://wa.me/919167631676"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-[#25D366] transition-colors text-base block"
                  >
                    +91 9167631676
                  </a>
                  <a
                    href="https://wa.me/919967078222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-[#25D366] transition-colors text-base block mt-0.5"
                  >
                    +91 9967078222
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="w-5 h-5 text-[#d79b20] flex-shrink-0" />
                <a
                  href="mailto:info@jinduttmetal.com"
                  className="text-slate-300 hover:text-[#d79b20] transition-colors text-base"
                >
                  info@jinduttmetal.com
                </a>
              </li>
            </ul>
          </div>

          {/* Warehouse Location */}
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-4">
              Warehouse
            </h3>
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-5 h-5 text-[#d79b20] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-300 text-base leading-relaxed">
                    333-9, Post Office St, Mannadi,
                    <br />
                    George Town, Chennai,
                    <br />
                    Greater Chennai, Tamil Nadu 600001
                  </p>
                  <a
                    href="https://maps.app.goo.gl/EQLmXyu12hGPeuM77?g_st=ac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-[#d79b20] text-sm font-semibold uppercase tracking-wider hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-base">
            © {currentYear} Jindutt Metal & Alloy Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-base">
            <Link
              to="/privacy"
              className="text-slate-400 hover:text-[#d79b20] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-slate-400 hover:text-[#d79b20] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/sitemap"
              className="text-slate-400 hover:text-[#d79b20] transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
