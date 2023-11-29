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

      if (items.includes(action.payload)) {
        return items.filter((item) => item !== action.payload);
      }

      return [...items, action.payload];
    }

    default:
      return items;
  }
};
