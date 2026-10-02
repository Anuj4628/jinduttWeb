import hot from "../../assets/images/stock/hot-rolled-plates.jpg";
import cold from "../../assets/images/stock/cold-rolled-plates.jpg";
import cheq from "../../assets/images/stock/chequered-plates.jpg";

import pressureVesselImg from "../../assets/images/stock/pressure-vessel-steel-plates.jpg";
import boilerPlateImg from "../../assets/images/stock/boiler-quality-steel-plates.jpg";
import hicPlateImg from "../../assets/images/stock/hic-steel-plates.jpg";
import highYieldColdFormingImg from "../../assets/images/stock/high-yield-cold-forming-plates.jpg";
import yield460Img from "../../assets/images/stock/460-yield-steel-plates.jpg";
import quenchedTemperedImg from "../../assets/images/stock/quenched-tempered-steel-plates.jpg";
import abrasionResistantImg from "../../assets/images/stock/abrasion-resistant-plates.jpg";
import armourPlateImg from "../../assets/images/stock/armour-protective-steel-plates.jpg";
import chromeMolyImg from "../../assets/images/stock/chrome-moly-steel-plates.jpg";
import offshoreSteelImg from "../../assets/images/stock/offshore-structural-steel-plates.jpg";
import cortenSteelImg from "../../assets/images/stock/corten-weathering-steel-plates.jpg";
import enSeriesImg from "../../assets/images/stock/en-series-tool-steel-plates.jpg";
import hadfieldManganeseImg from "../../assets/images/stock/hadfield-manganese-steel-plates.jpg";
import abrexPlateImg from "../../assets/images/stock/abrex-wear-steel-plates.jpg";

