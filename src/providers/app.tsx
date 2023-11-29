import * as React from "react";

import { InventoryProvider } from "@/features/inventory";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return <InventoryProvider>{children}</InventoryProvider>;
};
