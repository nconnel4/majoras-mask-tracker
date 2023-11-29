import bomb from "../assets/bomb.png";
import heroBow from "../assets/bow.png";
import fireArrow from "../assets/fireArrow.png";
import hookshot from "../assets/hookshot.png";
import iceArrow from "../assets/iceArrow.png";
import lightArrow from "../assets/lightArrow.png";
import moonTear from "../assets/moonTear.png";
import ocarina from "../assets/ocarina.png";
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
    id: "hookshot",
    name: "Hookshot",
    type: "item",
    image: hookshot,
  },
];
