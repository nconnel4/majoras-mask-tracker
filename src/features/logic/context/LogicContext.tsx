import * as React from "react";

import { InventoryContext } from "@/features/inventory";

import { getLogic } from "../utils/logic.ts";

type Logic = {
  [key: string]: boolean;
};

export const LogicContext = React.createContext<Logic>({});

type LogicProviderProps = {
  children: React.ReactNode;
};

export const LogicProvider = ({ children }: LogicProviderProps) => {
  const inventory = React.useContext(InventoryContext);
  const [logic, setLogic] = React.useState({});

  React.useEffect(() => {
    // @ts-expect-error inventory is not Partial<InventoryItems> from accumulator
    setLogic(getLogic(inventory));
  }, [inventory]);

  return (
    <LogicContext.Provider value={logic}>{children}</LogicContext.Provider>
  );
};
