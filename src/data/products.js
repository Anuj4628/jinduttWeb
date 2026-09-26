import {
  Settings,
  GaugeCircle,
  ScrollText,
  Circle,
  Cable,
  RectangleHorizontal,
  AlignHorizontalSpaceAround,
  ShieldCheck,
  Grid2X2,
  Bolt,
  Square,
  GitBranch,
  Nut,
  Disc3,
  FlaskConical,
  Waves,
  Layers,
  LayoutGrid,
  Cylinder,
  Wrench,
  Columns3,
  CircleDot,
  Milk,
  Network,
} from "lucide-react";

import flangesImg from "../assets/images/productImage/Flanges.webp";
import valvesImg from "../assets/images/productImage/valves.webp";
import coilsImg from "../assets/images/productImage/coil.webp";
import roundBarsImg from "../assets/images/productImage/rod.webp";
import wiresImg from "../assets/images/productImage/wires.webp";
import pattaPattiImg from "../assets/images/productImage/patta-patti.webp";
import stripsImg from "../assets/images/productImage/strips.webp";
import dairyPharmaValvesImg from "../assets/images/productImage/dairy-pharma-valves.webp";
import perforatedSheetImg from "../assets/images/productImage/perforated-sheet.webp";
import anchorFastenerImg from "../assets/images/productImage/anchor-fastener.webp";
import pipesImg from "../assets/images/productImage/steel-pipes.webp";
import sheetsImg from "../assets/images/productImage/sheets.webp";
import buttweldImg from "../assets/images/productImage/buttweld.webp";
import fastenersImg from "../assets/images/productImage/fastener.webp";
import ringsImg from "../assets/images/productImage/rings.webp";
import pharmaFittingsImg from "../assets/images/productImage/pharma-fittings.webp";
import hosePipeImg from "../assets/images/productImage/hose-pipe.webp";

import platesImg from "../assets/images/productImage/plates.webp";
import tubesImg from "../assets/images/productImage/tubes.webp";
import forgedFittingsImg from "../assets/images/productImage/forged-fittings.webp";
import angleChannelsImg from "../assets/images/productImage/angle-channels.webp";
import circlesImg from "../assets/images/productImage/circles.webp";
import dairyFittingsImg from "../assets/images/productImage/dairy-fittings.webp";
import wireMeshImg from "../assets/images/productImage/wire-mesh.webp";

