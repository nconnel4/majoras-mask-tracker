import heroBow from "../assets/bow.png";
import fireArrow from "../assets/fireArrow.png";
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
];