const plates = [
  {
    id: 1,
    slug: "stainless-steel-plates",
    image: cold,
    title:
      "Stainless Steel Plates Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
    shortDescription:
      "High-quality Stainless Steel Plates manufactured in various grades, thicknesses, and finishes for fabrication, construction, pressure vessels, and industrial applications.",
  },

  {
    id: 2,
    slug: "pressure-vessel-steel-plates",
    image: pressureVesselImg,
    title: "Pressure Vessel Steel Plates – ASTM A516 Gr. 60 / 65 / 70",
    shortDescription:
      "Heavy-duty pressure vessel steel plates engineered for industrial boilers, pressurized gas spheres, and heat exchanger fabrication with certified notch toughness.",
    materialGroup: "Pressure Vessel Steel",
    standards: "ASTM A516 / ASME SA516, EN 10028-2, BS 1501, DIN 17155",
    forms: "Hot Rolled Plates, Normalized Plates, Cut-to-Size Blanks",
    application:
      "Pressure vessels, chemical reactors, storage spheres, heat exchangers, and industrial fabrication",
  },

  {
    id: 3,
    slug: "boiler-plate-steel",
    image: boilerPlateImg,
    title: "Boiler Quality Steel Plates – ASTM A515 & EN 10028-2",
    shortDescription:
      "High-temperature boiler quality steel plates manufactured for steam drums, thermal energy plants, and pressurized boiler shells requiring elevated temperature strength.",
    materialGroup: "Boiler Quality Steel",
    standards: "ASTM A515 / ASME SA515, ASTM A285, EN 10028-2, BS 1501",
    forms: "Hot Rolled Heavy Plates, As-Rolled / Normalized Plates, Flanged Heads",
    application:
      "Industrial steam boilers, economizers, steam headers, thermal heaters, and autoclave pressure shells",
  },

  {
    id: 4,
    slug: "hic-steel-plates",
    image: hicPlateImg,
    title: "HIC Resistant Steel Plates – Sour Service Tested",
    shortDescription:
      "Hydrogen-Induced Cracking (HIC) resistant pressure vessel plates manufactured with ultra-low sulfur and inclusion control for severe wet H2S sour service environments.",
    materialGroup: "HIC / Sour Service Steel",
    standards: "NACE TM0284, NACE MR0175 / ISO 15156, ASTM A516 Gr. 60/65/70 HIC, EN 10028-3",
    forms: "Vacuum Degassed Plates, Calcium-Treated Ultra-Low Sulfur Plates, Normalized Plates",
    application:
      "Sour oil & gas pipelines, wet H2S separators, gas sweetening towers, and refinery hydroprocessing vessels",
  },

  {
    id: 5,
    slug: "chrome-moly-plate",
    image: chromeMolyImg,
    title: "Chrome Moly Alloy Steel Plates – ASTM A387 Gr. 11 / 12 / 22",
    shortDescription:
      "Chromium-molybdenum alloy plates designed for elevated-temperature service and high-pressure hydrogen environments with superior creep resistance.",
    materialGroup: "Chrome Moly Alloy Steel",
    standards: "ASTM A387 / ASME SA387, EN 10028-2 (16Mo3 / 13CrMo4-5), BS 1501-250, DIN 17155",
    forms: "Normalized & Tempered Heavy Alloy Plates, Vacuum Degassed Slabs, Custom Cut Blanks",
    application:
      "Petrochemical hydrocrackers, delayed cokers, power utility boilers, high-temperature heat exchangers, and reactors",
  },

  {
    id: 6,
    slug: "en-series-tool-steel-plates",
    image: enSeriesImg,
    title: "EN Series & Tool Steel Plates – EN8, EN9, EN19, EN24 & D2",
    shortDescription:
      "High-tensile carbon and alloy tool steel plates designed for high hardenability, fatigue strength, and dimensional stability in molds, dies, and machine parts.",
    materialGroup: "Engineering & Tool Steel",
    standards: "BS 970 / EN 10083, DIN 17350, ISO 4957, AISI / ASTM A681",
    forms: "Annealed Plates, Pre-Hardened Tool Steel Blocks, Ground Flat Stock, Machined Blanks",
    application:
      "Plastic injection molds, press brake tooling, stamping dies, machine bedplates, gears, shafts, and heavy engineering fixtures",
  },

  {
    id: 7,
    slug: "duplex-super-duplex-steel-plates",
    image: cold,
    title:
      "Duplex & Super Duplex Steel Plates Supplier – S31803, S32205, S32750 & S32760",
    shortDescription:
      "Duplex and Super Duplex Steel Plates combining high mechanical strength with superior corrosion resistance for offshore, marine, and chemical industries.",
  },

  {
    id: 8,
    slug: "inconel-plates",
    image: cold,
    title: "Inconel Plates Supplier – 600, 601, 625, 690, 718, 725 & X-750",
    shortDescription:
      "Premium Inconel Plates designed for high-temperature service, oxidation resistance, and extreme industrial environments.",
  },

  {
    id: 9,
    slug: "incoloy-plates",
    image: cheq,
    title:
      "Incoloy Plates Supplier – 800, 800H, 800HT, 825, 925 & 330 (DS 330)",
    shortDescription:
      "Incoloy Plates providing excellent mechanical strength, oxidation resistance, and long service life in high-temperature applications.",
  },

  {
    id: 10,
    slug: "hastelloy-plates",
    image: hot,
    title: "Hastelloy Plates Supplier – C22, C276, B2, B3, C2000, C59, C4 & HN",
    shortDescription:
      "Hastelloy Plates engineered for exceptional resistance to aggressive chemicals, acids, and highly corrosive industrial environments.",
  },

  {
    id: 11,
    slug: "monel-400-plates",
    image: hot,
    title: "Monel 400 Plates Supplier",
    shortDescription:
      "Monel 400 Plates offering superior resistance to seawater, acids, alkalis, and harsh marine environments.",
  },

  {
    id: 12,
    slug: "nickel-alloy-200-201-plates",
    image: cheq,
    title: "Nickel Alloy 200 / 201 Plates Supplier",
    shortDescription:
      "Nickel Alloy 200/201 Plates manufactured for excellent thermal conductivity, corrosion resistance, and chemical processing applications.",
  },

  {
    id: 13,
    slug: "titanium-plates",
    image: hot,
    title: "Titanium Plates Supplier – Grade 2 & Grade 5",
    shortDescription:
      "Premium Titanium Plates offering exceptional strength, lightweight properties, and outstanding corrosion resistance for aerospace, marine, and chemical industries.",
  },

  {
    id: 14,
    slug: "alloy-28-plates",
    image: hot,
    title: "Alloy 28 Plates Supplier",
    shortDescription:
      "Alloy 28 Plates providing excellent resistance to pitting, crevice corrosion, and aggressive chemical environments in demanding industries.",
  },

  {
    id: 15,
    slug: "special-alloy-plates",
    image: cold,
    title: "Special Alloy Plates Supplier – SMO 254 (F44) & Alloy 20",
    shortDescription:
      "Special Alloy Plates offering exceptional corrosion resistance and durability for marine, offshore, and chemical processing industries.",
  },

  {
    id: 16,
    slug: "high-performance-alloy-plates",
    image: cheq,
    title:
      "High-Performance Alloy Plates Supplier – Nimonic, Nichrome, Nitronic, Nilo & More",
    shortDescription:
      "High-performance Alloy Plates engineered for high-temperature, aerospace, power generation, and critical engineering applications.",
  },

  {
    id: 17,
    slug: "copper-nickel-plates",
    image: cheq,
    title: "Copper Nickel Plates Supplier – 70/30 & 90/10",
    shortDescription:
      "Copper Nickel Plates offering outstanding seawater corrosion resistance for shipbuilding, desalination plants, condensers, and heat exchangers.",
  },

  {
    id: 18,
    slug: "high-yield-cold-forming-steel-plates",
    image: highYieldColdFormingImg,
    title: "High Yield Cold Forming Steel Plates – S355MC to S700MC",
    shortDescription:
      "Thermomechanically rolled fine-grain steel plates combining high tensile yield strength with outstanding cold formability and bendability for heavy mobile chassis.",
    materialGroup: "Cold Forming High Yield Steel",
    standards: "EN 10149-2, ISO 6930-2, ASTM A1011 / A1018",
    forms: "TMCP Rolled Plates, Pickled & Oiled Plates, Precision Laser Blanks",
    application:
      "Mobile cranes, telescopic booms, commercial truck chassis, agricultural machinery, and cold-formed sections",
  },

  {
    id: 19,
    slug: "460-yield-steel-plates",
    image: yield460Img,
    title: "460 Yield High-Strength Structural Steel Plates – S460N / S460ML",
    shortDescription:
      "Normalized and TMCP structural steel plates delivering minimum 460 MPa yield strength with superior weldability and low-temperature sub-zero impact toughness.",
    materialGroup: "High-Strength Structural Steel",
    standards: "EN 10025-3 (Normalized), EN 10025-4 (TMCP), EN 10025-6 (Q&T), ASTM A572 Gr. 65",
    forms: "Heavy Structural Plates, TMCP Rolled Plates, Fine-Grain Normalized Plates",
    application:
      "Long-span bridges, heavy structural engineering, offshore platforms, high-rise frameworks, and mining equipment",
  },

  {
    id: 20,
    slug: "quenched-and-tempered-steel-plates",
    image: quenchedTemperedImg,
    title: "Quenched & Tempered (Q&T) High-Yield Steel Plates – S690QL / ASTM A514",
    shortDescription:
      "Water-quenched and tempered high-yield alloy steel plates offering high strength-to-weight ratios, extreme toughness, and high load-bearing fatigue endurance.",
    materialGroup: "Quenched & Tempered Steel",
    standards: "EN 10025-6 (S690QL / S890QL / S960QL), ASTM A514, ASTM A517, ISO 4950-3",
    forms: "Water-Quenched & Tempered Plates, Flame-Cut Profiles, Beveled Heavy Plates",
    application:
      "Heavy-duty cranes, mining dump trucks, penstocks, structural skids, earthmoving machinery, and lifting jibs",
  },

  {
    id: 21,
    slug: "abrasion-resistant-steel-plates",
    image: abrasionResistantImg,
    title: "Abrasion Resistant (AR) Wear Steel Plates – AR 400 / 450 / 500 HBW",
    shortDescription:
      "Through-hardened wear-resistant steel plates engineered to withstand severe sliding abrasion, impact shock, and aggregate wear in heavy material handling equipment.",
    materialGroup: "Wear Resistant Alloy Steel",
    standards: "Through-Hardened AR Specifications, DIN EN ISO 6506-1, ISO 683-1",
    forms: "Wear Plates, Plasma/Laser Cut Liners, Drilled Chute Liners, Pre-Formed Wear Parts",
    application:
      "Mining chutes, excavator buckets, stone crushers, concrete batching plants, quarry hoppers, and recycling shredders",
  },

  {
    id: 22,
    slug: "armour-plate",
    image: armourPlateImg,
    title: "Armour & Ballistic Protective Steel Plates – High Hardness",
    shortDescription:
      "Ultra-high-hardness quenched protective steel plates engineered for ballistic protection, critical infrastructure security, and blast energy absorption.",
    materialGroup: "Ballistic Protective Steel",
    standards: "EN 1522 / EN 1063, MIL-DTL-46100, MIL-DTL-12560, VPAM PM2007",
    forms: "Precision Heat-Treated Protective Plates, Waterjet Cut Panels, Blast-Resistant Sheets",
    application:
      "Security vehicles, cash-in-transit vans, defensive enclosures, critical infrastructure shelters, and security doors",
  },

  {
    id: 23,
    slug: "offshore-and-steel-plates",
    image: offshoreSteelImg,
    title: "Offshore & Structural Steel Plates – EN 10225 & API 2H / 2W / 2Y",
    shortDescription:
      "High-integrity structural steel plates engineered for offshore marine platforms, wind turbine foundations, and jacket structures with certified Z35 through-thickness ductility.",
    materialGroup: "Offshore Structural Steel",
    standards: "EN 10225 (S355G8+M / S420G2+M), API Spec 2H / 2W / 2Y, NORSOK M-120, DNV-OS-B101",
    forms: "TMCP Heavy Plates, Z35 Through-Thickness Tested Plates, Shot-Blasted & Shop-Primed Plates",
    application:
      "Offshore fixed platform jackets, wind turbine monopiles, FPSO topside modules, subsea structures, and mooring nodes",
  },

  {
    id: 24,
    slug: "corten-steel-plates",
    image: cortenSteelImg,
    title: "Corten / Weathering Steel Plates – ASTM A588 & Corten A / B",
    shortDescription:
      "Atmospheric corrosion-resistant steel plate engineered to form a protective natural rustic patina upon outdoor exposure, minimizing painting and ongoing maintenance.",
    materialGroup: "Atmospheric Weathering Steel",
    standards: "ASTM A588 Gr. A/B, ASTM A242, EN 10025-5 (S355J0W / S355J2W), ISO 4952",
    forms: "Hot Rolled Weathering Plates, Slit Plates, Profiling Sheets, Architectural Panels",
    application:
      "Architectural facade cladding, bridge structures, outdoor sculptures, railway wagons, transmission towers, and container boxes",
  },

  {
    id: 25,
    slug: "hadfield-manganese-plate",
    image: hadfieldManganeseImg,
    title: "Hadfield Manganese Steel Plates – 11%–14% Austenitic High Manganese",
    shortDescription:
      "Fully austenitic Hadfield high-manganese work-hardening plates that rapidly increase surface hardness under repetitive impact while retaining deep core ductility.",
    materialGroup: "Hadfield Manganese Steel",
    standards: "ASTM A128 / A128M (Grades A, B, C), BS 3100 BW10, DIN 1.3401 (X120Mn12), ISO 13521",
    forms: "Solution-Annealed Plates, Cut-to-Size Wear Liners, Perforated Screen Plates",
    application:
      "Jaw crushers, shot blast chamber liners, tumbling barrels, railway track frogs, cement mill liners, and recycling hammers",
  },

  {
    id: 26,
    slug: "abrex-plate",
    image: abrexPlateImg,
    title: "Abrex® Abrasion-Resistant Steel Plates – Abrex 400 / 450 / 500",
    shortDescription:
      "Authentic Abrex® high-hardness abrasion-resistant steel plate family delivering superior sliding and impact wear endurance with tight flat tolerances and reliable field weldability.",
    materialGroup: "Proprietary Abrex® Steel",
    standards: "Proprietary Abrex Specifications (Nippon Steel), JIS-Aligned Quality Control Standards",
    forms: "Quenched Wear Plates, Precision Flame-Cut Liners, Pre-Formed Chute Segments",
    application:
      "Earthmoving excavator buckets, gravel handling chutes, asphalt mixer paddles, mining dumpers, cement hopper cones, and dredge piping",
  },

];

export default plates;
