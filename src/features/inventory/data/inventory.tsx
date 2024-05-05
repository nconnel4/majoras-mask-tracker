import { items } from "@/features/items";

import { InventoryItems } from "../types";

export const inventory: Partial<InventoryItems> = Object.keys(items).reduce(
  (accumulator, currentValue) => ({
    ...accumulator,
    [currentValue]: false,
  }),
  {},
);
