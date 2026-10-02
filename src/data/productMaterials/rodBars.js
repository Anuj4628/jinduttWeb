import round from "../../assets/images/stock/round-bars.jpg";
import bright from "../../assets/images/stock/bright-bars.jpg";
import black from "../../assets/images/stock/black-bars.jpg";

import a105Img from "../../assets/images/stock/a105-carbon-steel-bars.jpg";
import en8Img from "../../assets/images/stock/en8-round-bars.jpg";
import en9Img from "../../assets/images/stock/en9-round-bars.jpg";
import s355j2Img from "../../assets/images/stock/s355j2-round-bars.jpg";
import en19Img from "../../assets/images/stock/en19-round-bars.jpg";
import en24Img from "../../assets/images/stock/en24-round-bars.jpg";

import monelImg from "../../assets/images/stock/monel-round-bars.jpg";
import incoloyImg from "../../assets/images/stock/incoloy-round-bars.jpg";
import hastelloyImg from "../../assets/images/stock/hastelloy-round-bars.jpg";
import titaniumImg from "../../assets/images/stock/titanium-round-bars.jpg";
import nickelAlloyImg from "../../assets/images/stock/nickel-alloy-round-bars.jpg";
import cuniRound from "../../assets/images/stock/copper-nickel-round-bars.jpg";
import alloy28Img from "../../assets/images/stock/alloy-28-round-bars.jpg";
import specialAlloyImg from "../../assets/images/stock/special-alloy-round-bars.jpg";
import highPerformanceImg from "../../assets/images/stock/high-performance-alloy-round-bars.jpg";

