// src/data/productMaterials/forgedfitting.js
import ssForged from "../../assets/images/stock/stainless-steel-forged-fittings.jpg";
import car from "../../assets/images/stock/carbon-alloy-steel-forged-fittings.jpg";
import forgedfittingImage from "../../assets/images/productImage/forged-fittings.webp";
import hast from "../../assets/images/stock/hastelloy-forged-fittings.jpg";
import inc from "../../assets/images/stock/incoloy-forged-fittings.jpg";
import mon from "../../assets/images/stock/monel-forged-fittings.jpg";
import nic from "../../assets/images/stock/nickel-copper-alloy-forged-fittings.jpg";

const forgedfitting = [
  // ============================================
  // 1. STAINLESS STEEL FORGED FITTINGS (TOP PRIORITY)
  // ============================================
  {
    id: 1,
    slug: "stainless-duplex-steel-forged-fittings",
    image: ssForged,
    title: "Stainless Steel & Duplex Forged Fittings",
    shortDescription:
      "ASTM A182 F304, F304L, F316, F316L, F321, F347, 904L / Duplex F51, F53 Class 2000, 3000, 6000, 9000 Socket Weld & Threaded Elbows, Tees, Unions, Couplings, and Caps.",
    materialGroup: "Stainless Steel",
    standards:
      "ASTM A182 F304L, F316L, F321, F347, 904L, Duplex F51, F53, ASME B16.11",
    forms: "Socket Weld & Threaded 90°/45° Elbows, Tees, Couplings, Unions, Hex Nipples",
    application:
      "Chemical processing, pharmaceutical, marine, high-pressure piping, and critical fluid control",
  },

  // ============================================
  // 2. CARBON STEEL FORGED FITTINGS
  // ============================================
  {
    id: 2,
    slug: "carbon-alloy-steel-forged-fittings",
    image: car,
    title: "Carbon Steel Forged Fittings – ASTM A105 & A350 LF2",
    shortDescription:
      "ASTM A105 and A350 LF2 Class 3000 / 6000 / 9000 High-Pressure Socket Weld & Threaded Unions, Elbows, Tees, and Full Couplings for high-stress oil and gas transmission.",
    materialGroup: "Carbon Steel",
    standards: "ASTM A105, A350 LF2, ASME B16.11",
    forms:
      "Class 3000 / 6000 / 9000 High-Pressure Socket Weld & Threaded Unions, Elbows, Bushings",
    application:
      "High-pressure piping systems, refineries, power plants, oil & gas, and heavy engineering",
  },

  // ============================================
  // 3. ALLOY STEEL FORGED FITTINGS
  // ============================================
  {
    id: 3,
    slug: "alloy-steel-forged-fittings",
    image: forgedfittingImage,
    title: "Alloy Steel Forged Fittings – ASTM A182 F11, F22 & F91",
    shortDescription:
      "ASTM A182 F5, F9, F11, F22, F91 high-temperature forged socket weld and threaded fittings engineered for extreme pressure and thermal resistance in boiler piping.",
    materialGroup: "Alloy Steel",
    standards: "ASTM A182 F5, F9, F11, F22, F91, ASME B16.11",
    forms: "Forged High-Pressure Unions, Tees, Reducers, Socket Weld Elbows",
    application: "Power generation stations, superheater lines, and thermal refineries",
  },

  // ============================================
  // 4. OTHER MATERIALS & EXOTIC ALLOYS
  // ============================================
  {
    id: 4,
    slug: "inconel-forged-fittings",
    image: inc,
    title: "Inconel Forged Fittings",
    shortDescription:
      "Inconel 600, 625, 718, X-750 Oxidation-Resistant Half Couplings and Socket Weld Reducing Tees for Nuclear & Aerospace Engineering.",
    materialGroup: "Inconel Core",
    standards: "Inconel 600, 625, 718, X-750",
    forms: "Oxidation-Resistant Half Couplings and Socket Weld Reducing Tees",
    application:
      "Extreme temperatures, high-pressure systems, aerospace, petrochemical, and power generation",
  },
  {
    id: 5,
    slug: "incoloy-forged-fittings",
    image: inc,
    title: "Incoloy Forged Fittings",
    shortDescription:
      "Incoloy 800, 800H, 800HT, 825 Forged Swage Nipples, Street Elbows, and Hex Plugs for High-Stress Processing Lines.",
    materialGroup: "Incoloy Superalloy",
    standards: "Incoloy 800, 800H, 800HT, 825",
    forms: "Forged Swage Nipples, Street Elbows, and Hex Plugs",
    application: "Heat exchangers and process industries",
  },
  {
    id: 6,
    slug: "hastelloy-forged-fittings",
    image: hast,
    title: "Hastelloy Forged Fittings",
    shortDescription:
      "Hastelloy C276, C22, B2, B3, Alloy X Forged Crosses, Tees, and Full Couplings for Harsh Chemical Corrosive Streams.",
    materialGroup: "Hastelloy Core",
    standards: "Hastelloy C276, C22, B2, B3, Alloy X",
    forms: "Forged Crosses, Tees, and Full Couplings",
    application:
      "Highly corrosive chemicals, acids, and aggressive industrial processing environments",
  },
  {
    id: 7,
    slug: "monel-forged-fittings",
    image: mon,
    title: "Monel Forged Fittings",
    shortDescription:
      "Monel 400, Monel K500 Forged Threaded Caps, Bosses, and Reducing Inserts Built for High-Salinity Marine Piping.",
    materialGroup: "Monel Alloy",
    standards: "Monel 400, Monel K500",
    forms: "Forged Threaded Caps, Bosses, and Reducing Inserts",
    application: "Seawater, acids, alkalis, and marine environments",
  },
  {
    id: 8,
    slug: "nickel-copper-alloy-forged-fittings",
    image: nic,
    title: "Nickel Copper Alloy Forged Fittings",
    shortDescription:
      "Copper-Nickel 70/30, 90/10 Forged Lateral Tees, Weldolets, and Threaded Elbows for Offshore Marine Platforms.",
    materialGroup: "Nickel Copper",
    standards: "Copper-Nickel 70/30, 90/10",
    forms: "Forged Lateral Tees, Weldolets, and Threaded Elbows",
    application:
      "Marine engineering, offshore platforms, condensers, and chemical processing",
  },
  {
    id: 9,
    slug: "titanium-forged-fittings",
    image: hast,
    title: "Titanium Forged Fittings",
    shortDescription:
      "Titanium Grade 2 and Grade 5 forged socket weld and threaded fittings delivering high tensile strength and complete resistance to chlor-alkali and marine corrosion.",
    materialGroup: "Titanium Core",
    standards: "ASTM B381 Grade 2, Grade 5",
    forms: "Forged Elbows, Tees, Unions",
    application: "Aerospace, marine cooling, and chemical processing",
  },
];

export default forgedfitting;
