import ss from "../../assets/images/stock/stainless-steel-coils.jpg";
import hrCoilsImg from "../../assets/images/stock/hr-coils.jpg";
import crCoilsImg from "../../assets/images/stock/cr-coils.jpg";
import slitCoilsImg from "../../assets/images/stock/slit-coils.jpg";
import titanium from "../../assets/images/stock/titanium-coils.jpg";
import high from "../../assets/images/stock/high-performance-alloy-coils.jpg";
import alloy28Img from "../../assets/images/stock/alloy-28-coils.jpg";
import special from "../../assets/images/stock/special-alloy-coils.jpg";
import nic200 from "../../assets/images/stock/nickel-alloy-200-201-coils.jpg";
import monel from "../../assets/images/stock/monel-400-coils.jpg";
import incoloy from "../../assets/images/stock/incoloy-coils.jpg";

const coils = [
  // ============================================
  // 1. STAINLESS STEEL COILS (TOP PRIORITY)
  // ============================================
  {
    id: 1,
    slug: "stainless-steel-coils",
    image: ss,
    title:
      "Stainless Steel Coils Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
    shortDescription:
      "Premium Stainless Steel Coils manufactured in various grades, widths, and surface finishes (2B, BA, No.4, Hairline) for stamping, automotive, and industrial fabrication.",
  },

  // ============================================
  // 2. CARBON STEEL COILS
  // ============================================
  {
    id: 2,
    slug: "carbon-steel-coils",
    image: hrCoilsImg,
    title: "Carbon Steel Coils Supplier – Hot Rolled & Cold Rolled",
    shortDescription:
      "ASTM A1011, IS 2062, SAE 1008/1010 Hot Rolled & Cold Rolled Carbon Steel coils manufactured for stamping, structural tube forming, and heavy industrial production.",
  },

  // ============================================
  // 3. ALLOY STEEL COILS
  // ============================================
  {
    id: 3,
    slug: "alloy-steel-coils",
    image: crCoilsImg,
    title: "Alloy Steel Coils Supplier – High Tensile & Spring Steel",
    shortDescription:
      "High-performance alloy steel and spring steel coils engineered for automotive components, precision stamping, tooling, and high-fatigue industrial service.",
  },

  // ============================================
  // 4. OTHER MATERIALS & EXOTIC ALLOYS
  // ============================================
  {
    id: 4,
    slug: "duplex-super-duplex-steel-coils",
    image: slitCoilsImg,
    title:
      "Duplex & Super Duplex Steel Coils Supplier – S31803, S32205, S32750 & S32760",
    shortDescription:
      "High-yield Duplex and Super Duplex Steel Coils providing superior tensile strength and outstanding resistance to chloride-induced stress corrosion cracking.",
  },
  {
    id: 5,
    slug: "inconel-coils",
    image: special,
    title: "Inconel Coils Supplier – 600, 601, 625, 690, 718, 725 & X-750",
    shortDescription:
      "Nickel-Chromium Inconel Coils manufactured for high-temperature oxidation resistance, thermal stability, and mechanical strength in extreme environments.",
  },
  {
    id: 6,
    slug: "incoloy-coils",
    image: incoloy,
    title: "Incoloy Coils Supplier – 800, 800H, 800HT, 825, 925 & DS 330",
    shortDescription:
      "Incoloy Coils engineered for exceptional resistance to high-temperature carburization, oxidation, and aggressive chemical processing environments.",
  },
  {
    id: 7,
    slug: "hastelloy-coils",
    image: high,
    title: "Hastelloy Coils Supplier – C276, C22, B2, B3, C2000, C59, C4 & HN",
    shortDescription:
      "Superalloy Hastelloy Coils designed for maximum corrosion resistance in severe chemical, petrochemical, and flue gas desulfurization systems.",
  },
  {
    id: 8,
    slug: "monel-400-coils",
    image: monel,
    title: "Monel 400 Coils Supplier",
    shortDescription:
      "Monel 400 Coils offering outstanding resistance to marine seawater, hydrofluoric acid, sulfuric acid, and alkaline solutions.",
  },
  {
    id: 9,
    slug: "nickel-alloy-200-201-coils",
    image: nic200,
    title: "Nickel Alloy 200 / 201 Coils Supplier",
    shortDescription:
      "Commercially pure Nickel Alloy 200 and 201 Coils delivering excellent thermal conductivity, magnetostrictive properties, and resistance to dry fluorine and caustic alkalis.",
  },
  {
    id: 10,
    slug: "titanium-coils",
    image: titanium,
    title: "Titanium Coils Supplier – Grade 2 & Grade 5",
    shortDescription:
      "High-purity Grade 2 and Grade 5 Titanium Coils featuring superior strength-to-weight ratio, biocompatibility, and corrosion resistance for aerospace and marine engineering.",
  },
  {
    id: 11,
    slug: "alloy-28-coils",
    image: alloy28Img,
    title: "Alloy 28 Coils Supplier",
    shortDescription:
      "Alloy 28 Coils engineered specifically for phosphoric acid production, sour oil and gas wells, and severe chemical process piping.",
  },
  {
    id: 12,
    slug: "copper-nickel-coils",
    image: nic200,
    title: "Copper Nickel Coils Supplier – 70/30 & 90/10",
    shortDescription:
      "Copper Nickel Coils delivering outstanding seawater corrosion resistance and anti-biofouling performance for marine condensers, heat exchangers, and coastal plants.",
  },
];

export default coils;
