import bomb from "../assets/bomb.png";
import bombchu from "../assets/bombchu.png";
import bottle from "../assets/bottle.png";
import heroBow from "../assets/bow.png";
import dekuNut from "../assets/dekuNut.png";
import dekuPrincess from "../assets/dekuPrincess.png";
import dekuStick from "../assets/dekuStick.png";
import fireArrow from "../assets/fireArrow.png";
import gildedSword from "../assets/gildedSword.png";
import goldDust from "../assets/goldDust.png";
import gfs from "../assets/greatFairySword.png";
import hookshot from "../assets/hookshot.png";
import hylianShield from "../assets/hylianShield.png";
import iceArrow from "../assets/iceArrow.png";
import letterToKafei from "../assets/kafeiLetter.png";
import kokiriSword from "../assets/kokiriSword.png";
import landTitleDeed from "../assets/landTitleDeed.png";
import lensOfTruth from "../assets/lensOfTruth.png";
import letterToMama from "../assets/letterToMama.png";
import lightArrow from "../assets/lightArrow.png";
import magic from "../assets/magic.png";
import magicBean from "../assets/magicBean.png";
import moonTear from "../assets/moonTear.png";
import mountainTitleDeed from "../assets/mountainTitleDeed.png";
import ocarina from "../assets/ocarina.png";
import oceanTitleDeed from "../assets/oceanTitleDeed.png";
import pictograph from "../assets/pictographBox.png";
import keg from "../assets/powderKeg.png";
import razorSword from "../assets/razorSword.png";
import roomKey from "../assets/roomKey.png";
import swampTitleDeed from "../assets/swampTitleDeed.png";
import wallet from "../assets/wallet.png";
import { Item } from "../types";

export const items: Item[] = [
  {
    id: "ocarina",
    name: "Ocarina",
    type: "item",
    image: ocarina,
  },
  {
    id: "heroBow",
    name: "Hero Bow",
    type: "item",
    image: heroBow,
    quantity: 30,
  },
  {
    id: "heroBow2",
    name: "Hero Bow",
    type: "item",
    image: heroBow,
    quantity: 40,
  },
  {
    id: "heroBow3",
    name: "Hero Bow",
    type: "item",
    image: heroBow,
    quantity: 50,
  },
  {
    id: "fireArrow",
    name: "Fire Arrows",
    type: "item",
    image: fireArrow,
  },
  {
    id: "iceArrow",
    name: "Ice Arrow",
    type: "item",
    image: iceArrow,
  },
  {
    id: "lightArrow",
    name: "Light Arrow",
    type: "item",
    image: lightArrow,
  },
  {
    id: "moonTear",
    name: "Moon's Tear",
    type: "item",
    image: moonTear,
  },
  {
    id: "bomb",
    name: "Bombs",
    type: "item",
    image: bomb,
    quantity: 20,
  },
  {
    id: "bomb2",
    name: "Bombs",
    type: "item",
    image: bomb,
    quantity: 30,
  },
  {
    id: "bomb3",
    name: "Bombs",
    type: "item",
    image: bomb,
    quantity: 40,
  },
  {
    id: "keg",
    name: "Powder Keg",
    type: "item",
    image: keg,
  },
  {
    id: "magicBean",
    name: "Magic Bean",
    type: "item",
    image: magicBean,
  },
  {
    id: "roomKey",
    name: "Room Key",
    type: "item",
    image: roomKey,
  },
  {
    id: "letterToKafei",
    name: "Letter To Kafei",
    type: "item",
    image: letterToKafei,
  },
  {
    id: "landTitleDeed",
    name: "Land Title Deed",
    type: "item",
    image: landTitleDeed,
  },
  {
    id: "bottle1",
    name: "Bottle",
    type: "item",
    image: bottle,
    quantity: 1,
  },
  {
    id: "pictographBox",
    name: "Pictograph Box",
    type: "item",
    image: pictograph,
  },
  {
    id: "lensOfTruth",
    name: "Lens of Truth",
    type: "item",
    image: lensOfTruth,
  },
  {
    id: "hookshot",
    name: "Hookshot",
    type: "item",
    image: hookshot,
  },
  {
    id: "gfs",
    name: "Great Fairy Sword",
    type: "item",
    image: gfs,
  },
  {
    id: "swampTitleDeed",
    name: "Swamp Title Deed",
    type: "item",
    image: swampTitleDeed,
  },
  {
    id: "goldDust",
    name: "Gold Dust",
    type: "item",
    image: goldDust,
  },
  {
    id: "dekuPrincess",
    name: "Deku Princess",
    type: "item",
    image: dekuPrincess,
  },
  {
    id: "sword",
    name: "Kokiri Sword",
    type: "item",
    image: kokiriSword,
  },
  {
    id: "sword2",
    name: "Razor Sword",
    type: "item",
    image: razorSword,
  },
  {
    id: "sword3",
    name: "Gilded Sword",
    type: "item",
    image: gildedSword,
  },
  {
    id: "shield",
    name: "Hylian Shield",
    type: "item",
    image: hylianShield,
  },
  {
    id: "wallet",
    name: "Adult Wallet",
    type: "item",
    image: wallet,
    quantity: 200,
  },
  {
    id: "wallet2",
    name: "Giant Wallet",
    type: "item",
    image: wallet,
    quantity: 500,
  },
  {
    id: "magic",
    name: "Magic",
    type: "item",
    image: magic,
  },
  {
    id: "mountainTitleDeed",
    name: "Mountain Title Deed",
    type: "item",
    image: mountainTitleDeed,
  },
  {
    id: "oceanTitleDeed",
    name: "Ocean Title Deed",
    type: "item",
    image: oceanTitleDeed,
  },
  {
    id: "letterToMama",
    name: "Letter to Mama",
    type: "item",
    image: letterToMama,
  },
  {
    id: "dekuNut",
    name: "Deku Nut",
    type: "item",
    image: dekuNut,
  },
  {
    id: "dekuStick",
    name: "Deku Stick",
    type: "item",
    image: dekuStick,
  },
  {
    id: "bombchu",
    name: "Bombchu",
    type: "item",
    image: bombchu,
  },
];
