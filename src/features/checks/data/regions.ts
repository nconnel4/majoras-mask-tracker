import { Region, RegionChecks } from "../types";

export const regions: Region[] = [
  {
    id: "ctr",
    name: "Clock Tower Roof",
  },
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
  {
    id: "rsw",
    name: "Road to Southern Swamp",
  },
  {
    id: "ssw",
    name: "Southern Swamp",
  },
  {
    id: "pal",
    name: "Deku Palace",
  },
  {
    id: "wf",
    name: "Woodfall",
  },
  {
    id: "mr",
    name: "Milk Road",
  },
  {
    id: "rr",
    name: "Romani Ranch",
  },
  {
    id: "vil",
    name: "Mountain Village",
  },
  {
    id: "twi",
    name: "Twin Islands",
  },
  {
    id: "gor",
    name: "Goron Village",
  },
  {
    id: "psh",
    name: "Path to Snowhead",
  },
  {
    id: "gbc",
    name: "Great Bay Coast",
  },
  {
    id: "zc",
    name: "Zora Cape",
  },
  {
    id: "zh",
    name: "Zora Hall",
  },
  {
    id: "pfe",
    name: "Pirate's Fortress Exterior",
  },
  {
    id: "pfi",
    name: "Pirate's Fortress Interior",
  },
  {
    id: "pfs",
    name: "Pirate's Fortress Sewers",
  },
  {
    id: "pr",
    name: "Pinnacle Rock",
  },
];

export const regionChecks: RegionChecks = {
  ctr: ["skullKidSong"],
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
  rsw: [],
  ssw: [],
  pal: [],
  wf: [],
  mr: [],
  rr: [],
  vil: [],
  twi: [],
  gor: [],
  psh: [],
  gbc: [],
  zc: [],
  zh: [],
  pfe: [],
  pfi: [],
  pfs: [],
  pr: [],
};
