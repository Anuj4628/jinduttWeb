// src/data/productMaterials/anchorChannel.js
import regular from "../../assets/images/stock/regular-angle.jpg";
import channel from "../../assets/images/stock/regular-channel.jpg";
import carbon from "../../assets/images/stock/carbon-angle-channel.jpg";

const anchorChannel = [
  // ============================================
  // 1. STAINLESS STEEL STRUCTURAL ANGLES & CHANNELS (TOP PRIORITY)
  // ============================================
  {
    id: 1,
    slug: "regular-angle",
    image: regular,
    title: "Stainless Steel Structural Angle",
    shortDescription:
      "SS 304, 304L, 316, 316L, ASTM A276 Hot-Rolled and Laser-Fused Equal & Unequal L-Shape Structural Profiles.",
    materialGroup: "Stainless Steel",
    standards: "ASTM A276 / A479 SS 304/304L, SS 316/316L",
    forms: "Hot-Rolled Equal & Unequal L-Shape Profiles",
    application:
      "Architectural framing, cleanroom supports, marine frameworks, and chemical structures",
  },
  {
    id: 2,
    slug: "regular-channel",
    image: channel,
    title: "Stainless Steel Structural Channel",
    shortDescription:
      "SS 304, 304L, 316, 316L C-Channels and U-Channels with Tapered & Parallel Flange Sections for corrosive environments.",
    materialGroup: "Stainless Steel",
    standards: "ASTM A276 / A479 SS 304, 316, EN 10088-3",
    forms: "Tapered Flange, Parallel Flange C & U Channels",
    application:
      "Corrosion-resistant structural support, wastewater plants, and industrial equipment",
  },

  // ============================================
  // 2. CARBON STEEL STRUCTURAL ANGLES & CHANNELS
  // ============================================
  {
    id: 3,
    slug: "carbon-angle-channel",
    image: carbon,
    title: "Carbon Steel Angle & Channel",
    shortDescription:
      "ASTM A36, A572 Gr 50, IS 2062 E250 / E350 High-Yield Carbon Steel Structural Angles, C-Channels, and U-Channels for building frameworks.",
    materialGroup: "Carbon Steel",
    standards: "ASTM A36, A572 Gr 50, IS 2062 E250A/B, IS 808",
    forms: "Hot-Rolled Angles, Parallel & Tapered Flange Channels",
    application: "Heavy construction, bridge infrastructure, and industrial engineering",
  },
];

export default anchorChannel;
