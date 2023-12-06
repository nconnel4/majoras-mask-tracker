import * as React from "react";

type inventoryItems = string[];

type InventoryAction = {
  type: "toggle";
  payload: string;
};

export const InventoryContext = React.createContext<inventoryItems>([]);
export const InventoryDispatchContext =
  React.createContext<React.Dispatch<InventoryAction> | null>(null);

type InventoryProviderProps = {
  children: React.ReactNode;
  initialItems?: string[];
};

export const InventoryProvider = ({
  children,
  initialItems = [],
}: InventoryProviderProps) => {
  const [items, dispatch] = React.useReducer(inventoryReducer, initialItems);

  return (
    <InventoryContext.Provider value={items}>
      <InventoryDispatchContext.Provider value={dispatch}>
        {children}
      </InventoryDispatchContext.Provider>
    </InventoryContext.Provider>
  );
};

const inventoryReducer = (
  items: inventoryItems,
  action: InventoryAction,
): inventoryItems => {
  switch (action.type) {
    case "toggle": {
      // bow
      if (action.payload === "heroBow" && items.includes("heroBow")) {
        return [...items, "heroBow2"];
      }
      if (action.payload === "heroBow2") {
        return [...items, "heroBow3"];
      }
      if (action.payload === "heroBow3") {
        return items.filter(
          (item) => !["heroBow", "heroBow2", "heroBow3"].includes(item),
        );
      }

      // bombs
      if (action.payload === "bomb" && items.includes("bomb")) {
        return [...items, "bomb2"];
      }
      if (action.payload === "bomb2") {
        return [...items, "bomb3"];
      }
      if (action.payload === "bomb3") {
        return items.filter(
          (item) => !["bomb", "bomb2", "bomb3"].includes(item),
        );
      }

      // sword
      if (action.payload === "sword" && items.includes("sword")) {
        return [...items, "sword2"];
      }
      if (action.payload === "sword2") {
        return [...items, "sword3"];
      }
      if (action.payload === "sword3") {
        return items.filter(
          (item) => !["sword", "sword2", "sword3"].includes(item),
        );
      }

      // shield
      if (action.payload === "shield" && items.includes("shield")) {
        return [...items, "mirrorShield"];
      }
      if (action.payload === "mirrorShield") {
        return items.filter(
          (item) => !["shield", "mirrorShield"].includes(item),
        );
      }

      // wallet
      if (action.payload === "wallet" && items.includes("wallet")) {
        return [...items, "wallet2"];
      }
      if (action.payload === "wallet2") {
        return items.filter((item) => !["wallet", "wallet2"].includes(item));
      }

      if (items.includes(action.payload)) {
        return items.filter((item) => item !== action.payload);
      }

      return [...items, action.payload];
    }

    default:
      return items;
  }
};
