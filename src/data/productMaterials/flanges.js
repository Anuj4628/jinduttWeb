// src/data/productMaterials/flanges.js

import ssFlanges from "../../assets/images/stock/stainless-steel-flanges.jpg";
import carbon from "../../assets/images/stock/carbon-steel-flanges.jpg";
import blindFlange from "../../assets/images/stock/blind-flanges.jpg";
import duplex from "../../assets/images/stock/steel-flanges-types.jpg";
import hast from "../../assets/images/stock/hastelloy-alloy-flanges.jpg";
import incol from "../../assets/images/stock/incoloy-800-flanges.jpg";
import inco from "../../assets/images/stock/inconel-600-flange.jpg";
import slipOn from "../../assets/images/stock/slip-on-flanges.jpg";
import nick from "../../assets/images/stock/copper-nickel-flange-500x500.jpg";
import plateFlange from "../../assets/images/stock/plate-flanges.jpg";

const flanges = [
  {
    id: 1,
    slug: "stainless-steel-flanges",
    image: ssFlanges,
    title: "Stainless Steel Flanges Supplier – 304, 304L, 316, 316L, 321, 310S & 904L",
    shortDescription:
      "ASTM A182 F304, F304L, F316, F316L, F321, F310S, F904L precision machined Weld Neck, Slip-On, Blind, Socket Weld, and Lap Joint Flanges.",
    materialGroup: "Stainless Steel",
    standards: "ASTM A182 F304, F304L, F316, F316L, F321, F310S, F904L",
    forms: "Weld Neck, Slip-On, Blind, Socket Weld, Lap Joint, Threaded",
    application: "Chemical, petrochemical, food processing, and high-pressure industrial piping",
  },
  {
    id: 2,
    slug: "carbon-steel-flanges",
    image: carbon,
    title: "Carbon Steel Flanges Supplier",
    shortDescription:
      "ASTM A105, A350 LF2, A694 F52, F60, F65, F70 High-Yield Raised Face Slip-On & Weld Neck Flange Runs.",
    materialGroup: "Carbon Steel",
    standards: "ASTM A105, A350 LF2, A694 F52, F60, F65, F70",
    forms: "Raised Face, Slip-On, Weld Neck",
    application: "High-Yield Flange Runs, Oil & Gas Transmission, and Power Generation",
  },
  {
    id: 3,
    slug: "alloy-steel-flanges",
    image: blindFlange,
    title: "Alloy Steel Flanges Supplier – ASTM A182 F5, F9, F11, F22 & F91",
    shortDescription:
      "ASTM A182 F5, F9, F11, F22, F91 high-temperature and high-pressure forged alloy steel flanges for steam, power plants, and thermal piping.",
    materialGroup: "Alloy Steel",
    standards: "ASTM A182 F5, F9, F11, F12, F22, F91",
    forms: "Weld Neck, Blind, Slip-On, Socket Weld",
    application: "Thermal power stations, high-temperature refineries, and boiler pipelines",
  },
  {
    id: 4,
    slug: "duplex-steel-flanges",
    image: duplex,
    title: "Duplex Steel Flanges Supplier",
    shortDescription:
      "ASTM A182 F51, F53, F60, UNS S31803, S32205, S32750, S32760 High-Strength Anti-Pitting Blind & Socket Weld Interfaces.",
    materialGroup: "Duplex & Super Duplex",
    standards: "ASTM A182 F51, F53, F60, UNS S31803, S32205, S32750, S32760",
    forms: "Blind, Socket Weld",
    application: "High-Strength Anti-Pitting Interfaces",
  },
  {
    id: 5,
    slug: "inconel-flanges",
    image: inco,
    title: "Inconel Flanges Supplier – 600, 601, 625, 718, X-750 & More",
    shortDescription:
      "Inconel 600, 625, 718, X-750 Threaded & Ring Type Joint (RTJ) Flanges for Intense Cryogenic & Thermal Manifolds.",
    materialGroup: "Inconel Core",
    standards: "Inconel 600, 625, 718, X-750",
    forms: "Threaded, Ring Type Joint (RTJ)",
    application: "Intense Cryogenic & Thermal Manifolds",
  },
  {
    id: 6,
    slug: "incoloy-flanges",
    image: incol,
    title: "Incoloy Flanges Supplier – 800, 800H, 825, 925 & More",
    shortDescription:
      "Incoloy 800, 800H, 800HT, 825, ASTM A182 Flat Faced Companion Flanges Built for Carburization Protection.",
    materialGroup: "Incoloy Superalloy",
    standards: "Incoloy 800, 800H, 800HT, 825, ASTM A182",
    forms: "Flat Faced Companion Flanges",
    application: "Carburization Protection",
  },
  {
    id: 7,
    slug: "hastelloy-flanges",
    image: hast,
    title: "Hastelloy Flanges Supplier – C22, C276, B2, B3 & More",
    shortDescription:
      "Hastelloy C276, C22, B2, B3, Alloy X Custom Orifice & Spectacle Blind Flanges for Sour Gas Processing Utilities.",
    materialGroup: "Hastelloy Core",
    standards: "Hastelloy C276, C22, B2, B3, Alloy X",
    forms: "Custom Orifice, Spectacle Blind",
    application: "Sour Gas Processing Utilities",
  },
  {
    id: 8,
    slug: "monel-flanges",
    image: slipOn,
    title: "Monel Flanges Supplier – Monel 400 & Monel K500",
    shortDescription:
      "Monel 400, Monel K500 Long Weld Neck and Tongue & Groove Flange Configurations Built for Marine Petrochemical Feeds.",
    materialGroup: "Monel Alloy",
    standards: "Monel 400, Monel K500",
    forms: "Long Weld Neck, Tongue & Groove",
    application: "Marine Petrochemical Feeds",
  },
  {
    id: 9,
    slug: "nickel-copper-alloy-flanges",
    image: nick,
    title: "Nickel Copper Alloy Flanges Supplier",
    shortDescription:
      "Copper-Nickel 70/30 (C71500), 90/10 (C70600) Customized Reducing Lap Joint Flanges for Saltwater Piping Frameworks.",
    materialGroup: "Nickel Copper",
    standards: "Copper-Nickel 70/30 (C71500), 90/10 (C70600)",
    forms: "Customized Reducing Lap Joint",
    application: "Saltwater Piping Frameworks",
  },
  {
    id: 10,
    slug: "titanium-flanges",
    image: plateFlange,
    title: "Titanium Flanges Supplier – Grade 2 & Grade 5",
    shortDescription:
      "Titanium Grade 2 and Grade 5 flanges engineered for superior strength-to-weight ratio and outstanding resistance in seawater and chlor-alkali systems.",
    materialGroup: "Titanium",
    standards: "ASTM B381 Grade 2, Grade 5",
    forms: "Slip-On, Blind, Weld Neck",
    application: "Desalination, offshore oil rigs, chemical processing, and aerospace systems",
  },
];

export default flanges;
