import { Items } from "@/features/inventory";

export const getLogic = (inventory: Items) => {
  // Item Checks
  const hasProjectile =
    inventory.maskZora ||
    inventory.heroBow ||
    inventory.hookshot ||
    (inventory.maskDeku && inventory.magic);
  const hasLongProjectile = inventory.hookshot || inventory.heroBow;
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
    inventory.maskZora;
  const hasPalaceAccess = hasSwampAcess && inventory.maskDeku;
  const hasWoodfallTempleAccess =
    inventory.maskDeku &&
    inventory.ocarina &&
    inventory.songSonata &&
    hasSwampAcess;
  const canClearWoodfallTemple = hasWoodfallTempleAccess && inventory.heroBow;
  const hasCoastAccess = inventory.ocarina && inventory.songEpona;
  const canClearOceanSpider =
    hasCoastAccess && inventory.hookshot && hasExplosives && canUseFireArrows;
  const hasZoraHallAccess = hasCoastAccess && inventory.maskZora;
  const hasPirateFortressAccess = hasCoastAccess && inventory.maskZora;
  const hasPFSewerAccess = hasPirateFortressAccess && inventory.maskGoron;
  const hasPFInteriorAccess =
    hasPirateFortressAccess && (inventory.maskGoron || inventory.hookshot);
  const hasGreatBayTempleAccess =
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
  const hasCanyonAccess =
    hasGraveyardAccess &&
    inventory.hookshot &&
    (inventory.maskGibdo || inventory.maskGaro);
  const hasUpperCanyonAccess = hasCanyonAccess && canUseIceArrows;
  const hasShrineAccess = hasCanyonAccess && canUseLightArrows;
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
    mailbox: inventory.maskPostmanHat,

    // NorthClockTown
    nctTree: true,
    mapTown: hasProjectile,
    mapSwamp: hasProjectile,
    strayFairyHuman: true,
    strayFairyTransformation:
      inventory.maskDeku || inventory.maskZora || inventory.maskGoron,
    bomberKids: hasProjectile,
    dekuPlayground: inventory.maskDeku,
    oldLady: true,

    // West Clock Town
    bombBag: true,
    bigBombBag: true,
    swordsmanSchool: true,
    postman: inventory.maskBunnyHood,
    bank1: true,
    bank2: inventory.wallet,
    bank3: inventory.wallet2,
    allNightMaskPurchase: inventory.wallet2,
    rosaSisters: inventory.maskKamaro,

    // East Clock Town
    sewer: hasProjectile && hasExplosives,
    madamAroma: true,
    ectChest: true,
    honeyDarling:
      inventory.bomb ||
      inventory.heroBow ||
      (inventory.maskDeku && inventory.magic),
    townArchery: inventory.heroBow,
    chestGame: inventory.maskGoron,
    aromaBar: inventory.letterToMama && inventory.maskKafei,
    postmanFreedom: inventory.letterToMama,
    soundcheck:
      inventory.maskGoron &&
      inventory.maskDeku &&
      inventory.maskZora &&
      inventory.maskRomani &&
      inventory.ocarina,

    // Stock Pot Inn
    stockPotKey: true,
    midnightMeeting:
      inventory.maskKafei && (inventory.maskDeku || inventory.roomKey),
    toiletHand:
      inventory.landTitleDeed ||
      inventory.swampTitleDeed ||
      inventory.mountainTitleDeed ||
      inventory.letterToKafei ||
      inventory.letterToMama,
    staffRoom: true,
    guestRoom: inventory.roomKey,
    grannyStories1: inventory.maskAllNight,
    grannyStories2: inventory.maskAllNight,

    // Termina Field
    telescope: hasProjectile,
    dodongos: true,
    pillarGrotto: true,
    businessScrub: inventory.wallet,
    grassChest: true,
    grassGrotto: true,
    stump: inventory.hookshot || (inventory.magicBean && inventory.bottle1),
    peahat: true,
    water: inventory.maskZora,
    bioBaba: inventory.maskZora && (hasExplosives || inventory.maskGoron),
    gossips:
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
    rswTruee: hasProjectile,
    mapSnowhead: hasProjectile,
    swampArchery1: inventory.heroBow,
    swampArchery2: inventory.heroBow,

    // Southern Swamp
    roof: inventory.landTitleDeed && inventory.maskDeku,
    woodsGrotto: true,
    koume: true,
    kotake: true,
    swampGrotto: hasSwampAcess,
    contest: inventory.pictographBox,
    landTitleDeed: inventory.landTitleDeed,
    boatArchery: canClearWoodfallTemple,
    swampSpiderHouse: false,

    // Deku Palace
    garden: hasPalaceAccess,
    beanGrotto: hasPalaceAccess && (inventory.hookshot || canUseMagicBean),
    beanSalesman: hasPalaceAccess,
    butler:
      hasPalaceAccess && (canClearWoodfallTemple || inventory.dekuPrincess),
    songPalace: hasPalaceAccess && inventory.ocarina,

    // Woodfall
    wfEntrance: hasPalaceAccess,
    wfOwl: hasPalaceAccess,
    wfBridge: hasPalaceAccess,

    // Milk Road
    mapRanch: hasProjectile,
    mapBay: hasProjectile,
    gormanRace: inventory.ocarina && inventory.songEpona,

    // Romani Ranch
    dogChest: canUseMagicBean || inventory.maskZora || inventory.hookshot,
    dogRace: inventory.maskTruth,
    chicks: inventory.maskBremen,
    aliens: inventory.heroBow && canUseKeg,
    cremia: inventory.heroBow && canUseKeg,
    songRomaniGame: canUseKeg,

    // Great Bay Coast
    coastGrotto: hasCoastAccess,
    labFish: hasCoastAccess && inventory.bottle1,
    mapCanyon: hasCoastAccess && hasLongProjectile,
    coastLedge:
      hasCoastAccess &&
      canUseMagicBean &&
      inventory.hookshot &&
      inventory.ocarina,
    mikau: hasCoastAccess && inventory.ocarina && inventory.songHealing,
    fisherman: canClearGreatBayTemple,
    oceanSpider: canClearOceanSpider,
    oceanSpiderChest:
      hasExplosives &&
      inventory.hookshot &&
      inventory.heroBow &&
      inventory.maskCaptainHat,

    // Zora Cape
    ledge1: hasCoastAccess && inventory.hookshot,
    ledge2: hasCoastAccess && inventory.hookshot,
    beaver: hasCoastAccess && inventory.hookshot && inventory.maskZora,
    likeLike: hasCoastAccess && inventory.maskZora,
    capeGrotto: hasCoastAccess && (hasExplosives || inventory.maskGoron),
    capeWater: hasCoastAccess && inventory.maskZora,

    // Zora Hall
    torches: hasZoraHallAccess && canUseFireArrows,
    evan: hasZoraHallAccess,
    luluLedge:
      hasZoraHallAccess &&
      inventory.mountainTitleDeed &&
      inventory.maskGoron &&
      inventory.maskDeku,
    mountainTitleDeed:
      hasZoraHallAccess && inventory.mountainTitleDeed && inventory.maskGoron,

    // PinnacleRock
    upperPR: hasPirateFortressAccess,
    lowerPR: hasPirateFortressAccess,
    seahorse:
      hasPirateFortressAccess && inventory.pictographBox && inventory.bottle1,

    // Pirate's Fortress Exterior
    sandChest: hasPirateFortressAccess,
    logChest: hasPirateFortressAccess,
    cornerChest: hasPirateFortressAccess,

    // Pirate's Fortress Sewer
    maze: hasPFSewerAccess,
    shallowChest: hasPFSewerAccess,
    deepChest: hasPFSewerAccess,
    cage: hasPFSewerAccess,

    // Pirate's Fortress Interior
    tank: hasPFInteriorAccess && inventory.hookshot,
    upperPF: hasPFInteriorAccess && inventory.hookshot,
    lowerPF: hasPFInteriorAccess,
    hookshotChest: hasPFInteriorAccess && hasProjectile,
    guardChest: hasPFInteriorAccess && inventory.hookshot,

    // Mountain Village
    smithy1: hasNorthAccess && canMeltIce && inventory.wallet,
    smithy2:
      hasNorthAccess && canMeltIce && inventory.goldDust && inventory.bottle1,
    hugo:
      hasNorthAccess &&
      inventory.maskGoron &&
      inventory.magic &&
      (canUseFireArrows || inventory.songLullaby),
    springWaterfall: canClearSnowhead,
    springGrotto: canClearSnowhead,
    darmani: canUseLens && inventory.songHealing && inventory.ocarina,

    // Twin Islands
    raceGrotto:
      hasNorthAccess &&
      hasExplosives &&
      (inventory.maskGoron || (inventory.ocarina && inventory.hookshot)),
    hotSpringGrotto: hasNorthAccess && canMeltIce,
    springRamp: canClearSnowhead,
    springCave: canClearSnowhead,
    goronRace: canClearSnowhead,

    // Goron Village
    goronLedge:
      hasNorthAccess && inventory.maskDeku && inventory.swampTitleDeed,
    swampTitleDeed:
      hasNorthAccess && inventory.maskDeku && inventory.swampTitleDeed,
    scrubBombBag: hasNorthAccess && inventory.maskGoron && inventory.wallet,
    kegTrial: hasNorthAccess && canUseFireArrows && inventory.maskGoron,
    lensChest: hasNorthAccess,
    lensRock: hasNorthAccess && hasExplosives,
    lensInvisible: hasNorthAccess,

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

    // Road to Ikana
    ikanaPillar: inventory.hookshot,
    ikanaGrotto: inventory.maskGoron,
    shiro: hasGraveyardAccess && canUseLens && inventory.bottle1,

    // Graveyard
    graveyardGrotto: hasGraveyardAccess && hasExplosives,
    keeta: hasGraveyardAccess && inventory.ocarina && inventory.songSonata,
    graveBats: hasGraveyardAccess && inventory.maskCaptainHat,
    ironKnuckle:
      hasGraveyardAccess && inventory.maskCaptainHat && hasExplosives,
    dampe: hasGraveyardAccess && inventory.maskCaptainHat && inventory.heroBow,
    songGrave: hasGraveyardAccess && inventory.maskCaptainHat,

    // Ikana Canyon
    canyonLedge:
      hasCanyonAccess &&
      inventory.maskDeku &&
      inventory.maskZora &&
      inventory.oceanTitleDeed,
    oceanTitleDeed:
      hasCanyonAccess && inventory.maskZora && inventory.oceanTitleDeed,
    shrineGrotto: hasCanyonAccess,
    pamela:
      hasUpperCanyonAccess &&
      inventory.ocarina &&
      inventory.songStorms &&
      inventory.songHealing,
    poeHut: hasUpperCanyonAccess,

    // SecretShrine
    shrineDinolfos: hasShrineAccess,
    shrineGaroMaster: hasShrineAccess,
    shrineWizzrobe: hasShrineAccess,
    shrineWart: hasShrineAccess,
    shrineClear: hasShrineAccess,

    // Beneath the Well
    leftWell: hasWellAccess && (inventory.wallet || inventory.maskScents),
    rightWell: hasWellAccess && (inventory.maskDeku || canUseLightArrows),
    mirrorShieldChest:
      (hasWellAccess && inventory.maskDeku) ||
      (hasUpperCanyonAccess && canUseLightArrows && canUseFireArrows),

    // Ikana Castle
    castlePillar:
      hasIkanaCastleAccess &&
      canUseFireArrows &&
      inventory.maskDeku &&
      canUseLens,
    songIgos:
      hasIkanaCastleAccess &&
      (canUseLightArrows ||
        (canUseFireArrows && canUseLens && canUseKeg && inventory.maskDeku)),

    // Stone Tower
    stLeft: hasInvertedStoneTowerAccess && canUseMagicBean,
    stCenter: hasInvertedStoneTowerAccess && canUseMagicBean,
    stRight: hasInvertedStoneTowerAccess && canUseMagicBean,

    // Woodfall Temple
    dragonflies: hasWoodfallTempleAccess,
    wfSmallKey: hasWoodfallTempleAccess,
    snappers: hasWoodfallTempleAccess,
    wtfDinolfos: hasWoodfallTempleAccess,
    odolwa: canClearWoodfallTemple,
    songWoodfallBBW: canClearWoodfallTemple,

    // Snowhead Temple,
    shtBridge:
      hasSnowheadAccess &&
      (canUseFireArrows || hasExplosives || inventory.hookshot),
    shtMap: hasSnowheadAccess,
    shtTwinLower: hasSnowheadAccess,
    shtIcicle:
      hasSnowheadAccess &&
      (canUseFireArrows || hasExplosives || inventory.hookshot),
    shtWizzrobe:
      hasSnowheadAccess &&
      (canUseFireArrows || hasExplosives || inventory.hookshot),
    goht: canClearSnowhead,
    songSnowheadBBW: canClearSnowhead,

    // Great Bay Temple
    gbtMap: hasGreatBayTempleAccess,
    gbtCompass: hasGreatBayTempleAccess,
    gbtUnderwater: hasGreatBayTempleAccess,
    gbtWart: hasGreatBayTempleAccess,
    gyorg: canClearGreatBayTemple,
    songGreatBayBBW: canClearGreatBayTemple,

    // Stone Tower Temple
    sttCompass:
      hasStoneTowerTempleAccess &&
      (canUseLightArrows || (inventory.mirrorShield && inventory.maskZora)),
    sttEyegoreRoom:
      hasStoneTowerTempleAccess &&
      ((canUseLightArrows && inventory.maskZora) ||
        (hasExplosives && inventory.maskGoron)),
    sttMap:
      hasStoneTowerTempleAccess &&
      (((inventory.mirrorShield || canUseLightArrows) &&
        hasExplosives &&
        inventory.maskGoron) ||
        (canUseLightArrows && inventory.maskZora)),
    sttArmos:
      hasStoneTowerTempleAccess &&
      (((inventory.mirrorShield || canUseLightArrows) &&
        hasExplosives &&
        inventory.maskGoron) ||
        (canUseLightArrows && inventory.maskZora)),
    sttGaroMaster:
      hasStoneTowerTempleAccess &&
      (canUseLightArrows ||
        (inventory.maskDeku &&
          inventory.mirrorShield &&
          inventory.maskGoron &&
          inventory.maskZora &&
          hasExplosives)),

    // Inverted Stone Tower Temple
    isttUpdraft: hasInvertedStoneTowerAccess && inventory.maskDeku,
    isttGiantMask: hasInvertedStoneTowerAccess && inventory.maskDeku,
    isttDeathArmos: hasInvertedStoneTowerAccess && inventory.maskDeku,
    isttTwinmold: canClearStoneTowerTemple,
    songSttBBW: canClearStoneTowerTemple,
  };
};