const rodBars = [
  // ============================================
  // 1. STAINLESS STEEL ROUND BARS (TOP PRIORITY)
  // ============================================
  {
    id: 1,
    slug: "stainless-steel-round-bars",
    image: bright,
    title:
      "Stainless Steel Round Bars Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
    shortDescription:
      "Premium Stainless Steel Round Bars manufactured in various grades for precision machining, fabrication, shaft manufacturing, fasteners, and heavy engineering applications.",
  },

  // ============================================
  // 2. CARBON STEEL ROUND BARS
  // ============================================
  {
    id: 2,
    slug: "a105-bar",
    image: a105Img,
    title: "A105 Carbon Steel Round Bars Supplier",
    shortDescription:
      "ASTM A105 high-integrity forged carbon steel round bars engineered for high-temperature and high-pressure service in valves, flanges, pumps, and piping components.",
  },
  {
    id: 3,
    slug: "en8-round-bar",
    image: en8Img,
    title: "EN8 / 080M40 Carbon Steel Round Bars",
    shortDescription:
      "EN8 unalloyed medium carbon steel round bars offering good tensile strength, machinability, and wear resistance for shafts, gears, bolts, and studs.",
  },
  {
    id: 4,
    slug: "en9-round-bar",
    image: en9Img,
    title: "EN9 / 070M55 High Carbon Steel Round Bars",
    shortDescription:
      "EN9 high carbon steel round bars engineered for enhanced surface hardness, wear resistance, and toughness in machine tool parts, cams, and shafts.",
  },
  {
    id: 5,
    slug: "s355j2-round-bar",
    image: s355j2Img,
    title: "S355J2+N Structural Carbon Steel Round Bars",
    shortDescription:
      "EN 10025-2 S355J2+N high-yield structural carbon steel round bars designed for heavy engineering, offshore structures, cranes, and structural framework.",
  },

  // ============================================
  // 3. ALLOY STEEL ROUND BARS
  // ============================================
  {
    id: 6,
    slug: "en19-round-bar",
    image: en19Img,
    title: "EN19 / 709M40 / AISI 4140 Alloy Steel Round Bars",
    shortDescription:
      "High-grade Chromium-Molybdenum alloy steel round bars offering excellent ductility, shock resistance, and wear resistance for crankshafts, connecting rods, and oil tools.",
  },
  {
    id: 7,
    slug: "en24-round-bar",
    image: en24Img,
    title: "EN24 / 817M40 / AISI 4340 High Tensile Alloy Steel Bars",
    shortDescription:
      "Nickel-Chromium-Molybdenum high-tensile alloy steel round bars providing exceptional strength, shock resistance, and through-hardening capability for heavy-duty components.",
  },

  // ============================================
  // 4. OTHER MATERIALS & EXOTIC ALLOYS (ROUND BARS)
  // ============================================
  {
    id: 8,
    slug: "duplex-super-duplex-round-bars",
    image: round,
    title:
      "Duplex & Super Duplex Steel Round Bars Supplier – S31803, S32205, S32750 & S32760",
    shortDescription:
      "High-yield Duplex and Super Duplex round bars combining high mechanical strength with exceptional resistance to pitting, stress corrosion, and seawater.",
  },
  {
    id: 9,
    slug: "inconel-round-bars",
    image: black,
    title: "Inconel Round Bars Supplier – 600, 601, 625, 690, 718, 725 & X-750",
    shortDescription:
      "Inconel Round Bars manufactured for extreme temperatures, oxidation resistance, and high-pressure service in aerospace, turbines, and nuclear reactors.",
  },
  {
    id: 10,
    slug: "monel-round-bars",
    image: monelImg,
    title: "Monel Round Bars Supplier – 400, K500 & R405",
    shortDescription:
      "Monel Round Bars engineered for exceptional resistance to seawater, acids, alkalis, and marine corrosion in pump shafts, valves, and offshore equipment.",
  },
  {
    id: 11,
    slug: "incoloy-round-bars",
    image: incoloyImg,
    title:
      "Incoloy Round Bars Supplier – 800, 800H, 800HT, 825, 925 & 330 (DS 330)",
    shortDescription:
      "Incoloy Round Bars offering superior mechanical strength and excellent resistance to oxidation and carburization at elevated temperatures.",
  },
  {
    id: 12,
    slug: "hastelloy-round-bars",
    image: hastelloyImg,
    title:
      "Hastelloy Round Bars Supplier – C22, C276, B2, B3, C2000, C59, C4 & HN",
    shortDescription:
      "Hastelloy Round Bars designed for severe chemical processing environments, acids, chloride solutions, and pollution control equipment.",
  },
  {
    id: 13,
    slug: "titanium-round-bars",
    image: titaniumImg,
    title: "Titanium Round Bars Supplier – Grade 2 & Grade 5",
    shortDescription:
      "Titanium Round Bars offering exceptional corrosion resistance, lightweight strength, and outstanding performance for aerospace, marine, and chemical industries.",
  },
  {
    id: 14,
    slug: "nickel-alloy-200-201-round-bars",
    image: nickelAlloyImg,
    title: "Nickel Alloy 200 / 201 Round Bars Stockist",
    shortDescription:
      "Nickel Alloy 200/201 Round Bars offering excellent thermal conductivity, magnetic properties, and caustic corrosion resistance for chemical processing.",
  },
  {
    id: 15,
    slug: "copper-nickel-round-bars",
    image: cuniRound,
    title: "Copper Nickel Round Bars Supplier – 70/30 & 90/10",
    shortDescription:
      "Copper Nickel Round Bars delivering outstanding resistance to seawater corrosion, erosion, and biofouling for marine shafts and hardware.",
  },
  {
    id: 16,
    slug: "alloy-28-round-bars",
    image: alloy28Img,
    title: "Alloy 28 Round Bars Supplier",
    shortDescription:
      "Alloy 28 Round Bars providing excellent resistance against pitting, crevice corrosion, and aggressive chemical environments.",
  },
  {
    id: 17,
    slug: "special-alloy-round-bars",
    image: specialAlloyImg,
    title: "Special Alloy Round Bars Supplier – SMO 254 & Alloy 20",
    shortDescription:
      "Special Alloy Round Bars manufactured for superior corrosion resistance in marine, chemical, and offshore industries.",
  },
  {
    id: 18,
    slug: "high-performance-alloy-round-bars",
    image: highPerformanceImg,
    title:
      "High-Performance Alloy Round Bars Supplier – Nimonic, Nichrome, Nitronic & Alloy",
    shortDescription:
      "High-performance alloy round bars designed for high-temperature, aerospace, power generation, and critical engineering applications.",
  },
];

export default rodBars;
