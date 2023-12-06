import { Check } from "../types/index.ts";

export const checks: Check[] = [
  {
    id: "clockTower",
    name: "Clock Tower Ledge",
    regions: ["sct"],
    requirements: [],
  },
  {
    id: "strawRoof",
    name: "Straw Roof Chest",
    regions: ["sct"],
    requirements: [["hookshot"], ["dekuMask", "moonTear"]],
    peekRequirements: [],
  },
  {
    id: "townDeed",
    name: "Moon Tear Trade",
    regions: ["sct"],
    requirements: [["moonTear"]],
  },
  {
    id: "sctTower",
    name: "Day 3 Tower",
    regions: ["sct"],
    requirements: [["hookshot"], ["dekuMask", "moonTear"]],
  },
  {
    id: "mailbox",
    name: "Mailbox",
    regions: ["sct", "wct", "nct"],
    requirements: [["postmanHat"]],
  },
];