const products = [
  {
    id: 1,
    name: "Flanges",
    slug: "flanges",
    image: flangesImg,
    icon: Settings,
    category: "Pipe Fittings",
    shortDescription:
      "Premium quality industrial flanges manufactured in Stainless Steel, Carbon Steel, Duplex and Alloy Steel.",
  },
  {
    id: 2,
    name: "Valves",
    slug: "valves",
    image: valvesImg,
    icon: GaugeCircle,
    category: "Industrial Valves",
    shortDescription:
      "Reliable industrial valves designed for high pressure and critical flow control applications.",
  },
  {
    id: 3,
    name: "Coils",
    slug: "coils",
    image: coilsImg,
    icon: ScrollText,
    category: "Flat Products",
    shortDescription:
      "High-quality stainless steel coils available in various thicknesses and finishes.",
  },
  {
    id: 4,
    name: "Rods & Bars",
    slug: "round-bars",
    image: roundBarsImg,
    icon: Circle,
    category: "Bars & Rods",
    shortDescription:
      "Precision engineered stainless steel and alloy round bars.",
  },
  {
    id: 5,
    name: "Wires",
    slug: "wires",
    image: wiresImg,
    icon: Cable,
    category: "Wire Products",
    shortDescription: "Industrial wires suitable for fabrication and welding.",
  },
  {
    id: 6,
    name: "Patta Patti",
    slug: "patta-patti",
    image: pattaPattiImg,
    icon: RectangleHorizontal,
    category: "Flat Products",
    shortDescription:
      "Premium stainless steel patta patti in multiple dimensions.",
  },
  {
    id: 7,
    name: "Strips",
    slug: "strips",
    image: stripsImg,
    icon: AlignHorizontalSpaceAround,
    category: "Flat Products",
    shortDescription: "Durable stainless steel strips for industrial use.",
  },
  {
    id: 8,
    name: "Dairy & Pharma Valves",
    slug: "dairy-pharma-valves",
    image: dairyPharmaValvesImg,
    icon: ShieldCheck,
    category: "Sanitary Valves",
    shortDescription:
      "Specialized valves for dairy and pharmaceutical industries.",
  },
  {
    id: 9,
    name: "Perforated Sheet",
    slug: "perforated-sheet",
    image: perforatedSheetImg,
    icon: Grid2X2,
    category: "Sheets",
    shortDescription:
      "High precision perforated sheets in various hole patterns.",
  },
  {
    id: 10,
    name: "Anchor Fastener",
    slug: "anchor-fastener",
    image: anchorFastenerImg,
    icon: Bolt,
    category: "Fasteners",
    shortDescription:
      "Heavy-duty anchor fasteners for industrial installations.",
  },
  {
    id: 11,
    name: "Pipes",
    slug: "pipes",
    image: pipesImg,
    icon: Cylinder,
    category: "Pipes & Tubes",
    shortDescription: "Seamless and welded pipes available in multiple grades.",
  },
  {
    id: 12,
    name: "Sheets",
    slug: "sheets",
    image: sheetsImg,
    icon: Square,
    category: "Flat Products",
    shortDescription: "High-performance stainless steel sheets.",
  },
  {
    id: 13,
    name: "Buttweld Fittings",
    slug: "buttweld-fittings",
    image: buttweldImg,
    icon: GitBranch,
    category: "Pipe Fittings",
    shortDescription:
      "Premium buttweld fittings manufactured to ASTM standards.",
  },
  {
    id: 14,
    name: "Fasteners",
    slug: "fasteners",
    image: fastenersImg,
    icon: Nut,
    category: "Industrial Fasteners",
    shortDescription: "Complete range of industrial fasteners.",
  },
  {
    id: 15,
    name: "Rings",
    slug: "rings",
    image: ringsImg,
    icon: Disc3,
    category: "Forged Products",
    shortDescription: "Precision forged rings.",
  },
  {
    id: 16,
    name: "Pharma Fittings",
    slug: "pharma-fittings",
    image: pharmaFittingsImg,
    icon: FlaskConical,
    category: "Sanitary Fittings",
    shortDescription: "Hygienic pharmaceutical fittings.",
  },
  {
    id: 17,
    name: "Hose Pipe",
    slug: "hose-pipe",
    image: hosePipeImg,
    icon: Waves,
    category: "Industrial Hose",
    shortDescription: "Industrial hose pipes for chemical transfer.",
  },

  {
    id: 19,
    name: "Plates",
    slug: "plates",
    image: platesImg,
    icon: LayoutGrid,
    category: "Flat Products",
    shortDescription: "Industrial plates in stainless steel and alloy steel.",
  },
  {
    id: 20,
    name: "Tubes",
    slug: "tubes",
    image: tubesImg,
    icon: Cylinder,
    category: "Pipes & Tubes",
    shortDescription: "Seamless and welded tubes.",
  },
  {
    id: 21,
    name: "Forged Fittings",
    slug: "forged-fittings",
    image: forgedFittingsImg,
    icon: Wrench,
    category: "Forged Products",
    shortDescription: "High-pressure forged fittings.",
  },
  {
    id: 22,
    name: "Angle & Channels",
    slug: "angle-channels",
    image: angleChannelsImg,
    icon: Columns3,
    category: "Structural Steel",
    shortDescription: "Structural angles and channels.",
  },
  {
    id: 23,
    name: "Circles",
    slug: "circles",
    image: circlesImg,
    icon: CircleDot,
    category: "Flat Products",
    shortDescription: "High precision stainless steel circles.",
  },
  {
    id: 24,
    name: "Dairy Fittings",
    slug: "dairy-fittings",
    image: dairyFittingsImg,
    icon: Milk,
    category: "Sanitary Fittings",
    shortDescription: "Food-grade dairy fittings.",
  },
  {
    id: 25,
    name: "Wire Mesh",
    slug: "wire-mesh",
    image: wireMeshImg,
    icon: Network,
    category: "Wire Products",
    shortDescription: "Industrial wire mesh for filtration and screening.",
  },
];

