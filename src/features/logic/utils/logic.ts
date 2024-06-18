import { Checks } from "@/features/checks";
import { InventoryItems } from "@/features/inventory";

type Logic = {
  [K in keyof Checks]: boolean;
};

export const getLogic = (inventory: InventoryItems): Logic => {
  // Item Checks
  const hasProjectile =
    inventory.maskZora ||
    inventory.heroBow ||
    inventory.hookshot ||
    (inventory.maskDeku && inventory.magic);
  const hasLongProjectile = inventory?.hookshot || inventory.heroBow;
  const hasExplosives = inventory.bomb || inventory.maskBlast;
  const canUseFireArrows =
    inventory.heroBow && inventory.fireArrow && inventory.magic;
  const canUseIceArrows =
    inventory.heroBow && inventory.iceArrow && inventory.magic;
  const canUseLightArrows =
    inventory.heroBow && inventory.lightArrow && inventory.magic;
  const canUseMagicBean =
    inventory.magicBean && (inventory.bottle1 || inventory.songStorms);
  const canUseKeg = inventory.keg && inventory.maskGoron;
  const canUseLens = inventory.lensOfTruth && inventory.magic;

  const hasSwampAcess =
    (inventory.maskDeku &&
      (inventory.bottle1 || inventory.hookshot || inventory.heroBow)) ||
    inventory.maskZora ||
    inventory.pictographBox;
  const hasPalaceAccess = hasSwampAcess && inventory.maskDeku;
  const hasWoodfallTempleAccess =
    inventory.maskDeku &&
    inventory.ocarina &&
    inventory.songSonata &&
    hasSwampAcess;
  const canClearWoodfallTemple = hasWoodfallTempleAccess && inventory.heroBow;
  const hasCoastAccess = inventory.ocarina && inventory.songEpona;
  const hasZoraHallAccess = hasCoastAccess && inventory.maskZora;
  const hasPirateFortressAccess = hasCoastAccess && inventory.maskZora;
  const hasPFSewerAccess = hasPirateFortressAccess && inventory.maskGoron;
  const hasPFInteriorAccess =
    hasPirateFortressAccess && (inventory.maskGoron || inventory.hookshot);
  const hasGreatBayTempleAccess =
    hasCoastAccess &&
    inventory.maskZora &&
    inventory.ocarina &&
    inventory.songNewWave &&
    inventory.hookshot;
  const canClearGreatBayTemple =
    hasGreatBayTempleAccess && canUseFireArrows && canUseIceArrows;
  const hasNorthAccess =
    inventory.heroBow &&
    (hasExplosives || inventory.maskGoron || canUseFireArrows);
  const hasSnowheadAccess =
    hasNorthAccess &&
    inventory.maskGoron &&
    inventory.magic &&
    inventory.ocarina &&
    inventory.songLullaby;
  const canClearSnowhead = hasSnowheadAccess && canUseFireArrows;
  const hasGraveyardAccess = inventory.ocarina && inventory.songEpona;
  const hasLowerCanyonAccess =
    hasGraveyardAccess &&
    inventory.hookshot &&
    (inventory.maskGibdo || inventory.maskGaro);
  const hasUpperCanyonAccess = hasLowerCanyonAccess && canUseIceArrows;
  const hasShrineAccess = hasLowerCanyonAccess && canUseLightArrows;
  const hasWellAccess =
    hasUpperCanyonAccess && inventory.maskGibdo && inventory.bottle1;
  const hasIkanaCastleAccess =
    hasUpperCanyonAccess && (inventory.mirrorShield || canUseLightArrows);
  const hasStoneTowerTempleAccess =
    hasUpperCanyonAccess &&
    inventory.ocarina &&
    inventory.songElegy &&
    (inventory.maskZora || inventory.maskGoron);
  const hasInvertedStoneTowerAccess =
    hasStoneTowerTempleAccess && canUseLightArrows;
  const canClearStoneTowerTemple =
    hasInvertedStoneTowerAccess &&
    inventory.maskDeku &&
    (inventory.maskGiant || inventory.maskFierceDeity);

  const canMeltIce =
    canUseFireArrows ||
    (hasNorthAccess && canUseLens && inventory.maskGoron) ||
    (hasWellAccess && inventory.maskDeku);

  return {
    // Clock Tower Roof
    songSkullKid: hasProjectile || inventory.bomb,

    // South Clock Town
    clockTower: true,
    strawRoof: inventory.hookshot || (inventory.maskDeku && inventory.moonTear),
    moonTearTrade: inventory.moonTear,
    sctTower: inventory.hookshot || (inventory.maskDeku && inventory.moonTear),
    sctMailbox: inventory.maskPostmanHat,

    // NorthClockTown
    nctTree: true,
    nctMapTown: hasProjectile,
    nctMapSwamp: hasProjectile,
    strayFairyHuman: true,
    strayFairyTransformation:
      inventory.maskDeku || inventory.maskZora || inventory.maskGoron,
    bomberKids: hasProjectile,
    dekuPlayground: inventory.maskDeku,
    nctKeaton: inventory.maskKeaton,
    oldLady: true,
    nctMailbox: inventory.maskPostmanHat,

    // West Clock Town
    bombBag: true,
    bigBombBag: true,
    swordsmanSchool: true,
    postmanGame: inventory.maskBunnyHood,
    bank1: true,
    bank2: inventory.wallet,
    bank3: inventory.wallet2,
    allNightMaskPurchase: inventory.wallet2,
    rosaSisters: inventory.maskKamaro,

    // East Clock Town
    bomberHideout: hasProjectile && hasExplosives,
    madameAroma: true,
    ectChest: true,
    honeyDarling:
      inventory.bomb ||
      inventory.heroBow ||
      (inventory.maskDeku && inventory.magic),
    townArchery1: inventory.heroBow,
    townArchery2: inventory.heroBow,
    chestGame: inventory.maskGoron,
    mayor: inventory.maskCouples,
    aromaBar: inventory.letterToMama && inventory.maskKafei,
    postmanFreedom: inventory.letterToMama,
    soundcheck:
      inventory.maskGoron &&
      inventory.maskDeku &&
      inventory.maskZora &&
      inventory.maskRomani &&
      inventory.ocarina,
    ectMailbox: inventory.maskPostmanHat,

    // Stock Pot Inn
    innReservation: true,
    midnightMeeting:
      inventory.maskKafei && (inventory.maskDeku || inventory.roomKey),
    toiletHand:
      inventory.landTitleDeed ||
      inventory.swampTitleDeed ||
      inventory.mountainTitleDeed ||
      inventory.oceanTitleDeed ||
      inventory.landTitleDeed ||
      inventory.letterToKafei ||
      inventory.letterToMama,
    staffRoom: true,
    guestRoom: inventory.roomKey,
    grannyStories1: inventory.maskAllNight,
    grannyStories2: inventory.maskAllNight,

    // Termina Field
    telescope: hasProjectile,
    dodongoGrotto: true,
    pillarGrotto: true,
    businessScrub: inventory.wallet,
    grassChest: true,
    grassGrotto: true,
    stump: inventory.hookshot || (inventory.magicBean && inventory.bottle1),
    peahat: true,
    tfUnderwaterChest: inventory.maskZora,
    bioBaba: inventory.maskZora && (hasExplosives || inventory.maskGoron),
    gossipStones:
      inventory.ocarina &&
      ((inventory.maskDeku && inventory.songSonata) ||
        (inventory.maskZora && inventory.songNewWave) ||
        (inventory.maskGoron && inventory.songLullaby)),
    kamaro: inventory.ocarina && inventory.songHealing,

    // Laundry Pool
    guruGuru: true,
    kafei: inventory.letterToKafei,
    curiosity1: inventory.letterToKafei,
    curiosity2: inventory.letterToKafei,

    // Road to Southern Swamp
    rswGrotto: true,
    rswTree: hasProjectile,
    rswMapSwamp: hasProjectile,
    rswMapSnowhead: hasProjectile,
    swampArchery1: inventory.heroBow,
    swampArchery2: inventory.heroBow,

    // Southern Swamp
    swampBombBag:
      hasNorthAccess &&
      inventory.moonTear &&
      inventory.landTitleDeed &&
      inventory.swampTitleDeed &&
      inventory.maskDeku &&
      inventory.wallet,
    swampRoof: inventory.landTitleDeed && inventory.maskDeku,
    woodsGrotto: true,
    koume: true,
    kotake: inventory.bottle1,
    swampGrotto: hasSwampAcess && (inventory.maskDeku || inventory.maskZora),
    pictographContest: inventory.pictographBox,
    landTitleDeed: inventory.landTitleDeed,
    boatArchery: canClearWoodfallTemple,
    swampSpiderHouse:
      hasSwampAcess &&
      (inventory.dekuStick || canUseFireArrows) &&
      inventory.bottle1 &&
      (inventory.maskZora ||
        (inventory.maskDeku &&
          (inventory.maskGoron ||
            inventory.hookshot ||
            (inventory.magicBean && inventory.bomb)))),

    // Deku Palace
    palaceGarden: hasPalaceAccess,
    beanGrotto: hasPalaceAccess && (inventory.hookshot || canUseMagicBean),
    beanSalesman: hasPalaceAccess,
    butler:
      hasPalaceAccess && (canClearWoodfallTemple || inventory.dekuPrincess),
    songPalace: hasPalaceAccess && inventory.ocarina,

    // Woodfall
    wfEntrance: hasPalaceAccess,
    wfOwl: hasPalaceAccess,
    wfBridge: hasPalaceAccess,

    // Woodfall Temple
    wftEntrance: hasWoodfallTempleAccess,
    wftDarkRoom:
      hasWoodfallTempleAccess && (inventory.dekuStick || canUseFireArrows),
    wftMainRoomSwitch: hasWoodfallTempleAccess,
    wftCompass: hasWoodfallTempleAccess,
    wftMap: hasWoodfallTempleAccess,
    wftSmallKey: hasWoodfallTempleAccess,
    wftHeroBow: hasWoodfallTempleAccess,
    wftBossKey: canClearWoodfallTemple,
    wftOdolwaHeart: canClearWoodfallTemple,
    songWftBossBlueWarp: canClearWoodfallTemple,

    // Mountain Village
    smithy1: hasNorthAccess && canMeltIce && inventory.wallet,
    smithy2:
      hasNorthAccess && canMeltIce && inventory.goldDust && inventory.bottle1,
    hungryGoron:
      hasNorthAccess &&
      inventory.maskGoron &&
      inventory.magic &&
      (canUseFireArrows || inventory.songLullaby),
    springWaterfall: canClearSnowhead,
    springGrotto: canClearSnowhead,
    darmani:
      hasNorthAccess &&
      canUseLens &&
      inventory.songHealing &&
      inventory.ocarina,

    // Twin Islands
    raceGrotto:
      hasNorthAccess &&
      hasExplosives &&
      (inventory.maskGoron || (inventory.ocarina && inventory.hookshot)),
    hotSpringGrotto: hasNorthAccess && canMeltIce && hasExplosives,
    northMapRanch: hasNorthAccess && hasProjectile,
    northMapSnowhead: hasNorthAccess && hasProjectile,
    springRamp: canClearSnowhead && inventory.maskZora,
    springCave: canClearSnowhead && inventory.maskZora,
    goronRace: canClearSnowhead,

    // Goron Village
    goronLedge:
      hasNorthAccess && inventory.maskDeku && inventory.swampTitleDeed,
    swampTitleDeed:
      hasNorthAccess && inventory.maskDeku && inventory.swampTitleDeed,
    northBombBag: hasNorthAccess && inventory.maskGoron && inventory.wallet,
    kegTrial: hasNorthAccess && canUseFireArrows && inventory.maskGoron,
    lensChest: hasNorthAccess,
    lensRock: hasNorthAccess && hasExplosives,
    lensInvisible: hasNorthAccess,
    songGoron: hasNorthAccess && inventory.maskGoron,

    // Path to Snowhead
    snowheadPillar:
      hasNorthAccess &&
      inventory.maskGoron &&
      inventory.magic &&
      inventory.ocarina &&
      inventory.lensOfTruth &&
      inventory.hookshot,
    snowheadGrotto:
      hasNorthAccess && inventory.maskGoron && inventory.magic && hasExplosives,

    // Snowhead Temple,
    shtBridge: hasSnowheadAccess && (canUseFireArrows || inventory.hookshot),
    shtMap: hasSnowheadAccess,
    shtMapLedge: hasSnowheadAccess && (canUseFireArrows || inventory.hookshot),
    shtCompass: hasSnowheadAccess,
    shtIcePuzzle: hasSnowheadAccess && canUseFireArrows,
    shtTwinLower: hasSnowheadAccess,
    shtTwinUpper:
      hasSnowheadAccess &&
      (inventory.hookshot || inventory.maskZora || canUseFireArrows),
    shtBasement: hasSnowheadAccess,
    shtPillarFreezards: hasSnowheadAccess && canUseFireArrows,
    shtIcicleRoom:
      hasSnowheadAccess &&
      (canUseFireArrows || hasExplosives || inventory.hookshot),
    shtIcicleRoomWall:
      hasSnowheadAccess &&
      (canUseFireArrows || inventory.hookshot || hasExplosives),
    shtFireArrows:
      hasSnowheadAccess &&
      (canUseFireArrows || hasExplosives || inventory.hookshot),
    shtMainRoomWall:
      hasSnowheadAccess && (canUseFireArrows || inventory.hookshot),
    shtBossKey: canClearSnowhead,
    shtGohtHeart: canClearSnowhead,
    songShtBossBlueWarp: canClearSnowhead,

    // Milk Road
    milkRoadMapRanch: hasProjectile,
    milkRoadMapBay: hasProjectile,
    gormanRace: inventory.ocarina && inventory.songEpona,

    // Romani Ranch
    dogRaceChest: canUseMagicBean || inventory.maskZora || inventory.hookshot,
    dogRace: inventory.maskTruth,
    grog: inventory.maskBremen,
    alienDefense: inventory.heroBow && canUseKeg,
    cremia: inventory.heroBow && canUseKeg,
    songRomaniGame: canUseKeg,

    // Great Bay Coast
    coastGrotto: hasCoastAccess,
    labFish: hasCoastAccess && inventory.bottle1,
    coastMapBay: hasCoastAccess && hasLongProjectile,
    coastMapCanyon: hasCoastAccess && hasLongProjectile,
    coastLedge:
      hasCoastAccess &&
      canUseMagicBean &&
      inventory.hookshot &&
      inventory.ocarina,
    mikau: hasCoastAccess && inventory.ocarina && inventory.songHealing,
    fishermanGame: canClearGreatBayTemple,
    oceanSpider:
      hasCoastAccess && inventory.hookshot && hasExplosives && canUseFireArrows,
    oceanSpiderChest:
      hasCoastAccess &&
      hasExplosives &&
      inventory.hookshot &&
      inventory.heroBow &&
      inventory.maskCaptainHat,
    songZoraEggs:
      hasPFInteriorAccess && inventory.bottle1 && inventory.hookshot,

    // Zora Cape
    capeLedgeLower: hasCoastAccess && inventory.hookshot,
    capeLedgeUpper: hasCoastAccess && inventory.hookshot,
    beavers1: hasCoastAccess && inventory.hookshot && inventory.maskZora,
    likeLike: hasCoastAccess && inventory.maskZora,
    capeGrotto: hasCoastAccess && (hasExplosives || inventory.maskGoron),
    capeUnderwaterChest: hasCoastAccess && inventory.maskZora,

    // Zora Hall
    stageLights: hasZoraHallAccess && canUseFireArrows,
    evan: hasZoraHallAccess,
    luluLedge:
      hasZoraHallAccess &&
      inventory.mountainTitleDeed &&
      inventory.maskGoron &&
      inventory.maskDeku,
    mountainTitleDeed:
      hasZoraHallAccess && inventory.mountainTitleDeed && inventory.maskGoron,

    // PinnacleRock
    prUpperChest: hasPirateFortressAccess,
    prLowerChest: hasPirateFortressAccess,
    prSeahorses:
      hasPirateFortressAccess && inventory.pictographBox && inventory.bottle1,

    // Pirate's Fortress Exterior
    pfeSandChest: hasPirateFortressAccess,
    pfeLogChest: hasPirateFortressAccess,
    pfeCornerChest: hasPirateFortressAccess,

    // Pirate's Fortress Sewer
    pfsMazeChest: hasPFSewerAccess,
    pfsShallowChest: hasPFSewerAccess,
    pfsDeepChest: hasPFSewerAccess,
    pfsCageChest: hasPFSewerAccess,

    // Pirate's Fortress Interior
    tankChest: hasPFInteriorAccess && inventory.hookshot,
    pfiUpperChest: hasPFInteriorAccess && inventory.hookshot,
    pfiLowerChest: hasPFInteriorAccess,
    hookshotChest:
      hasPFInteriorAccess &&
      (inventory.heroBow || (inventory.maskDeku && inventory.magic)),
    guardChest: hasPFInteriorAccess && inventory.hookshot,

    // Great Bay Temple
    gbtEntranceTorches: hasGreatBayTempleAccess,
    gbtMapChest: hasGreatBayTempleAccess,
    gbtBioBabas: hasGreatBayTempleAccess,
    gbtCompassChest: hasGreatBayTempleAccess,
    gbtSmallKeyChest: hasGreatBayTempleAccess,
    gbtIceArrow: hasGreatBayTempleAccess,
    gbtGreenValve: hasGreatBayTempleAccess && canUseIceArrows,
    gbtWaterwheelLower: hasGreatBayTempleAccess && canUseIceArrows,
    gbtWaterwheelUpper: hasGreatBayTempleAccess && canUseIceArrows,
    gbtBossKey: hasGreatBayTempleAccess && canUseIceArrows,
    gbtSeesawRoom: canClearGreatBayTemple,
    gbtGyorgHeartContainer: canClearGreatBayTemple,
    songGbtBossBlueWarp: canClearGreatBayTemple,

    // Road to Ikana
    ikanaPillar: inventory.hookshot,
    ikanaGrotto: inventory.maskGoron,
    shiro: hasGraveyardAccess && canUseLens && inventory.bottle1,

    // Graveyard
    graveyardGrotto: hasGraveyardAccess && hasExplosives,
    keetaChest:
      hasGraveyardAccess &&
      inventory.ocarina &&
      inventory.songSonata &&
      inventory.heroBow,
    graveBatsChest: hasGraveyardAccess && inventory.maskCaptainHat,
    ironKnuckleChest:
      hasGraveyardAccess && inventory.maskCaptainHat && hasExplosives,
    dampeDigging:
      hasGraveyardAccess &&
      inventory.maskCaptainHat &&
      (inventory.heroBow || inventory.maskZora),
    songGrave: hasGraveyardAccess && inventory.maskCaptainHat,

    // Ikana Canyon
    canyonLedge:
      hasLowerCanyonAccess &&
      inventory.maskDeku &&
      inventory.maskZora &&
      inventory.oceanTitleDeed,
    canyonMapTown: hasUpperCanyonAccess,
    canyonMapStoneTower: hasUpperCanyonAccess,
    oceanTitleDeed:
      hasLowerCanyonAccess && inventory.maskZora && inventory.oceanTitleDeed,
    secretShrineGrotto: hasLowerCanyonAccess,
    pamela:
      hasUpperCanyonAccess &&
      inventory.ocarina &&
      inventory.songStorms &&
      inventory.songHealing,
    poeHut: hasUpperCanyonAccess,

    // Beneath the Well
    leftWell: hasWellAccess && (inventory.wallet || inventory.maskScents),
    rightWell: hasWellAccess && (inventory.maskDeku || canUseLightArrows),
    mirrorShieldChest:
      (hasWellAccess &&
        (inventory.maskDeku || canUseLightArrows) &&
        inventory.bomb) ||
      (hasUpperCanyonAccess && canUseLightArrows && canUseFireArrows),

    // Ikana Castle
    castlePillar:
      hasIkanaCastleAccess &&
      canUseFireArrows &&
      inventory.maskDeku &&
      canUseLens,
    songIgos:
      hasIkanaCastleAccess &&
      canUseFireArrows &&
      inventory.mirrorShield &&
      (canUseLightArrows || (canUseLens && canUseKeg && inventory.maskDeku)),

    // Stone Tower
    stLeft: hasInvertedStoneTowerAccess && canUseMagicBean,
    stCenter: hasInvertedStoneTowerAccess && canUseMagicBean,
    stRight: hasInvertedStoneTowerAccess && canUseMagicBean,

    //

    //
    // // Stone Tower Temple
    sttCompassChest:
      hasStoneTowerTempleAccess &&
      (canUseLightArrows ||
        (inventory.mirrorShield &&
          inventory.maskZora &&
          inventory.maskGoron &&
          hasExplosives)),
    sttEyegoreRoomChest:
      hasStoneTowerTempleAccess &&
      ((canUseLightArrows && inventory.maskZora) ||
        (hasExplosives && inventory.maskGoron)),
    sttMapChest:
      hasStoneTowerTempleAccess &&
      (((inventory.mirrorShield || canUseLightArrows) &&
        hasExplosives &&
        inventory.maskGoron) ||
        (canUseLightArrows && inventory.maskZora)),
    sttStatueEye: hasStoneTowerTempleAccess,
    sttBasementLedge:
      hasStoneTowerTempleAccess &&
      ((inventory.maskGoron && hasExplosives) ||
        (canUseLightArrows && inventory.maskZora)),
    sttUnderWater:
      hasStoneTowerTempleAccess && canUseLightArrows && inventory.maskZora,
    sttBridgeCrystal:
      hasStoneTowerTempleAccess &&
      canUseLightArrows &&
      (inventory.maskZora ||
        (inventory.maskGoron && inventory.maskDeku && hasExplosives)),
    sttMirrorSunSwitch:
      hasStoneTowerTempleAccess &&
      (canUseLightArrows ||
        (inventory.maskGoron &&
          hasExplosives &&
          inventory.maskZora &&
          inventory.mirrorShield)),
    sttMirrorSunBlock:
      hasStoneTowerTempleAccess &&
      (canUseLightArrows ||
        (inventory.maskGoron &&
          hasExplosives &&
          inventory.maskZora &&
          inventory.mirrorShield)),
    sttLavaRoomLedge:
      hasStoneTowerTempleAccess &&
      inventory.maskDeku &&
      (canUseLightArrows ||
        (inventory.maskGoron &&
          hasExplosives &&
          inventory.maskZora &&
          inventory.mirrorShield)),
    sttThinBridge:
      (hasStoneTowerTempleAccess &&
        hasExplosives &&
        (canUseLightArrows ||
          (inventory.maskGoron &&
            inventory.mirrorShield &&
            inventory.maskZora &&
            inventory.maskDeku))) ||
      (hasInvertedStoneTowerAccess && inventory.maskDeku),
    sttEyegore:
      hasStoneTowerTempleAccess &&
      (canUseLightArrows ||
        (inventory.maskGoron &&
          hasExplosives &&
          inventory.maskZora &&
          inventory.mirrorShield &&
          inventory.maskDeku)),
    sttArmos:
      hasStoneTowerTempleAccess &&
      (((inventory.mirrorShield || canUseLightArrows) &&
        hasExplosives &&
        inventory.maskGoron) ||
        (canUseLightArrows && inventory.maskZora)),
    sttLightArrow:
      hasStoneTowerTempleAccess &&
      (canUseLightArrows ||
        (inventory.maskDeku &&
          inventory.mirrorShield &&
          inventory.maskGoron &&
          inventory.maskZora &&
          hasExplosives)),

    // Inverted Stone Tower Temple
    isttUpdraftRoom: hasInvertedStoneTowerAccess && inventory.maskDeku,
    isttUpdraftFrozenEye:
      hasInvertedStoneTowerAccess && inventory.maskDeku && canUseFireArrows,
    isttEntranceSun: hasInvertedStoneTowerAccess,
    isttWizzrobe: hasInvertedStoneTowerAccess && inventory.maskDeku,
    isttGiantMask: hasInvertedStoneTowerAccess && inventory.maskDeku,
    isttDeathArmos: hasInvertedStoneTowerAccess && inventory.maskDeku,
    isttBossKey: hasInvertedStoneTowerAccess && inventory.maskDeku,
    isttTwinmoldHeartContainer: canClearStoneTowerTemple,
    songSttBossBlueWarp: canClearStoneTowerTemple,

    // SecretShrine
    shrineDinolfos: hasShrineAccess,
    shrineGaroMaster: hasShrineAccess,
    shrineWizzrobe: hasShrineAccess,
    shrineWart: hasShrineAccess,
    shrineClear: hasShrineAccess,
  };
};
