// src/data/productMaterials/circles.js

import stain from "../../assets/images/stock/stainless-steel-circles.jpg";
import mach from "../../assets/images/stock/machined-forged-circles.jpg";
import ind from "../../assets/images/stock/specialty-industrial-circles.jpg";

const circles = [
  // ============================================
  // 1. STAINLESS STEEL CIRCLES (TOP PRIORITY)
  // ============================================
  {
    id: 1,
    slug: "stainless-steel-circles",
    image: stain,
    title: "Stainless Steel Circles",
    shortDescription:
      "ASTM A240 / A480 Gr 304, 304L, 316, 316L, 310S, 317L, 321, 347, 904L laser-cut, plasma-cut, and cold-sheared circular blanks.",
    materialGroup: "Stainless Steel",
    standards:
      "ASTM A240 / A480 Gr 304, 304L, 316, 316L, 310S, 317L, 321, 347, 904L",
    forms: "Cold Sheared, Plasma Cut, Laser Cut Disks",
    application:
      "Pressure vessels, tank heads, cookware, fabrication, and engineering applications",
  },

  // ============================================
  // 2. CARBON STEEL CIRCLES
  // ============================================
  {
    id: 2,
    slug: "machined-forged-circles",
    image: mach,
    title: "Carbon Steel & Forged Circles",
    shortDescription:
      "ASTM A105, A350 LF2 Class 1/2, Carbon Steel C45, IS 2062 heavy circular blanks, seamless blind flange blocks, and rotating gear blanks.",
    materialGroup: "Carbon Steel",
    standards:
      "ASTM A105, A350 LF2 Class 1/2, Carbon Steel C45, IS 2062",
    forms: "Machined & Forged Heavy Circles, Blind Flange Blocks",
    application: "Machinery fabrication, heavy equipment, flanges, and structural engineering",
  },

  // ============================================
  // 3. ALLOY STEEL & SPECIALTY CIRCLES
  // ============================================
  {
    id: 3,
    slug: "specialty-industrial-circles",
    image: ind,
    title: "Alloy Steel & Specialty Exotic Circles",
    shortDescription:
      "SAE 4140, 4340, Monel 400/K500, Inconel 600/625/718, Hastelloy C276, and Duplex S31803 / S32750 precision machined circular blanks.",
    materialGroup: "Alloy Steel & Specialty",
    standards:
      "SAE 4140/4340, Monel 400/K500, Inconel 600/625/718, Hastelloy C276, Duplex S31803",
    forms: "High-Alloy and Superalloy Disks",
    application: "Aerospace, defense, marine, and mission-critical rotating machinery",
  },
];

export default circles;
