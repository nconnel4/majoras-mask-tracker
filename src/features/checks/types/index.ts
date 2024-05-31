export type Region = {
  id: string;
  name: string;
};

export type Check = {
  name: string;
  linkedChecks?: (keyof Checks)[];
  region: string;
};

export type PlayerCheck = Check & {
  isComplete?: boolean;
  isActive?: boolean;
  canPeek?: boolean;
};

export type Checks = {
  // Clock Tower Roof
  songSkullKid: PlayerCheck;

  // South Clock Town
  clockTower: PlayerCheck;
  strawRoof: PlayerCheck;
  moonTearTrade: PlayerCheck;
  sctTower: PlayerCheck;
  sctMailbox: PlayerCheck;

  // North Clock Town
  nctTree: PlayerCheck;
  nctMapTown: PlayerCheck;
  nctMapSwamp: PlayerCheck;
  strayFairyHuman: PlayerCheck;
  strayFairyTransformation: PlayerCheck;
  bomberKids: PlayerCheck;
  dekuPlayground: PlayerCheck;
  nctKeaton: PlayerCheck;
  oldLady: PlayerCheck;
  nctMailbox: PlayerCheck;

  // East Clock Town
  bomberHideout: PlayerCheck;
  ectChest: PlayerCheck;
  soundcheck: PlayerCheck;
  honeyDarling: PlayerCheck;
  madameAroma: PlayerCheck;
  townArchery1: PlayerCheck;
  townArchery2: PlayerCheck;
  mayor: PlayerCheck;
  aromaBar: PlayerCheck;
  postmanFreedom: PlayerCheck;
  chestGame: PlayerCheck;
  ectMailbox: PlayerCheck;

  // Stock Pot Inn
  innReservation: PlayerCheck;
  midnightMeeting: PlayerCheck;
  toiletHand: PlayerCheck;
  staffRoom: PlayerCheck;
  guestRoom: PlayerCheck;
  grannyStories1: PlayerCheck;
  grannyStories2: PlayerCheck;

  // West Clock Town
  allNightMaskPurchase: PlayerCheck;
  bank1: PlayerCheck;
  bank2: PlayerCheck;
  bank3: PlayerCheck;
  bombBag: PlayerCheck;
  bigBombBag: PlayerCheck;
  postmanGame: PlayerCheck;
  rosaSisters: PlayerCheck;
  swordsmanSchool: PlayerCheck;

  // Laundry Pool
  guruGuru: PlayerCheck;
  kafei: PlayerCheck;
  curiosity1: PlayerCheck;
  curiosity2: PlayerCheck;

  // Termina Field
  telescope: PlayerCheck;
  bioBaba: PlayerCheck;
  businessScrub: PlayerCheck;
  dodongoGrotto: PlayerCheck;
  gossipStones: PlayerCheck;
  kamaro: PlayerCheck;
  peahat: PlayerCheck;
  grassChest: PlayerCheck;
  grassGrotto: PlayerCheck;
  pillarGrotto: PlayerCheck;
  stump: PlayerCheck;
  tfUnderwaterChest: PlayerCheck;

  // Road to Southern Swamp
  rswGrotto: PlayerCheck;
  rswTree: PlayerCheck;
  rswMapSwamp: PlayerCheck;
  rswMapSnowhead: PlayerCheck;
  swampArchery1: PlayerCheck;
  swampArchery2: PlayerCheck;

  // Southern Swamp
  swampBombBag: PlayerCheck;
  boatArchery: PlayerCheck;
  kotake: PlayerCheck;
  koume: PlayerCheck;
  woodsGrotto: PlayerCheck;
  swampGrotto: PlayerCheck;
  pictographContest: PlayerCheck;
  landTitleDeed: PlayerCheck;
  swampSpiderHouse: PlayerCheck;
  swampRoof: PlayerCheck;

  // Deku Palace
  beanGrotto: PlayerCheck;
  beanSalesman: PlayerCheck;
  butler: PlayerCheck;
  palaceGarden: PlayerCheck;
  songPalace: PlayerCheck;

  // Woodfall
  wfBridge: PlayerCheck;
  wfEntrance: PlayerCheck;
  wfOwl: PlayerCheck;

  // Woodfall Temple
  wftEntrance: PlayerCheck;
  wftDarkRoom: PlayerCheck;
  wftSmallKey: PlayerCheck;
  wftMainRoomSwitch: PlayerCheck;
  wftMap: PlayerCheck;
  wftCompass: PlayerCheck;
  wftHeroBow: PlayerCheck;
  wftBossKey: PlayerCheck;
  wftOdolwaHeart: PlayerCheck;
  songWftBossBlueWarp: PlayerCheck;

  // Mountain Village
  darmani: PlayerCheck;
  hungryGoron: PlayerCheck;
  smithy1: PlayerCheck;
  smithy2: PlayerCheck;
  springGrotto: PlayerCheck;
  springWaterfall: PlayerCheck;

  // Twin Islands
  raceGrotto: PlayerCheck;
  hotSpringGrotto: PlayerCheck;
  northMapRanch: PlayerCheck;
  northMapSnowhead: PlayerCheck;
  springCave: PlayerCheck;
  springRamp: PlayerCheck;
  goronRace: PlayerCheck;

  // Goron Village
  northBombBag: PlayerCheck;
  goronLedge: PlayerCheck;
  lensChest: PlayerCheck;
  lensRock: PlayerCheck;
  lensInvisible: PlayerCheck;
  swampTitleDeed: PlayerCheck;
  kegTrial: PlayerCheck;
  songGoron: PlayerCheck;

  // Path to Snowhead
  snowheadGrotto: PlayerCheck;
  snowheadPillar: PlayerCheck;

  // Snowhead Temple
  shtBridge: PlayerCheck;
  shtMap: PlayerCheck;
  shtMapLedge: PlayerCheck;
  shtCompass: PlayerCheck;
  shtIcePuzzle: PlayerCheck;
  shtTwinLower: PlayerCheck;
  shtTwinUpper: PlayerCheck;
  shtBasement: PlayerCheck;
  shtPillarFreezards: PlayerCheck;
  shtIcicleRoom: PlayerCheck;
  shtIcicleRoomWall: PlayerCheck;
  shtFireArrows: PlayerCheck;
  shtMainRoomWall: PlayerCheck;
  shtBossKey: PlayerCheck;
  shtGohtHeart: PlayerCheck;
  songShtBossBlueWarp: PlayerCheck;

  // Milk Road
  milkRoadMapRanch: PlayerCheck;
  milkRoadMapBay: PlayerCheck;
  gormanRace: PlayerCheck;

  // Romani Ranch
  alienDefense: PlayerCheck;
  cremia: PlayerCheck;
  dogRace: PlayerCheck;
  dogRaceChest: PlayerCheck;
  grog: PlayerCheck;
  songRomaniGame: PlayerCheck;

  // Great Bay Coast
  coastGrotto: PlayerCheck;
  coastLedge: PlayerCheck;
  coastMapBay: PlayerCheck;
  coastMapCanyon: PlayerCheck;
  labFish: PlayerCheck;
  mikau: PlayerCheck;
  fishermanGame: PlayerCheck;
  oceanSpider: PlayerCheck;
  oceanSpiderChest: PlayerCheck;
  songZoraEggs: PlayerCheck;

  // Zora Cape
  beavers1: PlayerCheck;
  capeLedgeLower: PlayerCheck;
  capeLedgeUpper: PlayerCheck;
  capeGrotto: PlayerCheck;
  likeLike: PlayerCheck;
  capeUnderwaterChest: PlayerCheck;

  // Zora Hall
  evan: PlayerCheck;
  stageLights: PlayerCheck;
  luluLedge: PlayerCheck;
  mountainTitleDeed: PlayerCheck;

  // Pirate's Fortress Exterior
  pfeCornerChest: PlayerCheck;
  pfeLogChest: PlayerCheck;
  pfeSandChest: PlayerCheck;

  // Pirate's Fortress Sewers
  pfsCageChest: PlayerCheck;
  pfsShallowChest: PlayerCheck;
  pfsDeepChest: PlayerCheck;
  pfsMazeChest: PlayerCheck;

  // Pirate's Fortress Interior
  hookshotChest: PlayerCheck;
  guardChest: PlayerCheck;
  tankChest: PlayerCheck;
  pfiLowerChest: PlayerCheck;
  pfiUpperChest: PlayerCheck;

  // Pinnacle Rock
  prLowerChest: PlayerCheck;
  prUpperChest: PlayerCheck;
  prSeahorses: PlayerCheck;

  // Great Bay Temple
  gbtEntranceTorches: PlayerCheck;
  gbtCompassChest: PlayerCheck;
  gbtMapChest: PlayerCheck;
  gbtBioBabas: PlayerCheck;
  gbtSmallKeyChest: PlayerCheck;
  gbtIceArrow: PlayerCheck;
  gbtGreenValve: PlayerCheck;
  gbtWaterwheelLower: PlayerCheck;
  gbtWaterwheelUpper: PlayerCheck;
  gbtSeesawRoom: PlayerCheck;
  gbtBossKey: PlayerCheck;
  gbtGyorgHeartContainer: PlayerCheck;
  songGbtBossBlueWarp: PlayerCheck;

  // Path to Ikana
  ikanaPillar: PlayerCheck;
  ikanaGrotto: PlayerCheck;
  shiro: PlayerCheck;

  // Ikana Graveyard
  keetaChest: PlayerCheck;
  dampeDigging: PlayerCheck;
  graveBatsChest: PlayerCheck;
  graveyardGrotto: PlayerCheck;
  ironKnuckleChest: PlayerCheck;
  songGrave: PlayerCheck;

  // Ikana Canyon
  oceanTitleDeed: PlayerCheck;
  canyonMapTown: PlayerCheck;
  canyonLedge: PlayerCheck;
  pamela: PlayerCheck;
  poeHut: PlayerCheck;
  secretShrineGrotto: PlayerCheck;
  canyonMapStoneTower: PlayerCheck;

  // Beneath the Well
  mirrorShieldChest: PlayerCheck;
  leftWell: PlayerCheck;
  rightWell: PlayerCheck;

  // Ikana Castle
  castlePillar: PlayerCheck;
  songIgos: PlayerCheck;

  // Stone Tower
  stLeft: PlayerCheck;
  stCenter: PlayerCheck;
  stRight: PlayerCheck;

  // Stone Tower Temple
  sttLightArrow: PlayerCheck;
  sttArmos: PlayerCheck;
  sttCompassChest: PlayerCheck;
  sttEyegoreRoomChest: PlayerCheck;
  sttMapChest: PlayerCheck;
  sttStatueEye: PlayerCheck;
  sttBasementLedge: PlayerCheck;
  sttUnderWater: PlayerCheck;
  sttBridgeCrystal: PlayerCheck;
  sttMirrorSunSwitch: PlayerCheck;
  sttMirrorSunBlock: PlayerCheck;
  sttLavaRoomLedge: PlayerCheck;
  sttThinBridge: PlayerCheck;
  sttEyegore: PlayerCheck;

  // Inverted Stone Tower Temple
  isttGiantMask: PlayerCheck;
  isttDeathArmos: PlayerCheck;
  isttUpdraftRoom: PlayerCheck;
  isttEntranceSun: PlayerCheck;
  isttUpdraftFrozenEye: PlayerCheck;
  isttWizzrobe: PlayerCheck;
  isttBossKey: PlayerCheck;
  isttTwinmoldHeartContainer: PlayerCheck;
  songSttBossBlueWarp: PlayerCheck;

  // Secret Shrine
  shrineClear: PlayerCheck;
  shrineDinolfos: PlayerCheck;
  shrineGaroMaster: PlayerCheck;
  shrineWart: PlayerCheck;
  shrineWizzrobe: PlayerCheck;
};
