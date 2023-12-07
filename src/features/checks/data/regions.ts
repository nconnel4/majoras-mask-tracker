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
  {
    id: "rik",
    name: "Road to Ikana",
  },
  {
    id: "gy",
    name: "Graveyard",
  },
  {
    id: "can",
    name: "Canyon",
  },
  {
    id: "shr",
    name: "Secret Shrine",
  },
  {
    id: "well",
    name: "Well",
  },
  {
    id: "cas",
    name: "Ikana Castle",
  },
  {
    id: "st",
    name: "Stone Tower",
  },
  {
    id: "wft",
    name: "Woodfall Temple",
  },
  {
    id: "sht",
    name: "Stonehead Temple",
  },
  {
    id: "gbt",
    name: "Great Bay Temple",
  },
  {
    id: "stt",
    name: "Stone Tower Temple",
  },
];

export const regionChecks: RegionChecks = {
  ctr: ["skullKidSong"],
  sct: ["clockTower", "strawRoof", "moonTearTrade", "sctTower", "mailbox"],
  nct: [
    "nctTree",
    "mapTown",
    "mapSwamp",
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
  lp: ["guruGuru", "kafei", "curiosity1", "curiosity2"],
  tf: [
    "telescope",
    "dodongos",
    "pillarGrotto",
    "businessScrub",
    "grassChest",
    "grassGrotto",
    "stump",
    "peahat",
    "water",
    "bioBaba",
    "gossips",
    "kamaro",
  ],
  rsw: [
    "rswGrotto",
    "rswTree",
    "mapSwamp",
    "mapSnowhead",
    "swampArchery1",
    "swampArchery2",
  ],
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
  rik: [],
  gy: [],
  can: [],
  shr: [],
  well: [],
  cas: [],
  st: [],
  wft: [],
  sht: [],
  gbt: [],
  stt: [],
};
