import { Check } from "../types/index.ts";

export const checks: Check[] = [
  {
    id: "skullKidSong",
    name: "Skull Kid Song",
    requirements: [["heroBow"], ["maskDeku", "magic"], ["hookshot"], ["bomb"]],
  },
  {
    id: "clockTower",
    name: "Clock Tower Ledge",
    requirements: [],
  },
  {
    id: "strawRoof",
    name: "Straw Roof Chest",
    requirements: [["hookshot"], ["maskDeku", "moonTear"]],
    peekRequirements: [],
  },
  {
    id: "moonTearTrade",
    name: "Moon Tear Trade",
    requirements: [["moonTear"]],
  },
  {
    id: "sctTower",
    name: "Day 3 Tower",
    requirements: [["hookshot"], ["maskDeku", "moonTear"]],
  },
  {
    id: "mailbox",
    name: "Mailbox",
    requirements: [["maskPostmanHat"]],
  },
  {
    id: "nctTree",
    name: "North Clock Town Tree",
    requirements: [],
  },
  {
    id: "townMap",
    name: "Town Map",
    requirements: [
      ["heroBow"],
      ["maskDeku", "magic"],
      ["hookshot"],
      ["maskZora"],
    ],
    peekRequirements: [],
  },
  {
    id: "swampMap",
    name: "Swamp Map",
    requirements: [
      ["heroBow"],
      ["maskDeku", "magic"],
      ["hookshot"],
      ["maskZora"],
    ],
    peekRequirements: [],
  },
  {
    id: "bomberKids",
    name: "Bomber's Game",
    requirements: [
      ["heroBow"],
      ["maskDeku", "magic"],
      ["hookshot"],
      ["maskZora"],
    ],
  },
  {
    id: "keaton",
    name: "Keaton",
    requirements: [["maskKeaton"]],
  },
  {
    id: "dekuPlayground",
    name: "Deku Playground",
    requirements: [["maskDeku"]],
  },
  {
    id: "oldLady",
    name: "Old Lady",
    requirements: [],
  },
  {
    id: "strayFairyHuman",
    name: "Stray Fairy Human",
    requirements: [],
  },
  {
    id: "strayFairyTransformation",
    name: "Stray Fairy Transformation",
    requirements: [["maskDeku"], ["goronMask"], ["zoraMask"]],
  },
  {
    id: "bombBag",
    name: "Bomb Bag Purchase (50r)",
    requirements: [],
  },
  {
    id: "bigBombBag",
    name: "Big Bomb Bag Purchase (90r)",
    requirements: [],
  },
  {
    id: "swordsmanSchool",
    name: "Swordsman School",
    requirements: [],
  },
  {
    id: "postman",
    name: "Postman's Game",
    requirements: [["bunnyHoodMask"]],
    peekRequirements: [],
  },
  {
    id: "bank1",
    name: "Bank 1",
    requirements: [],
  },
  {
    id: "bank2",
    name: "Bank 2",
    requirements: [["wallet"]],
    peekRequirements: [],
  },
  {
    id: "bank3",
    name: "Bank 3",
    requirements: [["wallet2"]],
    peekRequirements: [],
  },
  {
    id: "allNightMaskPurchase",
    name: "Curiosity Shop",
    requirements: [["wallet2"]],
    peekRequirements: [],
  },
  {
    id: "rosaSisters",
    name: "Rosa Sisters",
    requirements: [["kamaroMask"]],
  },
  {
    id: "sewer",
    name: "Bomber's Hideout Sewer",
    requirements: [
      ["bomb", "hookshot"],
      ["bomb", "heroBow"],
      ["bomb", "maskDeku", "magic"],
      ["bomb", "maskZora"],
    ],
    peekRequirements: [],
  },
  {
    id: "madamAroma",
    name: "Madam Aroma",
    requirements: [],
  },
  {
    id: "ectChest",
    name: "ECT Chest",
    requirements: [],
  },
  {
    id: "honeyDarling",
    name: "Honey and Darling Any Day",
    requirements: [["bomb"], ["heroBow"], ["maskDeku", "magic"]],
  },
  {
    id: "townArchery",
    name: "Town Archery",
    requirements: [["heroBow"]],
  },
  {
    id: "chestGame",
    name: "Goron Chest Game",
    requirements: [["maskGoron"]],
  },
  {
    id: "mayor",
    name: "Mayor",
    requirements: [["maskCouples"]],
  },
  {
    id: "aromaBar",
    name: "Letter to Mama",
    requirements: [["letterToMama"]],
  },
  {
    id: "postmanFreedom",
    name: "Postman's Freedom",
    requirements: [["letterToMama"]],
  },
  {
    id: "soundcheck",
    name: "Soundcheck",
    requirements: [
      ["maskGoron", "maskZora", "maskDeku", "maskRomani", "ocarina"],
    ],
  },
  {
    id: "stockPotKey",
    name: "Room Key",
    requirements: [],
  },
  {
    id: "midnightMeeting",
    name: "Midnight Meeting",
    requirements: [["maskKafei"]],
  },
  {
    id: "toiletHand",
    name: "Toilet Hand",
    requirements: [
      ["landTitleDeed"],
      ["swampTitleDeed"],
      ["mountainTitleDeed"],
      ["oceanTitleDeed"],
      ["letterToKafei"],
      ["letterToMama"],
    ],
  },
  {
    id: "staffRoom",
    name: "Staff Room",
    requirements: [],
  },
  {
    id: "guestRoom",
    name: "Guest Room",
    requirements: [["roomKey"]],
  },
  {
    id: "grannyStories1",
    name: "Granny Short Story",
    requirements: [["allNightMask"]],
  },
  {
    id: "grannyStories2",
    name: "Granny Long Story",
    requirements: [["allNightMask"]],
  },
];
