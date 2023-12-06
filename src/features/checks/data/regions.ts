import { Region, RegionChecks } from "../types";

export const regions: Region[] = [
  {
    id: "sct",
    name: "South Clock Town",
  },
  {
    id: "nct",
    name: "North Clock Town",
  },

  {
    id: "ect",
    name: "East Clock Town",
  },
  {
    id: "wct",
    name: "West Clock Town",
  },
  {
    id: "spi",
    name: "Stock Pot Inn",
  },
  {
    id: "lp",
    name: "Laundry Pool",
  },
  {
    id: "tf",
    name: "Termina Field",
  },
];

export const regionChecks: RegionChecks = {
  sct: ["clockTower", "strawRoof", "moonTearTrade", "sctTower", "mailbox"],
  nct: [
    "nctTree",
    "townMap",
    "swampMap",
    "bomberKids",
    "keaton",
    "dekuPlayground",
    "oldLady",
    "strayFairyHuman",
    "strayFairyTransformation",
    "mailbox",
  ],
  ect: [
    "sewer",
    "madamAroma",
    "ectChest",
    "honeyDarling",
    "townArchery",
    "chestGame",
    "mayor",
    "aromaBar",
    "postmanFreedom",
    "soundcheck",
  ],
  wct: [
    "bombBag",
    "bigBombBag",
    "swordsmanSchool",
    "postman",
    "bank1",
    "bank2",
    "bank3",
    "allNightMaskPurchase",
    "rosaSisters",
  ],
  spi: [
    "stockPotKey",
    "midnightMeeting",
    "toiletHand",
    "staffRoom",
    "guestRoom",
    "grannyStories1",
    "grannyStories2",
  ],
  lp: [],
  tf: [],
};
