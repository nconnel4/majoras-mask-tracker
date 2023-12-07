import { Check } from "../types/index.ts";

export const checks: Check[] = [
  {
    id: "songSkullKid",
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
    id: "mapTown",
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
    id: "mapSwamp",
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
    requirements: [["maskDeku"], ["maskGoron"], ["maskZora"]],
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
      ["maskBlast", "hookshot"],
      ["maskBlast", "heroBow"],
      ["maskBlast", "maskDeku", "magic"],
      ["maskBlast", "maskZora"],
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
    requirements: [["maskAllNight"]],
  },
  {
    id: "grannyStories2",
    name: "Granny Long Story",
    requirements: [["maskAllNight"]],
  },
  {
    id: "telescope",
    name: "Telescope",
    requirements: [["maskDeku"], ["heroBow"], ["maskZora"], ["hookshot"]],
    peekRequirements: [],
  },
  {
    id: "dodongos",
    name: "Dodongo Grotto",
    requirements: [],
  },
  {
    id: "pillarGrotto",
    name: "Pillar Grotto",
    requirements: [],
  },
  {
    id: "businessScrub",
    name: "Business Scrub",
    requirements: [["wallet"]],
    peekRequirements: [],
  },
  {
    id: "grassChest",
    name: "Grass Chest",
    requirements: [],
  },
  {
    id: "grassGrotto",
    name: "Grass Grotto",
    requirements: [],
  },
  {
    id: "stump",
    name: "Stump Chest",
    requirements: [["hookshot"], ["magicBean", "bottle1"]],
    peekRequirements: [],
  },
  {
    id: "peahat",
    name: "Peahat Grotto",
    requirements: [],
  },
  {
    id: "water",
    name: "Field Underwater Chest",
    requirements: [["maskZora"]],
    peekRequirements: [],
  },
  {
    id: "bioBaba",
    name: "Bio Baba Grotto",
    requirements: [
      ["maskBlast", "maskZora"],
      ["bomb", "maskZora"],
      ["maskGoron", "maskZora"],
    ],
    peekRequirements: [
      ["maskBlast", "maskDeku", "magic"],
      ["maskBlast", "heroBow"],
      ["maskBlast", "hookshot"],
      ["bomb", "maskDeku", "magic"],
      ["bomb", "heroBow"],
      ["bomb", "hookshot"],
      ["maskGoron", "maskDeku", "magic"],
      ["maskGoron", "heroBow"],
      ["maskGoron", "hookshot"],
    ],
  },
  {
    id: "gossips",
    name: "Gossip Stones",
    requirements: [
      ["maskDeku", "songSonata", "ocarina"],
      ["maskGoron", "songLullaby", "ocarina"],
      ["maskZora", "songNewWave", "ocarina"],
    ],
  },
  {
    id: "kamaro",
    name: "Kamaro",
    requirements: [["ocarina", "songHealing"]],
  },
  {
    id: "guruGuru",
    name: "Guru Guru",
    requirements: [],
  },
  {
    id: "kafei",
    name: "Kafei",
    requirements: [["letterToKafei"]],
  },
  {
    id: "curiosity1",
    name: "Curiosity Shop Owner 1",
    requirements: [["letterToKafei"]],
  },
  {
    id: "curiosity2",
    name: "Curiosity Shop Owner 2",
    requirements: [["letterToKafei"]],
  },
  {
    id: "rswGrotto",
    name: "Grotto",
    requirements: [],
  },
  {
    id: "rswTree",
    name: "Tree",
    requirements: [
      ["maskDeku", "magic"],
      ["maskZora"],
      ["heroBow"],
      ["hookshot"],
    ],
    peekRequirements: [],
  },
  {
    id: "mapSnowhead",
    name: "Snowhead Map",
    requirements: [
      ["hookshot"],
      ["heroBow"],
      ["maskDeku", "magic"],
      ["maskZora"],
    ],
  },
  {
    id: "swampArchery1",
    name: "Swamp Archery 1",
    requirements: [["heroBow"]],
  },
  {
    id: "swampArchery2",
    name: "Swamp Archery 2",
    requirements: [["heroBow"]],
  },
  {
    id: "roof",
    name: "Tourist Center Roof",
    requirements: [["landTitleDeed", "maskDeku"]],
    peekRequirements: [],
  },
  {
    id: "woodsGrotto",
    name: "Woods Grotto",
    requirements: [],
  },
  {
    id: "koume",
    name: "Koume Red Potion",
    requirements: [],
  },
  {
    id: "kotake",
    name: "Kotake",
    requirements: [["bottle1"]],
  },
  {
    id: "swampGrotto",
    name: "Swamp Grotto",
    requirements: [["bottle1", "maskDeku"], ["maskZora"]],
  },
  {
    id: "contest",
    name: "Pictograph Contest",
    requirements: [["pictographBox"]],
  },
  {
    id: "landTitleDeed",
    name: "Land Title Deed",
    requirements: [["landTitleDeed"]],
  },
  {
    id: "boatArchery",
    name: "Boat Archery",
    requirements: [["heroBow", "maskDeku", "songSonata", "ocarina"]],
  },
  {
    id: "swampSpider",
    name: "Swamp Spider House",
    requirements: [
      ["bottle1", "maskDeku", "hookshot"],
      ["maskZora", "bottle1"],
      ["bottle1", "maskDeku", "magic", "magicBean", "maskGoron"],
      ["bottle1", "maskDeku", "magic", "magicBean", "bomb"],
      ["bottle1", "maskDeku", "magic", "magicBean", "maskBlast"],
      ["bottle1", "maskDeku", "magicBean", "heroBow"],
    ],
  },
  {
    id: "garden",
    name: "Palace Garden",
    requirements: [
      ["maskDeku", "bottle1"],
      ["maskDeku", "heroBow"],
      ["maskDeku", "hookshot"],
      ["maskDeku", "maskZora"],
    ],
  },
  {
    id: "beanGrotto",
    name: "Bean Grotto",
    requirements: [
      ["maskDeku", "bottle1", "magicBean"],
      ["maskDeku", "hookshot"],
    ],
  },
  {
    id: "beanSalesman",
    name: "Bean Salesman",
    requirements: [
      ["maskDeku", "bottle1"],
      ["maskDeku", "heroBow"],
      ["maskDeku", "hookshot"],
      ["maskDeku", "maskZora"],
    ],
  },
  {
    id: "butler",
    name: "Deku Butler",
    requirements: [
      ["maskDeku", "maskZora", "dekuPrincess"],
      ["maskDeku", "hookshot", "dekuPrincess"],
      ["maskDeku", "heroBow", "dekuPrincess"],
      ["maskDeku", "bottle1", "dekuPrincess"],
    ],
  },
  {
    id: "songPalace",
    name: "Palace Song",
    requirements: [
      ["maskDeku", "bottle1"],
      ["maskDeku", "heroBow"],
      ["maskDeku", "hookshot"],
      ["maskDeku", "maskZora"],
    ],
  },
  {
    id: "wfEntrance",
    name: "Woodfall Entrance",
    requirements: [
      ["maskDeku", "bottle1"],
      ["maskDeku", "heroBow"],
      ["maskDeku", "hookshot"],
      ["maskDeku", "maskZora"],
    ],
  },
  {
    id: "wfBridge",
    name: "Woodfall Bridge",
    requirements: [
      ["maskDeku", "bottle1"],
      ["maskDeku", "heroBow"],
      ["maskDeku", "hookshot"],
      ["maskDeku", "maskZora"],
    ],
  },
  {
    id: "wfOwl",
    name: "Woodfall Owl",
    requirements: [
      ["maskDeku", "bottle1"],
      ["maskDeku", "heroBow"],
      ["maskDeku", "hookshot"],
      ["maskDeku", "maskZora"],
    ],
  },
  {
    id: "mapRanch",
    name: "Ranch Map",
    requirements: [
      ["maskDeku", "magic"],
      ["maskZora"],
      ["heroBow"],
      ["hookshot"],
    ],
  },
  {
    id: "mapBay",
    name: "Great Bay Map",
    requirements: [
      ["maskDeku", "magic"],
      ["maskZora"],
      ["heroBow"],
      ["hookshot"],
    ],
  },
  {
    id: "gormanRace",
    name: "Gorman Race",
    requirements: [["ocarina", "songEpona"]],
  },
  {
    id: "dogChest",
    name: "Dog Race Chest",
    requirements: [["magicBean", "bottle1"], ["maskZora"], ["hookshot"]],
    peekRequirements: [],
  },
  {
    id: "dogRace",
    name: "Dog Race",
    requirements: [["maskTruth"]],
  },
  {
    id: "chicks",
    name: "Grog's Chickens",
    requirements: [["maskBremen"]],
  },
  {
    id: "aliens",
    name: "Aliens",
    requirements: [["maskGoron", "keg", "heroBow"]],
  },
  {
    id: "cremia",
    name: "Cremia Escort",
    requirements: [["maskGoron", "keg", "heroBow"]],
  },
  {
    id: "songRomaniGame",
    name: "Romani's Game",
    requirements: [["maskGoron", "keg"]],
  },
  // Great Bay Coast
  {
    id: "coastGrotto",
    name: "Coast Grotto",
    requirements: [["songEpona", "ocarina"]],
  },
  {
    id: "labFish",
    name: "Lab Fish",
    requirements: [["songEpona", "ocarina", "bottle1"]],
  },
  {
    id: "mapCanyon",
    name: "Ikana Canyon Map",
    requirements: [["songEpona", "ocarina", "bottle1"]],
  },
  {
    id: "coastLedge",
    name: "Coast Ledge",
    requirements: [
      ["songEpona", "ocarina", "bottle1", "magicBean", "hookshot"],
    ],
    peekRequirements: [["songEpona", "ocarina"]],
  },
  {
    id: "mikau",
    name: "Mikau",
    requirements: [["songEpona", "ocarina", "songHealing"]],
  },
  {
    id: "fisherman",
    name: "Fisherman Game",
    requirements: [
      [
        "songEpona",
        "ocarina",
        "hookshot",
        "maskZora",
        "iceArrow",
        "fireArrow",
        "songNewWave",
        "magic",
        "heroBow",
      ],
    ],
  },
  {
    id: "oceanSpider",
    name: "Ocean Spider House Day 1",
    requirements: [
      ["bomb", "hookshot", "heroBow", "fireArrow", "magic"],
      ["maskBlast", "hookshot", "heroBow", "fireArrow", "magic"],
    ],
  },
  {
    id: "oceanSpiderChest",
    name: "Ocean Spider House Chest",
    requirements: [
      ["bomb", "hookshot", "heroBow", "maskCaptainHat"],
      ["blastMask", "hookshot", "heroBow", "maskCaptainHat"],
    ],
    peekRequirements: [
      ["bomb", "hookshot", "heroBow"],
      ["blastMask", "hookshot", "heroBow"],
    ],
  },
  // Zora Cape
  {
    id: "ledge1",
    name: "Lower Cape Ledge",
    requirements: [["hookshot"]],
    peekRequirements: [],
  },
  {
    id: "ledge2",
    name: "Upper Cape Ledge",
    requirements: [["hookshot"]],
  },
  {
    id: "beaver",
    name: "Beaver Race",
    requirements: [["hookshot", "maskZora"]],
  },
  {
    id: "likeLike",
    name: "Like Like",
    requirements: [["maskZora"]],
    peekRequirements: [["heroBow"]],
  },
  {
    id: "capeGrotto",
    name: "Cape Grotto",
    requirements: [["bomb"], ["maskBlast"], ["maskGoron"]],
  },
  {
    id: "capeUnderwater",
    name: "Underwater Chest",
    requirements: [["maskZora"]],
    peekRequirements: [],
  },
];
