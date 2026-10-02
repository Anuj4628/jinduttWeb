import stain from "../../assets/images/stock/stainless-duplex-steel-valves.jpg";
import carbonValvesImg from "../../assets/images/stock/carbon-steel-valves.jpg";
import alloyValvesImg from "../../assets/images/stock/industrial-valves.jpg";
import ssBallValves from "../../assets/images/stock/ss-ball-valves.jpg";

const valves = [
  // ============================================
  // 1. STAINLESS STEEL VALVES (TOP PRIORITY)
  // ============================================
  {
    id: 1,
    slug: "stainless-duplex-steel-valves",
    image: stain,
    title: "Stainless Steel & Duplex Steel Valves",
    shortDescription:
      "SS 304, 304L, 316, 316L, 321, 904L, and Duplex 2205 Gate, Globe, Ball, Check, and Butterfly Valves designed for corrosive chemical, petrochemical, and pharmaceutical flow systems.",
    materialGroup: "Stainless Steel",
    standards: "ASTM A351 CF8, CF8M, CF3, CF3M / ASME B16.34, API 600, API 6D",
    forms: "Gate, Globe, Ball, Check, Butterfly, and Needle Valves",
    application: "Chemical plants, petrochemical refineries, food processing, and marine utilities",
  },

  // ============================================
  // 2. CARBON STEEL VALVES
  // ============================================
  {
    id: 2,
    slug: "carbon-steel-valves",
    image: carbonValvesImg,
    title: "Carbon Steel Industrial Valves – ASTM A216 WCB & A105",
    shortDescription:
      "Heavy-duty Cast Carbon Steel ASTM A216 Gr. WCB and Forged ASTM A105 Gate, Globe, Swing Check, and Trunnion Ball Valves engineered for high-pressure oil, gas, steam, and industrial pipelines.",
    materialGroup: "Carbon Steel",
    standards: "ASTM A216 WCB, ASTM A105, API 600, API 6D, ASME B16.34",
    forms: "Flanged Gate Valves, Globe Valves, Swing Check Valves, Floating Ball Valves",
    application: "Oil and gas pipelines, refineries, steam distribution, power generation, and utility water lines",
  },

  // ============================================
  // 3. ALLOY STEEL VALVES
  // ============================================
  {
    id: 3,
    slug: "alloy-steel-valves",
    image: alloyValvesImg,
    title: "Alloy Steel Industrial Valves – ASTM A217 WC6, WC9 & C12A",
    shortDescription:
      "High-temperature and high-pressure Chrome-Moly alloy steel gate, globe, and check valves designed for supercritical thermal power generation, superheated steam, and boiler feed systems.",
    materialGroup: "Alloy Steel",
    standards: "ASTM A217 WC6, WC9, C5, C12A, ASTM A182 F11, F22",
    forms: "High-Pressure Butt Weld & Flanged Gate, Globe, and Non-Return Valves",
    application: "Supercritical thermal power plants, superheater bypass, and high-temperature petrochemical processing",
  },

  // ============================================
  // 4. SPECIALTY & EXOTIC INDUSTRIAL VALVES
  // ============================================
  {
    id: 4,
    slug: "industrial-valves",
    image: ssBallValves,
    title: "Sanitary & Specialty Alloy Industrial Valves",
    shortDescription:
      "Monel, Inconel, Hastelloy, and sanitary multi-port ball valves, high-purity diaphragm valves, and pneumatic butterfly valves for mission-critical flow control.",
    materialGroup: "Specialty Alloys",
    standards: "Monel, Inconel, Hastelloy, SMS, DIN, 3A Sanitary",
    forms: "Multi-Port Ball Valves, Diaphragm Valves, Cryogenic Valves",
    application: "Dairy, pharmaceutical, high-acid chemical streams, and cryogenic installations",
  },
];

export default valves;
