// src/components/common/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/jindutt-logo.png";

const Header = () => {
  return (
    <Link to="/" className="group block">
      <div className="flex items-center justify-end bg-transparent">
        {/* Logo Container */}
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#d79b20]/20 to-[#0a1a52]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Logo Image */}
          <div className="relative bg-transparent p-2">
            <img
              className="h-25 object-contain "
              src={logo}
              alt="Jindutt Metal & Alloy"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Header;
