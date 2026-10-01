import msErwImg from "../../assets/images/stock/ms-erw-pipes.png";
import carbonPipesImg from "../../assets/images/stock/carbon-steel-pipes.png";
import alloySteelPipesImg from "../../assets/images/stock/alloy-steel-p1-p22-pipes.jpg";
import boilerTubeImg from "../../assets/images/stock/boiler-tube-pipe.jpg";

// Stainless Steel distinct images
import ss304Img from "../../assets/images/stock/stainless-steel-304-pipes.jpg";
import ss310Img from "../../assets/images/stock/stainless-steel-310s-pipes.jpg";
import ss316Img from "../../assets/images/stock/stainless-steel-316-316l-pipes.jpg";
import ss321Img from "../../assets/images/stock/stainless-steel-321-pipes.jpg";

// Other unique alloy images (no repeats)
import dup from "../../assets/images/stock/duplex-super-duplex-pipes.jpg";
import high from "../../assets/images/stock/high-performance-alloy-pipes.jpg";
import tita from "../../assets/images/stock/titanium-pipes.jpg";
import ally20 from "../../assets/images/stock/alloy-20-pipes.jpg";
import smo from "../../assets/images/stock/smo-254-pipes.jpg";
import nic200 from "../../assets/images/stock/nickel-alloy-200-201-pipes.jpg";
import nic from "../../assets/images/stock/nickel-alloy-pipes.jpg";
import mon400 from "../../assets/images/stock/monel-400-pipes.jpg";
import cop from "../../assets/images/stock/copper-nickel-pipes.jpg";

const pipes = [
  // 1st: MSERW PIPE
  {
    id: 1,
    slug: "ms-erw-pipes",
    image: msErwImg,
    title: "MS ERW Pipes Supplier",
    shortDescription:
      "High-grade Mild Steel ERW (Electric Resistance Welded) pipes manufactured for water lines, structural fabrication, gas conveyance, and industrial piping.",
  },

  // 2nd: Carbon pipes
  {
    id: 2,
    slug: "carbon-pipes",
    image: carbonPipesImg,
    title: "Carbon Pipes Supplier – Seamless & Welded",
    shortDescription:
      "Heavy-duty Carbon Steel pipes engineered to ASTM A106, A53, and API 5L specifications for high-pressure oil, gas, refinery, and steam applications.",
  },

  // 3rd: alloy steel pipe P1 P22 grade
  {
    id: 3,
    slug: "alloy-steel-p1-p22-pipes",
    image: alloySteelPipesImg,
    title: "Alloy Steel Pipes Supplier – Grade P1 to P22",
    shortDescription:
      "Chrome-moly Alloy Steel pipes manufactured in ASTM A335 Grade P1, P5, P9, P11, P22, and P91 for high-temperature and high-pressure boiler service.",
  },

  // 4th: BOiler tube pipe
  {
    id: 4,
    slug: "boiler-tube-pipe",
    image: boilerTubeImg,
    title: "Boiler Tube Pipe Supplier – High Pressure & Heat Exchanger",
    shortDescription:
      "Precision cold drawn and hot finished Boiler tubes and pipes engineered for heat exchangers, economizers, superheaters, and power plants.",
  },

  // ============================================
  // STAINLESS STEEL PIPES (304, 310, 316, 321 - SEPARATE WITH DIFFERENT IMAGES)
  // ============================================
  {
    id: 5,
    slug: "stainless-steel-304-304l-pipes",
    image: ss304Img,
    title: "Stainless Steel 304 / 304L Pipes Supplier",
    shortDescription:
      "High-quality Stainless Steel 304 and 304L pipes offering excellent corrosion resistance, formability, and weldability.",
  },
  {
    id: 6,
    slug: "stainless-steel-310s-pipes",
    image: ss310Img,
    title: "Stainless Steel 310 / 310S Pipes Supplier",
    shortDescription:
      "Heat-resistant Stainless Steel 310S pipes designed for furnace, kiln, and extreme high-temperature industrial applications.",
  },
  {
    id: 7,
    slug: "stainless-steel-316-316l-pipes",
    image: ss316Img,
    title: "Stainless Steel 316 / 316L Pipes Supplier",
    shortDescription:
      "Premium Stainless Steel 316 and 316L pipes offering superior corrosion and pitting resistance for food, chemical, and marine applications.",
  },
  {
    id: 8,
    slug: "stainless-steel-321-pipes",
    image: ss321Img,
    title: "Stainless Steel 321 Pipes Supplier",
    shortDescription:
      "Titanium-stabilized Stainless Steel 321 pipes suitable for high-temperature service and intermittent thermal cycles.",
  },

  // ============================================
  // DISTINCT SPECIALTY ALLOY PIPES (UNIQUE IMAGES ONLY)
  // ============================================
  {
    id: 9,
    slug: "duplex-super-duplex-pipes",
    image: dup,
    title: "Duplex & Super Duplex Steel Pipes Supplier",
    shortDescription:
      "Premium Duplex and Super Duplex steel pipes for offshore, oil & gas, and chemical industries.",
  },
  {
    id: 10,
    slug: "high-performance-alloy-pipes",
    image: high,
    title:
      "High-Performance Alloy Pipes Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
    shortDescription:
      "High-performance alloy pipes engineered for extreme temperatures, aerospace, petrochemical, and critical industrial applications.",
  },
  {
    id: 11,
    slug: "titanium-pipes",
    image: tita,
    title: "Titanium Pipes Supplier – Grade 2 & Grade 5",
    shortDescription:
      "Lightweight titanium pipes with exceptional corrosion resistance for marine, aerospace, and chemical processing industries.",
  },
  {
    id: 12,
    slug: "alloy-20-pipes",
    image: ally20,
    title: "Alloy 20 Pipes Supplier",
    shortDescription:
      "Alloy 20 pipes offering outstanding resistance to sulfuric acid and chemical processing environments.",
  },
  {
    id: 13,
    slug: "smo-254-pipes",
    image: smo,
    title: "SMO 254 Pipes Supplier",
    shortDescription:
      "SMO 254 pipes providing superior resistance to chloride attack, seawater, and offshore environments.",
  },
  {
    id: 14,
    slug: "nickel-alloy-200-201-pipes",
    image: nic200,
    title: "Nickel Alloy 200 / 201 Pipes Supplier",
    shortDescription:
      "Nickel Alloy 200 and 201 pipes with excellent corrosion resistance and high thermal conductivity.",
  },
  {
    id: 15,
    slug: "nickel-alloy-pipes",
    image: nic,
    title: "Nickel Alloy Pipes Supplier",
    shortDescription:
      "Premium nickel alloy pipes suitable for chemical processing, marine, and power generation industries.",
  },
  {
    id: 16,
    slug: "monel-400-pipes",
    image: mon400,
    title: "Monel 400 Pipes Supplier",
    shortDescription:
      "Monel 400 pipes providing outstanding resistance to seawater, acids, and alkaline environments.",
  },
  {
    id: 17,
    slug: "copper-nickel-pipes",
    image: cop,
    title: "Copper Nickel Pipes Supplier",
    shortDescription:
      "Premium Copper Nickel pipes for marine engineering, shipbuilding, and heat exchanger applications.",
  },
];

export default pipes;
