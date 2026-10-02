import weld from "../../assets/images/stock/welded-tubes.jpg";
import carbonTubesImg from "../../assets/images/stock/carbon-steel-tubes.jpg";
import boilerTubeImg from "../../assets/images/stock/boiler-tube-pipe.jpg";
import heat from "../../assets/images/stock/heat-exchanger-tubes.jpg";
import inst from "../../assets/images/stock/instrumentation-tubes.jpg";
import seam from "../../assets/images/stock/seamless-tubes.jpg";
import special from "../../assets/images/stock/specialized-tubes.jpg";
import square from "../../assets/images/stock/square-tubes.jpg";

const tubes = [
  // ============================================
  // 1. STAINLESS STEEL TUBES (TOP PRIORITY)
  // ============================================
  {
    id: 1,
    slug: "stainless-steel-tubes",
    image: weld,
    title:
      "Stainless Steel Tubes Supplier – 304, 304L, 316, 316L, 310S, 321 & More",
    shortDescription:
      "Premium stainless steel tubes manufactured in various grades for heat exchangers, process piping, food processing, pharmaceutical, and engineering applications.",
  },

  // ============================================
  // 2. CARBON STEEL TUBES
  // ============================================
  {
    id: 2,
    slug: "carbon-steel-tubes",
    image: carbonTubesImg,
    title: "Carbon Steel Tubes Supplier – Seamless & Welded",
    shortDescription:
      "ASTM A179, A192, A210, A214 Cold Drawn Seamless & Welded Carbon Steel tubes engineered for heat exchangers, condensers, boilers, and automotive systems.",
  },

  // ============================================
  // 3. ALLOY STEEL TUBES
  // ============================================
  {
    id: 3,
    slug: "alloy-steel-tubes",
    image: boilerTubeImg,
    title: "Alloy Steel Tubes Supplier – ASTM A213 T11, T22, T91 & Boiler Grade",
    shortDescription:
      "Precision cold drawn and hot finished Alloy Steel boiler tubes and high-pressure superheater tubes engineered for power plants and refineries.",
  },

  // ============================================
  // 4. OTHER TUBING SPECIFICATIONS & ALLOYS
  // ============================================
  {
    id: 4,
    slug: "heat-exchanger-tubes",
    image: heat,
    title: "Heat Exchanger Tubes Supplier",
    shortDescription:
      "Precision engineered heat exchanger and condenser tubes in stainless steel and exotic alloys for optimal thermal transfer.",
  },
  {
    id: 5,
    slug: "instrumentation-tubes",
    image: inst,
    title: "Instrumentation Tubes Supplier",
    shortDescription:
      "High-pressure precision instrumentation tubing manufactured with strict dimensional tolerances and smooth internal bore.",
  },
  {
    id: 6,
    slug: "seamless-tubes",
    image: seam,
    title: "Seamless Precision Tubes Supplier",
    shortDescription:
      "Cold drawn seamless precision tubes engineered for high-pressure hydraulic, mechanical, and aerospace systems.",
  },
  {
    id: 7,
    slug: "special-alloy-tubes",
    image: special,
    title: "Special Alloy Tubes Supplier – SMO 254 & Alloy 20",
    shortDescription:
      "Special alloy tubes engineered for superior corrosion resistance in offshore, marine, and chemical processing industries.",
  },
  {
    id: 8,
    slug: "duplex-super-duplex-steel-tubes",
    image: square,
    title:
      "Duplex & Super Duplex Steel Tubes Supplier – S31803, S32750 & S32760",
    shortDescription:
      "Duplex and Super Duplex Steel tubes combining high mechanical strength with superior corrosion resistance for offshore and marine applications.",
  },
];

export default tubes;
