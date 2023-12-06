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
  {
    id: "nctTree",
    name: "North Clock Town Tree",
    regions: ["nct"],
    requirements: [],
  },
  {
    id: "townMap",
    name: "Town Map",
    regions: ["nct"],
    requirements: [
      ["heroBow"],
      ["dekuMask", "magic"],
      ["hookshot"],
      ["zoraMask"],
    ],
    peekRequirements: [],
  },
  {
    id: "swampMap",
    name: "Swamp Map",
    regions: ["nct", "rsw"],
    requirements: [
      ["heroBow"],
      ["dekuMask", "magic"],
      ["hookshot"],
      ["zoraMask"],
    ],
    peekRequirements: [],
  },
  {
    id: "bomberKids",
    name: "Bomber's Game",
    regions: ["nct"],
    requirements: [
      ["heroBow"],
      ["dekuMask", "magic"],
      ["hookshot"],
      ["zoraMask"],
    ],
  },
  {
    id: "dekuPlayground",
    name: "Deku Playground",
    regions: ["nct"],
    requirements: [["dekuMask"]],
  },
  {
    id: "strayFairyHuman",
    name: "Stray Fairy Human",
    regions: ["nct"],
    requirements: [],
  },
  {
    id: "strayFairyTransformation",
    name: "Stray Fairy Transformation",
    regions: ["nct"],
    requirements: [["dekuMask"], ["goronMask"], ["zoraMask"]],
  },
];
