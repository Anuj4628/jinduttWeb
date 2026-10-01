import round from "../../assets/images/stock/round-bars.jpg";
import rectangle from "../../assets/images/stock/rectangle-bars.jpg";
import bright from "../../assets/images/stock/bright-bars.jpg";
import flat from "../../assets/images/stock/flat-bars.jpg";
import hex from "../../assets/images/stock/hex-bars.jpg";
import square from "../../assets/images/stock/square-bars.jpg";

import en8Img from "../../assets/images/stock/en8-round-bars.jpg";
import en9Img from "../../assets/images/stock/en9-round-bars.jpg";
import en24Img from "../../assets/images/stock/en24-round-bars.jpg";
import en19Img from "../../assets/images/stock/en19-round-bars.jpg";
import s355j2Img from "../../assets/images/stock/s355j2-round-bars.jpg";
import a105Img from "../../assets/images/stock/a105-carbon-steel-bars.jpg";

const rodBars = [
  {
    id: 1,
    slug: "titanium-round-bars",
    image: round,
    title: "Titanium Round Bars Supplier – Grade 2 & Grade 5",
    shortDescription:
      "Titanium Round Bars offering exceptional corrosion resistance, lightweight strength, and outstanding performance for aerospace, marine, and chemical industries.",
  },

  {
    id: 2,
    slug: "stainless-steel-round-bars",
    image: bright,
    title:
      "Stainless Steel Round Bars Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
    shortDescription:
      "Premium Stainless Steel Round Bars manufactured in various grades for machining, fabrication, construction, and engineering applications.",
  },

  {
    id: 3,
    slug: "high-performance-alloy-round-bars",
    image: hex,
    title:
      "High-Performance Alloy Round Bars Supplier – Nimonic, Nichrome, Nitronic & Alloy",
    shortDescription:
      "High-performance alloy round bars designed for high-temperature, aerospace, power generation, and critical engineering applications.",
  },

  {
    id: 4,
    slug: "alloy-28-round-bars",
    image: square,
    title: "Alloy 28 Round Bars Supplier",
    shortDescription:
      "Alloy 28 Round Bars providing excellent resistance against pitting, crevice corrosion, and aggressive chemical environments.",
  },

  {
    id: 5,
    slug: "special-alloy-round-bars",
    image: flat,
    title: "Special Alloy Round Bars Supplier – SMO 254 & Alloy 20",
    shortDescription:
      "Special Alloy Round Bars manufactured for superior corrosion resistance in marine, chemical, and offshore industries.",
  },

  {
    id: 6,
    slug: "nickel-alloy-200-201-round-bars",
    image: rectangle,
    title: "Nickel Alloy 200 / 201 Round Bars Stockist",
    shortDescription:
      "Nickel Alloy 200/201 Round Bars offering excellent thermal conductivity and corrosion resistance for chemical processing applications.",
  },

  {
    id: 7,
    slug: "monel-round-bars",
    image: round,
    title: "Monel Round Bars Supplier – 400, K500 & R405",
    shortDescription:
      "Monel Round Bars engineered for exceptional resistance to seawater, acids, alkalis, and marine environments.",
  },

  {
    id: 8,
    slug: "inconel-round-bars",
    image: bright,
    title: "Inconel Round Bars Supplier – 600, 601, 625, 690, 718, 725 & X-750",
    shortDescription:
      "Inconel Round Bars manufactured for extreme temperatures, oxidation resistance, and high-pressure industrial applications.",
  },

  {
    id: 9,
    slug: "incoloy-round-bars",
    image: hex,
    title:
      "Incoloy Round Bars Supplier – 800, 800H, 800HT, 825, 925 & 330 (DS 330)",
    shortDescription:
      "Incoloy Round Bars offering superior mechanical strength and excellent resistance to oxidation and carburization at elevated temperatures.",
  },

  {
    id: 10,
    slug: "hastelloy-round-bars",
    image: square,
    title:
      "Hastelloy Round Bars Supplier – C22, C276, B2, B3, C2000, C59, C4 & HN",
    shortDescription:
      "Hastelloy Round Bars providing outstanding corrosion resistance in highly aggressive chemical and industrial environments.",
  },

  {
    id: 11,
    slug: "duplex-super-duplex-round-bars",
    image: flat,
    title:
      "Duplex & Super Duplex Steel Round Bars Supplier – S31803, S32205, S32750, S32760 & S32550",
    shortDescription:
      "Duplex and Super Duplex Steel Round Bars combining high strength with exceptional corrosion resistance for offshore and marine applications.",
  },

  {
    id: 12,
    slug: "copper-nickel-round-bars",
    image: rectangle,
    title: "Copper Nickel Round Bars Supplier",
    shortDescription:
      "Copper Nickel Round Bars manufactured for marine engineering, desalination plants, condensers, and heat exchanger applications.",
  },

  {
    id: 13,
    slug: "en8-round-bar",
    image: en8Img,
    title: "EN8 Round Bar",
    shortDescription:
      "EN8 (BS 970: 080M40) is an unalloyed medium-carbon engineering steel grade offering good tensile strength, machinability, and moderate wear resistance for general mechanical and automotive components.",
    materialGroup: "Medium Carbon Engineering Steel",
    standards: "BS 970: 080M40 (formerly En8), EN 10083-2: C45 / C45E, ISO 683-1: C45",
    forms: "Round Bars, Peeled / Turned Bars, Bright Drawn Bars, Forged Rounds",
    application:
      "Shafts, axles, studs, spindles, pins, bolts, gears, and general machine engineering components",
  },

  {
    id: 14,
    slug: "en9-round-bar",
    image: en9Img,
    title: "EN9 Round Bar",
    shortDescription:
      "EN9 (BS 970: 070M55) is a high-carbon engineering steel that develops higher surface hardness and greater wear resistance than medium-carbon grades, making it ideal for components subjected to frictional contact.",
    materialGroup: "High Carbon Engineering Steel",
    standards: "BS 970: 070M55 (formerly En9), EN 10083-2: C55 / C55E, ISO 683-1: C55",
    forms: "Round Bars, Turned / Peeled Rounds, Black Rolled Bars, Forged Bars",
    application:
      "Shafts, pins, cams, cylinders, wear-resistant machine parts, gears, and general engineering components",
  },

  {
    id: 15,
    slug: "en24-round-bar",
    image: en24Img,
    title: "EN24 Round Bar",
    shortDescription:
      "EN24 (BS 970: 817M40) is a high-strength nickel-chromium-molybdenum alloy engineering steel commonly supplied in hardened and tempered conditions for critical heavy-duty components requiring high tensile strength, shock resistance, and fatigue endurance.",
    materialGroup: "High-Strength Alloy Engineering Steel",
    standards: "BS 970: 817M40 (formerly En24). Related international grades: EN 10083-3 (34CrNiMo6 / 1.6582), AISI / SAE 4340 (subject to specification requirements)",
    forms: "Hardened & Tempered (Condition T) Round Bars, Black Rolled, Bright Peeled, Forged Rounds",
    application:
      "Heavy-duty shafts, high-stress gears, axles, crankshafts, studs, transmission couplings, and high-strength machine parts",
  },

  {
    id: 16,
    slug: "en19-round-bar",
    image: en19Img,
    title: "EN19 Round Bar",
    shortDescription:
      "EN19 (BS 970: 709M40) is a versatile chromium-molybdenum alloy engineering steel known for good ductility, high fatigue resistance, and uniform through-hardening response in heavy industrial and automotive machinery.",
    materialGroup: "Chromium-Molybdenum Alloy Engineering Steel",
    standards: "BS 970: 709M40 (formerly En19). Related international grades: EN 10083-3 (42CrMo4 / 1.7225), AISI / SAE 4140 (subject to governing standard and heat-treatment)",
    forms: "Quenched & Tempered (Condition T/U) Round Bars, Black Rolled, Bright Peeled, Forged Rounds",
    application:
      "Shafts, gears, axles, spindles, high-tensile bolts, drill rods, and heavy-duty industrial engineering components",
  },

  {
    id: 17,
    slug: "s355j2-round-bar",
    image: s355j2Img,
    title: "S355J2 Round Bar",
    shortDescription:
      "S355J2 is a standard non-alloy structural steel grade delivering a nominal 355 MPa minimum yield strength with verified 27J Charpy V-notch impact toughness at -20°C, suited for welded engineering and machinery structures.",
    materialGroup: "Non-Alloy Structural Steel",
    standards: "EN 10025-2 (1.0577 / S355J2). Predecessor designation: DIN 17100 St52-3",
    forms: "Hot Rolled Round Bars, Forged Rounds, Peeled & Normalized Bars",
    application:
      "Structural components, fabricated machinery, crane frameworks, engineering structures, and general structural fabrication",
  },

  {
    id: 18,
    slug: "a105-bar",
    image: a105Img,
    title: "A105 Bar",
    shortDescription:
      "A105 Bar represents carbon steel raw material matching the A105 chemical composition, supplied in forged or rolled bar form for component machining, valve parts, and piping system fabrication as per customer specification.",
    materialGroup: "Carbon Steel Material / Forging Grade",
    standards: "Chemical composition aligned with ASTM A105 / ASME SA105. Product form, supply condition, and testing as per client ordering specification.",
    forms: "Forged / Rolled Round Bars, Rough Turned Rounds, Supply condition as per requirement",
    application:
      "Flanges, valves, high-pressure fittings, piping components, machining blanks, and general engineering stock",
  },
];

export default rodBars;

