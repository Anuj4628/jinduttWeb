import anchorChannel from "./anchor-channel";
import anchorFastener from "./anchor-fastener";
import buttweldFitting from "./buttweld-fitting";
import circles from "./circles";
import coils from "./coils";
import dairyfitting from "./dairy-fitting";
import dairypharmaValves from "./dairy-pharma-valves";
import fasteners from "./fasteners";
import flanges from "./flanges";
import forgedfitting from "./forged-fittings";

import hosepipe from "./hose-pipe";
import pattapatti from "./patta-patti";
import perforatedsheet from "./perforated-sheets";
import pharmaFitting from "./pharma-fitting";
import pipes from "./pipes";
import plates from "./plates";
import rings from "./rings";
import rodBars from "./rodBars";
import sheets from "./sheets";
import strips from "./strips";
import tubes from "./tubes";
import valves from "./valves";
import wireMesh from "./wire-mesh";
import wires from "./wires";

// Standard material priority: Stainless Steel (1) -> Carbon Steel (2) -> Alloy Steel (3) -> Others (4)
const getMaterialPriority = (item) => {
  const text = `${item.title || ""} ${item.slug || ""} ${item.materialGroup || ""}`.toLowerCase();
  if (text.includes("stainless") || text.includes("ss ") || text.includes("304") || text.includes("316") || text.includes("310") || text.includes("321") || text.includes("904")) {
    return 1;
  }
  if (text.includes("carbon") || text.includes("mild steel") || text.includes("ms erw") || text.includes("pressure vessel") || text.includes("boiler") || text.includes("hic") || text.includes("a105") || text.includes("en8") || text.includes("en9") || text.includes("s355")) {
    return 2;
  }
  if (text.includes("alloy steel") || text.includes("chrome moly") || text.includes("en19") || text.includes("en24") || text.includes("p1 to p22") || text.includes("t11") || text.includes("f11") || text.includes("wp11") || text.includes("wp22") || text.includes("wp91")) {
    return 3;
  }
  return 4;
};

const sortCombined = (items) => {
  return [...items].sort((a, b) => getMaterialPriority(a) - getMaterialPriority(b));
};

const productMaterials = {
  coils,
  flanges,
  "round-bars": rodBars,
  strips,
  "anchor-fastener": anchorFastener,
  "buttweld-fittings": buttweldFitting,
  "pharma-fittings": pharmaFitting,
  plates,
  "angle-channels": anchorChannel,
  "wire-mesh": wireMesh,
  valves,
  wires,
  "dairy-pharma-valves": dairypharmaValves,
  pipes,
  fasteners,
  "hose-pipe": hosepipe,
  tubes,
  circles,
  "patta-patti": pattapatti,
  "perforated-sheet": perforatedsheet,
  sheets,
  rings,

  "forged-fittings": forgedfitting,
  "dairy-fittings": dairyfitting,
  "pipes-tubes": sortCombined(
    Array.from(new Map([...pipes, ...tubes].map((item) => [item.slug, item])).values())
  ),
  "sheets-plates": sortCombined([...sheets, ...plates]),
};

export default productMaterials;
