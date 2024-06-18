import { Checks } from "../types/index.ts";

export const checks: Checks = {
  // Clock Tower Roof
  songSkullKid: {
    name: "Skull Kid Song",
    region: "ctr",
  },

  // South Clock Town
  clockTower: {
    name: "Clock Tower Ledge",
    region: "sct",
  },
  strawRoof: {
    name: "Straw Roof Chest",
    region: "sct",
  },
  moonTearTrade: {
    name: "Moon Tear Trade",
    region: "sct",
  },
  sctTower: { name: "Day 3 Tower", region: "sct" },
  sctMailbox: {
    name: "Mailbox",
    region: "sct",
    linkedChecks: ["nctMailbox", "ectMailbox"],
  },

  // North Clock Town
  nctTree: { name: "North Clock Town Tree", region: "nct" },
  nctMapTown: {
    name: "Clock Town Map Purchase",
    region: "nct",
    linkedChecks: ["canyonMapTown"],
  },
  nctMapSwamp: {
    name: "Woodfall Map Purchase",
    region: "nct",
    linkedChecks: ["rswMapSwamp"],
  },
  strayFairyHuman: { name: "Town Great Fairy", region: "nct" },
  strayFairyTransformation: {
    name: "Town Great Fairy Non-Human",
    region: "nct",
  },
  bomberKids: { name: "Bombers' Hide and Seek", region: "nct" },
  dekuPlayground: { name: "Deku Playground", region: "nct" },
  oldLady: { name: "Old Lady", region: "nct" },
  nctKeaton: { name: "Keaton Quiz", region: "nct" },
  nctMailbox: {
    name: "Mailbox",
    region: "nct",
    linkedChecks: ["sctMailbox", "ectMailbox"],
  },

  // East Clock Town
  bomberHideout: { name: "Bomber Hideout Chest", region: "ect" },
  ectChest: { name: "East Clock Town Chest", region: "ect" },
  honeyDarling: { name: "Honey and Darling Any Day", region: "ect" },
  madameAroma: { name: "Madame Aroma", region: "ect" },
  aromaBar: { name: "Madame Aroma in Bar", region: "ect" },
  mayor: { name: "Mayor", region: "ect" },
  postmanFreedom: { name: "Postman Freedom", region: "ect" },
  townArchery1: { name: "Town Archery #1", region: "ect" },
  townArchery2: { name: "TownArchery #2", region: "ect" },
  chestGame: { name: "Chest Game Goron", region: "ect" },
  soundcheck: { name: "Soundcheck", region: "ect" },
  ectMailbox: {
    name: "Mailbox",
    region: "ect",
    linkedChecks: ["sctMailbox", "nctMailbox"],
  },

  // Stock Pot Inn
  innReservation: { name: "Inn Reservation", region: "spi" },
  midnightMeeting: { name: "Midnight Meeting", region: "spi" },
  toiletHand: { name: "Toilet Hand", region: "spi" },
  guestRoom: { name: "Inn Guest Room", region: "spi" },
  staffRoom: { name: "Inn Staff Room", region: "spi" },
  grannyStories1: { name: "Grandma Short Story", region: "spi" },
  grannyStories2: { name: "Grandma Long Story", region: "spi" },

  // West Clock Town
  allNightMaskPurchase: { name: "All Night Mask Purchase", region: "wct" },
  bank1: { name: "Bank Reward #1", region: "wct" },
  bank2: { name: "Bank Reward #2", region: "wct" },
  bank3: { name: "Bank Reward #3", region: "wct" },
  bombBag: { name: "Bomb Bag Purchase", region: "wct" },
  bigBombBag: { name: "Big Bomb Bag Purchase", region: "wct" },
  postmanGame: { name: "Postman's Game", region: "wct" },
  rosaSisters: { name: "Rosa Sisters", region: "wct" },
  swordsmanSchool: { name: "Swordsman's School", region: "wct" },

  // Laundry Pool
  guruGuru: { name: "Guru Guru", region: "lp" },
  kafei: { name: "Kafei", region: "lp" },
  curiosity1: { name: "Curiosity Shop Man #1", region: "lp" },
  curiosity2: { name: "Curiosity Shop Man #2", region: "lp" },

  // Termina Field
  telescope: { name: "Astronomy Telescope", region: "tf" },
  bioBaba: { name: "Bio Baba Grotto", region: "tf" },
  businessScrub: { name: "Business Scrub Purchase", region: "tf" },
  dodongoGrotto: { name: "Dodongo Grotto", region: "tf" },
  gossipStones: { name: "Gossip Stones", region: "tf" },
  kamaro: { name: "Kamaro", region: "tf" },
  peahat: { name: "Peahat Grotto", region: "tf" },
  grassChest: { name: "Termina Field Grass Chest", region: "tf" },
  grassGrotto: { name: "Termina Field Grass Grotto", region: "tf" },
  pillarGrotto: { name: "Termina Field Pillar Grotto", region: "tf" },
  stump: { name: "Termina Field Stump Chest", region: "tf" },
  tfUnderwaterChest: { name: "Termina Field Underwater Chest", region: "tf" },

  // Road to Southern Swamp
  rswGrotto: { name: "Path to Swamp Grotto", region: "rsw" },
  rswTree: { name: "Path to Swamp Tree", region: "rsw" },
  rswMapSwamp: {
    name: "Woodfall Map Purchase",
    region: "rsw",
    linkedChecks: ["nctMapSwamp"],
  },
  rswMapSnowhead: {
    name: "Snowhead Map Purchase",
    region: "rsw",
    linkedChecks: ["northMapSnowhead"],
  },
  swampArchery1: {
    name: "Swamp Archery #1",
    region: "rsw",
  },
  swampArchery2: {
    name: "Swamp Archery #2",
    region: "rsw",
  },

  // Southern Swamp
  swampBombBag: {
    name: "Biggest Bomb Bag Purchase",
    region: "ssw",
    linkedChecks: ["northBombBag"],
  },
  kotake: { name: "Kotake", region: "ssw" },
  koume: { name: "Koume", region: "ssw" },
  woodsGrotto: { name: "Mystery Woods Grotto", region: "ssw" },
  pictographContest: { name: "Pictograph Contest", region: "ssw" },
  landTitleDeed: { name: "Swamp Scrub Trade", region: "ssw" },
  boatArchery: { name: "Swamp Archery", region: "ssw" },
  swampGrotto: { name: "Swamp Grotto", region: "ssw" },
  swampSpiderHouse: { name: "Swamp Spider House", region: "ssw" },
  swampRoof: { name: "Tourist Center Roof", region: "ssw" },

  // Deku Palace
  beanGrotto: { name: "Bean Grotto", region: "pal" },
  beanSalesman: { name: "Bean Salesman", region: "pal" },
  butler: { name: "Deku Butler", region: "pal" },
  palaceGarden: { name: "Deku Palace West Garden", region: "pal" },
  songPalace: { name: "Imprisoned Monkey Song", region: "pal" },

  // Woodfall
  wfBridge: { name: "Woodfall Bridge", region: "wf" },
  wfEntrance: { name: "Woodfall Entrance", region: "wf" },
  wfOwl: { name: "Woodfall Owl", region: "wf" },

  // Woodfall Temple
  wftEntrance: { name: "Woodfall Entrance", region: "wft" },
  wftSmallKey: { name: "Woodfall Small Key", region: "wft" },
  wftMap: { name: "Woodfall Map", region: "wft" },
  wftCompass: { name: "Woodfall Compass", region: "wft" },
  wftDarkRoom: { name: "Woodfall Dark Room", region: "wft" },
  wftHeroBow: { name: "Hero Bow Chest", region: "wft" },
  wftBossKey: { name: "Woodfall Boss Key", region: "wft" },
  wftMainRoomSwitch: { name: "Woodfall Main Room Switch", region: "wft" },
  wftOdolwaHeart: { name: "Odolwa Heart Container", region: "wft" },
  songWftBossBlueWarp: {
    name: "Boss Blue Warp",
    region: "wft",
    linkedChecks: [
      "songShtBossBlueWarp",
      "songGbtBossBlueWarp",
      "songSttBossBlueWarp",
    ],
  },

  // Mountain Village
  darmani: { name: "Darmani", region: "vil" },
  hungryGoron: { name: "Hungry Goron", region: "vil" },
  smithy1: { name: "Mountain Smithy Day 1", region: "vil" },
  smithy2: { name: "Mountain Smithy Day 2", region: "vil" },
  springGrotto: { name: "Mountain Spring Grotto", region: "vil" },
  springWaterfall: { name: "Mountain Waterfall Chest", region: "vil" },

  // Twin Islands
  raceGrotto: { name: "Goron Racetrack Grotto", region: "twi" },
  goronRace: { name: "Goron Racetrack", region: "twi" },
  hotSpringGrotto: { name: "Hot Spring Water Grotto", region: "twi" },
  northMapRanch: {
    name: "Romani Ranch Purchase",
    region: "twi",
    linkedChecks: ["milkRoadMapRanch"],
  },
  northMapSnowhead: {
    name: "Snowhead Map Purchase",
    region: "twi",
    linkedChecks: ["rswMapSnowhead"],
  },
  springCave: { name: "Twin Islands Cave Chest", region: "twi" },
  springRamp: { name: "Twin Islands Underwater Ramp", region: "twi" },

  // Goron Village
  northBombBag: {
    name: "Biggest Bomb Bag Purchase",
    region: "gor",
    linkedChecks: ["swampBombBag"],
  },
  goronLedge: { name: "Goron Village  Ledge", region: "gor" },
  lensInvisible: { name: "Lens Cave Invisible Chest", region: "gor" },
  lensRock: { name: "Lens Cave Rock Chest", region: "gor" },
  lensChest: { name: "Lens of Truth Chest", region: "gor" },
  swampTitleDeed: { name: "Mountain Scrub Trade", region: "gor" },
  kegTrial: { name: "Powder Keg Challenge", region: "gor" },
  songGoron: { name: "Baby Goron", region: "gor" },

  // Path to Snowhead
  snowheadGrotto: { name: "Path to Snowhead Grotto", region: "psh" },
  snowheadPillar: { name: "Path to Snowhead Pillar", region: "psh" },

  // Snowhead Temple
  shtBridge: { name: "Snowhead Bridge Room Chest", region: "sht" },
  shtMap: { name: "Snowhead Map Chest", region: "sht" },
  shtMapLedge: { name: "Snowhead Map Room Ledge", region: "sht" },
  shtCompass: { name: "Snowhead Compass Chest", region: "sht" },
  shtIcePuzzle: { name: "Snowhead Ice Puzzle", region: "sht" },
  shtTwinLower: { name: "Snowhead Twin Block Lower", region: "sht" },
  shtTwinUpper: { name: "Snowhead Twin Block Upper", region: "sht" },
  shtBasement: { name: "Snowhead Basement", region: "sht" },
  shtPillarFreezards: { name: "Snowhead Pillar Freezards", region: "sht" },
  shtIcicleRoom: { name: "Snowhead Icicle Room Chest", region: "sht" },
  shtIcicleRoomWall: { name: "Snowhead Icicle Room Wall", region: "sht" },
  shtFireArrows: { name: "Fire Arrow Chest", region: "sht" },
  shtMainRoomWall: { name: "Snowhead Main Room Wall", region: "sht" },
  shtBossKey: { name: "Snowhead Boss Key", region: "sht" },
  shtGohtHeart: { name: "Goht Heart Container", region: "sht" },
  songShtBossBlueWarp: {
    name: "Boss Blue Warp",
    region: "sht",
    linkedChecks: [
      "songWftBossBlueWarp",
      "songGbtBossBlueWarp",
      "songSttBossBlueWarp",
    ],
  },

  // Milk Road
  gormanRace: { name: "Gorman Bros Race", region: "mr" },
  milkRoadMapRanch: {
    name: "Romani Ranch Map Purchase",
    region: "mr",
    linkedChecks: ["northMapRanch"],
  },
  milkRoadMapBay: {
    name: "Great Bay Map Purchase",
    region: "mr",
    linkedChecks: ["coastMapBay"],
  },

  // Romani Ranch
  alienDefense: { name: "Alien Defense", region: "rr" },
  cremia: { name: "Cremia", region: "rr" },
  dogRace: { name: "Dog Race", region: "rr" },
  dogRaceChest: { name: "Doggy Racetrack Chest", region: "rr" },
  grog: { name: "Grog's Chickens", region: "rr" },
  songRomaniGame: { name: "Romani's Game", region: "rr" },

  // Great Bay Coast
  coastGrotto: { name: "Coast Grotto", region: "gbc" },
  coastLedge: { name: "Coast Ledge", region: "gbc" },
  coastMapBay: {
    name: "Great Bay Map Purchase",
    region: "gbc",
    linkedChecks: ["milkRoadMapBay"],
  },
  fishermanGame: { name: "Fisherman's Game", region: "gbc" },
  labFish: { name: "Lab Fish", region: "gbc" },
  mikau: { name: "Mikau", region: "gbc" },
  oceanSpiderChest: { name: "Ocean Spider House Chest", region: "gbc" },
  oceanSpider: { name: "Ocean Spider House Day 1 Reward", region: "gbc" },
  coastMapCanyon: {
    name: "Stone Tower Map Purchase",
    region: "gbc",
    linkedChecks: ["canyonMapStoneTower"],
  },
  songZoraEggs: { name: "Zora Eggs", region: "gbc" },

  // Zora Cape
  beavers1: { name: "Beaver Race #1", region: "zc" },
  capeGrotto: { name: "Zora Cape Grotto", region: "zc" },
  capeLedgeLower: { name: "Zora Cape Ledge Lower", region: "zc" },
  capeLedgeUpper: { name: "Zora Cape Ledge Upper", region: "zc" },
  likeLike: { name: "Zora Cape Like-Like", region: "zc" },
  capeUnderwaterChest: { name: "Zora Cape Underwater Chest", region: "zc" },

  // Zora Hall
  evan: { name: "Evan ( > > v A A v > A < < > v v > < v)", region: "zh" },
  luluLedge: { name: "Lulu's Room Ledge", region: "zh" },
  mountainTitleDeed: { name: "Ocean Scrub Trade", region: "zh" },
  stageLights: { name: "Stage Lights", region: "zh" },

  // Pirate's Fortress Exterior
  pfeCornerChest: {
    name: "Pirate's Fortress Exterior Corner Chest",
    region: "pfe",
  },
  pfeLogChest: { name: "Pirate's Fortress Exterior Log Chest", region: "pfe" },
  pfeSandChest: { name: "Pirate's Fortress Sand Chest", region: "pfe" },

  // Pirate's Fortress Sewer
  pfsCageChest: { name: "Pirate's Fortress Cage", region: "pfs" },
  pfsDeepChest: { name: "Pirate's Fortress Sewer Deep Chest", region: "pfs" },
  pfsShallowChest: {
    name: "Pirate's Fortress Sewer Shallow Chest",
    region: "pfs",
  },
  pfsMazeChest: { name: "Pirate's Fortress Maze Chest", region: "pfs" },

  // Pirate's Fortress Interior
  hookshotChest: { name: "Hookshot Chest", region: "pfi" },
  guardChest: { name: "Pirate's Fortress Guard Room Chest", region: "pfi" },
  pfiLowerChest: { name: "Pirate's Fortress Lower Chest", region: "pfi" },
  tankChest: { name: "Pirate's Fortress Tank Chest", region: "pfi" },
  pfiUpperChest: { name: "Pirate's Fortress Upper Chest", region: "pfi" },

  // Pinnacle Rock
  prLowerChest: { name: "Pinnacle Rock Lower Chest", region: "pr" },
  prUpperChest: { name: "Pinnacle Rock Upper Chest", region: "pr" },
  prSeahorses: { name: "Seahorses Heart Piece", region: "pr" },

  // Great Bay Temple
  gbtEntranceTorches: { name: "Great Bay Entrance Torches", region: "gbt" },
  gbtMapChest: { name: "Great Bay Map Chest", region: "gbt" },
  gbtBioBabas: { name: "Great Bay Bio Babas", region: "gbt" },
  gbtSmallKeyChest: { name: "Great Bay Small Key", region: "gbt" },
  gbtCompassChest: { name: "Great Bay Compass", region: "gbt" },
  gbtIceArrow: { name: "Ice Arrow Chest", region: "gbt" },
  gbtGreenValve: { name: "Great Bay Green Valve", region: "gbt" },
  gbtBossKey: { name: "Great Bay Boss Key", region: "gbt" },
  gbtWaterwheelLower: {
    name: "Great Bay Waterwheel Room Lower",
    region: "gbt",
  },
  gbtWaterwheelUpper: {
    name: "Great Bay Waterwheel Room Upper",
    region: "gbt",
  },
  gbtSeesawRoom: {
    name: "Great Bay Seesaw Room",
    region: "gbt",
  },
  gbtGyorgHeartContainer: { name: "Gyorg Heart Container", region: "gbt" },
  songGbtBossBlueWarp: {
    name: "Boss Blue Warp",
    region: "gbt",
    linkedChecks: [
      "songWftBossBlueWarp",
      "songShtBossBlueWarp",
      "songGbtBossBlueWarp",
    ],
  },

  // Path to Ikana
  shiro: { name: "Invisible Soldier (Shiro)", region: "rti" },
  ikanaGrotto: { name: "Path to Ikana Grotto", region: "rti" },
  ikanaPillar: { name: "Path to Ikana Pillar Chest", region: "rti" },

  // Ikana Graveyard
  keetaChest: { name: "Captain Keeta Chest", region: "gy" },
  dampeDigging: { name: "Dampe Digging", region: "gy" },
  graveBatsChest: { name: "Day 1 Grave Bats", region: "gy" },
  graveyardGrotto: { name: "Graveyard Grotto", region: "gy" },
  ironKnuckleChest: { name: "Iron Knucle Chest", region: "gy" },
  songGrave: { name: "Day 1 Grave Tablet", region: "gy" },

  // Ikana Canyon
  oceanTitleDeed: { name: "Canyon Scrub Trade", region: "can" },
  canyonMapTown: {
    name: "Clock Town Map Purchase",
    region: "can",
    linkedChecks: ["nctMapTown"],
  },
  canyonLedge: { name: "Ikana Canyon Ledge", region: "can" },
  pamela: { name: "Pamela's Father", region: "can" },
  poeHut: { name: "Poe Hut", region: "can" },
  secretShrineGrotto: { name: "Secret Shrine Grotto", region: "can" },
  canyonMapStoneTower: {
    name: "Stone Tower Map Purchase",
    region: "can",
    linkedChecks: ["coastMapCanyon"],
  },

  // Beneath the Well
  mirrorShieldChest: { name: "Mirror Shield Chest", region: "well" },
  leftWell: { name: "Well Left Path Chest", region: "well" },
  rightWell: { name: "Well Right Path Chest", region: "well" },

  // Ikana Castle
  castlePillar: { name: "Ikana Castle Pillar", region: "cas" },
  songIgos: { name: "Ikana King", region: "cas" },

  // Stone Tower
  stLeft: { name: "Inverted Stone Tower Left Chest", region: "st" },
  stCenter: { name: "Inverted Stone Tower Center Chest", region: "st" },
  stRight: { name: "Inverted Stone Tower Right Chest", region: "st" },

  // Stone Tower Temple
  sttLightArrow: {
    name: "Light Arrow Chest",
    region: "stt",
  },
  sttArmos: {
    name: "Stone Tower Armos Room Chest",
    region: "stt",
  },
  sttCompassChest: {
    name: "Stone Tower Compass Chest",
    region: "stt",
  },
  sttEyegoreRoomChest: {
    name: "Stone Tower Eyegore ROom Chest",
    region: "stt",
  },
  sttMapChest: {
    name: "Stone Tower Map Chest",
    region: "stt",
  },
  sttStatueEye: {
    name: "Stone Tower Statue Eye",
    region: "stt",
  },
  sttBasementLedge: {
    name: "Stone Tower Basement Ledge",
    region: "stt",
  },
  sttUnderWater: {
    name: "Stone Tower Underwater",
    region: "stt",
  },
  sttBridgeCrystal: {
    name: "Stone Tower Bridge Crystal",
    region: "stt",
  },
  sttMirrorSunSwitch: {
    name: "Stone Tower Mirror Sun Switch",
    region: "stt",
  },
  sttMirrorSunBlock: {
    name: "Stone Tower Mirror Sun Block",
    region: "stt",
  },
  sttLavaRoomLedge: {
    name: "Stone Tower Lava Room Ledge",
    region: "stt",
  },
  sttThinBridge: {
    name: "Stone Tower Thin Bridge",
    region: "stt",
  },
  sttEyegore: {
    name: "Stone Tower Eyegore",
    region: "stt",
  },
  isttGiantMask: {
    name: "Giant's Mask Chest",
    region: "stt",
  },
  isttDeathArmos: {
    name: "Stone Tower Death Armos Maze Chest",
    region: "stt",
  },
  isttUpdraftRoom: {
    name: "Stone Tower Updraft Room Chest",
    region: "stt",
  },
  isttEntranceSun: {
    name: "Stone Tower Entrance Sun Switch",
    region: "stt",
  },
  isttUpdraftFrozenEye: {
    name: "Stone Tower Updraft Frozen Eye",
    region: "stt",
  },
  isttWizzrobe: {
    name: "Stone Tower Wizzrobe",
    region: "stt",
  },
  isttBossKey: {
    name: "Stone Tower Boss Key",
    region: "stt",
  },
  isttTwinmoldHeartContainer: {
    name: "Twinmold Heat Container",
    region: "stt",
  },
  songSttBossBlueWarp: {
    name: "Boss Blue Warp",
    region: "stt",
    linkedChecks: [
      "songWftBossBlueWarp",
      "songShtBossBlueWarp",
      "songGbtBossBlueWarp",
    ],
  },

  // Secret Shrine
  shrineClear: { name: "Secret Shrine Clear Chest", region: "shr" },
  shrineDinolfos: { name: "Secret Shrine Dinolfos Chest", region: "shr" },
  shrineGaroMaster: { name: "Secret Shrine Garo Master Chest", region: "shr" },
  shrineWart: { name: "Secret Shrine Wart Chest", region: "shr" },
  shrineWizzrobe: { name: "Secret Shrine Wizzrobe Chest", region: "shr" },
};
