import { Check } from "../types/index.ts";

export const checks: Check[] = [
  {
    id: "clockTower",
    name: "Clock Tower Ledge",
    requirements: [],
  },
  {
    id: "strawRoof",
    name: "Straw Roof Chest",
    requirements: [["hookshot"], ["dekuMask", "moonTear"]],
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
    requirements: [["hookshot"], ["dekuMask", "moonTear"]],
  },
  {
    id: "mailbox",
    name: "Mailbox",
    requirements: [["postmanHat"]],
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
      ["dekuMask", "magic"],
      ["hookshot"],
      ["zoraMask"],
    ],
    peekRequirements: [],
  },
  {
    id: "swampMap",
    name: "Swamp Map",
    requirements: [
      ["heroBow"],
      ["dekuMask", "magic"],
      ["hookshot"],
      ["zoraMask"],
    ],
    peekRequirements: [],
  },
  {
    id: "bomberKids",
    name: "Bomber's Game",
    requirements: [
      ["heroBow"],
      ["dekuMask", "magic"],
      ["hookshot"],
      ["zoraMask"],
    ],
  },
  {
    id: "keaton",
    name: "Keaton",
    requirements: [["keatonMask"]],
  },
  {
    id: "dekuPlayground",
    name: "Deku Playground",
    requirements: [["dekuMask"]],
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
    requirements: [["dekuMask"], ["goronMask"], ["zoraMask"]],
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
    requirements: [["wallet1"]],
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
      ["bomb", "dekuMask", "magic"],
      ["bomb", "zoraMask"],
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
    requirements: [["bomb"], ["heroBow"], ["dekuMask", "magic"]],
  },
  {
    id: "townArchery",
    name: "Town Archery",
    requirements: [["heroBow"]],
  },
  {
    id: "chestGame",
    name: "Goron Chest Game",
    requirements: [["goronMask"]],
  },
  {
    id: "mayor",
    name: "Mayor",
    requirements: [["couplesMask"]],
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
      ["goronMask", "zoraMask", "dekuMask", "romaniMask", "ocarina"],
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
    requirements: [["kafeiMask"]],
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