// Product Mega-Menu 2-Section Structure (12 entries each)
export const productMenuSections = {
  section1: [
    {
      name: "Pipes & Tubes",
      slug: "pipes-tubes",
      icon: Cylinder,
      badge: "Pipes + Tubes",
      description: "Seamless & welded pipes and precision tubes",
    },
    {
      name: "Sheets & Plates",
      slug: "sheets-plates",
      icon: Square,
      badge: "Sheets + Plates",
      description: "Cold & hot rolled sheets and heavy industrial plates",
    },
    {
      name: "Butt Weld Fittings",
      slug: "buttweld-fittings",
      icon: GitBranch,
      description: "Elbows, tees, reducers & caps to ASME / ASTM standards",
    },
    {
      name: "Forged Fittings",
      slug: "forged-fittings",
      icon: Wrench,
      description: "High-pressure 2000# to 9000# socket weld & threaded fittings",
    },
    {
      name: "Flanges",
      slug: "flanges",
      icon: Settings,
      description: "Slip-on, blind, weld neck & socket weld flanges",
    },
    {
      name: "Rods & Bars",
      slug: "round-bars",
      icon: Circle,
      description: "Bright finish, black & precision-ground round bars",
    },
    {
      name: "Fasteners",
      slug: "fasteners",
      icon: Nut,
      description: "Hex bolts, nuts, studs, washers & heavy industrial fasteners",
    },
    {
      name: "Industrial Valves",
      slug: "valves",
      icon: GaugeCircle,
      description: "Gate, globe, check, ball & butterfly valves for critical flow",
    },
    {
      name: "Coils",
      slug: "coils",
      icon: ScrollText,
      description: "Precision slit coils, hot & cold rolled strip coils",
    },
    {
      name: "Wires",
      slug: "wires",
      icon: Cable,
      description: "TIG, MIG, filler & industrial spring wires",
    },
    {
      name: "Wire Mesh",
      slug: "wire-mesh",
      icon: Network,
      description: "Woven, welded & Dutch weave mesh for filtration",
    },
    {
      name: "Hose Pipe",
      slug: "hose-pipe",
      icon: Waves,
      description: "Corrugated flexible metal hose & chemical transfer hoses",
    },
  ],
  section2: [
    {
      name: "Dairy Valves",
      slug: "dairy-pharma-valves",
      icon: ShieldCheck,
      description: "Sanitary butterfly, sampling & plug valves for dairy processing",
    },
    {
      name: "Pharma Valves",
      slug: "dairy-pharma-valves",
      icon: ShieldCheck,
      description: "High-purity hygienic diaphragm & aseptic pharma valves",
    },
    {
      name: "Dairy Fittings",
      slug: "dairy-fittings",
      icon: Milk,
      description: "Sanitary SMS, DIN, TC clamps, bends & tri-clover fittings",
    },
    {
      name: "Pharma Fittings",
      slug: "pharma-fittings",
      icon: FlaskConical,
      description: "Electro-polished aseptic bends, tees & ferrules",
    },
    {
      name: "Anchor Fasteners",
      slug: "anchor-fastener",
      icon: Bolt,
      description: "Wedge, sleeve, drop-in & chemical heavy-duty anchors",
    },
    {
      name: "Perforated Sheets",
      slug: "perforated-sheet",
      icon: Grid2X2,
      description: "Round, square & slotted custom perforated metal sheets",
    },
    {
      name: "Patta Patti",
      slug: "patta-patti",
      icon: RectangleHorizontal,
      description: "Slit flat bars, patta patti & decorative stainless strips",
    },
    {
      name: "Strips",
      slug: "strips",
      icon: AlignHorizontalSpaceAround,
      description: "Cold rolled precision narrow & wide metal strips",
    },
    {
      name: "Rings",
      slug: "rings",
      icon: Disc3,
      description: "Forged & rolled seamless alloy rings & bluing rings",
    },
    {
      name: "Circles",
      slug: "circles",
      icon: CircleDot,
      description: "High-accuracy cold sheared & laser-cut circular blanks",
    },
    {
      name: "Structural Angles",
      slug: "angle-channels",
      icon: Columns3,
      description: "Equal & unequal hot rolled stainless steel angles",
    },
    {
      name: "Structural Channels",
      slug: "angle-channels",
      icon: Columns3,
      description: "U-channels & C-channels for structural fabrication",
    },
  ],
};

export default products;
