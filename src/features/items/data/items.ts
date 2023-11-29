import heroBow from "../assets/bow.png";
import fireArrow from "../assets/fireArrow.png";
import iceArrow from "../assets/iceArrow.png";
import lightArrow from "../assets/lightArrow.png";
import { Item } from "../types";

export const items: Item[] = [
  {
    id: "heroBow",
    name: "Hero Bow",
    type: "item",
    image: heroBow,
    quantity: 30,
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
];
