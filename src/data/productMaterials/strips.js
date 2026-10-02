// src/data/productMaterials/strips.js
import stain from "../../assets/images/stock/stainless-steel-strips.jpg";
import carbonImg from "../../assets/images/stock/Carbon-Steel-Strips.jpg";
import nik from "../../assets/images/stock/nickel-alloy-strips.jpg";

const strips = [
  // ============================================
  // 1. STAINLESS STEEL STRIPS (TOP PRIORITY)
  // ============================================
  {
    id: 1,
    slug: "stainless-steel-strips",
    image: stain,
    title: "Stainless Steel Strips",
    shortDescription:
      "ASTM A240 / A480 Gr 304, 304L, 316, 316L, 317L, 321, 347, 430, 904L, Cold-Rolled Precision Slit Coils and narrow width stainless ribbon runs.",
    materialGroup: "Stainless Steel",
    standards:
      "ASTM A240 / A480 Gr 304, 304L, 316, 316L, 317L, 321, 347, 430, 904L",
    forms: "Cold-Rolled Precision Slit Coils, Mirror and 2B Finish Strips",
    application:
      "Narrow-width slitted coils, automotive trim, precision stamped parts, and chemical equipment",
  },

  // ============================================
  // 2. CARBON STEEL STRIPS
  // ============================================
  {
    id: 2,
    slug: "duplex-precision-carbon-strips",
    image: carbonImg,
    title: "Carbon Steel Precision Strips & Shims",
    shortDescription:
      "High Carbon Spring Steel C67, C75, C80, EN42J, SAE 1070/1080 and Low Carbon deep drawing precision cold-rolled strips and shims.",
    materialGroup: "Carbon Steel",
    standards:
      "High Carbon Spring Steel C67 / C75 / EN42J, SAE 1070/1080, IS 2507",
    forms: "Hardened & Tempered Spring Strips, Annealed Cold-Rolled Shims",
    application:
      "Spring manufacturing, saw blades, clutches, automotive stampings, and precision shims",
  },

  // ============================================
  // 3. ALLOY STEEL STRIPS
  // ============================================
  {
    id: 3,
    slug: "alloy-steel-strips",
    image: carbonImg,
    title: "Alloy Steel Precision Strips",
    shortDescription:
      "Chrome-Vanadium and Silicon-Manganese alloy spring steel strips (50CrV4, 55Si7) engineered for high dynamic stress and fatigue resistance.",
    materialGroup: "Alloy Steel",
    standards: "EN 10132-4 (50CrV4, 51CrV4, 55Si7, 60SiCr7)",
    forms: "Precision Slit Strips, Continuous Coils",
    application: "Heavy-duty industrial springs, diaphragm springs, and mechanical engineering",
  },

  // ============================================
  // 4. OTHER MATERIALS & HIGH ALLOYS
  // ============================================
  {
    id: 4,
    slug: "nickel-high-alloy-strips",
    image: nik,
    title: "Nickel & High Alloy Strips",
    shortDescription:
      "Monel 400, Monel K500, Inconel 600, Inconel 625, Inconel 718, Hastelloy C276, and Carpenter Alloy 20 precision thin strips and foil.",
    materialGroup: "High Alloy Core",
    standards:
      "Monel 400, Monel K500, Inconel 600, Inconel 625, Inconel 718, Hastelloy C276, Carpenter Alloy 20",
    forms: "Precision Slit Coils, Cold-Rolled Foil Strips",
    application: "Chemical, Aerospace, Semiconductor, and Marine Industries",
  },
];

export default strips;
