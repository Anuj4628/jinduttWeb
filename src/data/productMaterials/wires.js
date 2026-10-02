import coil from "../../assets/images/stock/coil-wire.jpg";
import welding from "../../assets/images/stock/welding-wire.jpg";
import wireBobbin from "../../assets/images/stock/wire-bobbin.jpg";
import bright from "../../assets/images/stock/bright-wire.jpg";
import spool from "../../assets/images/stock/spool-wire.jpg";
import filler from "../../assets/images/stock/filler-wire.jpg";
import coldHeading from "../../assets/images/stock/cold-heading-wire.jpg";
import wireRope from "../../assets/images/stock/wire-rope.jpg";

const wires = [
  // ============================================
  // 1. STAINLESS STEEL WIRES (TOP PRIORITY)
  // ============================================
  {
    id: 1,
    slug: "stainless-steel-wires",
    image: coil,
    title:
      "Stainless Steel Wires Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
    shortDescription:
      "High-quality Stainless Steel Wires manufactured in various grades for TIG/MIG welding, spring manufacturing, fasteners, braided hose reinforcement, and industrial weaving.",
  },

  // ============================================
  // 2. CARBON STEEL WIRES
  // ============================================
  {
    id: 2,
    slug: "carbon-steel-wires",
    image: welding,
    title: "Carbon Steel & Mild Steel Wires Supplier – Welding & Spring",
    shortDescription:
      "Premium Carbon Steel and Mild Steel wires engineered to AWS A5.18 ER70S-6, EN ISO 14341, and IS 280 for welding, spring coiling, galvanized fencing, and industrial fabrication.",
  },

  // ============================================
  // 3. ALLOY STEEL WIRES
  // ============================================
  {
    id: 3,
    slug: "alloy-steel-wires",
    image: wireBobbin,
    title: "Alloy Steel Wires Supplier – Chrome-Moly & High Tensile",
    shortDescription:
      "Chrome-Moly alloy steel filler and spring wires (ER80S-B2, ER90S-B3) manufactured for high-temperature boilers, pressure vessels, and high-stress mechanical components.",
  },

  // ============================================
  // 4. OTHER MATERIALS & EXOTIC ALLOYS
  // ============================================
  {
    id: 4,
    slug: "duplex-super-duplex-steel-wires",
    image: filler,
    title:
      "Duplex & Super Duplex Steel Wires Supplier – S31803, S32205, S32750 & S32760",
    shortDescription:
      "High-strength Duplex (ER2209) and Super Duplex (ER2594) wires combining high tensile strength with exceptional resistance to pitting, stress corrosion, and seawater.",
  },
  {
    id: 5,
    slug: "inconel-wires",
    image: bright,
    title: "Inconel Wires Supplier – 600, 601, 625, 690, 718, 725 & X-750",
    shortDescription:
      "Premium Inconel Wires (ERNiCrMo-3, ERNiCr-3) engineered for extreme high-temperature oxidation resistance, cryogenic durability, and severe industrial service.",
  },
  {
    id: 6,
    slug: "monel-wires",
    image: coldHeading,
    title: "Monel Wires Supplier – 400, K500 & R405",
    shortDescription:
      "Monel Wires (ERNiCu-7) offering outstanding resistance to seawater, hydrofluoric acid, sulfuric acid, and alkaline solutions for marine and chemical plants.",
  },
  {
    id: 7,
    slug: "hastelloy-wires",
    image: spool,
    title:
      "Hastelloy Wires Supplier – C22, C276, B2, B3, C2000, C59, C4 & HN",
    shortDescription:
      "Hastelloy Wires (ERNiCrMo-4) designed to withstand highly aggressive chemical acids, wet chlorine, and harsh industrial processing media.",
  },
  {
    id: 8,
    slug: "incoloy-wires",
    image: wireBobbin,
    title:
      "Incoloy Wires Supplier – 800, 800H, 800HT, 825, 925 & 330 (DS 330)",
    shortDescription:
      "Incoloy Wires manufactured for superior mechanical strength, resistance to carburization, and high-temperature furnace applications.",
  },
  {
    id: 9,
    slug: "titanium-wires",
    image: bright,
    title: "Titanium Wires Supplier – Grade 2 & Grade 5",
    shortDescription:
      "Premium Titanium Wires offering exceptional corrosion resistance, lightweight strength, and superior biocompatibility for aerospace, marine, and chemical industries.",
  },
  {
    id: 10,
    slug: "nickel-alloy-200-201-wires",
    image: wireRope,
    title: "Nickel Alloy 200 / 201 Wires Supplier",
    shortDescription:
      "Commercially pure Nickel Alloy 200/201 Wires providing excellent thermal and electrical conductivity, magnetostriction, and corrosion resistance.",
  },
  {
    id: 11,
    slug: "alloy-28-wires",
    image: filler,
    title: "Alloy 28 Wires Supplier",
    shortDescription:
      "Alloy 28 Wires offering excellent resistance to pitting, crevice corrosion, and aggressive phosphoric and sulfuric chemical environments.",
  },
  {
    id: 12,
    slug: "copper-nickel-wires",
    image: wireRope,
    title: "Copper Nickel Wires Supplier – 70/30 & 90/10",
    shortDescription:
      "Copper Nickel Wires offering excellent seawater corrosion resistance for marine engineering, heat exchangers, condensers, and desalination plants.",
  },
];

export default wires;
