import { Checks } from "@/features/checks";
import { Items } from "@/features/items";

export type Setting = {
  initialItems: (keyof Items)[];
  checks: Partial<keyof Checks>[];
};
