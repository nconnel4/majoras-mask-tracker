import { Items } from "@/features/items";

type items = keyof Items;

export type InventoryItems = {
  [key in items]: boolean;
};
