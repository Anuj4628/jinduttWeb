// src/data/productMaterials/buttweldFitting.js

import carbon from "../../assets/images/stock/carbon-steel-butt-weld-fittings.jpg";
import inco from "../../assets/images/stock/buttweld-fitting.jpg";
import hast from "../../assets/images/stock/Hastelloy-Buttweld-Fittings.jpg";
import incol from "../../assets/images/stock/Inconel-Buttweld-Fittings.jpg";
import nic from "../../assets/images/stock/Nickel-Copper-Alloy-Buttweld-Fittings.jpg";
import duplex from "../../assets/images/stock/duplex-steel-buttweld-fittings.jpg";
import titani from "../../assets/images/stock/titanium-buttweld-fittings.jpg";

const buttweldFitting = [
  // ============================================
  // 1. STAINLESS STEEL BUTTWELD FITTINGS (TOP PRIORITY)
  // ============================================
  {
    id: 1,
    slug: "stainless-duplex-steel-buttweld-fittings",
    image: duplex,
    title: "Stainless Steel & Duplex Buttweld Fittings",
    shortDescription:
      "ASTM A403 WP304, WP304L, WP316, WP316L, 317L, 321, 347, 904L, and Duplex WP2205 / WP2507 seamless & welded 90°/45° elbows, equal tees, concentric reducers, and stub ends.",
    materialGroup: "Stainless Steel",
    standards:
      "ASTM A403 WP304L, WP316L, 317L, 321, 347, 904L, Duplex WP2205, Super Duplex WP2507",
    forms: "Seamless & Welded Elbows, Tees, Reducers, End Caps, Stub Ends",
    application: "Oil & Gas, Petrochemical, Marine, Chemical Processing, and Power Plants",
  },

  // ============================================
  // 2. CARBON STEEL BUTTWELD FITTINGS
  // ============================================
  {
    id: 2,
    slug: "carbon-alloy-steel-buttweld-fittings",
    image: carbon,
    title: "Carbon Steel Buttweld Fittings – ASTM A234 WPB & WPC",
    shortDescription:
      "ASTM A234 WPB, WPC, and ASTM A420 WPL6 Low-Temperature Carbon Steel seamless pipe elbows, tees, concentric reducers, and caps for high-pressure transmission lines.",
    materialGroup: "Carbon Steel",
    standards: "ASTM A234 WPB, WPC, ASTM A420 WPL6, ASME B16.9",
    forms: "High-Yield Seamless Pipe Elbows, Concentric & Eccentric Reducers, Tees",
    application:
      "High-pressure piping systems, refineries, gas transmission, power plants, and utilities",
  },

  // ============================================
  // 3. ALLOY STEEL BUTTWELD FITTINGS
  // ============================================
  {
    id: 3,
    slug: "alloy-steel-buttweld-fittings",
    image: inco,
    title: "Alloy Steel Buttweld Fittings – ASTM A234 WP11, WP22 & WP91",
    shortDescription:
      "High-temperature Chrome-Moly alloy steel buttweld fittings manufactured to ASTM A234 WP5, WP9, WP11, WP22, and WP91 for high-temperature boilers and steam pipelines.",
    materialGroup: "Alloy Steel",
    standards: "ASTM A234 WP5, WP9, WP11, WP22, WP91",
    forms: "Long Radius Bends, High-Pressure Elbows, Reducing Tees, End Caps",
    application: "Thermal power plants, high-pressure steam distribution, and boiler facilities",
  },

  // ============================================
  // 4. OTHER MATERIALS & EXOTIC ALLOYS
  // ============================================
  {
    id: 4,
    slug: "inconel-buttweld-fittings",
    image: incol,
    title: "Inconel Buttweld Fittings",
    shortDescription:
      "Inconel 600, 625, 718, X-750 Oxidation-proof welded pipe caps, returns, and reducers for thermal power core environments and aerospace systems.",
    materialGroup: "Inconel Core",
    standards: "Inconel 600, 625, 718, X-750",
    forms: "Oxidization Proof Welded Pipe Caps, Returns, Tees",
    application: "Thermal Power Core Environments and Nuclear Utilities",
  },
  {
    id: 5,
    slug: "incoloy-buttweld-fittings",
    image: inco,
    title: "Incoloy Buttweld Fittings",
    shortDescription:
      "Incoloy 800, 800H, 800HT, 825 Short Radius Stub Ends and Lateral Tees for high-temperature chemical and carburizing atmospheres.",
    materialGroup: "Incoloy Superalloy",
    standards: "Incoloy 800, 800H, 800HT, 825",
    forms: "Short Radius Stub Ends, Lateral Tees",
    application: "Structural Process Plants and High-Heat Chemical Lines",
  },
  {
    id: 6,
    slug: "hastelloy-buttweld-fittings",
    image: hast,
    title: "Hastelloy Buttweld Fittings",
    shortDescription:
      "Hastelloy C276, C22, B2, B3, X Equal Tees and Long Radius Bends for High-Acid Volatility Refineries and Pollution Control.",
    materialGroup: "Hastelloy Core",
    standards: "Hastelloy C276, C22, B2, B3, X",
    forms: "Equal Tees, Long Radius Bends",
    application: "High-Acid Volatility Refineries and Flue Gas Systems",
  },
  {
    id: 7,
    slug: "monel-buttweld-fittings",
    image: nic,
    title: "Monel Buttweld Fittings",
    shortDescription:
      "Monel 400, Monel K500 Cross Tees and Custom Slanted Returns Built for Desalination Infrastructure and Marine Pipelines.",
    materialGroup: "Monel Alloy",
    standards: "Monel 400, Monel K500",
    forms: "Cross Tees, Custom Slanted Returns",
    application: "Desalination Infrastructure and Seawater Cooling Systems",
  },
  {
    id: 8,
    slug: "nickel-copper-alloy-buttweld-fittings",
    image: nic,
    title: "Nickel Copper Alloy Buttweld Fittings",
    shortDescription:
      "Copper-Nickel 70/30, 90/10 Alloys, Sub-Sea Pipeline Reducers and Anti-Biofouling Offshore Joint Runs.",
    materialGroup: "Nickel Copper",
    standards: "Copper-Nickel 70/30, 90/10 Alloys",
    forms: "Sub-Sea Pipeline Reducers, Anti-Biofouling Offshore Joint Runs",
    application: "Sub-Sea Pipeline Reducers and Marine Systems",
  },
  {
    id: 9,
    slug: "titanium-buttweld-fittings",
    image: titani,
    title: "Titanium Buttweld Fittings",
    shortDescription:
      "ASTM B363 WP Gr. 1, Gr. 2, Gr. 5 (Ti-6Al-4V), Gr. 7 High Strength-to-Weight Cryogenic and Seawater Pipeline Fittings.",
    materialGroup: "Titanium Core",
    standards: "ASTM B363 WP Gr. 1, Gr. 2, Gr. 5 (Ti-6Al-4V), Gr. 7",
    forms: "High Strength-to-Weight Cryogenic Pipeline Fittings",
    application: "Aerospace, Marine, and Chlor-Alkali Chemical Industries",
  },
];

export default buttweldFitting;
