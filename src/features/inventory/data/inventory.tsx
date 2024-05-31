import { items } from "@/features/items";

import { InventoryItems } from "../types";

export const inventory = Object.keys(items).reduce(
  (accumulator: Partial<InventoryItems>, currentValue) => ({
    ...accumulator,
    [currentValue]: false,
  }),
  {},
);
