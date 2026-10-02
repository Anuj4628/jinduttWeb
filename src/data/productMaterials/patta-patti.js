import bar from "../../assets/images/stock/patti-stainless-stell-flat-bars.jpg";
import stainless from "../../assets/images/stock/patti-stainless-duplex-steel.jpg";
import carbon from "../../assets/images/stock/carbon-steel-flat-bar.jpg";
import patti from "../../assets/images/stock/patti-carbon-alloy-steel.jpg";

const pattapatti = [
  // ============================================
  // 1. STAINLESS STEEL PATTA & PATTI (TOP PRIORITY)
  // ============================================
  {
    id: 1,
    slug: "stainless-steel-flat-bars",
    image: bar,
    title: "Stainless Steel Flat Bars (Patta)",
    shortDescription:
      "ASTM A240 / ASME SA240 TP 304, 304L, 316, 316L, 317L, 321, 347, 904L Industrial Polished & Hot Rolled Patta Plates and flat bars.",
    materialGroup: "Stainless Steel Patta",
    standards:
      "ASTM A240 / ASME SA240 TP 304, 304L, 316, 316L, 317L, 321, 347, 904L",
    forms: "Industrial Polished & Hot Rolled Flat Bars",
    application: "Fabrication, structural framing, architectural grills, and chemical machinery",
  },
  {
    id: 2,
    slug: "stainless-duplex-steel-patti",
    image: stainless,
    title: "Stainless & Duplex Steel Patti",
    shortDescription:
      "SS 304, 316L, Duplex UNS S31803, S32205, and Super Duplex S32750 precision sheared and slit corrosion-resistant patti strips.",
    materialGroup: "Stainless & Duplex Patti",
    standards: "SS 304, 316L, Duplex UNS S31803, S32205, Super Duplex S32750",
    forms: "Precision Slit Patti Formats",
    application: "High-Alloy Corrosive Resistant Applications, marine fittings, and chemical plants",
  },

  // ============================================
  // 2. CARBON STEEL PATTA & PATTI
  // ============================================
  {
    id: 3,
    slug: "carbon-alloy-steel-flat-bars",
    image: carbon,
    title: "Carbon Steel Flat Bars (Patta)",
    shortDescription:
      "High Tensile Carbon Steel, Mild Steel, ASTM A36, AISI 1018, 1045 Hot Rolled & Cold Drawn Heavy Structural Flat Bars.",
    materialGroup: "Carbon Steel Patta",
    standards:
      "High Tensile Carbon Steel, Mild Steel, ASTM A36, AISI 1018, 1045",
    forms: "Hot Rolled & Cold Drawn Heavy Flat Bars",
    application: "Heavy Structural Flat Bars, machinery bases, and general construction",
  },

  // ============================================
  // 3. ALLOY STEEL PATTA & PATTI
  // ============================================
  {
    id: 4,
    slug: "carbon-alloy-steel-patti",
    image: patti,
    title: "Alloy Steel & Tool Steel Patti",
    shortDescription:
      "EN8, EN9, EN19, EN24, AISI 4140 Precision Slit Steel Patti Bars for Manufacturing, Tooling & Dynamic Engineering Applications.",
    materialGroup: "Alloy Steel Patti",
    standards: "EN8, EN9, EN19, EN24, AISI 4140",
    forms: "Precision Slit Patti",
    application: "Manufacturing, Tooling & Dynamic Engineering Applications",
  },
];

export default pattapatti;
