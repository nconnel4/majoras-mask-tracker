import * as React from "react";

import type { Items } from "@/features/items";

import { inventory } from "../data/inventory";
import type { InventoryItems } from "../types";

type InventoryAction = {
  type: "toggle";
  payload: keyof Items;
};

export const InventoryContext =
  React.createContext<Partial<InventoryItems>>(inventory);
export const InventoryDispatchContext =
  React.createContext<React.Dispatch<InventoryAction> | null>(null);

type InventoryProviderProps = {
  children: React.ReactNode;
  initialItems: (keyof Items)[];
};

export const InventoryProvider = ({
  children,
  initialItems,
}: InventoryProviderProps) => {
  const startingInventory = inventory;
  for (let i = 0; i < initialItems.length; i++) {
    startingInventory[initialItems[i]] = true;
  }

  const [items, dispatch] = React.useReducer(
    inventoryReducer,
    startingInventory,
  );

  return (
    <InventoryContext.Provider value={items}>
      <InventoryDispatchContext.Provider value={dispatch}>
        {children}
      </InventoryDispatchContext.Provider>
    </InventoryContext.Provider>
  );
};

const inventoryReducer = (
  items: Partial<InventoryItems>,
  action: InventoryAction,
): Partial<InventoryItems> => {
  switch (action.type) {
    case "toggle": {
      // bow
      if (action.payload === "heroBow" && items.heroBow) {
        return { ...items, heroBow2: true };
      }
      if (action.payload === "heroBow2") {
        return { ...items, heroBow3: true };
      }
      if (action.payload === "heroBow3") {
        return {
          ...items,
          heroBow: false,
          heroBow2: false,
          heroBow3: false,
        };
      }

      // bombs
      if (action.payload === "bomb" && items.bomb) {
        return { ...items, bomb2: true };
      }
      if (action.payload === "bomb2") {
        return { ...items, bomb3: true };
      }
      if (action.payload === "bomb3") {
        return { ...items, bomb: false, bomb2: false, bomb3: false };
      }

      // sword
      if (action.payload === "sword" && items.sword) {
        return { ...items, sword2: true };
      }
      if (action.payload === "sword2") {
        return { ...items, sword3: true };
      }
      if (action.payload === "sword3") {
        return { ...items, sword: false, sword2: false, sword3: false };
      }

      // shield
      if (action.payload === "shield" && items.shield) {
        return { ...items, mirrorShield: true };
      }
      if (action.payload === "mirrorShield") {
        return { ...items, shield: false, mirrorShield: false };
      }

      // wallet
      if (action.payload === "wallet" && items.wallet) {
        return { ...items, wallet2: true };
      }
      if (action.payload === "wallet2") {
        return { ...items, wallet: false, wallet2: false };
      }

      return { ...items, [action.payload]: !items[action.payload] };
    }

    default:
      return items;
  }
};
